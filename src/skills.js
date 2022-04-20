import React from 'react';

function Skill(props) {
    function IconURL() {
        return <a href={props.href} className={props.class} target="blank">
            <ion-icon name={props.name}></ion-icon>
        </a>
    }

    function URL() {
        return <a href={props.href} className={props.class} target="blank"></a>
    }

    return <div className='skill'>
        <div>{props.isIcon ? <IconURL /> : <URL />}</div>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
    </div >
}

export default function Skills() {
    return <>
        <Skill isIcon={true} class='skill-icon' href='https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/' name='code-slash-outline' title='C#' description='
            An advanced C# programmer making flexible, expandable and self-explanatory code, and custom tools for productivity.' />

        <Skill isIcon={false} class='skill-icon fab fa-unity' href='https://unity3d.com/' name='fab fa-unity' title='Unity' description='
            +7 years of experience making professional iOS/Android games from scratch. especially hyper-casual games.' />

        <Skill isIcon={true} class='skill-icon' href='https://en.wikipedia.org/wiki/Gameplay' name='game-controller-outline' title='Gameplay' description='
            A smooth gameplay experience is an essential part of every successful game, we are making sure to deliver delightful UX.' />
    </>
}