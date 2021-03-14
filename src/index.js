
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if(!matrix || matrix.length === 0) {
    return []};

  let line = [];
    matrix.forEach(function(item, index) {
        (index%2 === 0) ? line.push(...item) : line.push(...item.reverse());
    });
    return line;
}

