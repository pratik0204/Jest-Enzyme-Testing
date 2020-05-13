import React from 'react'
import './style.scss';
const Header = (props)=>{
    return(
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={require('../../assets/Mono-left.svg')} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header