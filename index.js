// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  // Append the new name to the end of the `cats` array
  cats.push(name);
}

function destructivelyPrependCat(name) {
  // Add the new name to the beginning of the `cats` array
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  // Remove the last cat from the `cats` array
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  // Remove the first cat from the `cats` array
  cats.shift();
}

function appendCat(name) {
  // Create a new array that includes all cats from the original array and the new name
  return [...cats, name];
}

function prependCat(name) {
  // Create a new array with the new name added to the beginning, followed by the original cats
  return [name, ...cats];
}

function removeLastCat() {
  // Create a new array that excludes the last cat from the original array
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  // Create a new array that excludes the first cat from the original array
  return cats.slice(1);
}
