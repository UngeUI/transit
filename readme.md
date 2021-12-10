## Target

Let the numbers transition when they change

## Usage

```shell
$ yarn add @ungeui/transit
```
import:

```js
import Transit from '@ungeui/transit'
```

## Example

```html
<script src="https://cdn.jsdelivr.net/npm/@ungeui/transit@1.0.0/dist/transit.umd.min.js"></script>

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

## Display
![img](https://img-blog.csdnimg.cn/52395997fe4b46d0897815c3eed6da0c.gif)
[try it in codepen](https://codepen.io/peterroe/pen/ZEXpWrY?editors=1111)
