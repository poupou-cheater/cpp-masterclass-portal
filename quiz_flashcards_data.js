// C++ Course Flashcards & Comprehensive Quiz Question Bank
// 100% Aligned with the Complete 60 Bro Code Lessons + Intermediate Mastery Bridge
// Bilingual (EN & FR) with Instant Answer Explanations

const FLASHCARDS_DATA = [
  {
    "id": 1,
    "category": "Basics",
    "front": {
      "en": "What is the key difference between a Pointer (*) and a Reference (&)?",
      "fr": "Quelle est la différence fondamentale entre un Pointeur (*) et une Référence (&) ?"
    },
    "back": {
      "en": "A pointer holds a memory address and can be reassigned or be nullptr. A reference is an immutable alias to an existing object and cannot be null.",
      "fr": "Un pointeur stocke une adresse mémoire et peut être réassigné ou valoir nullptr. Une référence est un alias immuable vers un objet existant et ne peut pas être nulle."
    },
    "codeSnippet": "int x = 10;\nint* ptr = &x; // Can be reassigned, can be nullptr\nint& ref = x;  // Permanent alias to x, cannot be null"
  },
  {
    "id": 2,
    "category": "Basics",
    "front": {
      "en": "What is the difference between 'const' and type alias 'using'?",
      "fr": "Quelle est la différence entre 'const' et l'alias de type 'using' ?"
    },
    "back": {
      "en": "'const' makes variable values immutable. 'using' creates an alias for a data type without modifying values or types.",
      "fr": "'const' rend une valeur immuable. 'using' crée un alias lisible pour un type de données."
    },
    "codeSnippet": "const double PI = 3.14159;\nusing text_t = std::string;"
  },
  {
    "id": 3,
    "category": "Basics",
    "front": {
      "en": "Why should you use static_cast<double>(val) instead of C-style (double)val?",
      "fr": "Pourquoi utiliser static_cast<double>(val) plutôt que le cast C (double)val ?"
    },
    "back": {
      "en": "static_cast is checked by the compiler and prevents accidental, dangerous casts between incompatible types.",
      "fr": "static_cast est validé par le compilateur et interdit les conversions accidentelles dangereuses entre types incompatibles."
    },
    "codeSnippet": "double score = static_cast<double>(correct) / total * 100;"
  },
  {
    "id": 4,
    "category": "Control Flow",
    "front": {
      "en": "What is Short-Circuit Evaluation in boolean logic?",
      "fr": "Qu'est-ce que l'évaluation en court-circuit en logique booléenne ?"
    },
    "back": {
      "en": "In 'A && B', if A is false, B is never evaluated. In 'A || B', if A is true, B is never evaluated.",
      "fr": "Dans 'A && B', si A est faux, B n'est jamais évalué. Dans 'A || B', si A est vrai, B n'est pas évalué."
    },
    "codeSnippet": "if (ptr != nullptr && ptr->isValid()) { ... } // Safe from null dereference!"
  },
  {
    "id": 5,
    "category": "Loops",
    "front": {
      "en": "When should you choose a do-while loop over a while loop?",
      "fr": "Quand choisir une boucle do-while plutôt qu'une boucle while ?"
    },
    "back": {
      "en": "When the loop body must run at least once before checking the condition (e.g. user input prompts).",
      "fr": "Lorsque le corps de la boucle doit impérativement s'exécuter au moins une fois (ex. saisie utilisateur)."
    },
    "codeSnippet": "do {\n    std::cout << \"Enter positive number: \";\n    std::cin >> num;\n} while (num <= 0);"
  },
  {
    "id": 6,
    "category": "Functions",
    "front": {
      "en": "What are the requirements for Function Overloading in C++?",
      "fr": "Quelles sont les conditions pour surcharger une fonction en C++ ?"
    },
    "back": {
      "en": "Overloaded functions must have the same name but different parameter types or parameter counts. Return type alone cannot overload.",
      "fr": "Les fonctions surchargées doivent avoir le même nom mais des paramètres différents (types ou nombre). Le type de retour seul ne suffit pas."
    },
    "codeSnippet": "void print(int x);\nvoid print(double x);\nvoid print(std::string x);"
  },
  {
    "id": 7,
    "category": "Arrays",
    "front": {
      "en": "What is 'Array Decay' when passing arrays to functions?",
      "fr": "Qu'est-ce que la 'dégénérescence de tableau' (Array Decay) en C++ ?"
    },
    "back": {
      "en": "A raw array implicitly converts into a pointer to its first element when passed to a function, losing its size information.",
      "fr": "Un tableau brut passé à une fonction se convertit en pointeur vers son premier élément et perd sa taille."
    },
    "codeSnippet": "void printArray(int arr[], int size) { // arr is really int*, pass size separately!\n}"
  },
  {
    "id": 8,
    "category": "Memory",
    "front": {
      "en": "What is the difference between Stack and Heap memory?",
      "fr": "Quelle est la différence entre la mémoire Pile (Stack) et le Tas (Heap) ?"
    },
    "back": {
      "en": "Stack memory is fast, automatically managed (LIFO), but limited in size. Heap memory is manually allocated at runtime (dynamic), larger, but requires delete.",
      "fr": "La Pile (Stack) est ultra-rapide et gérée automatiquement (LIFO). Le Tas (Heap) est dynamique, volumineux, mais nécessite d'être libéré."
    },
    "codeSnippet": "int stackVar = 10;          // Stack (auto free)\nint* heapVar = new int(10); // Heap (must delete heapVar!)"
  },
  {
    "id": 9,
    "category": "Memory",
    "front": {
      "en": "Why should you prefer nullptr over NULL or 0 in modern C++?",
      "fr": "Pourquoi privilégier nullptr par rapport à NULL ou 0 en C++ moderne ?"
    },
    "back": {
      "en": "nullptr has its own distinct type (std::nullptr_t), preventing ambiguity during function overloading where NULL (macro for 0) might call an integer overload.",
      "fr": "nullptr possède son propre type (std::nullptr_t), évitant toute ambiguïté lors de la surcharge où NULL (0) appellerait une version entière."
    },
    "codeSnippet": "void f(int); void f(int*);\nf(nullptr); // Calls f(int*) unambiguously!"
  },
  {
    "id": 10,
    "category": "OOP",
    "front": {
      "en": "What is Encapsulation and how is it implemented in C++ classes?",
      "fr": "Qu'est-ce que l'Encapsulation et comment l'implémente-t-on en C++ ?"
    },
    "back": {
      "en": "Encapsulation restricts direct access to internal state by making variables private and providing public getters and validated setters.",
      "fr": "L'encapsulation protège l'état interne en rendant les attributs privés et en exposant des getters et setters validés."
    },
    "codeSnippet": "class BankAccount {\nprivate:\n    double balance;\npublic:\n    double getBalance() const { return balance; }\n};"
  },
  {
    "id": 11,
    "category": "OOP",
    "front": {
      "en": "What is the role of Constructors in C++?",
      "fr": "Quel est le rôle d'un constructeur en C++ ?"
    },
    "back": {
      "en": "A constructor automatically runs upon object instantiation to initialize member variables and ensure the object starts in a valid state.",
      "fr": "Le constructeur s'exécute automatiquement à l'instanciation pour initialiser les attributs et garantir la validité de l'objet."
    },
    "codeSnippet": "class Car {\npublic:\n    std::string model;\n    Car(std::string m) : model(m) {}\n};"
  },
  {
    "id": 12,
    "category": "OOP",
    "front": {
      "en": "Why must a base class with virtual methods have a virtual destructor?",
      "fr": "Pourquoi une classe de base polymorphe doit-elle avoir un destructeur virtuel ?"
    },
    "back": {
      "en": "To ensure that when a derived object is deleted via a base class pointer, the derived class destructor is called properly, preventing resource leaks.",
      "fr": "Pour garantir que lors de la destruction d'un objet dérivé via un pointeur de base, le destructeur dérivé soit exécuté sans fuite."
    },
    "codeSnippet": "class Base {\npublic:\n    virtual void act() = 0;\n    virtual ~Base() = default; // Essential!\n};"
  },
  {
    "id": 13,
    "category": "Intermediate",
    "front": {
      "en": "Why is std::vector preferred over raw C-style arrays?",
      "fr": "Pourquoi préférer std::vector aux tableaux bruts à la C ?"
    },
    "back": {
      "en": "std::vector handles dynamic resizing automatically, manages its own heap memory (no manual delete), and provides bounds checking via .at().",
      "fr": "std::vector gère automatiquement son redimensionnement et sa mémoire sur le tas, sans delete manuel, avec accès sécurisé .at()."
    },
    "codeSnippet": "std::vector<int> v = {1, 2, 3};\nv.push_back(4); // Dynamically expands!"
  },
  {
    "id": 14,
    "category": "Intermediate",
    "front": {
      "en": "What is std::unique_ptr and why should you use std::make_unique?",
      "fr": "Qu'est-ce que std::unique_ptr et pourquoi utiliser std::make_unique ?"
    },
    "back": {
      "en": "std::unique_ptr owns heap memory exclusively and deletes it automatically on scope exit (RAII). std::make_unique is the exception-safe allocation function.",
      "fr": "std::unique_ptr possède la ressource en exclusivité et la libère automatiquement (RAII). std::make_unique garantit la sécurité vis-à-vis des exceptions."
    },
    "codeSnippet": "auto ptr = std::make_unique<Car>(\"Tesla\"); // No delete needed!"
  },
  {
    "id": 15,
    "category": "Intermediate",
    "front": {
      "en": "How does std::lock_guard prevent thread deadlocks and resource leaks?",
      "fr": "Comment std::lock_guard évite-t-il les verrous mortels (deadlocks) et fuites ?"
    },
    "back": {
      "en": "It follows RAII: locks the mutex upon construction and guarantees unlocking when leaving scope, even if exceptions occur.",
      "fr": "Par RAII : verrouille le mutex à sa création et garantit son déverrouillage en sortie de portée, même en cas d'exception."
    },
    "codeSnippet": "std::mutex mtx;\nvoid safeWork() {\n    std::lock_guard<std::mutex> lock(mtx);\n    // Critical section\n}"
  }
];

