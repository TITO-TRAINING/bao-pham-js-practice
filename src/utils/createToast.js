import ToastItem from '../views/components/toastItem';

const CreateToast = (type, message) => {
  const toastBox = document.querySelector('.toast-box');
  const toastItem = document.createElement('div');
  const toast = ToastItem(type, message);

  toastItem.innerHTML = toast;
  toastBox.appendChild(toastItem);

  setTimeout(() => {
    toastItem.remove();
  }, 5000);
};

export default CreateToast;
