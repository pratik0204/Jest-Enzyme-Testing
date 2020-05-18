import React from 'react'
import './style.scss';
const Header = (props)=>{
    return(
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logoImg" src={require('../../assets/Mono-left.svg')} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header