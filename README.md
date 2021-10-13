# Slack-Baked

A simple programming language written in JavaScript and Jison

## Installation

1. Clone repo
```bash
    git clone https://github.com/vladimka/slack-baked
```
2. Go to the cloned repo directory and install npm modules (you must have node and npm installed)
```bash
    cd slack-baked
    npm i
```
3. Build
```bash
    gulp build
```
4. Write code and save it in `program.txt`
```
a = 1
b = 2
c = a < b
print("Hello World", a, b, c)
```
5. Run!
```bash
    node dist/interpreter program.txt
```