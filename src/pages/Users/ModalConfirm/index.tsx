import Modal from "../../../components/Modal";
import Button from "../../../components/Button";

interface Props {
    open: boolean
    handleClose: ()=> void
    handleDelete: ()=> void

}
const ModalConfirm = ({open, handleClose, handleDelete}: Props)=>{

    return   <Modal show={open}>
        <div className=" flex flex-col h-full justify-between">
            <div>Vuoi veramente cancellare lo user ?</div>
            <div className="flex justify-end">
            <Button onClick={handleDelete}>Si</Button>
                <div className="w-6" />
            <Button onClick={handleClose}>No</Button>
            </div>
        </div>
    </Modal>
}

export default ModalConfirm