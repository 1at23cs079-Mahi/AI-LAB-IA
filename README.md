# AI Problems Collection

An interactive web-based collection of 20 AI problems covering search algorithms, optimization, NLP, expert systems, and web applications. Each problem features a unique, custom-designed UI that reflects its purpose.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎓 Batch Selection for AI Internals

**Start here:** [Select Your Batch (B1/B2/B3)](https://ai-lab-ia.vercel.app/welcome.html)

### Batch Assignments:
- **Batch B1**: Problems 1-6 (Search & Pathfinding)
- **Batch B2**: Problems 7-12 (CSP & Expert Systems)  
- **Batch B3**: Problems 13-20 (NLP & Applications)

[View All 20 Problems](https://ai-lab-ia.vercel.app/)

## 🚀 Quick Start

```bash
# Option 1: Clone and open
git clone https://github.com/1at23cs079-Mahi/AI-LAB-IA.git
cd ai-problems-collection
# Open welcome.html in your browser to select your batch

# Option 2: Download ZIP
# Download ZIP from GitHub → Extract → Open welcome.html

# Option 3: Live Server (if you have it)
# Open in VS Code → Right-click welcome.html → Open with Live Server
```

**That's it!** No npm install, no build process, no server setup required. 🎉

## ❓ FAQ

**Q: Do I need to install anything?**  
A: No! Just open `index.html` in any modern browser. Works offline too.

**Q: Which browsers are supported?**  
A: Chrome, Firefox, Safari, Edge - basically any modern browser from the last 3 years.

**Q: Can I use this on mobile?**  
A: Yes! All problems are responsive and touch-friendly.

**Q: Is this free to use?**  
A: Yes, completely free under MIT License. Use it for learning, teaching, or projects.

**Q: Can I modify the code?**  
A: Absolutely! Fork it, customize it, extend it. No attribution required (but appreciated).

**Q: How do I add my own problem?**  
A: Copy any `problemX.html` file, modify the algorithm and styling, add a card to `index.html`.

## 🚀 Features

- **20 Interactive AI Problems** - Fully functional implementations with visualizations
- **Unique UI Themes** - Each problem has a distinct visual design
- **No Dependencies** - Pure HTML, CSS, and JavaScript
- **Responsive Design** - Works on desktop and mobile devices

## 📚 Interactive Problem Catalog

### 🔍 Search Algorithms

#### 1. 🤖 Robot Vacuum Cleaner (Uniform Cost Search)
**Dark Cyan Tech Theme**
- **Click to**: Place obstacles and set target positions on a 5×5 grid
- **Interact**: Generate random obstacles, set start/goal positions, visualize path
- **Output**: 
  - Animated grid showing the UCS pathfinding process
  - Step-by-step exploration with cost calculations
  - Final optimal path highlighted in green
  - Statistics: path cost, nodes explored, execution time

#### 2. 🚁 Drone Altitude Control (Agent Comparison)
**Vibrant Purple/Pink Gradient Theme**
- **Click to**: Compare Reflex Agent vs Model-Based Agent behavior
- **Interact**: Adjust target altitude (0-500m), set wind speed, run simulations
- **Output**:
  - Real-time altitude tracking chart
  - Side-by-side performance comparison
  - Adjustment counts and stability metrics
  - Visual graph showing both agents' responses over time

#### 3. 📅 Calendar Scheduling (Constraint Satisfaction)
**Minimalist Green Theme**
- **Click to**: Add meetings with time slots and detect conflicts
- **Interact**: Input meeting names and times, check for conflicts, resolve scheduling issues
- **Output**:
  - Color-coded calendar grid showing all meetings
  - Conflict detection with red highlights
  - Suggested resolutions using minimum-conflict heuristic
  - List of all scheduled meetings with status

#### 4. 📦 Warehouse Robot Navigation (A* vs Greedy)
**Industrial Orange/Brown Theme**
- **Click to**: Compare A* and Greedy Best-First pathfinding algorithms
- **Interact**: Set multiple package pickup locations, adjust obstacles, run both algorithms
- **Output**:
  - Dual visualization showing both algorithm paths
  - Cost comparison table (A* optimal vs Greedy suboptimal)
  - Nodes explored statistics
  - Performance metrics and efficiency analysis

#### 5. 🔥 Forest Fire Escape (Dynamic Obstacles)
**Fire Red Animated Theme**
- **Click to**: Navigate through a forest with spreading fire
- **Interact**: Place fire sources, set escape routes, watch fire spread in real-time
- **Output**:
  - Animated grid with fire spreading dynamically
  - BFS pathfinding considering fire progression
  - Safe vs dangerous zones highlighted
  - Success/failure message with evacuation time

#### 6. 🚨 Emergency Evacuation (Congestion Modeling)
**Blue Emergency Medical Theme**
- **Click to**: Plan evacuation routes considering crowd congestion
- **Interact**: Adjust building layout, set exit points, simulate evacuation
- **Output**:
  - Heatmap showing congestion levels
  - Optimal evacuation paths using UCS
  - Time estimates for different routes
  - Bottleneck identification and recommendations

### 📝 String & NLP Problems

#### 7. ⌨️ Autocorrect System (Edit Distance)
**Modern Gradient Keyboard Theme**
- **Click to**: Test autocorrect suggestions with typos
- **Interact**: Type misspelled words, see suggestions ranked by similarity
- **Output**:
  - Top 5 word suggestions with confidence scores
  - Levenshtein distance calculations displayed
  - Keyboard proximity heuristics applied
  - Real-time suggestion updates as you type

#### 8. 🧩 Sudoku Solver (Backtracking)
**Bright Yellow/Teal Puzzle Theme**
- **Click to**: Solve 4×4 Sudoku puzzles using backtracking
- **Interact**: Input puzzle values, generate random puzzles, solve step-by-step
- **Output**:
  - Animated solving process showing each step
  - Color-coded cells (given vs solved)
  - Backtracking visualized with step counter
  - Solution validation and completion message

#### 9. 🎬 Movie Recommendation (Rule-Based)
**Cinema Gold/Red Theme**
- **Click to**: Get movie suggestions based on preferences
- **Interact**: Select genres, mood, rating preferences
- **Output**:
  - Top 3 movie recommendations with posters
  - Reasoning trace showing which rules fired
  - Match percentage for each recommendation
  - Forward chaining inference explanation

#### 10. 🛗 Smart Elevator Grouping
**Modern Silver/Gray Skyscraper Theme**
- **Click to**: Optimize elevator assignments for multiple requests
- **Interact**: Add floor requests, set elevator positions, calculate optimal assignments
- **Output**:
  - Visual elevator shaft display
  - Request assignment to Elevator A vs B
  - Total travel time calculation
  - Efficiency metrics and load balancing statistics

#### 11. 🏥 Medical Triage (Rule-Based Priority)
**Clean Blue Medical Theme**
- **Click to**: Classify patient priority levels
- **Interact**: Check symptom boxes (fever, chest pain, bleeding, etc.)
- **Output**:
  - Priority classification: Low/Medium/Critical
  - Reasoning chain showing rules applied
  - Recommended action (immediate attention vs routine care)
  - Color-coded urgency indicator

#### 12. 🌤️ Weather Insight Bot (Data Comparison)
**Sky Blue Weather Gradient Theme**
- **Click to**: Compare weather across 3 cities
- **Interact**: Select cities, ask natural language questions
- **Output**:
  - Temperature, humidity, wind speed data for each city
  - Answers to queries like "Which city is warmest?"
  - Outdoor activity suitability recommendations
  - Visual weather comparison charts

### 🚀 Advanced NLP & Web Applications

#### 13. 💬 Sentiment Analyzer (YouTube Comments)
**Purple Social Media Theme**
- **Click to**: Analyze sentiment of comments with negation handling
- **Interact**: Type or load sample comments, analyze sentiment
- **Output**:
  - Sentiment classification: Positive/Negative/Neutral
  - Confidence score percentage
  - Key words identified (highlighted in color)
  - Negation detection results ("not good" → Negative)
  - Summary statistics of all comments

#### 14. 🎥 Mini Movie Recommendation System
**Dark Red Streaming Theme**
- **Click to**: Get personalized movie recommendations
- **Interact**: Select favorite genres, rate movies you've seen
- **Output**:
  - Top 5 recommended movies with similarity scores
  - Cosine similarity calculations displayed
  - Genre overlap analysis
  - Detailed explanation of why each movie was recommended

#### 15. ⭐ Product Review Summarizer
**Warm Cream/Gold Document Theme**
- **Click to**: Extract key insights from multiple reviews
- **Interact**: Add reviews, generate summary, identify pros/cons
- **Output**:
  - 3-sentence summary of reviews
  - Top pros and cons extracted automatically
  - TF-IDF scores for important sentences
  - Overall sentiment trend (positive/negative ratio)

#### 16. 📰 Fake News Checker
**Newspaper Black/White/Red Theme**
- **Click to**: Assess reliability of news articles
- **Interact**: Paste article text, check for suspicious patterns
- **Output**:
  - Reliability score: 0-100%
  - Classification: Reliable/Questionable/Likely Fake
  - Red flags identified (clickbait words, all caps, poor sources)
  - Linguistic pattern analysis results

#### 17. 💼 Job Skill Extractor
**Professional Blue Corporate Theme**
- **Click to**: Extract required skills from job postings
- **Interact**: Paste job descriptions, analyze multiple postings
- **Output**:
  - List of required skills vs preferred skills
  - Skill frequency analysis across all jobs
  - Common skill patterns identified
  - Categorization (technical, soft skills, tools)

#### 18. 🗺️ City Route Finder
**Green Map/Navigation Theme**
- **Click to**: Compare multiple routes between locations
- **Interact**: Select start/end locations, view alternative routes
- **Output**:
  - 3 different route options displayed
  - Distance, estimated time, intersections for each route
  - Traffic considerations and recommendations
  - Visual route comparison table
  - "Best route" highlighted based on criteria

#### 19. 🤖 Topic-Specific Chatbot Builder
**Purple/Blue Tech Gradient Theme**
- **Click to**: Chat with AI on specific topics
- **Interact**: Select topic (movies, sports, travel, tech), ask questions
- **Output**:
  - Real-time chat interface
  - Contextual responses based on predefined knowledge
  - Confidence indicators for answers
  - Fallback responses when uncertain
  - Chat history maintained during session

#### 20. 🏥 Mini Medical Expert System
**Teal Medical Professional Theme**
- **Click to**: Diagnose conditions based on symptoms (Educational only!)
- **Interact**: Check symptom boxes, run forward chaining inference
- **Output**:
  - Condition classification (Fever, Dehydration, Hypothermia, etc.)
  - Confidence level percentage
  - Rule chain showing inference steps
  - Recommended actions (educational purposes)
  - Disclaimer reminding this is not medical advice

## 🎨 UI Themes & Visual Design

Each problem features a thematically appropriate design that enhances user experience:

| Problem | Theme | Visual Elements | Why This Design? |
|---------|-------|----------------|------------------|
| 🤖 Robot Vacuum | Dark Cyan Tech | Neon glow effects, grid visualization | Futuristic robotics aesthetic |
| 🚁 Drone Altitude | Purple/Pink Gradient | Smooth animations, elevation charts | Sky and altitude visualization |
| 📅 Calendar | Minimalist Green | Clean lines, left border accents | Professional productivity tool |
| 📦 Warehouse | Industrial Orange | Monospace fonts, brown tones | Industrial warehouse environment |
| 🔥 Forest Fire | Fire Red | Pulse/flicker animations | Emergency and danger signaling |
| 🚨 Evacuation | Blue Emergency | Medical white, professional shadows | Emergency response systems |
| ⌨️ Autocorrect | Gradient Keyboard | Glassmorphism, smooth transitions | Modern keyboard/typing interface |
| 🧩 Sudoku | Bright Puzzle | Yellow/teal contrast, game styling | Fun puzzle game aesthetic |
| 🎬 Movie Recommend | Gold/Red Cinema | Theater curtain colors, serif fonts | Classic movie theater ambiance |
| 🛗 Elevator | Silver/Gray | Monochrome, uppercase text | Modern skyscraper minimalism |
| 🏥 Triage | Clean Blue Medical | White space, rounded corners | Hospital professional look |
| 🌤️ Weather Bot | Sky Blue | Cloud gradients, rounded edges | Weather and sky visualization |
| 💬 Sentiment | Purple Social | Modern gradients, emoji support | Social media platform style |
| 🎥 Movie System | Dark Red | Netflix-inspired, dark theme | Streaming service aesthetic |
| ⭐ Reviews | Cream/Gold Paper | Serif fonts, document style | Classic paper and text documents |
| 📰 Fake News | Newspaper B&W | Times New Roman, double borders | Traditional journalism layout |
| 💼 Job Skills | Professional Blue | Corporate blue, clean layout | Business and career platform |
| 🗺️ Route Finder | Green Map | Earth tones, navigation style | GPS and map applications |
| 🤖 Chatbot | Purple/Blue Tech | Glassmorphism, chat bubbles | Modern AI chat interface |
| 🏥 Expert System | Teal Medical | Professional medical, rounded UI | Healthcare technology system |

### Design Principles Applied
- **Thematic Consistency**: Colors and fonts match the problem domain
- **Visual Hierarchy**: Important actions and outputs are emphasized
- **Accessibility**: High contrast ratios, clear typography
- **Responsive**: Works on various screen sizes
- **Animations**: Smooth transitions enhance understanding without distraction

## 🛠️ Installation

No installation required! Simply open `index.html` in any modern web browser.

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-problems-collection.git

# Open in browser
cd ai-problems-collection
# Double-click index.html or open it in your browser
```

## 💻 Usage Guide

### Getting Started
1. **Launch**: Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge)
2. **Navigate**: You'll see a colorful dashboard with 20 problem cards organized by category
3. **Explore**: Click any card to dive into that specific problem

### Interactive Features

#### Main Dashboard (index.html)
- **Hover Effects**: Cards animate and lift when you hover over them
- **Category Colors**: 
  - 🔵 Blue cards = Search & Optimization algorithms
  - 🟢 Green cards = NLP & Text Processing
  - 🟣 Purple cards = Advanced Applications
- **Quick Navigation**: Click the card title or anywhere on the card to open

#### Individual Problem Pages
Each problem page includes:

**🎮 Interactive Controls**
- Input fields, dropdowns, sliders, and checkboxes
- "Run Algorithm" or "Solve" buttons
- "Load Sample Data" for quick testing
- "Clear/Reset" to start over
- Visual toggles for step-by-step vs instant results

**📊 Real-Time Visualizations**
- Grid-based displays with color coding
- Animated pathfinding and solving processes
- Charts and graphs for data comparison
- Progress indicators and step counters

**📈 Output Sections**
- Detailed results with explanations
- Performance metrics (time, cost, efficiency)
- Statistical analysis
- Reasoning traces showing how the AI arrived at conclusions

**🔙 Navigation**
- "Back to Home" button (top-left) returns to main dashboard
- Browser back button also works

### Example Workflows

#### Quick Test Workflow
1. Open index.html
2. Click "Problem 1: Robot Vacuum"
3. Click "Generate Random Obstacles"
4. Click "Find Path"
5. Watch the animated pathfinding
6. See results: path cost, nodes explored, execution time

#### Deep Dive Workflow
1. Open index.html
2. Click "Problem 14: Movie Recommender"
3. Check your favorite genres (Action, Sci-Fi, Drama)
4. Rate some movies you've seen
5. Click "Get Recommendations"
6. Review top 5 suggestions with similarity scores
7. Read detailed explanations of why each movie matches
8. Adjust preferences and try again

#### Comparison Workflow
1. Open index.html
2. Click "Problem 4: Warehouse Robot"
3. Set multiple pickup locations
4. Click "Compare Algorithms"
5. See both A* and Greedy paths side-by-side
6. Compare performance metrics in the results table
7. Understand why A* finds optimal path vs Greedy's faster but suboptimal solution

## 🎯 Educational Purpose

This collection is designed for:

### For Students 🎓
- **Learn by Doing**: Interactive visualizations make abstract algorithms concrete
- **See the Process**: Step-by-step animations show how algorithms work internally
- **Experiment**: Modify inputs and immediately see how outputs change
- **Compare**: Side-by-side algorithm comparisons reveal trade-offs
- **Understand AI Concepts**: From search to NLP to expert systems

### For Educators 👨‍🏫
- **Teaching Aid**: Project on screen during lectures
- **Assignments**: Use as starting point for student projects
- **Demonstrations**: Show real AI applications without setup
- **Assessment**: Test student understanding with interactive problems
- **No Installation**: Works immediately in any classroom

### For Self-Learners 📚
- **Self-Paced**: Explore problems in any order
- **Immediate Feedback**: See results instantly
- **Multiple Attempts**: Try different approaches without penalty
- **Visual Learning**: Understand through animation and color coding
- **Practical Examples**: Real-world problem scenarios

### Skills You'll Practice
- ✅ **Search Algorithms**: UCS, A*, Greedy Best-First, BFS
- ✅ **Problem Solving**: Constraint satisfaction, backtracking
- ✅ **NLP Basics**: Tokenization, sentiment analysis, text similarity
- ✅ **Expert Systems**: Rule-based reasoning, forward chaining
- ✅ **Algorithm Analysis**: Time complexity, space efficiency
- ✅ **Data Structures**: Queues, priority queues, graphs
- ✅ **Heuristics**: Distance metrics, edit distance, TF-IDF

## 📝 Technologies Used

### Frontend Stack
- **HTML5** - Semantic markup, Canvas API for visualizations
- **CSS3** - Modern features including:
  - CSS Grid & Flexbox for responsive layouts
  - Custom gradients and color schemes (20 unique themes)
  - Smooth animations and transitions
  - Glassmorphism and modern effects (glass-morphism, neon glows, 3D cards)
  - Advanced CSS framework-like utilities (similar to Tailwind)
  - Ripple effects, badges, tooltips, modals
  - Custom toggle switches and checkboxes
  - Media queries for mobile responsiveness
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JS including:
  - ES6 Classes for algorithm implementations
  - Async/await for smooth animations
  - Array methods (map, filter, reduce)
  - Template literals for dynamic content
  - Event handling and DOM manipulation

### Modern UI Features
- **Glassmorphism Effects** - Frosted glass backgrounds with blur
- **Neon Glow Animations** - Pulsing border effects
- **3D Card Transforms** - Interactive hover effects
- **Gradient Animations** - Animated shifting backgrounds
- **Skeleton Loading** - Loading state animations
- **Floating Elements** - Smooth floating animations
- **Staggered Animations** - Sequential fade-in effects
- **Ripple Effects** - Material Design-like button feedback
- **Custom Form Controls** - Styled checkboxes, radios, toggles
- **Modal System** - Overlay and popup components
- **Badge Components** - Status indicators and tags
- **Tooltip System** - Hover-based information display
- **Progress Animations** - Loading bars and rings

### Algorithms Implemented
- **Search**: Uniform Cost Search, A*, Greedy Best-First, BFS
- **Backtracking**: Sudoku solver with constraint validation
- **String**: Levenshtein distance, edit distance heuristics
- **NLP**: Tokenization, sentiment analysis, TF-IDF, cosine similarity
- **Expert Systems**: Forward chaining inference engine
- **Optimization**: Minimum conflict heuristic, cost minimization

### Data Structures
- Priority Queues (custom implementation)
- Graphs (adjacency representations)
- Hash maps for efficient lookup
- Sets for unique collections

### No Dependencies
- ✅ No npm packages required
- ✅ No build tools needed
- ✅ No server required
- ✅ Works offline after first load
- ✅ Pure client-side processing

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Ways to Contribute

#### 🐛 Report Bugs
- Open an issue describing the bug
- Include browser version and steps to reproduce
- Screenshots are helpful!

#### 💡 Suggest Features
- Open an issue with your idea
- Explain the use case and benefits
- Discuss implementation approach

#### 🔧 Submit Pull Requests
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test thoroughly in multiple browsers
5. Commit with clear messages (`git commit -m 'Add some AmazingFeature'`)
6. Push to your branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

### Contribution Ideas

#### Add New Problems
- Implement new AI algorithms (Dijkstra's, minimax, genetic algorithms)
- Add more NLP problems (named entity recognition, summarization)
- Create machine learning visualizations (decision trees, clustering)
- Implement game AI (chess, tic-tac-toe, connect-4)

#### Enhance Existing Problems
- Add more detailed step-by-step breakdowns
- Improve visualizations with better animations
- Add sound effects for feedback
- Create tutorial modes with guided walkthroughs
- Add difficulty levels (easy, medium, hard)

#### Improve UI/UX
- Make designs even more unique and creative
- Add dark mode toggle
- Improve mobile responsiveness
- Add keyboard shortcuts
- Create accessibility improvements (ARIA labels, screen reader support)

#### Documentation
- Add code comments explaining complex algorithms
- Create video tutorials
- Write blog posts about specific problems
- Translate README to other languages
- Add JSDoc documentation

#### Testing
- Add unit tests for algorithms
- Create integration tests
- Test on more browsers and devices
- Performance testing and optimization

### Code Style Guidelines
- Use clear, descriptive variable names
- Comment complex algorithm logic
- Keep functions focused and small
- Follow existing code structure
- Test your changes thoroughly

## 📄 License

This project is open source and available under the MIT License.

## ⚠️ Disclaimer

Medical and health-related problems (triage, expert system) are for educational purposes only and should not be used for actual medical diagnosis or treatment.

## 🌟 Key Features & Highlights

### 🎮 Fully Interactive
- **Real-Time Updates**: See changes instantly as you interact
- **Animated Visualizations**: Watch algorithms execute step-by-step
- **Drag-and-Drop**: (Where applicable) Intuitive input methods
- **Sample Data**: Pre-loaded examples for quick testing
- **Reset Functionality**: Try different approaches easily

### 🎨 Unique Visual Design
- **20 Different Themes**: Each problem has its own color scheme
- **Thematic Consistency**: Design matches problem domain
- **Smooth Animations**: CSS transitions and keyframe animations
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Modern UI**: Gradients, shadows, glassmorphism effects

### 🚀 Performance Optimized
- **Lightweight**: No heavy frameworks or libraries
- **Fast Loading**: All resources under 1MB total
- **Efficient Algorithms**: Optimized implementations
- **Smooth Animations**: 60fps transitions
- **Browser Compatible**: Works in all modern browsers

### 📊 Educational Value
- **Step-by-Step Explanations**: Understand the "why" not just the "what"
- **Visual Learning**: See algorithms in action
- **Immediate Feedback**: Know if you're on the right track
- **Multiple Examples**: Try various inputs and scenarios
- **Clear Documentation**: Each problem explains its approach

### 🔧 Developer Friendly
- **Clean Code**: Well-commented and organized
- **Modular Structure**: Easy to understand and modify
- **Consistent Patterns**: Similar structure across all problems
- **No Build Process**: Edit and refresh to see changes
- **Extensible**: Easy to add new problems

### ✅ Production Ready
- **Zero Dependencies**: No npm install required
- **Cross-Browser**: Tested on Chrome, Firefox, Safari, Edge
- **Offline Capable**: Works without internet after first load
- **Mobile Responsive**: Touch-friendly on phones and tablets
- **Accessible**: Semantic HTML and good color contrast

## ⚠️ Disclaimer

### Medical Information
Problems 11 (Medical Triage) and 20 (Medical Expert System) are **for educational purposes only**:
- ❌ NOT for actual medical diagnosis
- ❌ NOT a substitute for professional medical advice
- ❌ NOT validated for clinical use
- ✅ For learning about expert systems and rule-based AI
- ✅ Demonstrates forward chaining inference
- ⚠️ Always consult qualified healthcare professionals for medical concerns

### General Use
- This is an educational project demonstrating AI concepts
- Algorithms are simplified for learning purposes
- Real-world implementations may require additional considerations
- Results are for demonstration and understanding, not production decisions

## 🎓 Learning Resources

Want to learn more about the concepts used in these problems?

### Recommended Topics to Study
1. **Search Algorithms**: BFS, DFS, UCS, A*, Greedy algorithms
2. **Heuristics**: Distance metrics, admissibility, consistency
3. **Constraint Satisfaction**: Backtracking, forward checking
4. **Natural Language Processing**: Tokenization, stemming, sentiment analysis
5. **Expert Systems**: Knowledge representation, inference engines
6. **Algorithm Analysis**: Time/space complexity, Big-O notation

### Books
- "Artificial Intelligence: A Modern Approach" by Russell & Norvig
- "Introduction to Algorithms" by CLRS
- "Speech and Language Processing" by Jurafsky & Martin

### Online Resources
- Visualgo.net - Algorithm visualizations
- Khan Academy - Computer Science courses
- Coursera AI courses
- MIT OpenCourseWare

---

Made with ❤️ for AI education and learning
