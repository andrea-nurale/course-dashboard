import Modal from "../../../components/Modal";
import Button from "../../../components/Button";

interface Props {
    open: boolean
    handleClose: ()=> void
    handleDelete: ()=> void

}
const ModalConfirm = ({open, handleClose, handleDelete}: Props)=>{

    return   <Modal show={open}>
        <div>Vuoi veramente cancellare lo user ?</div>
        <Button onClick={handleDelete}>Si</Button>
        <Button onClick={handleClose}>No</Button>
    </Modal>
}

export default ModalConfirm