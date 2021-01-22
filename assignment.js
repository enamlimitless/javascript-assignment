//   GITHUB CODE LINK :-

//https://github.com/enamulhaque7/javascript-assignment


// kilometerToMeter
///////////////////////////////////////////////////////////////

 function kilometerToMeter(kilometer){
   // 1 Kilometer = 1000 meter
    var meters = kilometer * 1000;
     return meters;
 }

 // Output 
 var totalMeters = kilometerToMeter(5);
 console.log(totalMeters);


//budgetCalculator
///////////////////////////////////////////////////////////////

function budgetCalculator(sumTotal){
  var watch = 50;
  var mobile = 100;
  var laptop = 500;
  var sumTotal = watch + mobile + laptop;
  return sumTotal;
}

// Output
var sum = budgetCalculator();
console.log(sum);


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

// Output 
//if i stay 21 days in hotel the cost will be
var stay21Days = hotelCost(21);
console.log(stay21Days);


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

// Output
var largeWord = megaFriend(names);
console.log(largeWord);
