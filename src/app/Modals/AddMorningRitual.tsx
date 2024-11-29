import Modal from "../components/Modal"

type DisplayModal = {
    show: boolean;
    onClose: (value: boolean | ((prevState: boolean) => boolean)) => void;
}

export default function AddMorningRitual({show, onClose}: DisplayModal) {
    return(
        <Modal show={show} onClose={onClose}>
            <h1>I am HIM!!</h1>
        </Modal>
    )
}