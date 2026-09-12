# 🚀 C++ Masterclass & Interactive Documentation Portal
# *fully coded by ai*

[![C++ Standard](https://img.shields.io/badge/C%2B%2B-20%20%2F%20Modern-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)](https://isocpp.org/)
[![Languages](https://img.shields.io/badge/Language-English%20%7C%20Fran%C3%A7ais-blue?style=for-the-badge)](https://github.com)
[![Status](https://img.shields.io/badge/Status-Complete%20%26%20Verified-success?style=for-the-badge)](https://github.com)
[![Architecture](https://img.shields.io/badge/Architecture-Vanilla%20ES6%2B%20%7C%20CSS3%20%7C%20HTML5-purple?style=for-the-badge)](https://github.com)

An interactive, high-performance, bilingual web portal designed to take developers from absolute fundamentals to production-grade C++20 mastery. Built with zero external framework overhead, featuring real-time routing, active-recall flashcards, multi-tier quizzes, and a comprehensive developer tooling curriculum.

---

## 🌟 Key Features

### 🌐 1. Fully Bilingual (English & Français)
- **Instant Toggle**: Switch between **English (EN)** and **Français (FR)** with one click without page reloads.
- **Hash-Based Routing**: Native deep-linking for all views and languages (e.g. `#/en/doc/1`, `#/fr/doc/1`, `#/fr/flashcards`, `#/en/roadmap`).
- **100% Localized Curriculum**: All 46 curriculum lessons, 52 active-recall flashcards, 46 lesson check quizzes, 7 module master quizzes, and 57 Grand Master Exam questions are thoroughly localized.

---

### 🧭 2. Four Explicit Learning Tracks
Every lesson is color-coded and organized into dedicated educational tracks:

1. **🎬 Bro Code Video Course Track** (`.badge-brocode`):
   - Mapped to the comprehensive 6-hour video course with **exact second jump timestamps** (`t=810s`, `t=1454s`, `t=15476s`, etc.).
2. **📚 LearnCpp Modern C++ Track** (`.badge-learncpp`):
   - Direct, chapter-specific tutorials from the official LearnCpp index (`std::string_view`, `std::optional`, `std::unique_ptr`, lambdas, algorithms).
3. **📖 C++ Primer (5th Edition) Track** (`.badge-primer`):
   - In-depth architectural references directly linked to *C++ Primer (5th Edition)* (`011-1.1`, `021-2.1`, `040-4.2`, Rule of 5 copy control, stream condition states).
4. **🛠️ Professional Developer Skills Track** (`.badge-prodev`):
   - Production tooling every C++ engineer needs:
     - **Modern CMake** (`CMakeLists.txt`, target-based architecture)
     - **Compilers & Sanitizers** (`-Wall -Wextra -Wpedantic`, AddressSanitizer `ASan`, UndefinedBehaviorSanitizer `UBSan`)
     - **Debugging with GDB & LLDB** (breakpoints, stack frame backtraces, inspection)
     - **Unit Testing** (GoogleTest `TEST()`, `EXPECT_EQ`, `ASSERT_NE`, and Catch2)
     - **Package Management** (Microsoft vcpkg manifest mode, Conan)
     - **Architecture & ABI Stability** (The Pimpl Idiom)
5. **🧵 High-Performance Multithreading & Concurrency Module**:
   - **Thread Lifecycle & Cooperative Cancellation** (`std::jthread` auto-joining, `std::stop_token`)
   - **Deadlock-Free Mutexes** (`std::mutex`, `std::unique_lock`, `std::scoped_lock`)
   - **Condition Variables & Producer-Consumer Queues** (`std::condition_variable`, predicate loops)
   - **Asynchronous Tasks & Futures** (`std::async`, `std::future`, `std::promise`)
   - **Lock-Free Programming & Memory Ordering** (`std::atomic`, `memory_order_relaxed/seq_cst`, eliminating false sharing with `alignas(64)`)
   - **C++20 Synchronization Primitives** (`std::counting_semaphore`, `std::latch`, `std::barrier`)
6. **🚀 Modern C++20/C++23 Architecture & Performance Module**:
   - **C++20 Concepts & Constraints** (`concept`, `requires` clauses, replacing SFINAE)
   - **C++20 Ranges & Functional Pipelines** (`std::ranges`, `std::views`, pipe `|` operator)
   - **C++20 Coroutines** (`co_await`, `co_yield`, `co_return`, generators)
   - **Cache Locality & Data-Oriented Design (DoD)** (Structure of Arrays vs AoS, SIMD auto-vectorization)
   - **Advanced Modern Patterns** (CRTP static polymorphism without vtables, Type Erasure, `std::visit`)

---

### 🗂️ 3. Active-Recall Flashcards System (52 Cards)
- **Category Filtering**: Filter cards by *All*, *Basics*, *Memory*, *Functions*, *OOP*, *Modern C++*, *STL*, or *Pro Dev*.
- **Small Grid Mode**: Fast overview of concepts with an interactive "Reveal Answer" toggle and syntax-highlighted code snippets.
- **Large Focus Mode**: Immersive 3D card flip animation (`rotateY(180deg)`), previous/next keyboard/button navigation, and in-depth explanations.

---

### 🧪 4. Multi-Tier Interactive Quiz Engine
- **Little Section (Per-Lesson Quick Check - 46 Lessons)**:
  - Every single lesson includes an interactive self-check quiz at the bottom.
  - Immediate visual contrast: wrong answers turn red with `❌`, the good answer is highlighted in glowing green with `✅`.
  - Side-by-side comparison: `Your Choice` vs `Correct Answer` + concept explanation.
  - Active recall `🔄 Try Again` button to immediately re-test memory.
- **Big Section (Module Master Quizzes - 7 Modules)**:
  - Comprehensive mastery exams for Modules 1, 5, 7, 8, 9, 10, and 11.
  - Detailed error breakdown and answer review with filter pills (`All`, `❌ Mistakes Only`, `✅ Correct`).
  - **`🎯 Custom Test: Practice Mistakes Only`** button: generates a custom test containing *only* the questions missed!
- **🎓 Grand Master Exam (57 Questions)**:
  - Comprehensive final exam covering the entire language curriculum.
  - Randomized questions and shuffled options.
  - 1-click custom re-test of missed questions.
- **🏦 Centralized Mistakes Bank**:
  - Persistent tracking of missed questions across the site in `localStorage`.
  - Navbar button `🎯 Mistakes (N)` launches an instant custom practice session.

---

### ⚡ 5. Additional Developer Tools
- **Code Simulator**: In-browser modern C++ code runner with compile-and-execute simulation and expected console output.
- **Quick Reference Cheatsheet**:
  - GCC/Clang recommended flags: `-std=c++20 -Wall -Wextra -Wpedantic -fsanitize=address,undefined -O2`
  - STL Containers Big-O time complexity reference table (`std::vector`, `std::deque`, `std::list`, `std::map`, `std::unordered_map`).
  - Core C++ golden rules (Stack vs Heap, Rule of Zero/Five, Smart Pointers, Const References).
- **Progress Meter & Clean 0% Slate**:
  - Real-time progress bar tracking Mastered, In Progress, and To Do lessons.
  - Clean initial 0% state with a **"Reset to 0%"** button.
  - Progress export and import via JSON.
- **Sidebar Scroll Preservation**:
  - Selecting lessons smoothly updates article content while retaining exact sidebar scroll positions.
- **Verified URLs**:
  - 100% of links tested and confirmed with HTTP 200 OK — zero 404s or broken links.

---

## 📁 Project Structure

```
├── index.html               # Main single-page application entry point
├── style.css                # Custom modern dark-mode design system & 3D animations
├── app.js                   # Application state manager, router, and UI renderer
├── data.js                  # 46 structured curriculum lessons with verified URLs across 7 modules
├── quiz_flashcards_data.js  # 52 flashcards, 57 Grand Exam questions, 46 lesson quizzes & 7 module master quizzes
├── i18n.js                  # English & French localization dictionaries
└── README.md                # Project documentation
```

---

## 💻 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/poupou-cheater/cpp-masterclass-portal.git
cd cpp-masterclass-portal
```

### 2. Run Locally

Since this project is pure client-side HTML/CSS/JavaScript with zero build dependencies, you can run it immediately with any static server:

#### Option A: Python 3 (Recommended)
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

#### Option B: Node.js (npx serve)
```bash
npx serve .
```

#### Option C: VS Code Live Server
Right-click `index.html` and click **"Open with Live Server"**.

---

## 🛠️ Built With

- **HTML5**: Semantic document structure, modal dialogues, and accessible buttons.
- **Vanilla CSS3**: Glassmorphism (`backdrop-filter: blur(12px)`), responsive CSS Grid and Flexbox, custom CSS variables, and 3D card flip transformations (`perspective`, `transform-style: preserve-3d`).
- **Modern JavaScript (ES6+)**:
  - Client-side Hash Router (`#/en/doc/...`, `#/fr/...`, `#/en/flashcards`, `#/en/roadmap`)
  - LocalStorage persistence API
  - Fisher-Yates shuffle randomization algorithm
  - Event delegation and DOM updates with scroll preservation

---

## 📄 License

Distributed under the MIT License. Feel free to use, modify, and distribute for educational purposes.