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
        transit('#app', {
            duration: 1000,
            value: Math.floor(Math.random() * 10000)
        })
    }, 2000)
</script>
```