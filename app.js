var bitwiseNQueens = function(n) {

  var firstOption = 1;
  var rowOptions = [];
  for(var i = 0; i < n; i++) {
    rowOptions.push(firstOption << i);
  }

  var solutionsCounter = 0;

  var findSolutions = function(board) {
    // base case
    if(board.length === n) {
      return solutionsCounter++;
    }

    // initializer
    if(board.length === 0) {
      _.each(rowOptions, function(option){
        findSolutions([option])
      });
    }

    // recursion
    if(board.length > 0){
      _.each(rowOptions, function(potentialRow){

        var failures = 0;

        _.each(board.reverse(), function(rowToCompare, i){
          if(potentialRow === rowToCompare ||
             potentialRow === (rowToCompare >> (board.length - i)) ||
             potentialRow === (rowToCompare << (board.length - i))) {
              failures++;
          }
        });

        if(!failures){
          var confirmedRow = potentialRow;
          var newBoard = board.slice();
          newBoard.push(confirmedRow);
          findSolutions(newBoard);
        }
      });
    }
  };

  findSolutions([]);

  return 'A board with ' + n + ' queens has ' + solutionsCounter + ' solutions.'

};
