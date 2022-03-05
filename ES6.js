// let array = [10,20,30,40];

// //for ... of ... 
// //for - of 문은 iterable이어야 사용가능 
// //객체의 특성에 맞추어 for-in, for-of 중 사용해야함 
// for(let val in array){
//   console.log(array[val]);
// }

// for(let val of array){
//   console.log(val);
// }

// let obj = { 
//   a: 1,
//   b: 2,
//   c: 3
// }

// for(let val in obj){
//   console.log(val);
// }


//--------------------------------------
//Rest Operater - 나머지 인자를 처리할때 
// function f(a,b, ...c){
// }

// function printNum(num1,num2){
//   console.log(num1,num2);
// }

// function printNum(num1, ...num2){
//   // console.log(arguments); //arguments는 함수로 전달된 모든 인수를 가지고 있는 객체
//   console.log(num1,num2)
// }
// printNum(1,2,3,4,5);


//----------------------------------------
//Spread Operator
// function sum(x,y,z){
//   return x+y+z;
// }

// console.log(sum(1,2,3));

// let arr=[10,20,30];
// // console.log(sum.apply(null,arr)); 
// console.log(sum(...arr));

// function sum(a,b,c,d,e){
//   return a+b+c+d+e;
// }
// let arr = [20,30,4060];
// console.log(
//   sum(10, ...arr,40,50) //함수 인자에도 사용 가능 
// )


// let face = ['eye','nose','mouth'];
// let head = ['hair', ...face, 'ears']; //배열에서도 사용 가능, 이전 배열을 elements로 갖고자할때 사용 
// console.log(head);

// let arr = [1,2,3];
// // let arrCopy = [...arr]; //배열을 복사할때도 사용, spread operator를 사용해서 복사하면 arr에 영향을 끼치지 않음, 직접 복사하기보다는 얘를 사용하는걸 권장 
// let arrCopy = arr; //이런경우 arrCopy에 값이 변경되면 arr에도 영향을 미침 
// arrCopy.push(4);
// console.log(arr);
// console.log(arrCopy);

// let drinks = {
//   caffe : 'latte',
//   coca : 'cola'
// }

// let newDrinks = {
//   lemon : 'tee',
//   orange : 'juice',
//   ...drinks
// }

// console.log(newDrinks);


//-------------------------------

