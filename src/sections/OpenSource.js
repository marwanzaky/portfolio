import React from 'react';

function Repo(props) {
    return (
        <a href={props.href} className='open_source-repo'>
            <h4 className='open_source-repo-name'>{props.name}</h4>
            <div className='open_source-repo-des'>{props.des}</div>

            <span className='inline-flex items-center mr-[10px] open_source-repo-lang'>
                <span className='material-symbols-outlined'>code</span>
                {props.lang}
            </span>

            <span className='inline-flex items-center open_source-repo-stars'>
                <span className='material-symbols-outlined'>star</span>
                {props.stars}
            </span>
        </a>
    )
}

function OpenSource() {
    return (
        <section className='section-open_source'>
            <div className="xl:container xl:mx-auto nav-container">
                <h2>Open soucre github</h2>

                <div className='grid grid-cols-2 gap-4'>
                    <Repo href='https://github.com/marwanzaky/Character-Controller' name='Character-Controller' lang='C#' stars='9' des='Unity Third Person Shooter Tool - Character Controller.' />
                    <Repo href='https://github.com/marwanzaky/Enemy-Vision' name='Enemy-Vision' lang='C#' stars='5' des='Enemy Vision is a script collection to add vision cones.' />
                    <Repo href='https://github.com/marwanzaky/Unity-Audio-Manager' name='Unity-Audio-Manager' lang='C#' stars='2' des='Unity Audio Manager is a tool to manage your Audios.' />
                    <Repo href='https://github.com/marwanzaky/marwanzaky.com' name='marwanzaky.com' lang='JavaScript' stars='1' des='My personal website.   ' />
                    <Repo href='https://github.com/marwanzaky/linktree-template' name='linktree-template' lang='JavaScript' stars='1' des='linktree template built with react.js, tailwindcss, and sass.' />
                    <Repo href='https://github.com/marwanzaky/Unity-Pathfinder' name='Unity-Pathfinder' lang='C#' stars='1' des='Unity Pathfinder.' />
                </div>
            </div>
        </section >
    )
}

export default OpenSource;