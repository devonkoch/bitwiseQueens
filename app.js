var bitwiseNQueens = function(n) {
  // create options array based on n
  // if n = 4
  // teaching bitwise operator
  var rowOption = 1;
  var rowOptions = [];
  for(var i = 0; i < n; i++) {
    rowOptions.push(rowOption << i);
  }

  console.log('row options: ' + rowOptions) // [1,2,4,8]

  // initialize counter variable to 0
  var solutionCount = 0;
  console.log('solution count: ' + solutionCount);

  // recursive function expression
  var searchForSolutions = function(board) {
    // base case: board.length = n
    // console.log('board length: ' + board.length);
    if(board.length === n) {
      // add 1 to solutionCount and break recursion
      solutionCount++;
      return;
      // console.log('solution count: ' + solutionCount);
    }
    /* initial edge case: empty board */
    if(board.length === 0){
      // console.log('base case passing');
      for (var i = 0; i < rowOptions.length; i++) {
        var initialBoard = [rowOptions[i]];
        console.log('initial board: ' + initialBoard)
        searchForSolutions(initialBoard);
      }
    }
    // console.log(board);
    /* looping through potential next row e.g. [1,2,4,8] */ 
    for (var j = 0; j < rowOptions.length; j++) {
      /* testing against current board e.g. n = 1 [1], [2], [4], [8] */
      // [8,1]
      var boardLen = board.length; // 1
      
      for (var k = boardLen - 1; k >= 0; k--) {
        if(rowOptions[j] === board[k] ||
           rowOptions[j] === board[k] >> boardLen - k ||
           rowOptions[j] === board[k] << boardLen - k) {
             return; 
        }
      }
      board.push(rowOptions[j]);
      // console.log(board);
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
