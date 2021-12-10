<template>
    <div>
        {{obj.value}}
    </div>
</template>

<script setup>
import Transit from '../lib/index'
import { reactive }  from 'vue'
let obj = reactive({
    value: 23
})

setInterval(() => {
    Transit(obj, {
        name: 'value',
        duration: 500,
        value: obj.value + 100
    })
},1000)
</script>