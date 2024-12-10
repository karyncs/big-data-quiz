export const quizData = [
    {
      id: 1,
      question: "What is the goal of the Entity-Relationship (ER) model?",
      options: [
        "Representing data in tabular form",
        "Creating graphic models",
        "Organizing data in a list",
        "Creating 3D models",
      ],
      correctAnswer: "Representing data in tabular form",
    },
    {
      id: 2,
      question: "What is a data mart?",
      options: [
        "An operating system",
        "A mobile application",
        "A repository of consolidated data for analysis",
        "A developing language",
      ],
      correctAnswer: "A repository of consolidated data for analysis",
    },
    {
      id: 3,
      question: "What does a dimension represent in a data warehouse?",
      options: [
        "A measure",
        "A category of data",
        "An operating system",
        "An user interface",
      ],
      correctAnswer: "A category of data",
    },
    {
      id: 4,
      question: "What is a star schema in a data warehouse?",
      options: [
        "A type of star-shaped diagram",
        "A model for organizing data",
        "A programming language",
        "A type of operating system",
      ],
      correctAnswer: "A model for organizing data",
    },
    {
      id: 5,
      question: 'What does a "many to many" relationship indicate in a database?',
      options: [
        "A relationship between two tables where many records in the primary table can be associated with many records in the secondary table",
        "A one-to-many relationship",
        "A many-to-one relationship",
        "A hierarchical relationship",
      ],
      correctAnswer:
        "A relationship between two tables where many records in the primary table can be associated with many records in the secondary table",
    },
    {
      id: 6,
      question: "What is a snowflake schema in a data warehouse?",
      options: [
        "A type of hierarchical schema",
        "A model for organizing data with normalized tables, the most efficient model [regarding storage space]",
        "A column-based model",
        "A programming language",
      ],
      correctAnswer:
        "A model for organizing data with normalized tables, the most efficient model [regarding storage space]",
    },
    {
      id: 7,
      question: "What is a foreign key in a relational database?",
      options: [
        "A field that uniquely identifies a row in a table",
        "A field that cannot have duplicate values",
        "A column that references the primary key of another table",
        "An index on the secondary table",
      ],
      correctAnswer: "A column that references the primary key of another table",
    },
    {
      id: 8,
      question: "What is a measure in a business intelligence context?",
      options: [
        "A category of data",
        "A numeric field",
        "A database table",
        "A relationship between tables",
      ],
      correctAnswer: "A numeric field",
    },
    {
      id: 9,
      question: "In QLIK, the drill dimension:",
      options: [
        "Doesn't exist",
        "Is a dimension composed of 2, 3 or more fields",
        "Is a dimension suitable for creating pivot tables",
        "Is a time dimension",
      ],
      correctAnswer: "Is a dimension composed of 2, 3 or more fields",
    },
    {
      id: 10,
      question: 'What does the term "cardinality" mean in a database context?',
      options: [
        "Data quality",
        "The number of rows in a table [the number of records]",
        "The number of columns in a table",
        "Data access speed",
      ],
      correctAnswer: "The number of rows in a table [the number of records]",
    },
    {
      id: 11,
      question:
        "Describe the difference between a 'fact table' and a 'dimension table' in a multidimensional model [star schema].",
      options: [
        "A fact table contains numerical measures, while a dimension table contains descriptive attributes",
        "A fact table contains descriptive attributes, while a dimension table contains numerical measures",
        "Fact table and dimension table are synonyms",
        "Both tables contain only numerical measures",
      ],
      correctAnswer:
        "A fact table contains numerical measures, while a dimension table contains descriptive attributes",
    },
    {
      id: 12,
      question: "What is Data Mining in BI software?",
      options: [
        "A type of hierarchical schema",
        "A model for organizing data with normalized tables",
        "A type of star schema",
        "A set of statistical methods that extract information from large quantities of data",
      ],
      correctAnswer:
        "A set of statistical methods that extract information from large quantities of data",
    },
    {
      id: 13,
      question: "ETL is useful for example for:",
      options: [
        "Cleaning, filtering and deleting records, calculating new measures",
        "Only Cleaning, filtering, deleting records",
        "Only calculating new measures",
        "Filtering and calculating new measures",
      ],
      correctAnswer: "Cleaning, filtering and deleting records, calculating new measures",
    },
    {
      id: 14,
      question: "The ETL process is a part of the:",
      options: [
        "Backend level of the BI platform",
        "Front end level of the BI platform",
        "Reporting of the BI platform",
        "OLAP analysis of the BI platform",
      ],
      correctAnswer: "Backend level of the BI platform",
    },
    {
      id: 15,
      question: "Some words that identify BIG DATA are:",
      options: [
        "Volume, variety, speed",
        "Speed, key, variety",
        "Volume, speed, key",
        "Volume, variety, consistency",
      ],
      correctAnswer: "Volume, variety, speed",
    },
    {
      id: 16,
      question: "In a relational database (RDB), the key concepts are:",
      options: [
        "Entities, key, joins",
        "Tables, keys",
        "Entities and Data Visualization",
        "Dimensions & Misures",
      ],
      correctAnswer: "Entities, key, joins",
    },
    {
      id: 17,
      question: "Which statement is correct?",
      options: [
        "Prescriptive analytics is based on simple formulas",
        "Descriptive analytics is a step after predictive analytics",
        "Predictive analytics is a step after descriptive analytics",
        "Predictive analytics is a step after prescriptive analytics",
      ],
      correctAnswer: "Predictive analytics is a step after descriptive analytics",
    },
    {
      id: 18,
      question: "A data mart is a:",
      options: [
        "The backup system of a company",
        "A part of an ERP software",
        "A data warehouse",
        "Data warehouse focused on a specific functional area",
      ],
      correctAnswer: "Data warehouse focused on a specific functional area",
    },
    {
      id: 19,
      question: "Business Intelligence means:",
      options: [
        "An integrated information system to transform decisions into useful information for selling",
        "An integrated information system to transform information into data useful to decide",
        "A business strategy intended to measure the strategies through KPI",
        "An integrated information system to transform data into useful information to decide",
      ],
      correctAnswer: "An integrated information system to transform data into useful information to decide",
    },
    {
      id: 20,
      question: "Which are market leaders in Business Intelligence (BI), according to Gartner?",
      options: [
        "SAP & Microsoft",
        "QLIK & Microsoft & Team Systems",
        "QLIK & Tableau & Microsoft & Google",
        "Oracle & Tableau",
      ],
      correctAnswer: "QLIK & Tableau & Microsoft & Google",
    },
    {
      id: 21,
      question: "The star schema is a classic data model used:",
      options: [
        "In ERP software",
        "In OLTP software",
        "In statistical models",
        "In the design of data warehouses",
      ],
      correctAnswer: "In the design of data warehouses",
    },
    {
      id: 22,
      question: "Using QLIK SENSE, you can:",
      options: [
        "Share the report with any user who has a QLIK account",
        "Save and export your report with data and also export to PDF",
        "Only export to PDF format",
        "Save and put into SQL database",
      ],
      correctAnswer: "Save and export your report with data and also export to PDF",
    },
    {
      id: 23,
      question: "The measures (metrics) of the Profit & Loss statement are:",
      options: [
        "Semi-additive",
        "Additive costs, non-additive revenues",
        "Additives",
        "Not additive",
      ],
      correctAnswer: "Additives",
    },
    {
      id: 24,
      question: "The Unit Price is a measure:",
      options: [
        "Semi-additive",
        "Blended",
        "Additives",
        "Not additive",
      ],
      correctAnswer: "Not additive",
    },
    {
      id: 25,
      question: "In the drill dimension in QLIK, you can:",
      options: [
        "Use 2 or more fields, typically choosing descriptive data",
        "Use 2 or more fields, typically choosing numeric data",
        "Use 2 or more fields, choosing only fields of the same dimension (e.g., CUSTOMER)",
        "Use 2 fields, typically choosing descriptive data",
      ],
      correctAnswer: "Use 2 or more fields, typically choosing descriptive data",
    },
    {
      id: 26,
      question: "Google Looker:",
      options: [
        "Is a local application (on your PC)",
        "Is a full Cloud Application",
        "Is a client/server application Financial Software",
        "Is a full WEB Application",
      ],
      correctAnswer: "Is a full Cloud Application",
    },
  ];