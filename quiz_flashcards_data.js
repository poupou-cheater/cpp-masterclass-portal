// Expanded Flashcards & Massive Quiz Question Bank
// Supports:
// 1. 42 Active-Recall Flashcards across all C++ topics
// 2. 45 Questions in Centralized Question Bank for Grand Master Exam of Everything
// 3. Per-lesson quick check quizzes for ALL 35 lessons
// 4. Fisher-Yates randomization utilities

const FLASHCARDS_DATA = [
  // BASICS & SYNTAX
  {
    id: 1,
    category: "Basics",
    front: {
      en: "What is the key difference between a Pointer (*) and a Reference (&)?",
      fr: "Quelle est la différence fondamentale entre un Pointeur (*) et une Référence (&) ?"
    },
    back: {
      en: "A pointer holds a memory address and can be reassigned or be nullptr. A reference is an immutable alias to an existing object and cannot be null.",
      fr: "Un pointeur stocke une adresse mémoire et peut être réassigné ou valoir nullptr. Une référence est un alias immuable vers un objet existant et ne peut pas être nulle."
    },
    codeSnippet: `int x = 10;\nint* ptr = &x; // Can be reassigned, can be nullptr\nint& ref = x;  // Permanent alias to x, cannot be null`
  },
  {
    id: 2,
    category: "Basics",
    front: {
      en: "What is the difference between 'const' and 'constexpr'?",
      fr: "Quelle est la différence entre 'const' et 'constexpr' ?"
    },
    back: {
      en: "'const' means read-only at runtime. 'constexpr' guarantees computation at compile-time, allowing use in template arguments and fixed array sizes.",
      fr: "'const' signifie en lecture seule à l'exécution. 'constexpr' garantit l'évaluation dès la compilation (arguments de templates, tailles de tableaux)."
    },
    codeSnippet: `const int runtimeVal = rand();       // OK: initialized at runtime\nconstexpr int compileVal = 10 * 5;   // Evaluated at compile-time!`
  },
  {
    id: 3,
    category: "Basics",
    front: {
      en: "Why is 'using namespace std;' dangerous in header files (.h / .hpp)?",
      fr: "Pourquoi 'using namespace std;' est-il dangereux dans les en-têtes (.h / .hpp) ?"
    },
    back: {
      en: "It pollutes the global namespace of any source file including that header, creating silent name clashes with standard library functions (like std::count, std::min).",
      fr: "Il pollue l'espace de noms global de tout fichier incluant cet en-tête, risquant de créer des collisions invisibles (ex. std::count, std::min)."
    },
    codeSnippet: `// Good in headers:\nvoid print(const std::string& str);\n// Avoid in headers: using namespace std;`
  },
  {
    id: 4,
    category: "Basics",
    front: {
      en: "Why should you use 'static_cast<Type>' instead of C-style casting '(Type)'?",
      fr: "Pourquoi utiliser 'static_cast<Type>' plutôt que le cast à la C '(Type)' ?"
    },
    back: {
      en: "static_cast is checked by the compiler for validity and prevents accidental, dangerous casts like converting pointers to unrelated types.",
      fr: "static_cast est validé par le compilateur et interdit les conversions accidentelles dangereuses entre types incompatibles."
    },
    codeSnippet: `double d = 9.99;\nint i = static_cast<int>(d); // Explicit and compiler-checked`
  },
  {
    id: 5,
    category: "Basics",
    front: {
      en: "What is Short-Circuit Evaluation in boolean logic?",
      fr: "Qu'est-ce que l'évaluation en court-circuit en logique booléenne ?"
    },
    back: {
      en: "In 'A && B', if A is false, B is never evaluated. In 'A || B', if A is true, B is never evaluated. This allows safe null pointer checks before dereferencing.",
      fr: "Dans 'A && B', si A est faux, B n'est jamais évalué. Dans 'A || B', si A est vrai, B n'est pas évalué. Cela permet de vérifier un pointeur nul avant de l'utiliser."
    },
    codeSnippet: `if (ptr != nullptr && ptr->isValid()) { ... } // Safe!`
  },

  // MEMORY & POINTERS
  {
    id: 6,
    category: "Memory",
    front: {
      en: "Why should you prefer nullptr over NULL or 0 in modern C++?",
      fr: "Pourquoi privilégier nullptr par rapport à NULL ou 0 en C++ moderne ?"
    },
    back: {
      en: "nullptr has its own distinct type (std::nullptr_t), preventing ambiguity during function overloading where NULL (macro for 0) might call an integer overload.",
      fr: "nullptr possède son propre type (std::nullptr_t), évitant toute ambiguïté lors de la surcharge où NULL (valeur 0) appellerait une version entière."
    },
    codeSnippet: `void f(int); void f(int*);\nf(nullptr); // Calls f(int*) unambiguously!`
  },
  {
    id: 7,
    category: "Memory",
    front: {
      en: "What is the difference between Stack and Heap memory?",
      fr: "Quelle est la différence entre la mémoire Pile (Stack) et le Tas (Heap) ?"
    },
    back: {
      en: "Stack memory is fast, automatically managed (LIFO), but limited in size. Heap memory is manually allocated at runtime (dynamic), larger, but slower and risks leaks.",
      fr: "La Pile (Stack) est ultra-rapide et gérée automatiquement (LIFO), mais de taille limitée. Le Tas (Heap) est dynamique, volumineux, mais plus lent et source potentielle de fuites."
    },
    codeSnippet: `int stackVar = 5;            // Instant, auto freed\nint* heapVar = new int(5);   // Manual, requires delete`
  },
  {
    id: 8,
    category: "Memory",
    front: {
      en: "What is a Dangling Pointer and how can you prevent it?",
      fr: "Qu'est-ce qu'un pointeur pendant (Dangling Pointer) et comment l'éviter ?"
    },
    back: {
      en: "A dangling pointer points to memory that has already been deallocated. Prevent it by assigning pointers to nullptr immediately after delete, or using smart pointers.",
      fr: "Un pointeur pendant pointe vers une zone mémoire déjà libérée. On l'évite en affectant nullptr après delete, ou en utilisant des smart pointers."
    },
    codeSnippet: `delete ptr;\nptr = nullptr; // Prevents dangling access`
  },
  {
    id: 9,
    category: "Memory",
    front: {
      en: "Why should you use std::make_unique<T>() instead of new?",
      fr: "Pourquoi utiliser std::make_unique<T>() plutôt que new ?"
    },
    back: {
      en: "std::make_unique provides exception safety (no leaks if another argument throws) and avoids repetitive type declarations.",
      fr: "std::make_unique garantit la sécurité vis-à-vis des exceptions (pas de fuite si un autre paramètre lève une exception) et évite de répéter le type."
    },
    codeSnippet: `auto ptr = std::make_unique<MyClass>(arg1, arg2); // Exception-safe`
  },
  {
    id: 10,
    category: "Memory",
    front: {
      en: "What is the purpose of std::weak_ptr?",
      fr: "À quoi sert std::weak_ptr ?"
    },
    back: {
      en: "std::weak_ptr holds a non-owning reference to an object managed by std::shared_ptr, breaking circular reference memory leaks.",
      fr: "std::weak_ptr détient une référence non-propriétaire vers un objet géré par std::shared_ptr, brisant les cycles de références qui causent des fuites."
    },
    codeSnippet: `std::shared_ptr<Node> a = std::make_shared<Node>();\nstd::weak_ptr<Node> weakA = a; // Does not increment ref count`
  },

  // FUNCTIONS & SCOPE
  {
    id: 11,
    category: "Functions",
    front: {
      en: "When should you pass parameters by const reference (const T&)?",
      fr: "Quand devez-vous passer des paramètres par référence constante (const T&) ?"
    },
    back: {
      en: "For non-primitive objects (std::string, std::vector, custom classes) where you only need read access, eliminating expensive object copies.",
      fr: "Pour les objets non primitifs (std::string, std::vector, classes personnalisées) en lecture seule, éliminant ainsi les copies coûteuses."
    },
    codeSnippet: `void process(const std::vector<int>& data); // Zero copies!`
  },
  {
    id: 12,
    category: "Functions",
    front: {
      en: "What is Function Overloading in C++?",
      fr: "Qu'est-ce que la surcharge de fonction en C++ ?"
    },
    back: {
      en: "Defining multiple functions with the same name but different parameter types or parameter counts in the same scope.",
      fr: "Définir plusieurs fonctions portant le même nom mais ayant des types ou nombres de paramètres différents dans la même portée."
    },
    codeSnippet: `void print(int x);\nvoid print(double d);\nvoid print(const std::string& s);`
  },
  {
    id: 13,
    category: "Functions",
    front: {
      en: "What is an inline function?",
      fr: "Qu'est-ce qu'une fonction inline ?"
    },
    back: {
      en: "A hint to the compiler to substitute the function body at the call site to eliminate function call overhead, and allows defining functions in headers without ODR violations.",
      fr: "Une suggestion au compilateur de remplacer l'appel par le corps de la fonction pour supprimer l'overhead d'appel, permettant la définition dans les headers sans violation d'ODR."
    },
    codeSnippet: `inline int square(int x) { return x * x; }`
  },

  // OBJECT-ORIENTED PROGRAMMING (OOP)
  {
    id: 14,
    category: "OOP",
    front: {
      en: "What is the difference between a class and a struct in C++?",
      fr: "Quelle est la différence entre une class et une struct en C++ ?"
    },
    back: {
      en: "In a struct, members and base inheritance default to 'public'. In a class, members and inheritance default to 'private'. Otherwise, they are identical.",
      fr: "Dans une struct, les membres et l'héritage sont 'public' par défaut. Dans une class, ils sont 'private' par défaut. Hormis cela, elles sont identiques."
    },
    codeSnippet: `struct Point { int x, y; }; // public by default\nclass User { std::string name; }; // private by default`
  },
  {
    id: 15,
    category: "OOP",
    front: {
      en: "What is Polymorphism and what keyword enables it in C++?",
      fr: "Qu'est-ce que le polymorphisme et quel mot-clé l'active en C++ ?"
    },
    back: {
      en: "Polymorphism allows derived classes to override base class methods at runtime. It is enabled using the 'virtual' keyword in the base class and resolved via a vtable.",
      fr: "Le polymorphisme permet aux classes dérivées de redéfinir des méthodes de base à l'exécution via le mot-clé 'virtual' et une table virtuelle (vtable)."
    },
    codeSnippet: `class Shape {\npublic:\n    virtual void draw() const = 0; // Pure virtual\n};`
  },
  {
    id: 16,
    category: "OOP",
    front: {
      en: "Why MUST base class destructors be marked 'virtual' in polymorphic hierarchies?",
      fr: "Pourquoi le destructeur d'une classe de base polymorphique DOIT-IL être virtuel ?"
    },
    back: {
      en: "If deleted via a base class pointer (Base* p = new Derived()), a non-virtual destructor only executes ~Base(), leaking resources allocated by Derived.",
      fr: "En cas de suppression via un pointeur de base (Base* p = new Derived()), un destructeur non virtuel n'appelle que ~Base(), provoquant des fuites dans Derived."
    },
    codeSnippet: `class Base {\npublic:\n    virtual ~Base() = default; // Essential!\n};`
  },
  {
    id: 17,
    category: "OOP",
    front: {
      en: "What are the 5 special member functions in 'The Rule of 5'?",
      fr: "Quelles sont les 5 fonctions spéciales de la 'Règle des 5' ?"
    },
    back: {
      en: "1. Destructor\n2. Copy Constructor\n3. Copy Assignment Operator\n4. Move Constructor\n5. Move Assignment Operator",
      fr: "1. Destructeur\n2. Constructeur de copie\n3. Opérateur d'assignation par copie\n4. Constructeur de déplacement (move)\n5. Opérateur d'assignation par déplacement"
    },
    codeSnippet: `~Widget();\nWidget(const Widget&);\nWidget& operator=(const Widget&);\nWidget(Widget&&) noexcept;\nWidget& operator=(Widget&&) noexcept;`
  },
  {
    id: 18,
    category: "OOP",
    front: {
      en: "What is RAII (Resource Acquisition Is Initialization)?",
      fr: "Qu'est-ce que le patron RAII (Resource Acquisition Is Initialization) ?"
    },
    back: {
      en: "A core C++ idiom where resource management (memory, file handles, mutex locks) is tied to object lifetime: acquired in constructor, released automatically in destructor.",
      fr: "Un idiome fondamental où la gestion des ressources (mémoire, fichiers, verrous) est liée à la durée de vie d'un objet : acquise dans le constructeur, libérée dans le destructeur."
    },
    codeSnippet: `std::lock_guard<std::mutex> lock(mtx); // Locked here, auto-unlocked at scope exit`
  },

  // MODERN C++ (C++11 TO C++20)
  {
    id: 19,
    category: "Modern C++",
    front: {
      en: "What is an Rvalue Reference (Type&&) and Move Semantics?",
      fr: "Qu'est-ce qu'une référence rvalue (Type&&) et la sémantique de déplacement (Move) ?"
    },
    back: {
      en: "An rvalue reference binds to temporary objects about to be destroyed, enabling 'moving' their internal heap buffers instead of making expensive deep copies.",
      fr: "Une référence rvalue se lie aux objets temporaires sur le point d'être détruits, permettant de 'voler' leurs buffers internes plutôt que de faire une copie coûteuse."
    },
    codeSnippet: `std::vector<int> a = {1, 2, 3};\nstd::vector<int> b = std::move(a); // Steals buffer, a is now empty`
  },
  {
    id: 20,
    category: "Modern C++",
    front: {
      en: "What is std::string_view and why is it preferred for read-only string parameters?",
      fr: "Qu'est-ce que std::string_view et pourquoi est-il préféré pour les paramètres en lecture seule ?"
    },
    back: {
      en: "It is a lightweight non-owning view (pointer + length). It avoids dynamic allocations when passing C-string literals, substrings, or std::string.",
      fr: "C'est une vue non-propriétaire très légère (pointeur + taille). Elle évite toute allocation dynamique lors du passage de littéraux, sous-chaînes ou std::string."
    },
    codeSnippet: `void log(std::string_view message); // Zero allocations for literals!`
  },
  {
    id: 21,
    category: "Modern C++",
    front: {
      en: "What is the difference between std::optional<T> and returning a sentinel value (like -1 or nullptr)?",
      fr: "Quelle est la différence entre std::optional<T> et renvoyer une valeur sentinelle (-1 ou nullptr) ?"
    },
    back: {
      en: "std::optional explicitly models the possibility of an absent value in a type-safe way, forcing caller checks and avoiding confusing magic numbers.",
      fr: "std::optional modélise explicitement l'absence de valeur de façon typée et sûre, obligeant l'appelant à vérifier l'état sans valeurs magiques."
    },
    codeSnippet: `std::optional<int> findUser(int id);\nauto res = findUser(42);\nif (res.has_value()) { use(*res); }`
  },
  {
    id: 22,
    category: "Modern C++",
    front: {
      en: "What is std::variant<Types...>?",
      fr: "Qu'est-ce que std::variant<Types...> ?"
    },
    back: {
      en: "A type-safe, union-like container that holds a value of one of several alternative types. It remembers which type is currently held and cleans up properly.",
      fr: "Un conteneur typé et sûr (union moderne) contenant une valeur parmi plusieurs types possibles. Il sait quel type est actif et appelle le destructeur adéquat."
    },
    codeSnippet: `std::variant<int, std::string, double> var = "hello";\nstd::cout << std::get<std::string>(var);`
  },
  {
    id: 23,
    category: "Modern C++",
    front: {
      en: "What is a Lambda Expression in C++?",
      fr: "Qu'est-ce qu'une expression Lambda en C++ ?"
    },
    back: {
      en: "An anonymous inline function object that can capture variables from its enclosing scope ([capture](params){ body }).",
      fr: "Un objet fonction anonyme défini en ligne capable de capturer des variables de sa portée englobante ([capture](params){ corps })."
    },
    codeSnippet: `auto isEven = [](int n) { return n % 2 == 0; };\nbool ok = isEven(4); // true`
  },

  // STANDARD TEMPLATE LIBRARY (STL)
  {
    id: 24,
    category: "STL",
    front: {
      en: "What is the difference between std::vector and std::deque?",
      fr: "Quelle est la différence entre std::vector et std::deque ?"
    },
    back: {
      en: "std::vector stores elements in a single contiguous memory buffer (fastest iteration). std::deque stores elements in fixed-size chunk blocks, enabling fast O(1) front insertions.",
      fr: "std::vector stocke les éléments dans un buffer contigu (itération optimale). std::deque utilise des blocs chaînés, permettant des insertions rapides en O(1) à l'avant."
    },
    codeSnippet: `std::deque<int> dq;\ndq.push_front(1); // O(1) front insertion\ndq.push_back(2);  // O(1) back insertion`
  },
  {
    id: 25,
    category: "STL",
    front: {
      en: "What is the difference between std::map and std::unordered_map?",
      fr: "Quelle est la différence entre std::map et std::unordered_map ?"
    },
    back: {
      en: "std::map is an ordered Red-Black Tree (O(log N) lookup). std::unordered_map is an unsorted Hash Table (O(1) average lookup).",
      fr: "std::map est un arbre bicolore ordonné (recherche en O(log N)). std::unordered_map est une table de hachage non ordonnée (recherche moyenne en O(1))."
    },
    codeSnippet: `std::unordered_map<std::string, int> ages; // O(1) average lookup`
  },
  {
    id: 26,
    category: "STL",
    front: {
      en: "What does std::sort do and what is its computational complexity?",
      fr: "Que fait std::sort et quelle est sa complexité algorithmique ?"
    },
    back: {
      en: "It sorts elements in ascending order using Introsort (hybrid of Quicksort, Heapsort, and Insertion Sort) with guaranteed O(N log N) worst-case time complexity.",
      fr: "Il trie les éléments par ordre croissant avec Introsort (hybride Quicksort, Heapsort et Insertion Sort) avec une complexité garantie en O(N log N) au pire cas."
    },
    codeSnippet: `std::vector<int> v = {4, 1, 3};\nstd::sort(v.begin(), v.end()); // {1, 3, 4}`
  },

  // PROFESSIONAL DEVELOPER TOOLING
  {
    id: 27,
    category: "Pro Dev",
    front: {
      en: "Why is target_link_libraries() preferred over global link_directories() in CMake?",
      fr: "Pourquoi target_link_libraries() est-il recommandé par rapport à link_directories() dans CMake ?"
    },
    back: {
      en: "target_link_libraries is target-scoped, cleanly propagating include directories, compiler definitions, and dependencies only where needed without polluting global flags.",
      fr: "target_link_libraries est attaché à une cible précise, propageant proprement les dépendances et en-têtes sans polluer les drapeaux globaux."
    },
    codeSnippet: `target_link_libraries(my_app PRIVATE fmt::fmt)`
  },
  {
    id: 28,
    category: "Pro Dev",
    front: {
      en: "What is the primary difference between GDB commands 'step' (s) and 'next' (n)?",
      fr: "Quelle est la différence fondamentale entre 'step' (s) et 'next' (n) dans GDB ?"
    },
    back: {
      en: "'step' (s) steps into function calls; 'next' (n) executes the function call as a single step without diving into it.",
      fr: "'step' (s) entre à l'intérieur des fonctions appelées ; 'next' (n) exécute la ligne sans entrer dans la fonction."
    },
    codeSnippet: `(gdb) s  # Step into\n(gdb) n  # Next line`
  },
  {
    id: 29,
    category: "Pro Dev",
    front: {
      en: "What is the difference between EXPECT_EQ and ASSERT_EQ in GoogleTest?",
      fr: "Quelle est la différence entre EXPECT_EQ et ASSERT_EQ dans GoogleTest ?"
    },
    back: {
      en: "EXPECT_EQ logs failure but allows the rest of the test case to continue running. ASSERT_EQ immediately aborts the current test function upon failure.",
      fr: "EXPECT_EQ enregistre l'échec et continue l'exécution du test. ASSERT_EQ interrompt immédiatement le test en cours."
    },
    codeSnippet: `EXPECT_EQ(calc(2, 3), 5); // Non-fatal\nASSERT_NE(ptr, nullptr);  // Fatal: prevents crash on next line`
  },
  {
    id: 30,
    category: "Pro Dev",
    front: {
      en: "Why is std::jthread safer than std::thread in C++20?",
      fr: "Pourquoi std::jthread est-il plus sûr que std::thread en C++20 ?"
    },
    back: {
      en: "std::jthread automatically requests cancellation and joins upon destruction, whereas an unjoined std::thread will call std::terminate() crashing your program.",
      fr: "std::jthread appelle automatiquement join() et supporte les arrêts coopératifs lors de sa destruction, évitant le crash de std::terminate() provoqué par un std::thread non joint."
    },
    codeSnippet: `{\n    std::jthread t([]{ /* work */ });\n} // Automatically joins here cleanly!`
  },
  {
    id: 31,
    category: "Pro Dev",
    front: {
      en: "What is the Pimpl (Pointer to Implementation) Idiom used for?",
      fr: "À quoi sert l'idiome Pimpl (Pointer to Implementation) en C++ ?"
    },
    back: {
      en: "It hides private implementation details and third-party dependencies inside a source (.cpp) file, speeding up build times and preserving binary ABI compatibility.",
      fr: "Il isole les détails privés et dépendances lourdes dans le fichier .cpp, accélérant drastiquement la compilation et garantissant la stabilité ABI."
    },
    codeSnippet: `class Widget {\n    struct Impl;\n    std::unique_ptr<Impl> pImpl;\n};`
  },
  {
    id: 32,
    category: "Pro Dev",
    front: {
      en: "What is a Data Race and how do you prevent it in C++?",
      fr: "Qu'est-ce qu'une Data Race (condition de course) et comment l'éviter ?"
    },
    back: {
      en: "When two threads access the same memory location concurrently and at least one is a write without synchronization. Prevent it using std::mutex or std::atomic.",
      fr: "Lorsque deux threads accèdent simultanément à la même zone mémoire dont au moins un en écriture sans verrou. On l'évite via std::mutex ou std::atomic."
    },
    codeSnippet: `std::atomic<int> safeCounter{0};\nsafeCounter.fetch_add(1); // Lock-free thread safe!`
  },
  {
    id: 33,
    category: "Modern C++",
    front: {
      en: "How does 'auto' type deduction work in C++11/14/17?",
      fr: "Comment fonctionne la déduction de type 'auto' en C++11/14/17 ?"
    },
    back: {
      en: "'auto' deduces the type of a variable from its initializer expression at compile time without any runtime overhead. By default, it drops const and references unless explicitly specified (e.g. const auto&).",
      fr: "'auto' déduit le type de la variable dès la compilation à partir de l'expression d'initialisation, sans aucun surcoût d'exécution. Il ignore const et les références sauf si précisé explicitement (ex. const auto&)."
    },
    codeSnippet: `auto x = 42;             // int\nconst auto& ref = myVec; // const reference to vector`
  },
  {
    id: 34,
    category: "Modern C++",
    front: {
      en: "What are Structured Bindings introduced in C++17?",
      fr: "Que sont les liaisons structurées (Structured Bindings) introduites en C++17 ?"
    },
    back: {
      en: "They allow decomposing tuples, pairs, arrays, or structs directly into individual named variables in a single clean declaration.",
      fr: "Elles permettent de décomposer des tuples, paires, tableaux ou structs directement en variables nommées distinctes dans une déclaration unique."
    },
    codeSnippet: `auto [key, val] = *map.begin();\nauto [x, y, z] = getCoordinates();`
  },
  {
    id: 35,
    category: "Modern C++",
    front: {
      en: "What are C++20 Concepts and what problem do they solve?",
      fr: "Que sont les Concepts en C++20 et quel problème résolvent-ils ?"
    },
    back: {
      en: "Concepts specify compile-time constraints on template arguments, transforming cryptic pages of template compilation errors into clear, readable diagnostic messages.",
      fr: "Les concepts définissent des contraintes de compilation sur les arguments de templates, remplaçant les erreurs cryptiques de templates par des messages clairs et précis."
    },
    codeSnippet: `template<std::integral T>\nT add(T a, T b) { return a + b; }`
  },
  {
    id: 36,
    category: "Modern C++",
    front: {
      en: "What is 'if constexpr' in C++17?",
      fr: "Qu'est-ce que 'if constexpr' en C++17 ?"
    },
    back: {
      en: "A compile-time conditional statement where the non-selected branch is discarded by the compiler without generating code or triggering invalid template syntax errors.",
      fr: "Une conditionnelle évaluée à la compilation où la branche non sélectionnée est rejetée par le compilateur sans générer de code ni d'erreurs de syntaxe template."
    },
    codeSnippet: `template <typename T>\nvoid print(T val) {\n    if constexpr (std::is_pointer_v<T>) std::cout << *val;\n    else std::cout << val;\n}`
  },
  {
    id: 37,
    category: "STL",
    front: {
      en: "What is the advantage of vector.emplace_back() over vector.push_back()?",
      fr: "Quel est l'avantage de vector.emplace_back() par rapport à vector.push_back() ?"
    },
    back: {
      en: "emplace_back forwards its arguments to construct the object directly in place inside the vector buffer, avoiding temporary object creation and copy/move operations.",
      fr: "emplace_back transmet ses arguments pour construire l'objet directement sur place dans la mémoire du vecteur, évitant la création d'un temporaire et sa copie/déplacement."
    },
    codeSnippet: `std::vector<std::pair<int, std::string>> v;\nv.emplace_back(1, "item"); // Constructs pair in place!`
  },
  {
    id: 38,
    category: "Basics",
    front: {
      en: "What is the difference between Header Guards (#ifndef) and #pragma once?",
      fr: "Quelle est la différence entre les Header Guards (#ifndef) et #pragma once ?"
    },
    back: {
      en: "Header guards are 100% standard C++ macro guards. '#pragma once' is a non-standard compiler directive supported by all modern compilers that prevents multiple inclusion faster and without macro name clashes.",
      fr: "Les header guards sont des macros 100% standard. '#pragma once' est une directive supportée par tous les compilateurs modernes, évitant les collisions de noms de macros plus rapidement."
    },
    codeSnippet: `// Method 1:\n#pragma once\n\n// Method 2:\n#ifndef MY_HEADER_H\n#define MY_HEADER_H\n...\n#endif`
  },
  {
    id: 39,
    category: "Pro Dev",
    front: {
      en: "What is the difference between ASan (AddressSanitizer) and UBSan (UndefinedBehaviorSanitizer)?",
      fr: "Quelle est la différence entre ASan (AddressSanitizer) et UBSan (UndefinedBehaviorSanitizer) ?"
    },
    back: {
      en: "ASan catches memory errors (buffer overflows, use-after-free, double delete). UBSan catches undefined logic behavior (signed integer overflow, null pointer dereference, misaligned memory access).",
      fr: "ASan intercepte les erreurs mémoire (débordements, use-after-free, double free). UBSan intercepte les comportements indéterminés (dépassements d'entiers signés, déréférencement nul, alignement)."
    },
    codeSnippet: `g++ -fsanitize=address,undefined -g main.cpp -o app`
  },
  {
    id: 40,
    category: "Modern C++",
    front: {
      en: "What lifetime hazard must you watch out for with std::string_view?",
      fr: "À quel risque de durée de vie doit-on faire attention avec std::string_view ?"
    },
    back: {
      en: "std::string_view does not own the characters it points to. If the underlying std::string is destroyed or reallocated, the string_view becomes a dangling view causing undefined behavior.",
      fr: "std::string_view ne possède pas les caractères pointés. Si le std::string sous-jacent est détruit ou réalloué, la vue pointe sur une mémoire invalide (dangling pointer)."
    },
    codeSnippet: `std::string_view sv = std::string("temporary"); // DANGER: dangling reference!\n// sv now points to freed memory!`
  },
  {
    id: 41,
    category: "OOP",
    front: {
      en: "What does the 'explicit' keyword do on a constructor?",
      fr: "À quoi sert le mot-clé 'explicit' sur un constructeur ?"
    },
    back: {
      en: "It prevents the compiler from using that constructor for implicit type conversions and copy-initialization, stopping subtle bugs.",
      fr: "Il empêche le compilateur d'utiliser ce constructeur pour des conversions de type implicites et des initialisations par copie involontaires."
    },
    codeSnippet: `class Buffer {\npublic:\n    explicit Buffer(int size); // Prevents Buffer b = 10;\n};`
  },
  {
    id: 42,
    category: "Pro Dev",
    front: {
      en: "What is a Deadlock and how can std::scoped_lock (C++17) prevent it?",
      fr: "Qu'est-ce qu'un interblocage (Deadlock) et comment std::scoped_lock (C++17) l'évite-t-il ?"
    },
    back: {
      en: "A deadlock occurs when two threads wait on locks held by each other. std::scoped_lock locks multiple mutexes simultaneously using a deadlock-avoidance algorithm.",
      fr: "Un interblocage survient lorsque deux threads s'attendent mutuellement sur des verrous. std::scoped_lock verrouille plusieurs mutex simultanément avec un algorithme anti-deadlock."
    },
    codeSnippet: `std::scoped_lock lock(mutexA, mutexB); // Deadlock-free multi-lock!`
  },
  {
    id: 43,
    category: "Pro Dev",
    front: {
      en: "Why is std::jthread (C++20) safer than std::thread?",
      fr: "Pourquoi std::jthread (C++20) est-il plus sûr que std::thread ?"
    },
    back: {
      en: "std::jthread automatically joins in its destructor on scope exit, preventing std::terminate() crashes. It also natively supports cooperative cancellation via std::stop_token.",
      fr: "std::jthread s'auto-joint dans son destructeur en sortie de portée, évitant les crashs std::terminate(). Il intègre aussi l'arrêt coopératif via std::stop_token."
    },
    codeSnippet: `// Safe: auto-joins on destruction\nstd::jthread t([](std::stop_token st) {\n    while (!st.stop_requested()) { /* work */ }\n});`
  },
  {
    id: 44,
    category: "Pro Dev",
    front: {
      en: "What is the difference between std::lock_guard and std::unique_lock?",
      fr: "Quelle est la différence entre std::lock_guard et std::unique_lock ?"
    },
    back: {
      en: "std::lock_guard is a strict, lightweight RAII wrapper that only locks on construction and unlocks on destruction. std::unique_lock is movable and supports deferred locking, timed locking, and condition variables.",
      fr: "std::lock_guard est un verrou RAII strict et léger (verrouille à la création, libère à la destruction). std::unique_lock est déplaçable, supporte le verrouillage différé et est requis par std::condition_variable."
    },
    codeSnippet: `std::unique_lock<std::mutex> lock(mtx, std::defer_lock);\n// Lock later:\nlock.lock();`
  },
  {
    id: 45,
    category: "Pro Dev",
    front: {
      en: "What is a Spurious Wakeup and how do you prevent it with std::condition_variable?",
      fr: "Qu'est-ce qu'un réveil spontané (Spurious Wakeup) et comment l'éviter avec std::condition_variable ?"
    },
    back: {
      en: "An OS thread waiting on a condition variable can wake up without any signal sent. Always pass a predicate lambda to cv.wait(lock, []{ return condition; }); to re-check the condition in a loop.",
      fr: "Un thread en attente peut être réveillé sans notification du système. On doit toujours passer un prédicat lambda à cv.wait(lock, []{ return condition; }); pour vérifier la condition en boucle."
    },
    codeSnippet: `std::unique_lock<std::mutex> lock(mtx);\ncv.wait(lock, [&]{ return !queue.empty(); }); // Safe predicate!`
  },
  {
    id: 46,
    category: "Pro Dev",
    front: {
      en: "What is the difference between std::launch::async and std::launch::deferred in std::async?",
      fr: "Quelle est la différence entre std::launch::async et std::launch::deferred dans std::async ?"
    },
    back: {
      en: "std::launch::async guarantees execution on a separate physical background thread. std::launch::deferred delays execution until .get() or .wait() is called, running synchronously on the calling thread.",
      fr: "std::launch::async garantit l'exécution sur un thread séparé en arrière-plan. std::launch::deferred diffère l'exécution jusqu'à l'appel de .get(), s'exécutant sur le thread appelant."
    },
    codeSnippet: `auto f1 = std::async(std::launch::async, task);    // New thread!\nauto f2 = std::async(std::launch::deferred, task); // Lazy synchronous`
  },
  {
    id: 47,
    category: "Pro Dev",
    front: {
      en: "What is False Sharing and how do you prevent it in high-performance multithreading?",
      fr: "Qu'est-ce que le False Sharing et comment l'éliminer en multithreading haute performance ?"
    },
    back: {
      en: "False sharing occurs when independent threads modify distinct variables that share the same 64-byte CPU cache line, causing constant cache invalidations. Prevent it with alignas(64).",
      fr: "Le faux partage survient quand des threads modifient des variables distinctes situées sur la même ligne de cache (64 octets), invalidant inutilement le cache. On l'évite avec alignas(64)."
    },
    codeSnippet: `struct alignas(64) ThreadData {\n    std::atomic<int> counter{0}; // Isolated in its own 64-byte cache line!\n};`
  },
  {
    id: 48,
    category: "Pro Dev",
    front: {
      en: "What is the difference between std::latch and std::barrier (C++20)?",
      fr: "Quelle est la différence entre std::latch et std::barrier (C++20) ?"
    },
    back: {
      en: "std::latch is a single-use countdown synchronizer (once count reaches zero, it stays open). std::barrier is reusable across repeated phases with an optional completion function.",
      fr: "std::latch est un compte à rebours à usage unique (reste ouvert une fois à 0). std::barrier est réutilisable à travers des phases successives avec une fonction d'étape."
    },
    codeSnippet: `std::latch sync(4); // 4 threads arrive, then unblock\nsync.count_down(); sync.wait();`
  },
  {
    id: 49,
    category: "Modern C++",
    front: {
      en: "Why are C++20 Concepts superior to traditional SFINAE (std::enable_if)?",
      fr: "Pourquoi les Concepts C++20 sont-ils supérieurs à SFINAE (std::enable_if) ?"
    },
    back: {
      en: "Concepts express compile-time type constraints directly in the function signature, provide readable compiler error messages, compile faster, and support logical operators (&&, ||).",
      fr: "Les concepts expriment les contraintes directement dans la signature, offrent des messages d'erreur clairs (sans pavés illisibles), compilent plus vite et supportent les opérateurs && et ||."
    },
    codeSnippet: `template<typename T>\nconcept Numeric = std::integral<T> || std::floating_point<T>;\n\ntemplate<Numeric T> T add(T a, T b) { return a + b; }`
  },
  {
    id: 50,
    category: "Modern C++",
    front: {
      en: "How do C++20 Ranges (std::views) optimize collection transformations?",
      fr: "Comment les Ranges C++20 (std::views) optimisent-ils les transformations de conteneurs ?"
    },
    back: {
      en: "std::views are non-owning, O(1) copy, lazy-evaluated transformations. Elements are computed on the fly during iteration without allocating temporary intermediate containers.",
      fr: "std::views sont des vues non-propriétaires, à copie O(1) et évaluation paresseuse. Les éléments sont calculés à la volée sans allouer de conteneurs intermédiaires."
    },
    codeSnippet: `auto evens = vec | std::views::filter([](int n){ return n % 2 == 0; })\n                 | std::views::transform([](int n){ return n * 2; });`
  },
  {
    id: 51,
    category: "Modern C++",
    front: {
      en: "What are the three C++20 Coroutine keywords and what do they do?",
      fr: "Quels sont les trois mots-clés des Coroutines C++20 et que font-ils ?"
    },
    back: {
      en: "'co_await' suspends execution until an async task finishes; 'co_yield' suspends execution and returns an intermediate value; 'co_return' completes the coroutine with a final value.",
      fr: "'co_await' suspend jusqu'à la fin d'une tâche asynchrone ; 'co_yield' suspend et produit une valeur intermédiaire ; 'co_return' termine la coroutine et renvoie le résultat."
    },
    codeSnippet: `// Inside a generator:\nfor (int i = 0; i < 10; i++) {\n    co_yield i; // Yields value, suspends state\n}\nco_return;`
  },
  {
    id: 52,
    category: "Architecture",
    front: {
      en: "What is CRTP (Curiously Recurring Template Pattern) and when should you use it?",
      fr: "Qu'est-ce que le CRTP (Curiously Recurring Template Pattern) et quand l'utiliser ?"
    },
    back: {
      en: "CRTP is a static polymorphism idiom where a class derives from a template instantiated with itself. It provides polymorphic interface dispatch at compile-time with zero virtual table overhead.",
      fr: "Le CRTP est un idiome de polymorphisme statique où une classe dérive d'un template instancié avec elle-même. Il permet un polymorphisme à la compilation avec 0 surcoût de table virtuelle."
    },
    codeSnippet: `template<typename Derived>\nstruct Base {\n    void act() { static_cast<Derived*>(this)->impl(); }\n};\nstruct Derived : Base<Derived> { void impl(); };`
  }
];

