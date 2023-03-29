import React from 'react'
// import Logo from "../assets/header-logo2.png"

const Header = () => {
  
  
  
    return (
    <>
    <section className='header'>
        <div className='container'>
            <div className='header__wrapper'>
            <nav className='header__nav'>
                <a className='header__link'>
                    <img src=""></img>
                </a>
                <a href='#' className='header__link'>Каталог</a>
                <a className='header__link'>Доставка</a>
                <a className='header__link'>Оплата</a>
                <a className='header__link'>Контакты</a>
                <a className='header__link'>О галерее</a>
            </nav>
            <div className='header__search'>
                <input type="text" className='header__input' placeholder='Поиск по названию картинки'></input>
                <button className='header__find'>Найти</button>
            </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Header