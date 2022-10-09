import { useState } from "react"

const ColorPicker = () => {
    const [color, setColor] = useState('')

    return (
        <section className="container main-sec">
            <div className="title">
                <h2>Color Picker</h2>
            </div>
            <input
                type="text"
                className="result-input"
                readOnly
                placeholder="Click to copy result"
                // value={ }
                onChange
            />
            <label htmlFor="color-input" className="color-label d-flex-label">Pick your color
                <input type="color" id="color-input" className="color-input" value={color} onChange={e => console.log(e.target.value)} />
            </label>

            
        </section>
    )
}

export default ColorPicker