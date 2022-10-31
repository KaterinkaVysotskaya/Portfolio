import React, {useState} from "react";
import s from './BurgerNav.module.scss'
import { Link} from 'react-scroll'
// import burgerMenuIcon from '../assets/image/icons/hamburger-menu-more-2-svgrepo-com.svg'
import burgerMenuIcon from '../assets/image/icons/menu-svgrepo-com.svg'

function BurgerNav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    let onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }
  return (
    <div className={s.burgerNav}>
        <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
            <Link activeClass={s.active} to="main" spy={true} smooth={true} offset={-80} duration={500} >
                Main
            </Link>
            <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={-80} duration={500} >
                Skills
            </Link>
            <Link activeClass={s.active} to="projects" spy={true} smooth={true} offset={-80} duration={500} >
                Projects
            </Link>
            <Link activeClass={s.active} to="contacts" spy={true} smooth={true} offset={-80} duration={500} >
                Contacts
            </Link>
        </div>
       <div onClick={onBurgerBtnClick} className={s.burgerBtn}>
           <img src={burgerMenuIcon} alt=""/>
       </div>
    </div>
  );
}

export default BurgerNav;
