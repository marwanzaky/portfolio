import React from 'react';
import OpenSourceRepo from './repo';

const repoDummy = {
    name: '...', description: '...', language: '...', stars: '...', commits: '...'
}

const repoDummies = [repoDummy, repoDummy, repoDummy, repoDummy, repoDummy, repoDummy];

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
        const repos = loaded ? data : repoDummies;

        return <section className='section-open_source'>
            <div className='xl:container xl:mx-auto nav-container'>
                <h2>Open soucre</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {
                        repos.map((repo, i) =>
                            <OpenSourceRepo
                                key={`repo ${i}`}
                                href={repo.url}
                                name={repo.name}
                                des={repo.description}
                                lang={repo.language}
                                stars={repo.stars}
                                commits={repo.commits}
                            />)
                    }
                </div>
            </div>
        </section >
    }
}

export default OpenSource;