import * as d3 from "d3";
import React, { useRef, useEffect } from "react";


const drag = simulation => {
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
}


const createSVG = ((props) => { });


export default function LinePlot(props) {

  const ref = useRef();

  useEffect(() => {
    // ------------------------ SVG SETUP ------------------------
    // width of the svg
    const width = 1500;
    // tells d3 to use the data as a hierarchy and to use the dir_children property for the children
    const root = d3.hierarchy(props.data, d => d.dir_children);
    // set the width between nodes
    const dx = props.dx ? props.dx : 150;
    const dy = props.dy ? props.dy : 20;
    // Create a tree layout.
    const tree = d3.tree().nodeSize([dy, dx]);
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

    // create the svg
    const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-dy / 3, x0 - dx, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 12px sans-serif;");
    // ------------------------ SVG SETUP ------------------------

    // link is the connection between nodes
    // TODO: learn how this works
    const link = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", props.linkColor)
      .attr("stroke-opacity", props.strokeOpacity ? props.strokeOpacity : 0.4)
      .attr("stroke-width", props.strokeWidth ? props.strokeWidth : 1.5)
      .selectAll()
      .data(root.links())
      .join("path")
      .attr("d", d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x));

    // ------------------ NODE --------------------------
    const node = svg.append("g")
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
      .selectAll()
      .data(root.descendants())
      .join("g")
      .attr("transform", d => `translate(${d.y},${d.x})`);

    node.append("circle")
      .attr("fill", props.nodeColor)
      .attr("r", props.nodeSize);

    var text = node.append("text")
      .attr("x", d => d.dir_children ? -6 : 6)
      .attr("text-anchor", d => d.dir_children ? "end" : "start")
      .text(d => d.data.name);
    var textHeight = text.node().getBBox().height;
    text.attr("dy", textHeight / 2)
      .attr("font-size", `${props.textSize}px`);
    // ------------------ NODE --------------------------

    d3.select(ref.current).node().appendChild(svg.node());
    //  Return a cleanup function that removes the SVG.
    return () => {
      d3.select(ref.current).selectAll("svg").remove();
    };

  }, [props]);


  return <div style={{ overflow: 'auto' }} ref={ref}></div>;
}
