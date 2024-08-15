# Assignment FullStack Developer Intern HiColleagues

This repository is part of a programming assignment for the internship selection at HiColleagues. The project consists of two study cases that demonstrate fundamental programming concepts.

<div align="center">
  <img alt="Screenshot" src="https://raw.githubusercontent.com/overdoshit/study-case-hicolleagues/master/assets/images/Screenshot.png">
</div>

## Table of Contents
- [Assignment FullStack Developer Intern HiColleagues](#assignment-fullstack-developer-intern-hicolleagues)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [Contact](#contact)

## Features
This project includes two study cases:
- **Study Case 1**: Generates a inverted half pyramid pattern. If the row is even, each number is replaced with "+".
- **Study Case 2**: Generates a half pyramid pattern. If the number is even, it is replaced with "+".

These functions are implemented in **JavaScript**.

## Installation
To clone and run this application locally, you'll need `Git` and `Node.js` (which includes `npm`) installed on your computer.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/overdoshit/study-case-hicolleagues.git

# Go into the repository
$ cd study-case-hicolleagues

# Install dependencies
$ npm install
```

## Usage
You can try the project directly without installation by visiting:
https://overdoshit.github.io/study-case-hicolleagues/

To generate the patterns locally, you can run the following command:
```bash
$ npm start
```

This will execute the `studyCase1` and `studyCase2` functions with predefined input in `main.js` and display the output directly in the console.
Alternatively, you can open `index.html` in your browser.

## Testing
This project includes unit tests using Jest. To run the tests, use the following command:
```bash
$ npm test
```
Example output:
```bash
> study-case-hicolleagues@1.0.0 test
> jest --coverage

 PASS  ./main.test.js
  Study Case 1
    √ Testing study case 1 for n = 5 (4 ms)
  Study Case 2
    √ Testing study case 2 for n = 5 (3 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |     87.5 |     100 |     100 | 
 main.js  |     100 |     87.5 |     100 |     100 | 47
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.123 s, estimated 2 s
Ran all test suites.
```

## Deployment
This project is deployed using **Github Pages**.

## Contact
For any inquiries or issues, please contact at <a href="mailto:faiz.kurnicloud@gmail.com" target="_blank">Faiz Kurniawan<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Inbox%20Tray.webp" alt="Inbox Tray" width="25" height="25"/></a>
