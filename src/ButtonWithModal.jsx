import Modal from "./modal";
import useModalDialog from "./hooks/useModalDialog";

export default function ButtonWithModal(){
    const {isOpen,open,close} = useModalDialog();
    return (
        <>
            <button onClick={open}>open Modal </button>
            {isOpen && <Modal close ={close }/>}
        </>
    )
}