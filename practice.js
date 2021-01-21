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




function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
     return meter;
 }
 var totalMeter = kilometerToMeter(5);
 console.log(totalMeter);