// Comprehensive Question Bank for Grand Master Exam of Everything (45 Questions)
const GRAND_EXAM_QUESTIONS = [
  {
    id: 1,
    subject: "Basics",
    question: {
      en: "Which function is the mandatory entry point for any standard C++ executable?",
      fr: "Quelle fonction est le point d'entrée obligatoire de tout exécutable C++ standard ?"
    },
    options: [
      { text: { en: "void start()", fr: "void start()" }, correct: false },
      { text: { en: "int main()", fr: "int main()" }, correct: true },
      { text: { en: "int WinMain()", fr: "int WinMain()" }, correct: false },
      { text: { en: "void run()", fr: "void run()" }, correct: false }
    ],
    explanation: {
      en: "int main() is the universal standard entry point defined by the ISO C++ specification.",
      fr: "int main() est le point d'entrée standard universel défini par la norme ISO C++."
    }
  },
  {
    id: 2,
    subject: "Basics",
    question: {
      en: "What is the output of 'std::cout << 5 / 2;' in C++?",
      fr: "Quelle est la sortie de 'std::cout << 5 / 2;' en C++ ?"
    },
    options: [
      { text: { en: "2.5", fr: "2.5" }, correct: false },
      { text: { en: "2", fr: "2" }, correct: true },
      { text: { en: "3", fr: "3" }, correct: false },
      { text: { en: "Compile error", fr: "Erreur de compilation" }, correct: false }
    ],
    explanation: {
      en: "Integer division truncates decimals toward zero, resulting in 2.",
      fr: "La division entière tronque la partie décimale vers zéro, produisant 2."
    }
  },
  {
    id: 3,
    subject: "Basics",
    question: {
      en: "Which keyword guarantees that an expression is evaluated at compile time?",
      fr: "Quel mot-clé garantit qu'une expression est évaluée dès la compilation ?"
    },
    options: [
      { text: { en: "const", fr: "const" }, correct: false },
      { text: { en: "constexpr", fr: "constexpr" }, correct: true },
      { text: { en: "static", fr: "static" }, correct: false },
      { text: { en: "inline", fr: "inline" }, correct: false }
    ],
    explanation: {
      en: "constexpr enforces compile-time evaluation whenever possible.",
      fr: "constexpr impose une évaluation à la compilation dès que possible."
    }
  },
  {
    id: 4,
    subject: "Memory",
    question: {
      en: "What operator retrieves the memory address of an existing variable?",
      fr: "Quel opérateur extrait l'adresse mémoire d'une variable existante ?"
    },
    options: [
      { text: { en: "*", fr: "*" }, correct: false },
      { text: { en: "&", fr: "&" }, correct: true },
      { text: { en: "->", fr: "->" }, correct: false },
      { text: { en: "%", fr: "%" }, correct: false }
    ],
    explanation: {
      en: "The ampersand (&) is the address-of operator in C++.",
      fr: "L'esperluette (&) est l'opérateur d'adresse en C++."
    }
  },
  {
    id: 5,
    subject: "Memory",
    question: {
      en: "What happens when you dereference a null pointer (*p when p == nullptr)?",
      fr: "Que se passe-t-il si vous déréférencez un pointeur nul (*p avec p == nullptr) ?"
    },
    options: [
      { text: { en: "It returns 0", fr: "Il renvoie 0" }, correct: false },
      { text: { en: "Undefined behavior (typically immediate segmentation fault)", fr: "Comportement indéterminé (crash immédiat par segmentation fault)" }, correct: true },
      { text: { en: "Throws std::bad_alloc exception", fr: "Lève une exception std::bad_alloc" }, correct: false },
      { text: { en: "The compiler skips the line", fr: "Le compilateur ignore la ligne" }, correct: false }
    ],
    explanation: {
      en: "Dereferencing nullptr is undefined behavior and causes an operating system crash.",
      fr: "Déréférencer nullptr est un comportement indéterminé provoquant un crash système."
    }
  },
  {
    id: 6,
    subject: "Memory",
    question: {
      en: "Which smart pointer should be your default choice for single exclusive ownership?",
      fr: "Quel pointeur intelligent doit être votre choix par défaut pour une propriété exclusive ?"
    },
    options: [
      { text: { en: "std::shared_ptr", fr: "std::shared_ptr" }, correct: false },
      { text: { en: "std::unique_ptr", fr: "std::unique_ptr" }, correct: true },
      { text: { en: "std::weak_ptr", fr: "std::weak_ptr" }, correct: false },
      { text: { en: "std::auto_ptr", fr: "std::auto_ptr" }, correct: false }
    ],
    explanation: {
      en: "std::unique_ptr has zero runtime overhead and prevents multiple ownership bugs.",
      fr: "std::unique_ptr n'a aucun surcoût d'exécution et garantit la propriété exclusive."
    }
  },
  {
    id: 7,
    subject: "OOP",
    question: {
      en: "What is the default member access specifier in a C++ 'class' vs 'struct'?",
      fr: "Quelle est la visibilité par défaut des membres dans une 'class' vs une 'struct' ?"
    },
    options: [
      { text: { en: "class: private, struct: public", fr: "class : private, struct : public" }, correct: true },
      { text: { en: "class: public, struct: private", fr: "class : public, struct : private" }, correct: false },
      { text: { en: "Both are private by default", fr: "Les deux sont privées par défaut" }, correct: false },
      { text: { en: "Both are public by default", fr: "Les deux sont publiques par défaut" }, correct: false }
    ],
    explanation: {
      en: "In C++, struct members default to public, while class members default to private.",
      fr: "En C++, les membres d'une struct sont publics par défaut, ceux d'une class sont privés."
    }
  },
  {
    id: 8,
    subject: "OOP",
    question: {
      en: "Why must a polymorphic base class define a virtual destructor?",
      fr: "Pourquoi une classe de base polymorphique doit-elle avoir un destructeur virtuel ?"
    },
    options: [
      { text: { en: "To ensure the derived class destructor is invoked upon deletion", fr: "Pour garantir que le destructeur dérivé soit appelé lors d'un delete" }, correct: true },
      { text: { en: "To allow the class to be copied", fr: "Pour autoriser la copie de la classe" }, correct: false },
      { text: { en: "Virtual destructors make objects faster", fr: "Les destructeurs virtuels accélèrent l'objet" }, correct: false }
    ],
    explanation: {
      en: "Without a virtual destructor, 'delete pBase' only executes the base destructor, leaking derived resources.",
      fr: "Sans destructeur virtuel, 'delete pBase' n'exécute que le destructeur de base, fuyant les ressources filles."
    }
  },
  {
    id: 9,
    subject: "Modern C++",
    question: {
      en: "What does 'std::move(x)' do?",
      fr: "Que fait 'std::move(x)' ?"
    },
    options: [
      { text: { en: "It moves the memory of x to another core", fr: "Il déplace la mémoire de x sur un autre cœur" }, correct: false },
      { text: { en: "It casts x to an rvalue reference (Type&&)", fr: "Il effectue un cast de x en référence rvalue (Type&&)" }, correct: true },
      { text: { en: "It deletes x immediately", fr: "Il détruit x immédiatement" }, correct: false },
      { text: { en: "It clones x into a new heap location", fr: "Il clone x dans une nouvelle zone mémoire" }, correct: false }
    ],
    explanation: {
      en: "std::move is an unconditional cast to an rvalue reference, enabling move constructors.",
      fr: "std::move est un simple cast en référence rvalue permettant d'activer le constructeur de déplacement."
    }
  },
  {
    id: 10,
    subject: "Modern C++",
    question: {
      en: "What advantage does std::string_view provide over const std::string&?",
      fr: "Quel avantage offre std::string_view par rapport à const std::string& ?"
    },
    options: [
      { text: { en: "Zero-copy non-owning view that avoids allocations for string literals", fr: "Vue non-propriétaire sans copie évitant les allocations pour les littéraux" }, correct: true },
      { text: { en: "It can modify the characters in place", fr: "Il peut modifier les caractères sur place" }, correct: false },
      { text: { en: "It automatically encrypts strings", fr: "Il chiffre automatiquement les chaînes" }, correct: false }
    ],
    explanation: {
      en: "std::string_view holds only a pointer and length, completely avoiding heap allocations.",
      fr: "std::string_view ne stocke qu'un pointeur et une taille, évitant toute allocation sur le tas."
    }
  },
  {
    id: 11,
    subject: "Pro Dev",
    question: {
      en: "Which compiler flag enables Google AddressSanitizer (ASan) in GCC/Clang?",
      fr: "Quel flag de compilation active AddressSanitizer (ASan) sous GCC/Clang ?"
    },
    options: [
      { text: { en: "-fsanitize=address", fr: "-fsanitize=address" }, correct: true },
      { text: { en: "-O3", fr: "-O3" }, correct: false },
      { text: { en: "-Wpedantic", fr: "-Wpedantic" }, correct: false },
      { text: { en: "-g3", fr: "-g3" }, correct: false }
    ],
    explanation: {
      en: "-fsanitize=address instruments memory accesses to instantly catch buffer overflows and leaks at runtime.",
      fr: "-fsanitize=address instrumente les accès mémoire pour intercepter les dépassements et fuites."
    }
  },
  {
    id: 12,
    subject: "Pro Dev",
    question: {
      en: "What command in CMake properly links a library to a target executable?",
      fr: "Quelle commande CMake lie proprement une bibliothèque à une cible exécutable ?"
    },
    options: [
      { text: { en: "target_link_libraries(target PRIVATE lib)", fr: "target_link_libraries(cible PRIVATE lib)" }, correct: true },
      { text: { en: "link_libraries(lib)", fr: "link_libraries(lib)" }, correct: false },
      { text: { en: "include_directories(lib)", fr: "include_directories(lib)" }, correct: false }
    ],
    explanation: {
      en: "target_link_libraries scopes dependencies directly to targets without global pollution.",
      fr: "target_link_libraries restreint les dépendances à la cible sans polluer l'espace global."
    }
  },
  {
    id: 13,
    subject: "Pro Dev",
    question: {
      en: "Why is C++20's std::jthread preferred over std::thread?",
      fr: "Pourquoi std::jthread en C++20 est-il préféré à std::thread ?"
    },
    options: [
      { text: { en: "It automatically joins on destruction and supports cooperative cancellation", fr: "Il appelle join() automatiquement à la destruction et gère l'annulation" }, correct: true },
      { text: { en: "It is twice as fast as std::thread", fr: "Il est deux fois plus rapide que std::thread" }, correct: false },
      { text: { en: "It does not use the operating system scheduler", fr: "Il n'utilise pas l'ordonnanceur du système" }, correct: false }
    ],
    explanation: {
      en: "std::jthread joins upon going out of scope, preventing std::terminate() crashes from unjoined threads.",
      fr: "std::jthread appelle join() lors de sa destruction, évitant les crashs std::terminate() d'un thread non joint."
    }
  },
  {
    id: 14,
    subject: "STL",
    question: {
      en: "What is the average lookup time complexity of std::unordered_map?",
      fr: "Quelle est la complexité moyenne de recherche dans std::unordered_map ?"
    },
    options: [
      { text: { en: "O(1)", fr: "O(1)" }, correct: true },
      { text: { en: "O(log N)", fr: "O(log N)" }, correct: false },
      { text: { en: "O(N)", fr: "O(N)" }, correct: false }
    ],
    explanation: {
      en: "std::unordered_map is implemented as a hash table, achieving O(1) average lookup.",
      fr: "std::unordered_map est une table de hachage offrant une recherche moyenne en O(1)."
    }
  },
  {
    id: 15,
    subject: "STL",
    question: {
      en: "What does vector.reserve(N) do compared to vector.resize(N)?",
      fr: "Que fait vector.reserve(N) comparé à vector.resize(N) ?"
    },
    options: [
      { text: { en: "reserve allocates memory capacity without changing size()", fr: "reserve alloue la capacité mémoire sans modifier size()" }, correct: true },
      { text: { en: "reserve inserts N default elements", fr: "reserve insère N éléments par défaut" }, correct: false },
      { text: { en: "Both functions are identical", fr: "Les deux fonctions sont identiques" }, correct: false }
    ],
    explanation: {
      en: "reserve(N) prevents frequent reallocations by preallocating buffer capacity.",
      fr: "reserve(N) évite les réallocations fréquentes en réservant la mémoire tampon."
    }
  },
  {
    id: 16,
    subject: "Basics",
    question: {
      en: "What is the difference between prefix (++i) and postfix (i++) increment?",
      fr: "Quelle est la différence entre préfixe (++i) et postfixe (i++) ?"
    },
    options: [
      { text: { en: "++i increments first and returns the new value; i++ returns original value and increments after", fr: "++i incrémente d'abord et renvoie la nouvelle valeur ; i++ renvoie l'originale et incrémente après" }, correct: true },
      { text: { en: "They are completely identical in every situation", fr: "Ils sont strictement identiques en toute circonstance" }, correct: false },
      { text: { en: "i++ is only valid in for loops", fr: "i++ n'est valide que dans les boucles for" }, correct: false }
    ],
    explanation: {
      en: "Prefix increments in-place without creating a temporary copy of the old value.",
      fr: "Le préfixe incrémente directement sans avoir à copier l'ancienne valeur temporaire."
    }
  },
  {
    id: 17,
    subject: "Basics",
    question: {
      en: "What happens if a switch case statement does not end with 'break;'?",
      fr: "Que se passe-t-il si un bloc case d'un switch ne se termine pas par 'break;' ?"
    },
    options: [
      { text: { en: "Execution falls through to the next case automatically", fr: "L'exécution continue (fallthrough) vers le case suivant automatiquement" }, correct: true },
      { text: { en: "A compilation error occurs", fr: "Une erreur de compilation se produit" }, correct: false },
      { text: { en: "The program crashes", fr: "Le programme plante" }, correct: false }
    ],
    explanation: {
      en: "Without break, control flows through subsequent cases until a break or switch exit is encountered.",
      fr: "Sans break, le flux passe aux cas suivants jusqu'au prochain break ou la fin du switch."
    }
  },
  {
    id: 18,
    subject: "Basics",
    question: {
      en: "How does the ternary conditional operator evaluate: 'condition ? expr1 : expr2'?",
      fr: "Comment l'opérateur ternaire s'évalue-t-il : 'condition ? expr1 : expr2' ?"
    },
    options: [
      { text: { en: "If condition is true, expr1 is returned; otherwise expr2 is returned", fr: "Si condition est vraie, expr1 est retourné ; sinon expr2 est retourné" }, correct: true },
      { text: { en: "Both expressions are executed simultaneously", fr: "Les deux expressions sont exécutées simultanément" }, correct: false },
      { text: { en: "It always returns a boolean", fr: "Il renvoie toujours un booléen" }, correct: false }
    ],
    explanation: {
      en: "The ternary operator is an inline conditional expression evaluating either expr1 or expr2.",
      fr: "L'opérateur ternaire est une expression conditionnelle en ligne qui évalue soit expr1, soit expr2."
    }
  },
  {
    id: 19,
    subject: "Basics",
    question: {
      en: "Why should you use std::getline(std::cin, str) instead of 'std::cin >> str' to read user input?",
      fr: "Pourquoi utiliser std::getline(std::cin, str) plutôt que 'std::cin >> str' pour lire une entrée ?"
    },
    options: [
      { text: { en: "getline reads full lines including spaces; >> stops at the first whitespace", fr: "getline lit la ligne entière avec espaces ; >> s'arrête au premier espace" }, correct: true },
      { text: { en: "cin >> only works for integers", fr: "cin >> ne fonctionne que pour les entiers" }, correct: false },
      { text: { en: "getline is 100x faster", fr: "getline est 100x plus rapide" }, correct: false }
    ],
    explanation: {
      en: "std::cin >> treats whitespace (spaces, tabs) as delimiters, while std::getline reads until newline.",
      fr: "std::cin >> s'arrête aux espaces blancs, tandis que std::getline lit jusqu'au saut de ligne."
    }
  },
  {
    id: 20,
    subject: "Basics",
    question: {
      en: "What is the typical precision difference between float and double in C++?",
      fr: "Quelle est la différence classique de précision entre float et double en C++ ?"
    },
    options: [
      { text: { en: "float is 32-bit (~7 digits), double is 64-bit (~15-17 digits)", fr: "float est 32 bits (~7 chiffres), double est 64 bits (~15-17 chiffres)" }, correct: true },
      { text: { en: "float has infinite precision", fr: "float a une précision infinie" }, correct: false },
      { text: { en: "double can only store positive values", fr: "double ne stocke que des valeurs positives" }, correct: false }
    ],
    explanation: {
      en: "Double provides IEEE 754 double precision (64-bit) compared to float's single precision (32-bit).",
      fr: "Le type double offre la double précision IEEE 754 (64 bits) contre la simple précision (32 bits) pour float."
    }
  },
  {
    id: 21,
    subject: "Basics",
    question: {
      en: "What is the modern C++ syntax for creating a type alias?",
      fr: "Quelle est la syntaxe moderne en C++ pour créer un alias de type ?"
    },
    options: [
      { text: { en: "using NewName = ExistingType;", fr: "using NouveauNom = TypeExistant;" }, correct: true },
      { text: { en: "typedef ExistingType NewName;", fr: "typedef TypeExistant NouveauNom;" }, correct: false },
      { text: { en: "alias NewName as ExistingType;", fr: "alias NouveauNom as TypeExistant;" }, correct: false }
    ],
    explanation: {
      en: "The 'using' syntax is clearer and works with template aliases (unlike typedef).",
      fr: "La syntaxe 'using' est plus lisible et fonctionne avec les templates (contrairement à typedef)."
    }
  },
  {
    id: 22,
    subject: "Basics",
    question: {
      en: "In 'false && func()', does func() ever execute?",
      fr: "Dans 'false && func()', func() s'exécute-t-il ?"
    },
    options: [
      { text: { en: "No, short-circuit evaluation skips the right side", fr: "Non, l'évaluation en court-circuit ignore le côté droit" }, correct: true },
      { text: { en: "Yes, both sides are always evaluated", fr: "Oui, les deux côtés sont toujours évalués" }, correct: false }
    ],
    explanation: {
      en: "In logical AND (&&), if the left operand is false, the result is already known, so the right operand is skipped.",
      fr: "Pour le ET logique (&&), si la gauche est fausse, le résultat est certain, la droite n'est pas évaluée."
    }
  },
  {
    id: 23,
    subject: "Basics",
    question: {
      en: "What function in <cmath> computes sqrt(a^2 + b^2) without intermediate overflow?",
      fr: "Quelle fonction de <cmath> calcule sqrt(a^2 + b^2) sans débordement intermédiaire ?"
    },
    options: [
      { text: { en: "std::hypot(a, b)", fr: "std::hypot(a, b)" }, correct: true },
      { text: { en: "std::sqrt_sum(a, b)", fr: "std::sqrt_sum(a, b)" }, correct: false },
      { text: { en: "std::pythagoras(a, b)", fr: "std::pythagoras(a, b)" }, correct: false }
    ],
    explanation: {
      en: "std::hypot safely calculates the Euclidean distance hypotenuse avoiding overflow or underflow.",
      fr: "std::hypot calcule l'hypoténuse euclidienne en évitant les dépassements de capacité numériques."
    }
  },
  {
    id: 24,
    subject: "Memory",
    question: {
      en: "What happens when a large object is passed by VALUE to a function?",
      fr: "Que se passe-t-il lorsqu'un gros objet est passé par VALEUR à une fonction ?"
    },
    options: [
      { text: { en: "A complete copy of the object is created on the stack (copy constructor runs)", fr: "Une copie intégrale de l'objet est créée sur la pile (constructeur de copie)" }, correct: true },
      { text: { en: "Only a pointer is passed", fr: "Seul un pointeur est passé" }, correct: false },
      { text: { en: "The original object is moved", fr: "L'objet original est déplacé" }, correct: false }
    ],
    explanation: {
      en: "Pass by value always duplicates the object, incurring memory and CPU overhead.",
      fr: "Le passage par valeur duplique toujours l'objet, consommant mémoire et cycles processeur."
    }
  },
  {
    id: 25,
    subject: "Memory",
    question: {
      en: "What happens to a raw C-style array 'int arr[10]' when passed to a function 'void f(int a[])'?",
      fr: "Qu'arrive-t-il à un tableau brut 'int arr[10]' passé à une fonction 'void f(int a[])' ?"
    },
    options: [
      { text: { en: "It decays to a pointer to its first element (int*), losing its size information", fr: "Il déchoit en pointeur vers son premier élément (int*), perdant sa taille" }, correct: true },
      { text: { en: "The full array is copied onto the stack", fr: "Le tableau entier est copié sur la pile" }, correct: false },
      { text: { en: "The compiler rejects it", fr: "Le compilateur refuse la syntaxe" }, correct: false }
    ],
    explanation: {
      en: "Array decay converts the array into a pointer to element 0; sizeof() no longer gives array size.",
      fr: "Le decay de tableau transforme le tableau en simple pointeur (int*) ; sizeof() ne donne plus la taille totale."
    }
  },
  {
    id: 26,
    subject: "Memory",
    question: {
      en: "What constitutes a Memory Leak in C++?",
      fr: "Qu'est-ce qui caractérise une fuite de mémoire (Memory Leak) en C++ ?"
    },
    options: [
      { text: { en: "Heap memory was allocated with new/malloc but never freed, becoming unreachable", fr: "De la mémoire tas allouée avec new/malloc n'a jamais été libérée et devient inaccessible" }, correct: true },
      { text: { en: "Accessing an array past its boundaries", fr: "Accéder à un tableau au-delà de ses limites" }, correct: false },
      { text: { en: "Stack overflow due to infinite recursion", fr: "Dépassement de pile par récursion infinie" }, correct: false }
    ],
    explanation: {
      en: "Unreleased heap memory remains occupied until the OS terminates the process.",
      fr: "La mémoire tas non libérée reste occupée jusqu'à la fermeture du processus par l'OS."
    }
  },
  {
    id: 27,
    subject: "Memory",
    question: {
      en: "If you allocate an array with 'int* p = new int[50];', how MUST you release it?",
      fr: "Si vous allouez un tableau avec 'int* p = new int[50];', comment DEVEZ-VOUS le libérer ?"
    },
    options: [
      { text: { en: "delete[] p;", fr: "delete[] p;" }, correct: true },
      { text: { en: "delete p;", fr: "delete p;" }, correct: false },
      { text: { en: "free(p);", fr: "free(p);" }, correct: false }
    ],
    explanation: {
      en: "Using 'delete' instead of 'delete[]' on an array causes undefined behavior and destructors won't run.",
      fr: "Utiliser 'delete' au lieu de 'delete[]' sur un tableau engendre un comportement indéterminé."
    }
  },
  {
    id: 28,
    subject: "Memory",
    question: {
      en: "How does std::shared_ptr manage the lifetime of its managed resource?",
      fr: "Comment std::shared_ptr gère-t-il la durée de vie de la ressource allouée ?"
    },
    options: [
      { text: { en: "Via a thread-safe atomic reference counter; deletes resource when count reaches 0", fr: "Via un compteur de références atomique ; détruit la ressource quand le compteur tombe à 0" }, correct: true },
      { text: { en: "By polling every 100 milliseconds", fr: "En vérifiant toutes les 100 millisecondes" }, correct: false },
      { text: { en: "Using a global garbage collector", fr: "Grâce à un garbage collector global" }, correct: false }
    ],
    explanation: {
      en: "std::shared_ptr stores a control block with an atomic reference count.",
      fr: "std::shared_ptr dispose d'un bloc de contrôle avec un compteur de références atomique."
    }
  },
  {
    id: 29,
    subject: "Memory",
    question: {
      en: "Why is a circular reference between two std::shared_ptr instances dangerous?",
      fr: "Pourquoi une référence circulaire entre deux std::shared_ptr est-elle dangereuse ?"
    },
    options: [
      { text: { en: "The reference count never drops to 0, permanently leaking both objects", fr: "Le compteur de références ne tombe jamais à 0, causant une fuite mémoire permanente" }, correct: true },
      { text: { en: "It causes an infinite compilation loop", fr: "Cela cause une boucle infinie à la compilation" }, correct: false },
      { text: { en: "It immediately terminates the program", fr: "Cela arrête immédiatement le programme" }, correct: false }
    ],
    explanation: {
      en: "Cyclic ownership prevents either shared_ptr from ever reaching a count of zero. Use weak_ptr to break the cycle.",
      fr: "Les cycles de possession empêchent le compteur d'atteindre zéro. On utilise weak_ptr pour briser le cycle."
    }
  },
  {
    id: 30,
    subject: "Modern C++",
    question: {
      en: "What does 'auto& x = obj;' deduce for x?",
      fr: "Que déduit 'auto& x = obj;' pour x ?"
    },
    options: [
      { text: { en: "A non-const reference to obj", fr: "Une référence non constante vers obj" }, correct: true },
      { text: { en: "A copy of obj", fr: "Une copie de obj" }, correct: false },
      { text: { en: "A pointer to obj", fr: "Un pointeur vers obj" }, correct: false }
    ],
    explanation: {
      en: "Adding & to auto ensures reference semantics instead of creating a copy.",
      fr: "L'ajout de & à auto garantit une sémantique de référence sans effectuer de copie."
    }
  },
  {
    id: 31,
    subject: "Modern C++",
    question: {
      en: "Given 'std::map<int, std::string> m;', how do structured bindings unpack an element?",
      fr: "Soit 'std::map<int, std::string> m;', comment les liaisons structurées déballent-elles un élément ?"
    },
    options: [
      { text: { en: "for (const auto& [id, name] : m)", fr: "for (const auto& [id, name] : m)" }, correct: true },
      { text: { en: "for (auto id, name in m)", fr: "for (auto id, name in m)" }, correct: false },
      { text: { en: "for (unpack(id, name) : m)", fr: "for (unpack(id, name) : m)" }, correct: false }
    ],
    explanation: {
      en: "C++17 structured bindings use bracket notation [first, second] for pair/tuple decomposition.",
      fr: "Les structured bindings C++17 utilisent les crochets [clé, valeur] pour déstructurer paires et tuples."
    }
  },
  {
    id: 32,
    subject: "Modern C++",
    question: {
      en: "What method provides a default fallback if a std::optional has no value?",
      fr: "Quelle méthode fournit une valeur de repli si un std::optional est vide ?"
    },
    options: [
      { text: { en: "opt.value_or(fallback)", fr: "opt.value_or(repli)" }, correct: true },
      { text: { en: "opt.get_default(fallback)", fr: "opt.get_default(repli)" }, correct: false },
      { text: { en: "opt.fallback(value)", fr: "opt.fallback(value)" }, correct: false }
    ],
    explanation: {
      en: "value_or() returns the contained value if present, or the passed fallback value if empty.",
      fr: "value_or() renvoie la valeur contenue si présente, ou la valeur de secours passée en paramètre."
    }
  },
  {
    id: 33,
    subject: "Modern C++",
    question: {
      en: "How does std::variant differ from an old C-style union?",
      fr: "Comment std::variant se distingue-t-il d'une union à la C classique ?"
    },
    options: [
      { text: { en: "std::variant is type-safe and automatically invokes proper destructors", fr: "std::variant est typé, sécurisé et invoque automatiquement les bons destructeurs" }, correct: true },
      { text: { en: "std::variant can only store integers", fr: "std::variant ne peut contenir que des entiers" }, correct: false },
      { text: { en: "std::variant has no size overhead", fr: "std::variant n'a aucun surcoût de mémoire" }, correct: false }
    ],
    explanation: {
      en: "Unlike unions which can cause undefined memory corruption, std::variant tracks active type index.",
      fr: "Contrairement aux unions qui corrompent facilement la mémoire, std::variant mémorise le type actif."
    }
  },
  {
    id: 34,
    subject: "Modern C++",
    question: {
      en: "What does the range-based for loop 'for (const auto& item : vec)' do?",
      fr: "Que fait la boucle for basée sur les plages 'for (const auto& item : vec)' ?"
    },
    options: [
      { text: { en: "Iterates over every element of vec without copying, in read-only mode", fr: "Parcourt chaque élément de vec sans copie, en mode lecture seule" }, correct: true },
      { text: { en: "Duplicates the vector before iterating", fr: "Duplique le vecteur avant de boucler" }, correct: false },
      { text: { en: "Clears vec upon completion", fr: "Vide vec une fois terminée" }, correct: false }
    ],
    explanation: {
      en: "const auto& avoids copying elements and prevents accidental modification during iteration.",
      fr: "const auto& évite toute copie des éléments et empêche leur modification involontaire."
    }
  },
  {
    id: 35,
    subject: "Modern C++",
    question: {
      en: "In C++20, what does 'template<std::integral T>' constrain T to be?",
      fr: "En C++20, à quoi 'template<std::integral T>' contraint-il le type T ?"
    },
    options: [
      { text: { en: "Integer types only (int, long, short, char, etc.)", fr: "Types entiers uniquement (int, long, short, char, etc.)" }, correct: true },
      { text: { en: "Any floating point type", fr: "N'importe quel type à virgule flottante" }, correct: false },
      { text: { en: "Only pointers", fr: "Uniquement des pointeurs" }, correct: false }
    ],
    explanation: {
      en: "std::integral is a standard concept satisfying types where std::is_integral_v<T> is true.",
      fr: "std::integral est un concept standard satisfaisant les types où std::is_integral_v<T> est vrai."
    }
  },
  {
    id: 36,
    subject: "OOP",
    question: {
      en: "If a class manages a raw resource pointer, what is 'The Rule of Zero'?",
      fr: "Si une classe gère des ressources, qu'est-ce que la 'Règle de Zéro' ?"
    },
    back: {
      en: "Use smart pointers and STL containers so you write zero custom destructors or copy/move operations.",
      fr: "Utiliser des smart pointers et conteneurs STL pour n'écrire aucun destructeur ou constructeur manuel."
    },
    options: [
      { text: { en: "Design classes so they need no custom destructors by using smart pointers and STL containers", fr: "Concevoir ses classes sans destructeur manuel en utilisant des smart pointers et conteneurs STL" }, correct: true },
      { text: { en: "Classes should have zero member variables", fr: "Les classes ne doivent avoir aucune variable membre" }, correct: false },
      { text: { en: "Initialize all numeric variables to 0", fr: "Initialiser toutes les variables à 0" }, correct: false }
    ],
    explanation: {
      en: "The Rule of Zero advises relying on modern RAII member types to eliminate manual memory management.",
      fr: "La règle de zéro recommande de s'appuyer sur des membres RAII pour éliminer toute gestion manuelle."
    }
  },
  {
    id: 37,
    subject: "OOP",
    question: {
      en: "Why should single-argument constructors generally be marked 'explicit'?",
      fr: "Pourquoi les constructeurs à un paramètre doivent-ils généralement être 'explicit' ?"
    },
    options: [
      { text: { en: "To prevent accidental implicit conversions from another type", fr: "Pour éviter les conversions de type implicites accidentelles" }, correct: true },
      { text: { en: "To make compilation faster", fr: "Pour accélérer la compilation" }, correct: false },
      { text: { en: "To allow polymorphic inheritance", fr: "Pour autoriser l'héritage polymorphique" }, correct: false }
    ],
    explanation: {
      en: "Without 'explicit', a constructor MyClass(int) allows silent assignment MyClass obj = 5;",
      fr: "Sans 'explicit', un constructeur MyClass(int) autorise silencieusement MyClass obj = 5;"
    }
  },
  {
    id: 38,
    subject: "OOP",
    question: {
      en: "What makes a C++ class an Abstract Base Class (ABC)?",
      fr: "Qu'est-ce qui fait d'une classe C++ une classe de base abstraite ?"
    },
    options: [
      { text: { en: "Having at least one Pure Virtual Function ('virtual void f() = 0;')", fr: "Avoir au moins une fonction virtuelle pure ('virtual void f() = 0;')" }, correct: true },
      { text: { en: "Having all private member variables", fr: "Avoir tous ses membres en privé" }, correct: false },
      { text: { en: "Having no constructor", fr: "Ne posséder aucun constructeur" }, correct: false }
    ],
    explanation: {
      en: "A pure virtual function cannot be called directly; derived classes must implement it before instantiation.",
      fr: "Une fonction virtuelle pure empêche l'instanciation directe tant que la classe dérivée ne l'a pas implémentée."
    }
  },
  {
    id: 39,
    subject: "OOP",
    question: {
      en: "How does C++ solve the diamond multiple inheritance problem?",
      fr: "Comment C++ résout-il le problème du diamant en héritage multiple ?"
    },
    options: [
      { text: { en: "Using Virtual Inheritance ('class B : virtual public A')", fr: "En utilisant l'héritage virtuel ('class B : virtual public A')" }, correct: true },
      { text: { en: "By disallowing multiple inheritance altogether", fr: "En interdisant totalement l'héritage multiple" }, correct: false },
      { text: { en: "By renaming duplicate methods", fr: "En renommant les méthodes en double" }, correct: false }
    ],
    explanation: {
      en: "Virtual inheritance ensures only a single shared instance of the base class subobject exists.",
      fr: "L'héritage virtuel garantit qu'une seule instance partagée de la classe de base existe."
    }
  },
  {
    id: 40,
    subject: "STL",
    question: {
      en: "Why is std::vector typically much faster than std::list even for arbitrary insertions?",
      fr: "Pourquoi std::vector est-il généralement bien plus rapide que std::list même pour des insertions ?"
    },
    options: [
      { text: { en: "Contiguous memory layout maximizes CPU hardware cache hits (cache locality)", fr: "La mémoire contiguë maximise les accès en cache processeur (localité de cache)" }, correct: true },
      { text: { en: "std::vector is compiled as assembly directly", fr: "std::vector est directement compilé en assembleur" }, correct: false },
      { text: { en: "std::list has a 10MB memory overhead", fr: "std::list a un surcoût fixe de 10 Mo" }, correct: false }
    ],
    explanation: {
      en: "Contiguous buffers mean CPU prefetching brings adjacent elements into L1/L2 cache instantly.",
      fr: "Les buffers contigus permettent au processeur de charger les éléments adjacents instantanément en cache L1/L2."
    }
  },
  {
    id: 41,
    subject: "STL",
    question: {
      en: "What is the return type of std::find(vec.begin(), vec.end(), value)?",
      fr: "Quel est le type de retour de std::find(vec.begin(), vec.end(), valeur) ?"
    },
    options: [
      { text: { en: "An iterator pointing to the element, or vec.end() if not found", fr: "Un itérateur pointant sur l'élément, ou vec.end() si non trouvé" }, correct: true },
      { text: { en: "A boolean true/false", fr: "Un booléen vrai/faux" }, correct: false },
      { text: { en: "The integer index of the element", fr: "L'indice entier de l'élément" }, correct: false }
    ],
    explanation: {
      en: "Standard algorithms return iterators; checking 'it != vec.end()' confirms if the element was found.",
      fr: "Les algorithmes standards renvoient des itérateurs ; tester 'it != vec.end()' confirme la présence."
    }
  },
  {
    id: 42,
    subject: "STL",
    question: {
      en: "What predicate algorithm counts elements satisfying a custom lambda condition?",
      fr: "Quel algorithme compte les éléments vérifiant une condition lambda ?"
    },
    options: [
      { text: { en: "std::count_if", fr: "std::count_if" }, correct: true },
      { text: { en: "std::filter_count", fr: "std::filter_count" }, correct: false },
      { text: { en: "std::sum_where", fr: "std::sum_where" }, correct: false }
    ],
    explanation: {
      en: "std::count_if(begin, end, unaryPredicate) counts elements where predicate returns true.",
      fr: "std::count_if(begin, end, prédicat) dénombre les éléments pour lesquels le prédicat renvoie vrai."
    }
  },
  {
    id: 43,
    subject: "Pro Dev",
    question: {
      en: "What are Microsoft vcpkg and Conan in the modern C++ ecosystem?",
      fr: "Que sont Microsoft vcpkg et Conan dans l'écosystème C++ moderne ?"
    },
    options: [
      { text: { en: "Cross-platform package managers for installing and integrating C++ libraries", fr: "Des gestionnaires de paquets multiplateformes pour installer des bibliothèques C++" }, correct: true },
      { text: { en: "Alternative C++ compilers", fr: "Des compilateurs C++ alternatifs" }, correct: false },
      { text: { en: "IDE text editors", fr: "Des éditeurs de texte" }, correct: false }
    ],
    explanation: {
      en: "vcpkg and Conan automate downloading, building, and linking third-party C++ libraries with CMake.",
      fr: "vcpkg et Conan automatisent le téléchargement, la compilation et l'intégration des dépendances C++ avec CMake."
    }
  },
  {
    id: 44,
    subject: "Pro Dev",
    question: {
      en: "What do the flags '-Wall -Wextra -Wpedantic' do when compiling with GCC/Clang?",
      fr: "Que font les options '-Wall -Wextra -Wpedantic' lors de la compilation avec GCC/Clang ?"
    },
    options: [
      { text: { en: "Enable strict compiler diagnostic warnings to catch dangerous code bugs early", fr: "Activent les avertissements stricts du compilateur pour détecter les bugs au plus tôt" }, correct: true },
      { text: { en: "Disable all warnings", fr: "Désactivent tous les avertissements" }, correct: false },
      { text: { en: "Produce a WebAssembly bundle", fr: "Produisent un fichier WebAssembly" }, correct: false }
    ],
    explanation: {
      en: "Enabling comprehensive warnings is the first line of defense in professional C++ development.",
      fr: "Activer un niveau d'avertissement maximal est la règle d'or en développement C++ professionnel."
    }
  },
  {
    id: 45,
    subject: "Pro Dev",
    question: {
      en: "When should you use std::atomic<T> instead of a std::mutex?",
      fr: "Quand faut-il utiliser std::atomic<T> plutôt qu'un std::mutex ?"
    },
    options: [
      { text: { en: "For simple fundamental types (ints, flags, pointers) requiring lock-free atomic operations", fr: "Pour des types simples (entiers, booléens, pointeurs) nécessitant des opérations atomiques sans verrou" }, correct: true },
      { text: { en: "For protecting complex multi-variable transactions", fr: "Pour protéger des transactions complexes sur plusieurs variables" }, correct: false },
      { text: { en: "When memory usage does not matter", fr: "Quand la consommation mémoire n'a pas d'importance" }, correct: false }
    ],
    explanation: {
      en: "std::atomic provides hardware-level lock-free instructions without the overhead of thread context switches.",
      fr: "std::atomic exploite les instructions matérielles sans verrou (lock-free) évitant les changements de contexte."
    }
  },
  {
    id: 46,
    subject: "Concurrency",
    question: {
      en: "What critical problem does std::jthread (C++20) resolve compared to std::thread?",
      fr: "Quel problème critique std::jthread (C++20) résout-il par rapport à std::thread ?"
    },
    options: [
      { text: { en: "It automatically joins on destruction instead of calling std::terminate()", fr: "Il s'auto-joint à sa destruction au lieu d'appeler std::terminate()" }, correct: true },
      { text: { en: "It eliminates all CPU thread context switches", fr: "Il élimine tout changement de contexte processeur" }, correct: false },
      { text: { en: "It makes all shared variables thread-safe without locks", fr: "Il rend toutes les variables thread-safe sans verrous" }, correct: false },
      { text: { en: "It allows threads to run without an operating system", fr: "Il permet aux threads de tourner sans système d'exploitation" }, correct: false }
    ],
    explanation: {
      en: "std::thread crashes the entire process via std::terminate() if destroyed while joinable; std::jthread joins automatically.",
      fr: "std::thread crashe le processus avec std::terminate() s'il est détruit sans join() ; std::jthread s'auto-joint proprement."
    }
  },
  {
    id: 47,
    subject: "Concurrency",
    question: {
      en: "How does std::scoped_lock (C++17) prevent deadlocks when locking multiple mutexes?",
      fr: "Comment std::scoped_lock (C++17) prévient-il les interblocages lors du verrouillage de plusieurs mutex ?"
    },
    options: [
      { text: { en: "It uses a deadlock-avoidance algorithm to lock all mutexes in a single atomic-like step", fr: "Il utilise un algorithme anti-deadlock pour verrouiller tous les mutex sans ordre conflictuel" }, correct: true },
      { text: { en: "It converts all mutexes into spinlocks", fr: "Il convertit tous les mutex en spinlocks" }, correct: false },
      { text: { en: "It runs each thread on a separate CPU core", fr: "Il force chaque thread sur un cœur CPU différent" }, correct: false },
      { text: { en: "It disables hardware interrupts", fr: "Il désactive les interruptions matérielles" }, correct: false }
    ],
    explanation: {
      en: "std::scoped_lock acquires all passed mutexes simultaneously without deadlock hazard, replacing std::lock.",
      fr: "std::scoped_lock acquiert tous les mutex fournis simultanément avec un algorithme évitant les interblocages."
    }
  },
  {
    id: 48,
    subject: "Concurrency",
    question: {
      en: "Why is a predicate loop (e.g. cv.wait(lock, []{ return ready; });) mandatory with std::condition_variable?",
      fr: "Pourquoi un prédicat en boucle (ex. cv.wait(lock, []{ return ready; });) est-il obligatoire avec std::condition_variable ?"
    },
    options: [
      { text: { en: "To protect against spurious wakeups where the OS unblocks a thread without a signal", fr: "Pour se prémunir des réveils spontanés (spurious wakeups) où l'OS réveille un thread sans signal" }, correct: true },
      { text: { en: "To convert condition variables into semaphores", fr: "Pour convertir les variables de condition en sémaphores" }, correct: false },
      { text: { en: "To avoid creating mutex locks", fr: "Pour éviter de créer des verrous mutex" }, correct: false },
      { text: { en: "To speed up floating point arithmetic", fr: "Pour accélérer les calculs à virgule flottante" }, correct: false }
    ],
    explanation: {
      en: "Operating systems can wake sleeping threads spuriously; the predicate ensures the condition actually holds before continuing.",
      fr: "L'OS peut réveiller un thread de façon intempestive ; le prédicat garantit que la condition voulue est réellement vérifiée."
    }
  },
  {
    id: 49,
    subject: "Concurrency",
    question: {
      en: "What happens if an asynchronous task executed via std::async throws an unhandled exception?",
      fr: "Que se passe-t-il si une tâche lancée avec std::async lève une exception non interceptée ?"
    },
    options: [
      { text: { en: "The exception is captured and re-thrown on the calling thread when future.get() is called", fr: "L'exception est capturée et relancée sur le thread appelant lors de l'appel à future.get()" }, correct: true },
      { text: { en: "The entire application terminates immediately with SIGABRT", fr: "L'application plante immédiatement avec SIGABRT" }, correct: false },
      { text: { en: "The exception is silently ignored and returns zero", fr: "L'exception est silencieusement ignorée et renvoie zéro" }, correct: false },
      { text: { en: "The background thread restarts from main()", fr: "Le thread d'arrière-plan redémarre depuis main()" }, correct: false }
    ],
    explanation: {
      en: "std::future acts as an exception transport channel, faithfully re-throwing exceptions across thread boundaries upon .get().",
      fr: "std::future transporte les exceptions entre threads et les relance fidèlement lors de l'appel à .get()."
    }
  },
  {
    id: 50,
    subject: "Concurrency",
    question: {
      en: "What is False Sharing in multithreaded systems and how do you prevent it?",
      fr: "Qu'est-ce que le False Sharing en multithreading et comment l'éliminer ?"
    },
    options: [
      { text: { en: "Different threads modifying variables on the same 64-byte cache line; prevent it with alignas(64)", fr: "Des threads modifiant des variables distinctes sur la même ligne de cache de 64 octets ; évité avec alignas(64)" }, correct: true },
      { text: { en: "Multiple threads sharing a network socket; prevent it with TCP", fr: "Des threads partageant une socket réseau ; évité avec TCP" }, correct: false },
      { text: { en: "A race condition on global variables; prevent it with volatile", fr: "Une condition de course sur variables globales ; évitée avec volatile" }, correct: false },
      { text: { en: "Using new and delete on the same pointer; prevent it with smart pointers", fr: "Utiliser new et delete sur le même pointeur ; évité avec des pointeurs intelligents" }, correct: false }
    ],
    explanation: {
      en: "When variables share a 64-byte CPU cache line, updates by one core invalidate other cores' caches. Aligning to 64 bytes prevents this.",
      fr: "Si des variables partagent la même ligne de cache de 64 octets, une mise à jour invalide les caches des autres cœurs. alignas(64) isole chaque variable."
    }
  },
  {
    id: 51,
    subject: "Concurrency",
    question: {
      en: "What is the primary operational difference between std::latch and std::barrier (C++20)?",
      fr: "Quelle est la principale différence opérationnelle entre std::latch et std::barrier (C++20) ?"
    },
    options: [
      { text: { en: "std::latch is single-use, whereas std::barrier can be reused across repeated synchronization phases", fr: "std::latch est à usage unique, tandis que std::barrier est réutilisable à travers des phases répétées" }, correct: true },
      { text: { en: "std::latch runs on GPU while std::barrier runs on CPU", fr: "std::latch tourne sur GPU tandis que std::barrier tourne sur CPU" }, correct: false },
      { text: { en: "std::barrier requires mutex locks but std::latch does not", fr: "std::barrier requiert des verrous mutex mais pas std::latch" }, correct: false },
      { text: { en: "std::latch is deprecated in modern C++", fr: "std::latch est obsolète en C++ moderne" }, correct: false }
    ],
    explanation: {
      en: "std::latch countdowns once and remains open; std::barrier resets its counter for subsequent phases.",
      fr: "std::latch effectue un compte à rebours unique puis reste ouvert ; std::barrier se réinitialise pour des phases successives."
    }
  },
  {
    id: 52,
    subject: "Architecture",
    question: {
      en: "What major advantage do C++20 Concepts provide over traditional SFINAE (std::enable_if)?",
      fr: "Quel avantage majeur les Concepts C++20 apportent-ils par rapport à SFINAE (std::enable_if) ?"
    },
    options: [
      { text: { en: "Clean, human-readable compiler diagnostics and direct signature constraints (e.g. template<Numeric T>)", fr: "Des diagnostics d'erreur clairs et lisibles et des contraintes directes (ex. template<Numeric T>)" }, correct: true },
      { text: { en: "Automatic runtime garbage collection", fr: "Un ramasse-miettes automatique à l'exécution" }, correct: false },
      { text: { en: "Compiles without an actual C++ compiler", fr: "Compile sans compilateur C++" }, correct: false },
      { text: { en: "Converts all virtual functions into static variables", fr: "Convertit toutes les fonctions virtuelles en variables statiques" }, correct: false }
    ],
    explanation: {
      en: "Concepts express requirements directly in template signatures and output clear, readable error messages instead of walls of cryptic template errors.",
      fr: "Les concepts expriment les contraintes directement et génèrent des erreurs courtes et compréhensibles au lieu d'interminables pavés."
    }
  },
  {
    id: 53,
    subject: "Architecture",
    question: {
      en: "Why do C++20 Ranges pipelines (std::views) have zero heap allocation overhead?",
      fr: "Pourquoi les pipelines de Ranges C++20 (std::views) n'allouent-ils aucune mémoire sur le tas ?"
    },
    options: [
      { text: { en: "They are non-owning, lazy wrappers that transform elements on the fly during iteration", fr: "Ce sont des vues non-propriétaires et paresseuses qui transforment les éléments à la volée pendant l'itération" }, correct: true },
      { text: { en: "They compress data into 32-bit registers", fr: "Ils compressent les données dans des registres 32 bits" }, correct: false },
      { text: { en: "They force the compiler to allocate everything on the stack", fr: "Ils forcent le compilateur à tout allouer sur la pile" }, correct: false },
      { text: { en: "They can only be used with arrays of size 10 or less", fr: "Ils ne fonctionnent qu'avec des tableaux de taille 10 ou moins" }, correct: false }
    ],
    explanation: {
      en: "std::views wrap iterators without storing elements, evaluating transformations strictly on demand.",
      fr: "std::views enveloppe des itérateurs sans stocker de copie, évaluant les transformations à la volée."
    }
  },
  {
    id: 54,
    subject: "Architecture",
    question: {
      en: "Which keyword is used in a C++20 coroutine to suspend execution and yield an intermediate value to the caller?",
      fr: "Quel mot-clé est utilisé dans une coroutine C++20 pour suspendre l'exécution et produire une valeur intermédiaire ?"
    },
    options: [
      { text: { en: "co_yield", fr: "co_yield" }, correct: true },
      { text: { en: "co_await", fr: "co_await" }, correct: false },
      { text: { en: "co_return", fr: "co_return" }, correct: false },
      { text: { en: "yield_break", fr: "yield_break" }, correct: false }
    ],
    explanation: {
      en: "co_yield yields a value and pauses the coroutine frame; co_await waits for completion; co_return finishes.",
      fr: "co_yield produit une valeur et suspend la coroutine ; co_await attend une tâche ; co_return termine la coroutine."
    }
  },
  {
    id: 55,
    subject: "Architecture",
    question: {
      en: "Why is Data-Oriented Design (Structure of Arrays - SoA) preferred over Array of Structures (AoS) in game engines and simulation loops?",
      fr: "Pourquoi la conception orientée données (Structure of Arrays - SoA) est-elle préférée en moteur de jeu par rapport à Array of Structures (AoS) ?"
    },
    options: [
      { text: { en: "It packs homogeneous fields contiguously, maximizing CPU cache line hit rate and SIMD auto-vectorization", fr: "Elle regroupe les champs contigus en mémoire, maximisant le taux de succès du cache CPU et la vectorisation SIMD" }, correct: true },
      { text: { en: "It eliminates all memory deallocation", fr: "Elle élimine toute libération mémoire" }, correct: false },
      { text: { en: "It prevents compilation errors in templates", fr: "Elle empêche les erreurs de compilation sur les templates" }, correct: false },
      { text: { en: "It automatically creates multiple threads", fr: "Elle crée automatiquement plusieurs threads" }, correct: false }
    ],
    explanation: {
      en: "SoA allows CPUs to load only the memory needed for a loop into 64-byte cache lines, enabling hardware vector registers (AVX/SSE).",
      fr: "SoA charge uniquement les données nécessaires dans les lignes de cache de 64 octets, permettant l'auto-vectorisation SIMD."
    }
  },
  {
    id: 56,
    subject: "Architecture",
    question: {
      en: "What is the primary benefit of CRTP (Curiously Recurring Template Pattern) over virtual functions?",
      fr: "Quel est le bénéfice principal du CRTP par rapport aux fonctions virtuelles ?"
    },
    options: [
      { text: { en: "Static compile-time dispatch with zero vtable pointer overhead, enabling compiler inlining", fr: "Polymorphisme statique à la compilation sans surcoût de table virtuelle (vtable), permettant l'inlining" }, correct: true },
      { text: { en: "Allows multiple inheritance from non-template classes", fr: "Permet l'héritage multiple de classes non templates" }, correct: false },
      { text: { en: "Allocates all derived classes in stack memory only", fr: "Alloue toutes les classes dérivées uniquement sur la pile" }, correct: false },
      { text: { en: "Automatically creates thread-safe destructors", fr: "Crée automatiquement des destructeurs thread-safe" }, correct: false }
    ],
    explanation: {
      en: "CRTP resolves polymorphic calls at compile-time via static_cast<Derived*>(this), removing vpointer indirections.",
      fr: "Le CRTP résout les appels polymorphiques dès la compilation via static_cast, éliminant les pointeurs de vtable."
    }
  },
  {
    id: 57,
    subject: "Architecture",
    question: {
      en: "What standard modern C++ utility provides compile-time checked pattern matching across a std::variant?",
      fr: "Quel utilitaire C++ standard moderne offre un filtrage par motif (pattern matching) vérifié à la compilation sur std::variant ?"
    },
    options: [
      { text: { en: "std::visit with overloaded lambdas", fr: "std::visit avec des lambdas surchargées" }, correct: true },
      { text: { en: "dynamic_cast in a switch statement", fr: "dynamic_cast dans une instruction switch" }, correct: false },
      { text: { en: "reinterpret_cast on unions", fr: "reinterpret_cast sur des unions" }, correct: false },
      { text: { en: "std::any_cast with try-catch blocks", fr: "std::any_cast avec des blocs try-catch" }, correct: false }
    ],
    explanation: {
      en: "std::visit ensures at compile-time that all possible types held by a std::variant have a matching handler.",
      fr: "std::visit garantit à la compilation que chaque type possible contenu dans un std::variant possède un gestionnaire valide."
    }
  }
];

