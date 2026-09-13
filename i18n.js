// Internationalization (i18n) Engine & Translations (English & French Only)

const I18N = {
  currentLang: 'en',
  supportedLangs: ['en', 'fr'],

  translations: {
    en: {
      siteTitle: "C++ Masterclass & Course Documentation",
      siteSubtitle: "Interactive roadmap, video timestamps (Bro Code 6h), LearnCpp lessons, C++ Primer & Pro Dev tools",
      viewDoc: "Documentation View",
      viewRoadmap: "Checklist Roadmap",
      viewFlashcards: "Flashcards",
      searchPlaceholder: "Search 75+ topics, syntax, algorithms... (Press / to focus)",
      
      menuToggle: "Toggle curriculum menu",
      closeMenu: "Close menu",

      // Status Filters
      filterAll: "All Statuses",
      filterTodo: "Not Started",
      filterProgress: "In Progress",
      filterDone: "Mastered",

      // Source Tracks Filters
      filterSourceAll: "All Sources",
      filterSourceBroCode: "🎬 Bro Code Video",
      filterSourceLearnCpp: "📚 LearnCpp",
      filterSourcePrimer: "📖 C++ Primer",
      filterSourceProDev: "🛠️ Pro Dev Skills",

      // Source Badges
      sourceBroCode: "Bro Code 6h Video Course",
      sourceLearnCpp: "LearnCpp.com Modern C++",
      sourcePrimer: "C++ Primer (5th Edition)",
      sourceProDev: "Professional Developer Track",

      totalProgress: "Course Mastery Progress",
      overallCompletion: "Overall Progress:",
      resetBtn: "Reset to 0%",
      resetConfirm: "Are you sure you want to reset all progress to 0%?",
      exportBtn: "Export JSON",
      importBtn: "Import JSON",
      statsTitle: "Progress Overview",
      topicsCompleted: "topics mastered",
      topicsInProgress: "topics in progress",
      topicsRemaining: "topics remaining",
      
      // Where to Learn
      learnSection: "Where to Learn",
      videoTimestamp: "Bro Code 6h Video Timestamp",
      jumpToVideo: "Watch on YouTube",
      learnCppDoc: "LearnCpp.com Lesson",
      openLearnCpp: "Read LearnCpp Tutorial",
      primerDoc: "C++ Primer (5th Edition)",
      openPrimer: "Read C++ Primer Chapter",
      proDevDoc: "Developer Guide & Tooling",
      
      copyTopicLink: "Share Lesson Link",
      linkCopied: "Lesson link copied to clipboard!",
      interactiveCode: "Runnable C++ Code Sample",
      runCodeBtn: "Simulate Execution",
      copyCodeBtn: "Copy Code",
      codeCopied: "Code snippet copied!",
      keyTakeaways: "Key Takeaways & Industry Best Practices",
      expectedOutput: "Expected Console Output",
      statusTodo: "Not Started",
      statusProgress: "In Progress",
      statusDone: "Mastered",
      previousLesson: "Previous Lesson",
      nextLesson: "Next Lesson",
      closeModal: "Close",
      cheatSheetBtn: "C++ Cheatsheet",
      cheatSheetTitle: "C++ Quick Reference Cheatsheet",
      compilationTitle: "Compilation Flags",
      compilationTip: "Recommended flags for modern C++ development:",
      stlComplexity: "STL Container Complexity Cheat",
      memoryRules: "Memory Rules of Thumb",
      backToTop: "Back to top",
      filterCount: "showing {count} lessons",

      // Quizzes
      quickQuiz: "Quick Check Quiz",
      moduleQuizBtn: "Take Module Master Quiz",
      moduleQuizTitle: "Module Mastery Quiz",
      checkAnswer: "Check Answer",
      quizCorrect: "Correct! Outstanding job.",
      quizIncorrect: "Incorrect choice.",
      quizScore: "Your Quiz Score:",
      quizCompleted: "Quiz Completed!",
      retakeQuiz: "Retake Full Quiz",
      yourChoice: "Your Choice:",
      correctChoice: "Correct Answer:",
      explanationLabel: "Concept & Explanation:",
      tryAgainBtn: "Try Again",
      relearnHeader: "Review & Relearn Mistakes",
      relearnSub: "Analyze what went wrong and study the correct concept, then take the custom test to master it.",
      mistakesFilterAll: "All Questions ({count})",
      mistakesFilterWrong: "❌ Mistakes Only ({count})",
      mistakesFilterCorrect: "✅ Correct ({count})",
      practiceMistakesBtn: "🎯 Custom Test: Practice Mistakes Only ({count})",
      customRetestMode: "🎯 Targeted Retest: Practicing {count} Missed Question(s)",
      customRetestSuccess: "🎉 Outstanding! You resolved all your errors and reached 100% mastery!",
      retakeAllBtn: "🔄 Retake Entire Quiz",
      noMistakesMessage: "Outstanding! 100% perfect score — no mistakes to review!",
      mistakesBankNav: "Mistakes Bank",
      practiceMistakesBank: "Practice All Saved Mistakes ({count})",
      clearMistakesBank: "Clear Mistakes",
      perfectMastery: "Perfect Mastery!",
      needsReview: "Review Recommended",
      passedBadge: "Quiz Passed!",
      correctRevealBadge: "Correct Answer",

      // Grand Master Exam (Everything)
      grandExamBtn: "🎓 Grand Master Quiz",
      grandExamTitle: "C++ Grand Master Exam (Everything)",
      grandExamSubtitle: "Comprehensive randomized exam covering all subjects across the full course.",
      startExam: "Start Exam",
      examLength10: "Quick (10 Questions)",
      examLength25: "Standard (25 Questions)",
      examLengthAll: "Full Exam (All Questions)",
      reviewAnswers: "Review All Answers",
      examPassed: "PASSED! You have mastered C++!",
      examFailed: "Review recommended before retrying.",

      // Flashcards
      flashcardsTitle: "C++ Mastery Flashcards",
      flashcardsSubtitle: "Test your active recall across syntax, pointers, OOP, STL, and tooling.",
      flashcardSizeSmall: "Small Grid View",
      flashcardSizeLarge: "Large Focus Mode",
      flipCard: "Click or Space to Flip Card",
      showAnswer: "Reveal Answer",
      hideAnswer: "Hide Answer",
      flashcardLearned: "Mark as Mastered",
      flashcardNeedReview: "Needs Review",
      flashcardIndex: "Card {current} of {total}",
      nextCard: "Next Card",
      prevCard: "Previous Card"
    },
    fr: {
      siteTitle: "C++ Masterclass & Documentation Complète",
      siteSubtitle: "Feuille de route interactive, horodatages vidéo (Bro Code 6h), cours LearnCpp, C++ Primer & Outils Pro",
      viewDoc: "Vue Documentation",
      viewRoadmap: "Feuille de route",
      viewFlashcards: "Cartes Mémoire",
      searchPlaceholder: "Rechercher 75+ leçons, syntaxe, algorithmes... (Touche /)",
      
      menuToggle: "Afficher le menu du cours",
      closeMenu: "Fermer le menu",

      // Filtres de statut
      filterAll: "Tous les statuts",
      filterTodo: "Non commencé",
      filterProgress: "En cours",
      filterDone: "Maîtrisé",

      // Filtres de source
      filterSourceAll: "Toutes les sources",
      filterSourceBroCode: "🎬 Vidéo Bro Code",
      filterSourceLearnCpp: "📚 LearnCpp",
      filterSourcePrimer: "📖 C++ Primer",
      filterSourceProDev: "🛠️ Outils Pro Dev",

      // Badges de source
      sourceBroCode: "Cours Vidéo Bro Code (6h)",
      sourceLearnCpp: "Tutoriels Modernes LearnCpp",
      sourcePrimer: "Livre C++ Primer (5e Éd.)",
      sourceProDev: "Parcours Développeur Professionnel",

      totalProgress: "Progression globale du cours",
      overallCompletion: "Avancement total :",
      resetBtn: "Réinitialiser à 0%",
      resetConfirm: "Voulez-vous vraiment réinitialiser toute votre progression à 0% ?",
      exportBtn: "Exporter JSON",
      importBtn: "Importer JSON",
      statsTitle: "Aperçu de progression",
      topicsCompleted: "leçons maîtrisées",
      topicsInProgress: "leçons en cours",
      topicsRemaining: "leçons restantes",
      
      // Où Apprendre
      learnSection: "Où Apprendre & Ressources",
      videoTimestamp: "Horodatage Vidéo Bro Code (6h)",
      jumpToVideo: "Voir sur YouTube",
      learnCppDoc: "Tutoriel LearnCpp.com",
      openLearnCpp: "Lire le cours LearnCpp",
      primerDoc: "C++ Primer (5e Édition)",
      openPrimer: "Lire le chapitre C++ Primer",
      proDevDoc: "Guide & Outils Développeur",
      
      copyTopicLink: "Partager le lien",
      linkCopied: "Lien de la leçon copié dans le presse-papier !",
      interactiveCode: "Exemple de Code C++ Exécutable",
      runCodeBtn: "Simuler l'exécution",
      copyCodeBtn: "Copier le code",
      codeCopied: "Extrait de code copié !",
      keyTakeaways: "Points clés & Bonnes pratiques industrielles",
      expectedOutput: "Sortie console attendue",
      statusTodo: "Non commencé",
      statusProgress: "En cours",
      statusDone: "Maîtrisé",
      previousLesson: "Leçon précédente",
      nextLesson: "Leçon suivante",
      closeModal: "Fermer",
      cheatSheetBtn: "Aide-Mémoire C++",
      cheatSheetTitle: "Aide-Mémoire & Référence Rapide C++",
      compilationTitle: "Options de Compilation",
      compilationTip: "Flags recommandés pour le développement C++ moderne :",
      stlComplexity: "Complexité des Conteneurs STL",
      memoryRules: "Règles d'or de gestion mémoire",
      backToTop: "Retour en haut",
      filterCount: "{count} leçons affichées",

      // Quizzes
      quickQuiz: "Mini-Quiz de vérification",
      moduleQuizBtn: "Lancer le Grand Quiz du Module",
      moduleQuizTitle: "Grand Quiz de Validation du Module",
      checkAnswer: "Vérifier la réponse",
      quizCorrect: "Exact ! Excellent travail.",
      quizIncorrect: "Choix incorrect.",
      quizScore: "Votre score au quiz :",
      quizCompleted: "Quiz terminé !",
      retakeQuiz: "Recommencer tout le quiz",
      yourChoice: "Votre choix :",
      correctChoice: "Bonne réponse :",
      explanationLabel: "Concept & Explication :",
      tryAgainBtn: "Réessayer",
      relearnHeader: "Analyser et Réapprendre les Erreurs",
      relearnSub: "Analysez vos erreurs et comprenez le bon concept, puis lancez le test ciblé pour les valider.",
      mistakesFilterAll: "Toutes les questions ({count})",
      mistakesFilterWrong: "❌ Erreurs uniquement ({count})",
      mistakesFilterCorrect: "✅ Correctes ({count})",
      practiceMistakesBtn: "🎯 Test Ciblé : Refaire uniquement les erreurs ({count})",
      customRetestMode: "🎯 Rattrapage Ciblé : Entraînement sur {count} question(s) manquée(s)",
      customRetestSuccess: "🎉 Bravo ! Vous avez corrigé toutes vos erreurs et atteint 100% de maîtrise !",
      retakeAllBtn: "🔄 Recommencer tout le quiz",
      noMistakesMessage: "Excellent ! Score parfait de 100% — aucune erreur à réviser !",
      mistakesBankNav: "Banque d'erreurs",
      practiceMistakesBank: "Pratiquer toutes les erreurs enregistrées ({count})",
      clearMistakesBank: "Effacer les erreurs",
      perfectMastery: "Maîtrise Parfaite !",
      needsReview: "Révision recommandée",
      passedBadge: "Quiz validé !",
      correctRevealBadge: "Bonne réponse",

      // Grand Examen Final (Tout le cours)
      grandExamBtn: "🎓 Grand Examen Final",
      grandExamTitle: "Grand Examen Final C++ (Toutes notions)",
      grandExamSubtitle: "Examen complet et aléatoire couvrant l'ensemble du cours.",
      startExam: "Commencer l'examen",
      examLength10: "Rapide (10 Questions)",
      examLength25: "Standard (25 Questions)",
      examLengthAll: "Examen Complet (Toutes)",
      reviewAnswers: "Revoir toutes les réponses",
      examPassed: "FÉLICITATIONS ! Vous maîtrisez le C++ !",
      examFailed: "Révision recommandée avant de réessayer.",

      // Flashcards
      flashcardsTitle: "Cartes Mémoire C++ (Flashcards)",
      flashcardsSubtitle: "Testez votre mémorisation active sur la syntaxe, les pointeurs, la POO, la STL et les outils.",
      flashcardSizeSmall: "Grille Compacte (Petite)",
      flashcardSizeLarge: "Mode Focus (Grande)",
      flipCard: "Cliquez ou Espace pour retourner la carte",
      showAnswer: "Voir la réponse",
      hideAnswer: "Masquer la réponse",
      flashcardLearned: "Marquer comme maîtrisé",
      flashcardNeedReview: "À revoir",
      flashcardIndex: "Carte {current} sur {total}",
      nextCard: "Carte suivante",
      prevCard: "Carte précédente"
    }
  },

  t(key, params = {}) {
    const langDict = this.translations[this.currentLang] || this.translations['en'];
    let str = langDict[key] || this.translations['en'][key] || key;
    for (const [pKey, pVal] of Object.entries(params)) {
      str = str.replace(`{${pKey}}`, pVal);
    }
    return str;
  },

  setLang(lang) {
    if (this.supportedLangs.includes(lang)) {
      this.currentLang = lang;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('cpp_course_lang', lang);
      }
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
    }
  },

  init() {
    let saved = null;
    if (typeof localStorage !== 'undefined') {
      try {
        saved = localStorage.getItem('cpp_course_lang');
      } catch (e) {}
    }
    if (saved && this.supportedLangs.includes(saved)) {
      this.currentLang = saved;
    } else if (typeof navigator !== 'undefined') {
      const navLang = (navigator.language || 'en').substring(0, 2).toLowerCase();
      if (this.supportedLangs.includes(navLang)) {
        this.currentLang = navLang;
      } else {
        this.currentLang = 'en';
      }
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = this.currentLang;
    }
  }
};

I18N.init();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18N;
}
