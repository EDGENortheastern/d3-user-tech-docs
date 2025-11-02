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
                        { name: "Empathy Maps", color: colours.green[3] },
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
                            name: "Functional Requirements Spec",
                            color: colours.green[3]
                        },
                        {
                            name: "Non-Functional Requirements",
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
                            color: colours.green[3]
                        },
                        {
                            name: "Data Flow Diagram",
                            color: colours.green[3]
                        },
                        {
                            name: "Component Diagram",
                            color: colours.green[3]
                        }
                    ]
                },
                {
                    name: "Code Documentation",
                    color: colours.green[1],
                    children: [
                        { name: "Code Comments", color: colours.green[3] },
                        {
                            name: "Python Docstrings",
                            color: colours.green[3]
                        },
                        { name: "READMEs", color: colours.green[3] },
                        { name: "Versioning & Changelog", color: colours.green[3] }
                    ]
                },
                {
                    name: "Testing Documentation",
                    color: colours.green[1],
                    children: [
                        {
                            name: "Test Plan",
                            color: colours.green[3]
                        },
                        {
                            name: "Test Strategy",
                            color: colours.green[3]
                        },
                        {
                            name: "Test Scenario",
                            color: colours.green[3]
                        },
                        {
                            name: "Bug Report",
                            color: colours.green[3]
                        }
                    ]
                }
            ]
        }
    ]
};
window.colours = colours;
window.documentation = documentation;