import { TOAST_TITLE } from "../../enums/toast";

const ToastItem = (type, message) => {
  const icons = {
    success: 'fa-sharp fa-solid fa-circle-check',
    error: 'fa-sharp fa-solid fa-circle-xmark',
  };

  return `
    <div class="toast-item ${type}">
      <i class="${icons[type]}"></i>
      <div>
        <p class="toast-title">${TOAST_TITLE[type]}</p>
        <span class="toast_message">${message}</span>
      </div>
    </div>
  `;
};

export default ToastItem;
