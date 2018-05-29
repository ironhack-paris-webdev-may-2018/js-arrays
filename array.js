var classNames = [
  "Jana",
  "Thierry",
  "Jihad",
  "Meri",
  "Ghaith"
];

// console.log( classNames.length );

// classNames.reverse();

classNames.push("Antoine");

classNames.unshift("Karim");

classNames.splice(5, 0, "Maya", "Charlotte", "Dina");

console.log(classNames);


// for (var index = 0; index < classNames.length; index += 1) {
//   var name = classNames[index];
//   console.log( name.charAt(0) + "." );
// }


classNames.forEach(function (blah) {
  console.log( blah.charAt(0) + "." );
});
