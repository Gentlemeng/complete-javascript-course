'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/**
 * MicroTasks Queue like callback queue, bur for
 * callbacks related to promises. Has priority over queue!
 */
/*
console.log('Test start')
setTimeout(() => console.log('0 sec timer'), 0)
Promise.resolve('Resolved Promise 1').then(res => console.log(res))
Promise.resolve('Resolved Promise 2').then(res => {
  for (let index = 0; index < 1000000000; index++) {}
  console.log(res)
})
console.log('Test end')
*/
// The Answer
// The Event Loop in Practice
// 1. Test start
// 2. Test end
// 3. Resolved Promise 1
// 4. Resolved Promise 2
// 5. 0 sec timer

/*
async function async1(){
	console.log('async1 start')
	await async2()
	console.log('async1 end')
}
async function async2(){
	console.log('async2')
}
console.log('script start')
setTimeout(function(){
	console.log('setTimeout') 
},0)  
async1();
new Promise(function(resolve){
	console.log('promise1')
	resolve();
}).then(function(){
	console.log('promise2')
})
console.log('script end')

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
*/

