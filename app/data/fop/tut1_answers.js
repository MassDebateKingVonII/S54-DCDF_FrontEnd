const answers = [
  {
    number: "Q1)",
    type: "code",
    parts: [
      {
        label: "(a)",
        code: `console.log(\`The quick brown fox
    jumps over the
lazy dog\`);`
      },
      {
        label: "(b)",
        code: `console.log(\` ____
/.  .\\
| \\/ |
\\____/
\`);`
      },
      {
        label: "(c)",
        code: `console.log("I've tried so hard and got so far and in the end it doesn't even matter.");`
      }
    ]
  },
  {
    number: "Q2)",
    type: "table",
    headers: ["Variable Name", "Valid / Invalid", "Reason(s)"],
    rows: [
      ["n@m3", "Invalid", "Has @"],
      ["while", "Invalid", "Reserved keyword"],
      ["1234Hi5", "Invalid", "Cannot start with number"],
      ["$I I$", "Valid", "Can start with $"],
      ["P0ck3t", "Valid", "Starts with a letter"],
      ["Mr. Molly", "Invalid", "Cannot have space and '.'"],
      ["switch", "Invalid", "Reserved Keyword"],
      ["_MannerMakesMan", "Valid", "Can start with _"]
    ]
  },
  {
    number: "Q3)",
    type: "table",
    headers: ["Category", "Data Types"],
    rows: [
      ["(a) Mailing Address", "String"],
      ["(b) Body Mass Index (BMI)", "Float"],
      ["(c) Credit Card Number (16 digits)", "Number"],
      ["(d) Is a year a leap year", "Boolean"],
      ["(e) Amount of Water in Water Bottle", "Number"],
      ["(f) Does password contain at least 8 characters", "Boolean"],
      ["(g) Movie Title & Director", "String"],
      ["(h) Year Published of a Book", "Number"]
    ]
  },
  {
    number: "Q4)",
    type: "table",
    headers: ["", "Program", "Output"],
    colWidths: ["w-10", "w-70", "w-20"],
    rows: [
      ["(a)", "let x = 4;\nx = 5;\nconsole.log(x);", "5"],
      ["(b)", "let x, y;\nx = 5;\ny = x;\nconsole.log(y);", "5"],
      ["(c)", "let x, y;\ny = x;\nconsole.log(y);", "undefined"],
      ["(d)", "let x, y, z;\nz = 2;\ny = z;\nx = y;\nconsole.log('z');", "z"]
    ]
  },
  {
    number: "Q5)",
    type: "table",
    headers: ["", "Program", "Output"],
    colWidths: ["w-10", "w-70", "w-20"],
    rows: [
      ["(a)", "let x = 4;\nlet x1 = 5;\nconsole.log(x);", "25\n35"],
      ["(b)", "let boys, girls;\nboys = 25;\ngirls = 35;\nconsole.log(boys);\nconsole.log(girls);", "5"],
      ["(c)", "let x, y;\ny = x;\nconsole.log(y);", "undefined"],
      ["(d)", "let x, y, z;\nz = 2;\ny = z;\nx = y;\nconsole.log('z');", "z"]
    ]
  },
  {
    number: "Q6)",
    type: "code",
    code: `console.log(\`Module Code\\Name: ST0523\\"Fundamentals of Programming"
CA 1 : 40%
CA 2 : 20%
EXAM : 40%
Total---------->:100%\`);`
  }
];

export default answers;
