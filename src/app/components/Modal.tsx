type ModalProps = {
    show: boolean;
    onClose: (value: boolean | ((prevState: boolean) => boolean)) => void;
    children: React.ReactNode;
  };
  
  export default function Modal({ show, onClose, children }: ModalProps) {
    return (
      <div
        className={`modal-view ${show ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="relative text-gray-200 w-[400px] max-w-xl h-[80vh] rounded-lg p-4 shadow-xl border border-gray-700">
          <button
            onClick={() => onClose(false)}
            className="flex items-center justify-center w-6 h-6 absolute top-3 right-1 bg-gray-600 hover:bg-gray-500 text-white px-2 py-1 rounded-full"
          >
            X
          </button>
          <div className="h-full overflow-y-auto">{children}</div>
        </div>
      </div>
    );
  }
  