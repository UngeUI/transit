import transit from './lib/index'

const app = document.querySelector('#app')
setInterval(() => {
    const ranDomValue = Math.floor(Math.random() * 1000)
    transit('#app', {
        duration: 1000,
        value: ranDomValue
    })
    console.log(ranDomValue)
}, 2000)