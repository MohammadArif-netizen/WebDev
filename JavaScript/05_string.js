const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Angry-Birds')

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 5)
// console.log(newString);

const newString2 = gameName.slice(-11, 6)
// console.log(newString2);

const newString3 = "    Arif    "
// console.log(newString3);
// console.log(newString3.trim());

const url = "https://arif.com/mohammad%20arif"

// console.log(url.replace('%20', '-'));

// console.log(url.includes('don'));

const fasionBrand = "Armani-Exchange-com"

console.log(fasionBrand.split('-'));
console.log(fasionBrand.search('e'));
console.log(fasionBrand.concat(newString3));
console.log(fasionBrand.endsWith('m'));
