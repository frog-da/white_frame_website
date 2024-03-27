import React from 'react';
import Main from '../components/Main';
import Footer from '../components/Footer';
import './home.scss';

export default function Home() {
  return (
    <div className='home_page'>
        <header>
            <nav className='nav'>
                <ul className='menu-nav1'>
                <li className={`menu-nav__item  'active'`}>
                    <a href="/home">
                    Главная
                    </a>
                </li>
                <li className={`menu-nav__item`}>
                    <a href="/cases">
                    Кейсы
                    </a>
                </li>
                <li className={`menu-nav__item`}>
                    <a href="/services">
                    Услуги
                    </a>
                </li>
                </ul>
                <ul className='menu-nav2'>
                <li className={`menu-nav__item`}>
                    <a href="/contacts">
                    Контакты
                    </a>
                </li>
                <li className={`menu-nav__ite`}>
                    <a href="/vacancies">
                    Вакансии
                    </a>
                </li>
                <li className={`menu-nav__item`}>
                    <a href="/news">
                    Новости
                    </a>
                </li>
                </ul>
            </nav>
        </header>
      <Main />
      <Footer />
    </div>
  );
}

