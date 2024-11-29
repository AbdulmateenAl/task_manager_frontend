type ModalProps = {
    show: boolean;
    onClose: (value: boolean | ((prevState: boolean) => boolean)) => void;
    children: React.ReactNode
}

export default function Modal({show, onClose, children}: ModalProps) {
    return(
        <div
            style={{ transform: show ? "translateX(0%)" : "translateX(-200%)"}}
            className="w-full h-full">
            <div className="max-w-2xl h-[80vh] bg-black">
                <button onClick={() => {onClose(false)}}></button>
                <div className="h-full overflow-y-auto">{children}</div>
            </div>
        </div>
    )
}