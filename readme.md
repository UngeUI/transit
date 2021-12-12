## Target

Let the numbers transition when it change

Usage like `gsap.to()`, but Its size is tiny:

<a href="http://img.badgesize.io/https://unpkg.com/@ungeui/transit/dist/transit.esm.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/@ungeui/transit/dist/transit.esm.js?compression=gzip&label=gzip%20size:%20JS">
</a>

## Usage

```shell
$ yarn add @ungeui/transit
```
import:

```js
import Transit from '@ungeui/transit'
```

## HTML Example

```html
<script src="https://unpkg.com/@ungeui/transit"></script>

<span id="app">
    0
</span>

<script>
    setInterval(() => {
        const ranDomValue = Math.floor(Math.random() * 1000)
        transit('#app', {
            duration: 1000,
            value: ranDomValue
        })
        console.log(ranDomValue)
    }, 2000) 
</script>
```
[try it in codepen:](https://codepen.io/peterroe/pen/eYGBgjv?editors=1111)

![img](https://img-blog.csdnimg.cn/52395997fe4b46d0897815c3eed6da0c.gif)

## Vue Support

You can use it in VueJs. 

Because variables are reactive.

```html
<template>
    <div>
        {{obj.value}}
    </div>
</template>

<script setup>
import Transit from '@ungeui/transit'
import { reactive }  from 'vue'
let obj = reactive({
    number: 23
})

setInterval(() => {
    Transit(obj, {
        duration: 500,
        key: 'number',
        value: obj.value + 100
    })
},1000)
</script>
```

![img](https://img-blog.csdnimg.cn/122f98db86594a47a6e88d3f1e6c808d.gif)

