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

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/*
const imageParent = document.querySelector('.images')

function createImage(imgPath) {
  return new Promise(function(resolve, reject) {
    const image = document.createElement('img')
    image.src = imgPath

    image.addEventListener('load', function() {
      // imageParent.insertAdjacentElement(image)
      imageParent.append(image)
      resolve(image)
    })
    image.addEventListener('error', function() {
      reject(new Error('image load error'))
    })
  })
}
createImage('img/img-1.jpg')
  .then(async function(image) {
    await wait(2)
    image.style.display = 'none'
    return createImage('img/img-2.jpg')
  })
  .then(async function async(image) {
    await wait(2)
    image.style.display = 'none'
  })
  .catch(err => console.error(err))


const wait = function (seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000)
  })
}
*/

// bad
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

// good
// (async function() {
//   try {
//     const city = await whereAmI()
//     console.log(`2: ${city}`)
//   } catch (err) {
//     console.error(`2: ${err.message} 💥`)
//   }
//   console.log(`3: Finished getting location`)
// })()

