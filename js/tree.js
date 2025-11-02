// js/tree.js — unclipped, smooth, starts collapsed to a chosen depth
(function () {
    const svg = d3.select("#doc-tree");
    const WIDTH = +svg.attr("width");
    const HEIGHT = +svg.attr("height");

    // Real margins so labels never hit edges
    const M = { top: 120, right: 220, bottom: 80, left: 220 };

    // Inner drawing area
    const IW = WIDTH - M.left - M.right;
    const IH = HEIGHT - M.top - M.bottom;

    // How many levels to show initially: 0 = only root, 1 = root + children, 2 = + grandchildren, etc.
    const INITIAL_DEPTH = 1;

    // Root group translated by margins
    const g = svg.append("g").attr("transform", `translate(${M.left},${M.top})`);

    // Horizontal tree within the inner box
    const treeLayout = d3.tree().size([IH, IW]);

    // Data
    let root = d3.hierarchy(window.documentation);
    root.x0 = IH / 2;
    root.y0 = 0;

    // Collapse everything, then open to INITIAL_DEPTH
    collapseAll(root);
    expandToDepth(root, INITIAL_DEPTH);

    let i = 0;
    update(root);

    function collapseAll(node) {
        if (!node) return;
        if (node.children) {
            node._children = node.children;
            node._children.forEach(collapseAll);
            node.children = null;
        } else if (node._children) {
            node._children.forEach(collapseAll);
        }
    }

    function expandToDepth(node, depth) {
        if (!node) return;
        if (depth > 0 && node._children) {
            node.children = node._children;
            node._children = null;
        }
        const kids = node.children || [];
        kids.forEach(child => expandToDepth(child, depth - 1));
    }

    function toggle(d) {
        if (d.children) { d._children = d.children; d.children = null; }
        else { d.children = d._children; d._children = null; }
    }

    function update(source) {
        // Compute layout
        treeLayout(root);

        // Curved horizontal links
        const linkGen = d3.linkHorizontal().x(d => d.y).y(d => d.x);

        // ----- LINKS -----
        const linksSel = g.selectAll("path.link")
            .data(root.links(), d => d.target.id);

        const linkEnter = linksSel.enter()
            .insert("path", "g")
            .attr("class", "link")
            .attr("fill", "none")
            .attr("stroke", "#ccc")
            .attr("stroke-width", 2)
            .attr("d", _ => linkGen({ source: { x: source.x0, y: source.y0 }, target: { x: source.x0, y: source.y0 } }));

        linkEnter.merge(linksSel)
            .transition().duration(750).ease(d3.easeCubicInOut)
            .attr("d", d => linkGen({ source: d.source, target: d.target }));

        linksSel.exit()
            .transition().duration(750)
            .attr("d", _ => linkGen({ source: { x: source.x, y: source.y }, target: { x: source.x, y: source.y } }))
            .remove();

        // ----- NODES -----
        const nodesSel = g.selectAll("g.node")
            .data(root.descendants(), d => d.id || (d.id = ++i));

        const nodeEnter = nodesSel.enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", _ => `translate(${source.y0},${source.x0})`)
            .on("click", (event, d) => { toggle(d); update(d); });

        nodeEnter.append("circle")
            .attr("r", 1e-6)
            .attr("stroke", d => d.data.color || "#888")
            .attr("fill", d => d._children ? (d.data.color || "#fff") : "#fff");

        nodeEnter.append("text")
            .attr("dy", ".35em")
            .attr("x", d => (d.children || d._children) ? -14 : 14)
            .attr("text-anchor", d => (d.children || d._children) ? "end" : "start")
            .style("fill-opacity", 1e-6)
            .text(d => d.data.name);

        const nodeUpdate = nodeEnter.merge(nodesSel);

        nodeUpdate.transition()
            .duration(750).ease(d3.easeCubicInOut)
            .attr("transform", d => `translate(${d.y},${d.x})`);

        nodeUpdate.select("circle")
            .attr("r", 7)
            .attr("fill", d => d._children ? (d.data.color || "#fff") : "#fff")
            .attr("stroke", d => d.data.color || "#888");

        nodeUpdate.select("text")
            .transition().duration(600)
            .style("fill-opacity", 1);

        nodesSel.exit()
            .transition().duration(750)
            .attr("transform", _ => `translate(${source.y},${source.x})`)
            .remove();

        // Stash positions for next transition
        root.each(d => { d.x0 = d.x; d.y0 = d.y; });
    }
})();
