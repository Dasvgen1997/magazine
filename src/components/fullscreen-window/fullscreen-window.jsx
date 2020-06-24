import React from 'react';
import './fullscreen-window.sass';
import classnames from 'classnames';

export default function FullscreenWindow({className, children, close}){
    return(
        <div className={classnames('fullscreen-window', className)}>
            <div className='container fullscreen-window__layout'>
                {children}
            </div>
        </div>
    )
}