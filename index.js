
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')

const res1 = document.getElementById('res1')
const res2 = document.getElementById('res2')

function getCounter() {
  let counter = 1
  return function () {
    return counter++
  }
}
let count = getCounter()
let count1 = getCounter()

btn1.addEventListener('click', () => {
  const text = count()
  res1.innerText = text
})
btn2.addEventListener('click', () => {
  const text1 = count1()
  res2.innerText = text1
})
