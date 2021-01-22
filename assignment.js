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
  const firstTenDays = 100;
  const secondTenDays = 80;
  const lifeTime = 50;

  if (stayInHotel >= 1 && stayInHotel <= 10) {
      var totalHotelCost = stayInHotel * firstTenDays;
      return totalHotelCost;

  } else if (stayInHotel >= 11 && stayInHotel <= 20) {
      var totalHotelCost = stayInHotel * secondTenDays;
      return totalHotelCost;

  } else {
      var totalHotelCost = stayInHotel * lifeTime;
      return totalHotelCost;
  }
}
hotelCost(30);



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
