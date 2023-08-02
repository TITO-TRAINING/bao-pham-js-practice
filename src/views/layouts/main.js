import Table from '../components/table';
import { COLUMNS, DATA } from '../../constants/constant';
import Form from '../components/form';

const Main = () => {
  return `
    <main>
      <div class="container">
        ${Table(COLUMNS, DATA)}
      </div>
    </main>
  `;
};

export default Main;
