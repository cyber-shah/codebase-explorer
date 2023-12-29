import * as d3 from "d3";
import React, { useRef, useEffect } from "react";

export default function LinePlot({
  data,
}) {

  const ref = useRef();

  useEffect(() => {
    // width of the svg
    const width = 928;

    // tells d3 to use the data as a hierarchy and to use the dir_children property for the children
    const root = d3.hierarchy(data, d => d.dir_children);

    // set the width between nodes
    const dx = 150;
    const dy = 20;

    // Create a tree layout.
    const tree = d3.tree().nodeSize([dy, dx]);

    // Sort the tree and apply the layout.
    root.sort((a, b) => d3.ascending(a.data.name, b.data.name));
    tree(root);

    // Compute the extent of the tree. Note that x and y are swapped here
    // because in the tree layout, x is the breadth, but when displayed, the
    // tree extends right rather than down.
    let x0 = Infinity;
    let x1 = -x0;
    root.each(d => {
      if (d.x > x1) x1 = d.x;
      if (d.x < x0) x0 = d.x;
    });

    // Compute the adjusted height of the tree.
    const height = x1 - x0 + dx * 2;

    const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-dy / 3, x0 - dx, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

    const link = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-opacity", 0.4)
      .attr("stroke-width", 1.5)
      .selectAll()
      .data(root.links())
      .join("path")
      .attr("d", d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x));

    const node = svg.append("g")
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
      .selectAll()
      .data(root.descendants())
      .join("g")
      .attr("transform", d => `translate(${d.y},${d.x})`);

    node.append("circle")
      .attr("fill", d => d.dir_children ? "#555" : "#999")
      .attr("r", 2.5);

    node.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d.dir_children ? -6 : 6)
      .attr("text-anchor", d => d.dir_children ? "end" : "start")
      .text(d => d.data.name)
      .clone(true).lower()
      .attr("stroke", "white");

    d3.select(ref.current).node().appendChild(svg.node());
    // Return a cleanup function that removes the SVG.
    return () => {
      d3.select(ref.current).selectAll("svg").remove();
    };
  }, []);


  return <div ref={ref}></div>;

}
