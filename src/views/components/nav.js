import { NAVIGATION } from '../../constants/constant';

const Nav = () => {
  return `
    <nav>
      ${NAVIGATION.map((value) => {
        return `
          <a href="${value.href}">${value.title}</a>
        `
      }).join('')}
    </nav>
  `;
};

export default Nav;
