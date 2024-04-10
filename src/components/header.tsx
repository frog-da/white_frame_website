"use client"
import React, { useEffect, useState } from 'react';
import '@/app/home/page.scss';

export default function Header() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [startPosition, setStartPosition] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
        setStartPosition((currentScrollPos < 100 && prevScrollPos <= currentScrollPos) || currentScrollPos == 0);
        setPrevScrollPos(currentScrollPos);
      };
      if (handleScroll) {
        window.addEventListener('scroll', handleScroll);
      }
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos, visible]);

  return (
    <header className={visible ? `header ${startPosition ? 'header--start' : 'header--visible'}` : 'header header--hidden'}>

      <embed className='logo' src="/vectors/logo.svg" width="220" height="48"/>
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
  );
}
