import transit from './lib/index'

let o = {
    newValue: 0
}
const app = document.querySelector('#app')
setInterval(() => {
    let value = Math.floor(Math.random() * 1000)
    transit('#app', {
        duration: 500,
        // name: 'newValue',
        value
    })
    console.log(value)
}, 3000)