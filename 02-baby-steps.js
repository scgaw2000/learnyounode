var sum = 0;
for (var key in process.argv) {
  if (key >= 2) {
    sum += +process.argv[key];
  }
}
console.log(result)
