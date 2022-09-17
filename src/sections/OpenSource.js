import React from 'react';

class Repository {
    constructor(name, description, stars, language, commits, href) {  // Constructor
        this.name = name;
        this.description = description;
        this.stars = stars;
        this.language = language;
        this.commits = commits;
        this.href = href;
    }
}

const repos = [
    new Repository('Character-Controller', 'Unity Third Person Shooter Tool - Character Controller', '9', 'C#', '101', 'https://github.com/marwanzaky/Character-Controller'),
    new Repository('Enemy-Vision', 'Enemy Vision is a script collection to add vision cones, raycast detection, and enemy patrolling behaviors to your game.', '5', 'C#', '33', 'https://github.com/marwanzaky/Enemy-Vision'),
    new Repository('Unity-Audio-Manager', 'Unity Audio Manager is a tool to manage your Audios', '2', 'C#', '19', 'https://github.com/marwanzaky/Unity-Audio-Manager'),
    new Repository('Quick-Tool', 'QuickTool is a tool window to manager all your prefabs in one place', '2', 'C#', '9', 'https://github.com/marwanzaky/Quick-Tool'),
    new Repository('marwanzaky.com', 'My personal website', '2', 'JavaScript', '157', 'https://github.com/marwanzaky/marwanzaky.com'),
    new Repository('linktree-template', 'Linktree react.js, and tailwindcss template', '1', 'JavaScript', '8', 'https://github.com/marwanzaky/linktree-template')
]

function Repo(props) {
    return (
        <a href={props.href} className={`open_source-repo ${props.lang}`} target="_blank" rel='noopener noreferrer'>
            <h4 className='open_source-repo-name'>{props.name}</h4>
            <div className='open_source-repo-des'>{props.des}</div>

            <div className='flex justify-between'>
                <div className='inline-flex items-center'>
                    <span className='mr-[10px] open_source-repo-lang'>
                        {props.lang}
                    </span>

                    <span className='inline-flex items-center open_source-repo-stars'>
                        <span className='material-symbols-outlined'>star</span>
                        <span>{props.stars}</span>
                    </span>
                </div>

                <div className='inline-flex items-center'>
                    <span className='material-symbols-outlined'>history</span>
                    <span>{props.commits} commits</span>
                </div>
            </div>
        </a>
    )
}

function OpenSource() {
    return (
        <section className='section-open_source'>
            <div className="xl:container xl:mx-auto nav-container">
                <h2>Open soucre</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {repos.map(el => <Repo name={el.name} lang={el.language} stars={el.stars} des={el.description} commits={el.commits} href={el.href} />)}
                </div>
            </div>
        </section >
    )
}

export default OpenSource;