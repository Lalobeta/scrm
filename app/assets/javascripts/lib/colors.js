var colors = (function(){
  var material = {
    red: "#F44336",
    pink: "#E91E63",
    purple: "#9C27B0",
    deepPurple: "#673AB7",
    indigo: "#3F51B5",
    blue: "#2196F3",
    lightBlue: "#03A9F4",
    cyan: "#00BCD4",
    teal: "#009688",
    green: "#4CAF50",
    lightGreen: "#8BC34A",
    lime: "#CDDC39",
    yellow: "#FFEB3B",
    amber: "#FFC107",
    orange: "#FF9800",
    deepOrange: "#FF5722",
    brown: "#795548",
    grey: "#9E9E9E",
    blueGray: "#607D8B"
  }

  function getMaterialColors(){
    let array = [];
    for(c in material) {
      array.push(material[c])
    }
    return array;
  }

  return{
    getMaterialColors : getMaterialColors,
    material : material
  };


})();
