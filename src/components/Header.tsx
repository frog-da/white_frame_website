import React from 'react';

interface HeaderProps {
  activeMenuItem: string; 
}

const Header: React.FC<HeaderProps> = ({ activeMenuItem }) => {
  return (
    <header>
      <nav className='nav'>
        <ul className='menu-nav1'>
          <li className={`menu-nav__item ${activeMenuItem === 'home' ? 'active' : ''}`}>
            <a href="/">
              Главная
            </a>
          </li>
          <li className={`menu-nav__item ${activeMenuItem === 'cases' ? 'active' : ''}`}>
            <a href="/cases">
              Кейсы
            </a>
          </li>
          <li className={`menu-nav__item ${activeMenuItem === 'services' ? 'active' : ''}`}>
            <a href="/services">
              Услуги
            </a>
          </li>
        </ul>
        <ul className='menu-nav2'>
          <li className={`menu-nav__item ${activeMenuItem === 'contacts' ? 'active' : ''}`}>
            <a href="/contacts">
              Контакты
            </a>
          </li>
          <li className={`menu-nav__item ${activeMenuItem === 'vacancies' ? 'active' : ''}`}>
            <a href="/vacancies">
              Вакансии
            </a>
          </li>
          <li className={`menu-nav__item ${activeMenuItem === 'news' ? 'active' : ''}`}>
            <a href="/news">
              Новости
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
