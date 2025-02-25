// class Car {
//     constructor(name) {
//         this.brand = name;
//     }
//     printname(name){
//         document.write("my car is "+ this.brand);
//     }
// }

// const mycar = new Car("ford");
// mycar.printname();


// let nums = [1,7,3,6];
// let target = 9;

// function targetFind(nums,target) {
//     let i,j;
//     for(i=0;i<nums.length;i++) {
//         for(j=i+1;j<nums.length;j++) {
//             if(nums[j] === target-nums[i]){
//                 return [nums[i],nums[j]];
//             }
//         }
//     }
//     return [];
// };

// console.log(targetFind(nums,target));



// let x = 123;
// let str = x.toString();
// const reversedStr = str.split('').reverse().join('');
// console.log(reversedStr);
//  console.log(str);

// let str = "123";
// let newSr = str.split();
// console.log(newSr);
// let newSrt = newSr.join('');
// console.log(typeof(newSrt));

// let sum = 0;
// let str = 'III';
// let newstr = str.split('');
// let i;
// let curr;
// let next;

// for(i=0;i<str.length;i++) {
//      curr = numToRom(newstr[i]);
//      next = numToRom(newstr[i+1]);
//      if(curr<next){
//         sum = sum + next -curr;
//      }
//      else {
//         sum = sum + next + curr;
//      }
     
// }



// console.log(sum);

// function numToRom(m) {
//     let k = m;
//     switch(k) {
//         case 'I':   return 1;
//         break;
//         case 'V':   return 5;
//         break;
//         case 'X':   return 10;
//         break;
//         case 'L':   return 50;
//         break;
//         case 'C':   return 100;
//         break;
//         case 'D':   return 500;
//         break;
//         case 'M':   return 1000;
//         break;
//         default:    
//         break;
//     }
// }


// let str = "IV";
// let sum = 0;
// let myMap = {
//     'I':1,
//     'V':5,
//     'X':10,
//     'L':50,
//     'C':100,
//     'D':500,
//     'M':1000
// }
// let curr;
// let next;;
// for(let i=0;i<str.length;i++) {
//     curr = myMap[str[i]];
//     next = myMap[str[i+1]];
//     if(next != undefined && curr < next) {
//         sum -= curr;
//     } else {
//         sum += curr;
//     }
// }
// console.log(sum);



// let strs = ["123","456","789"];
// count=0;
// for(let k=0;k<3;k++) {
// if(strs[k]!=undefined) {

// for(let i=0;i<strs[k].length;i++){
//     for(let j=0;i<strs[i][j];j++){
//         console.log(i,j);
//         }
//     }
// }
// }



// let strs = ["1234", "456", "789"];
// count = 0;
// for (let k = 0; k < strs.length; k++) {
//     if (strs[k] !== undefined) {
//         for (let i = 0; i < strs[k].length; i++) {
//             console.log(k, i);
//         }
//     }
// }


// let reqElem;
// let emstr=[];
// let str = ["sagar","sagae","sagfe"];
// for(let i=0;i<str[0].length;i++) {
//     for(let j=1;j<str.length;j++) {
//         if(str[0][i]!=str[j][i]){
//             reqElem = str[0].slice(0,i);
//         }
//     }
// }
// console.log(reqElem);



// var isValid = function(s) {
//     let stack = [];
//     let map = {
//         '(' : ')',
//         '{' : '}',
//         '[' : ']'
//     };

   
//     for(char of s) {
//         if(map[char]) {
//             stack.push(char);
//         }
//         else if(stack.length==0 || map[stack.pop()] != char){
//             return false;
//         }
//     }
//      return stack.length == 0;
    
// };

// console.log(isValid('()'));


// class List 
// {
//     constructor(data) {
//         this.head = {
//             value:data,
//             next:null
//         }
//         this.tail = this.head;
// }   appendNode(nodeData)  {
//         let newNode = {
//             val:nodeData,
//             next:null
//         };
//         this.tail.next = newNode;
//         this.tail = newNode;
//     }
//     };
    
// let list = new List(200);



// let nums = [1,1,2];
// let first = nums[0];
// let k=0;
// let arr= [];
// nums.push(first);
// for(let i=0;i<nums.length;i++) {
//     if(first!=nums[i]){
//         arr.push(nums[i]);
//         first = nums[i];
//     }
//     else{
//         ++k;
//     }
// }
// arr.sort();
// console.log(arr);
// console.log(k-=1);

// for(let j=k;j>0;j--) {
//     arr.push('_');
// }
// console.log(arr);


// let nums = [1,1,2];

// let k =1;
// if(nums.length == 0) 
//     return 0;
// for(let i=1;i<nums.length;i++) {
//     if(nums[i]!=nums[i-1]) {
//         nums[k] = nums[i];
//         k++;
//     }
// }
// console.log(nums);
// console.log(k);



