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

            <section className="text">
                <div className="text__first">
                    <h3 className="text__first__h3">
                        Мы много лет работаем в области IT-разработки, самосовершенствуемся и двигаемся вперёд. <br /><br />
                        Мы стараемся жить вне рамок существующих парадигм и ограничений.
                    </h3>
                </div>
                <div className="text__second">
                    <p className="text__second__body4">
                    С 2005 года White Frame тесно сотрудничает с клиентами, чтобы воплотить их идеи в жизнь в виде мощного программного обеспечения. <br /><br />
                    
                    Наша команда может хорошо работать как со стартапами, так и с уже существующими предприятиями. Имея доступ к абсолютным техническим талантам высшего уровня в нашей команде, мы можем браться за сложные и сложные проекты разработки программного обеспечения. Эти приложения представляют собой многофункциональные веб-приложения и мобильные приложения и часто используют передовые технологии разработки. <br /><br />
                    
                    Обращаясь в White Frame для разработки или продвижения IT продукта, вы освобождаетесь от лишних переживаний по поводу целесообразности потраченных средств, поскольку получаете чёткое представление о каждом этапе сотрудничества.
                    </p>
                </div>
            </section>

            <section className="news">
                <div className="vectors">
                    <embed className='news_icon' src="/vectors/news_icon.svg" width="40" height="40"/>
                </div>
            </section>
           

        </main>
    </div>
  );
}