const Stack = require('./stack.js');

let graphAdj;
let visited;
let stack;

const initGraph = (maxVertice) => {
	visited = new Array(maxVertice);
	stack = new Stack();

	for (let i = 0; i < visited.length; i++) {
		visited[i] = false;
	}

	graphAdj = new Array(maxVertice);
	for (let i = 0; i < graphAdj.length; i++) {
		graphAdj[i] = new Array(maxVertice);
	}

	for (let i = 0; i < graphAdj.length; i++) {
		for (let j = 0; j < graphAdj[i].length; j++) {
			graphAdj[i][j] = 0;
		}
	}
};

const printGraph = () => {
	let graphline = ' ';
	let i, j;
	for (i = 0; i < graphAdj.length; i++) {
		for (j = 0; j < graphAdj[i].length; j++) {
			graphline += graphAdj[i][j];
			graphline += ' ';

			if (j == graphAdj.length - 1) {
				console.log(graphline);
				graphline = ' ';
			}
		}
	}
};

const insertGraph = (a, b) => {
	for (let i = 0; i < graphAdj.length; i++) {
		for (let j = 0; j < graphAdj[i].length; j++) {
			if (i === a && j === b) {
				graphAdj[i][j] = 1;
				graphAdj[j][i] = 1;
			}
		}
	}
};

const dfs = (node) => {
	stack.push(node);

	while (!stack.isEmpty()) {
		node = stack.pop();

		if (visited[node] == false) {
			visited[node] = true;

			console.log(`we visited ${node}`);
			for (let j = 0; j < graphAdj[node].length; j++) {
				if (graphAdj[node][j] === 1) {
					stack.push(j);
				}
			}
		}
	}
};

initGraph(4);
insertGraph(0, 1);
insertGraph(0, 2);
insertGraph(1, 2);
insertGraph(2, 0);
insertGraph(2, 3);
insertGraph(3, 3);

printGraph();

dfs(2);
