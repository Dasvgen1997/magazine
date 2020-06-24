import React from 'react';
import './comment-list.sass';
import classnames from 'classnames';

export default function CommentList({className}){
    return(
        <div className={classnames('comment-list', className)}>
            comment-list
        </div>
    )
}