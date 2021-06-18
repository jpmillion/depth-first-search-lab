function depthFirstSearch(root, vertices, edges) {
    const stack = [root];
    root.discovered = true;
    const dps = [];
    while (stack.length) {
        const node = stack.pop();
        dps.push(node); 
        for (const edge of edges) {
            const [v1, v2] = edge;
            if (v1 === node.name) {
                const vertex = vertices.find(v => v.name === v2);
                !vertex.discovered && stack.push(vertex);
                vertex.discovered = true;
            } else if (v2 === node.name) {
                const vertex = vertices.find(v => v.name === v1);
                !vertex.discovered && stack.push(vertex);
                vertex.discovered = true;
            }
        }
    }
    return dps;
}