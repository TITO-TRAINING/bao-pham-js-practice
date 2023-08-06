class Validator {
  constructor(options) {
    this.form = document.querySelector(options.form);
    this.errorSelector = options.errorSelector;
    this.rules = options.rules; //bao gồm các rules được yêu cầu trong form
    this.onSubmit = options.onSubmit;
    this.selectorRules = {}; //bao gồm các rules của một inputElement

    this.handleValidator();
  }

  handleValidator = () => {
    if (this.form) {
      this.form.onsubmit = (e) => {
        let formIsValid = true;
        e.preventDefault();
        const selectors = new Set();
        this.rules.forEach((rule) => {
          selectors.add(rule.selector);
          const inputElement = this.form.querySelector(rule.selector);
          let isValid = this.validate(inputElement, rule);
          if (!isValid) formIsValid = false;
        });
        if (formIsValid) this.onSubmit();
      };

      this.rules.forEach((rule) => {
        const inputElement = this.form.querySelector(rule.selector);

        //xử lí nhiều rule của một inputElement
        if (Array.isArray(this.selectorRules[rule.selector])) {
          this.selectorRules[rule.selector].push(rule.test);
        } else {
          this.selectorRules[rule.selector] = [rule.test];
        }

        if (inputElement) {
          inputElement.onblur = () => {
            this.validate(inputElement, rule);
          };

          inputElement.oninput = () => {
            const errorElement = inputElement.parentElement.querySelector(
              this.errorSelector,
            );
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
          };
        }
      });
    }
  };

  validate = (inputElement, rule) => {
    const errorElement = inputElement.parentElement.querySelector(
      this.errorSelector,
    );
    let errorMessage;
    let rulesInputElement = this.selectorRules[rule.selector];

    //lặp qua từng rule và kiểm tra, nếu có lỗi thì dừng kiểm tra rule tiếp theo
    for (let i = 0; i < rulesInputElement.length; i++) {
      errorMessage = rulesInputElement[i](inputElement.value.trim());
      if (errorMessage) break;
    }

    //set invalid cho message
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add('invalid');
    } else {
      errorElement.innerText = '';
      inputElement.parentElement.classList.remove('invalid');
    }

    return !errorMessage;
  };
}

export default Validator;