// LEETCODE PROBLEM 27

/*

 var removeElement = function(nums, val) {
   
    if(nums.length == 0) {
        return 0;
    }
    let k=0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
        else{
            continue;
        }
    }
    return nums;
};

console.log(removeElement([3,2,2,3],3));

*/


// var wordBreak = function(s, wordDict) {
//     return s==wordDict.join('');
// };

// console.log(wordBreak("leetcode",["leet","code"]));



// PROBLEM 9 ON LEETCODE

/* var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++) {
        if(nums[i] === target)
            return i;
        else if(nums[i] > target) 
            return i;
    }
    return nums.length;
};

console.log(searchInsert([1,3,5,6],2));  */


// PROBLEM 53 ON LEETCODE

/* var lengthOfLastWord = function(s) {
    s = s.trim().split(/\s+/);
    return s[s.length-1].length;
    
};
console.log(lengthOfLastWord("hi   my   name  is sagar  ")); */


// LEETCODE PROBLEM 66

/*
var plusOne = function(digits) {
    digits = BigInt(digits.join(""));
    digits = digits + 1n;
    digits = digits.toString();
    digits = digits.split("");
    return digits.map(Number);
};

num = plusOne([1,2,3,4,5,6,5,7,8,9,,5,6,8,5,6,9,4,5,8,6,9,9,4,4,5,4,5,4,5]);
console.log(num);
*/



// LEETCODE PROBLEM 67
/*
var addBinary = function(a, b) {
    let a_num = 0;
    let b_num = 0;
   
    
    let n = a.length;
    let m = b.length;
    // for loop for a
    for(let i=0;i<n;i++) {
        if(a[n-1-i]==1) {
            a_num+=Math.pow(2,i);
        }
        else{
            continue;
    }}
    // for loop for b
    for(let i=0;i<m;i++) {
        if(b[m-1-i]==1) {
            b_num+=Math.pow(2,i);
        }
        else{
            continue;
    }}
    let sum = a_num + b_num;
    if(sum===0) 
        return 0;

    let arr = [];
    while(sum>0) {
        
            if(sum%2===0 || sum%2===1) {
                arr.push(sum%2);
                sum=Math.floor(sum/2);
            }
            else {
                break;
            } 
    }
    // console.log(arr);
    return arr.reverse().join("");
};
console.log(addBinary("11","1"));
*/

// LEETCODE PROBLEM 
/*
var mySqrt = function(x) {
    let sqrt = x/2;
    let temp = 0;
    while(sqrt!=temp) {
        temp = sqrt;
        sqrt = ((x/temp)+temp)/2;
    }
    return temp;

};
console.log(mySqrt(25));
*/

// LEETCODE PROBLEM 
/*
var merge = function(nums1, m, nums2, n) {
    for(let i=0;i<n;i++) {
        nums1.pop();
    }
    console.log(nums1);
    console.log(nums2);
    nums1 = nums1.concat(nums2);
    // nums1 = nums1.sort();
    nums1 = nums1.sort((a,b) => a-b);
    console.log(nums1);
};

merge([1,-5,2,3,0,0,0],3,[2,5,6],3);
*/

// LEETCODE PROBLEM 3


// let left = 0;
//     let right = 0;
//     let max = 0;
//     let set = new Set();
//     while(s[right]!=null) {
//         if(!set.has(s[right])) {
//             set.add(s[right]);
//             max = Math.max(max,set.size);
//             right++;
//         } else {
//             set.delete(s[left]);
//             left++
//         }
//     }
//     console.log(left,right);
//     return max;

// LEETCODE PROBLEM

// var rotate = function(matrix) {

//     for(let i=0;i<matrix.length;i++) {
//         for(let j=i+1;j<matrix.length;j++){
//             let temp = matrix[i][j];
//               matrix[i][j] = matrix[j][i];
//               matrix[j][i] = temp;
//         }
//     }
//      for(let i=0;i<matrix.length;i++) 
//          matrix[i] = matrix[i].reverse();
//        return matrix;
// };

// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));

// LEETCODE PROBLEM 168
// var convertToTitle = function(columnNumber) {
//     let n =columnNumber;
//     let result = [];
//     while(n>0) {
//         n--;
//         let remainder = (n % 26);
//         result.push(String.fromCharCode(remainder + 65));
//         n = Math.floor(n / 26);
//     }
//     return result.reverse().join('');
// };


// LEETCODE PROBELEM 1431
// var kidsWithCandies = function(candies, extraCandies) {
//     let result = [];
//     for(let i=0;i<candies.length;i++) {
//         let item = candies[i] + extraCandies;
//         for(let j=0;j<candies.length;j++) {
//             if(item < candies[j]) {
//                 result[i]=false;
//                 break;
//             }
//             result[i] = true;
//         }
        
//     }
//     return result;
// };