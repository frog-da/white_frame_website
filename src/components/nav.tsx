"use client";
import React from 'react';
import '@/app/home/page.scss';

export default function Nav() {
  return (
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
  );
}
