import React from 'react';

function OpenSourceRepo({ href, name, des, lang, stars, commits }) {
    return <a href={href} className={`open_source-repo ${lang}`} target="_blank" rel='noopener noreferrer'>
        <h4 className='open_source-repo-name'>{name}</h4>
        <div className='open_source-repo-des'>{des}</div>

        <div className='flex justify-between'>
            <div className='inline-flex items-center'>
                <span className='mr-[10px] open_source-repo-lang'>
                    {lang}
                </span>

                <span className='inline-flex items-center open_source-repo-stars'>
                    <span className='material-symbols-outlined'>star</span>
                    <span>{stars}</span>
                </span>
            </div>

            <div className='inline-flex items-center'>
                <span className='material-symbols-outlined'>history</span>
                <span>{commits} commits</span>
            </div>
        </div>
    </a>
}

export default OpenSourceRepo;