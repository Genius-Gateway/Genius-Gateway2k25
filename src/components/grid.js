const crossGrid1 = [
  [{ num: 1, direction: [{ dir: "right", len: 5, answer: "DEBUG" }, { dir: "down", len: 5, answer: "DELTA" }], filled: false }, { num: 5, direction: [{ dir: "down", len: 5, answer: "EXPEL" }], filled: false }, { num: 7, direction: [{ dir: "down", len: 3, answer: "BIO" }], filled: false }, { num: 6, direction: [{ dir: "down", len: 5, answer: "UTTER" }], filled: false }, { filled: false }],
  [{ num: 2, direction: [{ dir: "right", len: 4, answer: "EXIT" }], filled: false }, { filled: false }, { filled: false }, { filled: false }, { filled: true }],
  [{ filled: false }, { filled: false }, { filled: false }, { filled: false }, { filled: true }],
  [{ num: 3, direction: [{ dir: "right", len: 3, answer: "TEN" }], filled: false }, { filled: false }, { filled: false }, { filled: false }, { filled: true }],
  [{ num: 4, direction: [{ dir: "right", len: 5, answer: "ALARM" }], filled: false }, { filled: false }, { filled: false }, { filled: false }, { filled: false }]
];
const crossGrid2 = [
  [{ num: 1, direction: [{ dir: "right", len: 5, answer: "REACT" }, { dir: "down", len: 5, answer: "ROUTE" }], filled: false }, { filled: false }, { num: 6, direction: [{ dir: "right", len: 3, answer: "ACT" }], filled: false }, { filled: false }, { num:7,direction:[{ dir: "down", len: 3, answer: "TOR" }], filled: false,filled: false }],
  [{ num: 2, direction: [{ dir: "right", len: 5, answer: "OHTRO" }], filled: false }, { filled: false }, { filled: false }, { filled: false }, { filled: false }],
  [{ num: 3, direction: [{ dir: "right", len: 3, answer: "URL" }], filled: false }, { num: 8, direction: [{ dir: "down", len: 3, answer: "RAM" }], filled: false }, { filled: false }, { filled: true }, { filled: false }],
  [{ num: 4, direction: [{ dir: "right", len: 3, answer: "TAB" }], filled: false }, { filled: false }, { filled: false }, { filled: true }, { filled: true }],
  [{ num: 5, direction: [{ dir: "right", len: 5, answer: "EMAIL" }], filled: false }, { filled: false }, { filled: false }, { filled: false }, { filled: false }]
];
const crossGrid3 = [
  [{ num: 1, direction: [{ dir: "right", len: 5, answer: "PHONE" }, { dir: "down", len: 5, answer: "PIXEL" }], filled: false }, { filled: false }, { filled: false }, { filled: false }, { num: 6, direction: [{ dir: "down", len: 3, answer: "EEE" }], filled: false }],
  [{ num: 2, direction: [{ dir: "right", len: 5, answer: "IMAGE" }], filled: false }, { num: 4, direction: [{ dir: "down", len: 4, answer: "MODI" }], filled: false }, { filled: false }, { filled: false }, { filled: false }],
  [{ num: 3, direction: [{ dir: "right", len: 3, answer: "XOR" }], filled: false }, { filled: false }, { num: 7, direction: [{ dir: "down", len: 3, answer: "RUN" }], filled: false }, { filled: true }, { filled: false }],
  [{ filled: false }, { filled: false }, { filled: false }, { filled: true }, { filled: true }],
  [{ num: 5, direction: [{ dir: "right", len: 5, answer: "LINUX" }], filled: false }, { filled: false }, { filled: false }, { filled: false }, { filled: false }]
];
const crossGrid4 = [
  [{ num: 1, direction: [{ dir: "right", len: 5, answer: "MOUSE" }, { dir: "down", len: 5, answer: "MERGE" }], filled: false }, { filled: false },{filled:false}, { num: 4, direction: [{ dir: "down", len: 5, answer: "SIGMA" }], filled: false }, { num: 5, direction: [{ dir: "down", len: 5, answer: "ENTER" }], filled: false }  ],
  [{ filled: false }, { filled: true }, { num: 6, direction: [{ dir: "right", len: 3, answer: "BIN" }], filled: false }, { filled: false }, { filld: false }],
  [{ filled: false }, { filled: true }, { filled: true }, { filled: false }, { filled: false }],
  [{ num: 2, direction: [{ dir: "right", len: 5, answer: "GNOME" }], filled: false }, { filled: false }, { filled: false }, { filled: false }, { filled: false }],
  [{ num: 3, direction: [{ dir: "right", len: 5, answer: "EGNAR" }], filled: false }, { filled: false }, { filled: false }, { filled: false }, {filled: false }]
];
const crossGrid5 = [
  [{ num: 1, direction: [{ dir: "right", len: 5, answer: "NODES" }, { dir: "down", len: 5, answer: "NOTES" }], filled: false }, { num: 6, direction: [{ dir: "down", len: 5, answer: "OPERA" }], filled: false }, { num: 8, direction: [{ dir: "down", len: 4, answer: "DEAR" }], filled: false }, { filled: false }, { filled: false }],
  [{ num: 2, direction: [{ dir: "right", len: 5, answer: "OPENS" }], filled: false }, { filled: false }, { filled: false }, { filled: false },{filled:false}],
  [{ num: 3, direction: [{ dir: "right", len: 3, answer: "TEA" }], filled: false }, { filled: false }, { filled: false }, { filled: true }, { filled: true }],
  [{ num: 4, direction: [{ dir: "right", len: 5, answer: "ERROR" }], filled: false }, { filled: false }, { filled: false }, { num: 9, direction: [{ dir: "right", len: 2, answer: "OR" }], filled: false }, { filled: false }],
  [{ num: 5, direction: [{ dir: "right", len: 4, answer: "SALT" }], filled: false }, { num: 7, direction: [{ dir: "right", len: 3, answer: "ALT" }], filled: false }, { filled: false }, { filled: false }, { filled: true }]
];

