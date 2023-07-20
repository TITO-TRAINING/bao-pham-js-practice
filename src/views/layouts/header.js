import Nav from '../components/nav';

const Header = () => {
  return `
    <header>
      <div class="container header_container">
        <div class="logo">KINDUBAI</div>
        ${Nav()}
      </div>
    </header>
  `;
};

export default Header;
