const average = (arr) => {
  return Math.round(arr.reduce((acc, val) => acc + val) / arr.length);
}

var scores = [1, 10];
console.log(average(scores));
