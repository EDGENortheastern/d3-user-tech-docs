# Documentation Hierarchy Visualiser

## Description

An interactive D3.js visualisation that maps different types of documentation used in software development.

## User Documentation

The documentation tree is an interactive diagram that helps you explore topics visually. Each bubble represents a section of the documentation.

When you click [the live link](https://edgenortheastern.github.io/d3-user-tech-docs/), you will see the initial hierarchy diagram, as shown below in Figure 1.

![Documentation Hierarchy Visualiser](d3-user-doc-start.png)
**Figure 1: Starting hierarchy diagram**

### Exploring the Diagram

- Click any node to expand or collapse its related sections

- Hover over nodes to focus visually on a specific branch

- Use your browser zoom if the layout appears too small on your screen

- Colours are used to distinguish major documentation groups (user, design, testing and so on).

![Documentation Hierarchy Visualiser](d3-user-docs-end.png)
**Figure 2: Partially expanded hierarchy diagram**

## Technical Documentation

### Overview

The Documentation Hierarchy Visualiser is built with [D3.js (Data-Driven Documents)](https://d3js.org/), a JavaScript library that manipulates the Document Object Model (DOM) based on data.

In this project, D3 dynamically converts a hierarchical JavaScript object (window.documentation) into an interactive, animated tree diagram. This visualisation is a [D3.js Tree Layout](https://d3js.org/d3-hierarchy/tree), part of D3’s [hierarchy module](https://d3js.org/d3-hierarchy). It uses the `d3.tree()` function to generate a node-link diagram of hierarchical data, where each node is connected to its parent by a path.

The diagram reads its hierarchical structure from a JavaScript object named `window.documentation`, which is defined in the `documentation.js` file.

D3 converts this object into a hierarchy using:

```js
let root = d3.hierarchy(window.documentation);
```
