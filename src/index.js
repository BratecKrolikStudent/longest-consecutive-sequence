module.exports = function longestConsecutiveLength(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let count = 0, max = 0;

  for (let i = 1; i < array.length; i++) {
    if (sortedArray[i] - 1 === sortedArray[i - 1]) {
      count++;
    } else if (sortedArray[i] !== sortedArray[i - 1]) {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }

  return array.length > 0 ? max + 1 : max;
}
