function showVerticalMessage(str) {
    let newstr = '';
 
    function truncate(str) {
      return (str.length > 10) ? str = str.slice(0, 10) : str;
    }
  
    function toUpperCase(str) {
      return (str[0] = "м") ? str[0].toUpperCase() + str.slice(1) : str;
    }
  
    function vertical(str) {
      for (let i = 0; i < str.length; i++) {
        newstr += str[i] + "\n";
      }
      return newstr;
    }
  
    let result = truncate(str);
    result = toUpperCase(result)
    result = vertical(result)
    return result;
  
  }
  
  console.log(showVerticalMessage("марафончики")); 
  
