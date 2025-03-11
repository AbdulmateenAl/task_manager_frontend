type ModalProps = {
    show: boolean;
    onClose: (value: boolean | ((prevState: boolean) => boolean)) => void;
    children: React.ReactNode;
  };
  
  export default function Modal({ show, onClose, children }: ModalProps) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center z-10 transition-transform duration-300 ease-in-out ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative w-[350px] max-w-xl h-[80vh] bg-blue-500 rounded-2xl p-4">
          <button
            onClick={() => onClose(false)}
            className="absolute top-1 right-1 flex items-center justify-center w-6 h-6 rounded-full bg-white"
          >
            X
          </button>
          <div className="h-full overflow-y-auto">{children}</div>
        </div>
      </div>
    );
  }
  