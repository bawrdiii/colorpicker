import { useRef, useState } from "react"

const ColorPicker = () => {
    const [color, setColor] = useState("")
    const [result, setResult] = useState("")

    const pElement = useRef()
    const divElement = useRef()

    const checkColor = (e) => {
        let value = e.target.value
        setColor(value)
        const pDom = pElement.current
        setResult(value)
        if (value !== "") {
            pDom.classList.add('v-visible')
            pDom.style.color = `${value}`
        }
    }
    const copyRes = () => {

        var copyText = document.querySelector('#result-input')
        copyText.select()
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy")
        var alertDiv = divElement.current
        if (result !== "") {
            alertDiv.classList.add("alert-after")
        }
        setTimeout(() => {
            alertDiv.classList.remove("alert-after")
        }, 6000);
    }

    const clearHandler = () => {
        setColor("")
        setResult("")
        const pDom = pElement.current
        pDom.classList.remove("v-visible")
    }

    return (
        <>
            <section className="container main-sec">
                <div className="title">
                    <h2>Color Picker</h2>
                </div>
                <input
                    type="text"
                    className="result-input"
                    readOnly
                    placeholder="Click to copy result"
                    value={result}
                    onChange={e => e.target.value}
                    onClick={copyRes}
                    id='result-input'
                />
                <label htmlFor="color-input" className="color-label d-flex-label">Pick your color
                    <input type="color"
                        id="color-input"
                        className="color-input"
                        value={color}
                        onChange={checkColor} />
                </label>

                <p className="result-p v-hidden" ref={pElement}>How is the color you picked?</p>
                <button className="btn" onClick={clearHandler} type='button'>Clear</button>
            </section>
            <span className="alert v-hidden" id="alert" ref={divElement}>
                Copied!
            </span>
        </>
    )
}

export default ColorPicker