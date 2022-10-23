import React from 'react';
import Image from 'next/image';

function PortfolioProject({ src, text, url, style }) {
    return <div className='portfolio-project' style={style} >
        <a href={url} target='_blank' rel='noopener noreferrer'>
            <Image className='portfolio-project-img' src={src} alt={text} layout='responsive' width='100' height='100' />
            <div className='portfolio-project-background'></div>
            <span className='portfolio-project-text'>{text}</span>
        </a>
    </div>
}

export default PortfolioProject;