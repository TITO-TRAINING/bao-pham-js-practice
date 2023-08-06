class AppController {
  constructor(appView, personService) {
    this.app = appView;
    this.personService = personService;

    this.handleDisplayData();
    this.personService.bindOnDataChanged(this.onDataChanged);
    this.app.bindAddPerson(this.handleAddPerson);
    this.app.bindUpdatePerson(this.handleUpdatePerson);
    this.app.bindDeletePerson(this.handleDeletePerson);
    this.app.bindSearch(this.handleSearch);
  }

  onDataChanged = (persons, type = 'get') => {
    this.app.renderPerson(persons, type);
  };

  async handleDisplayData() {
    const persons = await this.personService.getAllPerson();
    this.app.renderPerson(persons);
  }

  handleAddPerson = (person) => {
    this.personService.add(person);
  };

  handleUpdatePerson = (id, person) => {
    this.personService.update(id, person);
  };

  handleDeletePerson = (id) => {
    this.personService.delete(id);
  };

  handleSearch = (key) => {
    this.personService.search(key);
  }
}

export default AppController;
