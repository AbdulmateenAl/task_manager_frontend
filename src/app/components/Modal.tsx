type ModalProps = {
    show: boolean;
    onClose: (value: boolean | ((prevState: boolean) => boolean)) => void;
    children: React.ReactNode
}

export default function Modal({show, onClose, children}: ModalProps) {
    return(
        <div
            style={{ transform: show ? "translateX(0%)" : "translateX(-400%)"}}
            className="flex w-[300px] max-w-xl h-[80vh] bg-gray-100 items-center justify-center fixed top-8 rounded-lg z-10 p-4 transition-transform duration-300 ease-in-out">
            <div className="max-w-2xl h-[80vh]">
                <button onClick={() => {onClose(false)}} className="flex items-center justify-center w-6 h-6 rounded-full fixed top-1 right-1 bg-white">X</button>
                <div className="h-full overflow-y-auto">{children}</div>
            </div>
        </div>
    )
}