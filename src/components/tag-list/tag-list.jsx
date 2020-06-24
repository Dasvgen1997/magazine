import React from 'react';
import './tag-list.sass';
import classnames from 'classnames';
import {Link} from 'react-router-dom';

let tagList = [
    {
        name: 'Искусство',
        link: '/'
    },
    {
        name: 'Философия',
        link: '/'
    },
    {
        name: 'Музыка',
        link: '/'
    },
    {
        name: 'Книги',
        link: '/'
    },
    {
        name: 'Обзоры',
        link: '/'
    }
]

export default function TagList({className}){
    return(
        <div className={classnames('tag-list', className)}>
            {
                tagList.map((item, i)=><Link to={item.link}>&nbsp; {item.name} &nbsp; /</Link>)
            }
        </div>
    )
}