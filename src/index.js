module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false; 
  
  let result = [];
  
  str.split("").forEach(function(symb) {
    bracketsConfig.forEach(function(el, i, arr) {
      let ind = el.indexOf(symb);
      
      if (ind == 0) {
        if (symb == el[1] && symb == result[result.length - 1]) {
          result.pop();
        } else {
          result.push(symb);
        }
      }
      
      if (ind == 1) {
        if (result.length == 0) return false;

        if (result[result.length - 1] == el[0]) {
          result.pop();
        }
      }
    });
    
  });
  
  return (result.length == 0) ? true : false;
}
