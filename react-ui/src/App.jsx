import React, { useMemo, useState, useCallback, useEffect } from 'react'

const SIZE = 8

const manhattan = (p1, p2) => Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y)

function findPath(grid, start, goal, heuristic = 'astar') {
  const pq = [{ pos: start, g: 0, h: manhattan(start, goal), path: [start] }]
  const visited = new Set()
  const exploredCells = []
  let nodesExplored = 0

  while (pq.length > 0) {
    pq.sort((a, b) => (heuristic === 'greedy' ? a.h - b.h : (a.g + a.h) - (b.g + b.h)))
    const current = pq.shift()
    const key = `${current.pos.x},${current.pos.y}`
    if (visited.has(key)) continue
    visited.add(key)
    exploredCells.push(current.pos)
    nodesExplored++

    if (current.pos.x === goal.x && current.pos.y === goal.y) {
      return { path: current.path, cost: current.g, nodesExplored, exploredCells }
    }

    const dirs = [[0,1],[1,0],[0,-1],[-1,0]]
    for (const [dx, dy] of dirs) {
      const nx = current.pos.x + dx
      const ny = current.pos.y + dy
      const nkey = `${nx},${ny}`
      if (nx>=0 && nx<SIZE && ny>=0 && ny<SIZE && grid[nx][ny]===0 && !visited.has(nkey)) {
        pq.push({ pos: {x:nx,y:ny}, g: current.g+1, h: manhattan({x:nx,y:ny}, goal), path: [...current.path, {x:nx,y:ny}] })
      }
    }
  }
  return null
}

function solveMultiGoal(grid, base, items, heuristic) {
  const goals = [items[0], items[1], items[2], base]
  let currentPos = base
  let totalPath = []
  let totalCost = 0
  let totalNodes = 0
  let allExplored = []

  for (const goal of goals) {
    const result = findPath(grid, currentPos, goal, heuristic)
    if (!result) return null
    totalPath = totalPath.concat(result.path.slice(1))
    totalCost += result.cost
    totalNodes += result.nodesExplored
    allExplored = allExplored.concat(result.exploredCells)
    currentPos = goal
  }
  return { path: [base, ...totalPath], cost: totalCost, nodesExplored: totalNodes, exploredCells: allExplored }
}

