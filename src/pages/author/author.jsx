import React from 'react';
import './author.sass';

import PageWrap from './../../modules/page-wrap/page-wrap.jsx';
import AuthorCard from './../../components/author-card/author-card.jsx';

export default function Author(){
    return(
        <div className='author-page'>
            <PageWrap title='Jonas Khanwald'>
                <AuthorCard/>
            </PageWrap>
        </div>
    )
}