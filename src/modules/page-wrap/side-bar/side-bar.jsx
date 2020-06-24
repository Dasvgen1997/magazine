import React from 'react';
import './side-bar.sass';
import classnames from 'classnames';

import logoImg from './../../../files/img/logo.png'

export default function SideBar({className}){
    return(
        <div className={classnames('side-bar', className)}>
            <form className='side-bar__subscribe-form'>
                <img src={logoImg} />
            </form>
        </div>
    )
}