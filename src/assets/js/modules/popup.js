//   function showModalByTime(selector, time) {
//     setTimeout(() => {
//       document.querySelector(selector).style.display = "block";
//       document.body.classList.add("modal-open");
//     }, time);
//   }
//   bindModal(".popup__open", ".popup", ".popup .popup__close");
//   showModalByTime(".popup", 300000);
// };

export default class Popup {
  constructor(btnSelector, time = null) {
    this.btnPopup = document.querySelectorAll(btnSelector);
    this.modal = document.querySelector(".popup");
    this.btnClose = document.querySelector(".popup .popup__close");
    this.time = time;
    this.init();
  }
  init() {
    this.btnPopup.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        this.open();
      });
    });
    if (this.time) {
      this.showModalByTime(this.time);
    }
    this.close();
    this.innerPopup();
  }
  open() {
    this.modal.style.display = "block";
    document.body.classList.add("modal-open");
  }
  close() {
    this.btnClose.addEventListener("click", () => {
      this.modal.style.display = "none";
      document.body.classList.remove("modal-open");
    });
  }
  innerPopup() {
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.modal.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    });
  }
  destroy() {
    this.modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
  showModalByTime(time) {
    setTimeout(() => {
      this.modal.style.display = "block";
      document.body.classList.add("modal-open");
    }, time);
  }
}
