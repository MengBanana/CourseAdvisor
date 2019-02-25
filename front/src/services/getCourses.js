const courses = [
  {
    "courseId": "CS 5001",
    "courseName": "Intensive Foundations of Computer Science",
    "description": "Introduces the fundamental ideas of computing and programming principles. Discusses a systematic approach to word problems, including analytic reading, synthesis, goal setting, planning, plan execution, and testing. Presents several models of computing, beginning with functional program design. The latter part of the course consists of two parts: a task organization (ranging from the description of data to the creation of a test suite) and a data-oriented approach to the organization of programs (ranging from atomic data to self-referential data definitions and functions as data). Offers students an opportunity to practice pair programming and public code review techniques, as found in industry today. No prior programming experience is assumed; therefore, suitable for students with little or no computer science background."
  },
  {
    "courseId": "CS 5002",
    "courseName": "Discrete and Data Structures",
    "description": "Introduces the mathematical structures and methods that form the foundation of computer science. Studies structures such as sets, tuples, sequences, lists, trees, and graphs. Discusses functions, relations, ordering, and equivalence relations. Examines inductive and recursive definitions of structures and functions. Covers principles of proof such as truth tables, inductive proof, and basic logic and the counting techniques and arguments needed to estimate the size of sets, the growth of functions, and the space-time complexity of algorithms. Also, discusses data structures such as arrays, stacks, queues, lists, and the algorithms that manipulate them."
  },
  {
    "courseId": "CS 5003",
    "courseName": "Recitation for CS 5001",
    "description": "Provides a small-group discussion format to cover material in CS 5001. Coreq CS 5001."
  },
  {
    "courseId": "CS 5004",
    "courseName": "Object-Oriented Design",
    "description": "Presents a comparative approach to object-oriented programming and design. Discusses the concepts of object, class, metaclass, message, method, inheritance, and genericity. Reviews forms of polymorphism in object-oriented languages. Contrasts the use of inheritance and composition as dual techniques for software reuse—forwarding vs. delegation and subclassing vs. subtyping. Offers students an opportunity to obtain a deeper understanding of the principles of object-oriented programming and design, including software components, object-oriented design patterns, and the use of graphical design notations such as UML (unified modeling language). Illustrates basic concepts in object-oriented design with case studies in application frameworks and by writing programs in Java."
  },
  {
    "courseId": "CS 5005",
    "courseName": "Recitation for CS 5004",
    "description": "Provides small-group discussion format to cover material in CS 5004."
  },
  {
    "courseId": "CS 5006",
    "courseName": "Algorithms",
    "description": "Introduces the basic principles and techniques for the design and implementation of efficient algorithms and data representations. Considers divide-and-conquer algorithms, graph traversal algorithms, linear programming, and optimization techniques. Covers the fundamental structures for representing data, such as hash tables, trees, and graphs."
  },
  {
    "courseId": "CS 5007",
    "courseName": "Computer Systems",
    "description": "Introduces the basic design of computing systems, computer operating systems, and assembly language using a RISC architecture. Describes caches and virtual memory. Covers the interface between assembly language and high-level languages, including call frames and pointers; the use of system calls and systems programming to show the interaction with the operating system; and the basic structures of an operating system, including application interfaces, processes, threads, synchronization, interprocess communication, deadlock, memory management, file systems, and input/output control."
  },
  {
    "courseId": "CS 5010",
    "courseName": "Programming Design Paradigm",
    "description": "Introduces modern program design paradigms. Starts with functional program design, introducing the notion of a design recipe. The latter consists of two parts: a task organization (ranging from the description of data to the creation of a test suite) and a data-oriented approach to the organization of programs (ranging from atomic data to self-referential data definitions and functions as data). The course then progresses to object-oriented design, explaining how it generalizes and contrasts with functional design. In addition to studying program design, students also have an opportunity to practice pair-programming and public code review techniques, as found in industry today."
  },
  {
    "courseId": "CS 5011",
    "courseName": "Recitation for CS 5010",
    "description": "Provides small-group discussion format to cover material in CS 5010."
  },
  {
    "courseId": "CS 5082",
    "courseName": "Privacy and Security of User Accounts",
    "description": "Introduces approaches for authentication (ensuring you know who someone is) and authorization (ensuring they have access to a given resource or service). Studies how to identify relevant issues from the consumer or user side of account creation and management; identify expectations and liabilities for the developer or company providing a user-based account; share existing software design patterns and technologies to help you implement secure user accounts, including OAuth and anonymous accounts; and discusses UX design issues around user account creation and maintenance. Relevant for anyone who wants to create an application or service with a user registration and login page. Covers why you don’t want to build this functionality yourself and how you can use existing tools and technologies that shield you from liability for storing user data."
  },
  {
    "courseId": "CS 5100",
    "courseName": "Foundations of Artificial Intelligence",
    "description": "Introduces the fundamental problems, theories, and algorithms of the artificial intelligence field. Topics include heuristic search and game trees, knowledge representation using predicate calculus, automated deduction and its applications, problem solving and planning, and introduction to machine learning. Required course work includes the creation of working programs that solve problems, reason logically, and/or improve their own performance using techniques presented in the course. Requires experience in Java programming."
  },
  {
    "courseId": "CS 5150",
    "courseName": "Game Artificial Intelligence",
    "description": "Offers an overview of classical and modern approaches to artificial intelligence in digital games. Focuses on the creation of believable agents and environments with the goal of providing a fun and engaging experience to a player. Covers player modeling, procedural content generation, behavior trees, interactive narrative, decision-making systems, cognitive modeling, and path planning. Explores different approaches for behavior generation, including learning and rule-based systems. Requires students to complete several individual assignments in these areas to apply the concepts covered in class. Students choose a group final project, which requires a report, to explore one aspect of artificial intelligence for games in further depth. Offers students an opportunity to learn team management and communication. Requires knowledge of algorithms and experience with object-oriented design or functional programming."
  },
  {
    "courseId": "CS 5200",
    "courseName": "Database Management Systems",
    "description": "Introduces relational database management systems as a class of software systems. Prepares students to be sophisticated users of database management systems. Covers design theory, query language, and performance/tuning issues. Topics include relational algebra, SQL, stored procedures, user-defined functions, cursors, embedded SQL programs, client-server interfaces, entity-relationship diagrams, normalization, B-trees, concurrency, transactions, database security, constraints, object-relational DBMSs, and specialized engines such as spatial, text, XML conversion, and time series. Includes exercises using a commercial relational or object-relational database management system."
  },
  {
    "courseId": "CS 5400",
    "courseName": "Principles of Programming Language",
    "description": "Studies the basic components of programming languages, specification of syntax and semantics, and description and implementation of programming language features. Discusses examples from a variety of languages."
  },
  {
    "courseId": "CS 5500",
    "courseName": "Managing Software Development",
    "description": "Covers software life cycle models (waterfall, spiral, and so forth), domain engineering methods, requirements analysis methods (including formal specifications), software design principles and methods, verification and testing methods, resource and schedule estimation for individual software engineers, component-based software development methods and architecture, and languages for describing software processes. Includes a project where some of the software engineering methods (from domain modeling to testing) are applied in an example. Requires admission to MS program or completion of all transition courses."
  },
  {
    "courseId": "CS 5520",
    "courseName": "Mobile Application Development",
    "description": "Focuses on mobile application development on a mobile phone or related platform. Discusses memory management; user interface building, including both MVC principles and specific tools; touch events; data handling, including core data, SQL, XML, and JSON; network techniques and URL loading; and, finally, specifics such as GPS and motion sensing that may be dependent on the particular mobile platform. Students are expected to work on a project that produces a professional-quality mobile application and to demonstrate the application that they have developed. The instructor chooses a modern mobile platform to be used in the course."
  },
  {
    "courseId": "CS 5600",
    "courseName": "Computer Systems",
    "description": "Studies the structure, components, design, implementation, and internal operation of computer systems, focusing mainly on the operating system level. Reviews computer hardware and architecture including the arithmetic and logic unit, and the control unit. Covers current operating system components and construction techniques including the memory and memory controller, I/O device management, device drivers, memory management, file system structures, and the user interface. Introduces distributed operating systems. Discusses issues arising from concurrency and distribution, such as scheduling of concurrent processes, interprocess communication and synchronization, resource sharing and allocation, and deadlock management and resolution. Includes examples from real operating systems. Exposes students to the system concepts through programming exercises. Requires admission to MS program or completion of all transition courses."
  },
  {
    "courseId": "CS 5610",
    "courseName": "Web Development",
    "description": "Discusses Web development for sites that are dynamic, data driven, and interactive. Focuses on the software development issues of integrating multiple languages, assorted data technologies, and Web interaction. Considers ASP.NET, C#, HTTP, HTML, CSS, XML, XSLT, JavaScript, AJAX, RSS/Atom, SQL, and Web services. Each student must deploy individually designed Web experiments that illustrate the Web technologies and at least one major integrative Web site project. Students may work in teams with the permission of the instructor. Each student or team must also create extensive documentation of their goals, plans, design decisions, accomplishments, and user guidelines. All source files must be open and be automatically served by a sources server."
  },
  {
    "courseId": "CS 5800",
    "courseName": "Algorithms",
    "description": "Presents the mathematical techniques used for the design and analysis of computer algorithms. Focuses on algorithmic design paradigms and techniques for analyzing the correctness, time, and space complexity of algorithms. Topics may include asymptotic notation, recurrences, loop invariants, Hoare triples, sorting and searching, advanced data structures, lower bounds, hashing, greedy algorithms, dynamic programming, graph algorithms, and NP-completeness."
  },
  {
    "courseId": "CS 6200",
    "courseName": "Information Retrieval",
    "description": "Provides an introduction to information retrieval systems and different approaches to information retrieval. Topics covered include evaluation of information retrieval systems; retrieval, language, and indexing models; file organization; compression; relevance feedback; clustering; distributed retrieval and metasearch; probabilistic approaches to information retrieval; Web retrieval; filtering, collaborative filtering, and recommendation systems; cross-language IR; multimedia IR; and machine learning for information retrieval."
  },
  {
    "courseId": "CS 7610",
    "courseName": "Foundations of Distributed Systems",
    "description": "Covers foundational concepts in the design and implementation of efficient and reliable distributed computing systems. Covers internet communication protocols, fault-tolerant computing, synchronization protocols, synchronous and asynchronous computing, dynamic group communication systems, load balancing, Byzantine models, distributed hash tables, distributed file systems, and application of foundational concepts to modern distributed systems in the field. Requires knowledge of operating systems; e.g., an undergraduate course in Systems and Networks, Computer Systems, or Networks and Distributed systems."
  }

];


export function getCourses() {
  return courses.filter(g => g);
}
