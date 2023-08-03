import Toast from '../utils/toast';
import { TOAST_MESSAGE } from '../enums/toast';
import INSTANCE from '../utils/request';
import PersonSchema from '../model/person';

class PersonService {
  constructor() {
    this.persons = [];
    this.endpoint = '/person';
  }

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
        this.persons.push(data);
      }
      Toast.success(TOAST_MESSAGE.CREATE);

      return data;
    } catch (error) {
      Toast.error(error);
      throw error;
    }
  }

  async update(id, newPerson) {
    try {
      const { data } = await INSTANCE.put(`${this.endpoint}/${id}`, newPerson);

      if (data) {
        this.persons.push(data);
      }
      Toast.success(TOAST_MESSAGE.UPDATE);

      return data;
    } catch (error) {
      Toast.error(error);
      throw error;
    }
  }

  async delete(id) {
    try {
      const { data } = await INSTANCE.delete(`${this.endpoint}/${id}`);
      Toast.success(TOAST_MESSAGE.DELETE);
    } catch (error) {
      Toast.error(error);
      throw error;
    }
  }
}

export default PersonService;
