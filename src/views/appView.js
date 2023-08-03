import HomePage from './pages/homePage';
import getNode from '../utils/getNode';
import PersonItem from './components/personItem';

class AppView {
  constructor() {
    this.app = document.querySelector('#root');
    this.createApp();
    this.persons = [];

    const selectors = ['#submit', '.person-table'];
    const [btnAdd, table] = getNode(selectors);

    this.btnAdd = btnAdd;
    this.table = table;
  }

  set Data({ name, age, address }) {
    const selectors = ['#name', '#age', '#address'];
    const [inputName, inputAge, inputAddress] = getNode(selectors);
    inputName.value = name;
    inputAge.value = age;
    inputAddress.value = address;
  }

  get Data() {
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

  renderPerson(persons) {
    this.persons = persons;
    this.table.innerHTML += PersonItem(persons);
  }

  bindAddPerson(callback) {
    this.btnAdd.addEventListener('click', (e) => {
      e.preventDefault();
      callback(this.Data);
    });
  }

  bindUpdatePerson(callback) {
    this.table.addEventListener('click', (e) => {
      if (e.target.closest('.update')) {
        const [person] = this.persons.filter(
          (person) => person.id == e.target.closest('tr').dataset.id,
        );
        this.Data = person;
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
}

export default AppView;
