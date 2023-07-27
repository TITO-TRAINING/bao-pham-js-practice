import Header from '../layouts/header';
import Main from '../layouts/main';

const HomePage = () => {
  return `
  <div class="wrapper">
    ${Header()}
    ${Main()}
  </div>
  `;
};

export default HomePage;
