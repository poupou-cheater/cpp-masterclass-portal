// C++ Masterclass Portal - Core Application Logic & Router

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
    this.userState[key] = state;
    this.saveState();
    this.updateProgressMeter();
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
    const fillEl = document.getElementById('progress-fill');
    const textEl = document.getElementById('progress-percentage');
    const compEl = document.getElementById('stat-completed');
    const progEl = document.getElementById('stat-progress');

    if (fillEl) fillEl.style.width = `${stats.percent}%`;
    if (textEl) textEl.textContent = `${stats.percent}%`;
    if (compEl) compEl.textContent = `${stats.completedCount} ${I18N.t('statusDone')}`;
    if (progEl) progEl.textContent = `${stats.inProgressCount} ${I18N.t('statusProgress')}`;
  },

  // Router
  handleRouting() {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const parts = hash.split('/').filter(Boolean);

    let lang = I18N.currentLang;
    let view = this.currentView;
    let lessonId = this.activeLessonId;

    if (parts.length > 0 && I18N.supportedLangs.includes(parts[0])) {
      lang = parts[0];
      I18N.setLang(lang);
    }

    if (parts.length > 1) {
      if (parts[1] === 'roadmap') {
        view = 'roadmap';
      } else if (parts[1] === 'flashcards') {
        view = 'flashcards';
      } else if (parts[1] === 'doc') {
        view = 'doc';
        if (parts[2]) {
          const found = this.getLessonById(parts[2]);
          if (found) lessonId = found.id;
        }
      } else {
        const found = this.getLessonById(parts[1]);
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
    const lang = I18N.currentLang;
    let newHash = '';
    if (view === 'roadmap') {
      newHash = `#/${lang}/roadmap`;
    } else if (view === 'flashcards') {
      newHash = `#/${lang}/flashcards`;
    } else {
      const id = lessonId || this.activeLessonId;
      newHash = `#/${lang}/doc/${id}`;
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
    this.updateLanguageButtons();
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
    document.title = I18N.t('siteTitle');
    const subtitleEl = document.getElementById('header-subtitle');
    if (subtitleEl) subtitleEl.textContent = I18N.t('siteSubtitle');

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.placeholder = I18N.t('searchPlaceholder');

    const progressLabel = document.getElementById('progress-label');
    if (progressLabel) progressLabel.textContent = I18N.t('overallCompletion');

    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) resetBtn.textContent = I18N.t('resetBtn');

    const exportBtn = document.getElementById('export-btn');
    if (exportBtn) exportBtn.textContent = I18N.t('exportBtn');

    const importBtn = document.getElementById('import-btn');
    if (importBtn) importBtn.textContent = I18N.t('importBtn');

    const cheatsheetBtn = document.getElementById('cheatsheet-btn');
    if (cheatsheetBtn) cheatsheetBtn.innerHTML = `<span>⚡</span> ${I18N.t('cheatSheetBtn')}`;

    const grandExamNavBtn = document.getElementById('grand-exam-nav-btn');
    if (grandExamNavBtn) grandExamNavBtn.innerHTML = `<span>🎓</span> ${I18N.t('grandExamBtn')}`;

    this.updateMistakesNavButton();
  },

  updateMistakesNavButton() {
    const btn = document.getElementById('mistakes-bank-nav-btn');
    const textEl = document.getElementById('mistakes-bank-nav-text');
    if (!btn) return;
    const count = MistakesTracker.getCount();
    if (count > 0) {
      btn.style.display = 'inline-flex';
      if (textEl) textEl.textContent = `${I18N.t('mistakesBankNav')} (${count})`;
    } else {
      btn.style.display = 'none';
    }
  },

  startMistakesBankQuiz() {
    const list = MistakesTracker.getMistakes();
    if (!list || list.length === 0) {
      this.showToast(I18N.t('mistakesBankEmpty'), "ℹ️");
      return;
    }
    this.startGrandExamMistakesRetest(list);
    const modal = document.getElementById('grand-exam-modal');
    if (modal) modal.classList.add('open');
  },

  updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', lang === I18N.currentLang);
    });
  },

  updateViewButtons() {
    const docBtn = document.getElementById('view-doc-btn');
    const roadBtn = document.getElementById('view-roadmap-btn');
    const flashBtn = document.getElementById('view-flashcards-btn');

    if (docBtn) docBtn.classList.toggle('active', this.currentView === 'doc');
    if (roadBtn) roadBtn.classList.toggle('active', this.currentView === 'roadmap');
    if (flashBtn) flashBtn.classList.toggle('active', this.currentView === 'flashcards');
  },

  // Render Full Doc Layout
  renderDocLayout() {
    const lang = I18N.currentLang;

    // Sidebar items with source badges
    let sidebarHtml = `
      <div class="sidebar-mobile-header">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.1rem;">⚡</span>
          <span class="sidebar-mobile-title">${lang === 'fr' ? 'Leçons du cours (1-65)' : 'Course Lessons (1-65)'}</span>
        </div>
        <button id="close-sidebar-btn" class="close-sidebar-btn" aria-label="${I18N.t('closeMenu')}">&times;</button>
      </div>
    `;
    COURSE_DATA.modules.forEach(mod => {
      const modTitle = mod.title[lang] || mod.title['en'];
      let lessonItemsHtml = '';

      mod.lessons.forEach(l => {
        const lState = this.getLessonState(l.id);
        const isActive = l.id === this.activeLessonId ? 'active' : '';
        lessonItemsHtml += `
          <a class="sidebar-lesson-item ${isActive}" href="#/${lang}/doc/${l.id}" data-lesson-id="${l.id}">
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

    // Filter to ONLY exact, specific section links!
    let resourceCardsHtml = '';

    if (currentLesson.ytUrl && currentLesson.timeSeconds !== null) {
      resourceCardsHtml += `
        <a href="${currentLesson.ytUrl}" target="_blank" rel="noopener noreferrer" class="resource-card">
          <span class="resource-icon">🎬</span>
          <div class="resource-info">
            <span class="resource-badge">${I18N.t('videoTimestamp')}</span>
            <span class="resource-name">${currentLesson.timestamp} (Jump)</span>
          </div>
        </a>
      `;
    }

    if (currentLesson.learnCppUrl && !currentLesson.learnCppUrl.endsWith('.com/')) {
      resourceCardsHtml += `
        <a href="${currentLesson.learnCppUrl}" target="_blank" rel="noopener noreferrer" class="resource-card">
          <span class="resource-icon">📚</span>
          <div class="resource-info">
            <span class="resource-badge">${I18N.t('learnCppDoc')}</span>
            <span class="resource-name">${I18N.t('openLearnCpp')}</span>
          </div>
        </a>
      `;
    }

    if (currentLesson.primerUrl && !currentLesson.primerUrl.includes('000-cpp_primer')) {
      resourceCardsHtml += `
        <a href="${currentLesson.primerUrl}" target="_blank" rel="noopener noreferrer" class="resource-card">
          <span class="resource-icon">📖</span>
          <div class="resource-info">
            <span class="resource-badge">${I18N.t('primerDoc')}</span>
            <span class="resource-name">${I18N.t('openPrimer')}</span>
          </div>
        </a>
      `;
    }

    if (currentLesson.proDevUrl) {
      resourceCardsHtml += `
        <a href="${currentLesson.proDevUrl}" target="_blank" rel="noopener noreferrer" class="resource-card">
          <span class="resource-icon">🛠️</span>
          <div class="resource-info">
            <span class="resource-badge">${I18N.t('proDevDoc')}</span>
            <span class="resource-name">Official Tooling Guide</span>
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

    // Little Section: Per-lesson quick quiz with randomized options!
    let quickQuizHtml = '';
    const lessonQuiz = (typeof LESSON_QUIZZES !== 'undefined') ? LESSON_QUIZZES[currentLesson.id] : null;
    if (lessonQuiz) {
      const qText = lessonQuiz.question[lang] || lessonQuiz.question['en'];
      const expText = lessonQuiz.explanation[lang] || lessonQuiz.explanation['en'];

      // Shuffle options randomly
      const shuffledOptions = shuffleArray(lessonQuiz.options);
      let optsHtml = '';
      shuffledOptions.forEach((opt, oIdx) => {
        const oText = opt.text[lang] || opt.text['en'];
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
            <span>🧪</span> ${I18N.t('quickQuiz')} (Little Section)
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

    const hasModuleQuiz = (typeof MODULE_QUIZZES !== 'undefined') && MODULE_QUIZZES[currentModule.id];
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
          <span>${currentModule.title[lang] || currentModule.title['en']}</span>
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
              <button class="share-topic-btn" id="share-lesson-btn" title="${I18N.t('copyTopicLink')}">
                <span>🔗</span> ${I18N.t('copyTopicLink')}
              </button>
              ${moduleQuizBtnHtml}
            </div>
          </div>
          <p style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.6;">
            ${summaryText}
          </p>
        </header>

        <!-- Specific Section Links ONLY -->
        ${resourceCardsHtml ? `<div class="resource-grid">${resourceCardsHtml}</div>` : ''}

        <!-- Code Sample & Simulator -->
        <div class="code-section">
          <div class="code-header">
            <div class="code-lang-tag">
              <span>⚙️</span> C++ (Modern C++20)
            </div>
            <div class="code-header-actions">
              <button class="code-btn" id="run-code-btn">
                <span>▶</span> ${I18N.t('runCodeBtn')}
              </button>
              <button class="code-btn" id="copy-code-btn">
                <span>📋</span> ${I18N.t('copyCodeBtn')}
              </button>
            </div>
          </div>

          <div class="code-body">
            <pre><code id="lesson-code-content">${escapeHtml(currentLesson.code)}</code></pre>
          </div>

          <div class="console-output">
            <div class="console-title">
              <span>💻</span> ${I18N.t('expectedOutput')}
            </div>
            <div class="console-body" id="console-text">${escapeHtml(currentLesson.output || "Execution completed successfully.")}</div>
          </div>
        </div>

        ${takeawaysHtml}
        ${quickQuizHtml}

        <!-- Pagination -->
        <div class="doc-pagination">
          ${prevLesson ? `
            <a class="pagination-btn" href="#/${lang}/doc/${prevLesson.id}">
              <span class="direction-label">← ${I18N.t('previousLesson')}</span>
              <span class="target-title">${prevLesson.id}. ${prevLesson.title}</span>
            </a>
          ` : `<div></div>`}

          ${nextLesson ? `
            <a class="pagination-btn" style="text-align: right;" href="#/${lang}/doc/${nextLesson.id}">
              <span class="direction-label">${I18N.t('nextLesson')} →</span>
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

    // Run code simulator
    const runBtn = document.getElementById('run-code-btn');
    const consoleText = document.getElementById('console-text');
    if (runBtn && consoleText) {
      runBtn.addEventListener('click', () => {
        consoleText.textContent = "Compiling with g++ -std=c++20 -O2...\nRunning executable...\n\n" + (currentLesson.output || "Program executed successfully (exit code 0).");
        this.showToast("C++ code execution simulated!", "⚡");
      });
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
              ✅ ${I18N.t('quizCorrect')}
            </div>
            <div class="fb-explanation">
              <strong>${I18N.t('explanationLabel')}</strong> ${escapeHtml(expText)}
            </div>
          `;
          if (currentLessonQuiz) MistakesTracker.removeMistake(currentLessonQuiz);
          this.updateMistakesNavButton();
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
    if (typeof MODULE_QUIZZES === 'undefined' || !MODULE_QUIZZES[moduleId]) return;

    // Randomize question order and options
    const rawQuestions = MODULE_QUIZZES[moduleId].questions;
    this.activeModuleQuiz = {
      moduleId: moduleId,
      originalModuleId: moduleId,
      isRetest: false,
      title: MODULE_QUIZZES[moduleId].title,
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

  // Render Flashcards View (35+ Flashcards with Category Filter)
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

      // Source Filter
      if (this.activeSourceFilter !== 'all') {
        filteredLessons = filteredLessons.filter(l => (l.source || mod.source) === this.activeSourceFilter);
      }

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
          const summaryMatch = (l.summary[lang] || l.summary['en']).toLowerCase().includes(q);
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
              <button class="skill-open-doc-btn" data-lesson-id="${l.id}">
                ${I18N.t('viewDoc')} →
              </button>
            </div>
          </div>
        `;
      });

      const hasModQuiz = (typeof MODULE_QUIZZES !== 'undefined') && MODULE_QUIZZES[mod.id];
      const modQuizBtn = hasModQuiz ? `
        <button class="module-quiz-badge-btn open-mod-quiz-quick" data-module-id="${mod.id}">
          <span>🏆</span> Quiz
        </button>
      ` : '';

      modulesHtml += `
        <section class="module-section">
          <div class="module-header-row">
            <h3><span>${mod.icon}</span> ${mod.title[lang] || mod.title['en']}</h3>
            ${modQuizBtn}
          </div>
          <p class="module-desc">${mod.description[lang] || mod.description['en']}</p>
          <div class="skills-grid">
            ${cardsHtml}
          </div>
        </section>
      `;
    });

    return `
      <div class="roadmap-container">
        <!-- Dual Filtering: Sources & Statuses -->
        <div class="filters-bar">
          <!-- Source Filter Chips -->
          <div class="filter-chips" style="margin-bottom: 8px;">
            <button class="filter-chip ${this.activeSourceFilter === 'all' ? 'active' : ''}" data-source="all">
              ${I18N.t('filterSourceAll')}
            </button>
            <button class="filter-chip ${this.activeSourceFilter === 'brocode' ? 'active' : ''}" data-source="brocode">
              ${I18N.t('filterSourceBroCode')}
            </button>
            <button class="filter-chip ${this.activeSourceFilter === 'learncpp' ? 'active' : ''}" data-source="learncpp">
              ${I18N.t('filterSourceLearnCpp')}
            </button>
            <button class="filter-chip ${this.activeSourceFilter === 'primer' ? 'active' : ''}" data-source="primer">
              ${I18N.t('filterSourcePrimer')}
            </button>
            <button class="filter-chip ${this.activeSourceFilter === 'prodev' ? 'active' : ''}" data-source="prodev">
              ${I18N.t('filterSourceProDev')}
            </button>
          </div>

          <!-- Status Filter Chips -->
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
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
            <div style="font-size: 0.8rem; color: var(--text-secondary);">
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
    document.querySelectorAll('[data-source]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeSourceFilter = btn.getAttribute('data-source');
        this.render();
      });
    });

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

        const lessonId = parseInt(card.getAttribute('data-lesson-id'), 10);
        const nextState = this.cycleLessonState(lessonId);
        card.setAttribute('data-state', nextState);
        const statusLabels = [I18N.t('statusTodo'), I18N.t('statusProgress'), I18N.t('statusDone')];
        const badge = card.querySelector('.skill-badge');
        if (badge) badge.textContent = statusLabels[nextState];
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

  initProgressActions() {
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm(I18N.t('resetConfirm'))) {
          this.userState = {};
          this.saveState();
          this.render();
          this.showToast("All progress reset to 0%.", "🔄");
        }
      });
    }

    const exportBtn = document.getElementById('export-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.userState, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "cpp_course_progress.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        this.showToast("Progress exported as JSON!", "💾");
      });
    }

    const importBtn = document.getElementById('import-btn');
    const fileInput = document.getElementById('import-file-input');
    if (importBtn && fileInput) {
      importBtn.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const parsed = JSON.parse(event.target.result);
            this.userState = parsed;
            this.saveState();
            this.render();
            this.showToast("Progress imported successfully!", "📥");
          } catch (err) {
            alert("Invalid JSON file!");
          }
        };
        reader.readAsText(file);
      });
    }
  },

  init() {
    this.loadState();

    const docBtn = document.getElementById('view-doc-btn');
    const roadBtn = document.getElementById('view-roadmap-btn');
    const flashBtn = document.getElementById('view-flashcards-btn');

    if (docBtn) docBtn.addEventListener('click', () => this.navigate('doc'));
    if (roadBtn) roadBtn.addEventListener('click', () => this.navigate('roadmap'));
    if (flashBtn) flashBtn.addEventListener('click', () => this.navigate('flashcards'));

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        this.switchLanguage(lang);
      });
    });

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
    this.initProgressActions();

    const mistakesBtn = document.getElementById('mistakes-bank-nav-btn');
    if (mistakesBtn) {
      mistakesBtn.addEventListener('click', () => this.startMistakesBankQuiz());
    }

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
    this.updateMistakesNavButton();
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
