//create new knight node
//accepts chessboard matrix, and its x & y coordinates
const knight = (chessBoard, X, Y) => {
  return {
    position: chessBoard[Y][X],
    coordinates: [X, Y],
    nextPosition1: null,
    nextPosition2: null,
    nextPosition3: null,
    nextPosition4: null,
    nextPosition5: null,
    nextPosition6: null,
    nextPosition8: null,
    nextPosition9: null,
  }
}

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

//create & populate adjacency list for chessboard
const chessBoardAdjacencyList = function () {
  let adjacencyList = [];

  //create 64 arrays inside adjacencyList
  for (i = 0; i < 64; i++) {
    adjacencyList.push([]);
  }

  //go through all 64 arrays
  for (j = 0; j < 64; j++) {
    //if square is in bottom row
    if ((j >= 0) && (j < 8)) {
      //bottom left square
      if (j === 0) {
        adjacencyList[j].push(j + 2);
        adjacencyList[j].push(j + 9);
      }
      //bottom right square
      else if (j === 7) {
        adjacencyList[j].push(j);
        adjacencyList[j].push(j + 9);
      }
      else {
        adjacencyList[j].push(j + 9);
        adjacencyList[j].push(j);
        adjacencyList[j].push(j + 2);
      }
    }
    //else if square is in top row 
    else if ((j >= 56) && (j < 64)) {
      //if top left square
      if (j === 56) {
        adjacencyList[j].push(j + 2);
        adjacencyList[j].push(j - 7);
      }
      //if top right square
      else if (j === 63) {
        adjacencyList[j].push(j);
        adjacencyList[j].push(j - 7);
      }
      else {
        adjacencyList[j].push(j - 7);
        adjacencyList[j].push(j);
        adjacencyList[j].push(j + 2);
      }
    }
    //else if square is in leftmost column
    else if (j === 8 || j === 16 || j === 24 || j === 32 || j === 40 ||
      j === 48) {
        adjacencyList[j].push(j + 2);
        adjacencyList[j].push(j - 7);
        adjacencyList[j].push(j + 9);
      }
    //else if square is in rightmost column
    else if (j === 15 || j === 23 ||j === 31 || j === 39 || j === 47 || 
      j === 55) {
        adjacencyList[j].push(j);
        adjacencyList[j].push(j + 9);
        adjacencyList[j].push(j - 7);
      }
    else {
      adjacencyList[j].push(j);
      adjacencyList[j].push(j + 2);
      adjacencyList[j].push(j - 7);
      adjacencyList[j].push(j + 9);  
    }
  }

  return adjacencyList;
}