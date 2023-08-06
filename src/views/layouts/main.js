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
        <div class"not-content">
          <p class='empty-message'></p>
        </div>
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
