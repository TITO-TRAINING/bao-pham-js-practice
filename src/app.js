import PersonController from './controllers/appController';
import PersonService from './services/person.service';
import AppView from './views/appView';

new PersonController(new AppView(), new PersonService());
