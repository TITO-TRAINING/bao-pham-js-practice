import HomePage from './pages/homePage';
import getNode from '../utils/getNode';
import PersonItem from './components/personItem';
import Validator from '../utils/validator';
import {
  isRequired,
  isAgeValid,
  resetValidate,
} from '../utils/methodsValidator';

class AppView {
  constructor() {
    this.app = document.querySelector('#root');
    this.createApp();
    this.persons = [];

    const selectors = [
      '.btn-insert',
      '.btn-add',
      '.person-table tbody',
      '.overlay',
      '.btn-save',
      '.form-title',
    ];
    const [btnInsert, btnAdd, table, form, btnUpdate, formTitle] =
      getNode(selectors);

    this.btnAdd = btnAdd;
    this.btnInsert = btnInsert;
    this.btnUpdate = btnUpdate;
    this.table = table;
    this.form = form;
    this.formTitle = formTitle;

    this.popupForm();
    this.closeToast();
  }

  set DataForm({ name = '', age = '', address = '' }) {
    const selectors = ['#name', '#age', '#address'];
    const [inputName, inputAge, inputAddress] = getNode(selectors);
    inputName.value = name;
    inputAge.value = age;
    inputAddress.value = address;
  }

  get DataForm() {
    const selectors = ['#name', '#age', '#address'];
    const [inputName, inputAge, inputAddress] = getNode(selectors);

    return {
      name: inputName.value,
      age: inputAge.value,
      address: inputAddress.value,
    };
  }

  createApp = () => {
    this.app.innerHTML = HomePage();
  };

  popupForm = () => {
    this.btnInsert.addEventListener('click', (e) => {
      e.preventDefault();
      this.DataForm = '';
      this.form.hidden = false;
      this.btnAdd.hidden = false;
      this.btnUpdate.hidden = true;
      this.formTitle.innerHTML = 'Add new person';
      resetValidate(this.form, '.error-message');
    });

    this.form.addEventListener('click', (e) => {
      if (e.target.className === 'overlay') {
        resetValidate(this.form, '.error-message');
        this.form.hidden = true;
      }
    });
  };

  closeToast = () => {
    const toastBox = document.querySelector('.toast-box');
    const toastItem = toastBox.querySelector('.toast-item');
    toastBox.addEventListener('click', (e) => {
      if (e.target.closest('.toast-item')) {
        toastBox.remove(toastItem);
      }
    });
  };

  renderPerson(persons, type) {
    const emptyMessage = document.querySelector('.empty-message');
    if (persons) {
      this.persons = persons;
      this.table.parentElement.hidden = false;
      emptyMessage.innerHTML = '';
      this.table.innerHTML = PersonItem(persons);
    }
    if (persons.length === 0) {
      this.table.parentElement.hidden = true;
      switch (type) {
        case 'search':
          emptyMessage.innerHTML = "Couldn't find any data";
          break;
        default:
          emptyMessage.innerHTML = 'Data table is null';
      }
    }
  }

  bindAddPerson(callback) {
    this.btnAdd.addEventListener('click', () => {
      const validator = new Validator({
        form: '#form-person',
        errorSelector: '.error-message',
        rules: [
          isRequired('#name'),
          isRequired('#age'),
          isAgeValid('#age'),
          isRequired('#address'),
        ],
        onSubmit: () => {
          callback(this.DataForm);
          this.form.hidden = true;
          resetValidate(this.form, '.error-message');
        },
      });
    });
  }

  bindUpdatePerson(callback) {
    let idPerson;
    this.btnUpdate.addEventListener('click', () => {
      const validate = new Validator({
        form: '#form-person',
        errorSelector: '.error-message',
        rules: [
          isRequired('#name'),
          isRequired('#age'),
          isAgeValid('#age'),
          isRequired('#address'),
        ],
        onSubmit: () => {
          callback(idPerson, this.DataForm);
          this.form.hidden = true;
          resetValidate(this.form, '.error-message');
        },
      });
    });

    this.table.addEventListener('click', (e) => {
      if (e.target.closest('.update')) {
        let [person] = this.persons.filter(
          (person) => person.id == e.target.closest('tr').dataset.id,
        );

        idPerson = person.id;
        this.DataForm = person;
        this.formTitle.innerHTML = 'Update person';
        this.form.hidden = false;
        this.btnUpdate.hidden = false;
        this.btnAdd.hidden = true;
      }
    });
  }

  bindDeletePerson(callback) {
    this.table.addEventListener('click', (e) => {
      if (e.target.closest('.delete')) {
        callback(e.target.closest('tr').dataset.id);
      }
    });
  }

  bindSearch(callback) {
    const inputSearch = document.querySelector('#search');
    inputSearch.addEventListener('input', () => {
      callback(inputSearch.value);
    });
  }
}

export default AppView;
