'use client'
import React, { useEffect, useRef } from "react";
import * as d3 from 'd3'

interface Device {
  name: string;
}

interface Data {
  gateway: {
    name: string;
  };
  devices: Device[];
}

const NetworkDiagram = ({ data }: { data: Data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Dimensions
    const width = 800;
    const height = 600;
    const centerX = width / 2;
    const centerY = height / 2;

    // Clear the SVG before re-rendering
    d3.select(svgRef.current).selectAll("*").remove();

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Draw Gateway
    svg
      .append("circle")
      .attr("cx", centerX)
      .attr("cy", centerY)
      .attr("r", 40)
      .attr("fill", "#007bff");

    svg
      .append("text")
      .attr("x", centerX)
      .attr("y", centerY + 5)
      .attr("class", "text")
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .style("fill", "white")
      .text(data.gateway.name);

    // Draw Devices and Lines
    const angleStep = (2 * Math.PI) / data.devices.length;
    data.devices.forEach((device, index) => {
      const angle = index * angleStep;
      const x = centerX + Math.cos(angle) * 200;
      const y = centerY + Math.sin(angle) * 200;

      // Line from gateway to device
      svg
        .append("line")
        .attr("x1", centerX)
        .attr("y1", centerY)
        .attr("x2", x)
        .attr("y2", y)
        .attr("stroke", "#007bff")
        .attr("stroke-width", 2);

      // Device circle
      svg
        .append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 30)
        .attr("fill", "#28a745")
        .on("click", () => {
          alert(`Device: ${device.name}`);
        });

      // Device text
      svg
        .append("text")
        .attr("x", x)
        .attr("y", y + 5)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .text(device.name);
    });
  }, [data]);
  return <svg ref={svgRef}></svg>;
};

export default NetworkDiagram;