// Helper: Fisher-Yates array shuffler
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Per-Lesson Quick Check Quizzes for ALL 35 Lessons
const LESSON_QUIZZES = {
  1: {
    question: {
      en: "What stream object is used to output text to the console in C++?",
      fr: "Quel objet de flux est utilisé pour afficher du texte dans la console en C++ ?"
    },
    options: [
      { text: { en: "std::cout", fr: "std::cout" }, correct: true },
      { text: { en: "std::cin", fr: "std::cin" }, correct: false },
      { text: { en: "console.log()", fr: "console.log()" }, correct: false }
    ],
    explanation: {
      en: "std::cout (character output) defined in <iostream> sends data to the standard console.",
      fr: "std::cout (character output) défini dans <iostream> envoie les données à la console standard."
    }
  },
  2: {
    question: {
      en: "Which C++ data type should you use to store a single ASCII character?",
      fr: "Quel type de données C++ doit-on utiliser pour stocker un unique caractère ASCII ?"
    },
    options: [
      { text: { en: "char", fr: "char" }, correct: true },
      { text: { en: "std::string", fr: "std::string" }, correct: false },
      { text: { en: "byte", fr: "byte" }, correct: false }
    ],
    explanation: {
      en: "char uses single quotes like 'A' and represents an 8-bit character in memory.",
      fr: "char utilise des guillemets simples comme 'A' et occupe 1 octet en mémoire."
    }
  },
  3: {
    question: {
      en: "What happens if you try to reassign a variable declared with 'const'?",
      fr: "Que se passe-t-il si vous tentez de réassigner une variable déclarée avec 'const' ?"
    },
    options: [
      { text: { en: "Compile-time error", fr: "Erreur de compilation" }, correct: true },
      { text: { en: "Runtime warning", fr: "Avertissement à l'exécution" }, correct: false },
      { text: { en: "The value silently changes", fr: "La valeur change silencieusement" }, correct: false }
    ],
    explanation: {
      en: "The compiler rejects assignments to read-only const variables at compile time.",
      fr: "Le compilateur rejette toute assignation à une variable const en lecture seule dès la compilation."
    }
  },
  4: {
    question: {
      en: "What operator is used to access entities inside a namespace (e.g., first::x)?",
      fr: "Quel opérateur permet d'accéder aux entités dans un espace de noms (ex. first::x) ?"
    },
    options: [
      { text: { en: ":: (Scope Resolution Operator)", fr: ":: (Opérateur de résolution de portée)" }, correct: true },
      { text: { en: ". (Dot operator)", fr: ". (Opérateur point)" }, correct: false },
      { text: { en: "-> (Arrow operator)", fr: "-> (Opérateur flèche)" }, correct: false }
    ],
    explanation: {
      en: "The scope resolution operator (::) designates which namespace an identifier belongs to.",
      fr: "L'opérateur de résolution de portée (::) indique à quel espace de noms appartient un identifiant."
    }
  },
  5: {
    question: {
      en: "Which syntax is the modern C++ standard recommendation for creating a type alias?",
      fr: "Quelle syntaxe est recommandée par le standard C++ moderne pour créer un alias de type ?"
    },
    options: [
      { text: { en: "using text_t = std::string;", fr: "using text_t = std::string;" }, correct: true },
      { text: { en: "typedef std::string text_t;", fr: "typedef std::string text_t;" }, correct: false },
      { text: { en: "#define text_t std::string", fr: "#define text_t std::string" }, correct: false }
    ],
    explanation: {
      en: "The 'using' alias syntax is preferred in modern C++ because it supports template aliasing cleanly.",
      fr: "La syntaxe 'using' est préférée en C++ moderne car elle supporte directement les templates."
    }
  },
  6: {
    question: {
      en: "What does the modulus operator '%' calculate in C++?",
      fr: "Que calcule l'opérateur modulo '%' en C++ ?"
    },
    options: [
      { text: { en: "The integer remainder of a division", fr: "Le reste de la division entière" }, correct: true },
      { text: { en: "A percentage value (e.g. 50%)", fr: "Un pourcentage (ex. 50%)" }, correct: false },
      { text: { en: "The power exponent", fr: "Une élévation à la puissance" }, correct: false }
    ],
    explanation: {
      en: "The modulus operator (%) returns the remainder when an integer is divided by another integer.",
      fr: "L'opérateur modulo (%) renvoie le reste d'une division entière entre deux entiers."
    }
  },
  7: {
    question: {
      en: "Why is 'static_cast<double>(val)' preferred over '(double)val' in C++?",
      fr: "Pourquoi 'static_cast<double>(val)' est-il préféré à '(double)val' en C++ ?"
    },
    options: [
      { text: { en: "It provides compile-time type checking and makes intent explicit", fr: "Il offre une vérification à la compilation et explicite l'intention" }, correct: true },
      { text: { en: "It is faster at runtime", fr: "Il s'exécute plus vite" }, correct: false },
      { text: { en: "C-style casts are completely disabled in C++", fr: "Les casts C sont interdits par le compilateur" }, correct: false }
    ],
    explanation: {
      en: "Named C++ casts prevent accidental unsafe conversions and are easily searchable in codebases.",
      fr: "Les casts nommés évitent les conversions accidentelles dangereuses et se recherchent facilement dans le code."
    }
  },
  8: {
    question: {
      en: "What function should you use to read a string containing spaces from user input?",
      fr: "Quelle fonction doit-on utiliser pour lire une chaîne contenant des espaces depuis l'utilisateur ?"
    },
    options: [
      { text: { en: "std::getline(std::cin, str)", fr: "std::getline(std::cin, str)" }, correct: true },
      { text: { en: "std::cin >> str", fr: "std::cin >> str" }, correct: false },
      { text: { en: "std::cin.read(str)", fr: "std::cin.read(str)" }, correct: false }
    ],
    explanation: {
      en: "std::getline reads until the newline character, preserving spaces within the line.",
      fr: "std::getline lit jusqu'au retour à la ligne, conservant ainsi tous les espaces."
    }
  },
  9: {
    question: {
      en: "Which standard header must be included to use functions like pow(), sqrt(), and round()?",
      fr: "Quel en-tête standard doit être inclus pour utiliser pow(), sqrt() et round() ?"
    },
    options: [
      { text: { en: "<cmath>", fr: "<cmath>" }, correct: true },
      { text: { en: "<math.h>", fr: "<math.h>" }, correct: false },
      { text: { en: "<algorithm>", fr: "<algorithm>" }, correct: false }
    ],
    explanation: {
      en: "<cmath> provides standard mathematical functions in the std:: namespace.",
      fr: "<cmath> fournit les fonctions mathématiques standard dans l'espace de noms std::."
    }
  },
  10: {
    question: {
      en: "What mathematical theorem calculates the hypotenuse: c = sqrt(a^2 + b^2)?",
      fr: "Quel théorème mathématique calcule l'hypoténuse : c = sqrt(a^2 + b^2) ?"
    },
    options: [
      { text: { en: "Pythagorean Theorem", fr: "Théorème de Pythagore" }, correct: true },
      { text: { en: "Fermat's Theorem", fr: "Théorème de Fermat" }, correct: false },
      { text: { en: "Euler's Identity", fr: "Identité d'Euler" }, correct: false }
    ],
    explanation: {
      en: "In right triangles, the square of the hypotenuse equals the sum of the squares of the other two sides.",
      fr: "Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés."
    }
  },
  11: {
    question: {
      en: "What does an if condition evaluate to in C++?",
      fr: "À quel type d'expression s'évalue une condition dans un if en C++ ?"
    },
    options: [
      { text: { en: "A boolean expression (true or false)", fr: "Une expression booléenne (vrai ou faux)" }, correct: true },
      { text: { en: "A string description", fr: "Une chaîne de caractères descriptive" }, correct: false },
      { text: { en: "A void return", fr: "Un retour void" }, correct: false }
    ],
    explanation: {
      en: "C++ conditional statements evaluate expressions to boolean true or false (non-zero is true, 0 is false).",
      fr: "Les conditions s'évaluent en booléen vrai/faux (toute valeur non nulle est vraie, 0 est faux)."
    }
  },
  12: {
    question: {
      en: "Which keyword executes when none of the 'case' statements match in a switch?",
      fr: "Quel mot-clé s'exécute si aucun des 'case' d'un switch ne correspond ?"
    },
    options: [
      { text: { en: "default:", fr: "default:" }, correct: true },
      { text: { en: "else:", fr: "else:" }, correct: false },
      { text: { en: "fallback:", fr: "fallback:" }, correct: false }
    ],
    explanation: {
      en: "default: handles all unmatched values in a switch statement.",
      fr: "default: intercepte toutes les valeurs non appariées dans un switch."
    }
  },
  13: {
    question: {
      en: "What operator in C++ performs division?",
      fr: "Quel opérateur en C++ effectue une division ?"
    },
    options: [
      { text: { en: "/", fr: "/" }, correct: true },
      { text: { en: "\\", fr: "\\" }, correct: false },
      { text: { en: "div", fr: "div" }, correct: false }
    ],
    explanation: {
      en: "The forward slash (/) is the arithmetic division operator.",
      fr: "La barre oblique (/) est l'opérateur de division arithmétique."
    }
  },
  14: {
    question: {
      en: "What is the return value of '(5 > 3) ? 100 : 200'?",
      fr: "Quelle est la valeur de retour de '(5 > 3) ? 100 : 200' ?"
    },
    options: [
      { text: { en: "100", fr: "100" }, correct: true },
      { text: { en: "200", fr: "200" }, correct: false },
      { text: { en: "true", fr: "true" }, correct: false }
    ],
    explanation: {
      en: "Since 5 > 3 is true, the first operand (100) is returned.",
      fr: "Puisque 5 > 3 est vrai, le premier opérande (100) est renvoyé."
    }
  },
  15: {
    question: {
      en: "What operator represents logical OR in C++?",
      fr: "Quel opérateur représente le OU logique en C++ ?"
    },
    options: [
      { text: { en: "||", fr: "||" }, correct: true },
      { text: { en: "&&", fr: "&&" }, correct: false },
      { text: { en: "!", fr: "!" }, correct: false }
    ],
    explanation: {
      en: "The double pipe (||) is the logical OR operator in C++.",
      fr: "Le double trait vertical (||) représente l'opérateur OU logique en C++."
    }
  },
  16: {
    question: {
      en: "What is the mathematical formula to convert Celsius to Fahrenheit?",
      fr: "Quelle est la formule mathématique pour convertir les Celsius en Fahrenheit ?"
    },
    options: [
      { text: { en: "(celsius * 1.8) + 32", fr: "(celsius * 1.8) + 32" }, correct: true },
      { text: { en: "celsius + 273.15", fr: "celsius + 273.15" }, correct: false },
      { text: { en: "celsius * 0.5", fr: "celsius * 0.5" }, correct: false }
    ],
    explanation: {
      en: "Multiply Celsius by 1.8 (9/5) and add 32 to get Fahrenheit.",
      fr: "On multiplie les Celsius par 1.8 (ou 9/5) puis on ajoute 32."
    }
  },
  17: {
    question: {
      en: "Which method checks if a std::string contains no characters?",
      fr: "Quelle méthode vérifie si un std::string ne contient aucun caractère ?"
    },
    options: [
      { text: { en: "str.empty()", fr: "str.empty()" }, correct: true },
      { text: { en: "str.isNull()", fr: "str.isNull()" }, correct: false },
      { text: { en: "str.clear()", fr: "str.clear()" }, correct: false }
    ],
    explanation: {
      en: "str.empty() returns true if str.length() == 0.",
      fr: "str.empty() renvoie vrai si la taille de la chaîne est égale à 0."
    }
  },
  43: {
    question: {
      en: "What format is typically used when printing memory addresses?",
      fr: "Quel format est classiquement utilisé pour afficher les adresses mémoire ?"
    },
    options: [
      { text: { en: "Hexadecimal (e.g. 0x7ffd...)", fr: "Hexadécimal (ex. 0x7ffd...)" }, correct: true },
      { text: { en: "Binary (e.g. 0b1011)", fr: "Binaire (ex. 0b1011)" }, correct: false },
      { text: { en: "Roman numerals", fr: "Chiffres romains" }, correct: false }
    ],
    explanation: {
      en: "RAM addresses are natively represented in hexadecimal base-16 notation.",
      fr: "Les adresses RAM sont représentées en notation hexadécimale (base 16)."
    }
  },
  44: {
    question: {
      en: "If a function modifies a parameter passed by reference (&), does the original change?",
      fr: "Si une fonction modifie un paramètre passé par référence (&), l'original change-t-il ?"
    },
    options: [
      { text: { en: "Yes, references modify the caller's actual variable", fr: "Oui, les références modifient directement la variable originale" }, correct: true },
      { text: { en: "No, a local copy is always created", fr: "Non, une copie locale est toujours créée" }, correct: false }
    ],
    explanation: {
      en: "A reference is an alias to the original variable, so modifications affect the original.",
      fr: "Une référence est un alias vers la variable d'origine, toute modification l'affecte donc."
    }
  },
  47: {
    question: {
      en: "Given 'int* ptr = &val;', what does '*ptr' evaluate to?",
      fr: "Soit 'int* ptr = &val;', à quoi correspond '*ptr' ?"
    },
    options: [
      { text: { en: "The actual value stored inside val", fr: "La valeur réelle stockée dans val" }, correct: true },
      { text: { en: "The memory address of val", fr: "L'adresse mémoire de val" }, correct: false },
      { text: { en: "A null pointer", fr: "Un pointeur nul" }, correct: false }
    ],
    explanation: {
      en: "The dereference operator (*) retrieves the value stored at the memory address pointed to.",
      fr: "L'opérateur de déréférencement (*) lit la valeur située à l'adresse pointée."
    }
  },
  48: {
    question: {
      en: "What should you check before dereferencing any raw pointer?",
      fr: "Que devez-vous vérifier avant de déréférencer un pointeur brut ?"
    },
    options: [
      { text: { en: "if (ptr != nullptr)", fr: "if (ptr != nullptr)" }, correct: true },
      { text: { en: "if (ptr > 0)", fr: "if (ptr > 0)" }, correct: false },
      { text: { en: "if (sizeof(ptr) > 0)", fr: "if (sizeof(ptr) > 0)" }, correct: false }
    ],
    explanation: {
      en: "Always ensure a pointer is non-null to prevent segmentation fault crashes.",
      fr: "Assurez-vous toujours que le pointeur n'est pas nul pour éviter un crash par défaut de segmentation."
    }
  },
  50: {
    question: {
      en: "What keyword in C++ releases memory allocated on the heap via 'new'?",
      fr: "Quel mot-clé C++ libère la mémoire allouée sur le tas (heap) avec 'new' ?"
    },
    options: [
      { text: { en: "delete", fr: "delete" }, correct: true },
      { text: { en: "free", fr: "free" }, correct: false },
      { text: { en: "remove", fr: "remove" }, correct: false }
    ],
    explanation: {
      en: "In C++, memory allocated with 'new' must be released with 'delete' (or 'delete[]' for arrays).",
      fr: "En C++, la mémoire allouée avec 'new' doit être libérée avec 'delete' (ou 'delete[]' pour les tableaux)."
    }
  },
  61: {
    question: {
      en: "Does std::string_view allocate dynamic memory when constructed from a string literal?",
      fr: "std::string_view alloue-t-il de la mémoire dynamique lorsqu'il est créé depuis un littéral ?"
    },
    options: [
      { text: { en: "No, it is a non-owning pointer and length view (zero allocation)", fr: "Non, c'est une vue non-propriétaire (zéro allocation)" }, correct: true },
      { text: { en: "Yes, it creates a heap copy of the string", fr: "Oui, il crée une copie sur le tas" }, correct: false }
    ],
    explanation: {
      en: "std::string_view is designed specifically for zero-allocation string passing.",
      fr: "std::string_view a été conçu spécifiquement pour éviter toute allocation mémoire."
    }
  },
  62: {
    question: {
      en: "Can a std::unique_ptr be copied to another std::unique_ptr?",
      fr: "Un std::unique_ptr peut-il être copié vers un autre std::unique_ptr ?"
    },
    options: [
      { text: { en: "No, its copy constructor is deleted; it can only be moved", fr: "Non, son constructeur de copie est supprimé ; il ne peut qu'être déplacé" }, correct: true },
      { text: { en: "Yes, copying creates a shared reference", fr: "Oui, la copie crée une référence partagée" }, correct: false }
    ],
    explanation: {
      en: "std::unique_ptr guarantees unique exclusive ownership, so copying is strictly disallowed.",
      fr: "std::unique_ptr garantit la propriété exclusive, la copie est donc rigoureusement interdite."
    }
  },
  63: {
    question: {
      en: "How do you access the value inside std::optional<T> safely with a fallback?",
      fr: "Comment accède-t-on de façon sûre à la valeur d'un std::optional<T> avec repli ?"
    },
    options: [
      { text: { en: "opt.value_or(defaultValue)", fr: "opt.value_or(valeurParDefaut)" }, correct: true },
      { text: { en: "*opt", fr: "*opt" }, correct: false },
      { text: { en: "opt.get()", fr: "opt.get()" }, correct: false }
    ],
    explanation: {
      en: "value_or() guarantees safety by returning the fallback if empty without throwing an exception.",
      fr: "value_or() garantit la sécurité en renvoyant la valeur de repli sans lever d'exception si l'optionnel est vide."
    }
  },
  64: {
    question: {
      en: "What syntax specifies a capture-all-by-reference in a C++ lambda?",
      fr: "Quelle syntaxe spécifie une capture par référence de toutes les variables dans une lambda ?"
    },
    options: [
      { text: { en: "[&]", fr: "[&]" }, correct: true },
      { text: { en: "[=]", fr: "[=]" }, correct: false },
      { text: { en: "[]", fr: "[]" }, correct: false }
    ],
    explanation: {
      en: "[&] captures all automatic variables from outer scope by reference.",
      fr: "[&] capture toutes les variables de la portée englobante par référence."
    }
  },
  65: {
    question: {
      en: "In the Rule of 5, if you define a custom destructor, why should you define move operations?",
      fr: "Dans la règle des 5, si vous définissez un destructeur manuel, pourquoi définir les opérations de déplacement ?"
    },
    options: [
      { text: { en: "Because defining a destructor suppresses automatic compiler generation of move operations", fr: "Parce que définir un destructeur empêche la génération automatique des déplacements par le compilateur" }, correct: true },
      { text: { en: "Move operations are required by the OS", fr: "Les déplacements sont imposés par l'OS" }, correct: false }
    ],
    explanation: {
      en: "Declaring a destructor disables default move constructor/assignment generation.",
      fr: "Déclarer un destructeur désactive la synthèse automatique du constructeur et de l'assignation de déplacement."
    }
  },
  66: {
    question: {
      en: "Which stream method checks if an IO stream encountered the end-of-file?",
      fr: "Quelle méthode de flux vérifie si la fin de fichier (EOF) a été atteinte ?"
    },
    options: [
      { text: { en: "stream.eof()", fr: "stream.eof()" }, correct: true },
      { text: { en: "stream.fail()", fr: "stream.fail()" }, correct: false },
      { text: { en: "stream.bad()", fr: "stream.bad()" }, correct: false }
    ],
    explanation: {
      en: "stream.eof() returns true when the stream has attempted to read past end of file.",
      fr: "stream.eof() renvoie vrai lorsque le flux a tenté de lire au-delà de la fin de fichier."
    }
  },
  67: {
    question: {
      en: "Which file is the standard configuration file read by CMake to build a project?",
      fr: "Quel fichier de configuration standard est lu par CMake pour construire un projet ?"
    },
    options: [
      { text: { en: "CMakeLists.txt", fr: "CMakeLists.txt" }, correct: true },
      { text: { en: "Makefile.cmake", fr: "Makefile.cmake" }, correct: false },
      { text: { en: "project.json", fr: "project.json" }, correct: false }
    ],
    explanation: {
      en: "CMakeLists.txt contains the build instructions, targets, and dependencies for CMake.",
      fr: "CMakeLists.txt contient les instructions de compilation, cibles et dépendances pour CMake."
    }
  },
  68: {
    question: {
      en: "What type of bugs does Google AddressSanitizer (-fsanitize=address) detect?",
      fr: "Quel type de bugs Google AddressSanitizer (-fsanitize=address) détecte-t-il ?"
    },
    options: [
      { text: { en: "Out-of-bounds memory accesses, buffer overflows, and use-after-free", fr: "Accès mémoire hors limites, débordements de tampon et use-after-free" }, correct: true },
      { text: { en: "HTML syntax errors", fr: "Erreurs de syntaxe HTML" }, correct: false },
      { text: { en: "Slow network latencies only", fr: "Latences réseau uniquement" }, correct: false }
    ],
    explanation: {
      en: "ASan instruments pointers to catch memory safety violations immediately as they occur.",
      fr: "ASan instrumente les pointeurs pour intercepter immédiatement les violations de sécurité mémoire."
    }
  },
  69: {
    question: {
      en: "What command in GDB prints the complete call stack trace of a crash?",
      fr: "Quelle commande dans GDB affiche la trace complète de la pile d'appels (stack trace) lors d'un crash ?"
    },
    options: [
      { text: { en: "backtrace (or bt)", fr: "backtrace (ou bt)" }, correct: true },
      { text: { en: "print", fr: "print" }, correct: false },
      { text: { en: "continue", fr: "continue" }, correct: false }
    ],
    explanation: {
      en: "'bt' or 'backtrace' prints the stack frames leading up to the current instruction or crash.",
      fr: "'bt' ou 'backtrace' affiche l'ensemble des trames d'appels de la pile jusqu'au crash."
    }
  },
  70: {
    question: {
      en: "In GoogleTest, which macro defines an individual unit test case?",
      fr: "Dans GoogleTest, quelle macro définit un cas de test unitaire individuel ?"
    },
    options: [
      { text: { en: "TEST(TestSuite, TestName)", fr: "TEST(TestSuite, TestName)" }, correct: true },
      { text: { en: "UNIT_TEST()", fr: "UNIT_TEST()" }, correct: false },
      { text: { en: "CHECK_EQUAL()", fr: "CHECK_EQUAL()" }, correct: false }
    ],
    explanation: {
      en: "TEST(SuiteName, TestName) registers a test function within GoogleTest's runner.",
      fr: "TEST(SuiteName, TestName) enregistre un cas de test auprès de l'exécuteur GoogleTest."
    }
  },
  71: {
    question: {
      en: "Which command in vcpkg integrates installed packages automatically with Visual Studio and CMake?",
      fr: "Quelle commande dans vcpkg intègre automatiquement les paquets installés avec Visual Studio et CMake ?"
    },
    options: [
      { text: { en: "vcpkg integrate install", fr: "vcpkg integrate install" }, correct: true },
      { text: { en: "vcpkg link-all", fr: "vcpkg link-all" }, correct: false },
      { text: { en: "vcpkg setup-cmake", fr: "vcpkg setup-cmake" }, correct: false }
    ],
    explanation: {
      en: "'vcpkg integrate install' hooks vcpkg into user-wide MSBuild and CMake toolchain paths.",
      fr: "'vcpkg integrate install' configure automatiquement la chaîne d'outils CMake et MSBuild."
    }
  },
  72: {
    question: {
      en: "Why is std::jthread in C++20 superior to std::thread for multi-threading?",
      fr: "Pourquoi std::jthread en C++20 est-il supérieur à std::thread pour le multithreading ?"
    },
    options: [
      { text: { en: "It automatically joins on destruction and supports cooperative stop tokens", fr: "Il appelle join() automatiquement à la destruction et gère l'annulation par jeton d'arrêt" }, correct: true },
      { text: { en: "It runs without a CPU core", fr: "Il tourne sans cœur processeur" }, correct: false },
      { text: { en: "It automatically locks all variables", fr: "Il verrouille automatiquement toutes les variables" }, correct: false }
    ],
    explanation: {
      en: "std::jthread solves the notorious terminate() crash bug of forgotten std::thread::join() calls.",
      fr: "std::jthread élimine les crashs std::terminate() provoqués par les oublis de std::thread::join()."
    }
  },
  73: {
    question: {
      en: "What is the key advantage of the Pimpl (Pointer to Implementation) idiom in C++?",
      fr: "Quel est l'avantage clé de l'idiome Pimpl (Pointer to Implementation) en C++ ?"
    },
    options: [
      { text: { en: "Preserves ABI binary stability and drastically speeds up compile times", fr: "Préserve la stabilité binaire ABI et accélère considérablement la compilation" }, correct: true },
      { text: { en: "Eliminates all pointer dereferences", fr: "Élimine tout déréférencement de pointeur" }, correct: false },
      { text: { en: "Makes classes automatically thread-safe", fr: "Rend les classes automatiquement thread-safe" }, correct: false }
    ],
    explanation: {
      en: "Pimpl confines private headers to .cpp files, preventing recompilation cascading when internals change.",
      fr: "Pimpl isole les en-têtes privés dans les .cpp, évitant les recompilations en cascade."
    }
  },
  74: {
    question: {
      en: "Why does std::jthread automatically prevent application crashes on scope exit?",
      fr: "Pourquoi std::jthread prévient-il automatiquement les crashs de l'application en sortie de portée ?"
    },
    options: [
      { text: { en: "Its destructor automatically calls request_stop() and join()", fr: "Son destructeur appelle automatiquement request_stop() et join()" }, correct: true },
      { text: { en: "It forces the operating system to pause", fr: "Il force le système d'exploitation à se mettre en pause" }, correct: false },
      { text: { en: "It converts multithreaded code into single-threaded code", fr: "Il convertit le code multithread en code mono-thread" }, correct: false }
    ],
    explanation: {
      en: "std::jthread joins automatically in its destructor, avoiding the fatal std::terminate() triggered by std::thread.",
      fr: "std::jthread fait un join automatique dans son destructeur, évitant le redouté crash std::terminate() de std::thread."
    }
  },
  75: {
    question: {
      en: "Which RAII lock wrapper should you use to lock multiple mutexes simultaneously without deadlocks?",
      fr: "Quel wrapper RAII devez-vous utiliser pour verrouiller plusieurs mutex simultanément sans risque d'interblocage ?"
    },
    options: [
      { text: { en: "std::scoped_lock (C++17)", fr: "std::scoped_lock (C++17)" }, correct: true },
      { text: { en: "std::lock_guard", fr: "std::lock_guard" }, correct: false },
      { text: { en: "raw mtx.lock() calls in sequence", fr: "des appels manuels successifs à mtx.lock()" }, correct: false }
    ],
    explanation: {
      en: "std::scoped_lock accepts any number of mutexes and uses a deadlock-avoidance algorithm to lock them all safely.",
      fr: "std::scoped_lock accepte plusieurs mutex et utilise un algorithme anti-deadlock pour les verrouiller en toute sécurité."
    }
  },
  76: {
    question: {
      en: "Why should you always pass a predicate lambda to cv.wait()?",
      fr: "Pourquoi doit-on toujours passer un prédicat lambda à cv.wait() ?"
    },
    options: [
      { text: { en: "To prevent spurious wakeups from executing code before the condition is truly met", fr: "Pour empêcher les réveils spontanés (spurious wakeups) d'exécuter du code sans condition valide" }, correct: true },
      { text: { en: "To enable compilation on 32-bit systems", fr: "Pour permettre la compilation sur architectures 32 bits" }, correct: false },
      { text: { en: "To unlock the mutex permanently", fr: "Pour déverrouiller définitivement le mutex" }, correct: false }
    ],
    explanation: {
      en: "cv.wait(lock, []{ return condition; }); re-checks the condition whenever the thread wakes, ignoring false wakeups.",
      fr: "cv.wait avec prédicat réévalue la condition à chaque réveil et se rendort si elle n'est pas encore satisfaite."
    }
  },
  77: {
    question: {
      en: "Which policy flag ensures std::async runs on a separate asynchronous OS thread?",
      fr: "Quel flag de politique garantit que std::async s'exécute sur un thread d'arrière-plan distinct ?"
    },
    options: [
      { text: { en: "std::launch::async", fr: "std::launch::async" }, correct: true },
      { text: { en: "std::launch::deferred", fr: "std::launch::deferred" }, correct: false },
      { text: { en: "std::launch::sync", fr: "std::launch::sync" }, correct: false }
    ],
    explanation: {
      en: "std::launch::async guarantees a dedicated background thread; std::launch::deferred delays execution until .get().",
      fr: "std::launch::async force un thread dédié ; std::launch::deferred retarde l'exécution synchrone jusqu'à .get()."
    }
  },
  78: {
    question: {
      en: "What alignment attribute should you use to prevent False Sharing on modern CPU cache lines?",
      fr: "Quel attribut d'alignement devez-vous utiliser pour éliminer le False Sharing sur les lignes de cache CPU modernes ?"
    },
    options: [
      { text: { en: "alignas(64) (or std::hardware_destructive_interference_size)", fr: "alignas(64) (ou std::hardware_destructive_interference_size)" }, correct: true },
      { text: { en: "alignas(4)", fr: "alignas(4)" }, correct: false },
      { text: { en: "inline", fr: "inline" }, correct: false }
    ],
    explanation: {
      en: "Standard CPU cache lines are 64 bytes; aligning atomic variables to 64 bytes isolates them into their own cache lines.",
      fr: "Les lignes de cache CPU mesurent 64 octets ; aligner à 64 octets isole chaque variable atomique dans sa propre ligne."
    }
  },
  79: {
    question: {
      en: "What synchronization primitive allows controlling a pool of N concurrent resources in C++20?",
      fr: "Quel outil de synchronisation permet de contrôler un pool de N ressources concurrentes en C++20 ?"
    },
    options: [
      { text: { en: "std::counting_semaphore", fr: "std::counting_semaphore" }, correct: true },
      { text: { en: "std::mutex", fr: "std::mutex" }, correct: false },
      { text: { en: "std::latch", fr: "std::latch" }, correct: false }
    ],
    explanation: {
      en: "std::counting_semaphore manages a counter of available resources, permitting acquire() when count > 0.",
      fr: "std::counting_semaphore gère un compteur d'accès simultanés, autorisant acquire() tant que le compteur est supérieur à 0."
    }
  },
  80: {
    question: {
      en: "How do you constrain a function template using a C++20 concept?",
      fr: "Comment contraint-on un template de fonction à l'aide d'un concept C++20 ?"
    },
    options: [
      { text: { en: "template<MyConcept T> void func(T x) or using 'requires MyConcept<T>'", fr: "template<MyConcept T> void func(T x) ou avec 'requires MyConcept<T>'" }, correct: true },
      { text: { en: "using try-catch blocks at runtime", fr: "avec des blocs try-catch à l'exécution" }, correct: false },
      { text: { en: "by casting T to void*", fr: "en castant T en void*" }, correct: false }
    ],
    explanation: {
      en: "C++20 concepts can be used directly as type constraints in template brackets or following a 'requires' clause.",
      fr: "Les concepts C++20 s'utilisent directement à la place de typename/class ou après la clause 'requires'."
    }
  },
  81: {
    question: {
      en: "What makes C++20 std::views highly efficient when transforming containers?",
      fr: "Qu'est-ce qui rend les std::views C++20 extrêmement efficaces pour transformer des conteneurs ?"
    },
    options: [
      { text: { en: "They evaluate lazily on iteration with zero heap memory allocations", fr: "Ils sont évalués de façon paresseuse à l'itération sans aucune allocation mémoire sur le tas" }, correct: true },
      { text: { en: "They clone the entire vector into GPU memory", fr: "Ils dupliquent tout le vecteur dans la mémoire GPU" }, correct: false },
      { text: { en: "They delete the original vector", fr: "Ils suppriment le vecteur d'origine" }, correct: false }
    ],
    explanation: {
      en: "std::views are lightweight wrappers that calculate values on demand, eliminating temporary vector copies.",
      fr: "std::views sont des vues légères calculant les valeurs à la volée, supprimant les copies temporaires."
    }
  },
  82: {
    question: {
      en: "What does the 'co_yield' keyword do inside a C++20 coroutine?",
      fr: "Que fait le mot-clé 'co_yield' dans une coroutine C++20 ?"
    },
    options: [
      { text: { en: "Suspends the coroutine and sends an intermediate value back to the caller", fr: "Suspend la coroutine et renvoie une valeur intermédiaire à l'appelant" }, correct: true },
      { text: { en: "Destroys the coroutine stack frame", fr: "Détruit le cadre d'exécution de la coroutine" }, correct: false },
      { text: { en: "Throws an exception to abort execution", fr: "Lève une exception pour interrompre l'exécution" }, correct: false }
    ],
    explanation: {
      en: "co_yield produces a value and pauses execution while preserving all local variables in the coroutine frame.",
      fr: "co_yield émet une valeur et met en pause l'exécution tout en préservant l'état des variables locales."
    }
  },
  83: {
    question: {
      en: "Why is Structure of Arrays (SoA) vastly faster in simulation loops than Array of Structures (AoS)?",
      fr: "Pourquoi Structure of Arrays (SoA) est-elle bien plus rapide en boucle de calcul que Array of Structures (AoS) ?"
    },
    options: [
      { text: { en: "Contiguous arrays maximize cache line hits and enable SIMD vectorization", fr: "La contiguïté mémoire maximise les succès de ligne de cache et permet la vectorisation SIMD" }, correct: true },
      { text: { en: "SoA runs on 16 threads by default", fr: "SoA tourne par défaut sur 16 threads" }, correct: false },
      { text: { en: "SoA does not use any RAM", fr: "SoA n'utilise pas de mémoire RAM" }, correct: false }
    ],
    explanation: {
      en: "CPUs fetch 64-byte chunks into L1 cache; SoA ensures 100% of fetched bytes belong to the data being processed.",
      fr: "Le CPU charge des lignes de 64 octets dans le cache L1 ; SoA assure que chaque octet chargé est immédiatement utile."
    }
  },
  84: {
    question: {
      en: "How does CRTP (Curiously Recurring Template Pattern) avoid the performance overhead of virtual functions?",
      fr: "Comment le CRTP élimine-t-il le surcoût de performance des fonctions virtuelles ?"
    },
    options: [
      { text: { en: "It resolves polymorphic calls statically at compile-time with no vtable pointer indirection", fr: "Il résout les appels polymorphiques dès la compilation sans aucune indirection de pointeur vtable" }, correct: true },
      { text: { en: "It converts functions into assembly macros", fr: "Il convertit les fonctions en macros assembleur" }, correct: false },
      { text: { en: "It runs all calculations in registers", fr: "Il exécute tous les calculs dans des registres" }, correct: false }
    ],
    explanation: {
      en: "CRTP uses static_cast<Derived*>(this) at compile time, enabling compiler inlining and zero vtable size penalty.",
      fr: "Le CRTP utilise static_cast<Derived*>(this) à la compilation, permettant l'inlining et éliminant la vtable."
    }
  }
};

