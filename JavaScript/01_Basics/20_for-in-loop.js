// for-in loop

const myObject1 = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject1) {
    // console.log(key);
    // console.log(`${key} is shortcut for ${myObject1[key]}`);
}

const programming = ['js', 'java', 'python', 'ruby']
for (const key in programming) {
//    console.log(key);
//    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('UK', "United Kindom")
map.set('IN', "India")

for (const key in map) {
//   console.log(key); // Map is not an iterable object.
}