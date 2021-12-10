import transit from './lib/index'

let o = {
    number: 23,
    newValue: 0
}
const app = document.querySelector('#app')
setInterval(() => {
    transit(o, {
        duration: 0.5,
        name: 'newValue',
        value: Math.floor(Math.random() * 100)
    })
    app.innerText = o.newValue
}, 1000)