const GRAND_EXAM_QUESTIONS = [
  {
    "id": 1,
    "subject": "Basics",
    "question": {
      "en": "What stream object is used to output text to the console in C++?",
      "fr": "Quel objet de flux est utilisé pour afficher du texte dans la console en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "std::cout",
          "fr": "std::cout"
        },
        "correct": true
      },
      {
        "text": {
          "en": "std::cin",
          "fr": "std::cin"
        },
        "correct": false
      },
      {
        "text": {
          "en": "printf_s",
          "fr": "printf_s"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::cout (character output) in <iostream> sends formatted text to the standard console.",
      "fr": "std::cout (character output) dans <iostream> envoie le texte formaté vers la console standard."
    }
  },
  {
    "id": 2,
    "subject": "Basics",
    "question": {
      "en": "Which C++ data type should you use to store a single ASCII character?",
      "fr": "Quel type de données C++ doit-on utiliser pour stocker un unique caractère ASCII ?"
    },
    "options": [
      {
        "text": {
          "en": "char",
          "fr": "char"
        },
        "correct": true
      },
      {
        "text": {
          "en": "std::string",
          "fr": "std::string"
        },
        "correct": false
      },
      {
        "text": {
          "en": "byte",
          "fr": "byte"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "char uses single quotes like 'A' and represents an 8-bit character in memory.",
      "fr": "char utilise des guillemets simples comme 'A' et occupe 1 octet en mémoire."
    }
  },
  {
    "id": 3,
    "subject": "Basics",
    "question": {
      "en": "What happens if you try to reassign a variable declared with 'const'?",
      "fr": "Que se passe-t-il si vous tentez de réassigner une variable déclarée avec 'const' ?"
    },
    "options": [
      {
        "text": {
          "en": "Compile-time error",
          "fr": "Erreur de compilation"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Runtime warning",
          "fr": "Avertissement à l'exécution"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The value silently changes",
          "fr": "La valeur change silencieusement"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "The compiler rejects assignments to read-only const variables at compile time.",
      "fr": "Le compilateur rejette les affectations aux variables const en lecture seule dès la compilation."
    }
  },
  {
    "id": 4,
    "subject": "Basics",
    "question": {
      "en": "Which operator is used to access an entity inside a specific namespace?",
      "fr": "Quel opérateur permet d'accéder à une entité située dans un espace de noms spécifique ?"
    },
    "options": [
      {
        "text": {
          "en": "Scope resolution operator (::)",
          "fr": "Opérateur de résolution de portée (::)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Member access dot (.)",
          "fr": "Point d'accès membre (.)"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Pointer arrow (->)",
          "fr": "Flèche de pointeur (->)"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "The scope resolution operator (::) tells the compiler which namespace to look inside.",
      "fr": "L'opérateur de résolution de portée (::) indique au compilateur dans quel namespace chercher."
    }
  },
  {
    "id": 5,
    "subject": "Basics",
    "question": {
      "en": "What is the preferred modern C++ keyword to define type aliases instead of 'typedef'?",
      "fr": "Quel mot-clé moderne en C++ est recommandé pour définir un alias de type plutôt que 'typedef' ?"
    },
    "options": [
      {
        "text": {
          "en": "using",
          "fr": "using"
        },
        "correct": true
      },
      {
        "text": {
          "en": "alias",
          "fr": "alias"
        },
        "correct": false
      },
      {
        "text": {
          "en": "rename",
          "fr": "rename"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "'using new_name = old_type;' is clearer and supports template aliases cleanly.",
      "fr": "'using nom = type;' est plus lisible et supporte directement les alias de templates."
    }
  },
  {
    "id": 6,
    "subject": "Basics",
    "question": {
      "en": "What does the modulus operator (%) return in integer arithmetic?",
      "fr": "Que renvoie l'opérateur modulo (%) en arithmétique entière ?"
    },
    "options": [
      {
        "text": {
          "en": "The remainder of the division",
          "fr": "Le reste de la division entière"
        },
        "correct": true
      },
      {
        "text": {
          "en": "The floating-point quotient",
          "fr": "Le quotient en virgule flottante"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The percentage proportion",
          "fr": "Le pourcentage proportionnel"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "For example, 14 % 4 evaluates to 2 because 14 divided by 4 leaves a remainder of 2.",
      "fr": "Par exemple, 14 % 4 donne 2 car 14 divisé par 4 donne un reste de 2."
    }
  },
  {
    "id": 7,
    "subject": "Basics",
    "question": {
      "en": "Why is static_cast<double>(intVal) preferred over C-style (double)intVal?",
      "fr": "Pourquoi static_cast<double>(val) est-il préféré au cast à la C (double)val ?"
    },
    "options": [
      {
        "text": {
          "en": "It is checked by the compiler and explicit in intent",
          "fr": "Il est vérifié par le compilateur et explicite d'intention"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It runs faster at runtime",
          "fr": "Il s'exécute plus vite à l'exécution"
        },
        "correct": false
      },
      {
        "text": {
          "en": "C-style cast is deprecated and illegal in C++20",
          "fr": "Le cast C est déprécié et illégal en C++20"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "static_cast prevents unintended dangerous type conversions at compile-time.",
      "fr": "static_cast évite les conversions de types dangereuses et accidentelles dès la compilation."
    }
  },
  {
    "id": 8,
    "subject": "Basics",
    "question": {
      "en": "Why does std::cin >> fail when reading a full name like 'Bro Code'?",
      "fr": "Pourquoi std::cin >> échoue-t-il lors de la saisie d'un nom complet comme 'Bro Code' ?"
    },
    "options": [
      {
        "text": {
          "en": "It stops reading at whitespace (spaces, tabs, newlines)",
          "fr": "Il s'arrête dès le premier espace blanc (espace, tabulation, saut de ligne)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "std::cin cannot read std::string",
          "fr": "std::cin ne peut pas lire de std::string"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Strings cannot exceed 4 characters",
          "fr": "Les chaînes ne peuvent pas dépasser 4 caractères"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::cin extraction stops at whitespace. Use std::getline(std::cin, str) to read full lines.",
      "fr": "L'extraction std::cin s'arrête au premier espace. Utilisez std::getline(std::cin, str) pour lire toute la ligne."
    }
  },
  {
    "id": 9,
    "subject": "Basics",
    "question": {
      "en": "Which standard header must be included to use sqrt(), pow(), and round()?",
      "fr": "Quel en-tête standard doit-on inclure pour utiliser sqrt(), pow() et round() ?"
    },
    "options": [
      {
        "text": {
          "en": "<cmath>",
          "fr": "<cmath>"
        },
        "correct": true
      },
      {
        "text": {
          "en": "<maths>",
          "fr": "<maths>"
        },
        "correct": false
      },
      {
        "text": {
          "en": "<algorithm>",
          "fr": "<algorithm>"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "#include <cmath> provides standard mathematical functions.",
      "fr": "#include <cmath> fournit les fonctions mathématiques standard."
    }
  },
  {
    "id": 10,
    "subject": "Basics",
    "question": {
      "en": "Which mathematical formula calculates the hypotenuse c given sides a and b?",
      "fr": "Quelle formule mathématique calcule l'hypoténuse c à partir des côtés a et b ?"
    },
    "options": [
      {
        "text": {
          "en": "c = std::sqrt(a*a + b*b)",
          "fr": "c = std::sqrt(a*a + b*b)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "c = a + b",
          "fr": "c = a + b"
        },
        "correct": false
      },
      {
        "text": {
          "en": "c = (a * b) / 2",
          "fr": "c = (a * b) / 2"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "By the Pythagorean theorem, hypotenuse c equals the square root of (a² + b²).",
      "fr": "D'après le théorème de Pythagore, l'hypoténuse c est égale à la racine carrée de (a² + b²)."
    }
  },
  {
    "id": 11,
    "subject": "Control Flow",
    "question": {
      "en": "What happens if all conditions in an if - else if chain evaluate to false and there is an else block?",
      "fr": "Que se passe-t-il si toutes les conditions d'un if - else if sont fausses et qu'il y a un bloc else ?"
    },
    "options": [
      {
        "text": {
          "en": "The else block executes",
          "fr": "Le bloc else s'exécute"
        },
        "correct": true
      },
      {
        "text": {
          "en": "The program crashes",
          "fr": "Le programme plante"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The first if block re-executes",
          "fr": "Le premier bloc if s'exécute à nouveau"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "The else block acts as the fallback default when no preceding conditions match.",
      "fr": "Le bloc else fait office d'alternative par défaut lorsque aucune condition précédente n'est remplie."
    }
  },
  {
    "id": 12,
    "subject": "Control Flow",
    "question": {
      "en": "Why is the 'break;' statement essential inside each case of a switch statement?",
      "fr": "Pourquoi l'instruction 'break;' est-elle essentielle à la fin de chaque case d'un switch ?"
    },
    "options": [
      {
        "text": {
          "en": "To prevent falling through to execute subsequent cases",
          "fr": "Pour empêcher l'exécution en cascade des cases suivants (fall-through)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "To reset the variable value",
          "fr": "Pour réinitialiser la valeur de la variable"
        },
        "correct": false
      },
      {
        "text": {
          "en": "To return from the enclosing function",
          "fr": "Pour quitter la fonction appelante"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Without break;, execution continues down through all remaining cases regardless of condition.",
      "fr": "Sans break;, l'exécution continue sans interruption dans les blocs case suivants."
    }
  },
  {
    "id": 13,
    "subject": "Control Flow",
    "question": {
      "en": "Why must you check if the divisor is zero before performing division in a calculator?",
      "fr": "Pourquoi doit-on vérifier si le diviseur est nul avant d'effectuer une division dans une calculatrice ?"
    },
    "options": [
      {
        "text": {
          "en": "Division by zero causes undefined behavior or runtime crash",
          "fr": "La division par zéro provoque un plantage ou comportement indéfini"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It produces the number zero automatically",
          "fr": "Elle produit automatiquement le nombre zéro"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The compiler will delete the executable",
          "fr": "Le compilateur supprime l'exécutable"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Dividing by zero in integer arithmetic causes an immediate program crash / SIGFPE signal.",
      "fr": "La division par zéro en arithmétique entière déclenche un plantage immédiat."
    }
  },
  {
    "id": 14,
    "subject": "Control Flow",
    "question": {
      "en": "What is the return value of (grade >= 60) ? \"Pass\" : \"Fail\" when grade = 75?",
      "fr": "Quelle est la valeur de retour de (grade >= 60) ? \"Pass\" : \"Fail\" quand grade = 75 ?"
    },
    "options": [
      {
        "text": {
          "en": "\"Pass\"",
          "fr": "\"Pass\""
        },
        "correct": true
      },
      {
        "text": {
          "en": "\"Fail\"",
          "fr": "\"Fail\""
        },
        "correct": false
      },
      {
        "text": {
          "en": "true",
          "fr": "true"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Since (75 >= 60) is true, the ternary operator evaluates and returns the first expression: \"Pass\".",
      "fr": "Puisque (75 >= 60) est vrai, l'opérateur ternaire évalue et renvoie la première expression : \"Pass\"."
    }
  },
  {
    "id": 15,
    "subject": "Control Flow",
    "question": {
      "en": "In the expression 'if (A && B)', when is expression B NOT evaluated?",
      "fr": "Dans l'expression 'if (A && B)', quand l'expression B n'est-elle PAS évaluée ?"
    },
    "options": [
      {
        "text": {
          "en": "When A is false (short-circuit evaluation)",
          "fr": "Quand A est faux (évaluation en court-circuit)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "When A is true",
          "fr": "Quand A est vrai"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Expression B is always evaluated",
          "fr": "L'expression B est toujours évaluée"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Logical AND (&&) short-circuits: if the first operand is false, the result is guaranteed false.",
      "fr": "Le ET logique (&&) fonctionne en court-circuit : si le premier terme est faux, le second n'est pas évalué."
    }
  },
  {
    "id": 16,
    "subject": "Control Flow",
    "question": {
      "en": "Which formula accurately converts degrees Fahrenheit to Celsius in C++?",
      "fr": "Quelle formule convertit précisément les degrés Fahrenheit en Celsius en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "(temp - 32.0) / 1.8",
          "fr": "(temp - 32.0) / 1.8"
        },
        "correct": true
      },
      {
        "text": {
          "en": "(temp * 1.8) + 32.0",
          "fr": "(temp * 1.8) + 32.0"
        },
        "correct": false
      },
      {
        "text": {
          "en": "temp / 100.0",
          "fr": "temp / 100.0"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Celsius = (Fahrenheit - 32) / 1.8. Using 1.8 or 32.0 ensures floating point arithmetic.",
      "fr": "Celsius = (Fahrenheit - 32) / 1.8. L'utilisation de décimaux garantit le calcul flottant."
    }
  },
  {
    "id": 17,
    "subject": "Control Flow",
    "question": {
      "en": "What does string.find(char) return if the character is not found in the string?",
      "fr": "Que renvoie string.find(char) si le caractère recherché n'est pas présent dans la chaîne ?"
    },
    "options": [
      {
        "text": {
          "en": "std::string::npos",
          "fr": "std::string::npos"
        },
        "correct": true
      },
      {
        "text": {
          "en": "-1",
          "fr": "-1"
        },
        "correct": false
      },
      {
        "text": {
          "en": "0",
          "fr": "0"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::string::npos is the standard sentinel value representing 'no position / not found'.",
      "fr": "std::string::npos est la valeur sentinelle standard indiquant l'absence de correspondance."
    }
  },
  {
    "id": 18,
    "subject": "Loops",
    "question": {
      "en": "What causes an infinite loop in a while loop statement?",
      "fr": "Qu'est-ce qui provoque une boucle infinie dans une instruction while ?"
    },
    "options": [
      {
        "text": {
          "en": "The loop condition never evaluates to false",
          "fr": "La condition de boucle ne devient jamais fausse"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Using semicolons inside braces",
          "fr": "L'utilisation de points-virgules entre accolades"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Declaring variables inside main",
          "fr": "La déclaration de variables dans main"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "A while loop will repeat forever unless its condition is eventually modified to false or broken.",
      "fr": "Une boucle while se répète indéfiniment si sa condition ne devient jamais fausse."
    }
  },
  {
    "id": 19,
    "subject": "Loops",
    "question": {
      "en": "What is the primary difference between a while loop and a do-while loop?",
      "fr": "Quelle est la différence fondamentale entre une boucle while et do-while ?"
    },
    "options": [
      {
        "text": {
          "en": "do-while always executes the body at least once",
          "fr": "do-while exécute toujours le corps au moins une fois"
        },
        "correct": true
      },
      {
        "text": {
          "en": "while is faster at runtime",
          "fr": "while est plus rapide à l'exécution"
        },
        "correct": false
      },
      {
        "text": {
          "en": "do-while does not check conditions",
          "fr": "do-while ne teste pas de condition"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "A do-while loop tests its condition at the bottom, guaranteeing at least one execution pass.",
      "fr": "La boucle do-while teste sa condition en fin de bloc, garantissant au moins un passage."
    }
  },
  {
    "id": 20,
    "subject": "Loops",
    "question": {
      "en": "What are the three components inside a standard for loop header: for(A; B; C)?",
      "fr": "Quels sont les trois éléments de l'en-tête for(A; B; C) ?"
    },
    "options": [
      {
        "text": {
          "en": "Initialization; Condition; Update/Increment",
          "fr": "Initialisation ; Condition ; Mise à jour/Incrément"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Condition; Body; Break",
          "fr": "Condition ; Corps ; Interruption"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Start; Finish; Output",
          "fr": "Début ; Fin ; Affichage"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "for (int i = 0; i < N; i++) sets initial counter, checks continuation, and increments.",
      "fr": "for (int i = 0; i < N; i++) initialise le compteur, vérifie la poursuite et incrémente."
    }
  },
  {
    "id": 21,
    "subject": "Loops",
    "question": {
      "en": "What is the effect of the 'continue;' statement inside a loop?",
      "fr": "Quel est l'effet de l'instruction 'continue;' dans une boucle ?"
    },
    "options": [
      {
        "text": {
          "en": "Skips the rest of the current iteration and jumps to the next iteration",
          "fr": "Ignore le reste du tour actuel et passe immédiatement au tour suivant"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Terminates the loop completely",
          "fr": "Termine la boucle définitivement"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Restarts the loop from index 0",
          "fr": "Recommence la boucle à l'index 0"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "continue immediately bypasses remaining statements in the current iteration step.",
      "fr": "continue saute les instructions restantes de l'itération courante sans quitter la boucle."
    }
  },
  {
    "id": 22,
    "subject": "Loops",
    "question": {
      "en": "If an outer loop runs 4 times and an inner nested loop runs 5 times, how many total times does the inner body execute?",
      "fr": "Si une boucle externe s'exécute 4 fois et une boucle imbriquée 5 fois, combien de fois le corps s'exécute-t-il au total ?"
    },
    "options": [
      {
        "text": {
          "en": "20 times",
          "fr": "20 fois"
        },
        "correct": true
      },
      {
        "text": {
          "en": "9 times",
          "fr": "9 fois"
        },
        "correct": false
      },
      {
        "text": {
          "en": "4 times",
          "fr": "4 fois"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Total iterations = outer_iterations * inner_iterations (4 * 5 = 20).",
      "fr": "Nombre total d'itérations = itérations_externes * itérations_internes (4 * 5 = 20)."
    }
  },
  {
    "id": 23,
    "subject": "Loops",
    "question": {
      "en": "Why should you call srand(time(nullptr)) before calling rand()?",
      "fr": "Pourquoi doit-on appeler srand(time(nullptr)) avant d'utiliser rand() ?"
    },
    "options": [
      {
        "text": {
          "en": "To seed the generator with the current time so numbers change on each run",
          "fr": "Pour initialiser le générateur avec l'heure courante afin de varier les tirages"
        },
        "correct": true
      },
      {
        "text": {
          "en": "To make rand() return floating-point numbers",
          "fr": "Pour que rand() renvoie des nombres décimaux"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It is required for compilation",
          "fr": "C'est obligatoire pour compiler"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Without a changing seed, rand() will generate the exact same sequence on every launch.",
      "fr": "Sans graine (seed) dynamique, rand() reproduira exactement la même séquence à chaque lancement."
    }
  },
  {
    "id": 24,
    "subject": "Loops",
    "question": {
      "en": "How do you restrict (rand() % 6) to generate numbers between 1 and 6 inclusive?",
      "fr": "Comment ajuster (rand() % 6) pour obtenir un nombre entre 1 et 6 inclus ?"
    },
    "options": [
      {
        "text": {
          "en": "(rand() % 6) + 1",
          "fr": "(rand() % 6) + 1"
        },
        "correct": true
      },
      {
        "text": {
          "en": "rand() % 7",
          "fr": "rand() % 7"
        },
        "correct": false
      },
      {
        "text": {
          "en": "rand(1, 6)",
          "fr": "rand(1, 6)"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "rand() % 6 produces 0, 1, 2, 3, 4, or 5. Adding 1 shifts the range to 1 through 6.",
      "fr": "rand() % 6 donne un résultat de 0 à 5. Ajouter 1 décale la plage de 1 à 6."
    }
  },
  {
    "id": 25,
    "subject": "Loops",
    "question": {
      "en": "In a number guessing game, which condition terminates the guessing loop?",
      "fr": "Dans un jeu de devinette, quelle condition met fin à la boucle de jeu ?"
    },
    "options": [
      {
        "text": {
          "en": "When the player's guess equals the secret number",
          "fr": "Lorsque la proposition du joueur égale le nombre secret"
        },
        "correct": true
      },
      {
        "text": {
          "en": "When guess is greater than 100",
          "fr": "Quand la proposition dépasse 100"
        },
        "correct": false
      },
      {
        "text": {
          "en": "After exactly 3 tries automatically",
          "fr": "Après exactement 3 essais automatiquement"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "The game loop terminates with a win when the player guesses correctly (guess == secret).",
      "fr": "La boucle de jeu se termine par une victoire lorsque le joueur devine le nombre exact."
    }
  },
  {
    "id": 26,
    "subject": "Functions",
    "question": {
      "en": "What does a function return type of 'void' indicate?",
      "fr": "Que signifie un type de retour 'void' pour une fonction ?"
    },
    "options": [
      {
        "text": {
          "en": "The function does not return any value to the caller",
          "fr": "La fonction ne renvoie aucune valeur au point d'appel"
        },
        "correct": true
      },
      {
        "text": {
          "en": "The function returns an integer 0",
          "fr": "La fonction renvoie l'entier 0"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The function accepts zero parameters",
          "fr": "La fonction n'accepte aucun paramètre"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "void means the function performs an action (like printing or modifying state) without returning data.",
      "fr": "void indique que la fonction effectue une action sans renvoyer de données."
    }
  },
  {
    "id": 27,
    "subject": "Functions",
    "question": {
      "en": "What happens to remaining code inside a function after a 'return' statement is executed?",
      "fr": "Qu'arrive-t-il au code situé après une instruction 'return' dans une fonction ?"
    },
    "options": [
      {
        "text": {
          "en": "It is skipped; the function immediately exits",
          "fr": "Il est ignoré ; la fonction se termine immédiatement"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It executes in the background",
          "fr": "Il s'exécute en tâche de fond"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It causes a compiler warning",
          "fr": "Il génère un avertissement de compilation"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Executing 'return' hands back control to the caller immediately, ignoring any remaining lines.",
      "fr": "L'instruction 'return' rend immédiatement la main à l'appelant en ignorant les lignes suivantes."
    }
  },
  {
    "id": 28,
    "subject": "Functions",
    "question": {
      "en": "Can two functions in C++ share the same name if they only differ by return type?",
      "fr": "Deux fonctions peuvent-elles porter le même nom si seul leur type de retour est différent ?"
    },
    "options": [
      {
        "text": {
          "en": "No, C++ overload resolution requires different parameter types or counts",
          "fr": "Non, la surcharge en C++ exige des types ou un nombre de paramètres différents"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Yes, return type overloading is fully supported",
          "fr": "Oui, la surcharge par type de retour est permise"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Only if declared static",
          "fr": "Seulement si elles sont déclarées static"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Function overloading in C++ requires distinct parameter signatures; return type alone is not enough.",
      "fr": "La surcharge exige des paramètres différents ; le type de retour seul ne suffit pas."
    }
  },
  {
    "id": 29,
    "subject": "Functions",
    "question": {
      "en": "How can you access a global variable 'x' if a local variable also named 'x' is in scope?",
      "fr": "Comment accéder à une variable globale 'x' masquée par une variable locale portant le même nom ?"
    },
    "options": [
      {
        "text": {
          "en": "Using the unary scope resolution operator: ::x",
          "fr": "En utilisant l'opérateur unaire de portée : ::x"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Using global.x",
          "fr": "En écrivant global.x"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It is impossible; the global variable is deleted",
          "fr": "C'est impossible ; la variable globale est détruite"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Prefixing with :: (unary scope resolution) accesses the global variable in global scope.",
      "fr": "Le préfixe :: (résolution de portée globale unaire) permet d'accéder à la variable globale."
    }
  },
  {
    "id": 30,
    "subject": "Functions",
    "question": {
      "en": "In a banking simulation, why should deposit() and withdraw() check that amounts are positive (> 0)?",
      "fr": "Dans un programme bancaire, pourquoi vérifier que les montants de dépôt/retrait sont strictement positifs ?"
    },
    "options": [
      {
        "text": {
          "en": "To prevent negative transaction fraud or unintended state corruption",
          "fr": "Pour empêcher les transactions négatives ou la corruption du solde"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Because C++ does not support negative doubles",
          "fr": "Car C++ ne supporte pas les doubles négatifs"
        },
        "correct": false
      },
      {
        "text": {
          "en": "To speed up floating point calculations",
          "fr": "Pour accélérer les calculs flottants"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Input validation is essential business logic in robust software.",
      "fr": "La validation des entrées utilisateur est une règle métier fondamentale."
    }
  },
  {
    "id": 31,
    "subject": "Functions",
    "question": {
      "en": "In Rock-Paper-Scissors, what operator combination evaluates whether player beats computer?",
      "fr": "Au chifoumi, quelle combinaison logique évalue si le joueur bat l'ordinateur ?"
    },
    "options": [
      {
        "text": {
          "en": "(p=='r' && c=='s') || (p=='p' && c=='r') || (p=='s' && c=='p')",
          "fr": "(p=='r' && c=='s') || (p=='p' && c=='r') || (p=='s' && c=='p')"
        },
        "correct": true
      },
      {
        "text": {
          "en": "p > c",
          "fr": "p > c"
        },
        "correct": false
      },
      {
        "text": {
          "en": "p == c",
          "fr": "p == c"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Grouping each winning pair with && and combining all winning scenarios with ||.",
      "fr": "En regroupant chaque paire gagnante avec && et en combinant les cas avec ||."
    }
  },
  {
    "id": 32,
    "subject": "Arrays",
    "question": {
      "en": "What is the index of the first element in a C++ array?",
      "fr": "Quel est l'index du premier élément d'un tableau en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "0",
          "fr": "0"
        },
        "correct": true
      },
      {
        "text": {
          "en": "1",
          "fr": "1"
        },
        "correct": false
      },
      {
        "text": {
          "en": "-1",
          "fr": "-1"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "C++ arrays are strictly 0-indexed; array[0] refers to the first element.",
      "fr": "Les tableaux C++ commencent strictement à l'indice 0 ; array[0] est le premier élément."
    }
  },
  {
    "id": 33,
    "subject": "Arrays",
    "question": {
      "en": "How do you calculate the number of elements in a raw array 'int arr[10]' using sizeof?",
      "fr": "Comment calculer le nombre d'éléments d'un tableau 'int arr[10]' avec sizeof ?"
    },
    "options": [
      {
        "text": {
          "en": "sizeof(arr) / sizeof(arr[0])",
          "fr": "sizeof(arr) / sizeof(arr[0])"
        },
        "correct": true
      },
      {
        "text": {
          "en": "sizeof(arr)",
          "fr": "sizeof(arr)"
        },
        "correct": false
      },
      {
        "text": {
          "en": "arr.length()",
          "fr": "arr.length()"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Total byte size divided by the byte size of a single element yields the element count.",
      "fr": "La taille totale en octets divisée par la taille d'un seul élément donne le nombre d'éléments."
    }
  },
  {
    "id": 34,
    "subject": "Arrays",
    "question": {
      "en": "What condition should an index loop use to iterate through an array of 'size' elements?",
      "fr": "Quelle condition de boucle for indexée doit-on utiliser pour un tableau de 'size' éléments ?"
    },
    "options": [
      {
        "text": {
          "en": "i < size",
          "fr": "i < size"
        },
        "correct": true
      },
      {
        "text": {
          "en": "i <= size",
          "fr": "i <= size"
        },
        "correct": false
      },
      {
        "text": {
          "en": "i == size",
          "fr": "i == size"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Valid indices are 0 through size - 1. Using i <= size accesses invalid memory beyond bounds.",
      "fr": "Les index valides vont de 0 à size - 1. Utiliser i <= size lit en dehors du tableau."
    }
  },
  {
    "id": 35,
    "subject": "Arrays",
    "question": {
      "en": "Why should you prefer 'const auto& item' in a range-based for loop over 'auto item' for large objects?",
      "fr": "Pourquoi préférer 'const auto& item' dans une boucle for-each pour de gros objets ?"
    },
    "options": [
      {
        "text": {
          "en": "It avoids expensive copies while guaranteeing read-only safety",
          "fr": "Elle évite les copies coûteuses tout en garantissant la lecture seule"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It allows modifying the original elements",
          "fr": "Elle permet de modifier les originaux"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Range-based for requires references to compile",
          "fr": "La boucle for-each l'exige pour compiler"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "const auto& binds a read-only reference directly to the container element without copying.",
      "fr": "const auto& lie une référence en lecture seule à chaque élément sans aucune copie."
    }
  },
  {
    "id": 36,
    "subject": "Arrays",
    "question": {
      "en": "What happens when you pass a raw array to a function parameter (e.g. void fn(int arr[]))?",
      "fr": "Que se produit-il lorsqu'on passe un tableau brut en paramètre de fonction ?"
    },
    "options": [
      {
        "text": {
          "en": "The array decays into a pointer (int*), losing its size information",
          "fr": "Le tableau dégénère en pointeur (int*) et perd sa taille"
        },
        "correct": true
      },
      {
        "text": {
          "en": "The entire array is cloned on the stack",
          "fr": "Le tableau entier est cloné sur la pile"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The compiler throws an error",
          "fr": "Le compilateur signale une erreur"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Array decay converts the array to a pointer to its first element; always pass size separately.",
      "fr": "La dégénérescence convertit le tableau en pointeur vers le 1er élément ; la taille doit être passée."
    }
  },
  {
    "id": 37,
    "subject": "Arrays",
    "question": {
      "en": "What is the average time complexity of Linear Search on an unsorted array of N elements?",
      "fr": "Quelle est la complexité temporelle moyenne d'une recherche linéaire sur un tableau de N éléments ?"
    },
    "options": [
      {
        "text": {
          "en": "O(N)",
          "fr": "O(N)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "O(1)",
          "fr": "O(1)"
        },
        "correct": false
      },
      {
        "text": {
          "en": "O(log N)",
          "fr": "O(log N)"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Linear search checks each element one by one, requiring up to N comparisons in the worst case.",
      "fr": "La recherche linéaire inspecte les éléments un par un, nécessitant jusqu'à N étapes au pire."
    }
  },
  {
    "id": 38,
    "subject": "Arrays",
    "question": {
      "en": "How does Bubble Sort arrange elements into ascending order?",
      "fr": "Comment le tri à bulles (Bubble Sort) ordonne-t-il les éléments en ordre croissant ?"
    },
    "options": [
      {
        "text": {
          "en": "Repeatedly compares adjacent pairs and swaps them if out of order",
          "fr": "Compare les paires adjacentes et les échange si elles sont dans le désordre"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Divides the array into halves recursively",
          "fr": "Divise récursivement le tableau en deux"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Inserts elements into a binary search tree",
          "fr": "Insère les éléments dans un arbre binaire"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Bubble Sort bubbles the largest remaining value to the end of the array each pass.",
      "fr": "Le tri à bulles fait remonter le plus grand élément restant à la fin du tableau à chaque tour."
    }
  },
  {
    "id": 39,
    "subject": "Arrays",
    "question": {
      "en": "What header is required to use the std::fill algorithm in C++?",
      "fr": "Quel en-tête est requis pour utiliser l'algorithme std::fill en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "<algorithm>",
          "fr": "<algorithm>"
        },
        "correct": true
      },
      {
        "text": {
          "en": "<vector>",
          "fr": "<vector>"
        },
        "correct": false
      },
      {
        "text": {
          "en": "<array>",
          "fr": "<array>"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::fill is defined inside <algorithm>.",
      "fr": "std::fill est défini dans <algorithm>."
    }
  },
  {
    "id": 40,
    "subject": "Arrays",
    "question": {
      "en": "When populating an array with user input, why must you track current count against maximum capacity?",
      "fr": "Lors du remplissage d'un tableau par saisie utilisateur, pourquoi surveiller la capacité maximale ?"
    },
    "options": [
      {
        "text": {
          "en": "To prevent writing past the array bounds and causing buffer overflows",
          "fr": "Pour éviter d'écrire hors limites et provoquer un débordement de tampon"
        },
        "correct": true
      },
      {
        "text": {
          "en": "C++ arrays automatically double when full",
          "fr": "Les tableaux C++ doublent automatiquement quand ils sont pleins"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The compiler requires it",
          "fr": "Le compilateur l'exige"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Fixed-size arrays cannot expand; writing beyond bounds leads to memory corruption.",
      "fr": "Les tableaux bruts ont une taille fixe ; dépasser leur capacité corrompt la mémoire."
    }
  },
  {
    "id": 41,
    "subject": "Arrays",
    "question": {
      "en": "How do you access the element in row 1, column 2 of a 2D array 'grid'?",
      "fr": "Comment accéder à l'élément de la ligne 1, colonne 2 d'une matrice 2D 'grid' ?"
    },
    "options": [
      {
        "text": {
          "en": "grid[1][2]",
          "fr": "grid[1][2]"
        },
        "correct": true
      },
      {
        "text": {
          "en": "grid[1, 2]",
          "fr": "grid[1, 2]"
        },
        "correct": false
      },
      {
        "text": {
          "en": "grid.at(1, 2)",
          "fr": "grid.at(1, 2)"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "2D arrays use chained brackets: array[rowIndex][columnIndex].",
      "fr": "Les tableaux 2D utilisent des crochets successifs : tab[indexLigne][indexColonne]."
    }
  },
  {
    "id": 42,
    "subject": "Arrays",
    "question": {
      "en": "In the console Quiz Game program, how are questions, options, and answer keys synchronized?",
      "fr": "Dans le jeu de quiz en console, comment synchroniser questions, options et réponses ?"
    },
    "options": [
      {
        "text": {
          "en": "Using a shared loop index (i) across all parallel arrays",
          "fr": "En utilisant le même index de boucle (i) sur tous les tableaux parallèles"
        },
        "correct": true
      },
      {
        "text": {
          "en": "By merging them into a single string",
          "fr": "En les fusionnant en une chaîne unique"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Through random matching",
          "fr": "Par correspondance aléatoire"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Index i references question[i], options[i], and answerKey[i] simultaneously.",
      "fr": "L'index i permet d'accéder en même temps à question[i], options[i] et answerKey[i]."
    }
  },
  {
    "id": 43,
    "subject": "Memory",
    "question": {
      "en": "What does the address-of operator (&x) return?",
      "fr": "Que renvoie l'opérateur d'adresse (&x) ?"
    },
    "options": [
      {
        "text": {
          "en": "The hexadecimal memory address where variable x is located in RAM",
          "fr": "L'adresse mémoire hexadécimale où se trouve la variable x en RAM"
        },
        "correct": true
      },
      {
        "text": {
          "en": "The value stored inside x",
          "fr": "La valeur stockée dans x"
        },
        "correct": false
      },
      {
        "text": {
          "en": "A duplicate copy of x",
          "fr": "Une copie identique de x"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "&x gives the memory address location where the variable resides in memory.",
      "fr": "&x donne l'emplacement physique en mémoire où réside la variable."
    }
  },
  {
    "id": 44,
    "subject": "Memory",
    "question": {
      "en": "Why does passing by reference (void swap(int& a, int& b)) allow modifying the original variables?",
      "fr": "Pourquoi le passage par référence permet-il de modifier les variables originales ?"
    },
    "options": [
      {
        "text": {
          "en": "References alias the caller's actual memory addresses instead of creating copies",
          "fr": "Les références sont des alias directs de la mémoire originale sans copie"
        },
        "correct": true
      },
      {
        "text": {
          "en": "References create global variables",
          "fr": "Les références créent des variables globales"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Because reference parameters run on a different thread",
          "fr": "Car elles tournent sur un thread séparé"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "A reference is an immutable alias; any read or write operates directly on the caller's variable.",
      "fr": "Une référence est un alias direct ; toute lecture ou écriture modifie la variable source."
    }
  },
  {
    "id": 45,
    "subject": "Memory",
    "question": {
      "en": "What is the main benefit of declaring a parameter as 'const std::string& str'?",
      "fr": "Quel est le bénéfice majeur de déclarer un paramètre comme 'const std::string& str' ?"
    },
    "options": [
      {
        "text": {
          "en": "Zero-copy performance combined with read-only safety",
          "fr": "Performance sans copie combinée à la sécurité de la lecture seule"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Allows the function to alter the caller's string",
          "fr": "Permet de modifier la chaîne appelante"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Converts strings to integer hashes automatically",
          "fr": "Convertit automatiquement en hash entier"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "const Type& prevents deep copying large objects while strictly preventing accidental modifications.",
      "fr": "const Type& évite les copies coûteuses tout en interdisant toute modification accidentelle."
    }
  },
  {
    "id": 46,
    "subject": "Memory",
    "question": {
      "en": "In the Credit Card Validator, how do you convert an ASCII digit character '7' to numeric int 7?",
      "fr": "Dans le validateur de carte bancaire, comment convertir le caractère '7' en entier 7 ?"
    },
    "options": [
      {
        "text": {
          "en": "charDigit - '0'",
          "fr": "charDigit - '0'"
        },
        "correct": true
      },
      {
        "text": {
          "en": "static_cast<int>(charDigit)",
          "fr": "static_cast<int>(charDigit)"
        },
        "correct": false
      },
      {
        "text": {
          "en": "charDigit * 10",
          "fr": "charDigit * 10"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Subtracting '0' (ASCII 48) gives the exact numeric offset: '7' - '0' = 55 - 48 = 7.",
      "fr": "Soustraire '0' (ASCII 48) calcule la valeur numérique exacte : '7' - '0' = 55 - 48 = 7."
    }
  },
  {
    "id": 47,
    "subject": "Memory",
    "question": {
      "en": "What is the dereference operator (*) used for with a pointer?",
      "fr": "À quoi sert l'opérateur de déréférencement (*) appliqué à un pointeur ?"
    },
    "options": [
      {
        "text": {
          "en": "To read or write the actual value stored at the address pointed to",
          "fr": "À lire ou modifier la valeur stockée à l'adresse pointée"
        },
        "correct": true
      },
      {
        "text": {
          "en": "To obtain the pointer's own address",
          "fr": "À obtenir l'adresse du pointeur lui-même"
        },
        "correct": false
      },
      {
        "text": {
          "en": "To multiply the pointer by 2",
          "fr": "À multiplier le pointeur par 2"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "*ptr dereferences the pointer, allowing direct access to the pointed-to object.",
      "fr": "*ptr déréférence le pointeur et donne un accès direct à la valeur ciblée."
    }
  },
  {
    "id": 48,
    "subject": "Memory",
    "question": {
      "en": "Why should unassigned pointers always be initialized to 'nullptr' in modern C++?",
      "fr": "Pourquoi un pointeur non assigné doit-il toujours être initialisé à 'nullptr' ?"
    },
    "options": [
      {
        "text": {
          "en": "To prevent wild / dangling pointers containing random garbage memory addresses",
          "fr": "Pour éviter les pointeurs fous contenant des adresses mémoires aléatoires"
        },
        "correct": true
      },
      {
        "text": {
          "en": "nullptr allocates 4 bytes on the heap",
          "fr": "nullptr alloue 4 octets sur le tas"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Modern C++ does not allow declaring pointers without nullptr",
          "fr": "C++ moderne interdit de déclarer un pointeur sans nullptr"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Initializing to nullptr allows safe checking (if (ptr != nullptr)) before dereferencing.",
      "fr": "Initialiser à nullptr permet de tester la validité (if (ptr != nullptr)) avant utilisation."
    }
  },
  {
    "id": 49,
    "subject": "Memory",
    "question": {
      "en": "How many winning line configurations exist on a standard 3x3 Tic-Tac-Toe grid?",
      "fr": "Combien de configurations gagnantes existent sur une grille de Morpion 3x3 ?"
    },
    "options": [
      {
        "text": {
          "en": "8 (3 rows, 3 columns, 2 diagonals)",
          "fr": "8 (3 lignes, 3 colonnes, 2 diagonales)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "6 (3 rows, 3 columns)",
          "fr": "6 (3 lignes, 3 colonnes)"
        },
        "correct": false
      },
      {
        "text": {
          "en": "9",
          "fr": "9"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "A 3x3 board has 3 horizontal rows, 3 vertical columns, and 2 diagonals = 8 winning combinations.",
      "fr": "Un plateau 3x3 comporte 3 lignes, 3 colonnes et 2 diagonales, soit 8 combinaisons gagnantes."
    }
  },
  {
    "id": 50,
    "subject": "Memory",
    "question": {
      "en": "What happens if you allocate heap memory with 'new' but forget to call 'delete'?",
      "fr": "Que se passe-t-il si vous allouez de la mémoire avec 'new' sans jamais appeler 'delete' ?"
    },
    "options": [
      {
        "text": {
          "en": "A memory leak occurs; RAM remains consumed until program termination",
          "fr": "Une fuite de mémoire survient ; la RAM reste occupée jusqu'à la fin du programme"
        },
        "correct": true
      },
      {
        "text": {
          "en": "The memory is automatically deleted on function return",
          "fr": "La mémoire est libérée automatiquement à la fin de la fonction"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The CPU triggers an immediate hardware reset",
          "fr": "Le processeur redémarre la machine"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Heap memory allocated with 'new' must be explicitly freed with 'delete' to prevent leaks.",
      "fr": "La mémoire allouée avec 'new' doit être libérée manuellement avec 'delete' pour éviter les fuites."
    }
  },
  {
    "id": 51,
    "subject": "Advanced",
    "question": {
      "en": "What must every recursive function have to prevent infinite recursion and stack overflow?",
      "fr": "Que doit posséder toute fonction récursive pour éviter un débordement de pile (stack overflow) ?"
    },
    "options": [
      {
        "text": {
          "en": "A base case that stops recursion without making further recursive calls",
          "fr": "Un cas de base qui arrête la récursion sans nouvel appel"
        },
        "correct": true
      },
      {
        "text": {
          "en": "A loop counter",
          "fr": "Un compteur de boucle for"
        },
        "correct": false
      },
      {
        "text": {
          "en": "A global variable",
          "fr": "Une variable globale"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "The base case halts recursion; without it, function calls consume all call stack space.",
      "fr": "Le cas de base arrête la récursion ; sans lui, la pile d'appels sature et fait planter le programme."
    }
  },
  {
    "id": 52,
    "subject": "Advanced",
    "question": {
      "en": "How do function templates (template <typename T>) work under the hood during compilation?",
      "fr": "Comment les patrons de fonctions (template <typename T>) fonctionnent-ils lors de la compilation ?"
    },
    "options": [
      {
        "text": {
          "en": "The compiler generates concrete function overloads for each invoked data type",
          "fr": "Le compilateur génère les surcharges concrètes pour chaque type utilisé"
        },
        "correct": true
      },
      {
        "text": {
          "en": "They convert all variables into generic void* pointers at runtime",
          "fr": "Ils convertissent tout en pointeurs void* à l'exécution"
        },
        "correct": false
      },
      {
        "text": {
          "en": "They interpret types at runtime like Python",
          "fr": "Ils interprètent les types dynamiquement comme Python"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "C++ templates are zero-cost abstractions instantiated at compile-time with full type safety.",
      "fr": "Les templates C++ sont instanciés à la compilation sans aucun surcoût d'exécution."
    }
  },
  {
    "id": 53,
    "subject": "Advanced",
    "question": {
      "en": "What is the default access level for members declared inside a C++ 'struct'?",
      "fr": "Quel est le niveau d'accès par défaut des membres d'une 'struct' en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "public",
          "fr": "public"
        },
        "correct": true
      },
      {
        "text": {
          "en": "private",
          "fr": "private"
        },
        "correct": false
      },
      {
        "text": {
          "en": "protected",
          "fr": "protected"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Members of a struct are public by default, whereas members of a class are private by default.",
      "fr": "Les membres d'une struct sont publics par défaut, alors que ceux d'une class sont privés."
    }
  },
  {
    "id": 54,
    "subject": "Advanced",
    "question": {
      "en": "Why is it best practice to pass a large struct to a read-only function as 'const StructName&'?",
      "fr": "Pourquoi passer une grande structure en 'const StructName&' pour une lecture seule ?"
    },
    "options": [
      {
        "text": {
          "en": "It avoids copying all member variables while protecting them from modification",
          "fr": "Cela évite de copier tous les membres tout en empêchant toute altération"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Structs cannot be passed by value in C++",
          "fr": "Les structs ne peuvent pas être passées par valeur"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It frees the struct memory automatically",
          "fr": "Cela libère automatiquement la mémoire de la struct"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Passing large structs by value copies every single member field; const reference is zero-copy.",
      "fr": "Passer par valeur copie chaque membre ; la référence constante évite tout surcoût."
    }
  },
  {
    "id": 55,
    "subject": "Advanced",
    "question": {
      "en": "What underlying type represents enum values by default in C++?",
      "fr": "Quel type sous-jacent représente les valeurs d'un enum par défaut en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "Integers (int), starting at 0",
          "fr": "Des entiers (int), débutant à 0"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Strings",
          "fr": "Des chaînes de caractères"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Floating-point numbers",
          "fr": "Des nombres décimaux"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Enum enumerators are assigned consecutive integer values starting from 0 by default.",
      "fr": "Les valeurs d'un enum sont associées à des entiers consécutifs démarrant à 0."
    }
  },
  {
    "id": 56,
    "subject": "OOP",
    "question": {
      "en": "What is the difference between a class and an object in Object-Oriented Programming?",
      "fr": "Quelle est la différence entre une classe et un objet en Programmation Orientée Objet ?"
    },
    "options": [
      {
        "text": {
          "en": "A class is the blueprint; an object is a concrete instance of that blueprint",
          "fr": "La classe est le modèle ; l'objet est une instance concrète de ce modèle"
        },
        "correct": true
      },
      {
        "text": {
          "en": "An object is a blueprint; a class is the instance",
          "fr": "L'objet est le modèle ; la classe est l'instance"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Classes and objects are identical concepts",
          "fr": "Classes et objets sont des termes strictement synonymes"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "A class defines properties and methods; objects are instantiated instances in memory.",
      "fr": "La classe définit la structure et les méthodes ; l'objet est l'entité concrète en mémoire."
    }
  },
  {
    "id": 57,
    "subject": "OOP",
    "question": {
      "en": "When is a constructor method called in C++?",
      "fr": "Quand la méthode constructeur est-elle appelée en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "Automatically whenever a new object of that class is instantiated",
          "fr": "Automatiquement dès qu'un nouvel objet de la classe est instancié"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Only when explicitly invoked with object.Constructor()",
          "fr": "Seulement si on l'appelle avec objet.Constructeur()"
        },
        "correct": false
      },
      {
        "text": {
          "en": "When the program exits main()",
          "fr": "À la fermeture du programme"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Constructors run automatically at instantiation to set up the object's initial state.",
      "fr": "Le constructeur s'exécute automatiquement à l'instanciation pour initialiser l'objet."
    }
  },
  {
    "id": 58,
    "subject": "OOP",
    "question": {
      "en": "What allows constructor overloading to work in C++?",
      "fr": "Qu'est-ce qui permet la surcharge de constructeurs en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "Providing multiple constructors with different parameter lists",
          "fr": "Fournir plusieurs constructeurs avec des listes de paramètres différentes"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Giving different names to each constructor",
          "fr": "Donner un nom différent à chaque constructeur"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Specifying different return types",
          "fr": "Spécifier des types de retour différents"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Constructors must share the class name; they are overloaded via distinct parameter counts and types.",
      "fr": "Tous les constructeurs portent le nom de la classe ; ils diffèrent par leurs paramètres."
    }
  },
  {
    "id": 59,
    "subject": "OOP",
    "question": {
      "en": "What OOP principle is achieved by making member variables private and providing public getters/setters?",
      "fr": "Quel principe de la POO réalise-t-on en rendant les variables privées avec accesseurs publics ?"
    },
    "options": [
      {
        "text": {
          "en": "Encapsulation (Data Hiding)",
          "fr": "L'Encapsulation (Masquage des données)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Polymorphism",
          "fr": "Le Polymorphisme"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Multiple Inheritance",
          "fr": "L'Héritage Multiple"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Encapsulation hides sensitive data from direct tampering and validates mutations via setters.",
      "fr": "L'encapsulation protège les attributs internes et filtre leurs modifications par les setters."
    }
  },
  {
    "id": 60,
    "subject": "OOP",
    "question": {
      "en": "What syntax establishes that class Dog inherits publicly from class Animal?",
      "fr": "Quelle syntaxe déclare que la classe Dog hérite publiquement de la classe Animal ?"
    },
    "options": [
      {
        "text": {
          "en": "class Dog : public Animal { ... };",
          "fr": "class Dog : public Animal { ... };"
        },
        "correct": true
      },
      {
        "text": {
          "en": "class Dog extends Animal { ... };",
          "fr": "class Dog extends Animal { ... };"
        },
        "correct": false
      },
      {
        "text": {
          "en": "class Dog inherits Animal { ... };",
          "fr": "class Dog inherits Animal { ... };"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "In C++, inheritance is specified using a colon followed by access specifier (class Dog : public Animal).",
      "fr": "En C++, l'héritage s'écrit avec un deux-points suivi du mode d'accès (: public Animal)."
    }
  },
  {
    "id": 61,
    "subject": "Intermediate",
    "question": {
      "en": "Which method appends a new element to the end of a std::vector dynamic array?",
      "fr": "Quelle méthode ajoute un nouvel élément à la fin d'un tableau dynamique std::vector ?"
    },
    "options": [
      {
        "text": {
          "en": "push_back(element)",
          "fr": "push_back(element)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "append(element)",
          "fr": "append(element)"
        },
        "correct": false
      },
      {
        "text": {
          "en": "add(element)",
          "fr": "add(element)"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::vector::push_back(val) inserts val at the end and reallocates memory dynamically if capacity is full.",
      "fr": "std::vector::push_back(val) insère à la fin et réalloue la mémoire dynamiquement si nécessaire."
    }
  },
  {
    "id": 62,
    "subject": "Intermediate",
    "question": {
      "en": "Why MUST base classes with virtual methods always declare a virtual destructor (virtual ~Base() = default;)?",
      "fr": "Pourquoi une classe de base polymorphe DOIT-ELLE toujours avoir un destructeur virtuel ?"
    },
    "options": [
      {
        "text": {
          "en": "To ensure derived class destructors run when deleting an object through a base pointer",
          "fr": "Pour garantir l'appel du destructeur dérivé lors de la destruction via pointeur de base"
        },
        "correct": true
      },
      {
        "text": {
          "en": "To make constructors run faster",
          "fr": "Pour accélérer les constructeurs"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It prevents compilation errors in main",
          "fr": "Pour éviter une erreur de compilation dans main"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Deleting a derived object via Base* without a virtual destructor causes undefined behavior and leaks.",
      "fr": "Supprimer un objet dérivé via Base* sans destructeur virtuel entraîne fuites et comportement indéfini."
    }
  },
  {
    "id": 63,
    "subject": "Intermediate",
    "question": {
      "en": "What is the primary advantage of std::unique_ptr over a raw pointer with 'new'?",
      "fr": "Quel est l'avantage majeur de std::unique_ptr par rapport à un pointeur brut 'new' ?"
    },
    "options": [
      {
        "text": {
          "en": "Automatic RAII cleanup: memory is deleted automatically when the unique_ptr leaves scope",
          "fr": "Nettoyage RAII automatique : la mémoire est libérée dès que l'unique_ptr sort de portée"
        },
        "correct": true
      },
      {
        "text": {
          "en": "unique_ptr can be shared by multiple threads simultaneously without locks",
          "fr": "unique_ptr est partagé entre threads sans verrous"
        },
        "correct": false
      },
      {
        "text": {
          "en": "unique_ptr uses no memory at all",
          "fr": "unique_ptr n'occupe aucune mémoire"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::unique_ptr exclusively owns heap memory and frees it automatically on destruction, preventing leaks.",
      "fr": "std::unique_ptr possède la ressource en exclusivité et la détruit automatiquement, éliminant les fuites."
    }
  },
  {
    "id": 64,
    "subject": "Intermediate",
    "question": {
      "en": "What data structure does std::map use under the hood to maintain sorted key-value pairs?",
      "fr": "Quelle structure de données std::map utilise-t-il pour conserver les paires clé-valeur triées ?"
    },
    "options": [
      {
        "text": {
          "en": "Self-balancing Red-Black Tree (O(log N) lookup)",
          "fr": "Arbre rouge-noir équilibré (recherche en O(log N))"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Unsorted contiguous array",
          "fr": "Tableau contigu non trié"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Singly linked list",
          "fr": "Liste simplement chaînée"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::map keeps elements sorted by key with logarithmic O(log N) insertions, removals, and searches.",
      "fr": "std::map maintient ses clés ordonnées dans un arbre binaire de recherche équilibré en O(log N)."
    }
  },
  {
    "id": 65,
    "subject": "Intermediate",
    "question": {
      "en": "Why should you use std::lock_guard<std::mutex> when synchronizing threads?",
      "fr": "Pourquoi utiliser std::lock_guard<std::mutex> lors de la synchronisation de threads ?"
    },
    "options": [
      {
        "text": {
          "en": "It locks the mutex upon construction and unlocks automatically when exiting scope (RAII)",
          "fr": "Il verrouille à la création et déverrouille automatiquement en sortie de portée (RAII)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It creates a new thread automatically",
          "fr": "Il crée un nouveau thread automatiquement"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It prevents threads from needing mutexes",
          "fr": "Il dispense d'utiliser des mutexes"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::lock_guard guarantees mutex release even if an exception is thrown, preventing deadlocks.",
      "fr": "std::lock_guard garantit la libération du mutex même en cas d'exception, évitant les blocages."
    }
  }
];

const LESSON_QUIZZES = {
  "1": {
    "question": {
      "en": "What stream object is used to output text to the console in C++?",
      "fr": "Quel objet de flux est utilisé pour afficher du texte dans la console en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "std::cout",
          "fr": "std::cout"
        },
        "correct": true
      },
      {
        "text": {
          "en": "std::cin",
          "fr": "std::cin"
        },
        "correct": false
      },
      {
        "text": {
          "en": "printf_s",
          "fr": "printf_s"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::cout (character output) in <iostream> sends formatted text to the standard console.",
      "fr": "std::cout (character output) dans <iostream> envoie le texte formaté vers la console standard."
    }
  },
  "2": {
    "question": {
      "en": "Which C++ data type should you use to store a single ASCII character?",
      "fr": "Quel type de données C++ doit-on utiliser pour stocker un unique caractère ASCII ?"
    },
    "options": [
      {
        "text": {
          "en": "char",
          "fr": "char"
        },
        "correct": true
      },
      {
        "text": {
          "en": "std::string",
          "fr": "std::string"
        },
        "correct": false
      },
      {
        "text": {
          "en": "byte",
          "fr": "byte"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "char uses single quotes like 'A' and represents an 8-bit character in memory.",
      "fr": "char utilise des guillemets simples comme 'A' et occupe 1 octet en mémoire."
    }
  },
  "3": {
    "question": {
      "en": "What happens if you try to reassign a variable declared with 'const'?",
      "fr": "Que se passe-t-il si vous tentez de réassigner une variable déclarée avec 'const' ?"
    },
    "options": [
      {
        "text": {
          "en": "Compile-time error",
          "fr": "Erreur de compilation"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Runtime warning",
          "fr": "Avertissement à l'exécution"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The value silently changes",
          "fr": "La valeur change silencieusement"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "The compiler rejects assignments to read-only const variables at compile time.",
      "fr": "Le compilateur rejette les affectations aux variables const en lecture seule dès la compilation."
    }
  },
  "4": {
    "question": {
      "en": "Which operator is used to access an entity inside a specific namespace?",
      "fr": "Quel opérateur permet d'accéder à une entité située dans un espace de noms spécifique ?"
    },
    "options": [
      {
        "text": {
          "en": "Scope resolution operator (::)",
          "fr": "Opérateur de résolution de portée (::)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Member access dot (.)",
          "fr": "Point d'accès membre (.)"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Pointer arrow (->)",
          "fr": "Flèche de pointeur (->)"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "The scope resolution operator (::) tells the compiler which namespace to look inside.",
      "fr": "L'opérateur de résolution de portée (::) indique au compilateur dans quel namespace chercher."
    }
  },
  "5": {
    "question": {
      "en": "What is the preferred modern C++ keyword to define type aliases instead of 'typedef'?",
      "fr": "Quel mot-clé moderne en C++ est recommandé pour définir un alias de type plutôt que 'typedef' ?"
    },
    "options": [
      {
        "text": {
          "en": "using",
          "fr": "using"
        },
        "correct": true
      },
      {
        "text": {
          "en": "alias",
          "fr": "alias"
        },
        "correct": false
      },
      {
        "text": {
          "en": "rename",
          "fr": "rename"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "'using new_name = old_type;' is clearer and supports template aliases cleanly.",
      "fr": "'using nom = type;' est plus lisible et supporte directement les alias de templates."
    }
  },
  "6": {
    "question": {
      "en": "What does the modulus operator (%) return in integer arithmetic?",
      "fr": "Que renvoie l'opérateur modulo (%) en arithmétique entière ?"
    },
    "options": [
      {
        "text": {
          "en": "The remainder of the division",
          "fr": "Le reste de la division entière"
        },
        "correct": true
      },
      {
        "text": {
          "en": "The floating-point quotient",
          "fr": "Le quotient en virgule flottante"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The percentage proportion",
          "fr": "Le pourcentage proportionnel"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "For example, 14 % 4 evaluates to 2 because 14 divided by 4 leaves a remainder of 2.",
      "fr": "Par exemple, 14 % 4 donne 2 car 14 divisé par 4 donne un reste de 2."
    }
  },
  "7": {
    "question": {
      "en": "Why is static_cast<double>(intVal) preferred over C-style (double)intVal?",
      "fr": "Pourquoi static_cast<double>(val) est-il préféré au cast à la C (double)val ?"
    },
    "options": [
      {
        "text": {
          "en": "It is checked by the compiler and explicit in intent",
          "fr": "Il est vérifié par le compilateur et explicite d'intention"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It runs faster at runtime",
          "fr": "Il s'exécute plus vite à l'exécution"
        },
        "correct": false
      },
      {
        "text": {
          "en": "C-style cast is deprecated and illegal in C++20",
          "fr": "Le cast C est déprécié et illégal en C++20"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "static_cast prevents unintended dangerous type conversions at compile-time.",
      "fr": "static_cast évite les conversions de types dangereuses et accidentelles dès la compilation."
    }
  },
  "8": {
    "question": {
      "en": "Why does std::cin >> fail when reading a full name like 'Bro Code'?",
      "fr": "Pourquoi std::cin >> échoue-t-il lors de la saisie d'un nom complet comme 'Bro Code' ?"
    },
    "options": [
      {
        "text": {
          "en": "It stops reading at whitespace (spaces, tabs, newlines)",
          "fr": "Il s'arrête dès le premier espace blanc (espace, tabulation, saut de ligne)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "std::cin cannot read std::string",
          "fr": "std::cin ne peut pas lire de std::string"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Strings cannot exceed 4 characters",
          "fr": "Les chaînes ne peuvent pas dépasser 4 caractères"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::cin extraction stops at whitespace. Use std::getline(std::cin, str) to read full lines.",
      "fr": "L'extraction std::cin s'arrête au premier espace. Utilisez std::getline(std::cin, str) pour lire toute la ligne."
    }
  },
  "9": {
    "question": {
      "en": "Which standard header must be included to use sqrt(), pow(), and round()?",
      "fr": "Quel en-tête standard doit-on inclure pour utiliser sqrt(), pow() et round() ?"
    },
    "options": [
      {
        "text": {
          "en": "<cmath>",
          "fr": "<cmath>"
        },
        "correct": true
      },
      {
        "text": {
          "en": "<maths>",
          "fr": "<maths>"
        },
        "correct": false
      },
      {
        "text": {
          "en": "<algorithm>",
          "fr": "<algorithm>"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "#include <cmath> provides standard mathematical functions.",
      "fr": "#include <cmath> fournit les fonctions mathématiques standard."
    }
  },
  "10": {
    "question": {
      "en": "What does C++ return when calculating the square root of a negative float using std::sqrt(-1.0)?",
      "fr": "Que renvoie C++ lors du calcul de la racine carrée d'un flottant négatif avec std::sqrt(-1.0) ?"
    },
    "options": [
      {
        "text": {
          "en": "NaN (Not-a-Number, checked with std::isnan)",
          "fr": "NaN (Not-a-Number, vérifiable avec std::isnan)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Throws an immediate std::runtime_error exception",
          "fr": "Déclenche une exception std::runtime_error"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Returns 0.0 silently",
          "fr": "Renvoie silencieusement 0.0"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "In C++, taking the square root of a negative float does not throw an exception; it returns NaN, which should be validated using std::isnan().",
      "fr": "std::sqrt d'un nombre négatif ne lève pas d'exception mais produit NaN, vérifiable avec std::isnan()."
    }
  },
  "11": {
    "question": {
      "en": "What happens if all conditions in an if - else if chain evaluate to false and there is an else block?",
      "fr": "Que se passe-t-il si toutes les conditions d'un if - else if sont fausses et qu'il y a un bloc else ?"
    },
    "options": [
      {
        "text": {
          "en": "The else block executes",
          "fr": "Le bloc else s'exécute"
        },
        "correct": true
      },
      {
        "text": {
          "en": "The program crashes",
          "fr": "Le programme plante"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The first if block re-executes",
          "fr": "Le premier bloc if s'exécute à nouveau"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "The else block acts as the fallback default when no preceding conditions match.",
      "fr": "Le bloc else fait office d'alternative par défaut lorsque aucune condition précédente n'est remplie."
    }
  },
  "12": {
    "question": {
      "en": "Why is the 'break;' statement essential inside each case of a switch statement?",
      "fr": "Pourquoi l'instruction 'break;' est-elle essentielle à la fin de chaque case d'un switch ?"
    },
    "options": [
      {
        "text": {
          "en": "To prevent falling through to execute subsequent cases",
          "fr": "Pour empêcher l'exécution en cascade des cases suivants (fall-through)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "To reset the variable value",
          "fr": "Pour réinitialiser la valeur de la variable"
        },
        "correct": false
      },
      {
        "text": {
          "en": "To return from the enclosing function",
          "fr": "Pour quitter la fonction appelante"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Without break;, execution continues down through all remaining cases regardless of condition.",
      "fr": "Sans break;, l'exécution continue sans interruption dans les blocs case suivants."
    }
  },
  "13": {
    "question": {
      "en": "Why must you check if the divisor is zero before performing division in a calculator?",
      "fr": "Pourquoi doit-on vérifier si le diviseur est nul avant d'effectuer une division dans une calculatrice ?"
    },
    "options": [
      {
        "text": {
          "en": "Division by zero causes undefined behavior or runtime crash",
          "fr": "La division par zéro provoque un plantage ou comportement indéfini"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It produces the number zero automatically",
          "fr": "Elle produit automatiquement le nombre zéro"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The compiler will delete the executable",
          "fr": "Le compilateur supprime l'exécutable"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Dividing by zero in integer arithmetic causes an immediate program crash / SIGFPE signal.",
      "fr": "La division par zéro en arithmétique entière déclenche un plantage immédiat."
    }
  },
  "14": {
    "question": {
      "en": "What is the return value of (grade >= 60) ? \"Pass\" : \"Fail\" when grade = 75?",
      "fr": "Quelle est la valeur de retour de (grade >= 60) ? \"Pass\" : \"Fail\" quand grade = 75 ?"
    },
    "options": [
      {
        "text": {
          "en": "\"Pass\"",
          "fr": "\"Pass\""
        },
        "correct": true
      },
      {
        "text": {
          "en": "\"Fail\"",
          "fr": "\"Fail\""
        },
        "correct": false
      },
      {
        "text": {
          "en": "true",
          "fr": "true"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Since (75 >= 60) is true, the ternary operator evaluates and returns the first expression: \"Pass\".",
      "fr": "Puisque (75 >= 60) est vrai, l'opérateur ternaire évalue et renvoie la première expression : \"Pass\"."
    }
  },
  "15": {
    "question": {
      "en": "In the expression 'if (A && B)', when is expression B NOT evaluated?",
      "fr": "Dans l'expression 'if (A && B)', quand l'expression B n'est-elle PAS évaluée ?"
    },
    "options": [
      {
        "text": {
          "en": "When A is false (short-circuit evaluation)",
          "fr": "Quand A est faux (évaluation en court-circuit)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "When A is true",
          "fr": "Quand A est vrai"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Expression B is always evaluated",
          "fr": "L'expression B est toujours évaluée"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Logical AND (&&) short-circuits: if the first operand is false, the result is guaranteed false.",
      "fr": "Le ET logique (&&) fonctionne en court-circuit : si le premier terme est faux, le second n'est pas évalué."
    }
  },
  "16": {
    "question": {
      "en": "In C++, what is the exact evaluated result of 'double result = 5 / 9;'?",
      "fr": "En C++, quel est le résultat exact de l'instruction 'double result = 5 / 9;' ?"
    },
    "options": [
      {
        "text": {
          "en": "0.0 (integer division truncates before assigning to double)",
          "fr": "0.0 (la division entière tronque avant l'assignation au double)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "0.555555...",
          "fr": "0.555555..."
        },
        "correct": false
      },
      {
        "text": {
          "en": "Compiler error: type mismatch",
          "fr": "Erreur de compilation : types incompatibles"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "When both operands are integer literals, C++ performs integer division, discarding the remainder before assigning. Use '5.0 / 9' to get floating-point division.",
      "fr": "Deux opérandes entiers produisent une division entière tronquée à 0. Écrivez '5.0 / 9' pour un résultat décimal."
    }
  },
  "17": {
    "question": {
      "en": "What does string.find(char) return if the character is not found in the string?",
      "fr": "Que renvoie string.find(char) si le caractère recherché n'est pas présent dans la chaîne ?"
    },
    "options": [
      {
        "text": {
          "en": "std::string::npos",
          "fr": "std::string::npos"
        },
        "correct": true
      },
      {
        "text": {
          "en": "-1",
          "fr": "-1"
        },
        "correct": false
      },
      {
        "text": {
          "en": "0",
          "fr": "0"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::string::npos is the standard sentinel value representing 'no position / not found'.",
      "fr": "std::string::npos est la valeur sentinelle standard indiquant l'absence de correspondance."
    }
  },
  "18": {
    "question": {
      "en": "What causes an infinite loop in a while loop statement?",
      "fr": "Qu'est-ce qui provoque une boucle infinie dans une instruction while ?"
    },
    "options": [
      {
        "text": {
          "en": "The loop condition never evaluates to false",
          "fr": "La condition de boucle ne devient jamais fausse"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Using semicolons inside braces",
          "fr": "L'utilisation de points-virgules entre accolades"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Declaring variables inside main",
          "fr": "La déclaration de variables dans main"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "A while loop will repeat forever unless its condition is eventually modified to false or broken.",
      "fr": "Une boucle while se répète indéfiniment si sa condition ne devient jamais fausse."
    }
  },
  "19": {
    "question": {
      "en": "What is the primary difference between a while loop and a do-while loop?",
      "fr": "Quelle est la différence fondamentale entre une boucle while et do-while ?"
    },
    "options": [
      {
        "text": {
          "en": "do-while always executes the body at least once",
          "fr": "do-while exécute toujours le corps au moins une fois"
        },
        "correct": true
      },
      {
        "text": {
          "en": "while is faster at runtime",
          "fr": "while est plus rapide à l'exécution"
        },
        "correct": false
      },
      {
        "text": {
          "en": "do-while does not check conditions",
          "fr": "do-while ne teste pas de condition"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "A do-while loop tests its condition at the bottom, guaranteeing at least one execution pass.",
      "fr": "La boucle do-while teste sa condition en fin de bloc, garantissant au moins un passage."
    }
  },
  "20": {
    "question": {
      "en": "What are the three components inside a standard for loop header: for(A; B; C)?",
      "fr": "Quels sont les trois éléments de l'en-tête for(A; B; C) ?"
    },
    "options": [
      {
        "text": {
          "en": "Initialization; Condition; Update/Increment",
          "fr": "Initialisation ; Condition ; Mise à jour/Incrément"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Condition; Body; Break",
          "fr": "Condition ; Corps ; Interruption"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Start; Finish; Output",
          "fr": "Début ; Fin ; Affichage"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "for (int i = 0; i < N; i++) sets initial counter, checks continuation, and increments.",
      "fr": "for (int i = 0; i < N; i++) initialise le compteur, vérifie la poursuite et incrémente."
    }
  },
  "21": {
    "question": {
      "en": "What is the effect of the 'continue;' statement inside a loop?",
      "fr": "Quel est l'effet de l'instruction 'continue;' dans une boucle ?"
    },
    "options": [
      {
        "text": {
          "en": "Skips the rest of the current iteration and jumps to the next iteration",
          "fr": "Ignore le reste du tour actuel et passe immédiatement au tour suivant"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Terminates the loop completely",
          "fr": "Termine la boucle définitivement"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Restarts the loop from index 0",
          "fr": "Recommence la boucle à l'index 0"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "continue immediately bypasses remaining statements in the current iteration step.",
      "fr": "continue saute les instructions restantes de l'itération courante sans quitter la boucle."
    }
  },
  "22": {
    "question": {
      "en": "If an outer loop runs 4 times and an inner nested loop runs 5 times, how many total times does the inner body execute?",
      "fr": "Si une boucle externe s'exécute 4 fois et une boucle imbriquée 5 fois, combien de fois le corps s'exécute-t-il au total ?"
    },
    "options": [
      {
        "text": {
          "en": "20 times",
          "fr": "20 fois"
        },
        "correct": true
      },
      {
        "text": {
          "en": "9 times",
          "fr": "9 fois"
        },
        "correct": false
      },
      {
        "text": {
          "en": "4 times",
          "fr": "4 fois"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Total iterations = outer_iterations * inner_iterations (4 * 5 = 20).",
      "fr": "Nombre total d'itérations = itérations_externes * itérations_internes (4 * 5 = 20)."
    }
  },
  "23": {
    "question": {
      "en": "Why is the legacy C-style rand() function discouraged in modern production C++?",
      "fr": "Pourquoi la fonction C traditionnelle rand() est-elle déconseillée en C++ moderne ?"
    },
    "options": [
      {
        "text": {
          "en": "It has poor statistical distribution (modulo bias) and uses global state, making it not thread-safe",
          "fr": "Elle a une mauvaise distribution statistique (biais de modulo) et n'est pas thread-safe"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It cannot generate numbers greater than 100",
          "fr": "Elle ne peut pas générer de nombres supérieurs à 100"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It requires the heavy <iostream> header to compile",
          "fr": "Elle nécessite obligatoirement <iostream>"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::rand() has low entropy, causes modulo bias with %, and uses shared global state. Modern C++ uses <random> (std::mt19937 and distributions) instead.",
      "fr": "std::rand() souffre de biais statistiques et d'état global non thread-safe. Utilisez <random> en C++ moderne."
    }
  },
  "24": {
    "question": {
      "en": "Which modern C++ standard library component generates uniformly distributed random integers without modulo bias?",
      "fr": "Quel composant moderne de la bibliothèque standard génère des entiers aléatoires uniformément sans biais ?"
    },
    "options": [
      {
        "text": {
          "en": "std::uniform_int_distribution<int> dist(1, 6);",
          "fr": "std::uniform_int_distribution<int> dist(1, 6);"
        },
        "correct": true
      },
      {
        "text": {
          "en": "(std::rand() % 6) + 1",
          "fr": "(std::rand() % 6) + 1"
        },
        "correct": false
      },
      {
        "text": {
          "en": "std::random_range(1, 6)",
          "fr": "std::random_range(1, 6)"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::uniform_int_distribution completely eliminates modulo bias and guarantees uniform probability across the closed interval [min, max].",
      "fr": "std::uniform_int_distribution élimine tout biais de reste de division et garantit une probabilité uniforme."
    }
  },
  "25": {
    "question": {
      "en": "In modern C++, what is the role of 'std::random_device' when initializing a Mersenne Twister engine?",
      "fr": "En C++ moderne, quel est le rôle de 'std::random_device' pour initialiser un moteur Mersenne Twister ?"
    },
    "options": [
      {
        "text": {
          "en": "It provides non-deterministic hardware-based entropy to seed the pseudo-random engine",
          "fr": "Il fournit de l'entropie matérielle non déterministe pour initialiser le générateur"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It prints random bytes to standard output",
          "fr": "Il affiche des octets aléatoires dans la console"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It speeds up integer multiplication",
          "fr": "Il accélère les multiplications d'entiers"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::random_device queries hardware entropy (e.g. CPU thermal noise) to produce a non-deterministic seed for fast generators like std::mt19937.",
      "fr": "std::random_device exploite l'entropie matérielle pour créer une graine non déterministe supérieure à time(nullptr)."
    }
  },
  "26": {
    "question": {
      "en": "What does a function return type of 'void' indicate?",
      "fr": "Que signifie un type de retour 'void' pour une fonction ?"
    },
    "options": [
      {
        "text": {
          "en": "The function does not return any value to the caller",
          "fr": "La fonction ne renvoie aucune valeur au point d'appel"
        },
        "correct": true
      },
      {
        "text": {
          "en": "The function returns an integer 0",
          "fr": "La fonction renvoie l'entier 0"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The function accepts zero parameters",
          "fr": "La fonction n'accepte aucun paramètre"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "void means the function performs an action (like printing or modifying state) without returning data.",
      "fr": "void indique que la fonction effectue une action sans renvoyer de données."
    }
  },
  "27": {
    "question": {
      "en": "What happens to remaining code inside a function after a 'return' statement is executed?",
      "fr": "Qu'arrive-t-il au code situé après une instruction 'return' dans une fonction ?"
    },
    "options": [
      {
        "text": {
          "en": "It is skipped; the function immediately exits",
          "fr": "Il est ignoré ; la fonction se termine immédiatement"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It executes in the background",
          "fr": "Il s'exécute en tâche de fond"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It causes a compiler warning",
          "fr": "Il génère un avertissement de compilation"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Executing 'return' hands back control to the caller immediately, ignoring any remaining lines.",
      "fr": "L'instruction 'return' rend immédiatement la main à l'appelant en ignorant les lignes suivantes."
    }
  },
  "28": {
    "question": {
      "en": "Can two functions in C++ share the same name if they only differ by return type?",
      "fr": "Deux fonctions peuvent-elles porter le même nom si seul leur type de retour est différent ?"
    },
    "options": [
      {
        "text": {
          "en": "No, C++ overload resolution requires different parameter types or counts",
          "fr": "Non, la surcharge en C++ exige des types ou un nombre de paramètres différents"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Yes, return type overloading is fully supported",
          "fr": "Oui, la surcharge par type de retour est permise"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Only if declared static",
          "fr": "Seulement si elles sont déclarées static"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Function overloading in C++ requires distinct parameter signatures; return type alone is not enough.",
      "fr": "La surcharge exige des paramètres différents ; le type de retour seul ne suffit pas."
    }
  },
  "29": {
    "question": {
      "en": "How can you access a global variable 'x' if a local variable also named 'x' is in scope?",
      "fr": "Comment accéder à une variable globale 'x' masquée par une variable locale portant le même nom ?"
    },
    "options": [
      {
        "text": {
          "en": "Using the unary scope resolution operator: ::x",
          "fr": "En utilisant l'opérateur unaire de portée : ::x"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Using global.x",
          "fr": "En écrivant global.x"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It is impossible; the global variable is deleted",
          "fr": "C'est impossible ; la variable globale est détruite"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Prefixing with :: (unary scope resolution) accesses the global variable in global scope.",
      "fr": "Le préfixe :: (résolution de portée globale unaire) permet d'accéder à la variable globale."
    }
  },
  "30": {
    "question": {
      "en": "Why should non-trivial objects (e.g. std::string, std::vector) be passed to functions as 'const Type&'?",
      "fr": "Pourquoi passer les objets non triviaux (ex: std::string, std::vector) en 'const Type&' ?"
    },
    "options": [
      {
        "text": {
          "en": "It avoids expensive deep memory copies while strictly guaranteeing read-only immutability",
          "fr": "Cela évite les copies mémoires coûteuses tout en garantissant l'immuabilité en lecture seule"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It automatically converts the object to a pointer so it can be mutated",
          "fr": "Cela convertit l'objet en pointeur pour pouvoir le modifier"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Because C++ does not allow passing objects by value",
          "fr": "Car C++ interdit le passage par valeur des objets"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Passing large objects by value invokes their copy constructor, which allocates heap memory. const Type& is zero-copy and compiler-enforced read-only.",
      "fr": "Le passage par valeur déclenche le constructeur de copie et alloue la mémoire. const Type& est sans copie et en lecture seule."
    }
  },
  "31": {
    "question": {
      "en": "Why is 'if (ptr != nullptr && ptr->isValid())' safe against crashes, whereas using '&' would crash?",
      "fr": "Pourquoi 'if (ptr != nullptr && ptr->isValid())' est-il sûr, alors qu'utiliser '&' crasherait ?"
    },
    "options": [
      {
        "text": {
          "en": "&& uses short-circuit evaluation: if the left operand is false, the right operand is never evaluated",
          "fr": "&& utilise l'évaluation en court-circuit : si l'opérande gauche est faux, la droite n'est jamais évaluée"
        },
        "correct": true
      },
      {
        "text": {
          "en": "&& converts null pointers into dummy temporary objects automatically",
          "fr": "&& convertit automatiquement les pointeurs nuls en objets temporaires"
        },
        "correct": false
      },
      {
        "text": {
          "en": "& is strictly prohibited in modern C++ if statements",
          "fr": "& est strictement interdit dans les if en C++"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "&& guarantees short-circuiting: when ptr == nullptr, evaluation halts immediately, safely avoiding dereferencing a null pointer.",
      "fr": "&& garantit le court-circuit : si ptr est nul, la suite n'est pas exécutée, évitant un crash de déréférencement nul."
    }
  },
  "32": {
    "question": {
      "en": "What is the index of the first element in a C++ array?",
      "fr": "Quel est l'index du premier élément d'un tableau en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "0",
          "fr": "0"
        },
        "correct": true
      },
      {
        "text": {
          "en": "1",
          "fr": "1"
        },
        "correct": false
      },
      {
        "text": {
          "en": "-1",
          "fr": "-1"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "C++ arrays are strictly 0-indexed; array[0] refers to the first element.",
      "fr": "Les tableaux C++ commencent strictement à l'indice 0 ; array[0] est le premier élément."
    }
  },
  "33": {
    "question": {
      "en": "How do you calculate the number of elements in a raw array 'int arr[10]' using sizeof?",
      "fr": "Comment calculer le nombre d'éléments d'un tableau 'int arr[10]' avec sizeof ?"
    },
    "options": [
      {
        "text": {
          "en": "sizeof(arr) / sizeof(arr[0])",
          "fr": "sizeof(arr) / sizeof(arr[0])"
        },
        "correct": true
      },
      {
        "text": {
          "en": "sizeof(arr)",
          "fr": "sizeof(arr)"
        },
        "correct": false
      },
      {
        "text": {
          "en": "arr.length()",
          "fr": "arr.length()"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Total byte size divided by the byte size of a single element yields the element count.",
      "fr": "La taille totale en octets divisée par la taille d'un seul élément donne le nombre d'éléments."
    }
  },
  "34": {
    "question": {
      "en": "What condition should an index loop use to iterate through an array of 'size' elements?",
      "fr": "Quelle condition de boucle for indexée doit-on utiliser pour un tableau de 'size' éléments ?"
    },
    "options": [
      {
        "text": {
          "en": "i < size",
          "fr": "i < size"
        },
        "correct": true
      },
      {
        "text": {
          "en": "i <= size",
          "fr": "i <= size"
        },
        "correct": false
      },
      {
        "text": {
          "en": "i == size",
          "fr": "i == size"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Valid indices are 0 through size - 1. Using i <= size accesses invalid memory beyond bounds.",
      "fr": "Les index valides vont de 0 à size - 1. Utiliser i <= size lit en dehors du tableau."
    }
  },
  "35": {
    "question": {
      "en": "Why should you prefer 'const auto& item' in a range-based for loop over 'auto item' for large objects?",
      "fr": "Pourquoi préférer 'const auto& item' dans une boucle for-each pour de gros objets ?"
    },
    "options": [
      {
        "text": {
          "en": "It avoids expensive copies while guaranteeing read-only safety",
          "fr": "Elle évite les copies coûteuses tout en garantissant la lecture seule"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It allows modifying the original elements",
          "fr": "Elle permet de modifier les originaux"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Range-based for requires references to compile",
          "fr": "La boucle for-each l'exige pour compiler"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "const auto& binds a read-only reference directly to the container element without copying.",
      "fr": "const auto& lie une référence en lecture seule à chaque élément sans aucune copie."
    }
  },
  "36": {
    "question": {
      "en": "What happens when you pass a raw array to a function parameter (e.g. void fn(int arr[]))?",
      "fr": "Que se produit-il lorsqu'on passe un tableau brut en paramètre de fonction ?"
    },
    "options": [
      {
        "text": {
          "en": "The array decays into a pointer (int*), losing its size information",
          "fr": "Le tableau dégénère en pointeur (int*) et perd sa taille"
        },
        "correct": true
      },
      {
        "text": {
          "en": "The entire array is cloned on the stack",
          "fr": "Le tableau entier est cloné sur la pile"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The compiler throws an error",
          "fr": "Le compilateur signale une erreur"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Array decay converts the array to a pointer to its first element; always pass size separately.",
      "fr": "La dégénérescence convertit le tableau en pointeur vers le 1er élément ; la taille doit être passée."
    }
  },
  "37": {
    "question": {
      "en": "What is the average time complexity of Linear Search on an unsorted array of N elements?",
      "fr": "Quelle est la complexité temporelle moyenne d'une recherche linéaire sur un tableau de N éléments ?"
    },
    "options": [
      {
        "text": {
          "en": "O(N)",
          "fr": "O(N)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "O(1)",
          "fr": "O(1)"
        },
        "correct": false
      },
      {
        "text": {
          "en": "O(log N)",
          "fr": "O(log N)"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Linear search checks each element one by one, requiring up to N comparisons in the worst case.",
      "fr": "La recherche linéaire inspecte les éléments un par un, nécessitant jusqu'à N étapes au pire."
    }
  },
  "38": {
    "question": {
      "en": "How does Bubble Sort arrange elements into ascending order?",
      "fr": "Comment le tri à bulles (Bubble Sort) ordonne-t-il les éléments en ordre croissant ?"
    },
    "options": [
      {
        "text": {
          "en": "Repeatedly compares adjacent pairs and swaps them if out of order",
          "fr": "Compare les paires adjacentes et les échange si elles sont dans le désordre"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Divides the array into halves recursively",
          "fr": "Divise récursivement le tableau en deux"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Inserts elements into a binary search tree",
          "fr": "Insère les éléments dans un arbre binaire"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Bubble Sort bubbles the largest remaining value to the end of the array each pass.",
      "fr": "Le tri à bulles fait remonter le plus grand élément restant à la fin du tableau à chaque tour."
    }
  },
  "39": {
    "question": {
      "en": "What header is required to use the std::fill algorithm in C++?",
      "fr": "Quel en-tête est requis pour utiliser l'algorithme std::fill en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "<algorithm>",
          "fr": "<algorithm>"
        },
        "correct": true
      },
      {
        "text": {
          "en": "<vector>",
          "fr": "<vector>"
        },
        "correct": false
      },
      {
        "text": {
          "en": "<array>",
          "fr": "<array>"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::fill is defined inside <algorithm>.",
      "fr": "std::fill est défini dans <algorithm>."
    }
  },
  "40": {
    "question": {
      "en": "When populating an array with user input, why must you track current count against maximum capacity?",
      "fr": "Lors du remplissage d'un tableau par saisie utilisateur, pourquoi surveiller la capacité maximale ?"
    },
    "options": [
      {
        "text": {
          "en": "To prevent writing past the array bounds and causing buffer overflows",
          "fr": "Pour éviter d'écrire hors limites et provoquer un débordement de tampon"
        },
        "correct": true
      },
      {
        "text": {
          "en": "C++ arrays automatically double when full",
          "fr": "Les tableaux C++ doublent automatiquement quand ils sont pleins"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The compiler requires it",
          "fr": "Le compilateur l'exige"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Fixed-size arrays cannot expand; writing beyond bounds leads to memory corruption.",
      "fr": "Les tableaux bruts ont une taille fixe ; dépasser leur capacité corrompt la mémoire."
    }
  },
  "41": {
    "question": {
      "en": "How do you access the element in row 1, column 2 of a 2D array 'grid'?",
      "fr": "Comment accéder à l'élément de la ligne 1, colonne 2 d'une matrice 2D 'grid' ?"
    },
    "options": [
      {
        "text": {
          "en": "grid[1][2]",
          "fr": "grid[1][2]"
        },
        "correct": true
      },
      {
        "text": {
          "en": "grid[1, 2]",
          "fr": "grid[1, 2]"
        },
        "correct": false
      },
      {
        "text": {
          "en": "grid.at(1, 2)",
          "fr": "grid.at(1, 2)"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "2D arrays use chained brackets: array[rowIndex][columnIndex].",
      "fr": "Les tableaux 2D utilisent des crochets successifs : tab[indexLigne][indexColonne]."
    }
  },
  "42": {
    "question": {
      "en": "Why is an Array-of-Structs or class container preferred over multiple parallel arrays in C++?",
      "fr": "Pourquoi préférer un tableau de structures à des tableaux parallèles en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "It enforces data encapsulation and guarantees CPU cache spatial locality for related fields",
          "fr": "Cela assure l'encapsulation et garantit la localité spatiale dans le cache CPU"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Parallel arrays take 10x more physical RAM in 64-bit systems",
          "fr": "Les tableaux parallèles occupent 10 fois plus de RAM"
        },
        "correct": false
      },
      {
        "text": {
          "en": "C++ compilers limit functions to a maximum of two arrays",
          "fr": "Les compilateurs C++ limitent le nombre de tableaux à deux"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Encapsulating related properties inside a struct/class keeps attributes contiguous in memory cache lines and avoids index-desynchronization bugs.",
      "fr": "Regrouper les champs dans une structure maintient les données contiguës dans les lignes de cache CPU et évite les désynchronisations d'indices."
    }
  },
  "43": {
    "question": {
      "en": "What does the address-of operator (&x) return?",
      "fr": "Que renvoie l'opérateur d'adresse (&x) ?"
    },
    "options": [
      {
        "text": {
          "en": "The hexadecimal memory address where variable x is located in RAM",
          "fr": "L'adresse mémoire hexadécimale où se trouve la variable x en RAM"
        },
        "correct": true
      },
      {
        "text": {
          "en": "The value stored inside x",
          "fr": "La valeur stockée dans x"
        },
        "correct": false
      },
      {
        "text": {
          "en": "A duplicate copy of x",
          "fr": "Une copie identique de x"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "&x gives the memory address location where the variable resides in memory.",
      "fr": "&x donne l'emplacement physique en mémoire où réside la variable."
    }
  },
  "44": {
    "question": {
      "en": "Why does passing by reference (void swap(int& a, int& b)) allow modifying the original variables?",
      "fr": "Pourquoi le passage par référence permet-il de modifier les variables originales ?"
    },
    "options": [
      {
        "text": {
          "en": "References alias the caller's actual memory addresses instead of creating copies",
          "fr": "Les références sont des alias directs de la mémoire originale sans copie"
        },
        "correct": true
      },
      {
        "text": {
          "en": "References create global variables",
          "fr": "Les références créent des variables globales"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Because reference parameters run on a different thread",
          "fr": "Car elles tournent sur un thread séparé"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "A reference is an immutable alias; any read or write operates directly on the caller's variable.",
      "fr": "Une référence est un alias direct ; toute lecture ou écriture modifie la variable source."
    }
  },
  "45": {
    "question": {
      "en": "What is the main benefit of declaring a parameter as 'const std::string& str'?",
      "fr": "Quel est le bénéfice majeur de déclarer un paramètre comme 'const std::string& str' ?"
    },
    "options": [
      {
        "text": {
          "en": "Zero-copy performance combined with read-only safety",
          "fr": "Performance sans copie combinée à la sécurité de la lecture seule"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Allows the function to alter the caller's string",
          "fr": "Permet de modifier la chaîne appelante"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Converts strings to integer hashes automatically",
          "fr": "Convertit automatiquement en hash entier"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "const Type& prevents deep copying large objects while strictly preventing accidental modifications.",
      "fr": "const Type& évite les copies coûteuses tout en interdisant toute modification accidentelle."
    }
  },
  "46": {
    "question": {
      "en": "When converting an ASCII digit character 'c' to its integer value, why is 'c - '0'' canonical and guaranteed safe in C++?",
      "fr": "Pour convertir un caractère chiffre 'c' en entier, pourquoi 'c - '0'' est-il canonique et garanti par la norme C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "The C++ standard guarantees that ASCII digit characters '0' through '9' have consecutive contiguous values",
          "fr": "La norme C++ garantit que les caractères chiffres '0' à '9' ont des valeurs entières consécutives et contiguës"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Because '0' is automatically converted to nullptr",
          "fr": "Car '0' est automatiquement converti en nullptr"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Because char is converted into a 64-bit float before subtraction",
          "fr": "Car le char est converti en float 64-bit"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "The C++ standard explicitly guarantees that digit characters '0' through '9' are contiguous in memory, making (c - '0') zero-cost and completely portable.",
      "fr": "La norme C++ garantit la contiguïté des codes de '0' à '9'. (c - '0') est une opération optimale en coût zéro."
    }
  },
  "47": {
    "question": {
      "en": "What is the dereference operator (*) used for with a pointer?",
      "fr": "À quoi sert l'opérateur de déréférencement (*) appliqué à un pointeur ?"
    },
    "options": [
      {
        "text": {
          "en": "To read or write the actual value stored at the address pointed to",
          "fr": "À lire ou modifier la valeur stockée à l'adresse pointée"
        },
        "correct": true
      },
      {
        "text": {
          "en": "To obtain the pointer's own address",
          "fr": "À obtenir l'adresse du pointeur lui-même"
        },
        "correct": false
      },
      {
        "text": {
          "en": "To multiply the pointer by 2",
          "fr": "À multiplier le pointeur par 2"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "*ptr dereferences the pointer, allowing direct access to the pointed-to object.",
      "fr": "*ptr déréférence le pointeur et donne un accès direct à la valeur ciblée."
    }
  },
  "48": {
    "question": {
      "en": "Why should unassigned pointers always be initialized to 'nullptr' in modern C++?",
      "fr": "Pourquoi un pointeur non assigné doit-il toujours être initialisé à 'nullptr' ?"
    },
    "options": [
      {
        "text": {
          "en": "To prevent wild / dangling pointers containing random garbage memory addresses",
          "fr": "Pour éviter les pointeurs fous contenant des adresses mémoires aléatoires"
        },
        "correct": true
      },
      {
        "text": {
          "en": "nullptr allocates 4 bytes on the heap",
          "fr": "nullptr alloue 4 octets sur le tas"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Modern C++ does not allow declaring pointers without nullptr",
          "fr": "C++ moderne interdit de déclarer un pointeur sans nullptr"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Initializing to nullptr allows safe checking (if (ptr != nullptr)) before dereferencing.",
      "fr": "Initialiser à nullptr permet de tester la validité (if (ptr != nullptr)) avant utilisation."
    }
  },
  "49": {
    "question": {
      "en": "How are 2D arrays (e.g. int grid[3][3]) organized in physical memory in C++?",
      "fr": "Comment les tableaux 2D (ex: int grid[3][3]) sont-ils organisés en mémoire physique en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "In contiguous row-major order: all elements of row 0, followed by row 1, then row 2",
          "fr": "Dans l'ordre ligne par ligne (row-major) contigu : toute la ligne 0, puis la ligne 1, puis la ligne 2"
        },
        "correct": true
      },
      {
        "text": {
          "en": "In column-major order: column 0 elements followed by column 1",
          "fr": "Dans l'ordre colonne par colonne (column-major)"
        },
        "correct": false
      },
      {
        "text": {
          "en": "As scattered linked blocks allocated dynamically across RAM",
          "fr": "Comme des blocs dispersés dans la RAM"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "C++ stores multidimensional arrays in row-major order in a single contiguous memory block. Iterating row-by-row (grid[r][c]) maximizes CPU cache line hits.",
      "fr": "C++ utilise l'ordre row-major contigu. Itérer ligne par ligne maximise l'efficacité du cache processeur."
    }
  },
  "50": {
    "question": {
      "en": "What happens if you allocate heap memory with 'new' but forget to call 'delete'?",
      "fr": "Que se passe-t-il si vous allouez de la mémoire avec 'new' sans jamais appeler 'delete' ?"
    },
    "options": [
      {
        "text": {
          "en": "A memory leak occurs; RAM remains consumed until program termination",
          "fr": "Une fuite de mémoire survient ; la RAM reste occupée jusqu'à la fin du programme"
        },
        "correct": true
      },
      {
        "text": {
          "en": "The memory is automatically deleted on function return",
          "fr": "La mémoire est libérée automatiquement à la fin de la fonction"
        },
        "correct": false
      },
      {
        "text": {
          "en": "The CPU triggers an immediate hardware reset",
          "fr": "Le processeur redémarre la machine"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Heap memory allocated with 'new' must be explicitly freed with 'delete' to prevent leaks.",
      "fr": "La mémoire allouée avec 'new' doit être libérée manuellement avec 'delete' pour éviter les fuites."
    }
  },
  "51": {
    "question": {
      "en": "What must every recursive function have to prevent infinite recursion and stack overflow?",
      "fr": "Que doit posséder toute fonction récursive pour éviter un débordement de pile (stack overflow) ?"
    },
    "options": [
      {
        "text": {
          "en": "A base case that stops recursion without making further recursive calls",
          "fr": "Un cas de base qui arrête la récursion sans nouvel appel"
        },
        "correct": true
      },
      {
        "text": {
          "en": "A loop counter",
          "fr": "Un compteur de boucle for"
        },
        "correct": false
      },
      {
        "text": {
          "en": "A global variable",
          "fr": "Une variable globale"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "The base case halts recursion; without it, function calls consume all call stack space.",
      "fr": "Le cas de base arrête la récursion ; sans lui, la pile d'appels sature et fait planter le programme."
    }
  },
  "52": {
    "question": {
      "en": "How do function templates (template <typename T>) work under the hood during compilation?",
      "fr": "Comment les patrons de fonctions (template <typename T>) fonctionnent-ils lors de la compilation ?"
    },
    "options": [
      {
        "text": {
          "en": "The compiler generates concrete function overloads for each invoked data type",
          "fr": "Le compilateur génère les surcharges concrètes pour chaque type utilisé"
        },
        "correct": true
      },
      {
        "text": {
          "en": "They convert all variables into generic void* pointers at runtime",
          "fr": "Ils convertissent tout en pointeurs void* à l'exécution"
        },
        "correct": false
      },
      {
        "text": {
          "en": "They interpret types at runtime like Python",
          "fr": "Ils interprètent les types dynamiquement comme Python"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "C++ templates are zero-cost abstractions instantiated at compile-time with full type safety.",
      "fr": "Les templates C++ sont instanciés à la compilation sans aucun surcoût d'exécution."
    }
  },
  "53": {
    "question": {
      "en": "What is the default access level for members declared inside a C++ 'struct'?",
      "fr": "Quel est le niveau d'accès par défaut des membres d'une 'struct' en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "public",
          "fr": "public"
        },
        "correct": true
      },
      {
        "text": {
          "en": "private",
          "fr": "private"
        },
        "correct": false
      },
      {
        "text": {
          "en": "protected",
          "fr": "protected"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Members of a struct are public by default, whereas members of a class are private by default.",
      "fr": "Les membres d'une struct sont publics par défaut, alors que ceux d'une class sont privés."
    }
  },
  "54": {
    "question": {
      "en": "Why is it best practice to pass a large struct to a read-only function as 'const StructName&'?",
      "fr": "Pourquoi passer une grande structure en 'const StructName&' pour une lecture seule ?"
    },
    "options": [
      {
        "text": {
          "en": "It avoids copying all member variables while protecting them from modification",
          "fr": "Cela évite de copier tous les membres tout en empêchant toute altération"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Structs cannot be passed by value in C++",
          "fr": "Les structs ne peuvent pas être passées par valeur"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It frees the struct memory automatically",
          "fr": "Cela libère automatiquement la mémoire de la struct"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Passing large structs by value copies every single member field; const reference is zero-copy.",
      "fr": "Passer par valeur copie chaque membre ; la référence constante évite tout surcoût."
    }
  },
  "55": {
    "question": {
      "en": "What underlying type represents enum values by default in C++?",
      "fr": "Quel type sous-jacent représente les valeurs d'un enum par défaut en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "Integers (int), starting at 0",
          "fr": "Des entiers (int), débutant à 0"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Strings",
          "fr": "Des chaînes de caractères"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Floating-point numbers",
          "fr": "Des nombres décimaux"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Enum enumerators are assigned consecutive integer values starting from 0 by default.",
      "fr": "Les valeurs d'un enum sont associées à des entiers consécutifs démarrant à 0."
    }
  },
  "56": {
    "question": {
      "en": "What is the difference between a class and an object in Object-Oriented Programming?",
      "fr": "Quelle est la différence entre une classe et un objet en Programmation Orientée Objet ?"
    },
    "options": [
      {
        "text": {
          "en": "A class is the blueprint; an object is a concrete instance of that blueprint",
          "fr": "La classe est le modèle ; l'objet est une instance concrète de ce modèle"
        },
        "correct": true
      },
      {
        "text": {
          "en": "An object is a blueprint; a class is the instance",
          "fr": "L'objet est le modèle ; la classe est l'instance"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Classes and objects are identical concepts",
          "fr": "Classes et objets sont des termes strictement synonymes"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "A class defines properties and methods; objects are instantiated instances in memory.",
      "fr": "La classe définit la structure et les méthodes ; l'objet est l'entité concrète en mémoire."
    }
  },
  "57": {
    "question": {
      "en": "When is a constructor method called in C++?",
      "fr": "Quand la méthode constructeur est-elle appelée en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "Automatically whenever a new object of that class is instantiated",
          "fr": "Automatiquement dès qu'un nouvel objet de la classe est instancié"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Only when explicitly invoked with object.Constructor()",
          "fr": "Seulement si on l'appelle avec objet.Constructeur()"
        },
        "correct": false
      },
      {
        "text": {
          "en": "When the program exits main()",
          "fr": "À la fermeture du programme"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Constructors run automatically at instantiation to set up the object's initial state.",
      "fr": "Le constructeur s'exécute automatiquement à l'instanciation pour initialiser l'objet."
    }
  },
  "58": {
    "question": {
      "en": "What allows constructor overloading to work in C++?",
      "fr": "Qu'est-ce qui permet la surcharge de constructeurs en C++ ?"
    },
    "options": [
      {
        "text": {
          "en": "Providing multiple constructors with different parameter lists",
          "fr": "Fournir plusieurs constructeurs avec des listes de paramètres différentes"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Giving different names to each constructor",
          "fr": "Donner un nom différent à chaque constructeur"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Specifying different return types",
          "fr": "Spécifier des types de retour différents"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Constructors must share the class name; they are overloaded via distinct parameter counts and types.",
      "fr": "Tous les constructeurs portent le nom de la classe ; ils diffèrent par leurs paramètres."
    }
  },
  "59": {
    "question": {
      "en": "What OOP principle is achieved by making member variables private and providing public getters/setters?",
      "fr": "Quel principe de la POO réalise-t-on en rendant les variables privées avec accesseurs publics ?"
    },
    "options": [
      {
        "text": {
          "en": "Encapsulation (Data Hiding)",
          "fr": "L'Encapsulation (Masquage des données)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Polymorphism",
          "fr": "Le Polymorphisme"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Multiple Inheritance",
          "fr": "L'Héritage Multiple"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Encapsulation hides sensitive data from direct tampering and validates mutations via setters.",
      "fr": "L'encapsulation protège les attributs internes et filtre leurs modifications par les setters."
    }
  },
  "60": {
    "question": {
      "en": "What syntax establishes that class Dog inherits publicly from class Animal?",
      "fr": "Quelle syntaxe déclare que la classe Dog hérite publiquement de la classe Animal ?"
    },
    "options": [
      {
        "text": {
          "en": "class Dog : public Animal { ... };",
          "fr": "class Dog : public Animal { ... };"
        },
        "correct": true
      },
      {
        "text": {
          "en": "class Dog extends Animal { ... };",
          "fr": "class Dog extends Animal { ... };"
        },
        "correct": false
      },
      {
        "text": {
          "en": "class Dog inherits Animal { ... };",
          "fr": "class Dog inherits Animal { ... };"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "In C++, inheritance is specified using a colon followed by access specifier (class Dog : public Animal).",
      "fr": "En C++, l'héritage s'écrit avec un deux-points suivi du mode d'accès (: public Animal)."
    }
  },
  "61": {
    "question": {
      "en": "Which method appends a new element to the end of a std::vector dynamic array?",
      "fr": "Quelle méthode ajoute un nouvel élément à la fin d'un tableau dynamique std::vector ?"
    },
    "options": [
      {
        "text": {
          "en": "push_back(element)",
          "fr": "push_back(element)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "append(element)",
          "fr": "append(element)"
        },
        "correct": false
      },
      {
        "text": {
          "en": "add(element)",
          "fr": "add(element)"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::vector::push_back(val) inserts val at the end and reallocates memory dynamically if capacity is full.",
      "fr": "std::vector::push_back(val) insère à la fin et réalloue la mémoire dynamiquement si nécessaire."
    }
  },
  "62": {
    "question": {
      "en": "Why MUST base classes with virtual methods always declare a virtual destructor (virtual ~Base() = default;)?",
      "fr": "Pourquoi une classe de base polymorphe DOIT-ELLE toujours avoir un destructeur virtuel ?"
    },
    "options": [
      {
        "text": {
          "en": "To ensure derived class destructors run when deleting an object through a base pointer",
          "fr": "Pour garantir l'appel du destructeur dérivé lors de la destruction via pointeur de base"
        },
        "correct": true
      },
      {
        "text": {
          "en": "To make constructors run faster",
          "fr": "Pour accélérer les constructeurs"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It prevents compilation errors in main",
          "fr": "Pour éviter une erreur de compilation dans main"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Deleting a derived object via Base* without a virtual destructor causes undefined behavior and leaks.",
      "fr": "Supprimer un objet dérivé via Base* sans destructeur virtuel entraîne fuites et comportement indéfini."
    }
  },
  "63": {
    "question": {
      "en": "What is the primary advantage of std::unique_ptr over a raw pointer with 'new'?",
      "fr": "Quel est l'avantage majeur de std::unique_ptr par rapport à un pointeur brut 'new' ?"
    },
    "options": [
      {
        "text": {
          "en": "Automatic RAII cleanup: memory is deleted automatically when the unique_ptr leaves scope",
          "fr": "Nettoyage RAII automatique : la mémoire est libérée dès que l'unique_ptr sort de portée"
        },
        "correct": true
      },
      {
        "text": {
          "en": "unique_ptr can be shared by multiple threads simultaneously without locks",
          "fr": "unique_ptr est partagé entre threads sans verrous"
        },
        "correct": false
      },
      {
        "text": {
          "en": "unique_ptr uses no memory at all",
          "fr": "unique_ptr n'occupe aucune mémoire"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::unique_ptr exclusively owns heap memory and frees it automatically on destruction, preventing leaks.",
      "fr": "std::unique_ptr possède la ressource en exclusivité et la détruit automatiquement, éliminant les fuites."
    }
  },
  "64": {
    "question": {
      "en": "What data structure does std::map use under the hood to maintain sorted key-value pairs?",
      "fr": "Quelle structure de données std::map utilise-t-il pour conserver les paires clé-valeur triées ?"
    },
    "options": [
      {
        "text": {
          "en": "Self-balancing Red-Black Tree (O(log N) lookup)",
          "fr": "Arbre rouge-noir équilibré (recherche en O(log N))"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Unsorted contiguous array",
          "fr": "Tableau contigu non trié"
        },
        "correct": false
      },
      {
        "text": {
          "en": "Singly linked list",
          "fr": "Liste simplement chaînée"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::map keeps elements sorted by key with logarithmic O(log N) insertions, removals, and searches.",
      "fr": "std::map maintient ses clés ordonnées dans un arbre binaire de recherche équilibré en O(log N)."
    }
  },
  "65": {
    "question": {
      "en": "Why should you use std::lock_guard<std::mutex> when synchronizing threads?",
      "fr": "Pourquoi utiliser std::lock_guard<std::mutex> lors de la synchronisation de threads ?"
    },
    "options": [
      {
        "text": {
          "en": "It locks the mutex upon construction and unlocks automatically when exiting scope (RAII)",
          "fr": "Il verrouille à la création et déverrouille automatiquement en sortie de portée (RAII)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It creates a new thread automatically",
          "fr": "Il crée un nouveau thread automatiquement"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It prevents threads from needing mutexes",
          "fr": "Il dispense d'utiliser des mutexes"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "std::lock_guard guarantees mutex release even if an exception is thrown, preventing deadlocks.",
      "fr": "std::lock_guard garantit la libération du mutex même en cas d'exception, évitant les blocages."
    }
  },
  "66": {
    "question": {
      "en": "Why does a dynamic array (like std::vector or MyVector) double its capacity (2x) when full rather than growing by +1?",
      "fr": "Pourquoi un tableau dynamique double-t-il sa capacité (2x) quand il est plein plutôt que d'ajouter +1 ?"
    },
    "options": [
      {
        "text": {
          "en": "To achieve amortized O(1) insertion time; growing by +1 causes quadratic O(N²) reallocation overhead",
          "fr": "Pour obtenir un coût amorti en O(1) ; grandir de +1 entraîne un coût quadratique en O(N²)"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Because computer memory can only be addressed in powers of 2",
          "fr": "Car la mémoire ne s'adresse qu'en puissances de 2"
        },
        "correct": false
      },
      {
        "text": {
          "en": "To store elements on the CPU stack instead of the heap",
          "fr": "Pour allouer sur la pile CPU au lieu du tas"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Exponential capacity doubling guarantees that expensive heap reallocations occur exponentially less frequently, yielding amortized constant O(1) push_back time.",
      "fr": "Le doublement de capacité garantit que les réallocations deviennent exponentiellement rares, assurant un temps amorti en O(1)."
    }
  },
  "67": {
    "question": {
      "en": "Why must a unique ownership smart pointer (like std::unique_ptr or MyUniquePtr) declare its copy constructor as '= delete'?",
      "fr": "Pourquoi un pointeur intelligent à possession exclusive doit-il marquer son constructeur de copie en '= delete' ?"
    },
    "options": [
      {
        "text": {
          "en": "To prevent two smart pointers from owning and double-freeing the same heap memory address",
          "fr": "Pour empêcher deux pointeurs de posséder et détruire deux fois (double-free) la même adresse mémoire"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Because template classes cannot have copy constructors in C++",
          "fr": "Car les classes modèles ne peuvent pas avoir de constructeur de copie"
        },
        "correct": false
      },
      {
        "text": {
          "en": "To force the compiler to convert all pointers into references",
          "fr": "Pour forcer la conversion des pointeurs en références"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Exclusive ownership means exactly one pointer manages the resource. Copying would lead to a catastrophic double-free when both destructors execute. Ownership must be moved via std::move.",
      "fr": "La possession exclusive interdit la copie pour éviter le double-free destructeur. Le transfert doit s'effectuer via std::move."
    }
  },
  "68": {
    "question": {
      "en": "What is the primary systems engineering advantage of a Fixed-Block Memory Pool over repeated 'new' / 'malloc' calls?",
      "fr": "Quel est l'avantage clé d'un pool de mémoire à blocs fixes par rapport aux appels répétés à 'new'/'malloc' ?"
    },
    "options": [
      {
        "text": {
          "en": "Deterministic O(1) allocation speed without OS syscall overhead, and zero heap fragmentation",
          "fr": "Vitesse d'allocation déterministe en O(1) sans appel système OS, et zéro fragmentation du tas"
        },
        "correct": true
      },
      {
        "text": {
          "en": "It compresses data so objects take zero bytes in RAM",
          "fr": "Il compresse les objets à 0 octet en mémoire"
        },
        "correct": false
      },
      {
        "text": {
          "en": "It allows deleting objects without running destructors",
          "fr": "Il supprime les objets sans destructeur"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "General-purpose allocators suffer from system call locks and heap fragmentation. Fixed-block pools pop pre-allocated nodes from an intrusive free-list in deterministic O(1) time.",
      "fr": "Les allocateurs généralistes génèrent de la fragmentation et des verrous noyau. Les pools à blocs fixes allouent en O(1) déterministe."
    }
  },
  "69": {
    "question": {
      "en": "Why is 'std::condition_variable::wait(lock, predicate)' superior to a 'while (!taskReady) {}' spin-loop in worker threads?",
      "fr": "Pourquoi 'std::condition_variable::wait(lock, predicate)' est-il supérieur à une boucle 'while (!taskReady) {}' dans un thread ?"
    },
    "options": [
      {
        "text": {
          "en": "It puts the waiting worker thread to sleep, yielding CPU cores to other processes and consuming 0% idle CPU",
          "fr": "Il endort le thread travailleur, libérant les cœurs CPU et consommant 0% de processeur au repos"
        },
        "correct": true
      },
      {
        "text": {
          "en": "Spin-loops cause compilation errors in C++20",
          "fr": "Les boucles actives génèrent des erreurs de compilation"
        },
        "correct": false
      },
      {
        "text": {
          "en": "condition_variable executes asynchronous tasks directly on GPU cores",
          "fr": "condition_variable délègue au GPU"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Busy-waiting (spin-looping) burns 100% of a CPU core doing nothing. A condition_variable suspends thread execution until notified by producer threads.",
      "fr": "L'attente active (spin-loop) sature un cœur CPU à 100%. condition_variable endort le thread jusqu'au réveil par notify."
    }
  },
  "70": {
    "question": {
      "en": "Why is 'std::memcpy' the standard-mandated way to parse raw byte buffers into C++ structs rather than casting 'reinterpret_cast<Header*>(buf)'?",
      "fr": "Pourquoi 'std::memcpy' est-il la méthode recommandée pour désérialiser des octets bruts en structure plutôt que 'reinterpret_cast' ?"
    },
    "options": [
      {
        "text": {
          "en": "To avoid violating the Strict Aliasing Rule and avoid unaligned memory access hardware traps",
          "fr": "Pour éviter de violer la règle d'aliasing strict et éviter les fautes matérielles d'alignement mémoire"
        },
        "correct": true
      },
      {
        "text": {
          "en": "reinterpret_cast cannot cast pointer types in C++",
          "fr": "reinterpret_cast ne fonctionne pas sur les pointeurs"
        },
        "correct": false
      },
      {
        "text": {
          "en": "std::memcpy automatically encrypts network packets",
          "fr": "std::memcpy chiffre automatiquement les paquets"
        },
        "correct": false
      }
    ],
    "explanation": {
      "en": "Casting raw byte pointers directly violates the C++ strict aliasing rule and can trigger alignment faults on CPUs requiring aligned access. Modern compilers optimize std::memcpy into a single register move without undefined behavior.",
      "fr": "Le cast direct viole l'aliasing strict et peut causer des fautes d'alignement matériel. Les compilateurs modernes optimisent std::memcpy en une seule instruction sans comportement indéfini."
    }
  },
  "71": {
    "question": {
        "en": "Why must std::forward<T> be called with an explicit template argument (e.g., std::forward<T>(arg)), whereas std::move does not require one?",
        "fr": "Pourquoi std::forward<T> nécessite-t-il un argument de template explicite alors que std::move n'en a pas besoin ?"
    },
    "options": [
        {
            "text": {
                "en": "Because std::forward relies on the deduced type T and reference collapsing rules to conditionally cast to an rvalue; std::move always unconditionally casts to an rvalue.",
                "fr": "Parce que std::forward utilise le type déduit T et l'écrasement de référence pour caster conditionnellement en rvalue ; std::move caste inconditionnellement en rvalue."
            },
            "correct": true
        },
        {
            "text": {
                "en": "Because std::forward allocates heap memory for the forward buffer",
                "fr": "Parce que std::forward alloue de la mémoire sur le tas pour le tampon"
            },
            "correct": false
        },
        {
            "text": {
                "en": "Because std::move only works on primitive types like int and double",
                "fr": "Parce que std::move ne fonctionne que sur les types primitifs comme int et double"
            },
            "correct": false
        }
    ],
    "explanation": {
        "en": "std::move is an unconditional cast to an rvalue reference. std::forward<T> preserves the original value category (lvalue or rvalue) by inspecting T and applying reference collapsing (& + && -> &).",
        "fr": "std::move caste inconditionnellement en rvalue. std::forward<T> préserve la catégorie d'origine (lvalue ou rvalue) en inspectant T et en appliquant l'écrasement de références."
    }
},
  "72": {
    "question": {
        "en": "What occurs if a function declared with the C++20 'consteval' specifier cannot be evaluated at compile time in a particular call?",
        "fr": "Que se passe-t-il si une fonction déclarée avec 'consteval' (C++20) ne peut pas être évaluée à la compilation ?"
    },
    "options": [
        {
            "text": {
                "en": "The compiler will issue a compilation error; unlike constexpr, consteval functions can NEVER run at runtime.",
                "fr": "Le compilateur émet une erreur de compilation ; contrairement à constexpr, les fonctions consteval ne s'exécutent JAMAIS à l'exécution."
            },
            "correct": true
        },
        {
            "text": {
                "en": "The compiler silently falls back to running the function at runtime",
                "fr": "Le compilateur bascule silencieusement vers une exécution au runtime"
            },
            "correct": false
        },
        {
            "text": {
                "en": "The program enters an infinite loop at runtime",
                "fr": "Le programme entre dans une boucle infinie à l'exécution"
            },
            "correct": false
        }
    ],
    "explanation": {
        "en": "consteval produces an 'immediate function'. Every call to a consteval function must produce a compile-time constant expression, or the program is ill-formed and fails to compile.",
        "fr": "consteval définit une 'fonction immédiate'. Chaque appel doit produire une constante à la compilation, sinon la compilation échoue."
    }
},
  "73": {
    "question": {
        "en": "What hidden memory overhead does a class incur when it declares at least one virtual member function?",
        "fr": "Quel surcoût mémoire masqué une classe subit-elle lorsqu'elle déclare au moins une fonction membre virtuelle ?"
    },
    "options": [
        {
            "text": {
                "en": "The compiler embeds a hidden pointer (__vptr) inside each object instance pointing to the class VTable, typically adding 8 bytes on 64-bit platforms.",
                "fr": "Le compilateur insère un pointeur masqué (__vptr) dans chaque instance pointant vers la VTable de la classe, ajoutant généralement 8 octets sur 64 bits."
            },
            "correct": true
        },
        {
            "text": {
                "en": "The compiler duplicates the entire binary machine code of all methods inside each object instance",
                "fr": "Le compilateur duplique l'intégralité du code machine de toutes les méthodes dans chaque instance"
            },
            "correct": false
        },
        {
            "text": {
                "en": "Virtual functions disable stack allocation, forcing all instances to be allocated on the heap",
                "fr": "Les fonctions virtuelles interdisent l'allocation sur la pile, forçant l'allocation sur le tas"
            },
            "correct": false
        }
    ],
    "explanation": {
        "en": "Virtual dispatch requires a VTable containing function pointers and a __vptr inside each instance. Calling a virtual method requires dereferencing the vptr and indexing the table.",
        "fr": "Le dispatch virtuel requiert une VTable de pointeurs de fonctions et un __vptr par instance. L'appel implique de déréférencer le vptr puis d'indexer la table."
    }
},
  "74": {
    "question": {
        "en": "Why must C++ destructors never allow exceptions to escape (and are implicitly noexcept in modern C++)?",
        "fr": "Pourquoi les destructeurs C++ ne doivent-ils jamais laisser échapper d'exceptions (et sont implicitement noexcept) ?"
    },
    "options": [
        {
            "text": {
                "en": "If a destructor throws while another exception is already actively unwinding the stack, C++ immediately calls std::terminate, aborting the process.",
                "fr": "Si un destructeur lève une exception alors qu'une autre déroule déjà la pile, C++ appelle immédiatement std::terminate et interrompt le processus."
            },
            "correct": true
        },
        {
            "text": {
                "en": "Because throwing an exception inside a destructor corrupts the CPU instruction cache",
                "fr": "Parce que lever une exception dans un destructeur corrompt le cache d'instructions du CPU"
            },
            "correct": false
        },
        {
            "text": {
                "en": "Because destructors cannot have try-catch blocks inside their body",
                "fr": "Parce que les destructeurs ne peuvent pas contenir de blocs try-catch"
            },
            "correct": false
        }
    ],
    "explanation": {
        "en": "During stack unwinding caused by an active exception, if any destructor throws a second exception, the C++ runtime cannot handle two concurrent active exceptions and immediately terminates.",
        "fr": "Lors du déroulement de pile provoqué par une exception, si un destructeur lève une seconde exception, le runtime C++ ne peut gérer deux exceptions simultanées et appelle std::terminate()."
    }
},
  "75": {
    "question": {
        "en": "Which of the following actions directly violates the C++ Strict Aliasing rule and produces Undefined Behavior (UB)?",
        "fr": "Laquelle des actions suivantes viole directement la règle de Strict Aliasing en C++ et produit un comportement indéfini (UB) ?"
    },
    "options": [
        {
            "text": {
                "en": "Reading or writing the memory of a float variable through a dereferenced int* pointer cast using reinterpret_cast.",
                "fr": "Lire ou écrire la mémoire d'un float via un pointeur int* déréférencé après un reinterpret_cast."
            },
            "correct": true
        },
        {
            "text": {
                "en": "Using std::memcpy to copy raw bytes between two structs of identical size",
                "fr": "Utiliser std::memcpy pour copier des octets bruts entre deux structures de taille identique"
            },
            "correct": false
        },
        {
            "text": {
                "en": "Passing a const reference to a pure function",
                "fr": "Passer une référence constante à une fonction pure"
            },
            "correct": false
        }
    ],
    "explanation": {
        "en": "The strict aliasing rule allows the compiler to assume pointers to incompatible types never alias the same memory. Dereferencing an int* pointing to a float violates this and causes UB. Always use std::memcpy for type punning.",
        "fr": "La règle de strict aliasing permet au compilateur de supposer que des pointeurs de types incompatibles ne pointent jamais vers la même mémoire. Déréférencer un int* sur un float viole cette règle. Utilisez std::memcpy."
    }
},
  "76": {
    "question": {
        "en": "Why does Structure of Arrays (SoA) significantly outperform Array of Structures (AoS) in high-throughput data processing?",
        "fr": "Pourquoi la Structure de Tableaux (SoA) surpasse-t-elle nettement le Tableau de Structures (AoS) lors de traitements de données intensifs ?"
    },
    "options": [
        {
            "text": {
                "en": "SoA packs active contiguous fields sequentially, ensuring 100% of each 64-byte CPU cache line is utilized and enabling SIMD auto-vectorization.",
                "fr": "La SoA regroupe les champs séquentiellement, garantissant que 100% de chaque ligne de cache CPU de 64 octets est exploitée et permet la vectorisation SIMD."
            },
            "correct": true
        },
        {
            "text": {
                "en": "Because SoA automatically runs on the GPU without any shader code",
                "fr": "Parce que la SoA s'exécute automatiquement sur le GPU sans code shader"
            },
            "correct": false
        },
        {
            "text": {
                "en": "Because AoS structures cannot be passed by pointer",
                "fr": "Parce que les structures AoS ne peuvent pas être transmises par pointeur"
            },
            "correct": false
        }
    ],
    "explanation": {
        "en": "CPUs fetch memory in 64-byte cache lines. In AoS, pulling one field loads unneeded adjacent fields into cache. SoA packs identical fields sequentially, maximizing cache hits and allowing SIMD (AVX/NEON) vector registers to process multiple elements per cycle.",
        "fr": "Le processeur charge la mémoire par lignes de cache de 64 octets. En AoS, lire un champ charge aussi des champs inutiles. En SoA, les champs identiques sont contigus, maximisant les hits de cache et autorisant le calcul vectoriel SIMD."
    }
},
  "77": {
    "question": {
        "en": "In a tree or graph with bidirectional connections, why should child nodes store a std::weak_ptr to their parent instead of std::shared_ptr?",
        "fr": "Dans un arbre ou graphe avec liaisons bidirectionnelles, pourquoi les enfants doivent-ils stocker un std::weak_ptr vers leur parent plutôt qu'un std::shared_ptr ?"
    },
    "options": [
        {
            "text": {
                "en": "To break circular references: two shared_ptrs referencing each other keep reference counts above zero permanently, causing an uncollectable memory leak.",
                "fr": "Pour casser les références circulaires : deux shared_ptrs mutuels maintiennent le compteur au-dessus de zéro en permanence, provoquant une fuite mémoire irrémédiable."
            },
            "correct": true
        },
        {
            "text": {
                "en": "Because std::weak_ptr allows modifying the parent object without thread synchronization",
                "fr": "Parce que std::weak_ptr permet de modifier le parent sans synchronisation de threads"
            },
            "correct": false
        },
        {
            "text": {
                "en": "Because std::shared_ptr can only be used on primitive data types",
                "fr": "Parce que std::shared_ptr ne peut être utilisé que sur des types primitifs"
            },
            "correct": false
        }
    ],
    "explanation": {
        "en": "std::weak_ptr holds a non-owning reference and does not increment the strong reference count. This avoids cyclic dependency memory leaks and allows the parent to be safely destroyed when external owners release it.",
        "fr": "std::weak_ptr détient une référence non-propriétaire et n'incrémente pas le compteur fort. Cela évite les fuites de dépendances cycliques et permet la destruction propre du parent."
    }
},
};

const MODULE_QUIZZES = {
  "mod-1": [
    {
      "question": {
        "en": "What stream object is used to output text to the console in C++?",
        "fr": "Quel objet de flux est utilisé pour afficher du texte dans la console en C++ ?"
      },
      "options": [
        {
          "text": {
            "en": "std::cout",
            "fr": "std::cout"
          },
          "correct": true
        },
        {
          "text": {
            "en": "std::cin",
            "fr": "std::cin"
          },
          "correct": false
        },
        {
          "text": {
            "en": "printf_s",
            "fr": "printf_s"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "std::cout (character output) in <iostream> sends formatted text to the standard console.",
        "fr": "std::cout (character output) dans <iostream> envoie le texte formaté vers la console standard."
      }
    },
    {
      "question": {
        "en": "Which C++ data type should you use to store a single ASCII character?",
        "fr": "Quel type de données C++ doit-on utiliser pour stocker un unique caractère ASCII ?"
      },
      "options": [
        {
          "text": {
            "en": "char",
            "fr": "char"
          },
          "correct": true
        },
        {
          "text": {
            "en": "std::string",
            "fr": "std::string"
          },
          "correct": false
        },
        {
          "text": {
            "en": "byte",
            "fr": "byte"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "char uses single quotes like 'A' and represents an 8-bit character in memory.",
        "fr": "char utilise des guillemets simples comme 'A' et occupe 1 octet en mémoire."
      }
    },
    {
      "question": {
        "en": "What happens if you try to reassign a variable declared with 'const'?",
        "fr": "Que se passe-t-il si vous tentez de réassigner une variable déclarée avec 'const' ?"
      },
      "options": [
        {
          "text": {
            "en": "Compile-time error",
            "fr": "Erreur de compilation"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Runtime warning",
            "fr": "Avertissement à l'exécution"
          },
          "correct": false
        },
        {
          "text": {
            "en": "The value silently changes",
            "fr": "La valeur change silencieusement"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "The compiler rejects assignments to read-only const variables at compile time.",
        "fr": "Le compilateur rejette les affectations aux variables const en lecture seule dès la compilation."
      }
    },
    {
      "question": {
        "en": "Which operator is used to access an entity inside a specific namespace?",
        "fr": "Quel opérateur permet d'accéder à une entité située dans un espace de noms spécifique ?"
      },
      "options": [
        {
          "text": {
            "en": "Scope resolution operator (::)",
            "fr": "Opérateur de résolution de portée (::)"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Member access dot (.)",
            "fr": "Point d'accès membre (.)"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Pointer arrow (->)",
            "fr": "Flèche de pointeur (->)"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "The scope resolution operator (::) tells the compiler which namespace to look inside.",
        "fr": "L'opérateur de résolution de portée (::) indique au compilateur dans quel namespace chercher."
      }
    },
    {
      "question": {
        "en": "What does the modulus operator (%) return in integer arithmetic?",
        "fr": "Que renvoie l'opérateur modulo (%) en arithmétique entière ?"
      },
      "options": [
        {
          "text": {
            "en": "The remainder of the division",
            "fr": "Le reste de la division entière"
          },
          "correct": true
        },
        {
          "text": {
            "en": "The floating-point quotient",
            "fr": "Le quotient en virgule flottante"
          },
          "correct": false
        },
        {
          "text": {
            "en": "The percentage proportion",
            "fr": "Le pourcentage proportionnel"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "For example, 14 % 4 evaluates to 2 because 14 divided by 4 leaves a remainder of 2.",
        "fr": "Par exemple, 14 % 4 donne 2 car 14 divisé par 4 donne un reste de 2."
      }
    },
    {
      "question": {
        "en": "Why is static_cast<double>(intVal) preferred over C-style (double)intVal?",
        "fr": "Pourquoi static_cast<double>(val) est-il préféré au cast à la C (double)val ?"
      },
      "options": [
        {
          "text": {
            "en": "It is checked by the compiler and explicit in intent",
            "fr": "Il est vérifié par le compilateur et explicite d'intention"
          },
          "correct": true
        },
        {
          "text": {
            "en": "It runs faster at runtime",
            "fr": "Il s'exécute plus vite à l'exécution"
          },
          "correct": false
        },
        {
          "text": {
            "en": "C-style cast is deprecated and illegal in C++20",
            "fr": "Le cast C est déprécié et illégal en C++20"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "static_cast prevents unintended dangerous type conversions at compile-time.",
        "fr": "static_cast évite les conversions de types dangereuses et accidentelles dès la compilation."
      }
    },
    {
      "question": {
        "en": "Why does std::cin >> fail when reading a full name like 'Bro Code'?",
        "fr": "Pourquoi std::cin >> échoue-t-il lors de la saisie d'un nom complet comme 'Bro Code' ?"
      },
      "options": [
        {
          "text": {
            "en": "It stops reading at whitespace (spaces, tabs, newlines)",
            "fr": "Il s'arrête dès le premier espace blanc (espace, tabulation, saut de ligne)"
          },
          "correct": true
        },
        {
          "text": {
            "en": "std::cin cannot read std::string",
            "fr": "std::cin ne peut pas lire de std::string"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Strings cannot exceed 4 characters",
            "fr": "Les chaînes ne peuvent pas dépasser 4 caractères"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "std::cin extraction stops at whitespace. Use std::getline(std::cin, str) to read full lines.",
        "fr": "L'extraction std::cin s'arrête au premier espace. Utilisez std::getline(std::cin, str) pour lire toute la ligne."
      }
    },
    {
      "question": {
        "en": "Which standard header must be included to use sqrt(), pow(), and round()?",
        "fr": "Quel en-tête standard doit-on inclure pour utiliser sqrt(), pow() et round() ?"
      },
      "options": [
        {
          "text": {
            "en": "<cmath>",
            "fr": "<cmath>"
          },
          "correct": true
        },
        {
          "text": {
            "en": "<maths>",
            "fr": "<maths>"
          },
          "correct": false
        },
        {
          "text": {
            "en": "<algorithm>",
            "fr": "<algorithm>"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "#include <cmath> provides standard mathematical functions.",
        "fr": "#include <cmath> fournit les fonctions mathématiques standard."
      }
    }
  ],
  "mod-2": [
    {
      "question": {
        "en": "What happens if all conditions in an if - else if chain evaluate to false and there is an else block?",
        "fr": "Que se passe-t-il si toutes les conditions d'un if - else if sont fausses et qu'il y a un bloc else ?"
      },
      "options": [
        {
          "text": {
            "en": "The else block executes",
            "fr": "Le bloc else s'exécute"
          },
          "correct": true
        },
        {
          "text": {
            "en": "The program crashes",
            "fr": "Le programme plante"
          },
          "correct": false
        },
        {
          "text": {
            "en": "The first if block re-executes",
            "fr": "Le premier bloc if s'exécute à nouveau"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "The else block acts as the fallback default when no preceding conditions match.",
        "fr": "Le bloc else fait office d'alternative par défaut lorsque aucune condition précédente n'est remplie."
      }
    },
    {
      "question": {
        "en": "Why is the 'break;' statement essential inside each case of a switch statement?",
        "fr": "Pourquoi l'instruction 'break;' est-elle essentielle à la fin de chaque case d'un switch ?"
      },
      "options": [
        {
          "text": {
            "en": "To prevent falling through to execute subsequent cases",
            "fr": "Pour empêcher l'exécution en cascade des cases suivants (fall-through)"
          },
          "correct": true
        },
        {
          "text": {
            "en": "To reset the variable value",
            "fr": "Pour réinitialiser la valeur de la variable"
          },
          "correct": false
        },
        {
          "text": {
            "en": "To return from the enclosing function",
            "fr": "Pour quitter la fonction appelante"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Without break;, execution continues down through all remaining cases regardless of condition.",
        "fr": "Sans break;, l'exécution continue sans interruption dans les blocs case suivants."
      }
    },
    {
      "question": {
        "en": "Why must you check if the divisor is zero before performing division in a calculator?",
        "fr": "Pourquoi doit-on vérifier si le diviseur est nul avant d'effectuer une division dans une calculatrice ?"
      },
      "options": [
        {
          "text": {
            "en": "Division by zero causes undefined behavior or runtime crash",
            "fr": "La division par zéro provoque un plantage ou comportement indéfini"
          },
          "correct": true
        },
        {
          "text": {
            "en": "It produces the number zero automatically",
            "fr": "Elle produit automatiquement le nombre zéro"
          },
          "correct": false
        },
        {
          "text": {
            "en": "The compiler will delete the executable",
            "fr": "Le compilateur supprime l'exécutable"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Dividing by zero in integer arithmetic causes an immediate program crash / SIGFPE signal.",
        "fr": "La division par zéro en arithmétique entière déclenche un plantage immédiat."
      }
    },
    {
      "question": {
        "en": "What is the return value of (grade >= 60) ? \"Pass\" : \"Fail\" when grade = 75?",
        "fr": "Quelle est la valeur de retour de (grade >= 60) ? \"Pass\" : \"Fail\" quand grade = 75 ?"
      },
      "options": [
        {
          "text": {
            "en": "\"Pass\"",
            "fr": "\"Pass\""
          },
          "correct": true
        },
        {
          "text": {
            "en": "\"Fail\"",
            "fr": "\"Fail\""
          },
          "correct": false
        },
        {
          "text": {
            "en": "true",
            "fr": "true"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Since (75 >= 60) is true, the ternary operator evaluates and returns the first expression: \"Pass\".",
        "fr": "Puisque (75 >= 60) est vrai, l'opérateur ternaire évalue et renvoie la première expression : \"Pass\"."
      }
    },
    {
      "question": {
        "en": "In the expression 'if (A && B)', when is expression B NOT evaluated?",
        "fr": "Dans l'expression 'if (A && B)', quand l'expression B n'est-elle PAS évaluée ?"
      },
      "options": [
        {
          "text": {
            "en": "When A is false (short-circuit evaluation)",
            "fr": "Quand A est faux (évaluation en court-circuit)"
          },
          "correct": true
        },
        {
          "text": {
            "en": "When A is true",
            "fr": "Quand A est vrai"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Expression B is always evaluated",
            "fr": "L'expression B est toujours évaluée"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Logical AND (&&) short-circuits: if the first operand is false, the result is guaranteed false.",
        "fr": "Le ET logique (&&) fonctionne en court-circuit : si le premier terme est faux, le second n'est pas évalué."
      }
    },
    {
      "question": {
        "en": "What does string.find(char) return if the character is not found in the string?",
        "fr": "Que renvoie string.find(char) si le caractère recherché n'est pas présent dans la chaîne ?"
      },
      "options": [
        {
          "text": {
            "en": "std::string::npos",
            "fr": "std::string::npos"
          },
          "correct": true
        },
        {
          "text": {
            "en": "-1",
            "fr": "-1"
          },
          "correct": false
        },
        {
          "text": {
            "en": "0",
            "fr": "0"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "std::string::npos is the standard sentinel value representing 'no position / not found'.",
        "fr": "std::string::npos est la valeur sentinelle standard indiquant l'absence de correspondance."
      }
    }
  ],
  "mod-3": [
    {
      "question": {
        "en": "What causes an infinite loop in a while loop statement?",
        "fr": "Qu'est-ce qui provoque une boucle infinie dans une instruction while ?"
      },
      "options": [
        {
          "text": {
            "en": "The loop condition never evaluates to false",
            "fr": "La condition de boucle ne devient jamais fausse"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Using semicolons inside braces",
            "fr": "L'utilisation de points-virgules entre accolades"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Declaring variables inside main",
            "fr": "La déclaration de variables dans main"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "A while loop will repeat forever unless its condition is eventually modified to false or broken.",
        "fr": "Une boucle while se répète indéfiniment si sa condition ne devient jamais fausse."
      }
    },
    {
      "question": {
        "en": "What is the primary difference between a while loop and a do-while loop?",
        "fr": "Quelle est la différence fondamentale entre une boucle while et do-while ?"
      },
      "options": [
        {
          "text": {
            "en": "do-while always executes the body at least once",
            "fr": "do-while exécute toujours le corps au moins une fois"
          },
          "correct": true
        },
        {
          "text": {
            "en": "while is faster at runtime",
            "fr": "while est plus rapide à l'exécution"
          },
          "correct": false
        },
        {
          "text": {
            "en": "do-while does not check conditions",
            "fr": "do-while ne teste pas de condition"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "A do-while loop tests its condition at the bottom, guaranteeing at least one execution pass.",
        "fr": "La boucle do-while teste sa condition en fin de bloc, garantissant au moins un passage."
      }
    },
    {
      "question": {
        "en": "What are the three components inside a standard for loop header: for(A; B; C)?",
        "fr": "Quels sont les trois éléments de l'en-tête for(A; B; C) ?"
      },
      "options": [
        {
          "text": {
            "en": "Initialization; Condition; Update/Increment",
            "fr": "Initialisation ; Condition ; Mise à jour/Incrément"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Condition; Body; Break",
            "fr": "Condition ; Corps ; Interruption"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Start; Finish; Output",
            "fr": "Début ; Fin ; Affichage"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "for (int i = 0; i < N; i++) sets initial counter, checks continuation, and increments.",
        "fr": "for (int i = 0; i < N; i++) initialise le compteur, vérifie la poursuite et incrémente."
      }
    },
    {
      "question": {
        "en": "What is the effect of the 'continue;' statement inside a loop?",
        "fr": "Quel est l'effet de l'instruction 'continue;' dans une boucle ?"
      },
      "options": [
        {
          "text": {
            "en": "Skips the rest of the current iteration and jumps to the next iteration",
            "fr": "Ignore le reste du tour actuel et passe immédiatement au tour suivant"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Terminates the loop completely",
            "fr": "Termine la boucle définitivement"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Restarts the loop from index 0",
            "fr": "Recommence la boucle à l'index 0"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "continue immediately bypasses remaining statements in the current iteration step.",
        "fr": "continue saute les instructions restantes de l'itération courante sans quitter la boucle."
      }
    },
    {
      "question": {
        "en": "If an outer loop runs 4 times and an inner nested loop runs 5 times, how many total times does the inner body execute?",
        "fr": "Si une boucle externe s'exécute 4 fois et une boucle imbriquée 5 fois, combien de fois le corps s'exécute-t-il au total ?"
      },
      "options": [
        {
          "text": {
            "en": "20 times",
            "fr": "20 fois"
          },
          "correct": true
        },
        {
          "text": {
            "en": "9 times",
            "fr": "9 fois"
          },
          "correct": false
        },
        {
          "text": {
            "en": "4 times",
            "fr": "4 fois"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Total iterations = outer_iterations * inner_iterations (4 * 5 = 20).",
        "fr": "Nombre total d'itérations = itérations_externes * itérations_internes (4 * 5 = 20)."
      }
    },
    {
      "question": {
        "en": "Why should you call srand(time(nullptr)) before calling rand()?",
        "fr": "Pourquoi doit-on appeler srand(time(nullptr)) avant d'utiliser rand() ?"
      },
      "options": [
        {
          "text": {
            "en": "To seed the generator with the current time so numbers change on each run",
            "fr": "Pour initialiser le générateur avec l'heure courante afin de varier les tirages"
          },
          "correct": true
        },
        {
          "text": {
            "en": "To make rand() return floating-point numbers",
            "fr": "Pour que rand() renvoie des nombres décimaux"
          },
          "correct": false
        },
        {
          "text": {
            "en": "It is required for compilation",
            "fr": "C'est obligatoire pour compiler"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Without a changing seed, rand() will generate the exact same sequence on every launch.",
        "fr": "Sans graine (seed) dynamique, rand() reproduira exactement la même séquence à chaque lancement."
      }
    },
    {
      "question": {
        "en": "In a number guessing game, which condition terminates the guessing loop?",
        "fr": "Dans un jeu de devinette, quelle condition met fin à la boucle de jeu ?"
      },
      "options": [
        {
          "text": {
            "en": "When the player's guess equals the secret number",
            "fr": "Lorsque la proposition du joueur égale le nombre secret"
          },
          "correct": true
        },
        {
          "text": {
            "en": "When guess is greater than 100",
            "fr": "Quand la proposition dépasse 100"
          },
          "correct": false
        },
        {
          "text": {
            "en": "After exactly 3 tries automatically",
            "fr": "Après exactement 3 essais automatiquement"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "The game loop terminates with a win when the player guesses correctly (guess == secret).",
        "fr": "La boucle de jeu se termine par une victoire lorsque le joueur devine le nombre exact."
      }
    }
  ],
  "mod-4": [
    {
      "question": {
        "en": "What does a function return type of 'void' indicate?",
        "fr": "Que signifie un type de retour 'void' pour une fonction ?"
      },
      "options": [
        {
          "text": {
            "en": "The function does not return any value to the caller",
            "fr": "La fonction ne renvoie aucune valeur au point d'appel"
          },
          "correct": true
        },
        {
          "text": {
            "en": "The function returns an integer 0",
            "fr": "La fonction renvoie l'entier 0"
          },
          "correct": false
        },
        {
          "text": {
            "en": "The function accepts zero parameters",
            "fr": "La fonction n'accepte aucun paramètre"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "void means the function performs an action (like printing or modifying state) without returning data.",
        "fr": "void indique que la fonction effectue une action sans renvoyer de données."
      }
    },
    {
      "question": {
        "en": "What happens to remaining code inside a function after a 'return' statement is executed?",
        "fr": "Qu'arrive-t-il au code situé après une instruction 'return' dans une fonction ?"
      },
      "options": [
        {
          "text": {
            "en": "It is skipped; the function immediately exits",
            "fr": "Il est ignoré ; la fonction se termine immédiatement"
          },
          "correct": true
        },
        {
          "text": {
            "en": "It executes in the background",
            "fr": "Il s'exécute en tâche de fond"
          },
          "correct": false
        },
        {
          "text": {
            "en": "It causes a compiler warning",
            "fr": "Il génère un avertissement de compilation"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Executing 'return' hands back control to the caller immediately, ignoring any remaining lines.",
        "fr": "L'instruction 'return' rend immédiatement la main à l'appelant en ignorant les lignes suivantes."
      }
    },
    {
      "question": {
        "en": "Can two functions in C++ share the same name if they only differ by return type?",
        "fr": "Deux fonctions peuvent-elles porter le même nom si seul leur type de retour est différent ?"
      },
      "options": [
        {
          "text": {
            "en": "No, C++ overload resolution requires different parameter types or counts",
            "fr": "Non, la surcharge en C++ exige des types ou un nombre de paramètres différents"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Yes, return type overloading is fully supported",
            "fr": "Oui, la surcharge par type de retour est permise"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Only if declared static",
            "fr": "Seulement si elles sont déclarées static"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Function overloading in C++ requires distinct parameter signatures; return type alone is not enough.",
        "fr": "La surcharge exige des paramètres différents ; le type de retour seul ne suffit pas."
      }
    },
    {
      "question": {
        "en": "How can you access a global variable 'x' if a local variable also named 'x' is in scope?",
        "fr": "Comment accéder à une variable globale 'x' masquée par une variable locale portant le même nom ?"
      },
      "options": [
        {
          "text": {
            "en": "Using the unary scope resolution operator: ::x",
            "fr": "En utilisant l'opérateur unaire de portée : ::x"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Using global.x",
            "fr": "En écrivant global.x"
          },
          "correct": false
        },
        {
          "text": {
            "en": "It is impossible; the global variable is deleted",
            "fr": "C'est impossible ; la variable globale est détruite"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Prefixing with :: (unary scope resolution) accesses the global variable in global scope.",
        "fr": "Le préfixe :: (résolution de portée globale unaire) permet d'accéder à la variable globale."
      }
    },
    {
      "question": {
        "en": "In a banking simulation, why should deposit() and withdraw() check that amounts are positive (> 0)?",
        "fr": "Dans un programme bancaire, pourquoi vérifier que les montants de dépôt/retrait sont strictement positifs ?"
      },
      "options": [
        {
          "text": {
            "en": "To prevent negative transaction fraud or unintended state corruption",
            "fr": "Pour empêcher les transactions négatives ou la corruption du solde"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Because C++ does not support negative doubles",
            "fr": "Car C++ ne supporte pas les doubles négatifs"
          },
          "correct": false
        },
        {
          "text": {
            "en": "To speed up floating point calculations",
            "fr": "Pour accélérer les calculs flottants"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Input validation is essential business logic in robust software.",
        "fr": "La validation des entrées utilisateur est une règle métier fondamentale."
      }
    },
    {
      "question": {
        "en": "In Rock-Paper-Scissors, what operator combination evaluates whether player beats computer?",
        "fr": "Au chifoumi, quelle combinaison logique évalue si le joueur bat l'ordinateur ?"
      },
      "options": [
        {
          "text": {
            "en": "(p=='r' && c=='s') || (p=='p' && c=='r') || (p=='s' && c=='p')",
            "fr": "(p=='r' && c=='s') || (p=='p' && c=='r') || (p=='s' && c=='p')"
          },
          "correct": true
        },
        {
          "text": {
            "en": "p > c",
            "fr": "p > c"
          },
          "correct": false
        },
        {
          "text": {
            "en": "p == c",
            "fr": "p == c"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Grouping each winning pair with && and combining all winning scenarios with ||.",
        "fr": "En regroupant chaque paire gagnante avec && et en combinant les cas avec ||."
      }
    }
  ],
  "mod-5": [
    {
      "question": {
        "en": "What is the index of the first element in a C++ array?",
        "fr": "Quel est l'index du premier élément d'un tableau en C++ ?"
      },
      "options": [
        {
          "text": {
            "en": "0",
            "fr": "0"
          },
          "correct": true
        },
        {
          "text": {
            "en": "1",
            "fr": "1"
          },
          "correct": false
        },
        {
          "text": {
            "en": "-1",
            "fr": "-1"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "C++ arrays are strictly 0-indexed; array[0] refers to the first element.",
        "fr": "Les tableaux C++ commencent strictement à l'indice 0 ; array[0] est le premier élément."
      }
    },
    {
      "question": {
        "en": "How do you calculate the number of elements in a raw array 'int arr[10]' using sizeof?",
        "fr": "Comment calculer le nombre d'éléments d'un tableau 'int arr[10]' avec sizeof ?"
      },
      "options": [
        {
          "text": {
            "en": "sizeof(arr) / sizeof(arr[0])",
            "fr": "sizeof(arr) / sizeof(arr[0])"
          },
          "correct": true
        },
        {
          "text": {
            "en": "sizeof(arr)",
            "fr": "sizeof(arr)"
          },
          "correct": false
        },
        {
          "text": {
            "en": "arr.length()",
            "fr": "arr.length()"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Total byte size divided by the byte size of a single element yields the element count.",
        "fr": "La taille totale en octets divisée par la taille d'un seul élément donne le nombre d'éléments."
      }
    },
    {
      "question": {
        "en": "Why should you prefer 'const auto& item' in a range-based for loop over 'auto item' for large objects?",
        "fr": "Pourquoi préférer 'const auto& item' dans une boucle for-each pour de gros objets ?"
      },
      "options": [
        {
          "text": {
            "en": "It avoids expensive copies while guaranteeing read-only safety",
            "fr": "Elle évite les copies coûteuses tout en garantissant la lecture seule"
          },
          "correct": true
        },
        {
          "text": {
            "en": "It allows modifying the original elements",
            "fr": "Elle permet de modifier les originaux"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Range-based for requires references to compile",
            "fr": "La boucle for-each l'exige pour compiler"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "const auto& binds a read-only reference directly to the container element without copying.",
        "fr": "const auto& lie une référence en lecture seule à chaque élément sans aucune copie."
      }
    },
    {
      "question": {
        "en": "What happens when you pass a raw array to a function parameter (e.g. void fn(int arr[]))?",
        "fr": "Que se produit-il lorsqu'on passe un tableau brut en paramètre de fonction ?"
      },
      "options": [
        {
          "text": {
            "en": "The array decays into a pointer (int*), losing its size information",
            "fr": "Le tableau dégénère en pointeur (int*) et perd sa taille"
          },
          "correct": true
        },
        {
          "text": {
            "en": "The entire array is cloned on the stack",
            "fr": "Le tableau entier est cloné sur la pile"
          },
          "correct": false
        },
        {
          "text": {
            "en": "The compiler throws an error",
            "fr": "Le compilateur signale une erreur"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Array decay converts the array to a pointer to its first element; always pass size separately.",
        "fr": "La dégénérescence convertit le tableau en pointeur vers le 1er élément ; la taille doit être passée."
      }
    },
    {
      "question": {
        "en": "What is the average time complexity of Linear Search on an unsorted array of N elements?",
        "fr": "Quelle est la complexité temporelle moyenne d'une recherche linéaire sur un tableau de N éléments ?"
      },
      "options": [
        {
          "text": {
            "en": "O(N)",
            "fr": "O(N)"
          },
          "correct": true
        },
        {
          "text": {
            "en": "O(1)",
            "fr": "O(1)"
          },
          "correct": false
        },
        {
          "text": {
            "en": "O(log N)",
            "fr": "O(log N)"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Linear search checks each element one by one, requiring up to N comparisons in the worst case.",
        "fr": "La recherche linéaire inspecte les éléments un par un, nécessitant jusqu'à N étapes au pire."
      }
    },
    {
      "question": {
        "en": "How does Bubble Sort arrange elements into ascending order?",
        "fr": "Comment le tri à bulles (Bubble Sort) ordonne-t-il les éléments en ordre croissant ?"
      },
      "options": [
        {
          "text": {
            "en": "Repeatedly compares adjacent pairs and swaps them if out of order",
            "fr": "Compare les paires adjacentes et les échange si elles sont dans le désordre"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Divides the array into halves recursively",
            "fr": "Divise récursivement le tableau en deux"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Inserts elements into a binary search tree",
            "fr": "Insère les éléments dans un arbre binaire"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Bubble Sort bubbles the largest remaining value to the end of the array each pass.",
        "fr": "Le tri à bulles fait remonter le plus grand élément restant à la fin du tableau à chaque tour."
      }
    },
    {
      "question": {
        "en": "How do you access the element in row 1, column 2 of a 2D array 'grid'?",
        "fr": "Comment accéder à l'élément de la ligne 1, colonne 2 d'une matrice 2D 'grid' ?"
      },
      "options": [
        {
          "text": {
            "en": "grid[1][2]",
            "fr": "grid[1][2]"
          },
          "correct": true
        },
        {
          "text": {
            "en": "grid[1, 2]",
            "fr": "grid[1, 2]"
          },
          "correct": false
        },
        {
          "text": {
            "en": "grid.at(1, 2)",
            "fr": "grid.at(1, 2)"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "2D arrays use chained brackets: array[rowIndex][columnIndex].",
        "fr": "Les tableaux 2D utilisent des crochets successifs : tab[indexLigne][indexColonne]."
      }
    }
  ],
  "mod-6": [
    {
      "question": {
        "en": "What does the address-of operator (&x) return?",
        "fr": "Que renvoie l'opérateur d'adresse (&x) ?"
      },
      "options": [
        {
          "text": {
            "en": "The hexadecimal memory address where variable x is located in RAM",
            "fr": "L'adresse mémoire hexadécimale où se trouve la variable x en RAM"
          },
          "correct": true
        },
        {
          "text": {
            "en": "The value stored inside x",
            "fr": "La valeur stockée dans x"
          },
          "correct": false
        },
        {
          "text": {
            "en": "A duplicate copy of x",
            "fr": "Une copie identique de x"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "&x gives the memory address location where the variable resides in memory.",
        "fr": "&x donne l'emplacement physique en mémoire où réside la variable."
      }
    },
    {
      "question": {
        "en": "Why does passing by reference (void swap(int& a, int& b)) allow modifying the original variables?",
        "fr": "Pourquoi le passage par référence permet-il de modifier les variables originales ?"
      },
      "options": [
        {
          "text": {
            "en": "References alias the caller's actual memory addresses instead of creating copies",
            "fr": "Les références sont des alias directs de la mémoire originale sans copie"
          },
          "correct": true
        },
        {
          "text": {
            "en": "References create global variables",
            "fr": "Les références créent des variables globales"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Because reference parameters run on a different thread",
            "fr": "Car elles tournent sur un thread séparé"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "A reference is an immutable alias; any read or write operates directly on the caller's variable.",
        "fr": "Une référence est un alias direct ; toute lecture ou écriture modifie la variable source."
      }
    },
    {
      "question": {
        "en": "What is the main benefit of declaring a parameter as 'const std::string& str'?",
        "fr": "Quel est le bénéfice majeur de déclarer un paramètre comme 'const std::string& str' ?"
      },
      "options": [
        {
          "text": {
            "en": "Zero-copy performance combined with read-only safety",
            "fr": "Performance sans copie combinée à la sécurité de la lecture seule"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Allows the function to alter the caller's string",
            "fr": "Permet de modifier la chaîne appelante"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Converts strings to integer hashes automatically",
            "fr": "Convertit automatiquement en hash entier"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "const Type& prevents deep copying large objects while strictly preventing accidental modifications.",
        "fr": "const Type& évite les copies coûteuses tout en interdisant toute modification accidentelle."
      }
    },
    {
      "question": {
        "en": "What is the dereference operator (*) used for with a pointer?",
        "fr": "À quoi sert l'opérateur de déréférencement (*) appliqué à un pointeur ?"
      },
      "options": [
        {
          "text": {
            "en": "To read or write the actual value stored at the address pointed to",
            "fr": "À lire ou modifier la valeur stockée à l'adresse pointée"
          },
          "correct": true
        },
        {
          "text": {
            "en": "To obtain the pointer's own address",
            "fr": "À obtenir l'adresse du pointeur lui-même"
          },
          "correct": false
        },
        {
          "text": {
            "en": "To multiply the pointer by 2",
            "fr": "À multiplier le pointeur par 2"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "*ptr dereferences the pointer, allowing direct access to the pointed-to object.",
        "fr": "*ptr déréférence le pointeur et donne un accès direct à la valeur ciblée."
      }
    },
    {
      "question": {
        "en": "Why should unassigned pointers always be initialized to 'nullptr' in modern C++?",
        "fr": "Pourquoi un pointeur non assigné doit-il toujours être initialisé à 'nullptr' ?"
      },
      "options": [
        {
          "text": {
            "en": "To prevent wild / dangling pointers containing random garbage memory addresses",
            "fr": "Pour éviter les pointeurs fous contenant des adresses mémoires aléatoires"
          },
          "correct": true
        },
        {
          "text": {
            "en": "nullptr allocates 4 bytes on the heap",
            "fr": "nullptr alloue 4 octets sur le tas"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Modern C++ does not allow declaring pointers without nullptr",
            "fr": "C++ moderne interdit de déclarer un pointeur sans nullptr"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Initializing to nullptr allows safe checking (if (ptr != nullptr)) before dereferencing.",
        "fr": "Initialiser à nullptr permet de tester la validité (if (ptr != nullptr)) avant utilisation."
      }
    },
    {
      "question": {
        "en": "What happens if you allocate heap memory with 'new' but forget to call 'delete'?",
        "fr": "Que se passe-t-il si vous allouez de la mémoire avec 'new' sans jamais appeler 'delete' ?"
      },
      "options": [
        {
          "text": {
            "en": "A memory leak occurs; RAM remains consumed until program termination",
            "fr": "Une fuite de mémoire survient ; la RAM reste occupée jusqu'à la fin du programme"
          },
          "correct": true
        },
        {
          "text": {
            "en": "The memory is automatically deleted on function return",
            "fr": "La mémoire est libérée automatiquement à la fin de la fonction"
          },
          "correct": false
        },
        {
          "text": {
            "en": "The CPU triggers an immediate hardware reset",
            "fr": "Le processeur redémarre la machine"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Heap memory allocated with 'new' must be explicitly freed with 'delete' to prevent leaks.",
        "fr": "La mémoire allouée avec 'new' doit être libérée manuellement avec 'delete' pour éviter les fuites."
      }
    }
  ],
  "mod-7": [
    {
      "question": {
        "en": "What must every recursive function have to prevent infinite recursion and stack overflow?",
        "fr": "Que doit posséder toute fonction récursive pour éviter un débordement de pile (stack overflow) ?"
      },
      "options": [
        {
          "text": {
            "en": "A base case that stops recursion without making further recursive calls",
            "fr": "Un cas de base qui arrête la récursion sans nouvel appel"
          },
          "correct": true
        },
        {
          "text": {
            "en": "A loop counter",
            "fr": "Un compteur de boucle for"
          },
          "correct": false
        },
        {
          "text": {
            "en": "A global variable",
            "fr": "Une variable globale"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "The base case halts recursion; without it, function calls consume all call stack space.",
        "fr": "Le cas de base arrête la récursion ; sans lui, la pile d'appels sature et fait planter le programme."
      }
    },
    {
      "question": {
        "en": "How do function templates (template <typename T>) work under the hood during compilation?",
        "fr": "Comment les patrons de fonctions (template <typename T>) fonctionnent-ils lors de la compilation ?"
      },
      "options": [
        {
          "text": {
            "en": "The compiler generates concrete function overloads for each invoked data type",
            "fr": "Le compilateur génère les surcharges concrètes pour chaque type utilisé"
          },
          "correct": true
        },
        {
          "text": {
            "en": "They convert all variables into generic void* pointers at runtime",
            "fr": "Ils convertissent tout en pointeurs void* à l'exécution"
          },
          "correct": false
        },
        {
          "text": {
            "en": "They interpret types at runtime like Python",
            "fr": "Ils interprètent les types dynamiquement comme Python"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "C++ templates are zero-cost abstractions instantiated at compile-time with full type safety.",
        "fr": "Les templates C++ sont instanciés à la compilation sans aucun surcoût d'exécution."
      }
    },
    {
      "question": {
        "en": "What is the default access level for members declared inside a C++ 'struct'?",
        "fr": "Quel est le niveau d'accès par défaut des membres d'une 'struct' en C++ ?"
      },
      "options": [
        {
          "text": {
            "en": "public",
            "fr": "public"
          },
          "correct": true
        },
        {
          "text": {
            "en": "private",
            "fr": "private"
          },
          "correct": false
        },
        {
          "text": {
            "en": "protected",
            "fr": "protected"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Members of a struct are public by default, whereas members of a class are private by default.",
        "fr": "Les membres d'une struct sont publics par défaut, alors que ceux d'une class sont privés."
      }
    },
    {
      "question": {
        "en": "Why is it best practice to pass a large struct to a read-only function as 'const StructName&'?",
        "fr": "Pourquoi passer une grande structure en 'const StructName&' pour une lecture seule ?"
      },
      "options": [
        {
          "text": {
            "en": "It avoids copying all member variables while protecting them from modification",
            "fr": "Cela évite de copier tous les membres tout en empêchant toute altération"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Structs cannot be passed by value in C++",
            "fr": "Les structs ne peuvent pas être passées par valeur"
          },
          "correct": false
        },
        {
          "text": {
            "en": "It frees the struct memory automatically",
            "fr": "Cela libère automatiquement la mémoire de la struct"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Passing large structs by value copies every single member field; const reference is zero-copy.",
        "fr": "Passer par valeur copie chaque membre ; la référence constante évite tout surcoût."
      }
    },
    {
      "question": {
        "en": "What underlying type represents enum values by default in C++?",
        "fr": "Quel type sous-jacent représente les valeurs d'un enum par défaut en C++ ?"
      },
      "options": [
        {
          "text": {
            "en": "Integers (int), starting at 0",
            "fr": "Des entiers (int), débutant à 0"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Strings",
            "fr": "Des chaînes de caractères"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Floating-point numbers",
            "fr": "Des nombres décimaux"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Enum enumerators are assigned consecutive integer values starting from 0 by default.",
        "fr": "Les valeurs d'un enum sont associées à des entiers consécutifs démarrant à 0."
      }
    }
  ],
  "mod-8": [
    {
      "question": {
        "en": "What is the difference between a class and an object in Object-Oriented Programming?",
        "fr": "Quelle est la différence entre une classe et un objet en Programmation Orientée Objet ?"
      },
      "options": [
        {
          "text": {
            "en": "A class is the blueprint; an object is a concrete instance of that blueprint",
            "fr": "La classe est le modèle ; l'objet est une instance concrète de ce modèle"
          },
          "correct": true
        },
        {
          "text": {
            "en": "An object is a blueprint; a class is the instance",
            "fr": "L'objet est le modèle ; la classe est l'instance"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Classes and objects are identical concepts",
            "fr": "Classes et objets sont des termes strictement synonymes"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "A class defines properties and methods; objects are instantiated instances in memory.",
        "fr": "La classe définit la structure et les méthodes ; l'objet est l'entité concrète en mémoire."
      }
    },
    {
      "question": {
        "en": "When is a constructor method called in C++?",
        "fr": "Quand la méthode constructeur est-elle appelée en C++ ?"
      },
      "options": [
        {
          "text": {
            "en": "Automatically whenever a new object of that class is instantiated",
            "fr": "Automatiquement dès qu'un nouvel objet de la classe est instancié"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Only when explicitly invoked with object.Constructor()",
            "fr": "Seulement si on l'appelle avec objet.Constructeur()"
          },
          "correct": false
        },
        {
          "text": {
            "en": "When the program exits main()",
            "fr": "À la fermeture du programme"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Constructors run automatically at instantiation to set up the object's initial state.",
        "fr": "Le constructeur s'exécute automatiquement à l'instanciation pour initialiser l'objet."
      }
    },
    {
      "question": {
        "en": "What allows constructor overloading to work in C++?",
        "fr": "Qu'est-ce qui permet la surcharge de constructeurs en C++ ?"
      },
      "options": [
        {
          "text": {
            "en": "Providing multiple constructors with different parameter lists",
            "fr": "Fournir plusieurs constructeurs avec des listes de paramètres différentes"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Giving different names to each constructor",
            "fr": "Donner un nom différent à chaque constructeur"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Specifying different return types",
            "fr": "Spécifier des types de retour différents"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Constructors must share the class name; they are overloaded via distinct parameter counts and types.",
        "fr": "Tous les constructeurs portent le nom de la classe ; ils diffèrent par leurs paramètres."
      }
    },
    {
      "question": {
        "en": "What OOP principle is achieved by making member variables private and providing public getters/setters?",
        "fr": "Quel principe de la POO réalise-t-on en rendant les variables privées avec accesseurs publics ?"
      },
      "options": [
        {
          "text": {
            "en": "Encapsulation (Data Hiding)",
            "fr": "L'Encapsulation (Masquage des données)"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Polymorphism",
            "fr": "Le Polymorphisme"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Multiple Inheritance",
            "fr": "L'Héritage Multiple"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Encapsulation hides sensitive data from direct tampering and validates mutations via setters.",
        "fr": "L'encapsulation protège les attributs internes et filtre leurs modifications par les setters."
      }
    },
    {
      "question": {
        "en": "What syntax establishes that class Dog inherits publicly from class Animal?",
        "fr": "Quelle syntaxe déclare que la classe Dog hérite publiquement de la classe Animal ?"
      },
      "options": [
        {
          "text": {
            "en": "class Dog : public Animal { ... };",
            "fr": "class Dog : public Animal { ... };"
          },
          "correct": true
        },
        {
          "text": {
            "en": "class Dog extends Animal { ... };",
            "fr": "class Dog extends Animal { ... };"
          },
          "correct": false
        },
        {
          "text": {
            "en": "class Dog inherits Animal { ... };",
            "fr": "class Dog inherits Animal { ... };"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "In C++, inheritance is specified using a colon followed by access specifier (class Dog : public Animal).",
        "fr": "En C++, l'héritage s'écrit avec un deux-points suivi du mode d'accès (: public Animal)."
      }
    }
  ],
  "mod-9": [
    {
      "question": {
        "en": "Which method appends a new element to the end of a std::vector dynamic array?",
        "fr": "Quelle méthode ajoute un nouvel élément à la fin d'un tableau dynamique std::vector ?"
      },
      "options": [
        {
          "text": {
            "en": "push_back(element)",
            "fr": "push_back(element)"
          },
          "correct": true
        },
        {
          "text": {
            "en": "append(element)",
            "fr": "append(element)"
          },
          "correct": false
        },
        {
          "text": {
            "en": "add(element)",
            "fr": "add(element)"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "std::vector::push_back(val) inserts val at the end and reallocates memory dynamically if capacity is full.",
        "fr": "std::vector::push_back(val) insère à la fin et réalloue la mémoire dynamiquement si nécessaire."
      }
    },
    {
      "question": {
        "en": "Why MUST base classes with virtual methods always declare a virtual destructor (virtual ~Base() = default;)?",
        "fr": "Pourquoi une classe de base polymorphe DOIT-ELLE toujours avoir un destructeur virtuel ?"
      },
      "options": [
        {
          "text": {
            "en": "To ensure derived class destructors run when deleting an object through a base pointer",
            "fr": "Pour garantir l'appel du destructeur dérivé lors de la destruction via pointeur de base"
          },
          "correct": true
        },
        {
          "text": {
            "en": "To make constructors run faster",
            "fr": "Pour accélérer les constructeurs"
          },
          "correct": false
        },
        {
          "text": {
            "en": "It prevents compilation errors in main",
            "fr": "Pour éviter une erreur de compilation dans main"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "Deleting a derived object via Base* without a virtual destructor causes undefined behavior and leaks.",
        "fr": "Supprimer un objet dérivé via Base* sans destructeur virtuel entraîne fuites et comportement indéfini."
      }
    },
    {
      "question": {
        "en": "What is the primary advantage of std::unique_ptr over a raw pointer with 'new'?",
        "fr": "Quel est l'avantage majeur de std::unique_ptr par rapport à un pointeur brut 'new' ?"
      },
      "options": [
        {
          "text": {
            "en": "Automatic RAII cleanup: memory is deleted automatically when the unique_ptr leaves scope",
            "fr": "Nettoyage RAII automatique : la mémoire est libérée dès que l'unique_ptr sort de portée"
          },
          "correct": true
        },
        {
          "text": {
            "en": "unique_ptr can be shared by multiple threads simultaneously without locks",
            "fr": "unique_ptr est partagé entre threads sans verrous"
          },
          "correct": false
        },
        {
          "text": {
            "en": "unique_ptr uses no memory at all",
            "fr": "unique_ptr n'occupe aucune mémoire"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "std::unique_ptr exclusively owns heap memory and frees it automatically on destruction, preventing leaks.",
        "fr": "std::unique_ptr possède la ressource en exclusivité et la détruit automatiquement, éliminant les fuites."
      }
    },
    {
      "question": {
        "en": "What data structure does std::map use under the hood to maintain sorted key-value pairs?",
        "fr": "Quelle structure de données std::map utilise-t-il pour conserver les paires clé-valeur triées ?"
      },
      "options": [
        {
          "text": {
            "en": "Self-balancing Red-Black Tree (O(log N) lookup)",
            "fr": "Arbre rouge-noir équilibré (recherche en O(log N))"
          },
          "correct": true
        },
        {
          "text": {
            "en": "Unsorted contiguous array",
            "fr": "Tableau contigu non trié"
          },
          "correct": false
        },
        {
          "text": {
            "en": "Singly linked list",
            "fr": "Liste simplement chaînée"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "std::map keeps elements sorted by key with logarithmic O(log N) insertions, removals, and searches.",
        "fr": "std::map maintient ses clés ordonnées dans un arbre binaire de recherche équilibré en O(log N)."
      }
    },
    {
      "question": {
        "en": "Why should you use std::lock_guard<std::mutex> when synchronizing threads?",
        "fr": "Pourquoi utiliser std::lock_guard<std::mutex> lors de la synchronisation de threads ?"
      },
      "options": [
        {
          "text": {
            "en": "It locks the mutex upon construction and unlocks automatically when exiting scope (RAII)",
            "fr": "Il verrouille à la création et déverrouille automatiquement en sortie de portée (RAII)"
          },
          "correct": true
        },
        {
          "text": {
            "en": "It creates a new thread automatically",
            "fr": "Il crée un nouveau thread automatiquement"
          },
          "correct": false
        },
        {
          "text": {
            "en": "It prevents threads from needing mutexes",
            "fr": "Il dispense d'utiliser des mutexes"
          },
          "correct": false
        }
      ],
      "explanation": {
        "en": "std::lock_guard guarantees mutex release even if an exception is thrown, preventing deadlocks.",
        "fr": "std::lock_guard garantit la libération du mutex même en cas d'exception, évitant les blocages."
      }
    }
  ]
,
  "mod-10": [
    {
        "question": {
            "en": "Why does a dynamic array (like std::vector or MyVector) double its capacity (2x) when full rather than growing by +1?",
            "fr": "Pourquoi un tableau dynamique double-t-il sa capacité (2x) quand il est plein plutôt que d'ajouter +1 ?"
        },
        "options": [
            {
                "text": {
                    "en": "To achieve amortized O(1) insertion time; growing by +1 causes quadratic O(N²) reallocation overhead",
                    "fr": "Pour obtenir un coût amorti en O(1) ; grandir de +1 entraîne un coût quadratique en O(N²)"
                },
                "correct": true
            },
            {
                "text": {
                    "en": "Because computer memory can only be addressed in powers of 2",
                    "fr": "Car la mémoire ne s'adresse qu'en puissances de 2"
                },
                "correct": false
            },
            {
                "text": {
                    "en": "To store elements on the CPU stack instead of the heap",
                    "fr": "Pour allouer sur la pile CPU au lieu du tas"
                },
                "correct": false
            }
        ],
        "explanation": {
            "en": "Exponential capacity doubling guarantees that expensive heap reallocations occur exponentially less frequently, yielding amortized constant O(1) push_back time.",
            "fr": "Le doublement de capacité garantit que les réallocations deviennent exponentiellement rares, assurant un temps amorti en O(1)."
        }
    },
    {
        "question": {
            "en": "Why must a unique ownership smart pointer (like std::unique_ptr or MyUniquePtr) declare its copy constructor as '= delete'?",
            "fr": "Pourquoi un pointeur intelligent à possession exclusive doit-il marquer son constructeur de copie en '= delete' ?"
        },
        "options": [
            {
                "text": {
                    "en": "To prevent two smart pointers from owning and double-freeing the same heap memory address",
                    "fr": "Pour empêcher deux pointeurs de posséder et détruire deux fois (double-free) la même adresse mémoire"
                },
                "correct": true
            },
            {
                "text": {
                    "en": "Because template classes cannot have copy constructors in C++",
                    "fr": "Car les classes modèles ne peuvent pas avoir de constructeur de copie"
                },
                "correct": false
            },
            {
                "text": {
                    "en": "To force the compiler to convert all pointers into references",
                    "fr": "Pour forcer la conversion des pointeurs en références"
                },
                "correct": false
            }
        ],
        "explanation": {
            "en": "Exclusive ownership means exactly one pointer manages the resource. Copying would lead to a catastrophic double-free when both destructors execute. Ownership must be moved via std::move.",
            "fr": "La possession exclusive interdit la copie pour éviter le double-free destructeur. Le transfert doit s'effectuer via std::move."
        }
    },
    {
        "question": {
            "en": "What is the primary systems engineering advantage of a Fixed-Block Memory Pool over repeated 'new' / 'malloc' calls?",
            "fr": "Quel est l'avantage clé d'un pool de mémoire à blocs fixes par rapport aux appels répétés à 'new'/'malloc' ?"
        },
        "options": [
            {
                "text": {
                    "en": "Deterministic O(1) allocation speed without OS syscall overhead, and zero heap fragmentation",
                    "fr": "Vitesse d'allocation déterministe en O(1) sans appel système OS, et zéro fragmentation du tas"
                },
                "correct": true
            },
            {
                "text": {
                    "en": "It compresses data so objects take zero bytes in RAM",
                    "fr": "Il compresse les objets à 0 octet en mémoire"
                },
                "correct": false
            },
            {
                "text": {
                    "en": "It allows deleting objects without running destructors",
                    "fr": "Il supprime les objets sans destructeur"
                },
                "correct": false
            }
        ],
        "explanation": {
            "en": "General-purpose allocators suffer from system call locks and heap fragmentation. Fixed-block pools pop pre-allocated nodes from an intrusive free-list in deterministic O(1) time.",
            "fr": "Les allocateurs généralistes génèrent de la fragmentation et des verrous noyau. Les pools à blocs fixes allouent en O(1) déterministe."
        }
    },
    {
        "question": {
            "en": "Why is 'std::condition_variable::wait(lock, predicate)' superior to a 'while (!taskReady) {}' spin-loop in worker threads?",
            "fr": "Pourquoi 'std::condition_variable::wait(lock, predicate)' est-il supérieur à une boucle 'while (!taskReady) {}' dans un thread ?"
        },
        "options": [
            {
                "text": {
                    "en": "It puts the waiting worker thread to sleep, yielding CPU cores to other processes and consuming 0% idle CPU",
                    "fr": "Il endort le thread travailleur, libérant les cœurs CPU et consommant 0% de processeur au repos"
                },
                "correct": true
            },
            {
                "text": {
                    "en": "Spin-loops cause compilation errors in C++20",
                    "fr": "Les boucles actives génèrent des erreurs de compilation"
                },
                "correct": false
            },
            {
                "text": {
                    "en": "condition_variable executes asynchronous tasks directly on GPU cores",
                    "fr": "condition_variable délègue au GPU"
                },
                "correct": false
            }
        ],
        "explanation": {
            "en": "Busy-waiting (spin-looping) burns 100% of a CPU core doing nothing. A condition_variable suspends thread execution until notified by producer threads.",
            "fr": "L'attente active (spin-loop) sature un cœur CPU à 100%. condition_variable endort le thread jusqu'au réveil par notify."
        }
    },
    {
        "question": {
            "en": "Why is 'std::memcpy' the standard-mandated way to parse raw byte buffers into C++ structs rather than casting 'reinterpret_cast<Header*>(buf)'?",
            "fr": "Pourquoi 'std::memcpy' est-il la méthode recommandée pour désérialiser des octets bruts en structure plutôt que 'reinterpret_cast' ?"
        },
        "options": [
            {
                "text": {
                    "en": "To avoid violating the Strict Aliasing Rule and avoid unaligned memory access hardware traps",
                    "fr": "Pour éviter de violer la règle d'aliasing strict et éviter les fautes matérielles d'alignement mémoire"
                },
                "correct": true
            },
            {
                "text": {
                    "en": "reinterpret_cast cannot cast pointer types in C++",
                    "fr": "reinterpret_cast ne fonctionne pas sur les pointeurs"
                },
                "correct": false
            },
            {
                "text": {
                    "en": "std::memcpy automatically encrypts network packets",
                    "fr": "std::memcpy chiffre automatiquement les paquets"
                },
                "correct": false
            }
        ],
        "explanation": {
            "en": "Casting raw byte pointers directly violates the C++ strict aliasing rule and can trigger alignment faults on CPUs requiring aligned access. Modern compilers optimize std::memcpy into a single register move without undefined behavior.",
            "fr": "Le cast direct viole l'aliasing strict et peut causer des fautes d'alignement matériel. Les compilateurs modernes optimisent std::memcpy en une seule instruction sans comportement indéfini."
        }
    }
],
  "mod-11": [
    {
        "question": {
            "en": "Why must std::forward<T> be called with an explicit template argument (e.g., std::forward<T>(arg)), whereas std::move does not require one?",
            "fr": "Pourquoi std::forward<T> nécessite-t-il un argument de template explicite alors que std::move n'en a pas besoin ?"
        },
        "options": [
            {
                "text": {
                    "en": "Because std::forward relies on the deduced type T and reference collapsing rules to conditionally cast to an rvalue; std::move always unconditionally casts to an rvalue.",
                    "fr": "Parce que std::forward utilise le type déduit T et l'écrasement de référence pour caster conditionnellement en rvalue ; std::move caste inconditionnellement en rvalue."
                },
                "correct": true
            },
            {
                "text": {
                    "en": "Because std::forward allocates heap memory for the forward buffer",
                    "fr": "Parce que std::forward alloue de la mémoire sur le tas pour le tampon"
                },
                "correct": false
            },
            {
                "text": {
                    "en": "Because std::move only works on primitive types like int and double",
                    "fr": "Parce que std::move ne fonctionne que sur les types primitifs comme int et double"
                },
                "correct": false
            }
        ],
        "explanation": {
            "en": "std::move is an unconditional cast to an rvalue reference. std::forward<T> preserves the original value category (lvalue or rvalue) by inspecting T and applying reference collapsing (& + && -> &).",
            "fr": "std::move caste inconditionnellement en rvalue. std::forward<T> préserve la catégorie d'origine (lvalue ou rvalue) en inspectant T et en appliquant l'écrasement de références."
        }
    },
    {
        "question": {
            "en": "What occurs if a function declared with the C++20 'consteval' specifier cannot be evaluated at compile time in a particular call?",
            "fr": "Que se passe-t-il si une fonction déclarée avec 'consteval' (C++20) ne peut pas être évaluée à la compilation ?"
        },
        "options": [
            {
                "text": {
                    "en": "The compiler will issue a compilation error; unlike constexpr, consteval functions can NEVER run at runtime.",
                    "fr": "Le compilateur émet une erreur de compilation ; contrairement à constexpr, les fonctions consteval ne s'exécutent JAMAIS à l'exécution."
                },
                "correct": true
            },
            {
                "text": {
                    "en": "The compiler silently falls back to running the function at runtime",
                    "fr": "Le compilateur bascule silencieusement vers une exécution au runtime"
                },
                "correct": false
            },
            {
                "text": {
                    "en": "The program enters an infinite loop at runtime",
                    "fr": "Le programme entre dans une boucle infinie à l'exécution"
                },
                "correct": false
            }
        ],
        "explanation": {
            "en": "consteval produces an 'immediate function'. Every call to a consteval function must produce a compile-time constant expression, or the program is ill-formed and fails to compile.",
            "fr": "consteval définit une 'fonction immédiate'. Chaque appel doit produire une constante à la compilation, sinon la compilation échoue."
        }
    },
    {
        "question": {
            "en": "What hidden memory overhead does a class incur when it declares at least one virtual member function?",
            "fr": "Quel surcoût mémoire masqué une classe subit-elle lorsqu'elle déclare au moins une fonction membre virtuelle ?"
        },
        "options": [
            {
                "text": {
                    "en": "The compiler embeds a hidden pointer (__vptr) inside each object instance pointing to the class VTable, typically adding 8 bytes on 64-bit platforms.",
                    "fr": "Le compilateur insère un pointeur masqué (__vptr) dans chaque instance pointant vers la VTable de la classe, ajoutant généralement 8 octets sur 64 bits."
                },
                "correct": true
            },
            {
                "text": {
                    "en": "The compiler duplicates the entire binary machine code of all methods inside each object instance",
                    "fr": "Le compilateur duplique l'intégralité du code machine de toutes les méthodes dans chaque instance"
                },
                "correct": false
            },
            {
                "text": {
                    "en": "Virtual functions disable stack allocation, forcing all instances to be allocated on the heap",
                    "fr": "Les fonctions virtuelles interdisent l'allocation sur la pile, forçant l'allocation sur le tas"
                },
                "correct": false
            }
        ],
        "explanation": {
            "en": "Virtual dispatch requires a VTable containing function pointers and a __vptr inside each instance. Calling a virtual method requires dereferencing the vptr and indexing the table.",
            "fr": "Le dispatch virtuel requiert une VTable de pointeurs de fonctions et un __vptr par instance. L'appel implique de déréférencer le vptr puis d'indexer la table."
        }
    },
    {
        "question": {
            "en": "Why must C++ destructors never allow exceptions to escape (and are implicitly noexcept in modern C++)?",
            "fr": "Pourquoi les destructeurs C++ ne doivent-ils jamais laisser échapper d'exceptions (et sont implicitement noexcept) ?"
        },
        "options": [
            {
                "text": {
                    "en": "If a destructor throws while another exception is already actively unwinding the stack, C++ immediately calls std::terminate, aborting the process.",
                    "fr": "Si un destructeur lève une exception alors qu'une autre déroule déjà la pile, C++ appelle immédiatement std::terminate et interrompt le processus."
                },
                "correct": true
            },
            {
                "text": {
                    "en": "Because throwing an exception inside a destructor corrupts the CPU instruction cache",
                    "fr": "Parce que lever une exception dans un destructeur corrompt le cache d'instructions du CPU"
                },
                "correct": false
            },
            {
                "text": {
                    "en": "Because destructors cannot have try-catch blocks inside their body",
                    "fr": "Parce que les destructeurs ne peuvent pas contenir de blocs try-catch"
                },
                "correct": false
            }
        ],
        "explanation": {
            "en": "During stack unwinding caused by an active exception, if any destructor throws a second exception, the C++ runtime cannot handle two concurrent active exceptions and immediately terminates.",
            "fr": "Lors du déroulement de pile provoqué par une exception, si un destructeur lève une seconde exception, le runtime C++ ne peut gérer deux exceptions simultanées et appelle std::terminate()."
        }
    },
    {
        "question": {
            "en": "Which of the following actions directly violates the C++ Strict Aliasing rule and produces Undefined Behavior (UB)?",
            "fr": "Laquelle des actions suivantes viole directement la règle de Strict Aliasing en C++ et produit un comportement indéfini (UB) ?"
        },
        "options": [
            {
                "text": {
                    "en": "Reading or writing the memory of a float variable through a dereferenced int* pointer cast using reinterpret_cast.",
                    "fr": "Lire ou écrire la mémoire d'un float via un pointeur int* déréférencé après un reinterpret_cast."
                },
                "correct": true
            },
            {
                "text": {
                    "en": "Using std::memcpy to copy raw bytes between two structs of identical size",
                    "fr": "Utiliser std::memcpy pour copier des octets bruts entre deux structures de taille identique"
                },
                "correct": false
            },
            {
                "text": {
                    "en": "Passing a const reference to a pure function",
                    "fr": "Passer une référence constante à une fonction pure"
                },
                "correct": false
            }
        ],
        "explanation": {
            "en": "The strict aliasing rule allows the compiler to assume pointers to incompatible types never alias the same memory. Dereferencing an int* pointing to a float violates this and causes UB. Always use std::memcpy for type punning.",
            "fr": "La règle de strict aliasing permet au compilateur de supposer que des pointeurs de types incompatibles ne pointent jamais vers la même mémoire. Déréférencer un int* sur un float viole cette règle. Utilisez std::memcpy."
        }
    },
    {
        "question": {
            "en": "Why does Structure of Arrays (SoA) significantly outperform Array of Structures (AoS) in high-throughput data processing?",
            "fr": "Pourquoi la Structure de Tableaux (SoA) surpasse-t-elle nettement le Tableau de Structures (AoS) lors de traitements de données intensifs ?"
        },
        "options": [
            {
                "text": {
                    "en": "SoA packs active contiguous fields sequentially, ensuring 100% of each 64-byte CPU cache line is utilized and enabling SIMD auto-vectorization.",
                    "fr": "La SoA regroupe les champs séquentiellement, garantissant que 100% de chaque ligne de cache CPU de 64 octets est exploitée et permet la vectorisation SIMD."
                },
                "correct": true
            },
            {
                "text": {
                    "en": "Because SoA automatically runs on the GPU without any shader code",
                    "fr": "Parce que la SoA s'exécute automatiquement sur le GPU sans code shader"
                },
                "correct": false
            },
            {
                "text": {
                    "en": "Because AoS structures cannot be passed by pointer",
                    "fr": "Parce que les structures AoS ne peuvent pas être transmises par pointeur"
                },
                "correct": false
            }
        ],
        "explanation": {
            "en": "CPUs fetch memory in 64-byte cache lines. In AoS, pulling one field loads unneeded adjacent fields into cache. SoA packs identical fields sequentially, maximizing cache hits and allowing SIMD (AVX/NEON) vector registers to process multiple elements per cycle.",
            "fr": "Le processeur charge la mémoire par lignes de cache de 64 octets. En AoS, lire un champ charge aussi des champs inutiles. En SoA, les champs identiques sont contigus, maximisant les hits de cache et autorisant le calcul vectoriel SIMD."
        }
    },
    {
        "question": {
            "en": "In a tree or graph with bidirectional connections, why should child nodes store a std::weak_ptr to their parent instead of std::shared_ptr?",
            "fr": "Dans un arbre ou graphe avec liaisons bidirectionnelles, pourquoi les enfants doivent-ils stocker un std::weak_ptr vers leur parent plutôt qu'un std::shared_ptr ?"
        },
        "options": [
            {
                "text": {
                    "en": "To break circular references: two shared_ptrs referencing each other keep reference counts above zero permanently, causing an uncollectable memory leak.",
                    "fr": "Pour casser les références circulaires : deux shared_ptrs mutuels maintiennent le compteur au-dessus de zéro en permanence, provoquant une fuite mémoire irrémédiable."
                },
                "correct": true
            },
            {
                "text": {
                    "en": "Because std::weak_ptr allows modifying the parent object without thread synchronization",
                    "fr": "Parce que std::weak_ptr permet de modifier le parent sans synchronisation de threads"
                },
                "correct": false
            },
            {
                "text": {
                    "en": "Because std::shared_ptr can only be used on primitive data types",
                    "fr": "Parce que std::shared_ptr ne peut être utilisé que sur des types primitifs"
                },
                "correct": false
            }
        ],
        "explanation": {
            "en": "std::weak_ptr holds a non-owning reference and does not increment the strong reference count. This avoids cyclic dependency memory leaks and allows the parent to be safely destroyed when external owners release it.",
            "fr": "std::weak_ptr détient une référence non-propriétaire et n'incrémente pas le compteur fort. Cela évite les fuites de dépendances cycliques et permet la destruction propre du parent."
        }
    }
]
};

// Automatic numeric aliases for MODULE_QUIZZES so both MODULE_QUIZZES[1] and MODULE_QUIZZES['mod-1'] work
for (let i = 1; i <= 11; i++) {
  if (MODULE_QUIZZES['mod-' + i]) {
    MODULE_QUIZZES[i] = MODULE_QUIZZES['mod-' + i];
  }
}
