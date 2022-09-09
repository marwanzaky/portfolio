import React from 'react';

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

class OpenSource extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repos: []
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/marwanzaky/repos')
            .then(response => response.json())
            .then(data => {
                const repos = data.map(el => {
                    return {
                        name: el.name,
                        url: 'https://github.com/marwanzaky/' + el.name,
                        language: el.language,
                        stars: el.stargazers_count,
                        description: el.description,
                        commits: 'x'
                    }
                });

                this.setState({ repos });
            }).catch(err => console.log(err));
    }

    render() {
        const { repos } = this.state;
        const data = repos.sort((a, b) => a.stars - b.stars).reverse();
        data.length = 6;

        return (
            <section className='section-open_source'>
                <div className="xl:container xl:mx-auto nav-container">
                    <h3>Open soucre github</h3>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {data.map(el => <Repo href={el.url} name={el.name} lang={el.language} stars={el.stars} des={el.description} commits={el.commits} />)}
                    </div>
                </div>
            </section >
        )
    }
}

export default OpenSource;