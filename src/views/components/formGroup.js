const FormGroup = (content) => {
  let { label, inputType, name, id, placeholder } = content;

  return `
    <div class="form-group">
      <label for="${id}">${label}</label>
      <input type="${inputType}" name="${name}" id="${name}" placeholder="${placeholder}">
      <span class="error-message"></span>
    </div>
  `;
};

export default FormGroup;
