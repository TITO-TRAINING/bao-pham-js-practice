import INPUT_FIELD from '../../constants/form';
import FormGroup from './formGroup';

const Form = (type) => {
  return `
    <div class="container">
      <h2>${type}</h2>
      <form>
        ${INPUT_FIELD.map((value) => {
          return FormGroup(value);
        }).join('')}
        <button type="submit">Insert</button>
      </form>
    </div>
  `;
};

export default Form;
