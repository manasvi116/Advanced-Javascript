// create a map 
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["grapes", 200]
// ]);
// console.log(fruits);

// the set method can also be used to change the existing value 


// the set() method - CAN BE USED TO RECHANGE THE VALUE OR INSERTION (NEW)

const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("grapes", 200);
fruits.set("pineapples", 800);

// // Update value for existing key
// fruits.set("apples", 400); // ✅ Overwrites 500 with 400

// // Log the full Map
// console.log("Full Map:", fruits);

// // Use get() to retrieve a specific value
// console.log("Grapes:", fruits.get("grapes")); // 👉 200

// // Map methods
// console.log("Size of Map:", fruits.size);           // 👉 Number of entries
// console.log("Has 'bananas'?", fruits.has("bananas")); // 👉 true

// // Delete a key
// fruits.delete("bananas");
// console.log("After deleting 'bananas':", fruits);

// Clear all entries
// fruits.clear(); // Uncomment to clear the entire map
// console.log("After clear:", fruits);

// Invalid property
// console.log(fruits.hash); // ❌ Map has no 'hash' property

// let text = " ";
// fruits.forEach(function(value, key) {
//   text += key + " = " + value + " ";
// });

// console.log(text);
// console.log(typeof text);

// Map.entries
// the entries() returns an iterator obj wth the key value in a Map


let text = " ";
for (const x of fruits.values()) {
  text += x;
}
console.log( text + " ");


let total = 0;
for (const x of fruits.values()) {
  total += x;
}
console.log("Total:", total);


//   for each 
//   entries 
//   x of 
//   .keys 
//   .values




