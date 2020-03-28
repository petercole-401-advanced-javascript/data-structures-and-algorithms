'use strict';

class Node {
  constructor() {
    this.value = value;
    this.edges = { nodes: [], weight: null };
  }
}

class Graph {
  constructor(node) {
    this.root = node;
  }
  addNode(value) {
    // Adds a new node to the graph
    // Takes in the value of that node
    // Returns the added node
    return new Node(value);
  }
  addEdge(nodeA, nodeB) {
    // Adds a new edge between two nodes in the graph
    // Include the ability to have a “weight”
    // Takes in the two nodes to be connected by the edge
    // - Both nodes should already be in the Graph
  }
  getNodes(graph) {
    let collection = [];
    // Returns all of the nodes in the graph as a collection (set, list, or similar)
    return collection;
  }
  getNeighbors(node) {
    let collection = [];
    // Takes in a given node
    // Returns a collection of edges connected to the given node
    // Include the weight of the connection in the returned collection
    return collection;
  }
  size(graph) {
    let count;
    // Returns the total number of nodes in the graph'
    return count;
  }
}

const createGraph = root => {
  let graph = new Graph(root);
};

module.exports = { Node, Graph, createGraph };
