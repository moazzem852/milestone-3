function feetToMile(feet) {
    var mile = feet / 5280;
    if (mile < 0 ) {
        return "length  negative  don't unacceptable";
    }
    else{
       return mile.toFixed(4);
   }  
}




function woodCalculator(chair, table ,cot) {
    var chairAmount = chair * 1;
    var tableAmount = table * 3;
    var cotAmount = cot * 5;
    var Quantity = chairAmount + tableAmount + cotAmount;
    return Quantity;
}



function brickCalculator(floor) {
    var bricksAmount = floor;
    var bricksAmount1 =bricksAmount;
    var bricksAmount2 = floor-bricksAmount1;
    var bricksAmount3 = floor-bricksAmount2;

    if (floor <=10) {
      bricksAmount1 = floor * 15000;
      result = bricksAmount1;  
    }
     else if (floor > 10 && floor <= 20) {
       bricksAmount2 = floor * 12000;
      result = bricksAmount2;   
     }
     else if (floor > 20){
         var bricksAmount3 = floor * 10000;
         result = bricksAmount3;
     }
     var bricksAmount = bricksAmount1+bricksAmount2+bricksAmount3;
      return bricksAmount; 
       
 }



function tinyFriend(names) {
    var smallName = names[0].length;
    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName < smallName) {
            smallName = currentNam;    
        }
        
    }
    return smallName;
}
