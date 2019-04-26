# Kuvera sudoku

## Project overview
A reusable Vue.js sudoku component.

## Features
- Play Sudoku with configurable lives
- Responsive

## Overview Video Link
[Visit video link](https://youtu.be/1exRJoPMXEc)

## Demo Link
[Visit demo link](https://kuvera-sudoku.firebaseapp.com)

## Component
```
<sudoku
  :values="[
    { o: '4' }, // o -> original/true value
    { o: '3', default: true }, // default -> show this value on dom as hint
    { o: '2', default: true },
    { o: '1', default: true }
  ],
  [
    { o: '1', default: true },
    { o: '2', default: true },
    { o: '3' },
    { o: '4', default: true }
  ],
  [
    { o: '3', default: true },
    { o: '4', default: true },
    { o: '1', default: true },
    { o: '2' }
  ],
  [
    { o: '2', default: true },
    { o: '1' },
    { o: '4', default: true },
    { o: '3', default: true }
  ]"
  :matrix="2"
  :updateFunc="function () { // do something on updatation of values in sukodu }"
  :mistakesAllowed="2"
/>
```

###### Build Setup

```
# install dependencies & run on local server with hot reload at: localhost:8080
$ npm i
$ npm run dev
```
