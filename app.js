// C++ Masterclass Portal - Core Application Logic & Router

// Shuffle utility for quizzes and exam pools
function shuffleArray(array) {
  if (!array || !Array.isArray(array)) return [];
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 13-Tier Systems Engineering XP Progression System
const DEVELOPER_LEVELS = [
  { level: 1, minXp: 0, title: "C++ Novice", icon: "🌱", color: "#94a3b8" },
  { level: 2, minXp: 150, title: "Syntax Scout", icon: "🔍", color: "#38bdf8" },
  { level: 3, minXp: 350, title: "Control Operator", icon: "🎛️", color: "#60a5fa" },
  { level: 4, minXp: 600, title: "Loop Master", icon: "🔄", color: "#818cf8" },
  { level: 5, minXp: 950, title: "Function Crafter", icon: "⚙️", color: "#a78bfa" },
  { level: 6, minXp: 1350, title: "Array & Algorithmist", icon: "📊", color: "#c084fc" },
  { level: 7, minXp: 1800, title: "Pointer Navigator", icon: "🧭", color: "#f472b6" },
  { level: 8, minXp: 2300, title: "Class Architect", icon: "🏛️", color: "#fb7185" },
  { level: 9, minXp: 2900, title: "STL Virtuoso", icon: "⚡", color: "#fb923c" },
  { level: 10, minXp: 3600, title: "Systems Engineer", icon: "🛠️", color: "#f59e0b" },
  { level: 11, minXp: 4400, title: "Concurrency Specialist", icon: "🚀", color: "#10b981" },
  { level: 12, minXp: 5300, title: "Memory Architect", icon: "🛡️", color: "#06b6d4" },
  { level: 13, minXp: 6500, title: "C++ Grandmaster", icon: "👑", color: "#facc15" }
];

// Centralized Mistakes Tracker for Relearning & Targeted Retests
const MistakesTracker = {
  storageKey: 'cpp_course_mistakes_bank',

  getMistakes() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveMistakes(list) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(list));
    } catch (e) {}
  },

  addMistake(question) {
    if (!question) return;
    const list = this.getMistakes();
    const qTextEn = question.question ? (question.question.en || question.question) : '';
    const exists = list.some(item => {
      if (item.id && question.id && item.id === question.id) return true;
      if (item.qTextEn && qTextEn && item.qTextEn === qTextEn) return true;
      return false;
    });
    if (!exists) {
      list.push({
        id: question.id || ('m_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5)),
        qTextEn: qTextEn,
        subject: question.subject || 'Core',
        question: question.question,
        options: question.options,
        explanation: question.explanation
      });
      this.saveMistakes(list);
    }
  },

  removeMistake(question) {
    if (!question) return;
    let list = this.getMistakes();
    const qTextEn = question.question ? (question.question.en || question.question) : '';
    list = list.filter(item => {
      if (item.id && question.id && item.id === question.id) return false;
      if (item.qTextEn && qTextEn && item.qTextEn === qTextEn) return false;
      return true;
    });
    this.saveMistakes(list);
  },

  clearAll() {
    try {
      localStorage.removeItem(this.storageKey);
    } catch (e) {}
  },

  getCount() {
    return this.getMistakes().length;
  }
};

