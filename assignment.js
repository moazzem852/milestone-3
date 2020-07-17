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
    var feet = 1000;
    step;
    var step1;
    var step2;
    var step3;

         if (floor <=10) {
             
            step1= feet * 15 * floor;
            return step1;
         }
         else if (floor >= 11 && floor <= 20) {
             step2= feet * 15 * floor;
             return step2;
         }
         else if (floor >= 21) {
             step3 =feet * 10 * floor;
             return step3;
         }
    var step = step1 + step2 + step3;
    return step;
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
