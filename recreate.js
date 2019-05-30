const myEach = (data, func) => {
  for(let i = 0; i < data.length; i++){
    func(data[i]);
  }
};
//Prototype
Array.prototype.myEach = function(func) {
   for(let i = 0; i < this.length; i++){
    func(this[i]);
  }
};

const myMap = (data, func) => {
  let ret = [];
  for(let i = 0; i < data.length; i++){
    ret[i] = func(data[i]);
  }
  return ret;
};

const myFilter = (data, func) => {
  let ret = [];
  for(let i = 0; i < data.length; i++){
    if(func(data[i])) ret.push(data[i]);
  }
  return ret;
};

const mySome = (data, func) => {
  for(let i = 0; i < data.length; i++){
    if(func(data[i])) return true;
  }
  return false;
};

const myEvery = (data, func) => {
  for(let i = 0; i < data.length; i++){
    if(!func(data[i])) return false;
  }
  return true;
};

const myReduce = (data, func) => {
  let accum = data[0];
  for(let i = 1; i < data.length; i++){
    accum = func(accum,data[i]);
  }
  return accum;
};

const myIncludes = (data, target) => {
  for(let i = 0; i < data.length;i++){
    if(data[i] === target) return true;
  }
  return false;
};

const myPush = (data,elementToAdd) => {
  data[data.length] = elementToAdd;
};

const myUnshift  = (data, target) => {
  for(let i = data.length -1; i > -1; i--){
    if(data[i] === target){return i;}
  }
  return -1;
};

const grabKeys = (data) => {
  let ret = [];
  for(let key in data){
    ret.push(key);
  }
  return ret;
};
const grabValues = (data) => {
  let ret = [];
  for(let key in data){
    ret.push(data[key]);
  }
  return ret;
};

const range = (start,end,inc=1) => {
  let ret = [];
  for(let i = start; i < end + 1; i+=inc){
    ret.push(i);
  }
  return ret;
};

const sum=(data) => {
  return data.reduce((accumulator,currentValue) => accumulator + currentValue);

};

const reverseArray = (data) => {
  let ret = [];
  for(let i = data.length - 1; i > -1; i--) ret.push(data[i]);
  return ret;
};
const reverseArrayInPlace = (data) => {
  for(let i = 0; i < data.length/2 -1; i++) {
    let tmp = data[i];
    data[i] = data[data.length - 1 - i];
    data[data.length - 1 - i] = tmp;
  }
  return data;
};

const arrayToList = (data) => {
  let ret = {};
  if(data.length == 0){
    return null;
  }
  else{
    ret.value = data[0];
    ret.rest = arrayToList(data.splice(1));
  }
  return ret;

};

const listToArray = (data) => {
  if(data.rest === null){
    return [data.value];
  }else{
    return [data.value].concat(listToArray(data.rest));
  }
};
/*
const deepEqual = (a,b) => {
  if(typeof a != 'object' && typeof b !='object'){
    return a === b;
  }else{
    /*
      loop through keys in object 1 and object 2
      compare
  }
*/
//};





let a = [1,2,3,4,5];
/************ For Each ****************/
console.log("forEach");
myEach(a,(b)=>console.log(b * 2));
a.myEach(b=>console.log(b*2));
/************ Map ****************/
console.log("myMap");
let aMap = myMap(a,(b)=>b * 2);
console.log(aMap);
/************ Filter ****************/
console.log("Filter a < 3");
let aFil = myFilter(a,(b)=>b < 3);
console.log(aFil);
/************ Some ****************/
console.log("Some a < 5");
console.log(mySome(a,(b)=>   b < 5));
console.log("Some a > 5");
console.log( mySome(a,(b)=>   b > 5));
/************ Every ****************/
console.log("Every a < 3");
console.log(myEvery(a,(b)=>   b < 5));
console.log("Every a < 6");
console.log(myEvery(a,(b) => b < 6));
/************ Reduce ****************/
console.log("Reduce");
console.log(myReduce(a,(accum, b) => accum + b));
/************ Includes 3? ****************/
console.log("includes 3");
console.log(myIncludes(a,3));
/************ Push 6 ****************/
console.log("push 6");
myPush(a,6);
console.log(a);

/*************** lastIndexOf ***********/
let b = [1,1,1,1,1,1,1,2,2,2,4,2,1];
console.log(b);
console.log("last Index of 2");
console.log(myUnshift(b,2));

/************** Keys  ************/
console.log("Object:");
let obj = {'a':'s','b':'bs', 2:3, 4:2,23:2};
console.log(obj);
console.log("grabKeys");
console.log(grabKeys(obj));
/************** Values  ************/
console.log("grabValues");
console.log(grabValues(obj));

/*********** Range ***************/
console.log(range(1,10));
console.log(range(1,20,2));

/************sum****************/
console.log(sum(range(1,10)));
/******** REverse array *************/
console.log(reverseArray(["A", "B", "C"]));
/******** REverse array in place  *************/
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

/******* arrayToList *************/

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

/********* List to array **********/
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
