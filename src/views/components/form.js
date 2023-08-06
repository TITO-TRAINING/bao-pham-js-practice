import INPUT_FIELD from '../../constants/form';
import FormGroup from './formGroup';

const Form = () => {
  return `
    <div class="container">
      <div class="form-wrapper">
        <h2 class="form-title"></h2>
        <form id="form-person">
          ${INPUT_FIELD.map((value) => {
            return FormGroup(value);
          }).join('')}
          <button type="submit" class="btn-add">Add</button>
          <button type="submit" class="btn-save" hidden>Update</button>
        </form>
      </div>
    </div>
  `;
};

export default Form;