const App = {
  currentView: 'doc', // 'doc', 'roadmap', 'flashcards'
  activeLessonId: 1,
  activeFilter: 'all', // 'all', '0', '1', '2'
  activeSourceFilter: 'all', // 'all', 'brocode', 'learncpp', 'primer', 'prodev'
  activeFlashcardCategory: 'all',
  searchQuery: '',
  userState: {},
  lastKnownLevel: null,

  updateMistakesNavButton() {
    const count = MistakesTracker.getCount();
    const badge = document.getElementById('mistakes-count-badge');
    if (badge) badge.textContent = count;
    const btn = document.getElementById('mistakes-bank-btn');
    if (btn) btn.style.display = count > 0 ? 'inline-flex' : 'none';
  },

  getModuleById(id) {
    if (!id) return null;
    const strId = String(id);
    const numPart = parseInt(strId.replace('mod-', ''), 10);
    return COURSE_DATA.modules.find(m => {
      if (m.id === id) return true;
      if (m.id === ('mod-' + id)) return true;
      if (String(m.id).replace('mod-', '') === String(numPart)) return true;
      return false;
    }) || null;
  },

  calculateXP() {
    let xp = 0;
    const all = this.getAllLessons();
    all.forEach(l => {
      const s = this.getLessonState(l.id);
      const isProject = l.id >= 66 && l.id <= 70;
      if (s === 2) {
        xp += isProject ? 200 : 50;
      } else if (s === 1) {
        xp += isProject ? 75 : 25;
      }
    });

    // Quiz XP Rewards
    const solved = this.userState.solvedQuizzes || {};
    const solvedCount = Object.keys(solved).length;
    xp += solvedCount * 25;

    const solvedModules = this.userState.solvedModuleQuizzes || {};
    xp += Object.keys(solvedModules).length * 100;

    if (this.userState.completedGrandExam) {
      xp += 250;
    }

    return xp;
  },

  getLevelData(xp) {
    let currentIdx = 0;
    for (let i = 0; i < DEVELOPER_LEVELS.length; i++) {
      if (xp >= DEVELOPER_LEVELS[i].minXp) {
        currentIdx = i;
      }
    }
    const current = DEVELOPER_LEVELS[currentIdx];
    const next = DEVELOPER_LEVELS[currentIdx + 1] || null;
    const currentBase = current.minXp;
    const nextTarget = next ? next.minXp : currentBase + 1000;
    const progressIntoLevel = xp - currentBase;
    const totalLevelSpan = nextTarget - currentBase;
    const percentInLevel = Math.min(100, Math.max(0, Math.round((progressIntoLevel / totalLevelSpan) * 100)));

    return {
      current,
      next,
      xp,
      nextTarget,
      percentInLevel
    };
  },

  celebrateLevelUp(level) {
    this.showToast(`🎉 LEVEL UP! You reached Level ${level.level}: ${level.title}!`, level.icon);
    const badge = document.getElementById('player-level-badge');
    if (badge) {
      badge.classList.remove('level-up-animate');
      void badge.offsetWidth;
      badge.classList.add('level-up-animate');
    }
  },

  spawnXpFloater(amount, targetElement) {
    const floater = document.createElement('div');
    floater.className = 'xp-floater';
    floater.innerHTML = `<span>⚡</span> +${amount} XP!`;

    if (targetElement && targetElement.getBoundingClientRect) {
      const rect = targetElement.getBoundingClientRect();
      floater.style.left = `${Math.max(20, rect.left + rect.width / 2)}px`;
      floater.style.top = `${Math.max(20, rect.top)}px`;
    } else {
      floater.style.left = '50%';
      floater.style.top = '25%';
    }
    document.body.appendChild(floater);

    setTimeout(() => {
      floater.classList.add('animate');
    }, 10);

    setTimeout(() => {
      floater.remove();
    }, 1500);

    this.showToast(`+${amount} XP Earned! Keep going!`, "⚡");
  },

  // Flashcards state
  flashcardMode: 'small', // 'small' or 'large'
  activeCardIndex: 0,
  isCardFlipped: false,

  // Active Module Quiz state
  activeModuleQuiz: null,
  quizCurrentStep: 0,
  quizSelectedAnswers: {},
  quizSubmitted: false,
  moduleReviewFilter: 'mistakes', // 'all', 'mistakes', 'correct'

  // Grand Master Exam state (Quiz of Everything)
  grandExamActive: false,
  grandExamQuestions: [],
  grandExamOriginalPool: [],
  grandExamStep: 0,
  grandExamAnswers: {},
  grandExamSubmitted: false,
  grandExamIsRetest: false,
  grandExamReviewFilter: 'mistakes', // 'all', 'mistakes', 'correct'

  // Mobile Sidebar Drawer Management
  toggleMobileSidebar(forceState) {
    const sidebar = document.getElementById('doc-sidebar-panel');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (!sidebar) return;
    const shouldOpen = forceState !== undefined ? forceState : !sidebar.classList.contains('mobile-open');
    if (shouldOpen) {
      sidebar.classList.add('mobile-open');
      if (backdrop) backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      sidebar.classList.remove('mobile-open');
      if (backdrop) backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  },

  closeMobileSidebar() {
    this.toggleMobileSidebar(false);
  },

  // Flattened lesson list
  getAllLessons() {
    const list = [];
    COURSE_DATA.modules.forEach(mod => {
      mod.lessons.forEach(l => {
        list.push({ ...l, moduleId: mod.id, source: l.source || mod.source });
      });
    });
    return list;
  },

  getLessonById(id) {
    const numId = parseInt(id, 10);
    return this.getAllLessons().find(l => l.id === numId || l.slug === id);
  },

  // State Management (0% default clean slate)
  loadState() {
    try {
      const saved = localStorage.getItem('cpp_learning_state');
      if (saved) {
        this.userState = JSON.parse(saved);
      } else {
        this.userState = {};
      }
    } catch (e) {
      console.error("Failed to load user state", e);
      this.userState = {};
    }
  },

  saveState() {
    try {
      localStorage.setItem('cpp_learning_state', JSON.stringify(this.userState));
    } catch (e) {
      console.error("Failed to save state", e);
    }
  },

  getLessonState(lessonId) {
    const key = `lesson_${lessonId}`;
    return this.userState[key] !== undefined ? this.userState[key] : 0;
  },

  setLessonState(lessonId, state) {
    const key = `lesson_${lessonId}`;
    const previousState = this.getLessonState(lessonId);
    this.userState[key] = state;
    this.saveState();
    this.updateProgressMeter();

    // Reward XP when marking a lesson as Mastered
    if (state === 2 && previousState !== 2) {
      const isProject = parseInt(lessonId, 10) >= 66;
      const amount = isProject ? 200 : 50;
      const statusBtn = document.getElementById('doc-status-toggle');
      this.spawnXpFloater(amount, statusBtn);
    }
  },

  cycleLessonState(lessonId) {
    const current = this.getLessonState(lessonId);
    const next = (current + 1) % 3;
    this.setLessonState(lessonId, next);
    return next;
  },

  calculateProgress() {
    const all = this.getAllLessons();
    let points = 0;
    let completedCount = 0;
    let inProgressCount = 0;
    let todoCount = 0;

    all.forEach(l => {
      const s = this.getLessonState(l.id);
      if (s === 2) {
        points += 1.0;
        completedCount++;
      } else if (s === 1) {
        points += 0.5;
        inProgressCount++;
      } else {
        todoCount++;
      }
    });

    const percent = all.length > 0 ? Math.round((points / all.length) * 100) : 0;
    return { percent, completedCount, inProgressCount, todoCount, total: all.length };
  },

  updateProgressMeter() {
    const stats = this.calculateProgress();
    const xp = this.calculateXP();
    const levelData = this.getLevelData(xp);

    const fillEl = document.getElementById('progress-fill');
    const textEl = document.getElementById('progress-percentage');
    const compEl = document.getElementById('stat-completed');
    const progEl = document.getElementById('stat-progress');

    if (fillEl) fillEl.style.width = `${stats.percent}%`;
    if (textEl) textEl.textContent = `${stats.percent}%`;
    if (compEl) compEl.textContent = `${stats.completedCount} Mastered`;
    if (progEl) progEl.textContent = `${stats.inProgressCount} In Progress`;

    // Update Player Level Badge & XP Details
    const levelBadge = document.getElementById('player-level-badge');
    const levelText = document.getElementById('level-text');
    const levelIcon = document.getElementById('level-icon');
    const levelXpPill = document.getElementById('level-xp-pill');

    if (levelText) levelText.textContent = `Level ${levelData.current.level}: ${levelData.current.title}`;
    if (levelIcon) levelIcon.textContent = levelData.current.icon;
    if (levelXpPill) {
      if (levelData.next) {
        levelXpPill.textContent = `${xp} / ${levelData.nextTarget} XP`;
      } else {
        levelXpPill.textContent = `${xp} XP (MAX LEVEL)`;
      }
    }
    if (levelBadge) {
      levelBadge.style.borderColor = levelData.current.color;
      levelBadge.style.boxShadow = `0 0 16px ${levelData.current.color}44`;
    }

    if (this.lastKnownLevel !== null && levelData.current.level > this.lastKnownLevel) {
      this.celebrateLevelUp(levelData.current);
    }
    this.lastKnownLevel = levelData.current.level;
  },

  // Router
  handleRouting() {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const parts = hash.split('/').filter(Boolean);

    let view = this.currentView;
    let lessonId = this.activeLessonId;

    // Backward-compatible with #/en/... or #/doc/...
    let pathParts = parts;
    if (parts.length > 0 && (parts[0] === 'en' || parts[0] === 'fr')) {
      pathParts = parts.slice(1);
    }

    if (pathParts.length > 0) {
      if (pathParts[0] === 'roadmap') {
        view = 'roadmap';
      } else if (pathParts[0] === 'flashcards') {
        view = 'flashcards';
      } else if (pathParts[0] === 'quizzes') {
        view = 'quizzes';
        if (pathParts[1]) {
          this.activeQuizModuleFilter = pathParts[1];
        }
      } else if (pathParts[0] === 'doc') {
        view = 'doc';
        if (pathParts[1]) {
          const found = this.getLessonById(pathParts[1]);
          if (found) lessonId = found.id;
        }
      } else {
        const found = this.getLessonById(pathParts[0]);
        if (found) {
          view = 'doc';
          lessonId = found.id;
        }
      }
    }

    const previousLessonId = this.activeLessonId;
    const previousView = this.currentView;

    this.currentView = view;
    this.activeLessonId = lessonId;

    // Smooth navigation in Doc View: preserve sidebar scroll!
    if (previousView === 'doc' && view === 'doc' && document.querySelector('.doc-sidebar')) {
      this.updateDocContentOnly();
    } else {
      this.render();
    }
  },

  navigate(view, lessonId = null) {
    this.closeMobileSidebar();
    let newHash = '';
    if (view === 'roadmap') {
      newHash = `#/roadmap`;
    } else if (view === 'flashcards') {
      newHash = `#/flashcards`;
    } else if (view === 'quizzes') {
      newHash = lessonId ? `#/quizzes/${lessonId}` : `#/quizzes`;
    } else {
      const id = lessonId || this.activeLessonId;
      newHash = `#/doc/${id}`;
    }

    if (window.location.hash === newHash) {
      this.handleRouting();
    } else {
      window.location.hash = newHash;
    }
  },

  switchLanguage(lang) {
    I18N.setLang(lang);
    this.navigate(this.currentView, this.activeLessonId);
  },

  showToast(message, icon = "✅") {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  },

  copyShareLink(lessonId) {
    const id = lessonId || this.activeLessonId;
    const url = `${window.location.origin}${window.location.pathname}#/${I18N.currentLang}/doc/${id}`;
    navigator.clipboard.writeText(url).then(() => {
      this.showToast(I18N.t('linkCopied'), "🔗");
    }).catch(() => {
      prompt("Copy topic link:", url);
    });
  },

  copyCodeSnippet(code) {
    navigator.clipboard.writeText(code).then(() => {
      this.showToast(I18N.t('codeCopied'), "📋");
    });
  },

  getSourceBadgeHtml(source) {
    const s = source || 'brocode';
    if (s === 'brocode') {
      return `<span class="badge-source badge-brocode">🎬 ${I18N.t('sourceBroCode')}</span>`;
    } else if (s === 'learncpp') {
      return `<span class="badge-source badge-learncpp">📚 ${I18N.t('sourceLearnCpp')}</span>`;
    } else if (s === 'primer') {
      return `<span class="badge-source badge-primer">📖 ${I18N.t('sourcePrimer')}</span>`;
    } else {
      return `<span class="badge-source badge-prodev">🛠️ ${I18N.t('sourceProDev')}</span>`;
    }
  },

  // Main UI Renderer
  render() {
    this.updateStaticTranslations();
    this.updateViewButtons();
    this.updateProgressMeter();

    const mainContainer = document.getElementById('main-content');
    if (!mainContainer) return;

    if (this.currentView === 'doc') {
      mainContainer.innerHTML = this.renderDocLayout();
      this.attachDocEventListeners();
      // Scroll active item into view cleanly without jumping to top
      const activeSidebarItem = document.querySelector('.sidebar-lesson-item.active');
      if (activeSidebarItem) {
        activeSidebarItem.scrollIntoView({ block: 'nearest' });
      }
    } else if (this.currentView === 'flashcards') {
      mainContainer.innerHTML = this.renderFlashcardsLayout();
      this.attachFlashcardEventListeners();
    } else if (this.currentView === 'quizzes') {
      mainContainer.innerHTML = this.renderQuizzesLayout();
      this.attachQuizzesEventListeners();
    } else {
      mainContainer.innerHTML = this.renderRoadmapLayout();
      this.attachRoadmapEventListeners();
    }
  },

  // Sidebar Scroll Preservation: update only article content!
  updateDocContentOnly() {
    const sidebar = document.querySelector('.doc-sidebar');
    const contentWrapper = document.querySelector('.doc-content-wrapper');
    if (!sidebar || !contentWrapper) {
      this.render();
      return;
    }

    // Save sidebar scroll position
    const savedScrollTop = sidebar.scrollTop;

    // Update active class on sidebar items
    document.querySelectorAll('.sidebar-lesson-item').forEach(item => {
      const id = parseInt(item.getAttribute('data-lesson-id'), 10);
      item.classList.toggle('active', id === this.activeLessonId);
    });

    // Re-render only the article
    contentWrapper.innerHTML = this.renderDocArticleHtml();
    contentWrapper.scrollTop = 0;
    this.closeMobileSidebar();
    this.attachDocEventListeners();

    // Restore sidebar scroll position exactly
    sidebar.scrollTop = savedScrollTop;

    // Scroll active item into view only if out of bounds
    const activeSidebarItem = document.querySelector('.sidebar-lesson-item.active');
    if (activeSidebarItem) {
      activeSidebarItem.scrollIntoView({ block: 'nearest' });
    }

    this.updateProgressMeter();
  },

  updateStaticTranslations() {
    document.title = "C++ Masterclass & Complete Course Documentation";
    const subtitleEl = document.getElementById('header-subtitle');
    if (subtitleEl) subtitleEl.textContent = "Complete Course & Interactive Portal";

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = "Search 65 lessons, syntax, OOP, STL... (Press /)";

    const progressLabel = document.getElementById('progress-label');
    if (progressLabel) progressLabel.textContent = "Overall Progress:";

    const cheatsheetBtn = document.getElementById('cheatsheet-btn');
    if (cheatsheetBtn) cheatsheetBtn.innerHTML = `<span>⚡</span> Cheatsheet`;
  },

  updateViewButtons() {
    const docBtn = document.getElementById('view-doc-btn');
    const roadBtn = document.getElementById('view-roadmap-btn');
    const flashBtn = document.getElementById('view-flashcards-btn');
    const quizBtn = document.getElementById('view-quizzes-btn');

    if (docBtn) docBtn.classList.toggle('active', this.currentView === 'doc');
    if (roadBtn) roadBtn.classList.toggle('active', this.currentView === 'roadmap');
    if (flashBtn) flashBtn.classList.toggle('active', this.currentView === 'flashcards');
    if (quizBtn) quizBtn.classList.toggle('active', this.currentView === 'quizzes');
  },

  // Render Full Doc Layout
  renderDocLayout() {
    // Sidebar items with source badges
    let sidebarHtml = `
      <div class="sidebar-mobile-header">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.1rem;">⚡</span>
          <span class="sidebar-mobile-title">Course Lessons (1-65)</span>
        </div>
        <button id="close-sidebar-btn" class="close-sidebar-btn" aria-label="Close Menu">&times;</button>
      </div>
    `;
    COURSE_DATA.modules.forEach(mod => {
      const modTitle = mod.title['en'] || mod.title;
      let lessonItemsHtml = '';

      mod.lessons.forEach(l => {
        const lState = this.getLessonState(l.id);
        const isActive = l.id === this.activeLessonId ? 'active' : '';
        lessonItemsHtml += `
          <a class="sidebar-lesson-item ${isActive}" href="#/doc/${l.id}" data-lesson-id="${l.id}">
            <div style="display: flex; align-items: center; gap: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              <span class="lesson-status-dot status-dot-${lState}"></span>
              <span style="overflow: hidden; text-overflow: ellipsis;">${l.id}. ${l.title}</span>
            </div>
            ${l.timestamp ? `<span style="font-size: 0.68rem; opacity: 0.6; font-family: var(--font-mono);">${l.timestamp}</span>` : ''}
          </a>
        `;
      });

      sidebarHtml += `
        <div class="sidebar-module">
          <div class="sidebar-module-header">
            <span>${mod.icon} ${modTitle}</span>
          </div>
          <div class="sidebar-lessons">
            ${lessonItemsHtml}
          </div>
        </div>
      `;
    });

    return `
      <div class="doc-layout">
        <aside class="doc-sidebar" id="doc-sidebar-panel">
          ${sidebarHtml}
        </aside>

        <div class="doc-content-wrapper" id="doc-content-wrapper">
          ${this.renderDocArticleHtml()}
        </div>
      </div>
    `;
  },

  // Render Article HTML only (Exact Section Links only!)
  renderDocArticleHtml() {
    const currentLesson = this.getLessonById(this.activeLessonId) || this.getAllLessons()[0];
    const currentModule = COURSE_DATA.modules.find(m => m.id === currentLesson.moduleId) || COURSE_DATA.modules[0];
    const lang = I18N.currentLang;

    const state = this.getLessonState(currentLesson.id);
    const statusLabels = [I18N.t('statusTodo'), I18N.t('statusProgress'), I18N.t('statusDone')];

    // Pagination
    const all = this.getAllLessons();
    const currentIndex = all.findIndex(l => l.id === currentLesson.id);
    const prevLesson = currentIndex > 0 ? all[currentIndex - 1] : null;
    const nextLesson = currentIndex < all.length - 1 ? all[currentIndex + 1] : null;

    const summaryText = currentLesson.summary[lang] || currentLesson.summary['en'];
    const sourceBadge = this.getSourceBadgeHtml(currentLesson.source);

    // Filter to ONLY exact video jump links (all external book bloat removed!)
    let resourceCardsHtml = '';

    if (currentLesson.ytUrl && currentLesson.timeSeconds !== null) {
      resourceCardsHtml += `
        <a href="${currentLesson.ytUrl}" target="_blank" rel="noopener noreferrer" class="resource-card video-resource-card">
          <span class="resource-icon">🎬</span>
          <div class="resource-info">
            <span class="resource-badge">Bro Code 6h Course</span>
            <span class="resource-name">Jump to ${currentLesson.timestamp} ↗</span>
          </div>
        </a>
      `;
    }

    // Takeaways
    let takeawaysHtml = '';
    if (currentLesson.keyTakeaways) {
      takeawaysHtml = `
        <div class="takeaways-card">
          <h3>💡 ${I18N.t('keyTakeaways')}</h3>
          <ul>
            ${currentLesson.keyTakeaways.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Per-lesson quick quiz with randomized options
    let quickQuizHtml = '';
    const lessonQuiz = (typeof LESSON_QUIZZES !== 'undefined') ? LESSON_QUIZZES[currentLesson.id] : null;
    if (lessonQuiz) {
      const qText = lessonQuiz.question['en'] || lessonQuiz.question;
      const expText = lessonQuiz.explanation['en'] || lessonQuiz.explanation;

      // Shuffle options randomly
      const shuffledOptions = shuffleArray(lessonQuiz.options);
      let optsHtml = '';
      shuffledOptions.forEach((opt, oIdx) => {
        const oText = opt.text['en'] || opt.text;
        optsHtml += `
          <button class="quiz-opt-btn" data-correct="${opt.correct}" data-opt-index="${oIdx}">
            <span class="opt-bullet">⚪</span>
            <span class="quiz-opt-text">${escapeHtml(oText)}</span>
          </button>
        `;
      });

      quickQuizHtml = `
        <div class="lesson-quiz-box">
          <div class="quiz-header">
            <span>🧪</span> Quick Knowledge Check
          </div>
          <div style="font-size: 0.95rem; font-weight: 600; color: #fff; margin-bottom: 8px;">
            ${qText}
          </div>
          <div class="quiz-options" id="lesson-quiz-options">
            ${optsHtml}
          </div>
          <div class="quiz-feedback" id="lesson-quiz-feedback" data-exp="${escapeHtml(expText)}"></div>
        </div>
      `;
    }

    const hasModuleQuiz = (typeof MODULE_QUIZZES !== 'undefined') && (MODULE_QUIZZES[currentModule.id] || MODULE_QUIZZES['mod-' + currentModule.id]);
    const moduleQuizBtnHtml = hasModuleQuiz ? `
      <button class="module-quiz-badge-btn" id="open-module-quiz-btn" data-module-id="${currentModule.id}">
        <span>🏆</span> ${I18N.t('moduleQuizBtn')}
      </button>
    ` : '';

    return `
      <article class="doc-article">
        <div class="doc-breadcrumbs">
          <span>C++</span>
          <span>›</span>
          <span>${currentModule.title['en'] || currentModule.title}</span>
          <span>›</span>
          <span class="current">${currentLesson.title}</span>
        </div>

        <header class="doc-header">
          <div style="margin-bottom: 6px;">
            ${sourceBadge}
          </div>
          <div class="doc-title-row">
            <h2>${currentLesson.id}. ${currentLesson.title}</h2>
            <div class="lesson-action-pills">
              <button class="status-toggle-btn" id="doc-status-toggle" data-state="${state}">
                <span class="lesson-status-dot status-dot-${state}"></span>
                <span>${statusLabels[state]}</span>
              </button>
              <button class="share-topic-btn" id="share-lesson-btn" title="Copy Topic Link">
                <span>🔗</span> Share
              </button>
              ${moduleQuizBtnHtml}
            </div>
          </div>
          <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.6;">
            ${summaryText}
          </p>
        </header>

        <!-- Video Jump Links ONLY (Bloat removed) -->
        ${resourceCardsHtml ? `<div class="resource-grid">${resourceCardsHtml}</div>` : ''}

        <!-- Code Sample -->
        <div class="code-section">
          <div class="code-header">
            <div class="code-lang-tag">
              <span>⚙️</span> C++ (Modern C++20)
            </div>
            <div class="code-header-actions">
              <button class="code-btn" id="copy-code-btn">
                <span>📋</span> Copy Code
              </button>
            </div>
          </div>

          <div class="code-body">
            <pre><code id="lesson-code-content">${escapeHtml(currentLesson.code)}</code></pre>
          </div>

          <div class="console-output">
            <div class="console-title">
              <span>💻</span> Expected Output
            </div>
            <div class="console-body" id="console-text">${escapeHtml(currentLesson.output || "Program executed successfully.")}</div>
          </div>
        </div>

        ${takeawaysHtml}
        ${quickQuizHtml}

        <!-- Pagination -->
        <div class="doc-pagination">
          ${prevLesson ? `
            <a class="pagination-btn" href="#/doc/${prevLesson.id}">
              <span class="direction-label">← Previous Lesson</span>
              <span class="target-title">${prevLesson.id}. ${prevLesson.title}</span>
            </a>
          ` : `<div></div>`}

          ${nextLesson ? `
            <a class="pagination-btn" style="text-align: right;" href="#/doc/${nextLesson.id}">
              <span class="direction-label">Next Lesson →</span>
              <span class="target-title">${nextLesson.id}. ${nextLesson.title}</span>
            </a>
          ` : `<div></div>`}
        </div>
      </article>
    `;
  },

  attachDocEventListeners() {
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    if (closeSidebarBtn) {
      closeSidebarBtn.addEventListener('click', () => this.closeMobileSidebar());
    }

    const currentLesson = this.getLessonById(this.activeLessonId);
    if (!currentLesson) return;

    // Status toggle
    const statusBtn = document.getElementById('doc-status-toggle');
    if (statusBtn) {
      statusBtn.addEventListener('click', () => {
        const nextState = this.cycleLessonState(currentLesson.id);
        statusBtn.setAttribute('data-state', nextState);
        const statusLabels = [I18N.t('statusTodo'), I18N.t('statusProgress'), I18N.t('statusDone')];
        statusBtn.innerHTML = `
          <span class="lesson-status-dot status-dot-${nextState}"></span>
          <span>${statusLabels[nextState]}</span>
        `;
        const sideDot = document.querySelector(`.sidebar-lesson-item[data-lesson-id="${currentLesson.id}"] .lesson-status-dot`);
        if (sideDot) sideDot.className = `lesson-status-dot status-dot-${nextState}`;
      });
    }

    // Share link
    const shareBtn = document.getElementById('share-lesson-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => this.copyShareLink(currentLesson.id));
    }

    // Copy code
    const copyBtn = document.getElementById('copy-code-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => this.copyCodeSnippet(currentLesson.code));
    }

    // Little Section: Quick Quiz option selection with mistake review & retry
    const optButtons = document.querySelectorAll('#lesson-quiz-options .quiz-opt-btn');
    const feedbackBox = document.getElementById('lesson-quiz-feedback');
    const currentLessonQuiz = (typeof LESSON_QUIZZES !== 'undefined') ? LESSON_QUIZZES[currentLesson.id] : null;

    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) return;

        optButtons.forEach(b => {
          b.classList.remove('selected', 'correct', 'incorrect', 'correct-reveal');
          const bullet = b.querySelector('.opt-bullet') || b.querySelector('span');
          if (bullet) bullet.textContent = '⚪';
          b.classList.add('disabled');
        });
        btn.classList.add('selected');

        const isCorrect = btn.getAttribute('data-correct') === 'true';
        const userBullet = btn.querySelector('.opt-bullet') || btn.querySelector('span');
        const userText = btn.querySelector('.quiz-opt-text')?.textContent || btn.textContent.trim();
        const expText = feedbackBox.getAttribute('data-exp') || '';

        // Find the correct button
        const correctBtn = document.querySelector('#lesson-quiz-options .quiz-opt-btn[data-correct="true"]');
        const correctText = correctBtn ? (correctBtn.querySelector('.quiz-opt-text')?.textContent || correctBtn.textContent.trim()) : '';

        if (isCorrect) {
          btn.classList.add('correct');
          if (userBullet) userBullet.textContent = '✅';
          feedbackBox.className = 'quiz-feedback show success';
          feedbackBox.innerHTML = `
            <div style="font-weight: 700; color: #4ade80; font-size: 0.95rem; margin-bottom: 6px;">
              ✅ Correct! 🎉
            </div>
            <div class="fb-explanation">
              <strong>Explanation:</strong> ${escapeHtml(expText)}
            </div>
          `;

          // Award Quiz XP (once per quiz)
          if (!this.userState.solvedQuizzes) this.userState.solvedQuizzes = {};
          if (!this.userState.solvedQuizzes[currentLesson.id]) {
            this.userState.solvedQuizzes[currentLesson.id] = true;
            this.saveState();
            this.spawnXpFloater(25, btn);
            this.updateProgressMeter();
          }
        } else {
          btn.classList.add('incorrect');
          if (userBullet) userBullet.textContent = '❌';

          // Reveal the correct option clearly
          if (correctBtn) {
            correctBtn.classList.add('correct-reveal');
            const corBullet = correctBtn.querySelector('.opt-bullet') || correctBtn.querySelector('span');
            if (corBullet) corBullet.textContent = '✅';
          }

          feedbackBox.className = 'quiz-feedback show error';
          feedbackBox.innerHTML = `
            <div style="font-weight: 700; color: #f87171; font-size: 0.95rem; margin-bottom: 6px;">
              ❌ ${I18N.t('quizIncorrect')}
            </div>
            <div class="fb-comparison">
              <div class="fb-item">
                <span class="fb-badge fb-badge-wrong">${I18N.t('yourChoice')}</span>
                <span style="color: #fca5a5;">${escapeHtml(userText)}</span>
              </div>
              <div class="fb-item">
                <span class="fb-badge fb-badge-correct">${I18N.t('correctChoice')}</span>
                <span style="color: #4ade80; font-weight: 700;">${escapeHtml(correctText)}</span>
              </div>
            </div>
            <div class="fb-explanation">
              <strong>${I18N.t('explanationLabel')}</strong> ${escapeHtml(expText)}
            </div>
            <div>
              <button class="btn-retry-lesson-quiz" id="retry-lesson-quiz-btn">
                <span>🔄</span> ${I18N.t('tryAgainBtn')}
              </button>
            </div>
          `;

          if (currentLessonQuiz) MistakesTracker.addMistake(currentLessonQuiz);
          this.updateMistakesNavButton();

          const retryBtn = document.getElementById('retry-lesson-quiz-btn');
          if (retryBtn) {
            retryBtn.addEventListener('click', () => {
              optButtons.forEach(b => {
                b.classList.remove('selected', 'correct', 'incorrect', 'correct-reveal', 'disabled');
                const bullet = b.querySelector('.opt-bullet') || b.querySelector('span');
                if (bullet) bullet.textContent = '⚪';
              });
              feedbackBox.className = 'quiz-feedback';
              feedbackBox.innerHTML = '';
            });
          }
        }
      });
    });

    // Big Section: Module Master Quiz button
    const openModQuizBtn = document.getElementById('open-module-quiz-btn');
    if (openModQuizBtn) {
      openModQuizBtn.addEventListener('click', () => {
        const modId = openModQuizBtn.getAttribute('data-module-id');
        this.openModuleMasterQuiz(modId);
      });
    }
  },

  // Big Section: Module Master Quiz
  openModuleMasterQuiz(moduleId) {
    if (typeof MODULE_QUIZZES === 'undefined') return;
    const modQuizData = MODULE_QUIZZES[moduleId] || MODULE_QUIZZES['mod-' + moduleId];
    if (!modQuizData) return;

    const rawQuestions = Array.isArray(modQuizData) ? modQuizData : (modQuizData.questions || []);
    if (!rawQuestions || rawQuestions.length === 0) return;

    const mod = this.getModuleById(moduleId);
    const modTitle = mod ? (mod.title.en || mod.title) : ('Module ' + moduleId);

    this.activeModuleQuiz = {
      moduleId: moduleId,
      originalModuleId: moduleId,
      isRetest: false,
      title: modQuizData.title || {
        en: '🏆 ' + modTitle + ' Mastery Exam',
        fr: '🏆 Examen de Maîtrise ' + modTitle
      },
      questions: shuffleArray(rawQuestions).map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }))
    };

    this.quizCurrentStep = 0;
    this.quizSelectedAnswers = {};
    this.quizSubmitted = false;
    this.moduleReviewFilter = 'mistakes';

    const modal = document.getElementById('module-quiz-modal');
    if (modal) {
      this.renderModuleQuizModal();
      modal.classList.add('open');
    }
  },

  startModuleMistakesRetest(mistakesList) {
    if (!mistakesList || mistakesList.length === 0) return;

    this.activeModuleQuiz = {
      moduleId: this.activeModuleQuiz.moduleId,
      originalModuleId: this.activeModuleQuiz.originalModuleId || this.activeModuleQuiz.moduleId,
      isRetest: true,
      title: {
        en: `🎯 Retest Mode: Missed Questions (${mistakesList.length})`,
        fr: `🎯 Mode Rattrapage : Questions Manquées (${mistakesList.length})`
      },
      questions: shuffleArray(mistakesList).map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }))
    };

    this.quizCurrentStep = 0;
    this.quizSelectedAnswers = {};
    this.quizSubmitted = false;
    this.moduleReviewFilter = 'mistakes';
    this.renderModuleQuizModal();
  },

  renderModuleQuizModal() {
    const modalBody = document.getElementById('module-quiz-modal-body');
    const modalTitle = document.getElementById('module-quiz-modal-title');
    if (!modalBody || !this.activeModuleQuiz) return;

    const lang = I18N.currentLang;
    modalTitle.textContent = this.activeModuleQuiz.title[lang] || this.activeModuleQuiz.title['en'];

    if (this.quizSubmitted) {
      const results = this.activeModuleQuiz.questions.map((q, qIdx) => {
        const selectedOptIdx = this.quizSelectedAnswers[qIdx];
        const correctOptIdx = q.options.findIndex(o => o.correct);
        const isCorrect = (selectedOptIdx !== undefined && selectedOptIdx === correctOptIdx);
        return {
          q,
          qIdx,
          selectedOptIdx,
          correctOptIdx,
          isCorrect
        };
      });

      const correctResults = results.filter(r => r.isCorrect);
      const incorrectResults = results.filter(r => !r.isCorrect);
      const correctCount = correctResults.length;
      const wrongCount = incorrectResults.length;
      const total = results.length;
      const scorePct = Math.round((correctCount / total) * 100);

      // Track mistakes in centralized bank
      incorrectResults.forEach(r => MistakesTracker.addMistake(r.q));
      if (this.activeModuleQuiz.isRetest) {
        correctResults.forEach(r => MistakesTracker.removeMistake(r.q));
      }
      this.updateMistakesNavButton();

      if (this.moduleReviewFilter === 'mistakes' && wrongCount === 0) {
        this.moduleReviewFilter = 'all';
      }

      const filteredResults = results.filter(r => {
        if (this.moduleReviewFilter === 'mistakes') return !r.isCorrect;
        if (this.moduleReviewFilter === 'correct') return r.isCorrect;
        return true;
      });

      const isPerfect = (wrongCount === 0);
      const isRetestResolved = (this.activeModuleQuiz.isRetest && isPerfect);

      // Award Module Mastery XP (+100 XP if passed >= 70%)
      if (scorePct >= 70) {
        if (!this.userState.solvedModuleQuizzes) this.userState.solvedModuleQuizzes = {};
        if (!this.userState.solvedModuleQuizzes[this.activeModuleQuiz.moduleId]) {
          this.userState.solvedModuleQuizzes[this.activeModuleQuiz.moduleId] = true;
          this.saveState();
          this.spawnXpFloater(100, null);
          this.updateProgressMeter();
        }
      }

      modalBody.innerHTML = `
        <div style="padding: 10px 4px;">
          <!-- Score Summary Header -->
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-size: 3rem; margin-bottom: 6px;">${isPerfect ? '🏆' : '📚'}</div>
            <h3 style="color: ${isPerfect ? 'var(--accent-green)' : 'var(--accent-blue)'}; font-size: 1.4rem;">
              ${isRetestResolved ? I18N.t('customRetestSuccess') : I18N.t('quizCompleted')}
            </h3>
            <p style="font-size: 1.15rem; margin: 8px 0;">
              ${I18N.t('quizScore')} <strong>${correctCount} / ${total} (${scorePct}%)</strong>
            </p>
            ${isPerfect ? `
              <div style="color: #4ade80; font-weight: 600; font-size: 0.95rem; margin-top: 4px;">
                ${I18N.t('noMistakesMessage')}
              </div>
            ` : ''}
          </div>

          <!-- Top Action Buttons -->
          <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 24px; flex-wrap: wrap;">
            ${wrongCount > 0 ? `
              <button class="btn-retest-mistakes" id="retest-mod-mistakes-btn">
                <span>🎯</span> ${I18N.t('practiceMistakesBtn', { count: wrongCount })}
              </button>
            ` : ''}
            <button class="btn-secondary" id="retake-full-mod-quiz-btn" style="padding: 8px 18px; font-weight: 600;">
              ${I18N.t('retakeAllBtn')}
            </button>
          </div>

          <!-- Relearn & Detailed Breakdown Section -->
          <div class="relearn-section">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
              <div>
                <h4 style="color: #38bdf8; font-size: 1.05rem; margin-bottom: 2px;">
                  ${I18N.t('relearnHeader')}
                </h4>
                <p style="font-size: 0.82rem; color: var(--text-secondary);">
                  ${I18N.t('relearnSub')}
                </p>
              </div>

              <!-- Filter Pills -->
              <div class="relearn-filter-bar">
                <button class="relearn-filter-btn ${this.moduleReviewFilter === 'all' ? 'active' : ''}" data-mod-filter="all">
                  ${I18N.t('mistakesFilterAll', { count: total })}
                </button>
                ${wrongCount > 0 ? `
                  <button class="relearn-filter-btn filter-wrong ${this.moduleReviewFilter === 'mistakes' ? 'active' : ''}" data-mod-filter="mistakes">
                    ${I18N.t('mistakesFilterWrong', { count: wrongCount })}
                  </button>
                ` : ''}
                <button class="relearn-filter-btn filter-correct ${this.moduleReviewFilter === 'correct' ? 'active' : ''}" data-mod-filter="correct">
                  ${I18N.t('mistakesFilterCorrect', { count: correctCount })}
                </button>
              </div>
            </div>

            <!-- Review Cards List -->
            <div class="review-list">
              ${filteredResults.map(r => {
                const qText = r.q.question[lang] || r.q.question['en'];
                const userText = (r.selectedOptIdx !== undefined && r.q.options[r.selectedOptIdx])
                  ? (r.q.options[r.selectedOptIdx].text[lang] || r.q.options[r.selectedOptIdx].text['en'])
                  : (lang === 'fr' ? "(Non répondu)" : "(Skipped)");
                const correctOpt = r.q.options[r.correctOptIdx];
                const correctText = correctOpt ? (correctOpt.text[lang] || correctOpt.text['en']) : '';
                const expText = r.q.explanation ? (r.q.explanation[lang] || r.q.explanation['en']) : '';

                return `
                  <div class="review-card ${r.isCorrect ? 'correct' : 'wrong'}">
                    <div class="review-card-header">
                      <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">Question #${r.qIdx + 1}</span>
                      <span class="review-badge ${r.isCorrect ? 'correct' : 'wrong'}">
                        ${r.isCorrect ? '✅ ' + I18N.t('passedBadge') : '❌ ' + (lang === 'fr' ? 'Erreur' : 'Mistake')}
                      </span>
                    </div>
                    <div class="review-card-title">${escapeHtml(qText)}</div>

                    <div class="review-answer-row ${r.isCorrect ? 'user-correct' : 'user-wrong'}">
                      <span style="font-weight: 600; min-width: 110px;">${I18N.t('yourChoice')}</span>
                      <span>${escapeHtml(userText)} ${r.isCorrect ? '✅' : '❌'}</span>
                    </div>

                    ${!r.isCorrect ? `
                      <div class="review-answer-row good-answer">
                        <span style="font-weight: 700; min-width: 110px; color: #38bdf8;">${I18N.t('correctChoice')}</span>
                        <span style="font-weight: 700; color: #86efac;">${escapeHtml(correctText)} ✅</span>
                      </div>
                    ` : ''}

                    ${expText ? `
                      <div class="review-explanation">
                        <strong>${I18N.t('explanationLabel')}</strong> ${escapeHtml(expText)}
                      </div>
                    ` : ''}
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Bottom Action Buttons -->
            <div style="display: flex; justify-content: center; gap: 12px; margin-top: 24px; flex-wrap: wrap;">
              ${wrongCount > 0 ? `
                <button class="btn-retest-mistakes" id="bottom-retest-mod-mistakes-btn">
                  <span>🎯</span> ${I18N.t('practiceMistakesBtn', { count: wrongCount })}
                </button>
              ` : ''}
              <button class="btn-secondary" id="bottom-retake-full-mod-quiz-btn" style="padding: 8px 18px; font-weight: 600;">
                ${I18N.t('retakeAllBtn')}
              </button>
            </div>
          </div>
        </div>
      `;

      // Event Listeners for Review Screen
      const retestBtn = document.getElementById('retest-mod-mistakes-btn');
      const bRetestBtn = document.getElementById('bottom-retest-mod-mistakes-btn');
      const onRetest = () => this.startModuleMistakesRetest(incorrectResults.map(r => r.q));
      if (retestBtn) retestBtn.addEventListener('click', onRetest);
      if (bRetestBtn) bRetestBtn.addEventListener('click', onRetest);

      const retakeBtn = document.getElementById('retake-full-mod-quiz-btn');
      const bRetakeBtn = document.getElementById('bottom-retake-full-mod-quiz-btn');
      const onRetake = () => this.openModuleMasterQuiz(this.activeModuleQuiz.originalModuleId || this.activeModuleQuiz.moduleId);
      if (retakeBtn) retakeBtn.addEventListener('click', onRetake);
      if (bRetakeBtn) bRetakeBtn.addEventListener('click', onRetake);

      document.querySelectorAll('[data-mod-filter]').forEach(fBtn => {
        fBtn.addEventListener('click', () => {
          this.moduleReviewFilter = fBtn.getAttribute('data-mod-filter');
          this.renderModuleQuizModal();
        });
      });
      return;
    }

    // Render Question Screen
    const q = this.activeModuleQuiz.questions[this.quizCurrentStep];
    const total = this.activeModuleQuiz.questions.length;
    const qText = q.question[lang] || q.question['en'];

    let optsHtml = '';
    q.options.forEach((opt, oIdx) => {
      const isSelected = this.quizSelectedAnswers[this.quizCurrentStep] === oIdx;
      const oText = opt.text[lang] || opt.text['en'];
      optsHtml += `
        <button class="quiz-opt-btn ${isSelected ? 'selected' : ''}" data-opt-idx="${oIdx}">
          <span>${isSelected ? '🔵' : '⚪'}</span>
          <span>${escapeHtml(oText)}</span>
        </button>
      `;
    });

    const isRetest = this.activeModuleQuiz.isRetest;

    modalBody.innerHTML = `
      <div>
        ${isRetest ? `
          <div class="retest-banner">
            <span>${I18N.t('customRetestMode', { count: total })}</span>
            <span style="font-size: 0.72rem; background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 4px; color: #fff;">Targeted Retest</span>
          </div>
        ` : ''}

        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">Question ${this.quizCurrentStep + 1} of ${total}</div>
        <h4 style="font-size: 1.1rem; color: #fff; margin-bottom: 16px; line-height: 1.4;">${escapeHtml(qText)}</h4>
        <div class="quiz-options" id="mod-quiz-options">
          ${optsHtml}
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 24px;">
          ${this.quizCurrentStep > 0 ? `<button class="btn-secondary" id="prev-mod-q-btn">← Previous</button>` : `<div></div>`}
          ${this.quizCurrentStep < total - 1 ? `
            <button class="btn-secondary" id="next-mod-q-btn">Next →</button>
          ` : `
            <button class="btn-secondary" style="background: var(--accent-green); color: #000; font-weight: 700; padding: 8px 18px;" id="submit-mod-q-btn">Submit Quiz</button>
          `}
        </div>
      </div>
    `;

    document.querySelectorAll('#mod-quiz-options .quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        this.quizSelectedAnswers[this.quizCurrentStep] = optIdx;
        this.renderModuleQuizModal();
      });
    });

    const prevBtn = document.getElementById('prev-mod-q-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => { this.quizCurrentStep--; this.renderModuleQuizModal(); });

    const nextBtn = document.getElementById('next-mod-q-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => { this.quizCurrentStep++; this.renderModuleQuizModal(); });

    const submitBtn = document.getElementById('submit-mod-q-btn');
    if (submitBtn) submitBtn.addEventListener('click', () => { this.quizSubmitted = true; this.renderModuleQuizModal(); });
  },

  // Grand Master Exam (Very Big Quiz of Everything)
  startGrandExam(length = 25) {
    if (typeof GRAND_EXAM_QUESTIONS === 'undefined') return;

    let pool = shuffleArray(GRAND_EXAM_QUESTIONS);
    if (length !== 'all') {
      pool = pool.slice(0, Math.min(parseInt(length, 10), pool.length));
    }

    this.grandExamOriginalPool = pool;
    this.grandExamQuestions = pool.map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));

    this.grandExamStep = 0;
    this.grandExamAnswers = {};
    this.grandExamSubmitted = false;
    this.grandExamIsRetest = false;
    this.grandExamReviewFilter = 'mistakes';

    const modal = document.getElementById('grand-exam-modal');
    if (modal) {
      this.renderGrandExamModal();
      modal.classList.add('open');
    }
  },

  startGrandExamMistakesRetest(mistakesList) {
    if (!mistakesList || mistakesList.length === 0) return;

    this.grandExamQuestions = shuffleArray(mistakesList).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    this.grandExamStep = 0;
    this.grandExamAnswers = {};
    this.grandExamSubmitted = false;
    this.grandExamIsRetest = true;
    this.grandExamReviewFilter = 'mistakes';
    this.renderGrandExamModal();
  },

  renderGrandExamModal() {
    const modalBody = document.getElementById('grand-exam-modal-body');
    const modalTitle = document.getElementById('grand-exam-modal-title');
    if (!modalBody) return;

    const lang = I18N.currentLang;
    modalTitle.textContent = this.grandExamIsRetest
      ? (lang === 'fr' ? '🎯 Test Ciblé : Rattrapage des Erreurs' : '🎯 Targeted Retest: Missed Questions')
      : I18N.t('grandExamTitle');

    if (this.grandExamSubmitted) {
      // Evaluate results
      const results = this.grandExamQuestions.map((q, idx) => {
        const selectedIdx = this.grandExamAnswers[idx];
        const correctOptIdx = q.options.findIndex(o => o.correct);
        const isCorrect = (selectedIdx !== undefined && selectedIdx === correctOptIdx);
        return {
          q,
          idx,
          selectedIdx,
          correctOptIdx,
          isCorrect
        };
      });

      const correctResults = results.filter(r => r.isCorrect);
      const incorrectResults = results.filter(r => !r.isCorrect);
      const correctCount = correctResults.length;
      const wrongCount = incorrectResults.length;
      const total = results.length;
      const scorePct = Math.round((correctCount / total) * 100);
      const passed = scorePct >= 70;

      // Track in centralized mistakes bank
      incorrectResults.forEach(r => MistakesTracker.addMistake(r.q));
      if (this.grandExamIsRetest) {
        correctResults.forEach(r => MistakesTracker.removeMistake(r.q));
      }
      this.updateMistakesNavButton();

      if (this.grandExamReviewFilter === 'mistakes' && wrongCount === 0) {
        this.grandExamReviewFilter = 'all';
      }

      const filteredResults = results.filter(r => {
        if (this.grandExamReviewFilter === 'mistakes') return !r.isCorrect;
        if (this.grandExamReviewFilter === 'correct') return r.isCorrect;
        return true;
      });

      const isPerfect = (wrongCount === 0);

      modalBody.innerHTML = `
        <div style="padding: 10px 4px;">
          <!-- Score Summary Header -->
          <div style="text-align: center; margin-bottom: 20px;">
            <div style="font-size: 3.5rem; margin-bottom: 6px;">${isPerfect ? '🎖️' : (passed ? '🎉' : '📚')}</div>
            <h3 style="font-size: 1.45rem; color: ${passed ? 'var(--accent-green)' : 'var(--accent-amber)'}; margin-top: 4px;">
              ${this.grandExamIsRetest && isPerfect ? I18N.t('customRetestSuccess') : (passed ? I18N.t('examPassed') : I18N.t('examFailed'))}
            </h3>
            <p style="font-size: 1.2rem; margin-top: 8px;">
              ${I18N.t('quizScore')} <strong>${correctCount} / ${total} (${scorePct}%)</strong>
            </p>
            ${isPerfect ? `
              <div style="color: #4ade80; font-weight: 600; font-size: 0.95rem; margin-top: 4px;">
                ${I18N.t('noMistakesMessage')}
              </div>
            ` : ''}
          </div>

          <!-- Top Action Buttons -->
          <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 24px; flex-wrap: wrap;">
            ${wrongCount > 0 ? `
              <button class="btn-retest-mistakes" id="retest-grand-mistakes-btn">
                <span>🎯</span> ${I18N.t('practiceMistakesBtn', { count: wrongCount })}
              </button>
            ` : ''}
            <button class="btn-secondary" id="restart-grand-exam-btn" style="padding: 8px 18px; font-weight: 600;">
              ${I18N.t('retakeAllBtn')}
            </button>
          </div>

          <!-- Relearn & Detailed Breakdown Section -->
          <div class="relearn-section">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
              <div>
                <h4 style="color: #38bdf8; font-size: 1.05rem; margin-bottom: 2px;">
                  ${I18N.t('relearnHeader')}
                </h4>
                <p style="font-size: 0.82rem; color: var(--text-secondary);">
                  ${I18N.t('relearnSub')}
                </p>
              </div>

              <!-- Filter Pills -->
              <div class="relearn-filter-bar">
                <button class="relearn-filter-btn ${this.grandExamReviewFilter === 'all' ? 'active' : ''}" data-grand-filter="all">
                  ${I18N.t('mistakesFilterAll', { count: total })}
                </button>
                ${wrongCount > 0 ? `
                  <button class="relearn-filter-btn filter-wrong ${this.grandExamReviewFilter === 'mistakes' ? 'active' : ''}" data-grand-filter="mistakes">
                    ${I18N.t('mistakesFilterWrong', { count: wrongCount })}
                  </button>
                ` : ''}
                <button class="relearn-filter-btn filter-correct ${this.grandExamReviewFilter === 'correct' ? 'active' : ''}" data-grand-filter="correct">
                  ${I18N.t('mistakesFilterCorrect', { count: correctCount })}
                </button>
              </div>
            </div>

            <!-- Review Cards List -->
            <div class="review-list">
              ${filteredResults.map(r => {
                const qText = r.q.question[lang] || r.q.question['en'];
                const userText = (r.selectedIdx !== undefined && r.q.options[r.selectedIdx])
                  ? (r.q.options[r.selectedIdx].text[lang] || r.q.options[r.selectedIdx].text['en'])
                  : (lang === 'fr' ? "(Non répondu)" : "(Skipped)");
                const correctOpt = r.q.options[r.correctOptIdx];
                const correctText = correctOpt ? (correctOpt.text[lang] || correctOpt.text['en']) : '';
                const expText = r.q.explanation ? (r.q.explanation[lang] || r.q.explanation['en']) : '';

                return `
                  <div class="review-card ${r.isCorrect ? 'correct' : 'wrong'}">
                    <div class="review-card-header">
                      <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">
                        #${r.idx + 1} &bull; <span style="color: var(--accent-purple);">${r.q.subject || 'Core'}</span>
                      </span>
                      <span class="review-badge ${r.isCorrect ? 'correct' : 'wrong'}">
                        ${r.isCorrect ? '✅ ' + I18N.t('passedBadge') : '❌ ' + (lang === 'fr' ? 'Erreur' : 'Mistake')}
                      </span>
                    </div>
                    <div class="review-card-title">${escapeHtml(qText)}</div>

                    <div class="review-answer-row ${r.isCorrect ? 'user-correct' : 'user-wrong'}">
                      <span style="font-weight: 600; min-width: 110px;">${I18N.t('yourChoice')}</span>
                      <span>${escapeHtml(userText)} ${r.isCorrect ? '✅' : '❌'}</span>
                    </div>

                    ${!r.isCorrect ? `
                      <div class="review-answer-row good-answer">
                        <span style="font-weight: 700; min-width: 110px; color: #38bdf8;">${I18N.t('correctChoice')}</span>
                        <span style="font-weight: 700; color: #86efac;">${escapeHtml(correctText)} ✅</span>
                      </div>
                    ` : ''}

                    ${expText ? `
                      <div class="review-explanation">
                        <strong>${I18N.t('explanationLabel')}</strong> ${escapeHtml(expText)}
                      </div>
                    ` : ''}
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Bottom Action Buttons -->
            <div style="display: flex; justify-content: center; gap: 12px; margin-top: 24px; flex-wrap: wrap;">
              ${wrongCount > 0 ? `
                <button class="btn-retest-mistakes" id="bottom-retest-grand-mistakes-btn">
                  <span>🎯</span> ${I18N.t('practiceMistakesBtn', { count: wrongCount })}
                </button>
              ` : ''}
              <button class="btn-secondary" id="bottom-restart-grand-exam-btn" style="padding: 8px 18px; font-weight: 600;">
                ${I18N.t('retakeAllBtn')}
              </button>
            </div>
          </div>
        </div>
      `;

      // Event listeners
      const retestBtn = document.getElementById('retest-grand-mistakes-btn');
      const bRetestBtn = document.getElementById('bottom-retest-grand-mistakes-btn');
      const onRetest = () => this.startGrandExamMistakesRetest(incorrectResults.map(r => r.q));
      if (retestBtn) retestBtn.addEventListener('click', onRetest);
      if (bRetestBtn) bRetestBtn.addEventListener('click', onRetest);

      const restartBtn = document.getElementById('restart-grand-exam-btn');
      const bRestartBtn = document.getElementById('bottom-restart-grand-exam-btn');
      const onRestart = () => this.startGrandExam(25);
      if (restartBtn) restartBtn.addEventListener('click', onRestart);
      if (bRestartBtn) bRestartBtn.addEventListener('click', onRestart);

      document.querySelectorAll('[data-grand-filter]').forEach(fBtn => {
        fBtn.addEventListener('click', () => {
          this.grandExamReviewFilter = fBtn.getAttribute('data-grand-filter');
          this.renderGrandExamModal();
        });
      });
      return;
    }

    // Render Grand Exam Question
    const q = this.grandExamQuestions[this.grandExamStep];
    const total = this.grandExamQuestions.length;
    const qText = q.question[lang] || q.question['en'];

    let optsHtml = '';
    q.options.forEach((opt, oIdx) => {
      const isSelected = this.grandExamAnswers[this.grandExamStep] === oIdx;
      const oText = opt.text[lang] || opt.text['en'];
      optsHtml += `
        <button class="quiz-opt-btn ${isSelected ? 'selected' : ''}" data-opt-idx="${oIdx}">
          <span>${isSelected ? '🔵' : '⚪'}</span>
          <span>${escapeHtml(oText)}</span>
        </button>
      `;
    });

    const progressPct = Math.round(((this.grandExamStep + 1) / total) * 100);

    modalBody.innerHTML = `
      <div>
        ${this.grandExamIsRetest ? `
          <div class="retest-banner">
            <span>${I18N.t('customRetestMode', { count: total })}</span>
            <span style="font-size: 0.72rem; background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 4px; color: #fff;">Grand Master Retest</span>
          </div>
        ` : ''}

        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 6px;">
          <span>Category: <strong style="color: var(--accent-purple);">${q.subject || 'Core'}</strong></span>
          <span>Question ${this.grandExamStep + 1} of ${total} (${progressPct}%)</span>
        </div>
        <div style="height: 4px; background: #1e293b; border-radius: 2px; overflow: hidden; margin-bottom: 16px;">
          <div style="height: 100%; width: ${progressPct}%; background: var(--accent-blue);"></div>
        </div>

        <h4 style="font-size: 1.15rem; color: #fff; margin-bottom: 18px; line-height: 1.4;">${escapeHtml(qText)}</h4>
        <div class="quiz-options" id="grand-exam-options">
          ${optsHtml}
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 24px;">
          ${this.grandExamStep > 0 ? `<button class="btn-secondary" id="prev-grand-q-btn">← Previous</button>` : `<div></div>`}
          ${this.grandExamStep < total - 1 ? `
            <button class="btn-secondary" id="next-grand-q-btn">Next →</button>
          ` : `
            <button class="btn-secondary" style="background: var(--accent-green); color: #000; font-weight: 700; padding: 8px 18px;" id="submit-grand-exam-btn">Submit Exam</button>
          `}
        </div>
      </div>
    `;

    document.querySelectorAll('#grand-exam-options .quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        this.grandExamAnswers[this.grandExamStep] = optIdx;
        this.renderGrandExamModal();
      });
    });

    const prevBtn = document.getElementById('prev-grand-q-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => { this.grandExamStep--; this.renderGrandExamModal(); });

    const nextBtn = document.getElementById('next-grand-q-btn');
    if (nextBtn) nextBtn.addEventListener('click', () => { this.grandExamStep++; this.renderGrandExamModal(); });

    const submitBtn = document.getElementById('submit-grand-exam-btn');
    if (submitBtn) submitBtn.addEventListener('click', () => { this.grandExamSubmitted = true; this.renderGrandExamModal(); });
  },

  // =========================================================================
  // QUIZ ARENA VIEW (All 77 Quizzes + Module Mastery + Grand Exam)
  // =========================================================================
  activeQuizModuleFilter: 'all',
  activeQuizStatusFilter: 'all',

  renderQuizzesLayout() {
    const solvedQuizzes = this.userState.solvedQuizzes || {};
    const solvedCount = Object.keys(solvedQuizzes).length;
    const allLessons = this.getAllLessons();
    const totalQuizCount = allLessons.length;
    const quizXP = solvedCount * 25;
    const progressPct = Math.min(100, Math.round((solvedCount / totalQuizCount) * 100));

    const activeModFilter = this.activeQuizModuleFilter || 'all';
    const activeStatusFilter = this.activeQuizStatusFilter || 'all';

    // Module pills
    let modFilterHtml = `
      <button class="quiz-filter-chip ${activeModFilter === 'all' ? 'active' : ''}" data-mod-filter="all">
        All Modules (77)
      </button>
    `;
    COURSE_DATA.modules.forEach(m => {
      const qCount = m.lessons.length;
      modFilterHtml += `
        <button class="quiz-filter-chip ${String(activeModFilter) === String(m.id) ? 'active' : ''}" data-mod-filter="${m.id}">
          Mod ${m.id} (${qCount})
        </button>
      `;
    });

    // Filter lessons to display
    const filteredLessons = allLessons.filter(l => {
      if (activeModFilter !== 'all' && String(l.moduleId) !== String(activeModFilter)) return false;
      const isSolved = !!solvedQuizzes[l.id];
      if (activeStatusFilter === 'unsolved' && isSolved) return false;
      if (activeStatusFilter === 'solved' && !isSolved) return false;
      return true;
    });

    let quizCardsHtml = '';
    filteredLessons.forEach(l => {
      const qData = (typeof LESSON_QUIZZES !== 'undefined') ? LESSON_QUIZZES[l.id] : null;
      if (!qData) return;

      const isSolved = !!solvedQuizzes[l.id];
      const parentMod = this.getModuleById(l.moduleId);
      const modName = parentMod ? (parentMod.title.en || parentMod.title) : 'Module';
      const qText = qData.question.en || qData.question;
      const expText = qData.explanation.en || qData.explanation;

      // Render options
      let optsHtml = '';
      qData.options.forEach((opt, oIdx) => {
        const oText = opt.text.en || opt.text;
        const isOptCorrect = opt.correct === true;
        optsHtml += `
          <button class="arena-opt-btn ${isSolved && isOptCorrect ? 'correct' : ''}" 
                  data-lesson-id="${l.id}" 
                  data-correct="${opt.correct}" 
                  data-opt-index="${oIdx}">
            <span class="opt-bullet">${isSolved && isOptCorrect ? '✅' : '⚪'}</span>
            <span class="arena-opt-text">${escapeHtml(oText)}</span>
          </button>
        `;
      });

      quizCardsHtml += `
        <div class="arena-quiz-card ${isSolved ? 'card-solved' : ''}" id="arena-card-${l.id}" data-lesson-id="${l.id}">
          <div class="arena-card-top">
            <div class="arena-meta">
              <span class="arena-lesson-tag">Lesson ${l.id}</span>
              <span class="arena-mod-tag">${escapeHtml(modName)}</span>
            </div>
            <div class="arena-xp-badge ${isSolved ? 'solved' : ''}" id="arena-xp-badge-${l.id}">
              ${isSolved ? '✅ +25 XP Claimed' : '⚡ +25 XP'}
            </div>
          </div>
          <h3 class="arena-lesson-title">${l.title}</h3>
          <p class="arena-q-text">${qText}</p>
          <div class="arena-options" id="arena-options-${l.id}">
            ${optsHtml}
          </div>
          <div class="arena-feedback" id="arena-feedback-${l.id}" data-exp="${escapeHtml(expText)}">
            ${isSolved ? `
              <div class="fb-explanation show success" style="margin-top: 10px; font-size: 0.85rem; color: #86efac;">
                <strong>Explanation:</strong> ${escapeHtml(expText)}
              </div>
            ` : ''}
          </div>
          <div class="arena-card-footer">
            <a class="arena-doc-link" href="#/doc/${l.id}">📖 Read Full Lesson Doc →</a>
          </div>
        </div>
      `;
    });

    return `
      <div class="quiz-arena-container">
        <!-- Hero Banner -->
        <div class="quiz-hero-banner">
          <div class="quiz-hero-content">
            <div class="quiz-hero-badge">🧪 Interactive Practice Arena</div>
            <h1 class="quiz-hero-title">C++ Knowledge & Systems Quizzes</h1>
            <p class="quiz-hero-sub">
              Test your knowledge on every essential production C++ concept. Answer correctly to earn <strong>+25 XP</strong> per quiz, master modules for <strong>+100 XP</strong>, and climb all 13 developer ranks!
            </p>
            <div class="quiz-hero-actions">
              <button class="btn-primary-exam" id="launch-grand-exam-hero-btn">
                <span>🎓</span> Launch 25-Question Grand Master Exam (+250 XP)
              </button>
            </div>
          </div>
          <div class="quiz-hero-stats">
            <div class="quiz-stat-card">
              <span class="quiz-stat-num" id="arena-stat-solved">${solvedCount} / ${totalQuizCount}</span>
              <span class="quiz-stat-label">Quizzes Solved</span>
              <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" id="arena-progress-fill" style="width: ${progressPct}%;"></div>
              </div>
            </div>
            <div class="quiz-stat-card">
              <span class="quiz-stat-num" id="arena-stat-xp">⚡ ${quizXP}</span>
              <span class="quiz-stat-label">Quiz XP Earned</span>
            </div>
          </div>
        </div>

        <!-- Filter Controls -->
        <div class="quiz-controls-row">
          <div class="quiz-status-toggle">
            <button class="quiz-status-btn ${activeStatusFilter === 'all' ? 'active' : ''}" data-status-filter="all">
              All Quizzes (${totalQuizCount})
            </button>
            <button class="quiz-status-btn ${activeStatusFilter === 'unsolved' ? 'active' : ''}" data-status-filter="unsolved">
              Unsolved (${totalQuizCount - solvedCount})
            </button>
            <button class="quiz-status-btn ${activeStatusFilter === 'solved' ? 'active' : ''}" data-status-filter="solved">
              Solved (${solvedCount})
            </button>
          </div>
          <div class="quiz-mod-chips-scroll">
            ${modFilterHtml}
          </div>
        </div>

        <!-- Module Mastery Exam Jump Banner -->
        ${activeModFilter !== 'all' ? `
          <div class="module-exam-cta-banner">
            <div>
              <h4 style="margin: 0; color: #fff; font-size: 1.1rem;">🏆 Ready to test full Module ${activeModFilter} Mastery?</h4>
              <p style="margin: 4px 0 0; color: var(--text-secondary); font-size: 0.88rem;">Take the comprehensive module exam with timed questions, full score review, and +100 XP rewards.</p>
            </div>
            <button class="btn-launch-mod-exam" data-module-id="${activeModFilter}">
              Take Module ${activeModFilter} Exam
            </button>
          </div>
        ` : ''}

        <!-- Cards Grid -->
        <div class="quiz-arena-grid">
          ${quizCardsHtml.length > 0 ? quizCardsHtml : `
            <div class="empty-quiz-state">
              <span>🎉</span>
              <h3>No quizzes match this filter!</h3>
              <p>Try switching to 'All Quizzes' or pick another module.</p>
            </div>
          `}
        </div>
      </div>
    `;
  },

  attachQuizzesEventListeners() {
    // Grand Exam Launch from hero
    const grandBtn = document.getElementById('launch-grand-exam-hero-btn');
    if (grandBtn) {
      grandBtn.addEventListener('click', () => this.startGrandExam(25));
    }

    // Module Exam Launch banner
    document.querySelectorAll('.btn-launch-mod-exam').forEach(btn => {
      btn.addEventListener('click', () => {
        const modId = btn.getAttribute('data-module-id');
        this.openModuleMasterQuiz(modId);
      });
    });

    // Status filter buttons
    document.querySelectorAll('[data-status-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeQuizStatusFilter = btn.getAttribute('data-status-filter');
        this.render();
      });
    });

    // Module filter chips
    document.querySelectorAll('[data-mod-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        this.activeQuizModuleFilter = chip.getAttribute('data-mod-filter');
        this.render();
      });
    });

    // Interactive Quiz Option Clicks
    document.querySelectorAll('.arena-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) return;

        const lessonId = parseInt(btn.getAttribute('data-lesson-id'), 10);
        const card = document.getElementById('arena-card-' + lessonId);
        const feedbackBox = document.getElementById('arena-feedback-' + lessonId);
        const cardButtons = card.querySelectorAll('.arena-opt-btn');
        const isCorrect = btn.getAttribute('data-correct') === 'true';
        const expText = feedbackBox.getAttribute('data-exp') || '';

        // Disable options in this card
        cardButtons.forEach(b => {
          b.classList.remove('selected', 'correct', 'incorrect', 'correct-reveal');
          const bullet = b.querySelector('.opt-bullet');
          if (bullet) bullet.textContent = '⚪';
          b.classList.add('disabled');
        });
        btn.classList.add('selected');

        const bullet = btn.querySelector('.opt-bullet');
        const correctBtn = card.querySelector('.arena-opt-btn[data-correct="true"]');

        if (isCorrect) {
          btn.classList.add('correct');
          if (bullet) bullet.textContent = '✅';
          feedbackBox.className = 'arena-feedback show success';
          feedbackBox.innerHTML = `
            <div style="font-weight: 700; color: #4ade80; font-size: 0.92rem; margin-top: 8px;">
              ✅ Correct! Outstanding job.
            </div>
            <div style="margin-top: 6px; font-size: 0.85rem; color: #86efac; line-height: 1.5;">
              <strong>Explanation:</strong> ${escapeHtml(expText)}
            </div>
          `;

          // Claim XP
          if (!this.userState.solvedQuizzes) this.userState.solvedQuizzes = {};
          if (!this.userState.solvedQuizzes[lessonId]) {
            this.userState.solvedQuizzes[lessonId] = true;
            this.saveState();
            this.spawnXpFloater(25, btn);
            this.updateProgressMeter();

            const badge = document.getElementById('arena-xp-badge-' + lessonId);
            if (badge) {
              badge.className = 'arena-xp-badge solved';
              badge.textContent = '✅ +25 XP Claimed';
            }
            if (card) card.classList.add('card-solved');

            // Update header stat numbers
            const statSolved = document.getElementById('arena-stat-solved');
            const statXp = document.getElementById('arena-stat-xp');
            const progressFill = document.getElementById('arena-progress-fill');
            const solvedCount = Object.keys(this.userState.solvedQuizzes).length;
            const totalCount = this.getAllLessons().length;
            if (statSolved) statSolved.textContent = solvedCount + ' / ' + totalCount;
            if (statXp) statXp.textContent = '⚡ ' + (solvedCount * 25);
            if (progressFill) progressFill.style.width = Math.min(100, Math.round((solvedCount / totalCount) * 100)) + '%';
          }
        } else {
          btn.classList.add('incorrect');
          if (bullet) bullet.textContent = '❌';

          if (correctBtn) {
            correctBtn.classList.add('correct-reveal');
            const corBullet = correctBtn.querySelector('.opt-bullet');
            if (corBullet) corBullet.textContent = '✅';
          }

          feedbackBox.className = 'arena-feedback show error';
          feedbackBox.innerHTML = `
            <div style="font-weight: 700; color: #f87171; font-size: 0.92rem; margin-top: 8px;">
              ❌ Incorrect Choice
            </div>
            <div style="margin-top: 6px; font-size: 0.85rem; color: #fca5a5; line-height: 1.5;">
              <strong>Explanation:</strong> ${escapeHtml(expText)}
            </div>
            <div style="margin-top: 8px;">
              <button class="btn-retry-lesson-quiz" id="retry-arena-q-${lessonId}" style="padding: 6px 14px; font-size: 0.8rem;">
                <span>🔄</span> Try Again
              </button>
            </div>
          `;

          const qObj = (typeof LESSON_QUIZZES !== 'undefined') ? LESSON_QUIZZES[lessonId] : null;
          if (qObj) MistakesTracker.addMistake(qObj);
          this.updateMistakesNavButton();

          const retryBtn = document.getElementById('retry-arena-q-' + lessonId);
          if (retryBtn) {
            retryBtn.addEventListener('click', () => {
              cardButtons.forEach(b => {
                b.classList.remove('selected', 'correct', 'incorrect', 'correct-reveal', 'disabled');
                const bul = b.querySelector('.opt-bullet');
                if (bul) bul.textContent = '⚪';
              });
              feedbackBox.className = 'arena-feedback';
              feedbackBox.innerHTML = '';
            });
          }
        }
      });
    });
  },

  // Flashcards Layout View
  renderFlashcardsLayout() {
    const lang = I18N.currentLang;
    if (typeof FLASHCARDS_DATA === 'undefined' || FLASHCARDS_DATA.length === 0) {
      return `<div style="padding: 40px; text-align: center;">No flashcards available.</div>`;
    }

    // Filter by Category
    let cards = FLASHCARDS_DATA;
    if (this.activeFlashcardCategory !== 'all') {
      cards = cards.filter(c => c.category.toLowerCase() === this.activeFlashcardCategory.toLowerCase());
    }

    const categories = ['all', 'Basics', 'Memory', 'Functions', 'OOP', 'Modern C++', 'STL', 'Pro Dev'];
    let catChipsHtml = '';
    categories.forEach(cat => {
      const active = this.activeFlashcardCategory.toLowerCase() === cat.toLowerCase() ? 'active' : '';
      catChipsHtml += `
        <button class="filter-chip ${active}" data-flash-cat="${cat}">
          ${cat === 'all' ? I18N.t('filterCategoryAll') : cat}
        </button>
      `;
    });

    let cardsContentHtml = '';

    if (this.flashcardMode === 'small') {
      // Small Grid View
      let gridHtml = '';
      cards.forEach(card => {
        const frontText = card.front[lang] || card.front['en'];
        const backText = card.back[lang] || card.back['en'];
        gridHtml += `
          <div class="small-card" data-card-id="${card.id}">
            <div>
              <div class="card-category">#${card.id} · ${card.category}</div>
              <div class="card-question">${frontText}</div>
              <div class="card-answer">
                <p>${backText}</p>
                ${card.codeSnippet ? `<pre style="margin-top: 8px; font-size: 0.75rem; background: #090d16; padding: 6px; border-radius: 4px; font-family: var(--font-mono); color: #4ade80;"><code>${escapeHtml(card.codeSnippet)}</code></pre>` : ''}
              </div>
            </div>
            <button class="reveal-btn">${I18N.t('showAnswer')}</button>
          </div>
        `;
      });
      cardsContentHtml = `<div class="flashcards-grid-small">${gridHtml}</div>`;
    } else {
      // Large Focus Mode
      const safeIndex = Math.min(this.activeCardIndex, cards.length - 1);
      const currentCard = cards[safeIndex] || cards[0];
      const frontText = currentCard.front[lang] || currentCard.front['en'];
      const backText = currentCard.back[lang] || currentCard.back['en'];
      const flippedClass = this.isCardFlipped ? 'flipped' : '';

      cardsContentHtml = `
        <div class="flashcards-large-wrapper">
          <div class="flip-card-large ${flippedClass}" id="main-flip-card">
            <div class="flip-card-front">
              <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-purple); text-transform: uppercase;">
                ${currentCard.category}
              </div>
              <div class="large-card-content">
                <h3>${frontText}</h3>
              </div>
              <div style="font-size: 0.78rem; color: var(--text-muted); text-align: center;">
                🔄 ${I18N.t('flipCard')}
              </div>
            </div>

            <div class="flip-card-back">
              <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-blue); text-transform: uppercase;">
                Answer & Explanation
              </div>
              <div class="large-card-back-text">
                <p>${backText}</p>
                ${currentCard.codeSnippet ? `<pre style="margin-top: 12px; font-size: 0.82rem; background: #090d16; padding: 10px; border-radius: 6px; font-family: var(--font-mono); color: #4ade80;"><code>${escapeHtml(currentCard.codeSnippet)}</code></pre>` : ''}
              </div>
              <div style="font-size: 0.78rem; color: var(--text-muted); text-align: center;">
                🔄 Click to Flip Back
              </div>
            </div>
          </div>

          <div class="large-card-controls">
            <button class="btn-secondary" id="prev-card-btn" ${safeIndex === 0 ? 'disabled style="opacity:0.4;"' : ''}>
              ← ${I18N.t('prevCard')}
            </button>
            <span style="font-size: 0.85rem; color: var(--text-secondary);">
              ${I18N.t('flashcardIndex', { current: safeIndex + 1, total: cards.length })}
            </span>
            <button class="btn-secondary" id="next-card-btn" ${safeIndex === cards.length - 1 ? 'disabled style="opacity:0.4;"' : ''}>
              ${I18N.t('nextCard')} →
            </button>
          </div>
        </div>
      `;
    }

    return `
      <div class="flashcards-container">
        <div class="flashcards-header">
          <div>
            <h2 style="font-size: 1.4rem; font-weight: 800; color: #fff;">${I18N.t('flashcardsTitle')} (${cards.length})</h2>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">${I18N.t('flashcardsSubtitle')}</p>
          </div>
          <div class="flashcards-size-toggle">
            <button class="view-btn ${this.flashcardMode === 'small' ? 'active' : ''}" id="flashcard-small-btn">
              <span>🗂️</span> ${I18N.t('flashcardSizeSmall')}
            </button>
            <button class="view-btn ${this.flashcardMode === 'large' ? 'active' : ''}" id="flashcard-large-btn">
              <span>🔍</span> ${I18N.t('flashcardSizeLarge')}
            </button>
          </div>
        </div>

        <!-- Flashcard Category Chips -->
        <div class="filter-chips" style="margin-bottom: 20px;">
          ${catChipsHtml}
        </div>

        ${cardsContentHtml}
      </div>
    `;
  },

  attachFlashcardEventListeners() {
    const smallBtn = document.getElementById('flashcard-small-btn');
    const largeBtn = document.getElementById('flashcard-large-btn');

    if (smallBtn) smallBtn.addEventListener('click', () => { this.flashcardMode = 'small'; this.render(); });
    if (largeBtn) largeBtn.addEventListener('click', () => { this.flashcardMode = 'large'; this.render(); });

    // Category chips
    document.querySelectorAll('[data-flash-cat]').forEach(chip => {
      chip.addEventListener('click', () => {
        this.activeFlashcardCategory = chip.getAttribute('data-flash-cat');
        this.activeCardIndex = 0;
        this.isCardFlipped = false;
        this.render();
      });
    });

    // Small cards reveal
    document.querySelectorAll('.small-card').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('revealed');
        const btn = card.querySelector('.reveal-btn');
        if (btn) {
          btn.textContent = card.classList.contains('revealed') ? I18N.t('hideAnswer') : I18N.t('showAnswer');
        }
      });
    });

    // Large card flip
    const flipCard = document.getElementById('main-flip-card');
    if (flipCard) {
      flipCard.addEventListener('click', () => {
        this.isCardFlipped = !this.isCardFlipped;
        flipCard.classList.toggle('flipped', this.isCardFlipped);
      });
    }

    const prevBtn = document.getElementById('prev-card-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.activeCardIndex > 0) {
          this.activeCardIndex--;
          this.isCardFlipped = false;
          this.render();
        }
      });
    }

    const nextBtn = document.getElementById('next-card-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        let cards = FLASHCARDS_DATA;
        if (this.activeFlashcardCategory !== 'all') {
          cards = cards.filter(c => c.category.toLowerCase() === this.activeFlashcardCategory.toLowerCase());
        }
        if (this.activeCardIndex < cards.length - 1) {
          this.activeCardIndex++;
          this.isCardFlipped = false;
          this.render();
        }
      });
    }
  },

  // Render Roadmap View
  renderRoadmapLayout() {
    const lang = I18N.currentLang;
    const statusLabels = [I18N.t('statusTodo'), I18N.t('statusProgress'), I18N.t('statusDone')];

    let modulesHtml = '';
    let matchCount = 0;

    COURSE_DATA.modules.forEach(mod => {
      let filteredLessons = mod.lessons;

      // Status Filter
      if (this.activeFilter !== 'all') {
        const reqState = parseInt(this.activeFilter, 10);
        filteredLessons = filteredLessons.filter(l => this.getLessonState(l.id) === reqState);
      }

      // Search Filter
      if (this.searchQuery.trim() !== '') {
        const q = this.searchQuery.toLowerCase();
        filteredLessons = filteredLessons.filter(l => {
          const titleMatch = l.title.toLowerCase().includes(q);
          const summaryMatch = l.summary ? (l.summary[lang] || l.summary['en'] || '').toLowerCase().includes(q) : false;
          const catMatch = (l.category || '').toLowerCase().includes(q);
          return titleMatch || summaryMatch || catMatch;
        });
      }

      if (filteredLessons.length === 0) return;
      matchCount += filteredLessons.length;

      let cardsHtml = '';
      filteredLessons.forEach(l => {
        const state = this.getLessonState(l.id);
        const badge = this.getSourceBadgeHtml(l.source || mod.source);

        cardsHtml += `
          <div class="skill-card" data-lesson-id="${l.id}" data-state="${state}">
            <div class="skill-card-top">
              <span class="skill-number-tag">#${l.id}</span>
              ${badge}
              <span class="skill-badge">${statusLabels[state]}</span>
            </div>
            <div class="skill-card-title">${l.title}</div>
            <div class="skill-card-bottom">
              <span class="skill-yt-time">
                <span>⏱️</span> ${l.timestamp || 'Core'}
              </span>
              <div class="skill-card-actions">
                <button class="skill-open-quiz-btn" data-lesson-id="${l.id}" title="Take Lesson ${l.id} Quiz (+25 XP)">
                  <span>🧪</span> Quiz
                </button>
                <button class="skill-open-doc-btn" data-lesson-id="${l.id}">
                  ${I18N.t('viewDoc')} →
                </button>
              </div>
            </div>
          </div>
        `;
      });

      const hasModQuiz = (typeof MODULE_QUIZZES !== 'undefined') && (MODULE_QUIZZES[mod.id] || MODULE_QUIZZES['mod-' + mod.id]);
      const modQuizBtn = hasModQuiz ? `
        <button class="module-quiz-badge-btn open-mod-quiz-quick" data-module-id="${mod.id}">
          <span>🏆</span> Quiz
        </button>
      ` : '';

      const modIcon = mod.icon || '🔬';
      const modTitle = mod.title ? (mod.title[lang] || mod.title['en'] || ('Module ' + mod.id)) : ('Module ' + mod.id);
      const modDesc = mod.description ? (mod.description[lang] || mod.description['en'] || '') : '';

      modulesHtml += `
        <section class="module-section">
          <div class="module-header-row">
            <h3><span>${modIcon}</span> ${modTitle}</h3>
            ${modQuizBtn}
          </div>
          ${modDesc ? `<p class="module-desc">${modDesc}</p>` : ''}
          <div class="skills-grid">
            ${cardsHtml}
          </div>
        </section>
      `;
    });

    return `
      <div class="roadmap-container">
        <!-- Clean Status Filters & Search Count (Bloat external source filters pruned) -->
        <div class="filters-bar">
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; flex-wrap: wrap; gap: 12px;">
            <div class="filter-chips">
              <button class="filter-chip ${this.activeFilter === 'all' ? 'active' : ''}" data-filter="all">
                ${I18N.t('filterAll')}
              </button>
              <button class="filter-chip ${this.activeFilter === '0' ? 'active' : ''}" data-filter="0">
                ${I18N.t('filterTodo')}
              </button>
              <button class="filter-chip ${this.activeFilter === '1' ? 'active' : ''}" data-filter="1">
                ${I18N.t('filterProgress')}
              </button>
              <button class="filter-chip ${this.activeFilter === '2' ? 'active' : ''}" data-filter="2">
                ${I18N.t('filterDone')}
              </button>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-secondary); font-weight: 600;">
              ${I18N.t('filterCount', { count: matchCount })}
            </div>
          </div>
        </div>

        <div class="modules-list">
          ${modulesHtml || `<div style="text-align: center; padding: 60px; color: var(--text-muted);">${I18N.t('searchPlaceholder')}</div>`}
        </div>
      </div>
    `;
  },

  attachRoadmapEventListeners() {
    document.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeFilter = btn.getAttribute('data-filter');
        this.render();
      });
    });

    document.querySelectorAll('.open-mod-quiz-quick').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modId = btn.getAttribute('data-module-id');
        this.openModuleMasterQuiz(modId);
      });
    });

    document.querySelectorAll('.skill-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.skill-open-doc-btn')) {
          const lessonId = card.getAttribute('data-lesson-id');
          this.navigate('doc', lessonId);
          return;
        }

        if (e.target.closest('.skill-open-quiz-btn')) {
          const lessonId = card.getAttribute('data-lesson-id');
          this.navigate('quizzes');
          return;
        }

        const lessonId = parseInt(card.getAttribute('data-lesson-id'), 10);
        const nextState = this.cycleLessonState(lessonId);
        card.setAttribute('data-state', nextState);
        const statusLabels = [I18N.t('statusTodo'), I18N.t('statusProgress'), I18N.t('statusDone')];
        const badge = card.querySelector('.skill-badge');
        if (badge) badge.textContent = statusLabels[nextState];

        // Live real-time XP recalculation and top progress meter synchronization
        this.updateProgressMeter();

        // Spawn dynamic XP floater when transitioned to Mastered (State 2)
        if (nextState === 2) {
          const isProject = lessonId >= 66 && lessonId <= 70;
          const xpAmount = isProject ? 200 : 50;
          this.spawnXpFloater(xpAmount, card);
        }
      });
    });
  },

  // Modals Controller
  initModals() {
    const cheatsheetModal = document.getElementById('cheatsheet-modal');
    const openCheatsheet = document.getElementById('cheatsheet-btn');
    const closeCheatsheet = document.getElementById('close-modal-btn');

    if (openCheatsheet && cheatsheetModal) openCheatsheet.addEventListener('click', () => cheatsheetModal.classList.add('open'));
    if (closeCheatsheet && cheatsheetModal) closeCheatsheet.addEventListener('click', () => cheatsheetModal.classList.remove('open'));

    const quizModal = document.getElementById('module-quiz-modal');
    const closeQuiz = document.getElementById('close-module-quiz-btn');
    if (closeQuiz && quizModal) closeQuiz.addEventListener('click', () => quizModal.classList.remove('open'));

    const grandExamModal = document.getElementById('grand-exam-modal');
    const openGrandExam = document.getElementById('grand-exam-nav-btn');
    const closeGrandExam = document.getElementById('close-grand-exam-btn');

    if (openGrandExam && grandExamModal) openGrandExam.addEventListener('click', () => this.startGrandExam(25));
    if (closeGrandExam && grandExamModal) closeGrandExam.addEventListener('click', () => grandExamModal.classList.remove('open'));

    window.addEventListener('click', (e) => {
      if (cheatsheetModal && e.target === cheatsheetModal) cheatsheetModal.classList.remove('open');
      if (quizModal && e.target === quizModal) quizModal.classList.remove('open');
      if (grandExamModal && e.target === grandExamModal) grandExamModal.classList.remove('open');
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (cheatsheetModal) cheatsheetModal.classList.remove('open');
        if (quizModal) quizModal.classList.remove('open');
        if (grandExamModal) grandExamModal.classList.remove('open');
      }
    });
  },

  init() {
    this.loadState();

    const docBtn = document.getElementById('view-doc-btn');
    const roadBtn = document.getElementById('view-roadmap-btn');
    const flashBtn = document.getElementById('view-flashcards-btn');
    const quizBtn = document.getElementById('view-quizzes-btn');

    if (docBtn) docBtn.addEventListener('click', () => this.navigate('doc'));
    if (roadBtn) roadBtn.addEventListener('click', () => this.navigate('roadmap'));
    if (flashBtn) flashBtn.addEventListener('click', () => this.navigate('flashcards'));
    if (quizBtn) quizBtn.addEventListener('click', () => this.navigate('quizzes'));

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        if (this.searchQuery.trim() !== '' && this.currentView !== 'roadmap') {
          this.currentView = 'roadmap';
          this.updateViewButtons();
        }
        this.render();
      });

      window.addEventListener('keydown', (e) => {
        if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && document.activeElement !== searchInput) {
          e.preventDefault();
          searchInput.focus();
        }
      });
    }

    window.addEventListener('hashchange', () => this.handleRouting());

    this.initModals();

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleMobileSidebar();
      });
    }

    const backdrop = document.getElementById('sidebar-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => this.closeMobileSidebar());
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileSidebar();
      }
    });

    this.handleRouting();
  }
};

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
