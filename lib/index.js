function transit(o, { duration, name, value }) {
    const dom = document.querySelector(o)
    const oldValue = Number(dom.innerText)
    const newValue = value
    const distance = newValue - oldValue
    const p = distance / 1000

    let startTime = undefined

    requestAnimationFrame(computed)

    function computed(temp) {

        if (startTime == undefined) {
            startTime = temp
        }
        const elaped = temp - startTime //0 -> 1000
        const aheadDistance = Math.floor(oldValue + elaped * p)
        if (distance > 0) {
            dom.innerText = Math.min(aheadDistance, newValue)
        } else {
            dom.innerText = Math.max(aheadDistance, newValue)
        }
        if (elaped < 1000) {
            requestAnimationFrame(computed)
        }
    }
}

export default transit