import React from 'react';
import './home.scss';

export default function Home() {
  return (
    <div className='home_page'>
        <header>
            <nav className='nav'>
                <ul className='menu-nav'>
                    <li className='menu-nav__item  active'>
                        <a href="/home">
                            Главная
                        </a>
                    </li>
                    <li className='menu-nav__item'>
                        <a href="/cases">
                            Кейсы
                        </a>
                    </li>
                    <li className='menu-nav__item'>
                        <a href="/services">
                            Услуги
                        </a>
                    </li>
                </ul>
                <ul className='menu-nav'>
                    <li className='menu-nav__item'>
                        <a href="/contacts">
                            Контакты
                        </a>
                    </li>
                    <li className='menu-nav__item'>
                        <a href="/vacancies">
                            Вакансии
                        </a>
                    </li>
                    <li className='menu-nav__item'>
                        <a href="/news">
                            Новости
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <section>
                <h1>Цифровые решения для бизнеса и государства</h1>
                <ul className='body2'>
                    <li>Проектируем</li>
                    <li>Разрабатываем</li>
                    <li>Внедряем</li>
                    <li>Сопровождаем</li>
                </ul>
            </section>
            <section>
                <h2>MOBILE APPS</h2>
                <p>Проектируем, разрабатываем, внедряем</p>
            </section>
            <section>
                <h2>BLOCKCHAIN DEV</h2>
                <p>Сопровождаем</p>
            </section>
            <footer>
                <div>
                    <h3>Свяжитесь с нами</h3>
                    <p>+7 843 123 45 67</p>
                    <p>info@whiteframe.ru</p>
                </div>
                <div>
                    <p>© 2021 – White Frame, Все права защищены.</p>
                </div>
            </footer>
        </main>
    </div>
  );
}