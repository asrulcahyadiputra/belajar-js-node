function countLength(str) {
  let countWord = str.length;
  return countWord;
}

function checkLength(str) {
  let strLength = countLength(str);
  if (strLength >= 5 && strLength <= 12) {
    return "Password is valid";
  } else {
    return "Password is not valid";
  }
}

console.log(checkLength("abcdefgh"));
