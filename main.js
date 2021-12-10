import transit from './lib/index'

const app = document.querySelector('#app')
setInterval(() => {
    let value = Math.floor(Math.random() * 1000)
    transit('#app', {
        duration: 500,
        value: value
    })
}, 3000)