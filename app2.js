var bitwiseNQueens = function(n) {
    
  var start = new Date();

  var firstOption = 1;
  var rowOptions = [];
  for(var i = 0; i < n; i++) {
    rowOptions.push(firstOption << i);
  }

  // [1,2,4,8,16]

  // console.log('These are the row options: ' + rowOptions);
  
  var solutionsCounter = 0;

  var findSolutions = function(board) {
    // base case
    if(board.length === n) {
      solutionsCounter++;
      // console.log('board: [' + board + '] is successfully populated, after adding 1, counter is now ' + solutionsCounter);
      return;
    }

    // initializer
    if(board.length === 0) {

      for (var i = 0; i < rowOptions.length; i++) {
        // console.log('empty board filled, board = [' + [rowOptions[i]] + ']')
        findSolutions([rowOptions[i]]);

      }
    }
    // init boards:
    // [1], [2], [4], [8]

    // if(board[0] === 16){
    if(board.length > 0){
      // console.log('has at least 1 value in board, board is now: [' + board + ']');

      // row options = [1,2,4,8,16]
      for (var j = 0; j < rowOptions.length; j++) {
        
        var failures = 0;
        for (var k = board.length - 1; k >= 0; k--) {
          var potentialRow = rowOptions[j];
          var rowToCompare = board[k];


          if(potentialRow === rowToCompare){
            failures++;
            // console.log(potentialRow + ' failed on equals');
          }
          if(potentialRow === (rowToCompare >> (board.length - k))){
            failures++;
            // console.log(potentialRow + ' failed on 1st shift')
          }
          if(potentialRow === (rowToCompare << (board.length - k))){
            failures++;
            // console.log(potentialRow + ' failed on 2nd shift')
          }
        }

        if(failures === 0){
          // console.log('['+ board +'] passed test, add and recurse')
          var newRow = potentialRow;
          var newBoard = board.slice();
          newBoard.push(potentialRow);
          findSolutions(newBoard);
        }
      }
    }
  };

  findSolutions([]);

  console.log((new Date() - start) / 1000 )

  return solutionsCounter;

};
