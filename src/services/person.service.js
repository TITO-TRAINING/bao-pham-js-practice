import Toast from '../utils/toast';
import { TOAST_MESSAGE } from '../enums/toast';
import INSTANCE from '../utils/request';
import PersonSchema from '../model/person';

class PersonService {
  constructor() {
    this.persons = [];
    this.endpoint = '/person';
  }

  bindOnDataChanged = (callback) => {
    this.onDataChanged = callback;
  };

  commitPersons = (persons) => {
    this.onDataChanged(persons);
  };

  async getAllPerson() {
    try {
      const { data } = await INSTANCE.get(this.endpoint);

      this.persons = data.map((person) => {
        return new PersonSchema(person);
      });

      return this.persons;
    } catch (error) {
      Toast.error(error);
      throw error;
    }
  }

  async add(person) {
    try {
      const { data } = await INSTANCE.post(this.endpoint, person);
      if (data) {
        this.persons.push(new PersonSchema(data));
      }
      this.commitPersons(this.persons);
      Toast.success(TOAST_MESSAGE.CREATE);
    } catch (error) {
      Toast.error(error);
      throw error;
    }
  }

  async update(id, newPerson) {
    try {
      const { data } = await INSTANCE.put(`${this.endpoint}/${id}`, newPerson);

      if (data) {
        this.persons.map((person, index) => {
          if (person.id === id) {
            this.persons[index] = new PersonSchema(data);
          }
        });
      }
      this.commitPersons(this.persons);
      Toast.success(TOAST_MESSAGE.UPDATE);
    } catch (error) {
      Toast.error(error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const { data } = await INSTANCE.delete(`${this.endpoint}/${id}`);
      if (data) {
        this.persons = this.persons.filter((person) => {
          return person.id != id;
        });
      }
      this.commitPersons(this.persons);
      Toast.success(TOAST_MESSAGE.DELETE);
    } catch (error) {
      Toast.error(error);
      throw error;
    }
  }

  search = (key) => {
    if (key) {
      key = key.toLowerCase();
      const tempPersons = this.persons.filter(({ name, age, address }) => {
        return (
          name.toLowerCase().includes(key) ||
          age.toLowerCase().includes(key) ||
          address.toLowerCase().includes(key)
        );
      });
      this.onDataChanged(tempPersons, 'search');
    } else {
      this.onDataChanged(this.persons);
    }
  };
}

export default PersonService;
