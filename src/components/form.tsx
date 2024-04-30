"use client"
import React, { useState } from 'react';
import '@/components/form.scss';


export default function Form(props) {
    function openModalForm(): React.MouseEventHandler<HTMLButtonElement> | undefined {
        throw new Error('Function not implemented.');
    }
    return(

        <div className='form'>
            <div className='form__overlay'>
                <form action="" className="form__wrapper">
                    <div className="form__icon">
                        <embed className='arrow_white' src="/vectors/arrow_white.svg" width="40" height="40"/>
                    </div>
                    <div className="form__content">
                        <div className="form__title">
                            <h3>Свяжитесь с нами</h3>
                        </div>
                        <div className="form__row">
                            <div className="form__inputs">
                                <input className='form__input' type="text" name='name' placeholder='Имя*' data-required="true"/>
                                <input className='form__input' type="tel" name="phone" placeholder="+7 ___ ___ __ __*" data-required="true"/>
                                <textarea className='form__input' name='comment' placeholder="Комментарий*"/>
                            </div>
                            <div className="form__button">
                                <button className='form__button'>Отправить</button>   
                            </div>
                        </div>
                    </div>
                    <button className="form__close" type='button' onClick={props.close}>
                        <img className='icon_close' src="/vectors/x.svg" width="20" height="20"/>
                    </button>
                    
                </form>
            </div>
        </div>              

    );
}