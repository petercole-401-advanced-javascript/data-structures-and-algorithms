
const { Node, Graph, createGraph } = require('./graph');

describe('Node module', () => {
  it('instantiates a Node instance', () => {
    let testNode = new Node('1');
    // foo
  });
});
describe('Graph module', () => {
  it('instantiates a Graph instance', () => {
    let testNode = new Node('1');
    let testGraph = new Graph(testNode);
    // foo
  });
  it('can add a node to the graph', () => {
    // foo
  });
  it('can add an edge to the graph', () => {
    // foo
  });
  it('can properly retrieve a collection of all nodes from the graph', () => {
    // foo
  });
  it('can retrieve all appropriate neighbors from the graph', () => {
    // foo
  });
  it('can return all neighbors with weight included', () => {
    // foo
  });
  it('can return the size of the graph by counting the nodes', () => {
    // foo
  });
  it('can return a graph with only one node and edge', () => {
    // foo
  });
});
describe('createGraph', () => {
  it('can create a new Graph based on a Node in the argument', () => {
    let testNode = new Node('1');
    let testGraph = new Graph(testNode);
    expect(createGraph(testGraph)).toBeSuccessful();
  });
});
