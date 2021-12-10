import { createApp } from 'vue'
import App from './App.vue'

import transit from '../lib/index'

createApp(App).mount('#app')
    // const app = document.querySelector('#app')
    // setInterval(() => {
    //     const ranDomValue = Math.floor(Math.random() * 1000)
    //     transit('#app', {
    //         duration: 1000,
    //         value: ranDomValue
    //     })
    //     console.log(ranDomValue)
    // }, 2000)