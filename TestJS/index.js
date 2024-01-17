
// Q.3: Sum of array numbers

// function sumArray() {
//     const newArray = [1, 2, 3, 4, 5];
//     let sum = 0;
  
//     for (let i = 0; i < newArray.length; i ++) {
//       sum += newArray[i];
//     }
    
//     return sum;
//   }
  
//   console.log(sumArray([1, 2, 3, 4, 5]));


//Q.5: Reverse Array

// function reverseArray(){
//     var array = [10, 20, 30, 40, 50];
//     var reverse = [];

//     for(var i = array.length-1; i>=0; i--){
//       reverse.push(array[i])
//     }
//     return reverse;
// }
// reverseArray();
// console.log("Reversed Array is: " +reverseArray());


// Q.4: Palindrome

// function palindrome(){
//   var number = 121;
//   var len = number.length;
//   for(var i=0; i<len/2; i++){
//     if(number[i] != number[len - 1 -i]){
//       return 'its not palindrome'
//     }
//   }
//   return 'it is a palindrome'
// }
// palindrome();
// console.log(palindrome());


// Q.6: Remove Duplicate

// function removeDuplicate(){

//   const numbers = [1, 5, 4, 6, 5, 2, 3, 1, 8, 9, 4]

//   const uniqueNumbers = [...new Set(numbers)];
//   console.log(uniqueNumbers);

// }
// removeDuplicate();


// Q.7: FACTORIAL OF A NUMBER

// var n = 5;
// var facto = 1;

// for(var i = 2; i <= n; i++){

//   facto = facto * i;

// }

// console.log(facto);