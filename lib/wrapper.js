export default function wrapper(o, name) {
    const result = {
        target: null,
        attr: null
    }
    if (typeof o == 'string') {
        result.target = document.querySelector(o)
        result.attr = 'innerText'
    } else {
        result.target = o
        result.attr = name
    }
    return result
}