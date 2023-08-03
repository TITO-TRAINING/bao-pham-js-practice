import Table from '../components/table';
import { COLUMNS, DATA } from '../../constants/constant';
import ToastBox from '../components/toast';
const Main = () => {
  return `
    <main>
      <div class="container">
        ${Table(COLUMNS, DATA)}
      </div>
        ${ToastBox()}
    </main>
  `;
};

export default Main;
