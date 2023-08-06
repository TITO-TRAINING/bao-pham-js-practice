import VALIDATOR from '../enums/validator';

export const isRequired = (selector, message = VALIDATOR.isRequired) => {
  return {
    selector,
    test: (value) => {
      return value ? undefined : message;
    },
  };
};

export const isAgeValid = (selector, message = VALIDATOR.isAgeValid) => {
  return {
    selector,
    test: (value) => {
      return value > 0 && value <= 120 ? undefined : message;
    },
  };
};

export const resetValidate = (form, errorSelector) => {
  const formGroup = form.querySelectorAll('.form-group');

  formGroup.forEach((item) => {
    item.classList.remove('invalid');
    item.querySelector(errorSelector).innerText = '';
  });
};