const questions1 = {
  1: {
    right: {
      text: "I am the process that reveals hidden mistakes in logic, syntax, or execution, often requiring patience and problem-solving skills. Without me, software might remain broken. What am I?",
      hints: [{ text: "This process involves identifying and resolving errors or bugs in code, often using tools like breakpoints and log statements.", used: false },
      { text: " Developers use specialized tools or environments to step through code line by line during this process, ensuring it behaves as expected.", used: false },
      { text: "It's a five-letter word starting with D, essential for fixing broken software and ensuring programs work correctly.", used: false },],
      len: 5,
      hintNum: 0
    },
    down: {
      text: "In computer science and mathematics, which term is used to represent the difference or change in a variable, often appearing in equations or algorithms to calculate differences between values?",
      hints: [{ text: " In mathematics and computer science, this term symbolizes a change or difference in a variable, commonly used in algorithms, calculus, and physics equations.", used: false },
      { text: "It's often represented by a Greek letter (∆) and is used to calculate variations in values, like in time intervals or rate of change.", used: false },
      { text: " It's a five-letter word starting with D, also the fourth letter of the Greek alphabet.", used: false },],
      len: 5,
      hintNum: 0
    }
  },
  2: {
    right: {
      text: "In programming, I can be called with a status code to terminate execution, and in some cases, I clean up resources before doing so. In shell scripts, I signify the end of a process. What am I?",
      hints: [{ text: " In programming, this command or function is used to terminate the execution of a program, often returning a status code to indicate success or failure.", used: false },
      { text: "It's commonly used in shell scripts and languages like C, Python, and Bash to stop a process or break out of the program flow.", used: false },
      { text: "It's a four-letter word starting with E, also seen on doors, signaling a way out.", used: false },], len: 4, hintNum: 0
    }
  },
  3: {
    right: {
      text: "What is the three-letter word formed by reversing the order of the letters in TEN",
      hints: [{ text: " Think of a common tool used in fishing that you get when you invert the sequence of letters in a number spelled out.", used: false },
      { text: "This word, obtained by reversing TEN, describes an item often used to trap or catch fish", used: false },
      { text: "If you invert the letters of the number often associated with a perfect score, you obtain a word that also refers to an interconnected system.", used: false },], len: 5, hintNum: 0
    }
  },
  4: {
    right: {
      text: "In operating systems, I can be set to send a signal after a specified time interval, often used to interrupt sleeping processes or enforce timeouts. What am I?",
      hints: [{ text: "In operating systems, this function schedules a signal to be sent after a certain time period, often used to implement timeouts or wake up processes.", used: false },
      { text: " It's commonly used in Unix-like systems to interrupt sleeping programs or trigger events after a delay.", used: false },
      { text: "It's a five-letter word starting with A, also something you set in the morning to wake up!", used: false },], len: 5, hintNum: 0
    }
    // down: { text: "Sun rises in the?", answer: "EAST" }
  },
  5: {
    down: {
      text: "What word describes the action of forcefully removing an unauthorized user from a system or network?",
      hints: [{ text: " In cybersecurity, this action involves forcibly disconnecting an unauthorized user from a system or network to prevent further access.", used: false },
      { text: "It's a five-letter word, often used in schools or organizations, meaning to kick someone out due to a violation of rules.", used: false },
      { text: "It starts with E and sounds like what happens when someone is permanently removed for breaking the rules.", used: false },],
      len: 5,
      hintNum: 0
    }
    // down: { text: "Sun rises in the?", answer: "EAST" }
  },
  6: {
    down: {
      text: "What word means to express something verbally, and can also relate to speech synthesis in AI and voice assistants?",
      hints: [{ text: "This word refers to vocalizing thoughts, often linked to speech synthesis in AI, where text is transformed into spoken words.", used: false },
      { text: "It's a five-letter word that means to say something out loud, whether in conversation or through a digital voice assistant.", used: false },
      { text: " It starts with U and can also describe something spoken softly or with minimal sound.", used: false },],
      len: 5,
      hintNum: 0
    }
  },
  7: {
    down: {
      text: "What is the three-letter abbreviation commonly used to refer to a brief biography, often found on social media profiles or author pages?",
      hints: [{ text: "This abbreviated term is derived from the Greek word for life and serves as a concise summary of a person's history or achievements.", used: false },
      { text: "It's a three-letter shorthand for a biography, commonly found on social media profiles and author pages.", used: false },
      { text: " It's the short word you see at the start of someone's profile that tells you about them.", used: false },],
      len: 5,
      hintNum: 0
    }
  },
};
const questions2 = {
  1: {
    right: {
      text: "Which JavaScript library is used for building user interfaces with a component-based architecture?",
      hints: [{ text: "This library uses a virtual DOM to optimize rendering performance.", used: false },
      { text: "Components in this library can be functional or class-based and follow a unidirectional data flow.", used: false },
      { text: "The library's logo is a blue atom, symbolizing its reactive nature.", used: false },],
      len: 5,
      hintNum: 0
    },
    down: {
      text: "What term is used in networking and web development to define the path taken by data packets or the structure of URLs in a web application?",
      hints: [{ text: "In web development, this term defines how requests are handled by mapping URLs to specific handlers or controllers.", used: false },
      { text: " In networking, it refers to the path data packets take from source to destination, often involving routers and IP addresses.", used: false },
      { text: " It's a five-letter word starting with R, commonly used in frameworks like Express.js and React Router.", used: false },],
      len: 5,
      hintNum: 0
    }
  },
  2: {
    right: {
      text: "Which term, derived from Greek, is commonly used to refer to both the branch of medicine dealing with musculoskeletal issues and a shorthand for specialists in this field?",
      hints: [{ text: "This term comes from the Greek word meaning straight or correct.", used: false },
      { text: "It is commonly associated with treating bone, joint, and spine disorders.", used: false },
      { text: "The full term often appears in hospitals as Orthopedic Surgeon or Orthopedist.", used: false },], len: 5, hintNum: 0
    }
  },
  3: {
    right: {
      text: "What is the standard term for the address used to access a resource on the internet?",
      hints: [{ text: "This term refers to a reference or locator used to identify and retrieve resources on a network, often starting with http or https.", used: false },
      { text: "It's a string of characters that specifies the location of a web page or file on the internet, commonly seen in the address bar of a browser.", used: false },
      { text: "It's a three-letter abbreviation, starting with U, that stands for Uniform Resource Locator.", used: false },], len: 3, hintNum: 0
    }
  },
  4: {
    right: {
      text: "What key on a keyboard is used to switch between different open applications or windows?",
      hints: [{ text: "This key, when combined with Alt on Windows or Command on Mac, cycles through open applications.", used: false },
      { text: "It's also used for indentation in text editors and moving between form fields in web browsers.", used: false },
      { text: "The key's name has three letters and sounds like a short form of tablet.", used: false },], len: 3, hintNum: 0
    },
    // down: { text: "Sun rises in the?", answer: "EAST" }
  },
  5: {
    right: {
      text: "What is the term for a system used to send, receive, and store digital messages over the internet?",
      hints: [{ text: "This system uses protocols like SMTP, IMAP, and POP to transmit and retrieve digital messages.", used: false },
      { text: "It allows users to send text, images, and attachments instantly and usually requires an @ symbol in the address.", used: false },
      { text: "The term is a combination of electronic and mail.", used: false },],
      len: 5,
      hintNum: 0
    },
    // down: { text: "Sun rises in the?", answer: "EAST" }
  },
  6: {
    right: {
      text: "What word refers to the process of doing something intentionally or taking action in response to a situation?",
      hints: [{ text: "This word can describe a formal law passed by a government or a conscious decision to do something.", used: false },
      { text: "It's often used to describe what performers do on stage or what a person does when responding to an event.", used: false },
      { text: "It's a three-letter word that starts with A   and means to take action", used: false },],
      len: 3,
      hintNum: 0
    }
  },
  7: {
    down: {
      text: "What is the name of the anonymous network browser used to access the dark web securely?",
      hints: [{ text: "This browser uses a technique called onion routing to conceal a user's identity by encrypting traffic and bouncing it through a series of relays.", used: false },
      { text: "It allows users to access .onion websites and is often associated with secure, anonymous communication over the internet.", used: false },
      { text: "The browser's name is a three-letter acronym standing for The Onion Router.", used: false },],
      len: 3,
      hintNum: 0
    }
  },
  8: {
    down: {
      text: "Which computer component provides temporary storage for data and programs, allowing for fast access and processing but loses its content when power is turned off?",
      hints: [{ text: " This component is a type of volatile memory, meaning its data is lost when the computer is powered off, but it allows quick read and write access for running programs.", used: false },
      { text: "It acts as the computer's short-term memory, temporarily holding data that the CPU needs to access quickly.", used: false },
      { text: " It's a three-letter word starting with R, commonly measured in gigabytes (GB) and crucial for multitasking and performance.", used: false },],
      len: 3,
      hintNum: 0
    }
  }
};
const questions3 = {
  1: {
    right: {
      text: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
      hints: [{ text: "This device transmits voices over long distances without physical presence.", used: false },
      { text: "It can hear through a microphone and speak through a speaker, often used for communication.", used: false },
      { text: "It's a five-letter word, starting with P, and you probably carry it in your pocket every day.", used: false },],
      len: 5,
      hintNum: 0
    },
    down: {
      text: "What is the smallest unit of an image displayed on a screen, often used to measure the resolution of digital images?",
      hints: [{ text: "This tiny element is the fundamental unit of a digital image, representing a single point of color.", used: false },
      { text: "Screen resolution is often described by counting the number of these units, like 1080p or 4K.", used: false },
      { text: "It's a five-letter word starting with P and ends with L, commonly linked to image quality.", used: false },],
      len: 5,
      hintNum: 0
    }
  },
  2: {
    right: {
      text: "What is the term for a visual representation of something, often created digitally or captured by a camera?",
      hints: [{ text: "This can be a digital rendering, a photograph, or a scanned picture, often made up of pixels.", used: false },
      { text: "It is something you might edit using software like Photoshop or view in a gallery app.", used: false },
      { text: "It's a five-letter word starting with I and ending with E, often used to describe pictures or graphics.", used: false },], len: 5, hintNum: 0
    }
  },
  3: {
    right: {
      text: "Which bitwise operation, commonly used in programming, results in true if and only if the number of true inputs is odd?",
      hints: [{ text: "This bitwise operation outputs true when inputs differ — one is true, and the other is false.", used: false },
      { text: "It's short for exclusive or, used in logic gates and binary addition without carry.", used: false },
      { text: "It's a three-letter term starting with X, often symbolized by ^ in many programming languages.", used: false },], len: 3, hintNum: 0
    }
  },
  4: {
    down: {
      text: "A Great Politician, known for his ambitious projects like Make in India and Digital India.",
      hints: [{ text: "Before becoming Prime Minister, he served as the Chief Minister of Gujarat from 2001 to 2014.", used: false },
      { text: " He launched initiatives like Swachh Bharat Abhiyan, Make in India, and Digital India to modernize the country.", used: false },
      { text: "His last name is four letters long, starting with M, and he's been India's Prime Minister since 2014.", used: false },], len: 4, hintNum: 0
    },
    // down: { text: "Sun rises in the?", answer: "EAST" }
  },
  5: {
    right: {
      text: "Which operating system, often favored by developers and system administrators, is known for being highly customizable and having a command-line interface as a core feature?",
      hints: [{ text: "This open-source operating system is based on the Unix kernel and allows users to modify its source code freely.", used: false },
      { text: "It powers many servers, supercomputers, and even Android devices, offering flexibility and control through its terminal.", used: false },
      { text: "It's a five-letter word starting with L, often associated with distros like Ubuntu, Fedora, and Debian.", used: false },],
      len: 5,
      hintNum: 0
    },
    // down: { text: "Sun rises in the?", answer: "EAST" }
  },
  6: {
    down: {
      text: "Which branch of engineering, deals with the design and development of electrical systems, circuits, and electronic devices?",
      hints: [{ text: " This engineering branch focuses on studying electricity, electromagnetism, and their applications in designing circuits and systems.", used: false },
      { text: " It covers areas like power generation, control systems, and microelectronics, often involving both hardware and software.", used: false },
      { text: " It's commonly abbreviated as EEE — standing for Electrical and Electronics Engineering.", used: false },],
      len: 3,
      hintNum: 0
    }
  },
  7: {
    down: {
      text: "What term is used to describe the process of executing a program or script, often initiated by a user or an automated system?",
      hints: [{ text: "This term refers to the process of starting a program or script, allowing the computer to execute its instructions step by step.", used: false },
      { text: "In many programming environments, pressing a play button or typing a command initiates this process, starting the code execution.", used: false },
      { text: "It's a three-letter word starting with R, often used when you  a program to make it work.", used: false },],
      len: 3,
      hintNum: 0
    }
  }
};
const questions4 = {
  1: {
    right: {
      text: "Which device, named after a small rodent, has become essential for navigating graphical user interfaces and often uses a sensor or ball to detect movement?",
      hints: [{ text: "This input device translates hand movements into pointer movements on a screen, often using optical sensors or mechanical balls.", used: false },
      { text: "It typically has buttons for clicking and may include a scroll wheel for navigating documents or web pages.", used: false },
      { text: "It's named after a small animal with a tail, and it's a five-letter word starting with M, used: false }", used: false },],
      len: 5,
      hintNum: 0
    },
    down: {
      text: "What term is used in programming or version control systems to combine changes from different sources into a single, unified version?",
      hints: [{ text: "This operation is crucial in version control systems like Git, often requiring conflict resolution when combining code changes.", used: false },
      { text: "It integrates changes from different branches into a unified branch, ensuring all updates coexist in the codebase.", used: false },
      { text: " It's a five-letter word starting with M that means to combine or join things together.", used: false },],
      len: 5,
      hintNum: 0
    }
  },
  2: {
    right: {
      text: "What is the name of the popular open-source desktop environment used in Linux, known for its user-friendly interface and customization options?",
      hints: [{ text: "This desktop environment follows the GTK toolkit and focuses on simplicity, accessibility, and modern design principles.", used: false },
      { text: "It's the default desktop environment for many Linux distributions, including Fedora and Ubuntu (in certain editions).", used: false },
      { text: " Its name is a five-letter word starting with G, sharing its name with a mythical creature often depicted as a small humanoid figure.", used: false },], len: 4, hintNum: 0
    }
  },
  3: {
    right: {
      text: "What is the reverse word of term which is used to describe the difference between the highest and lowest values in a dataset or a set of numbers?",
      hints: [{ text: " In statistics, this term represents a measure of dispersion, calculated by subtracting the smallest value from the largest value in a dataset.", used: false },
      { text: "It shows how spread out numbers are, helping to understand the variability within a set of data points.", used: false },
      { text: " It's a five-letter word starting with R, often used to describe the span or extent between two points.", used: false },], len: 5, hintNum: 0
    }
  },
  4: {
    down: {
      text: "What Greek letter is commonly used to represent the sum of a series or the sum of a set of numbers in mathematics?",
      hints: [{ text: "This Greek letter is used in mathematics to denote summation, typically written as a large symbol with upper and lower bounds indicating the range of values to add.", used: false },
      { text: "It looks like a stylized E and is often seen in formulas for calculating series, like arithmetic or geometric sums.", used: false },
      { text: "It's a five-letter word starting with S, representing the sum operator in math.", used: false },], len: 5, hintNum: 0
    },
    // down: { text: "Sun rises in the?", answer: "EAST" }
  },
  5: {
    down: {
      text: "What key on a keyboard is used to submit or confirm an action, such as sending a message or executing a command?",
      hints: [{ text: "This key often triggers form submissions or executes commands in terminal interfaces, moving the cursor to a new line in text editors.", used: false },
      { text: " It's sometimes labeled Return on older keyboards and is crucial for confirming inputs or sending messages.", used: false },
      { text: " It's a five-letter word starting with E, usually the largest key on the right side of the main keyboard area.", used: false },],
      len: 5,
      hintNum: 0
    },
    // down: { text: "Sun rises in the?", answer: "EAST" }
  },
  6: {
    right: {
      text: "In computing, what term refers to a storage area used to temporarily hold files or data that are no longer needed?",
      hints: [{ text: "In operating systems, this storage area temporarily holds deleted files, allowing users to restore them if needed.", used: false },
      { text: "On Windows, it's called the Recycle , and on macOS, it's simply the . ", used: false },
      { text: "It's a three-letter word starting with B, often used to describe a container for discarded items, both digitally and physically.", used: false },],
      len: 3,
      hintNum: 0
    }
  }
};
const questions5 = {
  1: {
    right: {
      text: "What term is used to describe a point in a network, where data is sent or received, and can represent either a physical device or a logical entity in systems like graphs or trees?",
      hints: [{ text: "I'm the fundamental element in both tangible communication networks and abstract mathematical structures, often serving as an intersection point where data or connections converge.", used: false },
      { text: "In a computer network, I could be a computer, printer, or router, and in graph theory, I'm the equivalent of a vertex that connects various edges.", used: false },
      { text: "'m the blank in network ___, representing the point where information is sent or received.", used: false },],
      len: 5,
      hintNum: 0
    },
    down: {
      text: "What term refers to written or recorded information, often used as a reminder or reference, and is commonly found in classrooms, meetings, or digital apps?",
      hints: [{ text: "In academic and professional settings, these are often the brief, transcribed reminders or summaries of spoken information, serving as both memory aids and personalized records.", used: false },
      { text: "During lectures, meetings, or while using productivity apps, you might quickly jot these down to capture essential details or ideas.", used: false },
      { text: "They're what you write on a sticky pad or in a digital app to help you remember something important.", used: false },],
      len: 5,
      hintNum: 0
    }
  },
  2: {
    right: {
      text: "What word describes the action of making something accessible or starting a process, such as a door, a file, or a meeting?",
      hints: [{ text: "In computing and physical contexts alike, this term denotes the initiation of a process or the transition from being inaccessible to available, serving as a command or an action that removes a barrier.", used: false },
      { text: "You might perform this action with a door, a computer file, or even a meeting to begin your interaction with it.", used: false },
      { text: " It's what you do when you unlock a door.", used: false },], len: 5, hintNum: 0
    }
  },
  3: {
    right: {
      text: "What popular beverage, originating from East Asia, is made by steeping dried leaves in hot water and is known for its various types such as black, green, and herbal?",
      hints: [{ text: "In Eastern traditions, this infusion is celebrated for its ritualistic preparation, where the degree of oxidation of its leaves creates a spectrum from non-fermented to fully fermented varieties.", used: false },
      { text: "This beverage is prepared by steeping dried leaves in hot water, and its common types include varieties that differ based on processing methods, like those that remain green versus those that darken.", used: false },
      { text: " It's the drink you might have with a biscuit, made from steeping leaves in hot water.", used: false },], len: 3, hintNum: 0
    }
  },
  4: {
    right: {
      text: "In computer programming, what term describes an unintended mistake in code that leads to incorrect or unexpected behavior during program execution?",
      hints: [{ text: "This term, popularized by a famous incident involving an actual insect in a computer, now represents any unintended flaw in code that disrupts expected behavior.", used: false },
      { text: "Programmers spend hours hunting for these issues, and the process of eliminating them is commonly known as debugging.", used: false },
      { text: "IWhen your program isn't working, you often say there's a ______ in the code.", used: false },], len: 5, hintNum: 0
    }
    // down: { text: "Sun rises in the?", answer: "EAST" }
  },
  5: {
    right: {
      text: "What common mineral, composed primarily of sodium chloride, is essential for human health, enhances the flavor of food, and has been historically valuable for preserving food?",
      hints: [{ text: "Historically so valuable that it was once used as payment—its Latin root is even linked to the word salary—this mineral is crucial for maintaining electrolyte balance in the human body.", used: false },
      { text: "Composed primarily of sodium chloride, it's not only essential for health but also enhances flavor and was widely used in food preservation before modern refrigeration.", used: false },
      { text: "It's what you might sprinkle on your fries to add flavor.", used: false },],
      len: 4,
      hintNum: 0
    }
  },
  6: {
    down: {
      text: "What term refers to a dramatic art form that combines singing, orchestral music, acting, and sometimes dance, typically performed in an opera house?",
      hints: [{ text: "This dramatic tradition, which originated in Italy, blends extended vocal solos, intricate ensemble pieces, and orchestral interludes to tell epic stories through music and movement.", used: false },
      { text: "Performers in this art form convey the narrative entirely through song and acting, often enhanced by elaborate sets and costumes in grand venues.", used: false },
      { text: "It's the show you see in an opera house, featuring famous works like La Bohème and The Magic Flute.", used: false },],
      len: 5,
      hintNum: 0
    }
  },
  7: {
    right: {
      text: "I am found on a keyboard, often used as a shortcut modifier, and can help you navigate menus without a mouse. What am I?",
      hints: [{ text: "This key, abbreviated from alternate, has its origins in early computer design and, when combined with other keys, grants access to a variety of hidden system commands and extended functionalities.", used: false },
      { text: "I am a modifier key often paired with other keys to perform shortcuts.", used: false },
      { text: "I am used with Tab to quickly change between windows.", used: false },],
      len: 3,
      hintNum: 0
    }
  },
  8: {
    down: {
      text: "What is the common, four-letter salutation used at the beginning of formal and affectionate letters?",
      hints: [{ text: "Historically used in epistolary traditions, this four-letter word connotes both respect and familiarity, setting the tone for the rest of a written message.", used: false },
      { text: "You'll often see this word at the beginning of a letter, as in John or ______ Madam, indicating a polite address.", used: false },
      { text: "It's the word you use to start a letter when you say Dear John.", used: false },],
      len: 5,
      hintNum: 0
    }
  },
  9: {
    right: {
      text: "What is the two-letter coordinating conjunction used to indicate alternatives, as in this ___ that?",
      hints: [{ text: "In Boolean algebra, this operator appears in expressions like A ___ B, where the outcome is true if either A, B, or both are true, reflecting the principle of inclusive disjunction.", used: false },
      { text: "This two-letter word serves as a logical connector in programming and everyday language, linking alternatives as seen in the phrase this ___ that", used: false },
      { text: "It's the word you put between two options when you're deciding between them, like this or that.", used: false },],
      len: 2,
      hintNum: 0
    }
  },

};


export { crossGrid1, crossGrid2, crossGrid3, crossGrid4, crossGrid5, questions1, questions2, questions3, questions4, questions5 };