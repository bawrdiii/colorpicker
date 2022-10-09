import { useRef } from "react"


const Hamburger = () => {

    const pElement = useRef()

    const hamHandler = () => {
        const pDom = pElement.current
        if (pDom.classList.contains('ham-after')) {
            pDom.classList.remove("ham-after")
            pDom.classList.add('ham-before')
        }

        else {
            pDom.classList.add("ham-after")
            pDom.classList.remove("ham-before")
        }

    }

    return (
        <>
            <div className="p-rel" onClick={hamHandler}>
                <p className="hamburger" ref={pElement}></p>
            </div>
        </>
    )
}
export default Hamburger