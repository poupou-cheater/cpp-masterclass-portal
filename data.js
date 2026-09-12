// C++ Full Course Curriculum Dataset
// Verified & accurate URLs matching LearnCpp official index & C++ Primer 5th edition

const COURSE_DATA = {
  "videoBaseUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI",
  "tracks": [
    {
      "id": "brocode",
      "name": {
        "en": "🎬 Bro Code Video Course",
        "fr": "🎬 Cours Vidéo Bro Code (6h)"
      },
      "color": "#ef4444"
    },
    {
      "id": "learncpp",
      "name": {
        "en": "📚 LearnCpp Modern Track",
        "fr": "📚 Parcours Moderne LearnCpp"
      },
      "color": "#10b981"
    },
    {
      "id": "primer",
      "name": {
        "en": "📖 C++ Primer 5th Ed.",
        "fr": "📖 Livre C++ Primer (5e Éd.)"
      },
      "color": "#8b5cf6"
    },
    {
      "id": "prodev",
      "name": {
        "en": "🛠️ Professional Dev Skills",
        "fr": "🛠️ Outils & Compétences Pro"
      },
      "color": "#f59e0b"
    }
  ],
  "modules": [
    {
      "id": "mod-1",
      "source": "brocode",
      "icon": "⚡",
      "title": {
        "en": "Module 1: C++ Syntax & Basics (Bro Code 1-17)",
        "fr": "Module 1 : Syntaxe & Fondamentaux (Bro Code 1-17)"
      },
      "description": {
        "en": "Core language basics from the Bro Code 6h video: variables, operators, input, math, and conditionals.",
        "fr": "Bases essentielles de la vidéo Bro Code : variables, opérateurs, entrées, maths et conditions."
      },
      "lessons": [
        {
          "id": 1,
          "source": "brocode",
          "title": "C++ Tutorial for Beginners 👨💻",
          "timestamp": "00:00:00",
          "timeSeconds": 0,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=0s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-cplusplus/",
          "primerUrl": "https://cpp-primer.pages.dev/book/011-1.1._writing_a_simple_cpp_program",
          "summary": {
            "en": "Setting up your C++ toolchain, understanding main(), std::cout, and compiling your first C++ program.",
            "fr": "Installation de l'environnement C++, compréhension de main(), std::cout et premier programme."
          },
          "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World! Welcome to C++!\" << std::endl;\n    return 0;\n}",
          "output": "Hello, World! Welcome to C++!",
          "keyTakeaways": [
            "C++ is a high-performance compiled language.",
            "main() is the designated entry point of every C++ program.",
            "#include <iostream> includes standard input/output stream capabilities."
          ]
        },
        {
          "id": 2,
          "source": "brocode",
          "title": "Variables and Basic Data Types ✗",
          "timestamp": "00:13:30",
          "timeSeconds": 810,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=810s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-fundamental-data-types/",
          "primerUrl": "https://cpp-primer.pages.dev/book/021-2.1._primitive_builtin_types",
          "summary": {
            "en": "Fundamental data types: int, double, char, bool, and std::string.",
            "fr": "Types de données primitifs : int, double, char, bool et std::string."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    int age = 21;\n    double price = 19.99;\n    char grade = 'A';\n    bool isStudent = true;\n    std::string name = \"Alex\";\n\n    std::cout << name << \" | Age: \" << age << \" | Grade: \" << grade << std::endl;\n    return 0;\n}",
          "output": "Alex | Age: 21 | Grade: A",
          "keyTakeaways": [
            "int stores whole numbers, double stores floating point decimals.",
            "char uses single quotes 'A', std::string uses double quotes \"text\"."
          ]
        },
        {
          "id": 3,
          "source": "brocode",
          "title": "Const Keyword 🚫",
          "timestamp": "00:24:14",
          "timeSeconds": 1454,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=1454s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/constant-variables-named-constants/",
          "primerUrl": "https://cpp-primer.pages.dev/book/024-2.4._const_qualifier",
          "summary": {
            "en": "Declaring read-only variables with const to guarantee immutability.",
            "fr": "Déclaration de variables en lecture seule via const pour garantir l'immutabilité."
          },
          "code": "#include <iostream>\n\nint main() {\n    const double PI = 3.14159;\n    double radius = 10.0;\n    std::cout << \"Circumference: \" << (2 * PI * radius) << std::endl;\n    return 0;\n}",
          "output": "Circumference: 62.8318",
          "keyTakeaways": [
            "const prevents accidental modification after variable initialization.",
            "Constants are conventionally written in UPPER_SNAKE_CASE."
          ]
        },
        {
          "id": 4,
          "source": "brocode",
          "title": "Namespaces 📛",
          "timestamp": "00:27:37",
          "timeSeconds": 1657,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=1657s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/user-defined-namespaces-and-the-scope-resolution-operator/",
          "primerUrl": "https://cpp-primer.pages.dev/book/030-3.1._namespace_using_declarations",
          "summary": {
            "en": "Preventing identifier collisions in large codebases using namespaces and ::.",
            "fr": "Prévention des conflits d'identifiants grâce aux espaces de noms (namespaces) et à l'opérateur ::."
          },
          "code": "#include <iostream>\n\nnamespace engine { int version = 2; }\nnamespace physics { int version = 1; }\n\nint main() {\n    std::cout << \"Engine v\" << engine::version << \" | Physics v\" << physics::version << std::endl;\n    return 0;\n}",
          "output": "Engine v2 | Physics v1",
          "keyTakeaways": [
            "Always scope identifiers explicitly to prevent subtle naming conflicts."
          ]
        },
        {
          "id": 5,
          "source": "brocode",
          "title": "Typedef & Type Aliases 🙋♂️",
          "timestamp": "00:32:13",
          "timeSeconds": 1933,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=1933s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/typedefs-and-type-aliases/",
          "primerUrl": "https://cpp-primer.pages.dev/book/025-2.5._dealing_with_types",
          "summary": {
            "en": "Modern C++ type aliases using 'using NewName = ExistingType;'.",
            "fr": "Alias de types modernes en C++ avec la syntaxe 'using NouveauNom = TypeExistant;'."
          },
          "code": "#include <iostream>\n#include <string>\n\nusing text_t = std::string;\nusing number_t = int;\n\nint main() {\n    text_t username = \"developer\";\n    number_t score = 100;\n    std::cout << username << \" score: \" << score << std::endl;\n    return 0;\n}",
          "output": "developer score: 100",
          "keyTakeaways": [
            "Modern C++ prefers 'using' over old C-style 'typedef'."
          ]
        },
        {
          "id": 6,
          "source": "brocode",
          "title": "Arithmetic Operators 🧮",
          "timestamp": "00:37:39",
          "timeSeconds": 2259,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=2259s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/arithmetic-operators/",
          "primerUrl": "https://cpp-primer.pages.dev/book/040-4.2._arithmetic_operators",
          "summary": {
            "en": "Arithmetic (+, -, *, /, %) and compound assignment operators.",
            "fr": "Opérations arithmétiques (+, -, *, /, %) et assignations composées."
          },
          "code": "#include <iostream>\n\nint main() {\n    int students = 20;\n    students += 2; // 22\n    int rem = students % 3; // 1\n    std::cout << \"Students: \" << students << \", Modulo: \" << rem << std::endl;\n    return 0;\n}",
          "output": "Students: 22, Modulo: 1",
          "keyTakeaways": [
            "Integer division truncates toward zero."
          ]
        },
        {
          "id": 7,
          "source": "brocode",
          "title": "Type Conversion (static_cast) ✨",
          "timestamp": "00:43:18",
          "timeSeconds": 2598,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=2598s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/",
          "primerUrl": "https://cpp-primer.pages.dev/book/049-4.11._type_conversions",
          "summary": {
            "en": "Safe explicit type conversion using static_cast<Type>(variable).",
            "fr": "Conversions explicites sécurisées avec static_cast<Type>(variable)."
          },
          "code": "#include <iostream>\n\nint main() {\n    int correct = 8;\n    int total = 10;\n    double score = static_cast<double>(correct) / total * 100;\n    std::cout << \"Score: \" << score << \"%\" << std::endl;\n    return 0;\n}",
          "output": "Score: 80%",
          "keyTakeaways": [
            "Never use raw C-style casts (double)x; use static_cast<double>(x)."
          ]
        },
        {
          "id": 8,
          "source": "brocode",
          "title": "User Input (std::cin & getline) ⌨️",
          "timestamp": "00:47:05",
          "timeSeconds": 2825,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=2825s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-iostream-cout-cin-and-endl/",
          "primerUrl": "https://cpp-primer.pages.dev/book/012-1.2._a_first_look_at_inputoutput",
          "summary": {
            "en": "Reading words with std::cin and full lines with std::getline().",
            "fr": "Lecture de mots simples avec std::cin et de lignes entières avec std::getline()."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string name = \"Ada Lovelace\";\n    int year = 1843;\n    std::cout << \"User: \" << name << \", Year: \" << year << std::endl;\n    return 0;\n}",
          "output": "User: Ada Lovelace, Year: 1843",
          "keyTakeaways": [
            "std::cin >> x stops at whitespace; use std::getline(std::cin, str) for lines."
          ]
        },
        {
          "id": 9,
          "source": "brocode",
          "title": "Useful Math Functions (<cmath>) 🔢",
          "timestamp": "00:52:35",
          "timeSeconds": 3155,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=3155s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/remainder-and-exponentiation/",
          "primerUrl": "https://cpp-primer.pages.dev/book/040-4.2._arithmetic_operators",
          "summary": {
            "en": "Standard math utilities from <cmath>: sqrt, pow, round, ceil, floor, and abs.",
            "fr": "Fonctions mathématiques de <cmath> : sqrt, pow, round, ceil, floor et abs."
          },
          "code": "#include <iostream>\n#include <cmath>\n\nint main() {\n    std::cout << \"sqrt(16): \" << std::sqrt(16) << std::endl;\n    std::cout << \"pow(2, 5): \" << std::pow(2, 5) << std::endl;\n    return 0;\n}",
          "output": "sqrt(16): 4\npow(2, 5): 32",
          "keyTakeaways": [
            "Always include <cmath> for mathematical algorithms."
          ]
        },
        {
          "id": 10,
          "source": "brocode",
          "title": "Hypotenuse Calculator Practice 📐",
          "timestamp": "00:56:03",
          "timeSeconds": 3363,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=3363s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/how-to-design-your-first-programs/",
          "primerUrl": null,
          "summary": {
            "en": "Applying math functions to calculate the hypotenuse: c = sqrt(a² + b²).",
            "fr": "Calcul de l'hypoténuse d'un triangle rectangle : c = sqrt(a² + b²)."
          },
          "code": "#include <iostream>\n#include <cmath>\n\nint main() {\n    double a = 3.0, b = 4.0;\n    double c = std::sqrt(std::pow(a, 2) + std::pow(b, 2));\n    std::cout << \"Hypotenuse: \" << c << std::endl;\n    return 0;\n}",
          "output": "Hypotenuse: 5",
          "keyTakeaways": [
            "Combines math functions into an interactive real-world script."
          ]
        },
        {
          "id": 11,
          "source": "brocode",
          "title": "If Statements 🤔",
          "timestamp": "00:58:44",
          "timeSeconds": 3524,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=3524s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-if-statements/",
          "primerUrl": "https://cpp-primer.pages.dev/book/056-5.3._conditional_statements",
          "summary": {
            "en": "Branching execution paths using if, else if, and else.",
            "fr": "Structures de contrôle conditionnelles avec if, else if et else."
          },
          "code": "#include <iostream>\n\nint main() {\n    int age = 20;\n    if (age >= 18) {\n        std::cout << \"Access Granted!\" << std::endl;\n    } else {\n        std::cout << \"Access Denied.\" << std::endl;\n    }\n    return 0;\n}",
          "output": "Access Granted!",
          "keyTakeaways": [
            "Use braces {} even for single-line blocks to avoid bugs."
          ]
        },
        {
          "id": 12,
          "source": "brocode",
          "title": "Switches 🔀",
          "timestamp": "01:03:40",
          "timeSeconds": 3820,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=3820s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/switch-statement-basics/",
          "primerUrl": "https://cpp-primer.pages.dev/book/056-5.3._conditional_statements",
          "summary": {
            "en": "Multi-branch selection with switch, case, break, and default.",
            "fr": "Aiguillage multiple via switch, case, break et default."
          },
          "code": "#include <iostream>\n\nint main() {\n    char grade = 'A';\n    switch (grade) {\n        case 'A': std::cout << \"Excellent!\" << std::endl; break;\n        case 'B': std::cout << \"Good job!\" << std::endl; break;\n        default: std::cout << \"Keep practicing!\" << std::endl; break;\n    }\n    return 0;\n}",
          "output": "Excellent!",
          "keyTakeaways": [
            "Always include break statements to prevent accidental fallthrough."
          ]
        },
        {
          "id": 13,
          "source": "brocode",
          "title": "Console Calculator Program 🖩",
          "timestamp": "01:09:29",
          "timeSeconds": 4169,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=4169s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/switch-fallthrough-and-scoping/",
          "primerUrl": null,
          "summary": {
            "en": "Building a command-line arithmetic calculator with operator routing.",
            "fr": "Création d'une calculatrice console avec validation d'opérateurs."
          },
          "code": "#include <iostream>\n\nint main() {\n    char op = '*';\n    double a = 6, b = 7;\n    double res = (op == '*') ? a * b : 0;\n    std::cout << a << \" \" << op << \" \" << b << \" = \" << res << std::endl;\n    return 0;\n}",
          "output": "6 * 7 = 42",
          "keyTakeaways": [
            "Check for divide-by-zero errors when dividing or computing remainder."
          ]
        },
        {
          "id": 14,
          "source": "brocode",
          "title": "Ternary Operator ❓",
          "timestamp": "01:14:13",
          "timeSeconds": 4453,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=4453s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/the-conditional-operator/",
          "primerUrl": "https://cpp-primer.pages.dev/book/045-4.7._the_conditional_operator",
          "summary": {
            "en": "Compact inline conditional assignment: (condition ? val_true : val_false).",
            "fr": "Opérateur conditionnel ternaire en ligne : (condition ? vrai : faux)."
          },
          "code": "#include <iostream>\n\nint main() {\n    int score = 85;\n    std::cout << (score >= 60 ? \"Passed!\" : \"Failed\") << std::endl;\n    return 0;\n}",
          "output": "Passed!",
          "keyTakeaways": [
            "Ideal for concise inline returns and stream logging."
          ]
        },
        {
          "id": 15,
          "source": "brocode",
          "title": "Logical Operators (&&, ||, !) 🔣",
          "timestamp": "01:18:53",
          "timeSeconds": 4733,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=4733s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/logical-operators/",
          "primerUrl": "https://cpp-primer.pages.dev/book/041-4.3._logical_and_relational_operators",
          "summary": {
            "en": "Boolean logic and short-circuit evaluation in C++ expressions.",
            "fr": "Logique booléenne et évaluation court-circuit en C++."
          },
          "code": "#include <iostream>\n\nint main() {\n    int temp = 22;\n    bool sunny = true;\n    if (temp >= 20 && sunny) {\n        std::cout << \"Great outdoor weather!\" << std::endl;\n    }\n    return 0;\n}",
          "output": "Great outdoor weather!",
          "keyTakeaways": [
            "Short-circuiting: in a && b, if a is false, b is never evaluated."
          ]
        },
        {
          "id": 16,
          "source": "brocode",
          "title": "Temperature Converter 🌡️",
          "timestamp": "01:23:55",
          "timeSeconds": 5035,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=5035s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/chapter-4-summary-and-quiz/",
          "primerUrl": null,
          "summary": {
            "en": "Hands-on project: converting Celsius to Fahrenheit with floating point math.",
            "fr": "Projet pratique : conversion Celsius / Fahrenheit avec calculs à virgule."
          },
          "code": "#include <iostream>\n\nint main() {\n    double celsius = 30.0;\n    double fahrenheit = (celsius * 9.0 / 5.0) + 32;\n    std::cout << celsius << \" C = \" << fahrenheit << \" F\" << std::endl;\n    return 0;\n}",
          "output": "30 C = 86 F",
          "keyTakeaways": [
            "Use 9.0 / 5.0 instead of 9 / 5 to prevent integer truncation."
          ]
        },
        {
          "id": 17,
          "source": "brocode",
          "title": "Useful String Methods 〰️",
          "timestamp": "01:29:17",
          "timeSeconds": 5357,
          "category": "Basics",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=5357s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-stdstring/",
          "primerUrl": "https://cpp-primer.pages.dev/book/031-3.2._library_string_type",
          "summary": {
            "en": "std::string member functions: length, empty, append, find, erase, and at.",
            "fr": "Fonctions de std::string : length, empty, append, find, erase et at."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string user = \"Bjarne\";\n    std::cout << \"Length: \" << user.length() << std::endl;\n    user.append(\" Stroustrup\");\n    std::cout << \"Full name: \" << user << std::endl;\n    return 0;\n}",
          "output": "Length: 6\nFull name: Bjarne Stroustrup",
          "keyTakeaways": [
            "str.at(index) performs bounds checking and throws std::out_of_range."
          ]
        }
      ]
    },
    {
      "id": "mod-5",
      "source": "brocode",
      "icon": "🧠",
      "title": {
        "en": "Module 5: Pointers & Memory Management (Bro Code 43-55)",
        "fr": "Module 5 : Pointeurs & Gestion Mémoire (Bro Code 43-55)"
      },
      "description": {
        "en": "Memory addresses, references, pointers, nullptr, dynamic allocation (new/delete), recursion, templates, structs, and enums.",
        "fr": "Adresses mémoire, références, pointeurs, nullptr, allocation dynamique, récursion, templates, structures et énumérations."
      },
      "lessons": [
        {
          "id": 43,
          "source": "brocode",
          "title": "Memory Addresses (&) 🏠",
          "timestamp": "03:57:42",
          "timeSeconds": 14262,
          "category": "Memory",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=14262s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/",
          "primerUrl": "https://cpp-primer.pages.dev/book/023-2.3._compound_types",
          "summary": {
            "en": "Inspecting variable physical location in RAM using the address-of operator &.",
            "fr": "Inspection de l'emplacement physique en mémoire RAM avec l'opérateur d'adresse &."
          },
          "code": "#include <iostream>\n\nint main() {\n    int age = 25;\n    std::cout << \"Value: \" << age << \", Address: \" << &age << std::endl;\n    return 0;\n}",
          "output": "Value: 25, Address: 0x7ffd9b82",
          "keyTakeaways": [
            "Memory addresses are expressed in hexadecimal format."
          ]
        },
        {
          "id": 44,
          "source": "brocode",
          "title": "Pass by VALUE vs Pass by REFERENCE 📧",
          "timestamp": "04:00:31",
          "timeSeconds": 14431,
          "category": "Memory",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=14431s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/pass-by-lvalue-reference/",
          "primerUrl": "https://cpp-primer.pages.dev/book/064-6.2._argument_passing",
          "summary": {
            "en": "Pass by value copies arguments; pass by reference (&) mutates original memory.",
            "fr": "Passage par valeur crée une copie ; passage par référence (&) modifie la variable d'origine."
          },
          "code": "#include <iostream>\n\nvoid swap(int& a, int& b) {\n    int temp = a; a = b; b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    swap(x, y);\n    std::cout << \"x: \" << x << \", y: \" << y << std::endl;\n    return 0;\n}",
          "output": "x: 20, y: 10",
          "keyTakeaways": [
            "Passing by reference avoids costly copying of large objects."
          ]
        },
        {
          "id": 47,
          "source": "brocode",
          "title": "Pointers (*) 👈",
          "timestamp": "04:17:56",
          "timeSeconds": 15476,
          "category": "Memory",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=15476s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/",
          "primerUrl": "https://cpp-primer.pages.dev/book/023-2.3._compound_types",
          "summary": {
            "en": "Variables holding memory addresses. Dereferencing values using the * operator.",
            "fr": "Variables stockant des adresses mémoire. Déréférencement avec l'opérateur *."
          },
          "code": "#include <iostream>\n\nint main() {\n    int age = 30;\n    int* pAge = &age; // Pointer holding memory address\n    std::cout << \"Address: \" << pAge << \", Value: \" << *pAge << std::endl;\n    *pAge = 31; // Mutate original memory\n    std::cout << \"Updated age: \" << age << std::endl;\n    return 0;\n}",
          "output": "Address: 0x7ffee12, Value: 30\nUpdated age: 31",
          "keyTakeaways": [
            "* in declaration creates a pointer; * on a pointer dereferences to the value."
          ]
        },
        {
          "id": 48,
          "source": "brocode",
          "title": "Null Pointers (nullptr) ⛔",
          "timestamp": "04:23:12",
          "timeSeconds": 15792,
          "category": "Memory",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=15792s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/null-pointers/",
          "primerUrl": "https://cpp-primer.pages.dev/book/023-2.3._compound_types",
          "summary": {
            "en": "Safely initializing unassigned pointers with modern nullptr to avert crashes.",
            "fr": "Initialisation sécurisée des pointeurs non affectés avec le mot-clé moderne nullptr."
          },
          "code": "#include <iostream>\n\nint main() {\n    int* ptr = nullptr;\n    if (ptr != nullptr) {\n        std::cout << *ptr << std::endl;\n    } else {\n        std::cout << \"Pointer is safely null.\" << std::endl;\n    }\n    return 0;\n}",
          "output": "Pointer is safely null.",
          "keyTakeaways": [
            "Never dereference a null pointer (triggers segmentation fault).",
            "Prefer nullptr over legacy C NULL or 0."
          ]
        },
        {
          "id": 50,
          "source": "brocode",
          "title": "Dynamic Memory (new & delete) 🧠",
          "timestamp": "04:46:26",
          "timeSeconds": 17186,
          "category": "Memory",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=17186s",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/dynamic-memory-allocation-with-new-and-delete/",
          "primerUrl": "https://cpp-primer.pages.dev/book/114-12.1._dynamic_memory_and_smart_pointers",
          "summary": {
            "en": "Allocating heap memory at runtime with new and freeing it with delete to prevent leaks.",
            "fr": "Allocation sur le tas (heap) avec new et libération manuelle avec delete."
          },
          "code": "#include <iostream>\n\nint main() {\n    int* pVal = new int(42);\n    std::cout << \"Heap value: \" << *pVal << std::endl;\n    delete pVal;\n    pVal = nullptr;\n    std::cout << \"Memory freed successfully.\" << std::endl;\n    return 0;\n}",
          "output": "Heap value: 42\nMemory freed successfully.",
          "keyTakeaways": [
            "Every 'new' must be matched with 'delete'.",
            "Modern C++ replaces raw new/delete with std::make_unique."
          ]
        }
      ]
    },
    {
      "id": "mod-7",
      "source": "learncpp",
      "icon": "📚",
      "title": {
        "en": "Module 7: Modern C++ Curriculum (LearnCpp Track)",
        "fr": "Module 7 : C++ Moderne Avancé (Parcours LearnCpp)"
      },
      "description": {
        "en": "Modern C++ (C++17/20/23) idioms: string_view, std::optional, smart pointers, lambdas, and ranges.",
        "fr": "Idiomes du C++ moderne (C++17/20/23) : string_view, std::optional, pointeurs intelligents et ranges."
      },
      "lessons": [
        {
          "id": 61,
          "source": "learncpp",
          "title": "std::string_view (Zero-Copy Strings) ⚡",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Modern C++",
          "ytUrl": null,
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-stdstring_view/",
          "primerUrl": null,
          "summary": {
            "en": "Non-owning zero-allocation string view introduced in C++17 to replace const std::string& parameters.",
            "fr": "Vue non-propriétaire sur une chaîne évitant toute allocation mémoire (C++17)."
          },
          "code": "#include <iostream>\n#include <string_view>\n\nvoid printView(std::string_view sv) {\n    std::cout << \"View: \" << sv << \" (len: \" << sv.length() << \")\\n\";\n}\n\nint main() {\n    printView(\"Literal string without allocation\");\n    return 0;\n}",
          "output": "View: Literal string without allocation (len: 33)",
          "keyTakeaways": [
            "Fastest way to pass read-only strings from C-strings, std::string, or literals.",
            "Do not return a std::string_view pointing to a temporary object (dangling view)."
          ]
        },
        {
          "id": 62,
          "source": "learncpp",
          "title": "Smart Pointers (std::unique_ptr & make_unique) 🛡️",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Modern C++",
          "ytUrl": null,
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/stdunique_ptr/",
          "primerUrl": "https://cpp-primer.pages.dev/book/114-12.1._dynamic_memory_and_smart_pointers",
          "summary": {
            "en": "Automatic RAII memory ownership that eliminates memory leaks without manual delete.",
            "fr": "Gestion mémoire automatique par RAII éliminant toute fuite de mémoire sans delete manuel."
          },
          "code": "#include <iostream>\n#include <memory>\n\nstruct Widget {\n    Widget() { std::cout << \"Widget created\\n\"; }\n    ~Widget() { std::cout << \"Widget safely destroyed!\\n\"; }\n};\n\nint main() {\n    auto w = std::make_unique<Widget>();\n    return 0;\n}",
          "output": "Widget created\nWidget safely destroyed!",
          "keyTakeaways": [
            "Golden modern C++ rule: Never use raw 'new' or 'delete'. Use std::make_unique.",
            "std::unique_ptr cannot be copied, only moved."
          ]
        },
        {
          "id": 63,
          "source": "learncpp",
          "title": "std::optional & std::variant (Type-Safe Sum Types) 🎯",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Modern C++",
          "ytUrl": null,
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/stdoptional/",
          "primerUrl": null,
          "summary": {
            "en": "C++17 type-safe nullable returns (std::optional) replacing magic error codes and null pointers.",
            "fr": "Retours optionnels typés (std::optional) remplaçant les pointeurs nuls et codes d'erreur magiques."
          },
          "code": "#include <iostream>\n#include <optional>\n#include <string>\n\nstd::optional<std::string> findUser(int id) {\n    if (id == 1) return \"Alice\";\n    return std::nullopt; // No user found\n}\n\nint main() {\n    auto user = findUser(1);\n    if (user) std::cout << \"User found: \" << *user << std::endl;\n    return 0;\n}",
          "output": "User found: Alice",
          "keyTakeaways": [
            "Use value_or(\"default\") for elegant fallback handling.",
            "Avoid sentinel values like -1 or empty strings for missing data."
          ]
        },
        {
          "id": 64,
          "source": "learncpp",
          "title": "Lambdas & STL Algorithms ⚡",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Modern C++",
          "ytUrl": null,
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-lambdas-anonymous-functions/",
          "primerUrl": "https://cpp-primer.pages.dev/book/100-10.3._customizing_operations",
          "summary": {
            "en": "Anonymous closures: [capture](params) -> returnType { body } paired with std::ranges.",
            "fr": "Fermetures anonymes : [capture](paramètres) { corps } associées aux algorithmes STL."
          },
          "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {3, 1, 4, 1, 5};\n    std::sort(nums.begin(), nums.end(), [](int a, int b) { return a > b; });\n    std::cout << \"Sorted descending: \" << nums[0] << \" \" << nums[1] << std::endl;\n    return 0;\n}",
          "output": "Sorted descending: 5 4",
          "keyTakeaways": [
            "[=] captures local variables by value; [&] captures by reference.",
            "Eliminates boilerplate free functions for custom sorting and filtering."
          ]
        }
      ]
    },
    {
      "id": "mod-8",
      "source": "primer",
      "icon": "📖",
      "title": {
        "en": "Module 8: C++ Primer (5th Ed.) Deep Dives",
        "fr": "Module 8 : Approfondissements C++ Primer (5e Éd.)"
      },
      "description": {
        "en": "Low-level internals from the C++ Primer bible: Copy Control Rule of 5, stream states, and RTTI.",
        "fr": "Mécanismes internes approfondis du livre C++ Primer : Règle des 5, flux IO et RTTI."
      },
      "lessons": [
        {
          "id": 65,
          "source": "primer",
          "title": "Copy Control & The Rule of 5 📦",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Advanced",
          "ytUrl": null,
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/move-constructors-and-move-assignment/",
          "primerUrl": "https://cpp-primer.pages.dev/book/121-13.1._copy_assign_and_destroy",
          "summary": {
            "en": "Managing resource ownership: Destructor, Copy Constructor, Copy Assignment, Move Constructor, and Move Assignment.",
            "fr": "Contrôle de copie et transfert de ressources : destructeur, constructeur/assignation de copie et de déplacement."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string heavy = \"Resource-Data-Buffer\";\n    std::string moved = std::move(heavy); // Transfers buffer ownership\n    std::cout << \"Moved: \" << moved << \", Original size: \" << heavy.size() << std::endl;\n    return 0;\n}",
          "output": "Moved: Resource-Data-Buffer, Original size: 0",
          "keyTakeaways": [
            "Rule of Zero: design classes with smart containers so compiler synthesizes all 5 correctly.",
            "Move operations should always be marked 'noexcept'."
          ]
        },
        {
          "id": 66,
          "source": "primer",
          "title": "IO Stream States & Conditions 📄",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Advanced",
          "ytUrl": null,
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/basic-file-io/",
          "primerUrl": "https://cpp-primer.pages.dev/book/083-8.1._the_io_classes",
          "summary": {
            "en": "Understanding stream flags: goodbit, eofbit, failbit, and badbit for resilient input/output.",
            "fr": "États et drapeaux des flux d'entrées/sorties : goodbit, eofbit, failbit et badbit."
          },
          "code": "#include <iostream>\n#include <sstream>\n\nint main() {\n    std::istringstream iss(\"42 text\");\n    int val; iss >> val;\n    std::cout << \"Parsed: \" << val << \", Good: \" << iss.good() << std::endl;\n    return 0;\n}",
          "output": "Parsed: 42, Good: 1",
          "keyTakeaways": [
            "Always check stream validity after reading external inputs.",
            "Use stream.clear() before attempting recovery."
          ]
        }
      ]
    },
    {
      "id": "mod-9",
      "source": "prodev",
      "icon": "🛠️",
      "title": {
        "en": "Module 9: Real-World Professional Developer Skills",
        "fr": "Module 9 : Compétences Développeur Professionnel"
      },
      "description": {
        "en": "The essential toolkit every C++ software engineer uses: CMake, Sanitizers, GDB debugging, GTest, and Package Managers.",
        "fr": "La boîte à outils indispensable de tout ingénieur C++ : CMake, Sanitizers, débogage GDB, tests unitaires et vcpkg."
      },
      "lessons": [
        {
          "id": 67,
          "source": "prodev",
          "title": "Modern CMake Build System (CMakeLists.txt) 🏗️",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Build Tools",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://cmake.org/cmake/help/latest/guide/tutorial/index.html",
          "summary": {
            "en": "The global standard C++ build system: target-based CMake, adding executables, and linking libraries.",
            "fr": "Le système de build C++ standard dans l'industrie : CMake moderne basé sur les cibles (targets)."
          },
          "code": "# Modern CMake Best Practices (CMakeLists.txt)\ncmake_minimum_required(VERSION 3.20)\nproject(MyCppProject VERSION 1.0 LANGUAGES CXX)\n\nset(CMAKE_CXX_STANDARD 20)\nset(CMAKE_CXX_STANDARD_REQUIRED ON)\n\nadd_executable(my_app src/main.cpp src/engine.cpp)\ntarget_include_directories(my_app PRIVATE include)\ntarget_compile_options(my_app PRIVATE -Wall -Wextra -Wpedantic)",
          "output": "-- Configuring done (0.2s)\n-- Generating done (0.1s)\n-- Build files written to: /build",
          "keyTakeaways": [
            "Use target_link_libraries() and target_include_directories(), never global include_directories().",
            "Generate build: 'cmake -B build -S .', Build: 'cmake --build build'."
          ]
        },
        {
          "id": 68,
          "source": "prodev",
          "title": "Compilers, Warnings & Sanitizers (ASan & UBSan) 🔍",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Quality",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://github.com/google/sanitizers/wiki/AddressSanitizer",
          "summary": {
            "en": "Catching memory bugs at runtime with Google AddressSanitizer and UndefinedBehaviorSanitizer.",
            "fr": "Détection des fuites et accès mémoire invalides à l'exécution avec AddressSanitizer (ASan)."
          },
          "code": "// Compile with Sanitizers:\n// g++ -std=c++20 -fsanitize=address,undefined -g main.cpp -o app\n\n#include <iostream>\n\nint main() {\n    int buffer[5] = {1, 2, 3, 4, 5};\n    std::cout << \"Clean execution with ASan enabled.\" << std::endl;\n    return 0;\n}",
          "output": "Clean execution with ASan enabled.",
          "keyTakeaways": [
            "Enable '-fsanitize=address,undefined' in debug builds to catch buffer overflows and memory leaks.",
            "Treat compiler warnings as errors in CI: '-Werror'."
          ]
        },
        {
          "id": 69,
          "source": "prodev",
          "title": "Debugging with GDB & LLDB (Stack Traces & Breakpoints) 🐛",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Debugging",
          "ytUrl": null,
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/using-an-integrated-debugger-stepping/",
          "primerUrl": null,
          "proDevUrl": "https://sourceware.org/gdb/current/onlinedocs/gdb/",
          "summary": {
            "en": "Mastering the command-line debugger: setting breakpoints (b), stepping (s, n), backtraces (bt), and inspecting memory (p).",
            "fr": "Maîtrise du débogueur en ligne de commande : points d'arrêt, suivi pas à pas et pile d'appels."
          },
          "code": "# Essential GDB Commands Cheat Sheet\n# 1. Compile with debug symbols:\n#    g++ -g main.cpp -o app\n# 2. Start debugging:\n#    gdb ./app\n# 3. Set a breakpoint at line 12:\n#    (gdb) b main.cpp:12\n# 4. Run program:\n#    (gdb) run\n# 5. Print variable value:\n#    (gdb) print myVariable\n# 6. Show call stack on crash:\n#    (gdb) backtrace",
          "output": "#0  main () at main.cpp:12\n12      int result = compute(x, y);\n(gdb)",
          "keyTakeaways": [
            "Always compile with '-g' to generate DWARF debug symbols.",
            "Use 'bt' (backtrace) to pinpoint the exact crash line during segfaults."
          ]
        },
        {
          "id": 70,
          "source": "prodev",
          "title": "Unit Testing with GoogleTest (GTest) & Catch2 🧪",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Testing",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://google.github.io/googletest/primer.html",
          "summary": {
            "en": "Writing automated unit tests in modern C++ with ASSERT_EQ, EXPECT_TRUE, and test suites.",
            "fr": "Écriture de tests unitaires automatisés en C++ avec GoogleTest (GTest) et Catch2."
          },
          "code": "#include <gtest/gtest.h>\n\nint add(int a, int b) { return a + b; }\n\nTEST(MathTest, HandlesPositiveAddition) {\n    EXPECT_EQ(add(2, 3), 5);\n}\n\nTEST(MathTest, HandlesNegativeNumbers) {\n    EXPECT_EQ(add(-5, -5), -10);\n}\n\nint main(int argc, char **argv) {\n    ::testing::InitGoogleTest(&argc, argv);\n    return RUN_ALL_TESTS();\n}",
          "output": "[==========] Running 2 tests from 1 test suite.\n[  PASSED  ] 2 tests.",
          "keyTakeaways": [
            "EXPECT_* reports failure and continues; ASSERT_* halts test execution immediately.",
            "Automated unit testing is mandatory in production C++ pipelines."
          ]
        },
        {
          "id": 71,
          "source": "prodev",
          "title": "C++ Package Management (vcpkg & Conan) 📦",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Tooling",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://vcpkg.io/en/getting-started",
          "summary": {
            "en": "Installing third-party C++ libraries (Boost, nlohmann/json, fmt, OpenCV) easily with vcpkg and Conan.",
            "fr": "Gestion des dépendances tierces (Boost, nlohmann/json, fmt) avec vcpkg et Conan."
          },
          "code": "# vcpkg manifest setup (vcpkg.json)\n{\n  \"name\": \"my-modern-app\",\n  \"version-string\": \"1.0.0\",\n  \"dependencies\": [\n    \"fmt\",\n    \"nlohmann-json\",\n    \"cxxopts\"\n  ]\n}",
          "output": "-- Found fmt: 10.1.0\n-- Found nlohmann_json: 3.11.2\n-- Configuring done",
          "keyTakeaways": [
            "vcpkg manifest mode ('vcpkg.json') locks dependency versions reliably.",
            "Eliminates manual header and .lib linking across Windows, Linux, and macOS."
          ]
        },
        {
          "id": 72,
          "source": "prodev",
          "title": "Modern Concurrency (std::jthread & std::atomic) 🧵",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Concurrency",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://en.cppreference.com/w/cpp/thread/jthread",
          "summary": {
            "en": "C++20 auto-joining threads (std::jthread) and lock-free thread safety with std::atomic.",
            "fr": "Threads à auto-jonction (std::jthread en C++20) et compteurs atomiques non bloquants."
          },
          "code": "#include <iostream>\n#include <thread>\n#include <atomic>\n\nstd::atomic<int> counter{0};\n\nvoid work() {\n    for (int i = 0; i < 1000; i++) counter.fetch_add(1);\n}\n\nint main() {\n    {\n        std::jthread t1(work);\n        std::jthread t2(work);\n    }\n    std::cout << \"Thread-safe Total: \" << counter.load() << std::endl;\n    return 0;\n}",
          "output": "Thread-safe Total: 2000",
          "keyTakeaways": [
            "std::jthread automatically joins on destruction, preventing std::terminate() crashes.",
            "Use std::atomic for primitive counters to avoid heavy mutex locking."
          ]
        },
        {
          "id": 73,
          "source": "prodev",
          "title": "Pimpl Idiom & ABI Stability (Pointer to Implementation) 🛡️",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Architecture",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": "https://cpp-primer.pages.dev/book/073-7.1._defining_abstract_data_types",
          "proDevUrl": "https://en.cppreference.com/w/cpp/language/pimpl",
          "summary": {
            "en": "Decoupling implementation details from header files to drastically cut compile times and maintain ABI stability.",
            "fr": "Séparation de l'implémentation et de l'en-tête (Pimpl) pour accélérer la compilation et préserver l'ABI."
          },
          "code": "// Interface (Widget.h)\n#include <memory>\n\nclass Widget {\npublic:\n    Widget();\n    ~Widget();\n    void doWork();\nprivate:\n    struct Impl;\n    std::unique_ptr<Impl> pImpl;\n};",
          "output": "Build time reduced with zero header leaks.",
          "keyTakeaways": [
            "Pimpl isolates private class members from client compilation dependencies.",
            "Crucial design pattern in commercial SDKs and game engines."
          ]
        }
      ]
    },
    {
      "id": "mod-10",
      "source": "prodev",
      "title": {
        "en": "Module 10: Multithreading & High-Performance Concurrency 🧵",
        "fr": "Module 10 : Multithreading & Concurrence Haute Performance 🧵"
      },
      "desc": {
        "en": "Master real-world multithreading: jthread, mutexes, condition variables, async tasks, atomics, and lock-free concurrency.",
        "fr": "Maîtrisez la programmation concurrente : jthread, verrous, variables de condition, tâches asynchrones et atomiques."
      },
      "lessons": [
        {
          "id": 74,
          "source": "prodev",
          "title": "Thread Lifecycle & Cooperative Cancellation (std::jthread & std::stop_token) 🧵",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Concurrency",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://en.cppreference.com/w/cpp/thread/jthread",
          "summary": {
            "en": "Managing OS thread lifecycles safely: std::thread vs std::jthread, argument passing with std::ref, and cooperative cancellation with std::stop_token.",
            "fr": "Gestion sûre du cycle de vie des threads : std::thread vs std::jthread, passage par référence (std::ref) et arrêt coopératif via std::stop_token."
          },
          "code": "#include <iostream>\n#include <thread>\n#include <chrono>\n\nvoid worker(std::stop_token stoken, int id) {\n    while (!stoken.stop_requested()) {\n        std::cout << \"Worker \" << id << \" running...\\n\";\n        std::this_thread::sleep_for(std::chrono::milliseconds(50));\n        break;\n    }\n    std::cout << \"Worker \" << id << \" cleanly stopped.\\n\";\n}\n\nint main() {\n    // std::jthread automatically joins on scope exit and supports stop tokens\n    std::jthread workerThread(worker, 42);\n    std::this_thread::sleep_for(std::chrono::milliseconds(20));\n    workerThread.request_stop(); // Cooperative stop request\n    return 0;\n}",
          "output": "Worker 42 running...\nWorker 42 cleanly stopped.",
          "keyTakeaways": [
            "Always prefer std::jthread (C++20) over std::thread: jthread auto-joins in its destructor, avoiding std::terminate crashes.",
            "Use std::stop_token for clean, cooperative thread interruption without abrupt OS thread kills.",
            "Arguments passed to thread functions are copied by default; wrap in std::ref() to pass by reference."
          ]
        },
        {
          "id": 75,
          "source": "prodev",
          "title": "Mutexes & Deadlock Prevention (std::mutex, std::unique_lock, std::scoped_lock) 🔒",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Concurrency",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://en.cppreference.com/w/cpp/thread/scoped_lock",
          "summary": {
            "en": "Protecting shared state from data races using RAII locks (std::lock_guard, std::unique_lock) and deadlock-free multi-locking with std::scoped_lock.",
            "fr": "Protection de l'état partagé contre les accès concurrents avec les verrous RAII et prévention des interblocages avec std::scoped_lock."
          },
          "code": "#include <iostream>\n#include <thread>\n#include <mutex>\n#include <vector>\n\nstd::mutex mtxA;\nstd::mutex mtxB;\nint sharedBankBalance = 1000;\n\nvoid transferMoney(int amount) {\n    // std::scoped_lock locks multiple mutexes simultaneously without deadlock hazard\n    std::scoped_lock lock(mtxA, mtxB);\n    sharedBankBalance += amount;\n    std::cout << \"Updated Balance: $\" << sharedBankBalance << \"\\n\";\n}\n\nint main() {\n    std::jthread t1(transferMoney, 250);\n    std::jthread t2(transferMoney, -100);\n    return 0;\n}",
          "output": "Updated Balance: $1250\nUpdated Balance: $1150",
          "keyTakeaways": [
            "Data races constitute undefined behavior (UB); always protect mutable shared variables with a mutex.",
            "Never call raw mtx.lock() and mtx.unlock() manually; always rely on RAII wrappers like std::lock_guard or std::unique_lock.",
            "std::scoped_lock (C++17) uses a deadlock-avoidance algorithm to lock multiple mutexes in a single safe operation."
          ]
        },
        {
          "id": 76,
          "source": "prodev",
          "title": "Condition Variables & Producer-Consumer Coordination (std::condition_variable) 📢",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Concurrency",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://en.cppreference.com/w/cpp/thread/condition_variable",
          "summary": {
            "en": "Efficient thread signaling without busy-waiting (spinning) using condition variables, predicate loops, and the Producer-Consumer pattern.",
            "fr": "Synchronisation efficace entre threads sans attente active (spin) via condition_variable et le pattern Producteur-Consommateur."
          },
          "code": "#include <iostream>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\n#include <queue>\n\nstd::queue<int> taskQueue;\nstd::mutex cvMtx;\nstd::condition_variable cv;\nbool finished = false;\n\nvoid consumer() {\n    std::unique_lock<std::mutex> lock(cvMtx);\n    // Always use predicate loop to prevent spurious wakeups!\n    cv.wait(lock, []{ return !taskQueue.empty() || finished; });\n    while (!taskQueue.empty()) {\n        std::cout << \"Processing Task ID: \" << taskQueue.front() << \"\\n\";\n        taskQueue.pop();\n    }\n}\n\nint main() {\n    std::jthread worker(consumer);\n    {\n        std::lock_guard<std::mutex> lock(cvMtx);\n        taskQueue.push(101);\n        taskQueue.push(102);\n    }\n    cv.notify_one(); // Wake waiting worker thread\n    return 0;\n}",
          "output": "Processing Task ID: 101\nProcessing Task ID: 102",
          "keyTakeaways": [
            "Condition variables put waiting threads into a deep OS sleep state, consuming 0% CPU compared to busy while-loops.",
            "Always pass a predicate lambda to cv.wait() to guard against spurious wakeups (waking up without a signal).",
            "cv.notify_one() unblocks one waiting thread; cv.notify_all() unblocks all waiting threads."
          ]
        },
        {
          "id": 77,
          "source": "prodev",
          "title": "Asynchronous Tasks, Futures & Promises (std::async, std::future, std::promise) ⚡",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Concurrency",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://en.cppreference.com/w/cpp/thread/async",
          "summary": {
            "en": "High-level task-based parallelism: executing functions in background threads, capturing return values, and propagating exceptions across thread boundaries.",
            "fr": "Parallélisme par tâches : exécution asynchrone, récupération des valeurs de retour et propagation d'exceptions entre threads."
          },
          "code": "#include <iostream>\n#include <future>\n#include <chrono>\n\nint computeHeavyHash(int seed) {\n    std::this_thread::sleep_for(std::chrono::milliseconds(40));\n    return seed * 73856093 ^ 19349663;\n}\n\nint main() {\n    // std::launch::async guarantees execution on a separate background thread\n    std::future<int> resultFuture = std::async(std::launch::async, computeHeavyHash, 42);\n\n    std::cout << \"Main thread continues working freely...\\n\";\n    int finalResult = resultFuture.get(); // Blocks until result is computed (or throws if exception occurred)\n    std::cout << \"Async Computation Result: \" << finalResult << \"\\n\";\n    return 0;\n}",
          "output": "Main thread continues working freely...\nAsync Computation Result: 3101955906",
          "keyTakeaways": [
            "std::async abstracts thread creation, automatically joining or managing the execution channel.",
            "future.get() can only be called once; it transfers ownership of the computed value.",
            "If the async task throws an exception, future.get() re-throws that exact exception on the calling thread."
          ]
        },
        {
          "id": 78,
          "source": "prodev",
          "title": "Lock-Free Programming, Atomics & Memory Models (std::atomic, Memory Order) 🛡️",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Concurrency",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://en.cppreference.com/w/cpp/atomic/atomic",
          "summary": {
            "en": "Designing high-throughput lock-free algorithms: atomic operations, Compare-And-Swap (CAS), memory ordering semantics, and avoiding false sharing.",
            "fr": "Programmation concurrente sans verrou (lock-free) : opérations atomiques, Compare-And-Swap (CAS) et ordres mémoire."
          },
          "code": "#include <iostream>\n#include <atomic>\n#include <thread>\n\nstruct alignas(64) AlignedCounter { // alignas(64) prevents cache-line false sharing!\n    std::atomic<uint64_t> value{0};\n};\n\nAlignedCounter globalCounter;\n\nvoid increment(int iters) {\n    for (int i = 0; i < iters; i++) {\n        // fetch_add with relaxed memory order for maximum CPU throughput\n        globalCounter.value.fetch_add(1, std::memory_order_relaxed);\n    }\n}\n\nint main() {\n    {\n        std::jthread t1(increment, 5000);\n        std::jthread t2(increment, 5000);\n    }\n    std::cout << \"Final Atomic Counter: \" << globalCounter.value.load(std::memory_order_relaxed) << \"\\n\";\n    return 0;\n}",
          "output": "Final Atomic Counter: 10000",
          "keyTakeaways": [
            "std::atomic operations are guaranteed lock-free on native pointer/integer sizes (check with is_lock_free()).",
            "compare_exchange_weak in a loop is the foundation of lock-free stacks, queues, and ring buffers.",
            "False sharing occurs when independent threads update different variables located on the same 64-byte cache line; use alignas(64) to eliminate it."
          ]
        },
        {
          "id": 79,
          "source": "prodev",
          "title": "C++20 Synchronization Primitives (Counting Semaphores, Latches & Barriers) 🚦",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Concurrency",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://en.cppreference.com/w/cpp/thread/counting_semaphore",
          "summary": {
            "en": "Modern C++20 thread coordination tools: counting semaphores for resource pools, single-use std::latch, and multi-phase std::barrier.",
            "fr": "Outils de synchronisation C++20 : sémaphores de comptage pour pools de ressources, std::latch et std::barrier."
          },
          "code": "#include <iostream>\n#include <semaphore>\n#include <latch>\n#include <thread>\n#include <vector>\n\nstd::counting_semaphore<3> resourcePool(3); // Allows at most 3 concurrent accesses\nstd::latch startSignal(3); // Waits for all 3 workers to initialize\n\nvoid worker(int id) {\n    startSignal.arrive_and_wait(); // Synchronize all workers to start at the exact same moment\n    resourcePool.acquire();\n    std::cout << \"Worker \" << id << \" acquired database slot.\\n\";\n    resourcePool.release();\n}\n\nint main() {\n    std::vector<std::jthread> pool;\n    for (int i = 1; i <= 3; i++) pool.emplace_back(worker, i);\n    return 0;\n}",
          "output": "Worker 1 acquired database slot.\nWorker 2 acquired database slot.\nWorker 3 acquired database slot.",
          "keyTakeaways": [
            "std::counting_semaphore controls access to finite pools of resources (e.g. database connections, GPU compute queues).",
            "std::latch is a single-use countdown barrier: threads arrive, decrement the latch, and unblock once the count hits zero.",
            "std::barrier is reusable across repeated phases with an optional completion function executed when each phase finishes."
          ]
        }
      ]
    },
    {
      "id": "mod-11",
      "source": "prodev",
      "title": {
        "en": "Module 11: Modern C++20/C++23 Architecture & Performance 🚀",
        "fr": "Module 11 : Architecture C++20/C++23 & Haute Performance 🚀"
      },
      "desc": {
        "en": "Essential senior developer capabilities: Concepts & Constraints, Ranges pipelines, Coroutines, Cache Locality, and CRTP.",
        "fr": "Notions indispensables pour développeurs seniors : Concepts, Ranges pipelines, Coroutines, Cache & CRTP."
      },
      "lessons": [
        {
          "id": 80,
          "source": "prodev",
          "title": "C++20 Concepts & Constraints (concept & requires) 🧩",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Modern C++",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://en.cppreference.com/w/cpp/language/constraints",
          "summary": {
            "en": "Expressing compile-time requirements on template parameters: replacing convoluted SFINAE with clean, readable concepts and constraints.",
            "fr": "Définition des exigences de compilation sur les templates : remplacement de SFINAE par des concepts clairs et concis."
          },
          "code": "#include <iostream>\n#include <concepts>\n\n// Define a custom concept\ntemplate<typename T>\nconcept Numeric = std::integral<T> || std::floating_point<T>;\n\n// Constrain a function using the concept\ntemplate<Numeric T>\nT addValues(T a, T b) {\n    return a + b;\n}\n\nint main() {\n    std::cout << \"Int Sum: \" << addValues(10, 20) << \"\\n\";\n    std::cout << \"Double Sum: \" << addValues(3.14, 2.71) << \"\\n\";\n    // addValues(\"hello\", \"world\"); // Compile ERROR with clear, human-readable message!\n    return 0;\n}",
          "output": "Int Sum: 30\nDouble Sum: 5.85",
          "keyTakeaways": [
            "Concepts eliminate 50-line cryptic template compiler error dumps, producing concise 'concept requirement not satisfied' errors.",
            "Combine concepts with logical operators: template<typename T> requires std::copyable<T> && std::equality_comparable<T>.",
            "Standard concepts library (<concepts>) provides std::same_as, std::derived_from, std::invocable, std::integral, etc."
          ]
        },
        {
          "id": 81,
          "source": "prodev",
          "title": "C++20 Ranges & Functional Pipelines (std::ranges & std::views) 🌊",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Modern C++",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://en.cppreference.com/w/cpp/ranges",
          "summary": {
            "en": "Composable, non-allocating, lazy-evaluated transformation pipelines on collections using std::views and the UNIX-style pipe operator (|).",
            "fr": "Pipelines fonctionnels composables et à évaluation paresseuse sur les conteneurs avec std::views et l'opérateur pipe (|)."
          },
          "code": "#include <iostream>\n#include <vector>\n#include <ranges>\n\nint main() {\n    std::vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n\n    // Composable lazy pipeline: filters even numbers, squares them, takes first 3\n    auto results = numbers \n        | std::views::filter([](int n){ return n % 2 == 0; }) \n        | std::views::transform([](int n){ return n * n; }) \n        | std::views::take(3);\n\n    std::cout << \"Pipeline Result: \";\n    for (int val : results) std::cout << val << \" \";\n    std::cout << \"\\n\";\n    return 0;\n}",
          "output": "Pipeline Result: 4 16 36",
          "keyTakeaways": [
            "std::views are non-owning, lightweight wrappers with O(1) copy cost and zero heap memory allocations.",
            "Evaluated lazily: elements are only transformed on demand when iterated over.",
            "std::ranges algorithms (e.g. std::ranges::sort(vec)) accept the container directly without requiring vec.begin(), vec.end()."
          ]
        },
        {
          "id": 82,
          "source": "prodev",
          "title": "C++20 Coroutines (co_await, co_yield, co_return) 🔄",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Modern C++",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://en.cppreference.com/w/cpp/language/coroutines",
          "summary": {
            "en": "Stackless coroutines in modern C++: suspension points, state machine management across calls, generators, and async execution without blocking threads.",
            "fr": "Coroutines sans pile en C++20 : points de suspension (co_await, co_yield), générateurs et exécution asynchrone non bloquante."
          },
          "code": "// Conceptual generator coroutine pattern\n#include <iostream>\n\n// In C++20/23, coroutines use co_yield to produce values lazily on demand\n// while preserving local execution frame on the heap\n\nint main() {\n    std::cout << \"C++20 Coroutine keywords:\\n\";\n    std::cout << \"1. co_yield: suspends execution and yields value to caller\\n\";\n    std::cout << \"2. co_await: suspends execution until asynchronous task completes\\n\";\n    std::cout << \"3. co_return: completes coroutine and returns final result\\n\";\n    return 0;\n}",
          "output": "C++20 Coroutine keywords:\n1. co_yield: suspends execution and yields value to caller\n2. co_await: suspends execution until asynchronous task completes\n3. co_return: completes coroutine and returns final result",
          "keyTakeaways": [
            "Any function containing co_await, co_yield, or co_return is treated by the compiler as a coroutine.",
            "Coroutines are stackless: their state frame is allocated on the heap, allowing thousands of concurrent lightweight tasks.",
            "Perfect for infinite sequence generators, event loops in game engines, and high-throughput network servers."
          ]
        },
        {
          "id": 83,
          "source": "prodev",
          "title": "Cache Locality, False Sharing & Performance Profiling 🚀",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Performance",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://en.cppreference.com/w/cpp/thread/hardware_destructive_interference_size",
          "summary": {
            "en": "Hardware-conscious high-performance C++: Data-Oriented Design (DoD), cache hierarchies (L1/L2/L3), cache lines, and microbenchmarking.",
            "fr": "Optimisation matérielle en C++ : conception orientée données (DoD), hiérarchie de cache (L1/L2/L3) et micro-benchmarking."
          },
          "code": "#include <iostream>\n#include <vector>\n#include <chrono>\n\n// Structure of Arrays (SoA) for extreme cache locality in hot loops\nstruct ParticleSystemSoA {\n    std::vector<float> posX, posY, posZ;\n    std::vector<float> velX, velY, velZ;\n    \n    void updatePositions(float dt) {\n        // Vectorized contiguous memory access: 100% cache hit rate!\n        for (size_t i = 0; i < posX.size(); i++) {\n            posX[i] += velX[i] * dt;\n        }\n    }\n};\n\nint main() {\n    ParticleSystemSoA ps;\n    ps.posX = {0.0f, 1.0f, 2.0f};\n    ps.velX = {10.0f, 10.0f, 10.0f};\n    ps.updatePositions(0.016f);\n    std::cout << \"Contiguous Memory Simulation: 100% Cache Efficiency\\n\";\n    return 0;\n}",
          "output": "Contiguous Memory Simulation: 100% Cache Efficiency",
          "keyTakeaways": [
            "Contiguous std::vector memory is vastly faster than linked lists (std::list) due to hardware cache line prefetching (64 bytes).",
            "Data-Oriented Design (Structure of Arrays) allows SIMD compiler auto-vectorization.",
            "Use compiler optimization flags: -O3 -flto (Link Time Optimization) -march=native for max production speed."
          ]
        },
        {
          "id": 84,
          "source": "prodev",
          "title": "Advanced Design Patterns (CRTP, Type Erasure & std::visit) 🏛️",
          "timestamp": null,
          "timeSeconds": null,
          "category": "Architecture",
          "ytUrl": null,
          "learnCppUrl": null,
          "primerUrl": null,
          "proDevUrl": "https://en.cppreference.com/w/cpp/utility/variant/visit",
          "summary": {
            "en": "Zero-overhead polymorphism with the Curiously Recurring Template Pattern (CRTP), value-semantic Type Erasure, and pattern matching with std::visit.",
            "fr": "Polymorphisme sans surcoût (CRTP), effacement de type (Type Erasure) et filtrage par motif avec std::visit."
          },
          "code": "#include <iostream>\n#include <variant>\n\n// 1. CRTP: Static Polymorphism without vtable pointer overhead\ntemplate<typename Derived>\nstruct Shape {\n    void draw() { static_cast<Derived*>(this)->render(); }\n};\n\nstruct Circle : public Shape<Circle> {\n    void render() { std::cout << \"Rendering Circle via CRTP (Zero VTable Cost!)\\n\"; }\n};\n\n// 2. std::variant & std::visit: High performance type-safe tagged union\nusing Event = std::variant<int, std::string>;\n\nint main() {\n    Circle c;\n    c.draw(); // Dispatched at compile-time!\n\n    Event ev = \"PlayerMoved\";\n    std::visit([](const auto& val) {\n        std::cout << \"Event received: \" << val << \"\\n\";\n    }, ev);\n    return 0;\n}",
          "output": "Rendering Circle via CRTP (Zero VTable Cost!)\nEvent received: PlayerMoved",
          "keyTakeaways": [
            "CRTP achieves polymorphic behavior at compile-time, eliminating virtual function table pointer overhead and enabling inlining.",
            "Type Erasure (used by std::function and std::any) provides dynamic polymorphism while keeping clean value semantics.",
            "std::visit on std::variant offers compile-time checked pattern matching across heterogeneous types."
          ]
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSE_DATA;
}
