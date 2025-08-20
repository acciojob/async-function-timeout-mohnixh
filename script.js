
const text = document.getElementById('text')
const delay = document.getElementById('delay')
const button = document.getElementById('btn')
const output = document.getElementById('output')

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

button.addEventListener('click', async function (e) {
    e.preventDefault()

    const newText = text.value.trim()
    const newDelay = Number(delay.value.trim())

    if (!newText || isNaN(newDelay) || newDelay < 0) {
        output.innerHTML = "⚠️ Please enter valid text and delay (ms)."
        return
    }

    await wait(newDelay)

    output.innerHTML = newText
})