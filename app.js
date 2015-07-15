var bitwiseNQueens = function(n) {
  // create options array based on n
  // if n = 4
  // teaching bitwise operator
  var rowOption = 1;
  var rowOptions = [];
  for(var i = 0; i < n; i++) {
    rowOptions.push(rowOption << i);
  }

  console.log(rowOptions)

  // initialize counter variable to 0
  var solutionCount = 0;
  // declare recursive function expression
  var searchForSolutions = function(board) {
    // base case: board.length = n
    if(board.length === n) {
      // add 1 to solutionCount and break recursion
      return solutionCount++;
    }
    /* initial edge case: empty board */
    if(board.length === 0){
      for (var i = 0; i < rowOptions.length; i++) {
        var initialBoard = [rowOptions[i]];
        searchForSolutions(initialBoard);
        console.log('for loop');
      }
    }
    /* looping through potential next row */
    for (var j = 0; j < rowOptions.length; j++) {
      /* testing against current board */
      var boardLen = board.length
      for (var k = boardLen; k >= 0; k--) {
        
        if(rowOptions[j] === board[k]){
          console.log('equals');
          return;
        }
        if(rowOptions[j] === board[k] >> boardLen - k) {
          console.log('too much');
          return;
        }
        if(rowOptions[j] === board[k] << boardLen - k) {
          console.log('too little');
          return;
        }
      }
      console.log(rowOptions[j])
      board.push(rowOptions[j]);
      searchForSolutions(board);
    }
  };
  
  // run recursive function, takes empty board
  searchForSolutions([]);
  
  // return counter;
  return solutionCount;

};

// call bitwiseNQueens

bitwiseNQueens(4);

/*

2 [0,0,1,0] 0
1 [0,0,0,1] 1
8 [1,0,0,0] 2
4 [0,1,0,0] 3?

*/