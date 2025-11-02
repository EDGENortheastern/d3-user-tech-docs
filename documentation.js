const colours = {
    peach: ["#faae80", "#f79868", "#f58552", "#e46225", "#d74b19"],
    yellow: ["#ffe1a5", "#ffd580", "#fec54c", "#fdb737", "#e2a854"],
    green: ["#bfe2c6", "#98d1b5", "#609f80", "#045944", "#1b4538"],
    blue: ["#c8eaf7", "#a3dcec", "#62b6d0", "#2d7496", "#0d3353"]
};
// documentation hierarchy data for D3 tree visualisation
const documentation = {
    name: "Documentation",
    children: [
        {
            name: "User Documentation",
            color: colours.peach[4],
            children: [
                { name: "Quick Start Guide", color: colours.peach[2] },
                { name: "Installation Manual", color: colours.peach[2] },
                { name: "FAQs", color: colours.peach[2] },
                { name: "Troubleshooting Guide", color: colours.peach[2] }
            ]
        },
        {
            name: "Technical Documentation",
            color: colours.green[2],
            children: [
                {
                    name: "Ideation Documentation",
                    color: colours.green[1],
                    children: [
                        { name: "Post-it Boards", color: colours.green[3] },
                        { name: "Mind Maps", color: colours.green[3] }
                    ]
                },
                {
                    name: "Design Documentation",
                    color: colours.green[1],
                    children: [
                        { name: "UX Maps", color: colours.green[3] },
                        { name: "User Personas", color: colours.green[3] },
                        { name: "Wireframes", color: colours.green[3] },
                        { name: "Prototypes", color: colours.green[3] }
                    ]
                },
                {
                    name: "Requirements",
                    color: colours.green[1],
                    children: [
                        {
                            name: "FRS: Functional Requirements Specification",
                            color: colours.green[3]
                        },
                        {
                            name: "NFRS: Non-Functional Requirements Specification",
                            color: colours.green[3]
                        },
                        { name: "User Stories", color: colours.green[3] }
                    ]
                },
                {
                    name: "Architecture Diagrams",
                    color: colours.green[1],
                    children: [
                        {
                            name: "Sequence Diagram",
                            color: colours.green[0],
                            children: [
                                {
                                    name: "Shows how different parts of a system interact over time",
                                    color: colours.green[4]
                                },
                                {
                                    name: "Boxes represent actors and objects, with arrows showing messages",
                                    color: colours.green[3]
                                }
                            ]
                        },
                        {
                            name: "Data Flow Diagram",
                            color: colours.green[0],
                            children: [
                                {
                                    name: "Shows how data moves through a system",
                                    color: colours.green[4]
                                },
                                {
                                    name: "Arrows represent the direction of data flow",
                                    color: colours.green[3]
                                }
                            ]
                        },
                        {
                            name: "Component Diagram",
                            color: colours.green[0],
                            children: [
                                {
                                    name: "Depicts software organised into independent modules or components",
                                    color: colours.green[4]
                                },
                                {
                                    name: "Boxes show components and lines show interfaces and dependencies",
                                    color: colours.green[3]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Code Documentation",
                    color: colours.green[1],
                    children: [
                        { name: "Code Comments", color: colours.green[3] },
                        {
                            name: "Python Docstrings, JSDoc, JavaDoc",
                            color: colours.green[0],
                            children: [
                                {
                                    name: "Provide structured descriptions of functions, classes, and methods",
                                    color: colours.green[3]
                                },
                                {
                                    name: "Help developers understand purpose, parameters, and return values",
                                    color: colours.green[3]
                                }
                            ]
                        },
                        { name: "README Files", color: colours.green[3] },
                        { name: "Versioning & Changelog", color: colours.green[3] }
                    ]
                },
                {
                    name: "Testing Documentation",
                    color: colours.green[1],
                    children: [
                        {
                            name: "Test Plan",
                            color: colours.green[0],
                            children: [
                                {
                                    name: "Defines what will be tested, how, and by whom",
                                    color: colours.green[3]
                                },
                                {
                                    name: "Outlines overall objectives, scope, resources, and schedule",
                                    color: colours.green[3]
                                }
                            ]
                        },
                        {
                            name: "Test Strategy",
                            color: colours.green[0],
                            children: [
                                {
                                    name: "Describes the approach to testing at a high level",
                                    color: colours.green[3]
                                },
                                {
                                    name: "Covers testing levels, environments, tools, and quality criteria",
                                    color: colours.green[3]
                                }
                            ]
                        },
                        {
                            name: "Test Scenario",
                            color: colours.green[0],
                            children: [
                                {
                                    name: "Describes an end-to-end user behaviour to be validated",
                                    color: colours.green[3]
                                },
                                {
                                    name: "Broader than a single test case",
                                    color: colours.green[3]
                                }
                            ]
                        },
                        {
                            name: "Bug Report",
                            color: colours.green[0],
                            children: [
                                {
                                    name: "Records identified issues with reproduction steps and severity",
                                    color: colours.green[3]
                                },
                                {
                                    name: "Often managed in tools such as Jira or GitHub Issues",
                                    color: colours.green[3]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
