import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from "react-icons/md";

const NavbarStyles = styled.nav`
position : fixed;
z-index : 100;
top :0;
left:0;
width : 100%;
padding : 1rem 0;
background: var(--dark-bg);
ul{
  max-width:1200px;
  margin:0 auto;
  width: 90%;
  text-align: center;
  li{
    display: inline-block;
    border-radius: 8px;
    transition : 0.3s ease background-color;
    &:hover{
      background-color:var(--deep-dark);
    }
  }
  a {
    display: inline-block;
    font-family: 'RobotMono Regular';
    padding: 1rem 2rem;
    font-size: 2rem;
    color:var(--gray-1);
    outline:none;

  }
  .active{
    color:var(--white);
  }
}
.mobile-menu-icon{
  position:absolute;
  right: 1rem;
  top: 1rem;
  width: 4rem;
  cursor: pointer;
  display: none;
  outline: none;
  *{pointer-events:none;}
}
.navItems .closeNavIcon{
  display:none;
}
@media only screen and (max-width : 768px){
  padding: 0;
   .hide-items{
    transform: translateY(calc(-100% - var(--top)));
   }
  
  .mobile-menu-icon {
   display: block;
  }
  .navItems {
    --top: 1rem;
    transition: 0.3s ease transform;
    background-color: var(--deep-dark);
    padding: 2rem;
    width: 90%;
    max-width: 300px;
    border-radius: 12px ;
    position: absolute;
    right:1rem;
    top : var(--top);
    .closeNavIcon {
      display: block;
      width: 3rem;
      margin: 0 0 0 auto;
      cursor: pointer;
      * {
        pointer-events:none;
      }
    }
    li{
      display:block ;
      margin-bottom: 1rem;
    }
  }
  
}



`;


function Navbar() {
  const [showNav, setShowNav] = useState(false);


  return (
    <NavbarStyles>
      <div className='mobile-menu-icon'
        onClick={() => setShowNav(!showNav)}
        role='button'
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}>
        <MdMenu />
      </div>

      <ul className={!showNav ? 'navItems hide-items' : 'navItems'}  >
        <div className='closeNavIcon'
          onClick={() => setShowNav(!showNav)}
          role='button'
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li><NavLink to='/' exact="true"
          onClick={() => setShowNav(!showNav)}
          role='button'
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >Home</NavLink></li>
        <li><NavLink to='/about' exact="true"
          onClick={() => setShowNav(!showNav)}
          role='button'
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >About</NavLink></li>
        <li><NavLink to='/projects' exact="true"
          onClick={() => setShowNav(!showNav)}
          role='button'
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >Projects</NavLink></li>
        <li><NavLink to='/contact' exact="true"
          onClick={() => setShowNav(!showNav)}
          role='button'
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >Contact</NavLink></li>
      </ul>
    </NavbarStyles>
  )
}

export default Navbar;