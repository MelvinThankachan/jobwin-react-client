const AuthModal = () => {
  const openModal = () => {
    const modal = document.getElementById("my_modal");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>
        open modal
      </button>
      <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="">close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AuthModal;
