var posts = [
    {
        title: 'Enemy Vision',
        des: 'Enemy Vision is a script collection to add vision cones, raycast detection, and enemy patrolling behaviors to your game.',
        date: 'September 30, 2021',
        img: 'venders/img/enemy-vision.png',
        link: 'https://github.com/marwanzaky/Enemy-Vision'
    },
    {
        title: 'Audio Manager Tool',
        des: 'Unity Audio Manager is a tool to manage your Audios',
        date: 'September 30, 2021',
        img: 'venders/img/audio-manager-tool.png',
        link: 'https://github.com/marwanzaky/Unity-Audio-Manager'
    }, {
        title: 'Unity Screenshot Tool for Capturing the current frame',
        des: 'Unity Audio Manager is a tool to manage your Audios',
        date: 'September 30, 2021',
        img: 'venders/img/screenshot-tool.png',
        link: 'https://github.com/marwanzaky/Unity-Screenshot-Tool'
    },
];

var blogs = '';

posts.forEach(el => {
    blogs += `
    <article class="blog">
        <h4>${el.date}</h4>
        <div class="blog-cover">
            <a href="${el.link}" target=”_blank”><img src="${el.img}" alt="${el.img}"></a>
        </div>
        <h3>${el.title}</h3>
        <p>${el.des}</p>
        <a href="#" class="blog-readmore">Read More »</a>
    </article>`
});

document.querySelector('.blogs').innerHTML = blogs;