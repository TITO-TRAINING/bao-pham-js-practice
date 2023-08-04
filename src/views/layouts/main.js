import Table from '../components/table';
import Form from '../components/form';
import Menu from '../components/menu';
import { COLUMNS, DATA } from '../../constants/constant';
import ToastBox from '../components/toast';
const Main = () => {
  return `
    <main>
      ${Menu()}
      <div class="container">
        ${Table(COLUMNS, DATA)}
        <div class="overlay" hidden>
          ${Form()}
        </div>
      </div>
        ${ToastBox()}
    </main>
  `;
};

export default Main;
