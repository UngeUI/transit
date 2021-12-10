import wrapper from './wrapper.js'

function transit(o, { duration = 1000, name, value }) {
    const {
        target,
        attr
    } = wrapper(o, name)
    const oldValue = Number(target[attr])
    const newValue = value
    const distance = newValue - oldValue
    const p = distance / duration

    let startTime = undefined

    requestAnimationFrame(computed)

    function computed(temp) {

        if (startTime == undefined) {
            startTime = temp
        }
        const elaped = temp - startTime //0 -> 1000
        const aheadDistance = Math.floor(oldValue + elaped * p)
        if (distance > 0) {
            target[attr] = Math.min(aheadDistance, newValue)
        } else {
            target[attr] = Math.max(aheadDistance, newValue)
        }
        if (elaped < duration) {
            requestAnimationFrame(computed)
        }
    }
}

export default transit