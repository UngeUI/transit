import wrapper from './wrapper.js'

function transit(o, { duration, name, value }) {
    const {
        target,
        attr
    } = wrapper(o, name)
    const oldValue = Number(target[attr])
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
            target[attr] = Math.min(aheadDistance, newValue)
        } else {
            target[attr] = Math.max(aheadDistance, newValue)
        }
        if (elaped < 1000) {
            requestAnimationFrame(computed)
        }
    }
}

export default transit