// Module Master Quizzes (Big Quizzes per Module)
const MODULE_QUIZZES = {
  "mod-1": {
    title: {
      en: "Module 1 Master Quiz: C++ Basics & Fundamentals",
      fr: "Grand Quiz Module 1 : Fondamentaux & Syntaxe C++"
    },
    questions: GRAND_EXAM_QUESTIONS.filter(q => q.subject === "Basics")
  },
  "mod-5": {
    title: {
      en: "Module 5 Master Quiz: Pointers & Memory Management",
      fr: "Grand Quiz Module 5 : Pointeurs & Gestion Mémoire"
    },
    questions: GRAND_EXAM_QUESTIONS.filter(q => q.subject === "Memory")
  },
  "mod-7": {
    title: {
      en: "Module 7 Master Quiz: Modern C++ Features & Idioms",
      fr: "Grand Quiz Module 7 : Fonctionnalités & Idiomes C++ Moderne"
    },
    questions: GRAND_EXAM_QUESTIONS.filter(q => q.subject === "Modern C++")
  },
  "mod-8": {
    title: {
      en: "Module 8 Master Quiz: OOP & Advanced Language Details",
      fr: "Grand Quiz Module 8 : POO & Détails Avancés"
    },
    questions: GRAND_EXAM_QUESTIONS.filter(q => q.subject === "OOP")
  },
  "mod-9": {
    title: {
      en: "Module 9 Master Quiz: Professional Developer Tooling",
      fr: "Grand Quiz Module 9 : Outils du Développeur Professionnel"
    },
    questions: GRAND_EXAM_QUESTIONS.filter(q => q.subject === "Pro Dev")
  },
  "mod-10": {
    title: {
      en: "Module 10 Master Quiz: Multithreading & High-Performance Concurrency",
      fr: "Grand Quiz Module 10 : Multithreading & Concurrence Haute Performance"
    },
    questions: GRAND_EXAM_QUESTIONS.filter(q => q.subject === "Concurrency")
  },
  "mod-11": {
    title: {
      en: "Module 11 Master Quiz: Modern C++20/C++23 Architecture & Performance",
      fr: "Grand Quiz Module 11 : Architecture C++20/C++23 & Haute Performance"
    },
    questions: GRAND_EXAM_QUESTIONS.filter(q => q.subject === "Architecture")
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FLASHCARDS_DATA, GRAND_EXAM_QUESTIONS, MODULE_QUIZZES, LESSON_QUIZZES, shuffleArray };
}
