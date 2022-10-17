import React from 'react';

const repoDummy = {
    name: '...', description: '...', language: '...', stars: '...', commits: '...'
}

const repoDummies = [repoDummy, repoDummy, repoDummy, repoDummy, repoDummy, repoDummy];

function Repo({ href, name, des, lang, stars, commits }) {
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

class OpenSource extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false
        };
    }

    async componentDidMount() {
        const res = await fetch('https://marwanzaky-api.vercel.app/api/v1/repos');
        const json = await res.json();

        this.setState({
            data: json.data.repos,
            loaded: true
        });
    }


    render() {
        const { loaded, data } = this.state;

        return <section className='section-open_source'>
            <div className="xl:container xl:mx-auto nav-container">
                <h2>Open soucre</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {(loaded ? data : repoDummies).map(repo => <Repo href={repo.url} name={repo.name} des={repo.description} lang={repo.language} stars={repo.stars} commits={repo.commits} />)}
                </div>
            </div>
        </section >
    }
}

export default OpenSource;