export default function App() {
  const [grid, setGrid] = useState(() => Array.from({length: SIZE},()=>Array(SIZE).fill(0)))
  const [base, setBase] = useState({x:0,y:0})
  const [items, setItems] = useState([{x:2,y:5},{x:5,y:2},{x:7,y:6}])
  const [mode, setMode] = useState('obstacle')
  const [showExplored, setShowExplored] = useState(true)
  const [animate, setAnimate] = useState(true)
  const [speed, setSpeed] = useState(80)
  const [cell, setCell] = useState(40)
  const [result, setResult] = useState(null)
  const [alg, setAlg] = useState('A*')

  const onCellClick = useCallback((x,y) => {
    setGrid(g => {
      const copy = g.map(row => row.slice())
      if (mode==='base') setBase({x,y})
      else if (mode==='item1'||mode==='item2'||mode==='item3') {
        const idx = {item1:0,item2:1,item3:2}[mode]
        const next = items.slice(); next[idx] = {x,y}; setItems(next)
      } else {
        copy[x][y] = copy[x][y]===0?1:0
      }
      return copy
    })
  }, [mode, items])

  const randomize = () => {
    const g = Array.from({length: SIZE},()=>Array(SIZE).fill(0))
    const b = {x: Math.floor(Math.random()*SIZE), y: Math.floor(Math.random()*SIZE)}
    const its = []
    for (let i=0;i<3;i++){
      let pos
      do {
        pos = {x: Math.floor(Math.random()*SIZE), y: Math.floor(Math.random()*SIZE)}
      } while ((pos.x===b.x && pos.y===b.y) || its.some(it=>it.x===pos.x&&it.y===pos.y))
      its.push(pos)
    }
    const num = Math.floor(Math.random()*8)+8
    for (let i=0;i<num;i++){
      const x=Math.floor(Math.random()*SIZE), y=Math.floor(Math.random()*SIZE)
      if ((x!==b.x||y!==b.y) && !its.some(it=>it.x===x&&it.y===y)) g[x][y]=1
    }
    setGrid(g); setBase(b); setItems(its); setResult(null)
  }

  const solve = (which) => {
    const res = solveMultiGoal(grid, base, items, which==='A*'?'astar':'greedy')
    setAlg(which)
    setResult(res)
  }

  // animation side-effect
  useEffect(() => {
    if (!result || !animate) return
    const path = result.path
    const ids = []
    path.forEach((p, idx) => {
      const id = setTimeout(() => {
        const el = document.querySelector(`[data-pos="${p.x},${p.y}"]`)
        if (el) {
          el.style.background = alg==='A*' ? '#2ecc71' : '#9b59b6'
          el.style.color = 'white'
          el.textContent = '→'
        }
      }, speed*idx)
      ids.push(id)
    })
    return () => ids.forEach(clearTimeout)
  }, [result, animate, speed, alg])

  const exploredSet = useMemo(() => new Set((result?.exploredCells||[]).map(p => `${p.x},${p.y}`)), [result])
  const pathSet = useMemo(() => new Set((result?.path||[]).map(p => `${p.x},${p.y}`)), [result])

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="rounded-xl border-4 border-amber-600 bg-white shadow-xl">
        <div className="border-b-4 border-amber-600 bg-gradient-to-r from-amber-50 to-amber-100 p-6">
          <h1 className="text-2xl font-bold text-amber-700">📦 Warehouse Item Retrieval (React + Tailwind)</h1>
          <p className="text-amber-800/80">A*/Greedy multi-goal pickup with configurable UI</p>
        </div>

        <div className="grid gap-4 p-6">
          <div className="flex flex-wrap items-center gap-2">
            <button className={`btn ${mode==='base'?'bg-amber-600 text-white':'bg-amber-100 text-amber-700'} px-3 py-2 rounded`} onClick={()=>setMode('base')}>Set Base</button>
            <button className={`btn ${mode==='item1'?'bg-amber-600 text-white':'bg-amber-100 text-amber-700'} px-3 py-2 rounded`} onClick={()=>setMode('item1')}>Item 1</button>
            <button className={`btn ${mode==='item2'?'bg-amber-600 text-white':'bg-amber-100 text-amber-700'} px-3 py-2 rounded`} onClick={()=>setMode('item2')}>Item 2</button>
            <button className={`btn ${mode==='item3'?'bg-amber-600 text-white':'bg-amber-100 text-amber-700'} px-3 py-2 rounded`} onClick={()=>setMode('item3')}>Item 3</button>
            <button className={`btn ${mode==='obstacle'?'bg-amber-600 text-white':'bg-amber-100 text-amber-700'} px-3 py-2 rounded`} onClick={()=>setMode('obstacle')}>Toggle Obstacle</button>
            <div className="ml-auto flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="accent-amber-600" checked={showExplored} onChange={e=>setShowExplored(e.target.checked)}/> Show Explored</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="accent-amber-600" checked={animate} onChange={e=>setAnimate(e.target.checked)}/> Animate</label>
              <label className="text-sm">Speed <input type="range" min="20" max="300" step="10" value={speed} onChange={e=>setSpeed(parseInt(e.target.value))}/> <span className="font-semibold">{speed}ms</span></label>
              <label className="text-sm">Cell <input type="range" min="24" max="64" step="4" value={cell} onChange={e=>setCell(parseInt(e.target.value))}/> <span className="font-semibold">{cell}px</span></label>
            </div>
          </div>

          <div className="rounded-lg border-2 border-amber-600 p-4">
            <div className="grid" style={{gridTemplateColumns:`repeat(${SIZE}, 1fr)`}}>
              {Array.from({length: SIZE}).map((_, i) => (
                Array.from({length: SIZE}).map((_, j) => {
                  const key = `${i},${j}`
                  const isBase = i===base.x && j===base.y
                  const itemIdx = items.findIndex(it=>it.x===i && it.y===j)
                  const isObs = grid[i][j]===1
                  const isPath = pathSet.has(key)
                  const isExplored = exploredSet.has(key)
                  let bg = 'bg-white', text='text-gray-800', content=''
                  if (isBase) { bg='bg-sky-600'; text='text-white'; content='B' }
                  else if (itemIdx!==-1){ bg='bg-amber-500'; text='text-white'; content=String(itemIdx+1) }
                  else if (isObs){ bg='bg-gray-500'; text='text-white'; content='X' }
                  else if (isPath){ bg= alg==='A*'?'bg-emerald-500':'bg-purple-600'; text='text-white'; content='→' }
                  else if (isExplored && showExplored){ bg= alg==='A*'?'bg-blue-200':'bg-purple-200'; text= alg==='A*'?'text-blue-800':'text-purple-800'; content='·' }
                  return (
                    <button
                      key={key}
                      data-pos={key}
                      title={`${i},${j}`}
                      onClick={()=>onCellClick(i,j)}
                      style={{width: cell, height: cell}}
                      className={`flex items-center justify-center rounded border-2 border-amber-600 transition hover:-translate-y-0.5 ${bg} ${text}`}
                    >{content}</button>
                  )
                })
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="rounded bg-amber-600 px-4 py-2 font-semibold text-white hover:bg-amber-700" onClick={()=>solve('A*')}>Solve with A*</button>
            <button className="rounded bg-amber-600 px-4 py-2 font-semibold text-white hover:bg-amber-700" onClick={()=>solve('Greedy')}>Solve with Greedy</button>
            <button className="rounded border-2 border-amber-600 bg-amber-50 px-4 py-2 font-semibold text-amber-700 hover:bg-amber-100" onClick={randomize}>🎲 Randomize</button>
          </div>

          {result && (
            <div className="grid gap-4 rounded-lg border-2 border-amber-600 bg-white p-4 md:grid-cols-3">
              <div className="rounded border p-3"><div className="text-sm text-gray-600">Total Cost</div><div className="text-2xl font-bold">{result.cost}</div></div>
              <div className="rounded border p-3"><div className="text-sm text-gray-600">Path Length</div><div className="text-2xl font-bold">{result.path.length}</div></div>
              <div className="rounded border p-3"><div className="text-sm text-gray-600">Nodes Explored</div><div className="text-2xl font-bold">{result.nodesExplored}</div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
