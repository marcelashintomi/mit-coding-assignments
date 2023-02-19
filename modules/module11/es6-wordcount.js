let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


const words = (text) => {
  text = text.replace(/[,\.]/g, "");
  return text.split(" ");
};
// Alternate Solution
// const getWordArray = (text) => {
//   text = text.replaceAll(",", "").replaceAll(".", "");
//   return text.split(" ");
// };
var arr = words(lorem);
console.log(arr.length);

const wordFrequency = (arr) => {
  let objArray = {};
  for (let i = 0; i < arr.length; i++) {
    let obj = arr[i];
    objArray[obj] = objArray[obj] + 1 || 1;
  }
  return objArray;
};
console.log(wordFrequency(words(lorem)));

