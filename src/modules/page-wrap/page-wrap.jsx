import React from 'react';
import './page-wrap.sass';
import classnames from 'classnames';

export default function PageWrap({className, children, title}){
    return(
        <div className={classnames('page-wrap', className)}>
            <h2 className='page-wrap__title'>
                {title}
            </h2>
        </div>
    )
}