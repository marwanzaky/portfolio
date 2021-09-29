var posts = [
    {
        title: 'Enemy Vision',
        des: ' Enemy Vision is a script collection to add vision cones, raycast detection, and enemy patrolling behaviors to your game.',
        img: 'venders/img/enemy-vision.png'
    },
    {
        title: 'Audio Manager Tool',
        des: 'Unity Audio Manager is a tool to manage your Audios',
        img: 'venders/img/audio-manager-tool.png'
    }, {
        title: 'Unity Screenshot Tool',
        des: 'Unity Screenshot Tool for Capturing the current frame.',
        img: 'venders/img/screenshot-tool.png'
    },
];

var blogs = '';

posts.forEach(el => {
    blogs += `<div>
        <div>${el.title}</div>
        <div>${el.des}</div>
        <img src="${el.img}" alt="" style="height: 200px;">
    </d`
});


document.querySelector('.blogs').innerHTML = blogs;