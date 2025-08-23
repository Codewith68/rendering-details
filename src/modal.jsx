export default function Modal({close }){
    return (
        <div className="modal">
            <h2> modal</h2>
            <p> This is a modal</p>
            <button onClick={close}> Close Modal</button>
            
        </div>
    )
}