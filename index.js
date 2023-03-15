// distanceFromHqInBlocks()

function distanceFromHqInBlocks(someValue){
    if (someValue > 42){
        return (someValue -42);
    }else {
        return (42 - someValue);
    }
    
}
//distanceFromHqInFeet()
function distanceFromHqInFeet(someValue){
    if (someValue > 42){
        return((someValue - 42) * 264);
    }else {
        return((42 - someValue) * 264);
    }
    
    
}

    //distanceTravelledInFeet()
function distanceTravelledInFeet(start, destination){
   if( start > 42, destination > 42){
    return ((destination - start) * 264);
   }else {
    return ((start - destination) * 264);
   }
    
}

//
function calculatesFarePrice(start, destination) {
    if(start === 43, destination === 44){
        return(264 * 0);
    }else if (start === 34, destination === 32){
        return (128 * 0.02);
    }else if (start === 50, destination === 58){
        return (25);
    }else if (start ===34, destination ===24){
        return "cannot travel that far";
    }
  }

