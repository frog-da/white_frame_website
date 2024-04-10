"use client"
import React from 'react';
import './page.scss';
import Header from '@/components/header';
import Swiper from '@/components/swiper';

export default function Home() {
  return (
    <div className='home_page'>
        <Header />
        <main className='main'>
            <section className='info'>
                <h1 className='info__h1'>Цифровые решения для бизнеса и государства</h1>
                <ul className='info__body'>
                    <li>проектируем</li>
                    <li className='arrow'><embed className='logo' src="/vectors/arrow.svg" width="40" height="40"/></li>
                    <li>разрабатываем</li>
                    <li className='arrow'><embed className='logo' src="/vectors/arrow.svg" width="40" height="40"/></li>
                    <li>внедряем</li>
                    <li className='arrow'><embed className='logo' src="/vectors/arrow.svg" width="40" height="40"/></li>
                    <li>сопровождаем</li>
                </ul>
            </section>
            <section className='tiles'>
                <div className='column1'>
                    <div className='column__item'>
                        <p className='column__item__p'>Заказная разработка программного обеспечения</p>
                    </div>
                    <div className='column__item'>
                        <p className='column__item__p'>Цифровая трансформация бизнеса и государства</p>
                    </div>
                </div>
                <div className='column2'>
                    <div className='column__item'>
                        <p className='column__item__p'>Автоматизация бизнес-процессов</p>
                    </div>
                    <div className='column__item'>
                        <p className='column__item__p'>Техническая поддержка информационных систем</p>
                    </div>
                </div>
            </section>

            <section className='options'>
                <div className='options__item'>
                    <h2>вэб</h2>
                    <p>Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем.</p>
                </div>
                <div className='options__item'>
                    <h2>приложения</h2>
                    <p>Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем.</p>
                </div>
                <div className='options__item'>
                    <h2>blockchain</h2>
                    <p>Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем.</p>
                </div>
                <div className='options__item'>
                    <h2>игры</h2>
                    <p>Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем.</p>
                </div>
                <div className='options__item'>
                    <h2>дизайн</h2>
                    <p>Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем.</p>
                </div>
                <div className='options__item'>
                    <h2>интернет маркетинг</h2>
                    <p>Разработка и поддержка порталов, сайтов, web-приложений, и много много много всего умеем.</p>
                </div>
                <div className='options__item'>
                    <h2 className='options__item__h2'>консультируем :)</h2>
                    <div className='arrow'><embed className='logo' src="/vectors/arrow.svg" width="40" height="40"/></div>
                </div>
                <div className='options__item'>
                    <button className='button' type='button'>Свяжитесь с нами</button>
                </div>
            </section>
            
            <section className="projects">
                <div className="vectors">
                    <embed className='folder_icon' src="/vectors/folder_icon.svg" width="40" height="40"/>
                    {/* <div className="progress_container">
                        <div className="progress-bar" id="myBar"></div>
                    </div> */}
                    
                </div>
                <Swiper />
            </section>
           

        </main>
    </div>
  );
}