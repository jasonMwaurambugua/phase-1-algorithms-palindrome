function isPalindrome([racecar,abba,a,robot]) {
}


if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("expecting:true");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
