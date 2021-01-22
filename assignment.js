//kilometerToMeter
//budgetCalculator
//hotelCost
//megaFriend


// kilometerToMeter
///////////////////////////////////////////////////////////////

 function kilometerToMeter(kilometer){
   // 1 Kilometer = 1000 meter
    var meter = kilometer * 1000;
     return meter;
 }

 var totalMeter = kilometerToMeter(5);
 console.log(totalMeter);

//kilometerToMeter Area End 
///////////////////////////////////////////////////////////////




//budgetCalculator
///////////////////////////////////////////////////////////////

function budgetCalculator(sumTotal){
  var watch = 50;
  var mobile = 100;
  var laptop = 500;
  var sumTotal = watch + mobile + laptop;
  return sumTotal;
}

var sum = budgetCalculator();
console.log(sum);

//budgetCalculator End 
///////////////////////////////////////////////////////////////



//hotelCost
///////////////////////////////////////////////////////////////

function hotelCost(stayInHotel) {

  

}




//megaFriend
///////////////////////////////////////////////////////////////

var names = ['Abul', 'Kabul', 'Jabul', 'Rabiul', 'EnamulHaque'];

function megaFriend(names) {
  var word = "";
  for (var i = 0; i < names.length; i++) {
    if (word.length < names[i].length) {
      word = names[i];
    }
  }
  return word;
}
var largeWord = megaFriend(names);
console.log(largeWord);
