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
        value: obj.value + 100
    })
},2000)
</script>