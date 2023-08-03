import { TOAST_TYPE } from '../enums/toast';
import CreateToast from './createToast';

const Toast = {
  success: (message) => {
    const type = TOAST_TYPE.SUCCESS;
    CreateToast(type, message);
  },
  error: (message) => {
    const type = TOAST_TYPE.ERROR;
    CreateToast(type, message);
  },
};

export default Toast;
