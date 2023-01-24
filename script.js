//create chessboard
//8 arrays (rows) with 8 elements each. stores values from 1 to 64
const createChessBoard = function () {
  let chessBoard = [];
  let squareValue = 1;

  for (i = 0; i < 8; i++) {
    chessBoard.push([]);

    for (j = 0; j < 8; j++) {
      chessBoard[i].push(squareValue);

      squareValue++;
    }
  }

  return chessBoard;
}

//adjacency list
const adjacencyList = [
  [17, 10],//0
  [18, 11, 16],//1
  [19, 12, 8, 17],//2
  [20, 13, 9, 18],//3
  [21, 14, 10, 19],//4
  [22, 15, 11, 20],//5
  [24, 12, 21],//6
  [13, 22],//7
  [25, 18, 2],//8
  [26, 19, 3, 24],//9
  [27, 20, 4, 16, 25],//10
  [28, 21, 5, 1, 17, 26],//11
  [29, 22, 6, 2, 18, 27],//12
  [30, 23, 7, 3, 19, 28],//13
  [31, 4, 20, 29],//14
  [5, 21, 30],//15
  [33, 26, 10, 1],//16
  [34, 27, 11, 2, 0, 32],//17
  [35, 28, 12, 3, 1, 8, 24, 33],//18
  [36, 29, 13, 4, 2, 9, 25, 34],//19
  [37, 30, 14, 5, 3, 10, 26, 35],//20
  [38, 31, 15, 6, 4, 11, 27, 36],//21
  [39, 7, 5, 12, 28, 37],//22
  [6, 13, 29, 38],//23
  [41, 34, 18, 9],//24
  [42, 35, 19, 10, 8, 40],//25
  [43, 36, 20, 11, 9, 16, 32, 41],//26
  [44, 37, 21, 12, 10, 17, 33, 42],//27
  [45, 38, 22, 13, 11, 18, 34, 43],//28
  [46, 39, 23, 14, 12, 19, 35, 44],//29
  [47, 15, 13, 20, 36, 45],//30
  [14, 21, 37, 46],//31
  [49, 42, 26, 17],//32
  [50, 43, 27, 18, 16, 48],//33
  [51, 43, 28, 19, 17, 24, 40, 49],//34
  [52, 44, 29, 20, 18, 25, 41, 50],//35
  [53, 45, 30, 21, 19, 26, 42, 51],//36
  [54, 46, 31, 22, 20, 27, 43, 52],//37
  [55, 23, 21, 28, 44, 53],//38
  [22, 29, 45, 54],//39
  [57, 50, 34, 25],//40
  [58, 51, 35, 26, 24, 56],//41
  [59, 52, 36, 27, 25, 32, 48, 57],//42
  [60, 51, 37, 28, 26, 33, 49, 58],//43
  [61, 52, 38, 29, 27, 34, 50, 59],//44
  [62, 53, 39, 30, 28, 35, 51, 60],//45
  [63, 31, 29, 36, 52, 61],//46
  [30, 37, 53, 62],//47
  [58, 42, 33],//48
  [59, 43, 34, 32],//49
  [60, 42, 35, 33, 40, 56],//50
  [61, 43, 36, 34, 41, 57],//51
  [62, 44, 37, 35, 42, 58],//52
  [63, 45, 38, 36, 43, 59],//53
  [45, 37, 42, 60],//54
  [38, 45, 61],//55
  [50, 41],//56
  [51, 42, 40],//57
  [52, 43, 41, 48],//58
  [53, 44, 42, 49],//59
  [54, 45, 43, 50],//60
  [55, 46, 44, 51],//61
  [47, 45, 52],//62
  [46, 53]//63
];

//returns the parent node of the end node, part of the shortest path to end node
const breadthFirstSearch = function (adjacencyList, startNode, endNode) {
  let queue = [startNode];
  let visited = [startNode];
  let node;
  let nodeIsVisited = 0;

  while (queue !== []) {
    if (queue[0] === undefined) break;

    let current = adjacencyList[queue[0]];

    for (i = 0; i < current.length; i++) {
      if (current[i] === endNode) {
        return node = queue[0];
      } 
    }
    for (j = 0; j < adjacencyList[queue[0]].length; j++) {
      for (k = 0; k < visited.length; k++) {
        if (adjacencyList[queue[0][j]] === visited[k]) nodeIsVisited = 1;
      }

      if (nodeIsVisited === 0) queue.push(adjacencyList[queue[0]][j]);

      nodeIsVisited = 0;
    }

    queue.shift();
  }

  return node;
}

//returns the shortest path from start square to end square
const shortestPath = function (adjacencyList, startNode, endNode) {
  let pathArray = [endNode];
  let lastNode = endNode;

  while (lastNode !== startNode) {
    let bfsOutput = breadthFirstSearch(adjacencyList, startNode, lastNode);

    pathArray.push(bfsOutput);

    lastNode = bfsOutput;
  }

  pathArray = reverseArray(pathArray);

  const shortestPathArray = [];
  pathArray.forEach((element) => {
    element += 1;
    shortestPathArray.push(element);
  })

  return shortestPathArray;
}

//reverse an array
const reverseArray = function (array) {
  let reversedArray = [];

  while (array[0] != undefined) reversedArray.push(array.pop());

  return reversedArray;
}

//return coordinates. accepts value from the chessboard
const returnCoordinates = function (chessBoard, squareValue) {
  const coordsArray = [];

  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      if (squareValue === chessBoard[i][j]) {
        coordsArray.push(i);
        coordsArray.push(j);
        return coordsArray;
      }
    }
  }
}

//return an array of coordinates. accepts array of values from the chessboard
const returnCoordinatesArray = function (chessBoard, valuesArray) {
  const coordinatesArray = [];

  valuesArray.forEach(value => {
    coordinatesArray.push(returnCoordinates(chessBoard, value));
  })

  return coordinatesArray;
}

//main function, accepts starting and ending coordinates
const knightMoves = function (startCoords, endCoords) {
  if (startCoords[0] < 0 || startCoords[0] > 7 || startCoords[1] < 0 || startCoords[1] > 7 ||
    endCoords[0] < 0 || endCoords[0] > 7 || endCoords[1] < 0 || endCoords[1] > 7) {
      console.log("Please enter coordinates with value between 0 and 7.");
    }
  else {
    const chessBoard = createChessBoard();
  
    const startNode = chessBoard[startCoords[1]][startCoords[0]] - 1;
    const endNode = chessBoard[endCoords[0]][endCoords[1]] - 1;
  
    const shortestPathToEnd = shortestPath(adjacencyList, startNode, endNode);
    
    const pathCoordinates = returnCoordinatesArray(chessBoard, shortestPathToEnd);
  
    console.log(`You made it in ${pathCoordinates.length - 1} moves! Here's your path:`);
    pathCoordinates.forEach(coordinate => {
    console.log(coordinate);
    })
  }
}