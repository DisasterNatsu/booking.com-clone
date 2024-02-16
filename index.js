let arr = [3, 4, 5, 6];

for (let i in arr) {
  console.log(i);
}

for (let i of arr) {
  console.log(i);
}

arr.foo = "Hi";

console.log(arr);
