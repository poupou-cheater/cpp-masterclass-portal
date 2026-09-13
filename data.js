// C++ Full Course Curriculum Dataset
// Complete 60 Bro Code Lessons + 5 Intermediate Mastery Bridge Lessons
// Accurate YouTube Timestamps, Complete Code Examples & Bilingual Content

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
        "en": "📚 Intermediate Bridge",
        "fr": "📚 Passerelle Intermédiaire"
      },
      "color": "#10b981"
    }
  ],
  "modules": [
    {
      "id": "mod-1",
      "source": "brocode",
      "icon": "⚡",
      "title": {
        "en": "Module 1: C++ Syntax & Basics (Bro Code 1-10)",
        "fr": "Module 1 : Syntaxe & Fondamentaux (Bro Code 1-10)"
      },
      "description": {
        "en": "Core language basics from the Bro Code 6h video: setup, variables, types, const, namespaces, operators, user input, and math.",
        "fr": "Bases essentielles de la vidéo Bro Code 6h : configuration, variables, types, const, namespaces, opérateurs et maths."
      },
      "lessons": [
        {
          "id": 1,
          "title": "C++ Tutorial for Beginners 👨‍💻",
          "timestamp": "00:00:00",
          "timeSeconds": 0,
          "category": "Basics",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-cplusplus/",
          "primerUrl": "https://cpp-primer.pages.dev/book/011-1.1._writing_a_simple_cpp_program",
          "summary": {
            "en": "Setting up your C++ toolchain, understanding main(), std::cout, and compiling your first C++ program.",
            "fr": "Installation de l'environnement C++, compréhension de main(), std::cout et premier programme."
          },
          "code": "#include <iostream>\n\nint main() {\n    // std::cout outputs characters to the terminal\n    std::cout << \"Hello, World! Welcome to C++!\" << std::endl;\n    return 0; // Return 0 signifies successful execution\n}",
          "output": "Hello, World! Welcome to C++!",
          "keyTakeaways": [
            "C++ is a compiled, high-performance language.",
            "main() is the designated entry point of every C++ executable.",
            "#include <iostream> provides standard input/output stream capabilities."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=0s"
        },
        {
          "id": 2,
          "title": "Variables and Basic Data Types ✗",
          "timestamp": "00:13:30",
          "timeSeconds": 810,
          "category": "Basics",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-fundamental-data-types/",
          "primerUrl": "https://cpp-primer.pages.dev/book/021-2.1._primitive_builtin_types",
          "summary": {
            "en": "Fundamental data types in C++: int, double, char, bool, and std::string.",
            "fr": "Types de données fondamentaux en C++ : int, double, char, bool et std::string."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    int age = 21;              // Whole numbers\n    double price = 19.99;      // Floating-point numbers\n    char grade = 'A';          // Single character\n    bool isStudent = true;     // Boolean true or false\n    std::string name = \"Alex\"; // Sequence of characters\n\n    std::cout << name << \" | Age: \" << age << \" | Grade: \" << grade << std::endl;\n    return 0;\n}",
          "output": "Alex | Age: 21 | Grade: A",
          "keyTakeaways": [
            "int stores integers, double stores decimals.",
            "char uses single quotes 'A', while std::string uses double quotes \"Alex\".",
            "bool evaluates to true (1) or false (0)."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=810s"
        },
        {
          "id": 3,
          "title": "Const Keyword 🚫",
          "timestamp": "00:24:14",
          "timeSeconds": 1454,
          "category": "Basics",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/const-variables-and-symbolic-constants/",
          "primerUrl": "https://cpp-primer.pages.dev/book/024-2.4._const_qualifier",
          "summary": {
            "en": "Using const to create read-only variables that prevent accidental modifications.",
            "fr": "Utilisation du mot-clé const pour déclarer des variables en lecture seule."
          },
          "code": "#include <iostream>\n\nint main() {\n    const double PI = 3.14159;\n    const int SCREEN_WIDTH = 1920;\n    double radius = 10.0;\n    double circumference = 2 * PI * radius;\n\n    // PI = 3.14; // Compiler Error! Cannot assign to variable that is const\n    std::cout << \"Circumference: \" << circumference << std::endl;\n    return 0;\n}",
          "output": "Circumference: 62.8318",
          "keyTakeaways": [
            "const makes variable values immutable after initialization.",
            "Helps compilers optimize and guards against bugs.",
            "Conventionally named in ALL_CAPS for constants."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=1454s"
        },
        {
          "id": 4,
          "title": "Namespaces 📛",
          "timestamp": "00:27:37",
          "timeSeconds": 1657,
          "category": "Basics",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/user-defined-namespaces-and-the-scope-resolution-operator/",
          "primerUrl": "https://cpp-primer.pages.dev/book/028-3.1._namespace_using_declarations",
          "summary": {
            "en": "Preventing naming collisions in large projects using namespaces and scope resolution (::).",
            "fr": "Prévention des conflits de noms avec les espaces de noms (namespaces) et l'opérateur ::."
          },
          "code": "#include <iostream>\n\nnamespace first {\n    int x = 1;\n}\n\nnamespace second {\n    int x = 2;\n}\n\nint main() {\n    int x = 0;\n    std::cout << \"Local x: \" << x << std::endl;\n    std::cout << \"first::x: \" << first::x << std::endl;\n    std::cout << \"second::x: \" << second::x << std::endl;\n    return 0;\n}",
          "output": "Local x: 0\nfirst::x: 1\nsecond::x: 2",
          "keyTakeaways": [
            "Namespaces isolate symbols and prevent naming conflicts.",
            "The scope resolution operator (::) accesses members of a namespace.",
            "Avoid 'using namespace std;' in header files."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=1657s"
        },
        {
          "id": 5,
          "title": "Typedef and Type Aliases 🙋‍♂️",
          "timestamp": "00:32:13",
          "timeSeconds": 1933,
          "category": "Basics",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/typedefs-and-type-aliases/",
          "primerUrl": "https://cpp-primer.pages.dev/book/025-2.5._dealing_with_types",
          "summary": {
            "en": "Creating clean aliases for complex types using typedef and modern 'using' syntax.",
            "fr": "Création d'alias de types pour simplifier le code via typedef et la syntaxe 'using'."
          },
          "code": "#include <iostream>\n#include <string>\n\n// Modern C++ alias with 'using' (preferred)\nusing text_t = std::string;\nusing number_t = int;\n\nint main() {\n    text_t firstName = \"Bro\";\n    number_t age = 25;\n\n    std::cout << \"Hello \" << firstName << \", age: \" << age << std::endl;\n    return 0;\n}",
          "output": "Hello Bro, age: 25",
          "keyTakeaways": [
            "Type aliases enhance code readability without creating new types.",
            "'using alias = type;' is the modern C++ standard over legacy 'typedef'.",
            "Especially helpful for long STL container and template types."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=1933s"
        },
        {
          "id": 6,
          "title": "Arithmetic Operators 🧮",
          "timestamp": "00:37:39",
          "timeSeconds": 2259,
          "category": "Basics",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/arithmetic-operators/",
          "primerUrl": "https://cpp-primer.pages.dev/book/039-4.1._fundamentals",
          "summary": {
            "en": "Addition, subtraction, multiplication, division, modulus (%), and compound assignment.",
            "fr": "Addition, soustraction, multiplication, division, modulo (%) et assignations combinées."
          },
          "code": "#include <iostream>\n\nint main() {\n    int students = 20;\n    students += 2;   // 22\n    students -= 1;   // 21\n    students *= 2;   // 42\n    students /= 3;   // 14\n    int remainder = students % 4; // 14 % 4 = 2\n\n    std::cout << \"Students: \" << students << \", Remainder: \" << remainder << std::endl;\n    return 0;\n}",
          "output": "Students: 14, Remainder: 2",
          "keyTakeaways": [
            "Integer division truncates decimals (e.g. 7 / 2 = 3).",
            "Modulus operator (%) returns the remainder of integer division.",
            "Compound assignment (+=, -=, *=, /=) streamlines in-place updates."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=2259s"
        },
        {
          "id": 7,
          "title": "Type Conversion (static_cast) ✨",
          "timestamp": "00:43:18",
          "timeSeconds": 2598,
          "category": "Basics",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/implicit-type-conversion/",
          "primerUrl": "https://cpp-primer.pages.dev/book/047-4.11._type_conversions",
          "summary": {
            "en": "Implicit type conversion versus explicit casting with static_cast<type>().",
            "fr": "Conversions de types implicites versus explicites avec static_cast<type>()."
          },
          "code": "#include <iostream>\n\nint main() {\n    int correct = 8;\n    int questions = 10;\n\n    // static_cast ensures floating-point division instead of integer truncation\n    double score = static_cast<double>(correct) / questions * 100;\n\n    std::cout << \"Score: \" << score << \"%\" << std::endl;\n    return 0;\n}",
          "output": "Score: 80%",
          "keyTakeaways": [
            "Avoid C-style casts (double)x; prefer modern static_cast<double>(x).",
            "static_cast is checked at compile time and is explicit in intention.",
            "Prevents unintentional data truncation during division."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=2598s"
        },
        {
          "id": 8,
          "title": "User Input (std::cin & getline) ⌨️",
          "timestamp": "00:47:05",
          "timeSeconds": 2825,
          "category": "Basics",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-iostream-cout-cin-and-endl/",
          "primerUrl": "https://cpp-primer.pages.dev/book/012-1.2._a_first_look_at_input_output",
          "summary": {
            "en": "Reading single words with std::cin >> and full lines with std::getline(std::cin, str).",
            "fr": "Lecture d'entrées utilisateur avec std::cin et de lignes entières avec std::getline."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string name = \"Bro Code\";\n    int age = 25;\n\n    // In real terminal:\n    // std::cout << \"Enter full name: \";\n    // std::getline(std::cin >> std::ws, name);\n    // std::cout << \"Enter age: \";\n    // std::cin >> age;\n\n    std::cout << \"Hello \" << name << \", you are \" << age << \" years old!\" << std::endl;\n    return 0;\n}",
          "output": "Hello Bro Code, you are 25 years old!",
          "keyTakeaways": [
            "std::cin >> stops reading at whitespace.",
            "std::getline(std::cin, str) reads entire lines including spaces.",
            "Use std::ws to consume leftover newlines before getline()."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=2825s"
        },
        {
          "id": 9,
          "title": "Useful Math Functions (<cmath>) 🔢",
          "timestamp": "00:52:35",
          "timeSeconds": 3155,
          "category": "Basics",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/operator-precedence-and-associativity/",
          "primerUrl": "https://cpp-primer.pages.dev/book/040-4.2._arithmetic_operators",
          "summary": {
            "en": "Common mathematical calculations with <cmath>: max, min, pow, sqrt, abs, round, ceil, floor.",
            "fr": "Fonctions mathématiques usuelles de <cmath> : max, min, pow, sqrt, abs, round, ceil, floor."
          },
          "code": "#include <iostream>\n#include <cmath>\n#include <algorithm>\n\nint main() {\n    double x = 3.14;\n    double y = 4;\n\n    std::cout << \"Max: \" << std::max(x, y) << std::endl;\n    std::cout << \"Power 2^3: \" << std::pow(2, 3) << std::endl;\n    std::cout << \"Sqrt 16: \" << std::sqrt(16) << std::endl;\n    std::cout << \"Round 3.14: \" << std::round(x) << std::endl;\n    std::cout << \"Ceil 3.14: \" << std::ceil(x) << std::endl;\n    return 0;\n}",
          "output": "Max: 4\nPower 2^3: 8\nSqrt 16: 4\nRound 3.14: 3\nCeil 3.14: 4",
          "keyTakeaways": [
            "#include <cmath> exposes standard mathematical operations.",
            "std::max and std::min compare two values.",
            "pow(base, exp) calculates powers; sqrt(x) calculates square root."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=3155s"
        },
        {
          "id": 10,
          "title": "Hypotenuse Calculator Practice Program 📐",
          "timestamp": "00:56:03",
          "timeSeconds": 3363,
          "category": "Basics",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/developing-your-first-program/",
          "primerUrl": "https://cpp-primer.pages.dev/book/012-1.2._a_first_look_at_input_output",
          "summary": {
            "en": "Combining input, variables, and math functions to calculate the hypotenuse: c = sqrt(a² + b²).",
            "fr": "Application pratique : calcul de l'hypoténuse d'un triangle rectangle via c = sqrt(a² + b²)."
          },
          "code": "#include <iostream>\n#include <cmath>\n\nint main() {\n    double a = 3.0; // side A\n    double b = 4.0; // side B\n    \n    // Formula: c = sqrt(a^2 + b^2)\n    double c = std::sqrt(std::pow(a, 2) + std::pow(b, 2));\n\n    std::cout << \"Side A: \" << a << \", Side B: \" << b << std::endl;\n    std::cout << \"Hypotenuse C: \" << c << std::endl;\n    return 0;\n}",
          "output": "Side A: 3, Side B: 4\nHypotenuse C: 5",
          "keyTakeaways": [
            "Combines user input, cmath power and square root.",
            "Pythagorean theorem: c = sqrt(a^2 + b^2).",
            "Demonstrates step-by-step program composition."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=3363s"
        }
      ]
    },
    {
      "id": "mod-2",
      "source": "brocode",
      "icon": "🔀",
      "title": {
        "en": "Module 2: Control Flow & Decisions (Bro Code 11-17)",
        "fr": "Module 2 : Structures de Contrôle (Bro Code 11-17)"
      },
      "description": {
        "en": "Decision making in C++: if/else statements, switches, console calculator, ternary operators, and string methods.",
        "fr": "Prise de décision en C++ : conditions if/else, switch, calculatrice console, ternaires et méthodes sur chaînes."
      },
      "lessons": [
        {
          "id": 11,
          "title": "If Statements 🤔",
          "timestamp": "00:58:44",
          "timeSeconds": 3524,
          "category": "Control Flow",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/if-statements-and-blocks/",
          "primerUrl": "https://cpp-primer.pages.dev/book/053-5.3._conditional_statements",
          "summary": {
            "en": "Conditional branching using if, else if, and else blocks to direct program logic.",
            "fr": "Branchements conditionnels avec les blocs if, else if et else."
          },
          "code": "#include <iostream>\n\nint main() {\n    int age = 19;\n\n    if (age >= 18) {\n        std::cout << \"Welcome! Access granted.\" << std::endl;\n    } else if (age < 0) {\n        std::cout << \"You haven't been born yet!\" << std::endl;\n    } else {\n        std::cout << \"You are too young to enter.\" << std::endl;\n    }\n    return 0;\n}",
          "output": "Welcome! Access granted.",
          "keyTakeaways": [
            "if statements execute code only when conditions evaluate to true.",
            "Order matters: evaluations proceed from top to bottom.",
            "Use braces {} even for single-line if bodies to avoid dangling else bugs."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=3524s"
        },
        {
          "id": 12,
          "title": "Switches 🔀",
          "timestamp": "01:03:40",
          "timeSeconds": 3820,
          "category": "Control Flow",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/switch-statement-basics/",
          "primerUrl": "https://cpp-primer.pages.dev/book/053-5.3._conditional_statements",
          "summary": {
            "en": "Testing one variable against multiple discrete values using switch, case, break, and default.",
            "fr": "Comparaison d'une variable contre plusieurs valeurs constantes avec switch, case, break et default."
          },
          "code": "#include <iostream>\n\nint main() {\n    int month = 2;\n\n    switch (month) {\n        case 1:  std::cout << \"January\" << std::endl; break;\n        case 2:  std::cout << \"February\" << std::endl; break;\n        case 3:  std::cout << \"March\" << std::endl; break;\n        default: std::cout << \"Other month\" << std::endl; break;\n    }\n    return 0;\n}",
          "output": "February",
          "keyTakeaways": [
            "switches are cleaner and more efficient than long chains of else-if.",
            "Always include break; to prevent unintentional fall-through.",
            "default: handles any unmatched case."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=3820s"
        },
        {
          "id": 13,
          "title": "Console Calculator Program 🖩",
          "timestamp": "01:09:29",
          "timeSeconds": 4169,
          "category": "Control Flow",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/switch-statement-basics/",
          "primerUrl": "https://cpp-primer.pages.dev/book/053-5.3._conditional_statements",
          "summary": {
            "en": "Building a practical command-line calculator combining switch statements and arithmetic operations.",
            "fr": "Création d'une calculatrice console combinant switch et opérateurs arithmétiques."
          },
          "code": "#include <iostream>\n\nint main() {\n    char op = '*';\n    double num1 = 12.0;\n    double num2 = 4.0;\n    double result = 0;\n\n    switch (op) {\n        case '+': result = num1 + num2; break;\n        case '-': result = num1 - num2; break;\n        case '*': result = num1 * num2; break;\n        case '/': \n            if (num2 != 0) result = num1 / num2; \n            else { std::cout << \"Error: Division by zero!\" << std::endl; return 1; }\n            break;\n        default:\n            std::cout << \"Invalid operator!\" << std::endl;\n            return 1;\n    }\n\n    std::cout << num1 << \" \" << op << \" \" << num2 << \" = \" << result << std::endl;\n    return 0;\n}",
          "output": "12 * 4 = 48",
          "keyTakeaways": [
            "Demonstrates integrating user input with conditional operations.",
            "Guards against critical errors like division by zero.",
            "Clean exit codes on error cases."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=4169s"
        },
        {
          "id": 14,
          "title": "Ternary Operator ❓",
          "timestamp": "01:14:13",
          "timeSeconds": 4453,
          "category": "Control Flow",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/the-conditional-operator/",
          "primerUrl": "https://cpp-primer.pages.dev/book/045-4.7._conditional_operator",
          "summary": {
            "en": "Inline conditional expressions: condition ? expression1 : expression2.",
            "fr": "Expression conditionnelle concise en une ligne : condition ? expr1 : expr2."
          },
          "code": "#include <iostream>\n\nint main() {\n    int grade = 75;\n    // condition ? if_true : if_false\n    std::cout << (grade >= 60 ? \"PASSED!\" : \"FAILED!\") << std::endl;\n\n    int number = 8;\n    bool isEven = (number % 2 == 0) ? true : false;\n    std::cout << number << \" is \" << (isEven ? \"Even\" : \"Odd\") << std::endl;\n    return 0;\n}",
          "output": "PASSED!\n8 is Even",
          "keyTakeaways": [
            "The ternary operator is an expression, meaning it returns a value.",
            "Useful for inline variable initialization and stream output.",
            "Keep ternary expressions simple to preserve readability."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=4453s"
        },
        {
          "id": 15,
          "title": "Logical Operators (&&, ||, !) 🔣",
          "timestamp": "01:18:53",
          "timeSeconds": 4733,
          "category": "Control Flow",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/logical-operators/",
          "primerUrl": "https://cpp-primer.pages.dev/book/041-4.3._logic_and_relational_operators",
          "summary": {
            "en": "Combining boolean conditions using AND (&&), OR (||), and NOT (!).",
            "fr": "Combinaisons de conditions avec les opérateurs ET (&&), OU (||) et NON (!)."
          },
          "code": "#include <iostream>\n\nint main() {\n    int temp = 24;\n    bool isSunny = true;\n\n    if (temp > 20 && temp < 30 && isSunny) {\n        std::cout << \"The weather is perfect outside!\" << std::endl;\n    } else if (temp <= 0 || temp >= 40) {\n        std::cout << \"Extreme weather alert!\" << std::endl;\n    }\n\n    if (!isSunny) {\n        std::cout << \"It is cloudy.\" << std::endl;\n    }\n    return 0;\n}",
          "output": "The weather is perfect outside!",
          "keyTakeaways": [
            "&& (AND) requires all conditions to be true.",
            "|| (OR) requires at least one condition to be true.",
            "C++ uses short-circuit evaluation for logical expressions."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=4733s"
        },
        {
          "id": 16,
          "title": "Temperature Conversion Program 🌡️",
          "timestamp": "01:23:55",
          "timeSeconds": 5035,
          "category": "Control Flow",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/if-statements-and-blocks/",
          "primerUrl": "https://cpp-primer.pages.dev/book/053-5.3._conditional_statements",
          "summary": {
            "en": "A temperature converter between Celsius and Fahrenheit using formula conversions.",
            "fr": "Convertisseur de température Celsius / Fahrenheit appliquant les formules de conversion."
          },
          "code": "#include <iostream>\n\nint main() {\n    char unit = 'F'; // 'F' for Fahrenheit to Celsius, 'C' for Celsius to Fahrenheit\n    double temp = 100.0;\n\n    if (unit == 'F' || unit == 'f') {\n        double celsius = (temp - 32.0) / 1.8;\n        std::cout << temp << \"°F is \" << celsius << \"°C\" << std::endl;\n    } else if (unit == 'C' || unit == 'c') {\n        double fahrenheit = (1.8 * temp) + 32.0;\n        std::cout << temp << \"°C is \" << fahrenheit << \"°F\" << std::endl;\n    }\n    return 0;\n}",
          "output": "100°F is 37.7778°C",
          "keyTakeaways": [
            "Applies conditionals and floating-point math to real-world calculations.",
            "Accounts for case variations with (unit == 'F' || unit == 'f').",
            "Reinforces formula structuring."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=5035s"
        },
        {
          "id": 17,
          "title": "Useful String Methods in C++ 〰️",
          "timestamp": "01:29:17",
          "timeSeconds": 5357,
          "category": "Control Flow",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/an-introduction-to-stdstring/",
          "primerUrl": "https://cpp-primer.pages.dev/book/029-3.2._library_string_type",
          "summary": {
            "en": "Essential std::string member functions: length, empty, clear, append, at, insert, find, and erase.",
            "fr": "Méthodes essentielles de std::string : length, empty, clear, append, at, insert, find, erase."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string name = \"Bro Code\";\n\n    std::cout << \"Length: \" << name.length() << std::endl;\n    std::cout << \"Is empty: \" << (name.empty() ? \"Yes\" : \"No\") << std::endl;\n\n    name.append(\"@gmail.com\");\n    std::cout << \"Appended: \" << name << std::endl;\n\n    std::cout << \"Character at 0: \" << name.at(0) << std::endl;\n    std::cout << \"Find '@': index \" << name.find('@') << std::endl;\n\n    name.erase(0, 4); // erase 4 chars from index 0\n    std::cout << \"After erase: \" << name << std::endl;\n    return 0;\n}",
          "output": "Length: 8\nIs empty: No\nAppended: Bro Code@gmail.com\nCharacter at 0: B\nFind '@': index 8\nAfter erase: Code@gmail.com",
          "keyTakeaways": [
            ".length() / .size() returns character count.",
            ".at(i) performs bounds checking, unlike direct operator [i].",
            ".find() returns std::string::npos if the substring is not found."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=5357s"
        }
      ]
    },
    {
      "id": "mod-3",
      "source": "brocode",
      "icon": "♾️",
      "title": {
        "en": "Module 3: Loops & Practice Games (Bro Code 18-25)",
        "fr": "Module 3 : Boucles & Jeux Pratiques (Bro Code 18-25)"
      },
      "description": {
        "en": "Loop mastery and games: while, do-while, for loops, break/continue, random numbers, and the number guessing game.",
        "fr": "Maîtrise des boucles et jeux : while, do-while, for, break/continue, aléatoire et jeu de devinette."
      },
      "lessons": [
        {
          "id": 18,
          "title": "While Loops ♾️",
          "timestamp": "01:35:51",
          "timeSeconds": 5751,
          "category": "Loops",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/while-statements/",
          "primerUrl": "https://cpp-primer.pages.dev/book/054-5.4._iterative_statements",
          "summary": {
            "en": "Executing code repeatedly as long as a specified condition remains true.",
            "fr": "Répétition d'un bloc de code tant qu'une condition reste vraie."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    int count = 1;\n\n    while (count <= 5) {\n        std::cout << \"Iteration: \" << count << std::endl;\n        count++; // Prevent infinite loop!\n    }\n\n    std::cout << \"Loop completed successfully.\" << std::endl;\n    return 0;\n}",
          "output": "Iteration: 1\nIteration: 2\nIteration: 3\nIteration: 4\nIteration: 5\nLoop completed successfully.",
          "keyTakeaways": [
            "while checks condition BEFORE executing the block body.",
            "Always ensure an update condition exists to prevent infinite loops.",
            "Useful when the exact number of iterations is unknown in advance."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=5751s"
        },
        {
          "id": 19,
          "title": "Do-While Loops 🔃",
          "timestamp": "01:38:56",
          "timeSeconds": 5936,
          "category": "Loops",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/do-while-statements/",
          "primerUrl": "https://cpp-primer.pages.dev/book/054-5.4._iterative_statements",
          "summary": {
            "en": "Guaranteed to execute at least once before testing the condition.",
            "fr": "Boucle do-while : exécute le corps au moins une fois avant de tester la condition."
          },
          "code": "#include <iostream>\n\nint main() {\n    int number = 0;\n\n    // Guaranteed to run once even if condition starts false\n    do {\n        std::cout << \"Number is: \" << number << std::endl;\n        number++;\n    } while (number < 3);\n\n    return 0;\n}",
          "output": "Number is: 0\nNumber is: 1\nNumber is: 2",
          "keyTakeaways": [
            "do-while checks its condition at the bottom (post-test).",
            "Essential for input validation (prompt at least once, repeat if invalid).",
            "Requires a terminating semicolon after while(condition);"
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=5936s"
        },
        {
          "id": 20,
          "title": "For Loops 🔂",
          "timestamp": "01:42:15",
          "timeSeconds": 6135,
          "category": "Loops",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/for-statements/",
          "primerUrl": "https://cpp-primer.pages.dev/book/054-5.4._iterative_statements",
          "summary": {
            "en": "Structured counting loops: initialization, condition, and increment in one statement.",
            "fr": "Boucle for comptée : initialisation, condition et incrémentation regroupées."
          },
          "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Counting up by 2s:\" << std::endl;\n    for (int i = 0; i <= 10; i += 2) {\n        std::cout << i << \" \";\n    }\n    std::cout << \"\nCountdown:\" << std::endl;\n    for (int i = 5; i > 0; i--) {\n        std::cout << i << \" \";\n    }\n    std::cout << \"HAPPY NEW YEAR!\" << std::endl;\n    return 0;\n}",
          "output": "Counting up by 2s:\n0 2 4 6 8 10 \nCountdown:\n5 4 3 2 1 HAPPY NEW YEAR!",
          "keyTakeaways": [
            "Ideal when number of iterations is known before looping.",
            "Loop counter variable scope is restricted to the for block.",
            "Flexible step increments (i++, i += 2, i--, etc.)."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=6135s"
        },
        {
          "id": 21,
          "title": "Break & Continue 💔",
          "timestamp": "01:45:53",
          "timeSeconds": 6353,
          "category": "Loops",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/break-and-continue/",
          "primerUrl": "https://cpp-primer.pages.dev/book/055-5.5._jump_statements",
          "summary": {
            "en": "Altering loop execution flow: break exits the loop immediately; continue skips to next iteration.",
            "fr": "Contrôle de boucle : break interrompt immédiatement ; continue passe au tour suivant."
          },
          "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Skipping 13 (continue) and stopping at 17 (break):\" << std::endl;\n    for (int i = 10; i <= 20; i++) {\n        if (i == 13) {\n            continue; // Skip rest of iteration 13\n        }\n        if (i == 17) {\n            break; // Stop and exit loop entirely\n        }\n        std::cout << i << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}",
          "output": "Skipping 13 (continue) and stopping at 17 (break):\n10 11 12 14 15 16 ",
          "keyTakeaways": [
            "break terminates the nearest enclosing loop or switch.",
            "continue skips the remaining body and proceeds to the next iteration step.",
            "Prevents deeply nested if conditions inside loops."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=6353s"
        },
        {
          "id": 22,
          "title": "Nested Loops ➿",
          "timestamp": "01:47:34",
          "timeSeconds": 6454,
          "category": "Loops",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/for-statements/",
          "primerUrl": "https://cpp-primer.pages.dev/book/054-5.4._iterative_statements",
          "summary": {
            "en": "Loops inside loops: iterating through rows and columns to draw grids or matrices.",
            "fr": "Boucles imbriquées : parcours de lignes et colonnes pour afficher grilles et matrices."
          },
          "code": "#include <iostream>\n\nint main() {\n    int rows = 3;\n    int cols = 5;\n    char symbol = '*';\n\n    for (int i = 1; i <= rows; i++) {\n        for (int j = 1; j <= cols; j++) {\n            std::cout << symbol << \" \";\n        }\n        std::cout << std::endl; // Newline after each row\n    }\n    return 0;\n}",
          "output": "* * * * * \n* * * * * \n* * * * * ",
          "keyTakeaways": [
            "The inner loop completes all its cycles for every single outer loop step.",
            "Total iterations = outer_count * inner_count.",
            "Fundamental for 2D arrays, game boards, and matrix operations."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=6454s"
        },
        {
          "id": 23,
          "title": "Random Number Generator (rand() & srand()) 🎲",
          "timestamp": "01:51:51",
          "timeSeconds": 6711,
          "category": "Loops",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/generating-random-numbers-using-mersenne-twister/",
          "primerUrl": "https://cpp-primer.pages.dev/book/190-a.3._random_numbers",
          "summary": {
            "en": "Generating pseudo-random numbers with rand(), seeding with srand(time(NULL)), and bounding with %.",
            "fr": "Génération de nombres pseudo-aléatoires avec rand(), initialisation srand(time(NULL)) et modulo."
          },
          "code": "#include <iostream>\n#include <ctime>\n#include <cstdlib>\n\nint main() {\n    // Seed the random number generator using current time\n    std::srand(static_cast<unsigned int>(std::time(nullptr)));\n\n    // Roll a 6-sided die: (rand() % 6) gives 0-5, + 1 gives 1-6\n    int die1 = (std::rand() % 6) + 1;\n    int die2 = (std::rand() % 6) + 1;\n\n    std::cout << \"Die 1: \" << die1 << \", Die 2: \" << die2 << std::endl;\n    std::cout << \"Total: \" << (die1 + die2) << std::endl;\n    return 0;\n}",
          "output": "Die 1: 4, Die 2: 6\nTotal: 10",
          "keyTakeaways": [
            "rand() generates numbers between 0 and RAND_MAX.",
            "srand(time(nullptr)) seeds the sequence so each run produces different results.",
            "(rand() % max) + min adjusts range."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=6711s"
        },
        {
          "id": 24,
          "title": "Random Event Generator 🎁",
          "timestamp": "01:55:25",
          "timeSeconds": 6925,
          "category": "Loops",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/generating-random-numbers-using-mersenne-twister/",
          "primerUrl": "https://cpp-primer.pages.dev/book/190-a.3._random_numbers",
          "summary": {
            "en": "Mapping random integer results to game events or prizes using switch statements.",
            "fr": "Association de tirages aléatoires à des événements ou récompenses via switch."
          },
          "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\n\nint main() {\n    std::srand(12345); // Fixed seed for reproducible output demonstration\n    int randNum = (std::rand() % 5) + 1;\n\n    std::cout << \"Event rolled: \" << randNum << \" -> \";\n    switch (randNum) {\n        case 1: std::cout << \"You won a bumper sticker! 🚗\" << std::endl; break;\n        case 2: std::cout << \"You won a t-shirt! 👕\" << std::endl; break;\n        case 3: std::cout << \"You won a free lunch! 🍔\" << std::endl; break;\n        case 4: std::cout << \"You won a gift card! 💳\" << std::endl; break;\n        case 5: std::cout << \"JACKPOT! You won concert tickets! 🎟️\" << std::endl; break;\n    }\n    return 0;\n}",
          "output": "Event rolled: 1 -> You won a bumper sticker! 🚗",
          "keyTakeaways": [
            "Pairs random generation with switch statements for loot tables and gameplay.",
            "Extremely common pattern in gaming and simulations.",
            "Easily configurable with weights and options."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=6925s"
        },
        {
          "id": 25,
          "title": "Number Guessing Game Practice ↕️",
          "timestamp": "01:59:05",
          "timeSeconds": 7145,
          "category": "Loops",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/developing-your-first-program/",
          "primerUrl": "https://cpp-primer.pages.dev/book/054-5.4._iterative_statements",
          "summary": {
            "en": "A complete mini-game combining while loops, random numbers, and user input validation.",
            "fr": "Jeu complet de devinette de nombre combinant boucles while, random et conditions."
          },
          "code": "#include <iostream>\n\nint main() {\n    int secret = 42;\n    int guesses[] = { 20, 50, 42 }; // simulated user inputs\n    int tries = 0;\n\n    std::cout << \"Welcome to the Number Guessing Game (1-100)!\" << std::endl;\n    for (int guess : guesses) {\n        tries++;\n        std::cout << \"Guess: \" << guess << \" -> \";\n        if (guess > secret) {\n            std::cout << \"TOO HIGH!\" << std::endl;\n        } else if (guess < secret) {\n            std::cout << \"TOO LOW!\" << std::endl;\n        } else {\n            std::cout << \"CORRECT! You won in \" << tries << \" tries! 🎉\" << std::endl;\n            break;\n        }\n    }\n    return 0;\n}",
          "output": "Welcome to the Number Guessing Game (1-100)!\nGuess: 20 -> TOO LOW!\nGuess: 50 -> TOO HIGH!\nGuess: 42 -> CORRECT! You won in 3 tries! 🎉",
          "keyTakeaways": [
            "Ties together loops, conditions, and comparison logic into a functional game.",
            "Keeps track of attempt counts.",
            "Feedback loop guides players toward the target."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=7145s"
        }
      ]
    },
    {
      "id": "mod-4",
      "source": "brocode",
      "icon": "📞",
      "title": {
        "en": "Module 4: Functions & Variable Scope (Bro Code 26-31)",
        "fr": "Module 4 : Fonctions & Portée (Bro Code 26-31)"
      },
      "description": {
        "en": "Modular programming: functions, return types, function overloading, variable scope, banking program, and rock-paper-scissors.",
        "fr": "Programmation modulaire : fonctions, retours, surcharge, portée des variables, programme bancaire et chifoumi."
      },
      "lessons": [
        {
          "id": 26,
          "title": "User Defined Functions 📞",
          "timestamp": "02:03:10",
          "timeSeconds": 7390,
          "category": "Functions",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-functions/",
          "primerUrl": "https://cpp-primer.pages.dev/book/061-6.1._function_basics",
          "summary": {
            "en": "Declaring, defining, and invoking modular reusable functions with parameters.",
            "fr": "Déclaration, définition et appel de fonctions réutilisables avec paramètres."
          },
          "code": "#include <iostream>\n#include <string>\n\n// Function declaration and definition\nvoid happyBirthday(std::string name, int age) {\n    std::cout << \"Happy Birthday to you!\" << std::endl;\n    std::cout << \"Happy Birthday dear \" << name << \"!\" << std::endl;\n    std::cout << \"You are now \" << age << \" years old!\n\" << std::endl;\n}\n\nint main() {\n    happyBirthday(\"Bro\", 25);\n    happyBirthday(\"Alice\", 21);\n    return 0;\n}",
          "output": "Happy Birthday to you!\nHappy Birthday dear Bro!\nYou are now 25 years old!\n\nHappy Birthday to you!\nHappy Birthday dear Alice!\nYou are now 21 years old!\n",
          "keyTakeaways": [
            "Functions decompose complex programs into modular, reusable blocks.",
            "void return type means the function does not return a value.",
            "Parameters allow passing data into function scope."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=7390s"
        },
        {
          "id": 27,
          "title": "Return Keyword 🔙",
          "timestamp": "02:10:33",
          "timeSeconds": 7833,
          "category": "Functions",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/function-return-values/",
          "primerUrl": "https://cpp-primer.pages.dev/book/063-6.3._return_types_and_the_return_statement",
          "summary": {
            "en": "Returning computed values from functions back to the calling site.",
            "fr": "Renvoi de valeurs calculées au point d'appel grâce au mot-clé return."
          },
          "code": "#include <iostream>\n#include <string>\n\ndouble square(double length) {\n    return length * length;\n}\n\ndouble cube(double length) {\n    return length * length * length;\n}\n\nstd::string concatenate(std::string str1, std::string str2) {\n    return str1 + \" \" + str2;\n}\n\nint main() {\n    double area = square(5.0);\n    double volume = cube(5.0);\n    std::string fullName = concatenate(\"Bro\", \"Code\");\n\n    std::cout << \"Area: \" << area << \", Volume: \" << volume << std::endl;\n    std::cout << \"Full Name: \" << fullName << std::endl;\n    return 0;\n}",
          "output": "Area: 25, Volume: 125\nFull Name: Bro Code",
          "keyTakeaways": [
            "The return type must match the function's declared return signature.",
            "return immediately terminates the function execution.",
            "Returned values can be stored in variables or passed directly to std::cout."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=7833s"
        },
        {
          "id": 28,
          "title": "Overloaded Functions 🍕",
          "timestamp": "02:16:42",
          "timeSeconds": 8202,
          "category": "Functions",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-function-overloading/",
          "primerUrl": "https://cpp-primer.pages.dev/book/064-6.4._overloaded_functions",
          "summary": {
            "en": "Sharing the same function name with distinct parameter lists (different types or counts).",
            "fr": "Surcharge de fonctions : même nom avec des signatures de paramètres différentes."
          },
          "code": "#include <iostream>\n#include <string>\n\nvoid bakePizza() {\n    std::cout << \"Here is your plain cheese pizza! 🍕\" << std::endl;\n}\n\nvoid bakePizza(std::string topping1) {\n    std::cout << \"Here is your \" << topping1 << \" pizza! 🍕\" << std::endl;\n}\n\nvoid bakePizza(std::string topping1, std::string topping2) {\n    std::cout << \"Here is your \" << topping1 << \" and \" << topping2 << \" pizza! 🍕\" << std::endl;\n}\n\nint main() {\n    bakePizza();\n    bakePizza(\"pepperoni\");\n    bakePizza(\"mushrooms\", \"peppers\");\n    return 0;\n}",
          "output": "Here is your plain cheese pizza! 🍕\nHere is your pepperoni pizza! 🍕\nHere is your mushrooms and peppers pizza! 🍕",
          "keyTakeaways": [
            "C++ allows multiple functions with the same name if signatures differ.",
            "Overload resolution is determined at compile time based on arguments.",
            "Return type alone is NOT sufficient to overload a function."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=8202s"
        },
        {
          "id": 29,
          "title": "Variable Scope (Local vs Global, ::) 🌎",
          "timestamp": "02:19:49",
          "timeSeconds": 8389,
          "category": "Functions",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/scope-duration-and-linkage-summary/",
          "primerUrl": "https://cpp-primer.pages.dev/book/023-2.3._compound_types",
          "summary": {
            "en": "Understanding local block scope, global lifetime, shadowing, and unary :: operator.",
            "fr": "Portée des variables : locale vs globale, masquage et opérateur unaire ::."
          },
          "code": "#include <iostream>\n\nint myNum = 100; // Global variable\n\nvoid printNum() {\n    int myNum = 50; // Local variable (shadows global)\n    std::cout << \"Inside func local myNum: \" << myNum << std::endl;\n    std::cout << \"Inside func global ::myNum: \" << ::myNum << std::endl;\n}\n\nint main() {\n    int myNum = 1; // Local to main\n    std::cout << \"Main local: \" << myNum << std::endl;\n    std::cout << \"Global ::myNum: \" << ::myNum << std::endl;\n    printNum();\n    return 0;\n}",
          "output": "Main local: 1\nGlobal ::myNum: 100\nInside func local myNum: 50\nInside func global ::myNum: 100",
          "keyTakeaways": [
            "Local variables are created inside braces and destroyed when exiting.",
            "Global variables exist throughout entire program lifetime.",
            "Unary :: accesses the global version when shadowed by a local."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=8389s"
        },
        {
          "id": 30,
          "title": "Banking Practice Program 💰",
          "timestamp": "02:24:11",
          "timeSeconds": 8651,
          "category": "Functions",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/developing-your-first-program/",
          "primerUrl": "https://cpp-primer.pages.dev/book/061-6.1._function_basics",
          "summary": {
            "en": "A complete interactive ATM banking simulation demonstrating modular helper functions.",
            "fr": "Simulation bancaire interactive complète illustrant l'usage de fonctions modulaires."
          },
          "code": "#include <iostream>\n#include <iomanip>\n\nvoid showBalance(double balance) {\n    std::cout << \"Your balance is: $\" << std::setprecision(2) << std::fixed << balance << std::endl;\n}\n\ndouble deposit(double balance, double amount) {\n    if (amount > 0) {\n        return balance + amount;\n    }\n    std::cout << \"Invalid deposit amount!\" << std::endl;\n    return balance;\n}\n\ndouble withdraw(double balance, double amount) {\n    if (amount > balance) {\n        std::cout << \"Insufficient funds!\" << std::endl;\n        return balance;\n    }\n    return balance - amount;\n}\n\nint main() {\n    double balance = 100.00;\n    showBalance(balance);\n    balance = deposit(balance, 50.00);\n    showBalance(balance);\n    balance = withdraw(balance, 30.00);\n    showBalance(balance);\n    return 0;\n}",
          "output": "Your balance is: $100.00\nYour balance is: $150.00\nYour balance is: $120.00",
          "keyTakeaways": [
            "Modular design: separate functions for display, deposit, and withdraw.",
            "Input validation inside business logic.",
            "std::setprecision(2) and std::fixed formats decimal currency output."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=8651s"
        },
        {
          "id": 31,
          "title": "Rock Paper Scissors Game 👊",
          "timestamp": "02:38:04",
          "timeSeconds": 9484,
          "category": "Functions",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/developing-your-first-program/",
          "primerUrl": "https://cpp-primer.pages.dev/book/061-6.1._function_basics",
          "summary": {
            "en": "Building a playable Rock-Paper-Scissors game with random computer choices and game logic.",
            "fr": "Jeu complet Pierre-Feuille-Ciseaux avec tirage aléatoire de l'ordinateur et comparaison."
          },
          "code": "#include <iostream>\n\nvoid chooseWinner(char player, char computer) {\n    std::cout << \"Player: \" << player << \" vs Computer: \" << computer << std::endl;\n    if (player == computer) {\n        std::cout << \"It's a TIE! 🤝\" << std::endl;\n    } else if ((player == 'r' && computer == 's') ||\n               (player == 'p' && computer == 'r') ||\n               (player == 's' && computer == 'p')) {\n        std::cout << \"You WIN! 🎉\" << std::endl;\n    } else {\n        std::cout << \"You LOSE! 😢\" << std::endl;\n    }\n}\n\nint main() {\n    char player = 'r';   // Rock\n    char computer = 's'; // Scissors (simulated computer roll)\n    chooseWinner(player, computer);\n    return 0;\n}",
          "output": "Player: r vs Computer: s\nYou WIN! 🎉",
          "keyTakeaways": [
            "Modular functions cleanly separate game loop from winner resolution.",
            "Logical combinations evaluate all win conditions cleanly.",
            "Easy to expand with score tracking and rematch loops."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=9484s"
        }
      ]
    },
    {
      "id": "mod-5",
      "source": "brocode",
      "icon": "🚗",
      "title": {
        "en": "Module 5: Arrays & Algorithms (Bro Code 32-42)",
        "fr": "Module 5 : Tableaux & Algorithmes (Bro Code 32-42)"
      },
      "description": {
        "en": "Data collections & search/sort: arrays, sizeof, foreach, linear search, bubble sort, fill, 2D matrices, and quiz game.",
        "fr": "Collections et recherche/tri : tableaux, sizeof, foreach, recherche linéaire, tri à bulles, matrices 2D et jeu de quiz."
      },
      "lessons": [
        {
          "id": 32,
          "title": "Arrays 🚗",
          "timestamp": "02:51:11",
          "timeSeconds": 10271,
          "category": "Arrays",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/arrays-part-i/",
          "primerUrl": "https://cpp-primer.pages.dev/book/032-3.5._arrays",
          "summary": {
            "en": "Storing fixed-size collections of homogeneous data elements in contiguous memory.",
            "fr": "Stockage de collections d'éléments de même type en mémoire contiguë à taille fixe."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string cars[] = {\"Corvette\", \"Mustang\", \"Camry\"};\n\n    // Access elements via zero-based index\n    std::cout << \"First car: \" << cars[0] << std::endl;\n    std::cout << \"Second car: \" << cars[1] << std::endl;\n\n    // Modify in place\n    cars[0] = \"Camaro\";\n    std::cout << \"Updated first car: \" << cars[0] << std::endl;\n    return 0;\n}",
          "output": "First car: Corvette\nSecond car: Mustang\nUpdated first car: Camaro",
          "keyTakeaways": [
            "Arrays store elements in contiguous memory blocks.",
            "Array indexing is strictly 0-indexed: [0] is the first element.",
            "Fixed size: array capacity cannot change after declaration."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=10271s"
        },
        {
          "id": 33,
          "title": "Sizeof() Operator ⚖️",
          "timestamp": "02:56:40",
          "timeSeconds": 10600,
          "category": "Arrays",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/the-sizeof-operator/",
          "primerUrl": "https://cpp-primer.pages.dev/book/046-4.9._sizeof_operator",
          "summary": {
            "en": "Determining memory size in bytes of variables, types, and calculating array lengths.",
            "fr": "Mesure de la taille en octets avec sizeof() et calcul de la longueur d'un tableau."
          },
          "code": "#include <iostream>\n\nint main() {\n    double gpa = 3.9;\n    std::cout << \"Size of double: \" << sizeof(gpa) << \" bytes\" << std::endl;\n\n    char grades[] = {'A', 'B', 'C', 'D', 'F'};\n    // Calculate total elements in array\n    int numElements = sizeof(grades) / sizeof(grades[0]);\n\n    std::cout << \"Total bytes of array: \" << sizeof(grades) << std::endl;\n    std::cout << \"Number of elements: \" << numElements << std::endl;\n    return 0;\n}",
          "output": "Size of double: 8 bytes\nTotal bytes of array: 5\nNumber of elements: 5",
          "keyTakeaways": [
            "sizeof returns the size in bytes allocated in memory.",
            "sizeof(array) / sizeof(array[0]) calculates array element count.",
            "Evaluated at compile time with zero runtime overhead."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=10600s"
        },
        {
          "id": 34,
          "title": "Iterate Over an Array 🗃️",
          "timestamp": "03:01:34",
          "timeSeconds": 10894,
          "category": "Arrays",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/arrays-part-ii/",
          "primerUrl": "https://cpp-primer.pages.dev/book/032-3.5._arrays",
          "summary": {
            "en": "Using standard index-based for loops and sizeof calculation to traverse arrays.",
            "fr": "Parcours séquentiel d'un tableau avec une boucle for indexée et sizeof."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string students[] = {\"Spongebob\", \"Patrick\", \"Squidward\", \"Sandy\"};\n    int size = sizeof(students) / sizeof(students[0]);\n\n    for (int i = 0; i < size; i++) {\n        std::cout << \"Student \" << i + 1 << \": \" << students[i] << std::endl;\n    }\n    return 0;\n}",
          "output": "Student 1: Spongebob\nStudent 2: Patrick\nStudent 3: Squidward\nStudent 4: Sandy",
          "keyTakeaways": [
            "Index loops give access to both element value and its exact index.",
            "Condition must be strictly i < size to avoid off-by-one errors.",
            "Accessing out-of-bounds indices leads to undefined behavior."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=10894s"
        },
        {
          "id": 35,
          "title": "Foreach Loop (Range-based for) 🗂️",
          "timestamp": "03:05:40",
          "timeSeconds": 11140,
          "category": "Arrays",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/range-based-for-loops-for-each/",
          "primerUrl": "https://cpp-primer.pages.dev/book/054-5.4._iterative_statements",
          "summary": {
            "en": "Modern range-based for loops for clean, safe element iteration without index tracking.",
            "fr": "Boucle for-each moderne (range-based) pour itérer sans gestion manuelle d'index."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string grades[] = {\"A\", \"B\", \"C\", \"D\", \"F\"};\n\n    for (const std::string& grade : grades) {\n        std::cout << grade << \" \";\n    }\n    std::cout << std::endl;\n\n    int numbers[] = {10, 20, 30, 40};\n    for (int n : numbers) {\n        std::cout << n * 2 << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}",
          "output": "A B C D F \n20 40 60 80 ",
          "keyTakeaways": [
            "for (auto element : collection) eliminates index bookkeeping.",
            "Use const auto& to prevent unnecessary deep copies of elements.",
            "Cannot easily access current index or step backwards."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=11140s"
        },
        {
          "id": 36,
          "title": "Pass Array to a Function 💵",
          "timestamp": "03:08:36",
          "timeSeconds": 11316,
          "category": "Arrays",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/pointers-and-arrays/",
          "primerUrl": "https://cpp-primer.pages.dev/book/062-6.2._argument_passing",
          "summary": {
            "en": "Array decay into pointers when passed to functions, and why passing size is required.",
            "fr": "Dégénérescence des tableaux en pointeurs lors du passage en fonction et nécessité de la taille."
          },
          "code": "#include <iostream>\n\n// Array parameter decays to pointer (double* prices)\ndouble getTotal(const double prices[], int size) {\n    double total = 0;\n    for (int i = 0; i < size; i++) {\n        total += prices[i];\n    }\n    return total;\n}\n\nint main() {\n    double prices[] = {49.99, 15.05, 75.00, 9.99};\n    int size = sizeof(prices) / sizeof(prices[0]);\n\n    double total = getTotal(prices, size);\n    std::cout << \"Total Price: $\" << total << std::endl;\n    return 0;\n}",
          "output": "Total Price: $150.03",
          "keyTakeaways": [
            "Arrays decay into a pointer to the first element when passed to a function.",
            "sizeof(prices) inside the function returns pointer size (8 bytes), NOT array size.",
            "Always pass the array length as a separate integer parameter."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=11316s"
        },
        {
          "id": 37,
          "title": "Search an Array (Linear Search) 🔎",
          "timestamp": "03:13:07",
          "timeSeconds": 11587,
          "category": "Arrays",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/arrays-part-ii/",
          "primerUrl": "https://cpp-primer.pages.dev/book/032-3.5._arrays",
          "summary": {
            "en": "Finding whether a target element exists in an array and returning its index.",
            "fr": "Recherche linéaire d'un élément dans un tableau et retour de sa position."
          },
          "code": "#include <iostream>\n\nint searchArray(const int array[], int size, int element) {\n    for (int i = 0; i < size; i++) {\n        if (array[i] == element) {\n            return i; // Found! Return index\n        }\n    }\n    return -1; // Sentinel value meaning not found\n}\n\nint main() {\n    int numbers[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n    int myNum = 7;\n\n    int index = searchArray(numbers, size, myNum);\n    if (index != -1) {\n        std::cout << \"Element \" << myNum << \" found at index: \" << index << std::endl;\n    } else {\n        std::cout << \"Element not found in array.\" << std::endl;\n    }\n    return 0;\n}",
          "output": "Element 7 found at index: 6",
          "keyTakeaways": [
            "Linear search checks each element one by one from left to right (O(N)).",
            "Returns the matching index immediately upon finding.",
            "-1 is conventionally used as a sentinel value indicating 'not found'."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=11587s"
        },
        {
          "id": 38,
          "title": "Sort an Array (Bubble Sort) ➡️",
          "timestamp": "03:20:43",
          "timeSeconds": 12043,
          "category": "Arrays",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/sorting-an-array-using-selection-sort/",
          "primerUrl": "https://cpp-primer.pages.dev/book/189-a.2._a_brief_tour_of_the_algorithms",
          "summary": {
            "en": "Sorting array elements in ascending order using the classic Bubble Sort algorithm.",
            "fr": "Tri d'un tableau par ordre croissant avec l'algorithme du tri à bulles (Bubble Sort)."
          },
          "code": "#include <iostream>\n\nvoid bubbleSort(int array[], int size) {\n    for (int i = 0; i < size - 1; i++) {\n        for (int j = 0; j < size - i - 1; j++) {\n            if (array[j] > array[j + 1]) {\n                int temp = array[j];\n                array[j] = array[j + 1];\n                array[j + 1] = temp;\n            }\n        }\n    }\n}\n\nint main() {\n    int numbers[] = {10, 1, 9, 2, 8, 3, 7, 4, 6, 5};\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n\n    bubbleSort(numbers, size);\n\n    std::cout << \"Sorted array: \";\n    for (int i = 0; i < size; i++) std::cout << numbers[i] << \" \";\n    std::cout << std::endl;\n    return 0;\n}",
          "output": "Sorted array: 1 2 3 4 5 6 7 8 9 10 ",
          "keyTakeaways": [
            "Bubble sort repeatedly compares adjacent pairs and swaps them if out of order.",
            "Heaviest values 'bubble' to the end of the array each pass.",
            "Time complexity is O(N^2); great for conceptual learning of sorting."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=12043s"
        },
        {
          "id": 39,
          "title": "Fill() Function 🍔",
          "timestamp": "03:26:37",
          "timeSeconds": 12397,
          "category": "Arrays",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-standard-library-algorithms/",
          "primerUrl": "https://cpp-primer.pages.dev/book/189-a.2._a_brief_tour_of_the_algorithms",
          "summary": {
            "en": "Filling a range of memory or array elements with a default value using std::fill.",
            "fr": "Remplissage d'une plage d'éléments d'un tableau avec std::fill."
          },
          "code": "#include <iostream>\n#include <algorithm>\n#include <string>\n\nint main() {\n    const int SIZE = 10;\n    std::string foods[SIZE];\n\n    // Fill first half with \"pizza\", second half with \"burger\"\n    std::fill(foods, foods + (SIZE / 2), \"pizza\");\n    std::fill(foods + (SIZE / 2), foods + SIZE, \"burger\");\n\n    for (const auto& food : foods) {\n        std::cout << food << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}",
          "output": "pizza pizza pizza pizza pizza burger burger burger burger burger ",
          "keyTakeaways": [
            "std::fill(begin, end, value) assigns value to all elements in range [begin, end).",
            "Available via #include <algorithm>.",
            "Faster and less error-prone than manual filling loops."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=12397s"
        },
        {
          "id": 40,
          "title": "Fill an Array with User Input 🌭",
          "timestamp": "03:31:19",
          "timeSeconds": 12679,
          "category": "Arrays",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/arrays-part-i/",
          "primerUrl": "https://cpp-primer.pages.dev/book/032-3.5._arrays",
          "summary": {
            "en": "Dynamically populating array elements from user input until full or early exit.",
            "fr": "Remplissage progressif d'un tableau via saisie utilisateur avec condition d'arrêt."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string foods[5];\n    int size = sizeof(foods) / sizeof(foods[0]);\n\n    // Simulated user inputs (in terminal: std::getline(std::cin, input))\n    foods[0] = \"Tacos\";\n    foods[1] = \"Burritos\";\n    foods[2] = \"Sushi\";\n    int enteredCount = 3;\n\n    std::cout << \"Your favorite foods list:\" << std::endl;\n    for (int i = 0; i < enteredCount; i++) {\n        std::cout << (i + 1) << \". \" << foods[i] << std::endl;\n    }\n    return 0;\n}",
          "output": "Your favorite foods list:\n1. Tacos\n2. Burritos\n3. Sushi",
          "keyTakeaways": [
            "Tracks both max capacity and currently stored count.",
            "Enables early break when user enters sentinel like 'q' to quit.",
            "Handles partial array utilization safely."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=12679s"
        },
        {
          "id": 41,
          "title": "Multidimensional Arrays (2D Matrices) ⬜",
          "timestamp": "03:38:17",
          "timeSeconds": 13097,
          "category": "Arrays",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/multidimensional-arrays/",
          "primerUrl": "https://cpp-primer.pages.dev/book/033-3.6._multidimensional_arrays",
          "summary": {
            "en": "Working with grids, matrices, and tables using row/column indexed 2D arrays: array[rows][cols].",
            "fr": "Manipulation de matrices et grilles avec tableaux à deux dimensions : tab[lignes][colonnes]."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string cars[][3] = {\n        {\"Mustang\", \"Escape\", \"F-150\"},\n        {\"Corvette\", \"Equinox\", \"Silverado\"},\n        {\"Challenger\", \"Durango\", \"Ram 1500\"}\n    };\n\n    int rows = sizeof(cars) / sizeof(cars[0]);\n    int cols = sizeof(cars[0]) / sizeof(cars[0][0]);\n\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < cols; j++) {\n            std::cout << cars[i][j] << \" | \";\n        }\n        std::cout << std::endl;\n    }\n    return 0;\n}",
          "output": "Mustang | Escape | F-150 | \nCorvette | Equinox | Silverado | \nChallenger | Durango | Ram 1500 | ",
          "keyTakeaways": [
            "2D array declared as type name[rows][columns].",
            "Rows must have explicit column dimensions in declarations.",
            "Nested loops match outer row index (i) and inner col index (j)."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=13097s"
        },
        {
          "id": 42,
          "title": "Quiz Game Practice Program 💯",
          "timestamp": "03:45:57",
          "timeSeconds": 13557,
          "category": "Arrays",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/developing-your-first-program/",
          "primerUrl": "https://cpp-primer.pages.dev/book/032-3.5._arrays",
          "summary": {
            "en": "Combining 1D question arrays, 2D option matrices, and loops into a complete interactive quiz game.",
            "fr": "Programme complet de quiz combinant tableaux 1D, matrices 2D d'options et calcul de score."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string questions[] = {\n        \"1. What year was C++ created?: \",\n        \"2. Who invented C++?: \"\n    };\n\n    std::string options[][4] = {\n        {\"A. 1969\", \"B. 1975\", \"C. 1985\", \"D. 1989\"},\n        {\"A. Guido van Rossum\", \"B. Bjarne Stroustrup\", \"C. Dennis Ritchie\", \"D. Ken Thompson\"}\n    };\n\n    char answerKey[] = {'C', 'B'};\n    int size = sizeof(questions) / sizeof(questions[0]);\n    char simulatedAnswers[] = {'C', 'B'};\n    int score = 0;\n\n    for (int i = 0; i < size; i++) {\n        std::cout << questions[i] << std::endl;\n        for (int j = 0; j < 4; j++) std::cout << options[i][j] << \"\n\";\n        char guess = simulatedAnswers[i];\n        std::cout << \"Answer: \" << guess << \" -> \";\n        if (guess == answerKey[i]) {\n            std::cout << \"CORRECT! ✅\n\" << std::endl;\n            score++;\n        } else {\n            std::cout << \"WRONG! ❌ Correct was \" << answerKey[i] << \"\n\" << std::endl;\n        }\n    }\n    std::cout << \"Final Score: \" << (score / (double)size) * 100 << \"%\" << std::endl;\n    return 0;\n}",
          "output": "1. What year was C++ created?: \nA. 1969\nB. 1975\nC. 1985\nD. 1989\nAnswer: C -> CORRECT! ✅\n\n2. Who invented C++?: \nA. Guido van Rossum\nB. Bjarne Stroustrup\nC. Dennis Ritchie\nD. Ken Thompson\nAnswer: B -> CORRECT! ✅\n\nFinal Score: 100%",
          "keyTakeaways": [
            "Demonstrates multi-array synchronization using a shared loop index.",
            "1D arrays for questions and answer keys; 2D array for multi-choice options.",
            "Calculates final percentage score."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=13557s"
        }
      ]
    },
    {
      "id": "mod-6",
      "source": "brocode",
      "icon": "🏠",
      "title": {
        "en": "Module 6: Memory, References & Pointers (Bro Code 43-50)",
        "fr": "Module 6 : Mémoire, Références & Pointeurs (Bro Code 43-50)"
      },
      "description": {
        "en": "Deep dive into memory: addresses (&), pass by reference, const params, pointers (*), nullptr, tic-tac-toe, and dynamic memory (new/delete).",
        "fr": "Gestion mémoire approfondie : adresses, passage par référence, pointeurs, nullptr, morpion et mémoire dynamique (new/delete)."
      },
      "lessons": [
        {
          "id": 43,
          "title": "Memory Addresses (& Operator) 🏠",
          "timestamp": "03:57:42",
          "timeSeconds": 14262,
          "category": "Memory",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/",
          "primerUrl": "https://cpp-primer.pages.dev/book/023-2.3._compound_types",
          "summary": {
            "en": "Locating variable storage positions in RAM using the address-of operator (&).",
            "fr": "Localisation de la position en mémoire RAM d'une variable avec l'opérateur d'adresse (&)."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string name = \"Bro\";\n    int age = 21;\n    bool student = true;\n\n    std::cout << \"Address of name:    \" << &name << std::endl;\n    std::cout << \"Address of age:     \" << &age << std::endl;\n    std::cout << \"Address of student: \" << &student << std::endl;\n    return 0;\n}",
          "output": "Address of name:    0x7ffd9b8f2a10\nAddress of age:     0x7ffd9b8f2a0c\nAddress of student: 0x7ffd9b8f2a0b",
          "keyTakeaways": [
            "&variable returns the hexadecimal memory address where the value is stored.",
            "Different data types occupy different numbers of contiguous bytes.",
            "Understanding memory addresses is foundational for pointers and references."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=14262s"
        },
        {
          "id": 44,
          "title": "Pass by VALUE vs Pass by REFERENCE 📧",
          "timestamp": "04:00:31",
          "timeSeconds": 14431,
          "category": "Memory",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/pass-by-lvalue-reference/",
          "primerUrl": "https://cpp-primer.pages.dev/book/062-6.2._argument_passing",
          "summary": {
            "en": "Passing copies (by value) versus passing aliases to original memory (& by reference).",
            "fr": "Passage par valeur (copie) versus passage par référence (& alias direct de la mémoire)."
          },
          "code": "#include <iostream>\n#include <string>\n\n// Pass by value (copies string, swap won't affect originals)\nvoid swapByValue(std::string x, std::string y) {\n    std::string temp = x;\n    x = y;\n    y = temp;\n}\n\n// Pass by reference (aliases original memory, swaps real variables)\nvoid swapByRef(std::string& x, std::string& y) {\n    std::string temp = x;\n    x = y;\n    y = temp;\n}\n\nint main() {\n    std::string x = \"Kool-Aid\";\n    std::string y = \"Water\";\n\n    swapByValue(x, y);\n    std::cout << \"After swapByValue: x=\" << x << \", y=\" << y << std::endl;\n\n    swapByRef(x, y);\n    std::cout << \"After swapByRef:   x=\" << x << \", y=\" << y << std::endl;\n    return 0;\n}",
          "output": "After swapByValue: x=Kool-Aid, y=Water\nAfter swapByRef:   x=Water, y=Kool-Aid",
          "keyTakeaways": [
            "Pass by value creates a duplicate copy, preserving the original.",
            "Pass by reference (Type&) directly manipulates the caller's variable.",
            "Pass by reference avoids expensive copies of large strings and objects."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=14431s"
        },
        {
          "id": 45,
          "title": "Const Parameters 🧱",
          "timestamp": "04:04:47",
          "timeSeconds": 14687,
          "category": "Memory",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/pass-by-const-lvalue-reference/",
          "primerUrl": "https://cpp-primer.pages.dev/book/062-6.2._argument_passing",
          "summary": {
            "en": "Combining pass-by-reference performance with read-only safety using const Type&.",
            "fr": "Combinaison de la performance de la référence et de la sécurité lecture seule via const Type&."
          },
          "code": "#include <iostream>\n#include <string>\n\n// Fast zero-copy read-only access\nvoid printInfo(const std::string& name, const int& age) {\n    // name = \"New Name\"; // Compiler error! Protected from modifications\n    std::cout << \"Name: \" << name << \", Age: \" << age << std::endl;\n}\n\nint main() {\n    std::string name = \"Bro\";\n    int age = 21;\n    printInfo(name, age);\n    return 0;\n}",
          "output": "Name: Bro, Age: 21",
          "keyTakeaways": [
            "const Type& is the golden rule for passing non-primitive arguments in C++.",
            "Prevents expensive object copying while guaranteeing the function cannot mutate data.",
            "Catches accidental modification bugs at compile time."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=14687s"
        },
        {
          "id": 46,
          "title": "Credit Card Validator Program 💳",
          "timestamp": "04:07:54",
          "timeSeconds": 14874,
          "category": "Memory",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/developing-your-first-program/",
          "primerUrl": "https://cpp-primer.pages.dev/book/061-6.1._function_basics",
          "summary": {
            "en": "Implementing the Luhn algorithm to check valid payment card checksums.",
            "fr": "Implémentation de l'algorithme de Luhn pour valider les numéros de cartes de crédit."
          },
          "code": "#include <iostream>\n#include <string>\n\nint getDigit(const int number) {\n    // Splits double digits (e.g. 18 -> 1 + 8 = 9)\n    return number % 10 + (number / 10 % 10);\n}\n\nint sumOddDigits(const std::string& cardNumber) {\n    int sum = 0;\n    for (int i = cardNumber.size() - 1; i >= 0; i -= 2) {\n        sum += cardNumber[i] - '0';\n    }\n    return sum;\n}\n\nint sumEvenDigits(const std::string& cardNumber) {\n    int sum = 0;\n    for (int i = cardNumber.size() - 2; i >= 0; i -= 2) {\n        sum += getDigit((cardNumber[i] - '0') * 2);\n    }\n    return sum;\n}\n\nint main() {\n    std::string cardNumber = \"6011000990139424\";\n    int total = sumEvenDigits(cardNumber) + sumOddDigits(cardNumber);\n\n    if (total % 10 == 0) {\n        std::cout << cardNumber << \" is VALID! ✅\" << std::endl;\n    } else {\n        std::cout << cardNumber << \" is INVALID! ❌\" << std::endl;\n    }\n    return 0;\n}",
          "output": "6011000990139424 is VALID! ✅",
          "keyTakeaways": [
            "Translates algorithmic specifications (Luhn Checksum) into modular functions.",
            "char - '0' converts ASCII digits to their integer numeric value.",
            "Traverses strings backwards using step decrement (i -= 2)."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=14874s"
        },
        {
          "id": 47,
          "title": "Pointers (*) 👈",
          "timestamp": "04:17:56",
          "timeSeconds": 15476,
          "category": "Memory",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-pointers/",
          "primerUrl": "https://cpp-primer.pages.dev/book/023-2.3._compound_types",
          "summary": {
            "en": "Variables that store memory addresses of another variable, and dereferencing them (*).",
            "fr": "Variables qui stockent l'adresse mémoire d'une autre variable et déréférencement (*)."
          },
          "code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string name = \"Bro\";\n    int age = 21;\n\n    // Pointer declaration\n    std::string* pName = &name;\n    int* pAge = &age;\n\n    std::cout << \"pName stores address: \" << pName << std::endl;\n    std::cout << \"Dereferencing *pName: \" << *pName << std::endl;\n\n    // Modifying value via pointer\n    *pAge = 22;\n    std::cout << \"Updated age: \" << age << std::endl;\n    return 0;\n}",
          "output": "pName stores address: 0x7ffd9b8f2a10\nDereferencing *pName: Bro\nUpdated age: 22",
          "keyTakeaways": [
            "A pointer is a variable holding another variable's memory address.",
            "Type* ptr declares a pointer; &var obtains an address.",
            "*ptr dereferences the pointer to read or write the underlying value."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=15476s"
        },
        {
          "id": 48,
          "title": "Null Pointers (nullptr) ⛔",
          "timestamp": "04:23:12",
          "timeSeconds": 15792,
          "category": "Memory",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/null-pointers/",
          "primerUrl": "https://cpp-primer.pages.dev/book/023-2.3._compound_types",
          "summary": {
            "en": "Safe pointer initialization with nullptr and checking validity before dereferencing.",
            "fr": "Initialisation sécurisée des pointeurs avec nullptr et vérification avant déréférencement."
          },
          "code": "#include <iostream>\n\nint main() {\n    int* pointer = nullptr; // Explicitly null\n    int x = 123;\n\n    if (pointer == nullptr) {\n        std::cout << \"Pointer is currently null and safe.\" << std::endl;\n    }\n\n    pointer = &x; // Assign valid address\n\n    if (pointer != nullptr) {\n        std::cout << \"Pointer is valid! Value: \" << *pointer << std::endl;\n    }\n    return 0;\n}",
          "output": "Pointer is currently null and safe.\nPointer is valid! Value: 123",
          "keyTakeaways": [
            "Always initialize pointers to nullptr if not immediately assigned an address.",
            "Dereferencing a nullptr causes an instant crash / segmentation fault.",
            "Never use NULL or 0 in modern C++; always use nullptr."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=15792s"
        },
        {
          "id": 49,
          "title": "Tic-Tac-Toe Game Practice ⭕",
          "timestamp": "04:27:17",
          "timeSeconds": 16037,
          "category": "Memory",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/developing-your-first-program/",
          "primerUrl": "https://cpp-primer.pages.dev/book/032-3.5._arrays",
          "summary": {
            "en": "Building a classic 2-player grid game checking rows, columns, and diagonals for a winner.",
            "fr": "Jeu du Morpion (Tic-Tac-Toe) vérifiant les lignes, colonnes et diagonales gagnantes."
          },
          "code": "#include <iostream>\n\nvoid drawBoard(char spaces[]) {\n    std::cout << \" \" << spaces[0] << \" | \" << spaces[1] << \" | \" << spaces[2] << \" \" << std::endl;\n    std::cout << \"---|---|---\" << std::endl;\n    std::cout << \" \" << spaces[3] << \" | \" << spaces[4] << \" | \" << spaces[5] << \" \" << std::endl;\n    std::cout << \"---|---|---\" << std::endl;\n    std::cout << \" \" << spaces[6] << \" | \" << spaces[7] << \" | \" << spaces[8] << \" \" << std::endl;\n}\n\nbool checkWinner(char s[], char p) {\n    // Check rows, columns and diagonals\n    return ((s[0]==p && s[1]==p && s[2]==p) || (s[3]==p && s[4]==p && s[5]==p) || (s[6]==p && s[7]==p && s[8]==p) ||\n            (s[0]==p && s[3]==p && s[6]==p) || (s[1]==p && s[4]==p && s[7]==p) || (s[2]==p && s[5]==p && s[8]==p) ||\n            (s[0]==p && s[4]==p && s[8]==p) || (s[2]==p && s[4]==p && s[6]==p));\n}\n\nint main() {\n    char spaces[9] = {'X', 'O', 'X', 'O', 'X', ' ', ' ', ' ', 'X'};\n    drawBoard(spaces);\n    if (checkWinner(spaces, 'X')) {\n        std::cout << \"Player X has WON the game! 🎉\" << std::endl;\n    }\n    return 0;\n}",
          "output": " X | O | X \n---|---|---\n O | X |   \n---|---|---\n   |   | X \nPlayer X has WON the game! 🎉",
          "keyTakeaways": [
            "Uses a 1D array of 9 slots to represent a 3x3 board.",
            "Checks 8 possible winning line configurations cleanly.",
            "Practical synthesis of arrays, functions, and boolean logic."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=16037s"
        },
        {
          "id": 50,
          "title": "Dynamic Memory (new & delete) 🧠",
          "timestamp": "04:46:26",
          "timeSeconds": 17186,
          "category": "Memory",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/dynamic-memory-allocation-with-new-and-delete/",
          "primerUrl": "https://cpp-primer.pages.dev/book/121-12.1._dynamic_memory_and_smart_pointers",
          "summary": {
            "en": "Allocating memory at runtime on the heap with 'new' and releasing it with 'delete'.",
            "fr": "Allocation de mémoire dynamique sur le tas (heap) avec 'new' et libération avec 'delete'."
          },
          "code": "#include <iostream>\n\nint main() {\n    // Allocate single integer on heap\n    int* pNum = new int;\n    *pNum = 21;\n    std::cout << \"Dynamically allocated value: \" << *pNum << std::endl;\n    delete pNum; // Free memory to prevent memory leaks!\n    pNum = nullptr;\n\n    // Dynamically sized array on heap\n    int size = 3;\n    char* pGrades = new char[size];\n    pGrades[0] = 'A';\n    pGrades[1] = 'B';\n    pGrades[2] = 'C';\n\n    std::cout << \"First grade: \" << pGrades[0] << std::endl;\n    delete[] pGrades; // Free array memory\n    pGrades = nullptr;\n    return 0;\n}",
          "output": "Dynamically allocated value: 21\nFirst grade: A",
          "keyTakeaways": [
            "The 'new' operator allocates memory on the heap at runtime.",
            "Every 'new' must have a matching 'delete'; every 'new[]' must have 'delete[]'.",
            "Failing to delete heap memory causes memory leaks."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=17186s"
        }
      ]
    },
    {
      "id": "mod-7",
      "source": "brocode",
      "icon": "🏗️",
      "title": {
        "en": "Module 7: Advanced Functions, Structs & Enums (Bro Code 51-55)",
        "fr": "Module 7 : Fonctions Avancées, Structures & Énums (Bro Code 51-55)"
      },
      "description": {
        "en": "Advanced constructs: recursion, function templates (generics), custom structs, passing structs, and enums.",
        "fr": "Structures avancées : récursivité, patrons de fonctions (templates), structures, passage de structs et énumérations."
      },
      "lessons": [
        {
          "id": 51,
          "title": "Recursion 😵",
          "timestamp": "04:52:15",
          "timeSeconds": 17535,
          "category": "Functions",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/recursion/",
          "primerUrl": "https://cpp-primer.pages.dev/book/063-6.3._return_types_and_the_return_statement",
          "summary": {
            "en": "Functions that invoke themselves to solve problems with base cases (e.g. Factorial, Walk).",
            "fr": "Fonctions récursives s'appelant elles-mêmes avec condition d'arrêt (cas de base)."
          },
          "code": "#include <iostream>\n\n// Recursive factorial function\nint factorial(int num) {\n    if (num <= 1) { // Base case\n        return 1;\n    }\n    return num * factorial(num - 1); // Recursive case\n}\n\nint main() {\n    std::cout << \"5! (Factorial 5): \" << factorial(5) << std::endl;\n    std::cout << \"3! (Factorial 3): \" << factorial(3) << std::endl;\n    return 0;\n}",
          "output": "5! (Factorial 5): 120\n3! (Factorial 3): 6",
          "keyTakeaways": [
            "Recursion requires a base case to stop execution, otherwise stack overflow occurs.",
            "Each recursive call adds a stack frame to memory.",
            "Naturally models trees, sorting algorithms, and mathematical progressions."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=17535s"
        },
        {
          "id": 52,
          "title": "Function Templates (Generics) 🍪",
          "timestamp": "04:58:35",
          "timeSeconds": 17915,
          "category": "Functions",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/function-templates/",
          "primerUrl": "https://cpp-primer.pages.dev/book/161-16.1._template_definitions",
          "summary": {
            "en": "Writing generic functions that operate on any data type using template <typename T>.",
            "fr": "Création de fonctions génériques fonctionnant avec n'importe quel type via template <typename T>."
          },
          "code": "#include <iostream>\n\ntemplate <typename T, typename U>\nauto myMax(T x, U y) {\n    return (x > y) ? x : y;\n}\n\nint main() {\n    std::cout << \"Max ints (1, 2): \" << myMax(1, 2) << std::endl;\n    std::cout << \"Max doubles (1.5, 2.7): \" << myMax(1.5, 2.7) << std::endl;\n    std::cout << \"Max mixed (5, 9.9): \" << myMax(5, 9.9) << std::endl;\n    return 0;\n}",
          "output": "Max ints (1, 2): 2\nMax doubles (1.5, 2.7): 2.7\nMax mixed (5, 9.9): 9.9",
          "keyTakeaways": [
            "Templates eliminate writing duplicate code for different data types.",
            "The compiler generates concrete versions of the function during compilation.",
            "Multiple type parameters (T, U) handle operations between mixed types."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=17915s"
        },
        {
          "id": 53,
          "title": "Structs (Custom Data Structures) 🏗️",
          "timestamp": "05:03:49",
          "timeSeconds": 18229,
          "category": "OOP",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/structs/",
          "primerUrl": "https://cpp-primer.pages.dev/book/026-2.6._defining_our_own_data_structures",
          "summary": {
            "en": "Grouping related variables of different types under one name (public by default).",
            "fr": "Regroupement de variables hétérogènes sous un même nom avec struct (membres publics)."
          },
          "code": "#include <iostream>\n#include <string>\n\nstruct Student {\n    std::string name;\n    double gpa;\n    bool enrolled = true; // Default member value\n};\n\nint main() {\n    Student s1;\n    s1.name = \"Spongebob\";\n    s1.gpa = 3.2;\n\n    Student s2;\n    s2.name = \"Patrick\";\n    s2.gpa = 1.5;\n\n    std::cout << s1.name << \" | GPA: \" << s1.gpa << \" | Enrolled: \" << s1.enrolled << std::endl;\n    std::cout << s2.name << \" | GPA: \" << s2.gpa << \" | Enrolled: \" << s2.enrolled << std::endl;\n    return 0;\n}",
          "output": "Spongebob | GPA: 3.2 | Enrolled: 1\nPatrick | GPA: 1.5 | Enrolled: 1",
          "keyTakeaways": [
            "structs group heterogeneous variables into a cohesive user-defined type.",
            "Members are accessed using the dot operator (s1.name).",
            "Members are public by default in C++ structs."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=18229s"
        },
        {
          "id": 54,
          "title": "Pass Structs as Arguments 🚚",
          "timestamp": "05:08:49",
          "timeSeconds": 18529,
          "category": "OOP",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/passing-structs-by-reference-and-const-reference/",
          "primerUrl": "https://cpp-primer.pages.dev/book/062-6.2._argument_passing",
          "summary": {
            "en": "Passing structs into functions by value vs by const reference for optimal performance.",
            "fr": "Passage de structures en paramètres de fonctions par valeur vs par const reference."
          },
          "code": "#include <iostream>\n#include <string>\n\nstruct Car {\n    std::string model;\n    int year;\n    std::string color;\n};\n\n// Pass by const reference (efficient zero-copy read)\nvoid printCar(const Car& car) {\n    std::cout << car.year << \" \" << car.color << \" \" << car.model << std::endl;\n}\n\n// Pass by reference (mutates original)\nvoid paintCar(Car& car, const std::string& newColor) {\n    car.color = newColor;\n}\n\nint main() {\n    Car car1 = {\"Mustang\", 2023, \"Red\"};\n    printCar(car1);\n    paintCar(car1, \"Silver\");\n    printCar(car1);\n    return 0;\n}",
          "output": "2023 Red Mustang\n2023 Silver Mustang",
          "keyTakeaways": [
            "Pass structs as const StructType& to avoid copying overhead.",
            "Use StructType& when you want the function to modify the caller's struct.",
            "Clean separation of display logic from data manipulation."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=18529s"
        },
        {
          "id": 55,
          "title": "Enums (Enumerated Types) 📅",
          "timestamp": "05:14:17",
          "timeSeconds": 18857,
          "category": "Basics",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/scoped-enumerations-enum-classes/",
          "primerUrl": "https://cpp-primer.pages.dev/book/191-index",
          "summary": {
            "en": "Defining custom types with a restricted set of named integer constants for code clarity.",
            "fr": "Définition de types énumérés avec des constantes nommées claires pour la lisibilité."
          },
          "code": "#include <iostream>\n\nenum Day { sunday = 0, monday = 1, tuesday = 2, wednesday = 3, thursday = 4, friday = 5, saturday = 6 };\n\nint main() {\n    Day today = friday;\n\n    switch (today) {\n        case sunday:\n        case saturday:\n            std::cout << \"It's the weekend! 🎉\" << std::endl;\n            break;\n        case friday:\n            std::cout << \"TGIF! Weekend is coming! 🍻\" << std::endl;\n            break;\n        default:\n            std::cout << \"Work day! 💼\" << std::endl;\n            break;\n    }\n    return 0;\n}",
          "output": "TGIF! Weekend is coming! 🍻",
          "keyTakeaways": [
            "enums improve code readability by replacing magic numbers with named values.",
            "Under the hood, enum items are represented as integers starting from 0.",
            "Pairs naturally with switch statements."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=18857s"
        }
      ]
    },
    {
      "id": "mod-8",
      "source": "brocode",
      "icon": "🧍",
      "title": {
        "en": "Module 8: Object-Oriented Programming (Bro Code 56-60)",
        "fr": "Module 8 : Programmation Orientée Objet (Bro Code 56-60)"
      },
      "description": {
        "en": "OOP fundamentals: classes & objects, constructors, constructor overloading, getters/setters (encapsulation), and inheritance.",
        "fr": "Fondamentaux de la POO : classes, constructeurs, surcharge de constructeurs, getters/setters (encapsulation) et héritage."
      },
      "lessons": [
        {
          "id": 56,
          "title": "Object-Oriented Programming (Classes & Objects) 🧍",
          "timestamp": "05:18:38",
          "timeSeconds": 19118,
          "category": "OOP",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-object-oriented-programming/",
          "primerUrl": "https://cpp-primer.pages.dev/book/071-7.1._defining_abstract_data_types",
          "summary": {
            "en": "Classes as blueprints: attributes (variables) and methods (functions), public vs private.",
            "fr": "Classes comme modèles d'objets : attributs (données) et méthodes (actions), public vs private."
          },
          "code": "#include <iostream>\n#include <string>\n\nclass Human {\npublic:\n    std::string name;\n    std::string occupation;\n    int age;\n\n    void eat() {\n        std::cout << name << \" is eating delicious food. 🍕\" << std::endl;\n    }\n\n    void drink() {\n        std::cout << name << \" is drinking coffee. ☕\" << std::endl;\n    }\n};\n\nint main() {\n    Human human1;\n    human1.name = \"Rick\";\n    human1.occupation = \"Scientist\";\n    human1.age = 70;\n\n    std::cout << human1.name << \" (\" << human1.occupation << \", \" << human1.age << \")\" << std::endl;\n    human1.eat();\n    human1.drink();\n    return 0;\n}",
          "output": "Rick (Scientist, 70)\nRick is eating delicious food. 🍕\nRick is drinking coffee. ☕",
          "keyTakeaways": [
            "An object is an instantiation of a class blueprint.",
            "Classes encapsulate both data (attributes) and behavior (methods).",
            "Class members are private by default; use 'public:' for external access."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=19118s"
        },
        {
          "id": 57,
          "title": "Constructors 👷",
          "timestamp": "05:29:32",
          "timeSeconds": 19772,
          "category": "OOP",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-constructors/",
          "primerUrl": "https://cpp-primer.pages.dev/book/071-7.1._defining_abstract_data_types",
          "summary": {
            "en": "Special member functions invoked automatically when an object is instantiated to initialize values.",
            "fr": "Fonctions membres spéciales exécutées à l'instanciation pour initialiser l'objet."
          },
          "code": "#include <iostream>\n#include <string>\n\nclass Student {\npublic:\n    std::string name;\n    int age;\n    double gpa;\n\n    // Constructor with member initialization list\n    Student(std::string name, int age, double gpa) {\n        this->name = name;\n        this->age = age;\n        this->gpa = gpa;\n    }\n\n    void printStudent() {\n        std::cout << name << \", Age: \" << age << \", GPA: \" << gpa << std::endl;\n    }\n};\n\nint main() {\n    Student s1(\"Spongebob\", 25, 3.2);\n    Student s2(\"Patrick\", 26, 1.5);\n\n    s1.printStudent();\n    s2.printStudent();\n    return 0;\n}",
          "output": "Spongebob, Age: 25, GPA: 3.2\nPatrick, Age: 26, GPA: 1.5",
          "keyTakeaways": [
            "Constructors share the exact name of the class and have NO return type.",
            "Guarantees objects start in a valid, initialized state.",
            "The 'this' pointer references the current instance."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=19772s"
        },
        {
          "id": 58,
          "title": "Constructor Overloading 👨‍🍳",
          "timestamp": "05:38:26",
          "timeSeconds": 20306,
          "category": "OOP",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-constructors/",
          "primerUrl": "https://cpp-primer.pages.dev/book/071-7.1._defining_abstract_data_types",
          "summary": {
            "en": "Defining multiple constructors with different parameter signatures for flexible object creation.",
            "fr": "Définition de plusieurs constructeurs pour créer des objets avec différentes configurations."
          },
          "code": "#include <iostream>\n#include <string>\n\nclass Pizza {\npublic:\n    std::string topping1;\n    std::string topping2;\n\n    Pizza() { // Default constructor\n        topping1 = \"Cheese\";\n    }\n\n    Pizza(std::string t1) { // 1-topping constructor\n        topping1 = t1;\n    }\n\n    Pizza(std::string t1, std::string t2) { // 2-toppings constructor\n        topping1 = t1;\n        topping2 = t2;\n    }\n};\n\nint main() {\n    Pizza p1;\n    Pizza p2(\"Pepperoni\");\n    Pizza p3(\"Mushrooms\", \"Peppers\");\n\n    std::cout << \"Pizza 1: \" << p1.topping1 << std::endl;\n    std::cout << \"Pizza 2: \" << p2.topping1 << std::endl;\n    std::cout << \"Pizza 3: \" << p3.topping1 << \" and \" << p3.topping2 << std::endl;\n    return 0;\n}",
          "output": "Pizza 1: Cheese\nPizza 2: Pepperoni\nPizza 3: Mushrooms and Peppers",
          "keyTakeaways": [
            "Enables creating objects with different default or custom properties.",
            "Overload resolution matches argument types at compile time.",
            "Always provide a default (no-args) constructor when defining custom constructors."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=20306s"
        },
        {
          "id": 59,
          "title": "Getters & Setters (Encapsulation) 🔒",
          "timestamp": "05:42:51",
          "timeSeconds": 20571,
          "category": "OOP",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/public-and-private-members-and-access-specifiers/",
          "primerUrl": "https://cpp-primer.pages.dev/book/072-7.2._access_control_and_encapsulation",
          "summary": {
            "en": "Encapsulation: protecting internal data with private access and exposing controlled getters/setters.",
            "fr": "Encapsulation : protection des données privées avec accesseurs (getters) et mutateurs (setters)."
          },
          "code": "#include <iostream>\n\nclass Stove {\nprivate:\n    int temperature = 0; // Hidden from direct external modification\n\npublic:\n    int getTemperature() const { // Getter (read-only)\n        return temperature;\n    }\n\n    void setTemperature(int temp) { // Setter with validation\n        if (temp < 0) {\n            this->temperature = 0;\n        } else if (temp >= 500) {\n            this->temperature = 500;\n        } else {\n            this->temperature = temp;\n        }\n    }\n};\n\nint main() {\n    Stove stove;\n    stove.setTemperature(1000); // Exceeds limit -> clamped to 500\n    std::cout << \"Stove temp: \" << stove.getTemperature() << \"°F\" << std::endl;\n\n    stove.setTemperature(350);\n    std::cout << \"Stove temp: \" << stove.getTemperature() << \"°F\" << std::endl;\n    return 0;\n}",
          "output": "Stove temp: 500°F\nStove temp: 350°F",
          "keyTakeaways": [
            "Encapsulation hides sensitive object details and guards invariants.",
            "Getters provide read access; Setters enforce business validation rules.",
            "Mark getters that don't modify state as 'const'."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=20571s"
        },
        {
          "id": 60,
          "title": "Inheritance (Base & Derived Classes) 👩‍👧‍👦",
          "timestamp": "05:48:59",
          "timeSeconds": 20939,
          "category": "OOP",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/basic-inheritance-in-c/",
          "primerUrl": "https://cpp-primer.pages.dev/book/151-15.1._oop_an_overview",
          "summary": {
            "en": "Inheriting common attributes and behaviors from a base class into derived child classes.",
            "fr": "Héritage : réutilisation et spécialisation d'une classe de base dans des classes dérivées."
          },
          "code": "#include <iostream>\n\nclass Animal {\npublic:\n    bool alive = true;\n\n    void eat() {\n        std::cout << \"Nom nom nom... This animal is eating.\" << std::endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() {\n        std::cout << \"The dog goes woof! 🐶\" << std::endl;\n    }\n};\n\nclass Cat : public Animal {\npublic:\n    void meow() {\n        std::cout << \"The cat goes meow! 🐱\" << std::endl;\n    }\n};\n\nint main() {\n    Dog dog;\n    std::cout << \"Is dog alive? \" << dog.alive << std::endl;\n    dog.eat();  // Inherited from Animal base\n    dog.bark(); // Specialized Dog method\n\n    Cat cat;\n    cat.meow();\n    return 0;\n}",
          "output": "Is dog alive? 1\nNom nom nom... This animal is eating.\nThe dog goes woof! 🐶\nThe cat goes meow! 🐱",
          "keyTakeaways": [
            "Inheritance establishes an 'is-a' relationship (e.g. Dog is an Animal).",
            "Derived classes inherit all non-private members of the base class.",
            "Eliminates duplicate code across related classes."
          ],
          "source": "brocode",
          "ytUrl": "https://www.youtube.com/watch?v=-TkoO8Z07hI&t=20939s"
        }
      ]
    },
    {
      "id": "mod-9",
      "source": "learncpp",
      "icon": "🚀",
      "title": {
        "en": "Module 9: Intermediate Mastery Bridge (Medium-Level Bridge 61-65)",
        "fr": "Module 9 : Passerelle Niveau Intermédiaire (61-65)"
      },
      "description": {
        "en": "The essential bridge to solid intermediate C++: std::vector dynamic arrays, polymorphism & virtual functions, smart pointers (unique_ptr), STL maps & sorting, and practical thread concurrency.",
        "fr": "La passerelle indispensable vers le niveau intermédiaire : tableaux dynamiques std::vector, polymorphisme & fonctions virtuelles, pointeurs intelligents (unique_ptr), tables STL et threads pratiques."
      },
      "lessons": [
        {
          "id": 61,
          "title": "Dynamic Arrays with std::vector 🚀",
          "timestamp": "Intermediate 1",
          "timeSeconds": null,
          "category": "Intermediate",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/an-introduction-to-stdvector/",
          "primerUrl": "https://cpp-primer.pages.dev/book/030-3.3._library_vector_type",
          "summary": {
            "en": "Dynamically resizing arrays that handle memory management automatically: push_back, size, capacity, and indexing.",
            "fr": "Tableaux dynamiques redimensionnables gérant la mémoire automatiquement via std::vector."
          },
          "code": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> numbers = {10, 20, 30};\n\n    numbers.push_back(40); // Adds element to the end\n    numbers.push_back(50);\n\n    std::cout << \"Vector size: \" << numbers.size() << std::endl;\n    std::cout << \"First element: \" << numbers.front() << \", Last: \" << numbers.back() << std::endl;\n\n    // Iterate cleanly\n    std::cout << \"Elements: \";\n    for (int n : numbers) {\n        std::cout << n << \" \";\n    }\n    std::cout << std::endl;\n\n    numbers.pop_back(); // Removes last element\n    std::cout << \"After pop_back, size is: \" << numbers.size() << std::endl;\n    return 0;\n}",
          "output": "Vector size: 5\nFirst element: 10, Last: 50\nElements: 10 20 30 40 50 \nAfter pop_back, size is: 4",
          "keyTakeaways": [
            "std::vector is the default dynamic container in modern C++.",
            "Automatically manages heap memory, growing dynamically when capacity is reached.",
            "push_back() appends items; .size() returns current count."
          ],
          "source": "learncpp",
          "ytUrl": null
        },
        {
          "id": 62,
          "title": "Object-Oriented Polymorphism & Virtual Functions 🎭",
          "timestamp": "Intermediate 2",
          "timeSeconds": null,
          "category": "Intermediate",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/virtual-functions/",
          "primerUrl": "https://cpp-primer.pages.dev/book/152-15.2._defining_base_and_derived_classes",
          "summary": {
            "en": "Dynamic polymorphism with virtual functions, override keyword, and virtual destructors.",
            "fr": "Polymorphisme dynamique avec fonctions virtuelles, mot-clé override et destructeurs virtuels."
          },
          "code": "#include <iostream>\n#include <vector>\n#include <memory>\n\nclass Shape {\npublic:\n    virtual void draw() const { // Virtual method enables runtime polymorphism\n        std::cout << \"Drawing a generic shape.\" << std::endl;\n    }\n    virtual ~Shape() = default; // Always virtual destructor for base classes!\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() const override {\n        std::cout << \"Drawing a smooth Circle! 🔴\" << std::endl;\n    }\n};\n\nclass Square : public Shape {\npublic:\n    void draw() const override {\n        std::cout << \"Drawing a sharp Square! 🟦\" << std::endl;\n    }\n};\n\nint main() {\n    Circle c;\n    Square s;\n    Shape* shapes[] = { &c, &s };\n\n    for (Shape* shape : shapes) {\n        shape->draw(); // Dispatches to Circle::draw and Square::draw at runtime!\n    }\n    return 0;\n}",
          "output": "Drawing a smooth Circle! 🔴\nDrawing a sharp Square! 🟦",
          "keyTakeaways": [
            "virtual methods enable runtime dynamic dispatch through base class pointers.",
            "The 'override' keyword ensures compiler verifies matching base signatures.",
            "Always declare base class destructors as virtual (~Base() = default;) to prevent leaks."
          ],
          "source": "learncpp",
          "ytUrl": null
        },
        {
          "id": 63,
          "title": "Modern Smart Pointers (std::unique_ptr & std::shared_ptr) 🛡️",
          "timestamp": "Intermediate 3",
          "timeSeconds": null,
          "category": "Intermediate",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/stdunique_ptr/",
          "primerUrl": "https://cpp-primer.pages.dev/book/121-12.1._dynamic_memory_and_smart_pointers",
          "summary": {
            "en": "RAII automatic memory management eliminating manual delete and leaks using std::unique_ptr and std::make_unique.",
            "fr": "Gestion automatique de la mémoire (RAII) supprimant les fuites avec std::unique_ptr."
          },
          "code": "#include <iostream>\n#include <memory>\n#include <string>\n\nclass Entity {\npublic:\n    Entity() { std::cout << \"Entity created.\" << std::endl; }\n    ~Entity() { std::cout << \"Entity destroyed automatically! 🧹\" << std::endl; }\n    void greet() { std::cout << \"Entity active and ready.\" << std::endl; }\n};\n\nint main() {\n    {\n        // std::make_unique automatically allocates on heap\n        std::unique_ptr<Entity> entity = std::make_unique<Entity>();\n        entity->greet();\n        // Zero manual delete needed! When 'entity' leaves scope, destructor runs.\n    }\n    std::cout << \"Scope exited successfully.\" << std::endl;\n    return 0;\n}",
          "output": "Entity created.\nEntity active and ready.\nEntity destroyed automatically! 🧹\nScope exited successfully.",
          "keyTakeaways": [
            "std::unique_ptr owns heap memory exclusively and automatically deletes it on scope exit.",
            "std::make_unique<Type>() is the modern, exception-safe way to allocate.",
            "Eliminates 99% of manual delete calls and memory leaks in production C++."
          ],
          "source": "learncpp",
          "ytUrl": null
        },
        {
          "id": 64,
          "title": "Essential STL Containers & Algorithms (std::map, std::sort) 🗺️",
          "timestamp": "Intermediate 4",
          "timeSeconds": null,
          "category": "Intermediate",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-standard-library-algorithms/",
          "primerUrl": "https://cpp-primer.pages.dev/book/189-a.2._a_brief_tour_of_the_algorithms",
          "summary": {
            "en": "Key-value associative maps (std::map) and powerful Standard Library algorithms like std::sort and std::find.",
            "fr": "Tables associatives clé-valeur (std::map) et algorithmes STL majeurs (std::sort, std::find)."
          },
          "code": "#include <iostream>\n#include <map>\n#include <vector>\n#include <algorithm>\n#include <string>\n\nint main() {\n    // 1. Key-Value Dictionary (std::map)\n    std::map<std::string, double> menu = {\n        {\"Burger\", 5.99},\n        {\"Fries\", 2.49},\n        {\"Drink\", 1.99}\n    };\n    menu[\"Pizza\"] = 8.99; // Insert new key\n\n    std::cout << \"Burger price: $\" << menu[\"Burger\"] << std::endl;\n\n    // 2. High-performance STL sorting\n    std::vector<int> scores = {88, 42, 99, 73, 61};\n    std::sort(scores.begin(), scores.end());\n\n    std::cout << \"Sorted scores: \";\n    for (int s : scores) std::cout << s << \" \";\n    std::cout << std::endl;\n    return 0;\n}",
          "output": "Burger price: $5.99\nSorted scores: 42 61 73 88 99 ",
          "keyTakeaways": [
            "std::map stores key-value pairs sorted by key (Red-Black tree, O(log N)).",
            "std::sort(begin, end) is an introsort (O(N log N)), far faster than Bubble Sort.",
            "The STL algorithms work consistently across all standard containers."
          ],
          "source": "learncpp",
          "ytUrl": null
        },
        {
          "id": 65,
          "title": "Practical Multithreading Basics (std::thread & std::mutex) 🧵",
          "timestamp": "Intermediate 5",
          "timeSeconds": null,
          "category": "Intermediate",
          "learnCppUrl": "https://www.learncpp.com/cpp-tutorial/introduction-to-threads/",
          "primerUrl": "https://cpp-primer.pages.dev/book/191-index",
          "summary": {
            "en": "Concurrent execution with std::thread and thread-safe data access using std::mutex and std::lock_guard.",
            "fr": "Exécution concurrente avec std::thread et protection des données partagées avec std::mutex."
          },
          "code": "#include <iostream>\n#include <thread>\n#include <mutex>\n\nstd::mutex mtx; // Protects shared access to std::cout\nint counter = 0;\n\nvoid printWorker(int id) {\n    for (int i = 0; i < 3; i++) {\n        // lock_guard automatically locks and unlocks on scope exit (RAII)\n        std::lock_guard<std::mutex> lock(mtx);\n        counter++;\n        std::cout << \"Thread #\" << id << \" working (count=\" << counter << \")\" << std::endl;\n    }\n}\n\nint main() {\n    std::thread t1(printWorker, 1);\n    std::thread t2(printWorker, 2);\n\n    t1.join(); // Wait for thread 1 to finish\n    t2.join(); // Wait for thread 2 to finish\n\n    std::cout << \"All threads completed! Final count: \" << counter << std::endl;\n    return 0;\n}",
          "output": "Thread #1 working (count=1)\nThread #1 working (count=2)\nThread #1 working (count=3)\nThread #2 working (count=4)\nThread #2 working (count=5)\nThread #2 working (count=6)\nAll threads completed! Final count: 6",
          "keyTakeaways": [
            "std::thread launches parallel work on a separate CPU core.",
            "Always call .join() to wait for thread termination before exiting scope.",
            "std::lock_guard<std::mutex> guarantees thread-safe mutual exclusion."
          ],
          "source": "learncpp",
          "ytUrl": null
        }
      ]
    },
    {
      "id": "mod-10",
      "source": "prodev",
      "icon": "🏆",
      "title": {
        "en": "Module 10: Real-World Advanced Project Challenges (66-70)",
        "fr": "Module 10 : Projets Avancés du Monde Réel (66-70)"
      },
      "description": {
        "en": "Production-grade C++ systems engineering: build custom dynamic arrays with move semantics, custom smart pointers, fixed-block memory pools, thread-safe task queues, and binary packet parsers.",
        "fr": "Ingénierie systèmes C++ production : tableaux dynamiques avec sémantique de déplacement, pointeurs intelligents, pools de mémoire et files concurrentes."
      },
      "lessons": [
        {
          "id": 66,
          "title": "Project 1: Custom Vector Engine (MyVector<T>) 🚀",
          "timestamp": "Advanced Project 1",
          "timeSeconds": null,
          "category": "Systems Project",
          "summary": {
            "en": "Build a custom dynamic array container from scratch: manual heap management, exponential 2x capacity reallocation, copy/move constructors, and amortized O(1) push_back.",
            "fr": "Implémentation d'un tableau dynamique de A à Z avec réallocation exponentielle et constructeurs de déplacement."
          },
          "code": "#include <iostream>\n#include <utility>\n#include <string>\n\ntemplate <typename T>\nclass MyVector {\nprivate:\n    T* data;\n    size_t sz;\n    size_t cap;\n\n    void reallocate(size_t newCap) {\n        T* newBlock = new T[newCap];\n        for (size_t i = 0; i < sz; i++) {\n            newBlock[i] = std::move(data[i]); // Move existing elements\n        }\n        delete[] data;\n        data = newBlock;\n        cap = newCap;\n    }\n\npublic:\n    MyVector() : data(nullptr), sz(0), cap(0) {}\n    ~MyVector() { delete[] data; }\n\n    // Move constructor (Zero-copy transfer of ownership)\n    MyVector(MyVector&& other) noexcept \n        : data(other.data), sz(other.sz), cap(other.cap) {\n        other.data = nullptr;\n        other.sz = 0;\n        other.cap = 0;\n    }\n\n    void push_back(const T& value) {\n        if (sz >= cap) {\n            reallocate(cap == 0 ? 2 : cap * 2); // 2x exponential growth\n        }\n        data[sz++] = value;\n    }\n\n    size_t size() const { return sz; }\n    size_t capacity() const { return cap; }\n    T& operator[](size_t index) { return data[index]; }\n    const T& operator[](size_t index) const { return data[index]; }\n};\n\nint main() {\n    MyVector<std::string> names;\n    names.push_back(\"Alpha\");\n    names.push_back(\"Beta\");\n    names.push_back(\"Gamma\");\n\n    std::cout << \"Custom Vector Size: \" << names.size() << \" | Capacity: \" << names.capacity() << std::endl;\n    for (size_t i = 0; i < names.size(); i++) {\n        std::cout << \"[\" << i << \"]: \" << names[i] << std::endl;\n    }\n    return 0;\n}",
          "output": "Custom Vector Size: 3 | Capacity: 4\n[0]: Alpha\n[1]: Beta\n[2]: Gamma",
          "keyTakeaways": [
            "Exponential capacity doubling (2x) provides amortized O(1) push_back insertion time.",
            "Move semantics (std::move) prevent expensive deep copies when reallocating heap memory.",
            "The move constructor steals the internal data pointer and nullifies the source object (RAII safe)."
          ],
          "source": "prodev",
          "ytUrl": null
        },
        {
          "id": 67,
          "title": "Project 2: Custom Smart Pointer Engine (MyUniquePtr) 🛡️",
          "timestamp": "Advanced Project 2",
          "timeSeconds": null,
          "category": "Systems Project",
          "summary": {
            "en": "Implement a custom move-only unique ownership smart pointer: disabling copy semantics (= delete), overloaded operator-> and dereference operator*, and deterministic RAII heap cleanup.",
            "fr": "Création d'un pointeur intelligent unique déplaçable avec RAII et surcharge d'opérateurs."
          },
          "code": "#include <iostream>\n#include <string>\n\ntemplate <typename T>\nclass MyUniquePtr {\nprivate:\n    T* ptr;\n\npublic:\n    explicit MyUniquePtr(T* p = nullptr) : ptr(p) {}\n    ~MyUniquePtr() { delete ptr; } // Automatically frees heap resource!\n\n    // 1. Strictly disable copying (unique exclusive ownership!)\n    MyUniquePtr(const MyUniquePtr&) = delete;\n    MyUniquePtr& operator=(const MyUniquePtr&) = delete;\n\n    // 2. Enable Move Semantics\n    MyUniquePtr(MyUniquePtr&& other) noexcept : ptr(other.ptr) {\n        other.ptr = nullptr; // Steal resource\n    }\n    MyUniquePtr& operator=(MyUniquePtr&& other) noexcept {\n        if (this != &other) {\n            delete ptr;\n            ptr = other.ptr;\n            other.ptr = nullptr;\n        }\n        return *this;\n    }\n\n    T& operator*() const { return *ptr; }\n    T* operator->() const { return ptr; }\n    T* get() const { return ptr; }\n};\n\nstruct Player {\n    std::string name;\n    int health;\n    void display() const { std::cout << name << \" (HP: \" << health << \")\" << std::endl; }\n};\n\nint main() {\n    MyUniquePtr<Player> p1(new Player{\"Kaelen\", 100});\n    p1->display();\n\n    // Transfer ownership via move\n    MyUniquePtr<Player> p2 = std::move(p1);\n    if (p1.get() == nullptr) {\n        std::cout << \"p1 ownership safely transferred to p2!\" << std::endl;\n    }\n    p2->display();\n    return 0;\n}",
          "output": "Kaelen (HP: 100)\np1 ownership safely transferred to p2!\nKaelen (HP: 100)",
          "keyTakeaways": [
            "= delete disables copy constructors to enforce strictly unique ownership in memory.",
            "Overloaded operator-> and operator* allow the smart pointer to behave syntactically like a raw pointer.",
            "Ownership transfers seamlessly via move semantics, completely eliminating memory leaks."
          ],
          "source": "prodev",
          "ytUrl": null
        },
        {
          "id": 68,
          "title": "Project 3: High-Performance Fixed-Block Memory Pool ⚡",
          "timestamp": "Advanced Project 3",
          "timeSeconds": null,
          "category": "Systems Project",
          "summary": {
            "en": "Eliminate malloc/new runtime overhead and heap fragmentation: build an ultra-fast fixed-block memory allocator with an intrusive free-list for constant O(1) allocations.",
            "fr": "Gestionnaire de mémoire à blocs fixes ultra-rapide en O(1) avec liste chaînée intrusive."
          },
          "code": "#include <iostream>\n#include <cstddef>\n\nclass MemoryPool {\nprivate:\n    struct Node {\n        Node* next;\n    };\n\n    size_t blockSize;\n    size_t poolCapacity;\n    char* memoryBuffer;\n    Node* freeListHead;\n\npublic:\n    MemoryPool(size_t blockSz, size_t count)\n        : blockSize(blockSz < sizeof(Node) ? sizeof(Node) : blockSz),\n          poolCapacity(count),\n          freeListHead(nullptr) {\n        // Allocate contiguous chunk once\n        memoryBuffer = new char[blockSize * poolCapacity];\n        // Link all blocks into the free list\n        for (size_t i = 0; i < poolCapacity; i++) {\n            Node* node = reinterpret_cast<Node*>(memoryBuffer + (i * blockSize));\n            node->next = freeListHead;\n            freeListHead = node;\n        }\n    }\n\n    ~MemoryPool() { delete[] memoryBuffer; }\n\n    void* allocate() {\n        if (!freeListHead) return nullptr; // Pool exhausted\n        Node* block = freeListHead;\n        freeListHead = freeListHead->next; // O(1) pop!\n        return block;\n    }\n\n    void deallocate(void* ptr) {\n        if (!ptr) return;\n        Node* node = static_cast<Node*>(ptr);\n        node->next = freeListHead; // O(1) push back onto free list!\n        freeListHead = node;\n    }\n};\n\nint main() {\n    MemoryPool pool(sizeof(int), 3);\n    int* a = static_cast<int*>(pool.allocate());\n    int* b = static_cast<int*>(pool.allocate());\n    *a = 42;\n    *b = 99;\n\n    std::cout << \"Allocated from pool: *a = \" << *a << \", *b = \" << *b << std::endl;\n    pool.deallocate(a);\n    pool.deallocate(b);\n    std::cout << \"Deallocated back to pool in constant O(1) time without OS syscalls!\" << std::endl;\n    return 0;\n}",
          "output": "Allocated from pool: *a = 42, *b = 99\nDeallocated back to pool in constant O(1) time without OS syscalls!",
          "keyTakeaways": [
            "Memory pools allocate one large contiguous buffer up front, eliminating OS heap fragmentation.",
            "An intrusive free-list uses the unallocated memory blocks themselves to store the 'next' pointers.",
            "Both allocation and deallocation operate in true deterministic O(1) time, essential in game dev and HFT systems."
          ],
          "source": "prodev",
          "ytUrl": null
        },
        {
          "id": 69,
          "title": "Project 4: Thread-Safe Task Queue & Worker Engine 🧵",
          "timestamp": "Advanced Project 4",
          "timeSeconds": null,
          "category": "Systems Project",
          "summary": {
            "en": "Engine-level concurrency: build a multi-threaded work queue using std::condition_variable, std::unique_lock, std::mutex, and worker threads consuming asynchronous tasks.",
            "fr": "File de tâches concurrente avec condition_variable, mutex et pool de threads travailleurs."
          },
          "code": "#include <iostream>\n#include <queue>\n#include <thread>\n#include <mutex>\n#include <condition_variable>\n#include <functional>\n#include <vector>\n\nclass TaskQueue {\nprivate:\n    std::queue<std::function<void()>> tasks;\n    std::mutex mtx;\n    std::condition_variable cv;\n    bool stop = false;\n\npublic:\n    void pushTask(std::function<void()> task) {\n        {\n            std::lock_guard<std::mutex> lock(mtx);\n            tasks.push(task);\n        }\n        cv.notify_one(); // Wake up one waiting worker thread!\n    }\n\n    void workerLoop(int workerId) {\n        while (true) {\n            std::function<void()> task;\n            {\n                std::unique_lock<std::mutex> lock(mtx);\n                // Sleep until tasks arrive or stop signal is set (Zero CPU burning!)\n                cv.wait(lock, [this]() { return stop || !tasks.empty(); });\n                if (stop && tasks.empty()) return;\n                task = std::move(tasks.front());\n                tasks.pop();\n            }\n            task(); // Execute task outside the lock!\n        }\n    }\n\n    void shutdown() {\n        {\n            std::lock_guard<std::mutex> lock(mtx);\n            stop = true;\n        }\n        cv.notify_all(); // Wake all workers so they can cleanly exit\n    }\n};\n\nint main() {\n    TaskQueue queue;\n    std::thread worker1(&TaskQueue::workerLoop, &queue, 1);\n    std::thread worker2(&TaskQueue::workerLoop, &queue, 2);\n\n    queue.pushTask([]() { std::cout << \"Task A processed by worker!\" << std::endl; });\n    queue.pushTask([]() { std::cout << \"Task B processed by worker!\" << std::endl; });\n\n    std::this_thread::sleep_for(std::chrono::milliseconds(50));\n    queue.shutdown();\n    worker1.join();\n    worker2.join();\n    std::cout << \"Task queue cleanly drained and shut down!\" << std::endl;\n    return 0;\n}",
          "output": "Task A processed by worker!\nTask B processed by worker!\nTask queue cleanly drained and shut down!",
          "keyTakeaways": [
            "std::condition_variable::wait puts worker threads into low-power sleep until notified, avoiding busy-waiting (100% CPU spinning).",
            "Tasks should always be executed outside the mutex lock to maximize concurrency throughput.",
            "Clean shutdown requires setting an atomic flag and calling notify_all() before joining worker threads."
          ],
          "source": "prodev",
          "ytUrl": null
        },
        {
          "id": 70,
          "title": "Project 5: Binary Packet Parser & Protocol Engine 🛰️",
          "timestamp": "Advanced Project 5",
          "timeSeconds": null,
          "category": "Systems Project",
          "summary": {
            "en": "Raw binary serialization and network packet deserialization: byte orders (endianness), bitwise flag masking, packet headers, and type safety using std::memcpy to prevent strict aliasing undefined behavior.",
            "fr": "Sérialisation binaire, gestion des paquets réseaux, endianness et std::memcpy sans comportement indéfini."
          },
          "code": "#include <iostream>\n#include <vector>\n#include <cstdint>\n#include <cstring>\n\n// Packed binary protocol header\nstruct PacketHeader {\n    uint16_t magic;      // 0xAA55 identifier\n    uint8_t  packetType; // 1 = Login, 2 = Telemetry, 3 = Command\n    uint8_t  flags;      // Bit 0 = Encrypted, Bit 1 = Compressed\n    uint32_t payloadLen;\n};\n\nstd::vector<uint8_t> serializePacket(uint8_t type, uint8_t flags, uint32_t len) {\n    PacketHeader header;\n    header.magic = 0xAA55;\n    header.packetType = type;\n    header.flags = flags;\n    header.payloadLen = len;\n\n    std::vector<uint8_t> buffer(sizeof(PacketHeader));\n    // Standard compliant way to copy raw bytes without strict-aliasing violations\n    std::memcpy(buffer.data(), &header, sizeof(PacketHeader));\n    return buffer;\n}\n\nbool parsePacket(const std::vector<uint8_t>& buffer, PacketHeader& outHeader) {\n    if (buffer.size() < sizeof(PacketHeader)) return false;\n    std::memcpy(&outHeader, buffer.data(), sizeof(PacketHeader));\n    return outHeader.magic == 0xAA55;\n}\n\nint main() {\n    // Serialize packet\n    std::vector<uint8_t> networkWire = serializePacket(2, 0b00000011, 256);\n    std::cout << \"Serialized Binary Packet Size: \" << networkWire.size() << \" bytes\" << std::endl;\n\n    // Parse packet on receiving side\n    PacketHeader received;\n    if (parsePacket(networkWire, received)) {\n        std::cout << \"Packet Validated! Magic: 0x\" << std::hex << received.magic << std::dec << std::endl;\n        std::cout << \"Type: \" << (int)received.packetType << \" | Length: \" << received.payloadLen << std::endl;\n        std::cout << \"Encrypted? \" << ((received.flags & 0x01) ? \"YES\" : \"NO\") << std::endl;\n        std::cout << \"Compressed? \" << ((received.flags & 0x02) ? \"YES\" : \"NO\") << std::endl;\n    }\n    return 0;\n}",
          "output": "Serialized Binary Packet Size: 8 bytes\nPacket Validated! Magic: 0xaa55\nType: 2 | Length: 256\nEncrypted? YES\nCompressed? YES",
          "keyTakeaways": [
            "Use std::memcpy for binary deserialization to prevent compiler strict-aliasing rule violations and alignment faults.",
            "Explicit width integers (<cstdint> like uint16_t, uint32_t) guarantee consistent data sizes across platforms.",
            "Bitwise masks (& 0x01) extract multi-flag metadata packed into a single byte."
          ],
          "source": "prodev",
          "ytUrl": null
        }
      ]
    },
    {
      "id": "mod-11",
      "icon": "🔬",
      "title": {
        "en": "Module 11: Production Systems Architecture & Deep C++ Internals",
        "fr": "Module 11 : Architecture Systèmes & Concepts Avancés C++"
      },
      "description": {
        "en": "Deep-dive systems engineering: value categories, perfect forwarding, compile-time metaprogramming & C++20 concepts, virtual tables (vtable), exception safety, undefined behavior sanitizers, and cache locality.",
        "fr": "Ingénierie systèmes approfondie : catégories de valeurs, transfert parfait, métaprogrammation à la compilation, vtables, sécurité des exceptions, sanitizers et localité de cache."
      },
      "lessons": [
            {
                  "id": 71,
                  "title": "Value Categories, Universal References & Perfect Forwarding ⚡",
                  "timestamp": "Deep Dive 71",
                  "timeSeconds": null,
                  "category": "Advanced C++",
                  "summary": {
                        "en": "Master lvalues, prvalues, and xvalues. Understand why std::move does not move anything, how universal (forwarding) references (T&&) work via reference collapsing, and how std::forward preserves value categories in factory functions.",
                        "fr": "Catégories de valeurs, références universelles (T&&) et transfert parfait avec std::forward."
                  },
                  "code": "#include <iostream>\n    #include <string>\n    #include <utility>\n    \n    class Widget {\n    public:\n        std::string name;\n        Widget(const std::string& n) : name(n) { std::cout << \"  [Widget] Copy constructed: \" << name << \"\\n    \"; }\n        Widget(std::string&& n) : name(std::move(n)) { std::cout << \"  [Widget] Move constructed: \" << name << \"\\n    \"; }\n    };\n    \n    // Universal reference (T&& in deduced context)\n    template <typename T>\n    void relay(T&& arg) {\n        // std::forward<T> preserves lvalueness or rvalueness!\n        Widget w(std::forward<T>(arg));\n    }\n    \n    int main() {\n        std::string lval = \"PersistentBuffer\";\n        std::cout << \"Passing lvalue to relay():\\n    \";\n        relay(lval); // lval is preserved as lvalue ref\n    \n        std::cout << \"\\n    Passing temporary rvalue to relay():\\n    \";\n        relay(std::string(\"TemporaryBuffer\")); // Forwarded as rvalue -> calls move ctor!\n    \n        return 0;\n    }",
                  "output": "Passing lvalue to relay():\n      [Widget] Copy constructed: PersistentBuffer\n    \n    Passing temporary rvalue to relay():\n      [Widget] Move constructed: TemporaryBuffer",
                  "keyTakeaways": [
                        "std::move is an unconditional cast to an rvalue; it generates zero machine instructions by itself.",
                        "Universal (forwarding) references occur ONLY when type deduction is involved (e.g., template <typename T> void f(T&&)).",
                        "Reference collapsing rules: & + & -> &, & + && -> &, && + & -> &, and && + && -> &&.",
                        "std::forward<T>(arg) casts arg to an rvalue only if T was deduced as a non-reference (i.e. was passed an rvalue)."
                  ],
                  "source": "prodev",
                  "ytUrl": null
            },
            {
                  "id": 72,
                  "title": "Compile-Time Metaprogramming & C++20 Concepts 🧠",
                  "timestamp": "Deep Dive 72",
                  "timeSeconds": null,
                  "category": "Advanced C++",
                  "summary": {
                        "en": "Shift runtime overhead to zero-cost compilation: constexpr and consteval immediate functions, type introspection with type traits, and expressive constraints with C++20 Concepts (eliminating ugly SFINAE).",
                        "fr": "Métaprogrammation à la compilation, fonctions immédiates consteval et concepts C++20."
                  },
                  "code": "#include <iostream>\n    #include <concepts>\n    #include <type_traits>\n    \n    // C++20 Concept: constrain types at compile time\n    template <typename T>\n    concept Numeric = std::integral<T> || std::floating_point<T>;\n    \n    // Constrained template: compilation fails with a clear message if not Numeric\n    template <Numeric T>\n    constexpr T computeSquare(T x) {\n        return x * x;\n    }\n    \n    // C++20 consteval: MUST be evaluated at compile time\n    consteval int compileTimeFactorial(int n) {\n        return (n <= 1) ? 1 : n * compileTimeFactorial(n - 1);\n    }\n    \n    int main() {\n        constexpr int fact5 = compileTimeFactorial(5); // Computed by compiler!\n        constexpr double sq = computeSquare(3.14);    // Valid numeric concept\n    \n        std::cout << \"Compile-time Factorial(5) = \" << fact5 << \"\\n    \";\n        std::cout << \"Compile-time Square(3.14) = \" << sq << \"\\n    \";\n    \n        // Uncommenting below produces an instant, human-readable compiler error:\n        // computeSquare(\"hello\"); // error: constraints not satisfied\n        return 0;\n    }",
                  "output": "Compile-time Factorial(5) = 120\n    Compile-time Square(3.14) = 9.8596",
                  "keyTakeaways": [
                        "consteval functions are guaranteed immediate functions: they must evaluate to a compile-time constant or compilation errors out.",
                        "C++20 Concepts replace cryptic SFINAE (std::enable_if) with clean compile-time contract constraints.",
                        "Concepts provide clear, precise compiler diagnostics instead of 50-line template deduction dumps."
                  ],
                  "source": "prodev",
                  "ytUrl": null
            },
            {
                  "id": 73,
                  "title": "Virtual Table (VTable) Internals & Memory Layout 🔬",
                  "timestamp": "Deep Dive 73",
                  "timeSeconds": null,
                  "category": "Advanced C++",
                  "summary": {
                        "en": "Inspect what happens under the hood of polymorphism: hidden __vptr pointers, virtual method tables, cache miss costs in dynamic dispatch, and the 'final' specifier enabling compiler devirtualization.",
                        "fr": "Fonctionnement interne des vtables, pointeur __vptr, disposition mémoire et dévirtualisation."
                  },
                  "code": "#include <iostream>\n    \n    class BaseWithoutVirtual {\n        int data = 10;\n    };\n    \n    class BaseWithVirtual {\n        int data = 10;\n    public:\n        virtual ~BaseWithVirtual() = default;\n        virtual void execute() { std::cout << \"Base execution\\n    \"; }\n    };\n    \n    class Derived final : public BaseWithVirtual {\n    public:\n        void execute() override { std::cout << \"Derived execution\\n    \"; }\n    };\n    \n    int main() {\n        std::cout << \"sizeof(BaseWithoutVirtual): \" << sizeof(BaseWithoutVirtual) << \" bytes (only int)\\n    \";\n        // On 64-bit systems, adds 8 bytes for hidden vptr + alignment padding!\n        std::cout << \"sizeof(BaseWithVirtual):    \" << sizeof(BaseWithVirtual) << \" bytes (int + vptr + padding)\\n    \";\n    \n        BaseWithVirtual* poly = new Derived();\n        // Dynamic dispatch: Dereferences poly -> reads vptr -> indexes vtable -> calls function pointer\n        poly->execute();\n    \n        delete poly;\n        return 0;\n    }",
                  "output": "sizeof(BaseWithoutVirtual): 4 bytes (only int)\n    sizeof(BaseWithVirtual):    16 bytes (int + vptr + padding)\n    Derived execution",
                  "keyTakeaways": [
                        "Any class with at least one virtual function embeds an extra hidden pointer (__vptr) pointing to that class's VTable.",
                        "Virtual calls require two pointer dereferences (vptr lookup + table offset jump), which can cause CPU instruction cache misses.",
                        "Marking classes or methods 'final' allows the compiler to bypass the VTable and inline the call directly (devirtualization)."
                  ],
                  "source": "prodev",
                  "ytUrl": null
            },
            {
                  "id": 74,
                  "title": "Exception Safety Guarantees & Copy-and-Swap Idiom 🛡️",
                  "timestamp": "Deep Dive 74",
                  "timeSeconds": null,
                  "category": "Advanced C++",
                  "summary": {
                        "en": "Understand the four levels of exception safety (No-throw, Strong, Basic, None). Learn why destructors must always be noexcept, and master the canonical Copy-and-Swap idiom for bulletproof assignment operators.",
                        "fr": "Garanties de sécurité des exceptions et idiome canonique Copy-and-Swap."
                  },
                  "code": "#include <iostream>\n    #include <utility>\n    #include <algorithm>\n    \n    class SafeArray {\n    private:\n        size_t sz;\n        int* ptr;\n    \n    public:\n        explicit SafeArray(size_t s = 0) : sz(s), ptr(s ? new int[s]() : nullptr) {}\n    \n        // Copy Constructor (Deep copy: may throw std::bad_alloc)\n        SafeArray(const SafeArray& other) : sz(other.sz), ptr(other.sz ? new int[other.sz] : nullptr) {\n            std::copy(other.ptr, other.ptr + sz, ptr);\n        }\n    \n        // Move Constructor: MUST be noexcept!\n        SafeArray(SafeArray&& other) noexcept : sz(other.sz), ptr(other.ptr) {\n            other.sz = 0;\n            other.ptr = nullptr;\n        }\n    \n        // Destructor: implicitly noexcept in modern C++\n        ~SafeArray() noexcept { delete[] ptr; }\n    \n        // Non-member or friend swap: noexcept guarantee!\n        friend void swap(SafeArray& a, SafeArray& b) noexcept {\n            using std::swap;\n            swap(a.sz, b.sz);\n            swap(a.ptr, b.ptr);\n        }\n    \n        // Canonical Copy-and-Swap Assignment: STRONG Exception Guarantee!\n        // Passing by value creates a copy. If allocation throws, *this is untouched!\n        SafeArray& operator=(SafeArray other) noexcept {\n            swap(*this, other); // Swap with local copy\n            return *this;       // Old resources automatically cleaned up when 'other' goes out of scope\n        }\n    \n        size_t size() const noexcept { return sz; }\n    };\n    \n    int main() {\n        SafeArray arr1(100);\n        SafeArray arr2(50);\n        arr1 = arr2; // Strong exception guarantee!\n        std::cout << \"SafeArray assigned safely with copy-and-swap. New size: \" << arr1.size() << \"\\n    \";\n        return 0;\n    }",
                  "output": "SafeArray assigned safely with copy-and-swap. New size: 50",
                  "keyTakeaways": [
                        "The 4 exception guarantees: Nothrow/noexcept (never fails), Strong (commit or rollback), Basic (no leaks, valid state), None (corrupted state/leaks).",
                        "Destructors must NEVER throw exceptions; if an exception escapes during stack unwinding, std::terminate is immediately called.",
                        "Copy-and-swap provides the strong exception safety guarantee with zero duplicate code between copy and move assignment operators."
                  ],
                  "source": "prodev",
                  "ytUrl": null
            },
            {
                  "id": 75,
                  "title": "Undefined Behavior (UB), Strict Aliasing & Sanitizers 🚨",
                  "timestamp": "Deep Dive 75",
                  "timeSeconds": null,
                  "category": "Advanced C++",
                  "summary": {
                        "en": "Deep dive into what Undefined Behavior really means for modern optimizing compilers. Learn the strict aliasing rule, how dead code elimination exploits UB, and how to detect silent corruption using AddressSanitizer and UndefinedBehaviorSanitizer.",
                        "fr": "Comportement indéfini (UB), règle de strict aliasing et outillage de détection avec Sanitizers."
                  },
                  "code": "#include <iostream>\n    #include <cstring>\n    #include <cstdint>\n    \n    // Violating Strict Aliasing (UNDEFINED BEHAVIOR):\n    // float* f; int* i = (int*)f; -> Compiler assumes distinct types NEVER alias!\n    \n    // The standard compliant, zero-overhead way to reinterpret raw bytes:\n    float bitsToFloat(uint32_t bits) {\n        float result;\n        std::memcpy(&result, &bits, sizeof(float)); // Optimized away by compiler to register move!\n        return result;\n    }\n    \n    int main() {\n        uint32_t rawBits = 0x3F800000; // IEEE-754 bit representation of 1.0f\n        float value = bitsToFloat(rawBits);\n    \n        std::cout << \"Bit pattern 0x\" << std::hex << rawBits << std::dec << \" parsed safely as float: \" << value << \"\\n    \";\n        std::cout << \"Compile with: g++ -fsanitize=address,undefined -g -O2 main.cpp to catch silent memory bugs!\\n    \";\n        return 0;\n    }",
                  "output": "Bit pattern 0x3f800000 parsed safely as float: 1\n    Compile with: g++ -fsanitize=address,undefined -g -O2 main.cpp to catch silent memory bugs!",
                  "keyTakeaways": [
                        "Undefined Behavior gives the compiler permission to assume the condition can NEVER happen, often deleting null checks or entire loops.",
                        "Strict aliasing rule: the compiler optimizes assuming pointers of incompatible types do not refer to the same memory location.",
                        "Always test debug and release builds with AddressSanitizer (-fsanitize=address) and UBSan (-fsanitize=undefined)."
                  ],
                  "source": "prodev",
                  "ytUrl": null
            },
            {
                  "id": 76,
                  "title": "Cache Locality & Data-Oriented Design (AoS vs SoA) 🏎️",
                  "timestamp": "Deep Dive 76",
                  "timeSeconds": null,
                  "category": "Advanced C++",
                  "summary": {
                        "en": "Why hardware cache lines rule performance. Learn how CPU L1/L2 caches fetch memory in 64-byte chunks, why linked lists trash cache lines, and how Structure of Arrays (SoA) beats Array of Structures (AoS) for SIMD and high-performance throughput.",
                        "fr": "Localité de cache et conception orientée données (Structure of Arrays vs Array of Structures)."
                  },
                  "code": "#include <iostream>\n    #include <vector>\n    #include <chrono>\n    \n    // Array of Structures (AoS): Common in classic OOP\n    struct ParticleAoS {\n        float x, y, z;\n        float vx, vy, vz;\n        int id;\n        bool active;\n        // 32 bytes per particle. Updating only positions still pulls unwanted fields into 64-byte cache lines!\n    };\n    \n    // Structure of Arrays (SoA): Data-Oriented Design (Cache-friendly)\n    struct ParticleSystemSoA {\n        std::vector<float> x, y, z;\n        std::vector<float> vx, vy, vz;\n    \n        void updatePositions(size_t count, float dt) {\n            // Contiguous sequential float streaming: 100% cache line utilization + SIMD auto-vectorization!\n            for (size_t i = 0; i < count; i++) {\n                x[i] += vx[i] * dt;\n                y[i] += vy[i] * dt;\n                z[i] += vz[i] * dt;\n            }\n        }\n    };\n    \n    int main() {\n        const size_t N = 100000;\n        ParticleSystemSoA sys;\n        sys.x.resize(N, 0.0f); sys.y.resize(N, 0.0f); sys.z.resize(N, 0.0f);\n        sys.vx.resize(N, 1.0f); sys.vy.resize(N, 2.0f); sys.vz.resize(N, 3.0f);\n    \n        sys.updatePositions(N, 0.016f); // 60 FPS physics tick\n    \n        std::cout << \"Updated \" << N << \" particles via SoA with optimal 64-byte CPU cache line utilization!\\n    \";\n        std::cout << \"Particle[0] pos = (\" << sys.x[0] << \", \" << sys.y[0] << \", \" << sys.z[0] << \")\\n    \";\n        return 0;\n    }",
                  "output": "Updated 100000 particles via SoA with optimal 64-byte CPU cache line utilization!\n    Particle[0] pos = (0.016, 0.032, 0.048)",
                  "keyTakeaways": [
                        "CPUs do not read single bytes from RAM; they load entire 64-byte cache lines into L1/L2 cache.",
                        "Pointer chasing in linked lists or node trees causes random memory jumps and massive CPU pipeline stalls.",
                        "Structure of Arrays (SoA) keeps active fields tightly packed, maximizing memory bandwidth and vectorization (AVX/NEON)."
                  ],
                  "source": "prodev",
                  "ytUrl": null
            },
            {
                  "id": 77,
                  "title": "Advanced Smart Pointers: Weak References & Custom Deleters 🔑",
                  "timestamp": "Deep Dive 77",
                  "timeSeconds": null,
                  "category": "Advanced C++",
                  "summary": {
                        "en": "Break cyclic references that cause permanent memory leaks with std::weak_ptr, use std::enable_shared_from_this to safely share 'this', and attach custom deleters to manage C-style API handles (like FILE* and OS sockets).",
                        "fr": "Pointeurs intelligents avancés : rupture de cycles avec weak_ptr, enable_shared_from_this et deleters personnalisés."
                  },
                  "code": "#include <iostream>\n    #include <memory>\n    #include <cstdio>\n    \n    struct Node {\n        int id;\n        std::shared_ptr<Node> next;\n        // std::weak_ptr does NOT increment strong ref count: breaks circular leak!\n        std::weak_ptr<Node> prev;\n    \n        Node(int val) : id(val) { std::cout << \"  Node \" << id << \" created\\n    \"; }\n        ~Node() { std::cout << \"  Node \" << id << \" destroyed cleanly!\\n    \"; }\n    };\n    \n    // RAII wrapper for legacy C handles using custom deleter\n    void customFileDeleter(FILE* fp) {\n        if (fp) {\n            std::cout << \"  Custom deleter: Closing C FILE* handle cleanly!\\n    \";\n            std::fclose(fp);\n        }\n    }\n    \n    int main() {\n        std::cout << \"1. Testing Cyclic Reference Prevention with weak_ptr:\\n    \";\n        {\n            auto n1 = std::make_shared<Node>(1);\n            auto n2 = std::make_shared<Node>(2);\n            n1->next = n2;\n            n2->prev = n1; // weak reference!\n            std::cout << \"  n1 strong ref count: \" << n1.use_count() << \"\\n    \";\n            std::cout << \"  n2 strong ref count: \" << n2.use_count() << \"\\n    \";\n        } // Both n1 and n2 cleanly destroyed here! No cyclic memory leak.\n    \n        std::cout << \"\\n    2. Testing Custom Deleter on POSIX/C Resource:\\n    \";\n        {\n            std::unique_ptr<FILE, void(*)(FILE*)> filePtr(\n                std::fopen(\"test_dummy.txt\", \"w\"),\n                customFileDeleter\n            );\n            // Destructor executes customFileDeleter automatically\n        }\n    \n        return 0;\n    }",
                  "output": "1. Testing Cyclic Reference Prevention with weak_ptr:\n      Node 1 created\n      Node 2 created\n      n1 strong ref count: 1\n      n2 strong ref count: 2\n      Node 1 destroyed cleanly!\n      Node 2 destroyed cleanly!\n    \n    2. Testing Custom Deleter on POSIX/C Resource:\n      Custom deleter: Closing C FILE* handle cleanly!",
                  "keyTakeaways": [
                        "A circular chain of std::shared_ptr instances will never reach a reference count of zero, leaking memory forever.",
                        "std::weak_ptr observes an object managed by shared_ptr without owning it; call weak.lock() to obtain a temporary shared_ptr.",
                        "std::unique_ptr accepts custom deleters to manage arbitrary OS handles (sockets, GPU textures, mutexes, FILE* pointers)."
                  ],
                  "source": "prodev",
                  "ytUrl": null
            }
      ]
}
  ]
};
