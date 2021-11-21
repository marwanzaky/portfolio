class Post {
    constructor(title, skills, img, url) {
        this.title = title;
        this.skills = skills;
        this.img = img;
        this.url = url;
    }

    getHTML() {
        return `<div class="blog">
                    <a href="${this.url}" target="_blank" style="display:inline-block; line-height:0;">
                        <img width="100%" src="${this.img}" alt="">
                        <div class="blog-info">
                            <h1>${this.title}</h1>
                        </div>
                    </a>
                </div>`
    }
};

var posts = [
    new Post('Enemy Vision', 'Unity, C#', 'venders/img/enemy-vision.png', 'https://github.com/marwanzaky/Enemy-Vision'),
    new Post('Pathfinder', 'Unity, C#', 'venders/img/latest-work/car-puzzle.png', 'https://github.com/marwanzaky/Unity-Pathfinder'),
    new Post('Quick Tool', 'Unity, C#', 'venders/img/quick-tool.png', 'https://github.com/marwanzaky/Quick-Tool'),
    new Post('Screenshot Tool', 'Unity, C#', 'venders/img/screenshot-tool.png', 'https://github.com/marwanzaky/Unity-Screenshot-Tool'),
    new Post('Audio Manager', 'Unity, C#', 'venders/img/audio-manager.png', 'https://github.com/marwanzaky/Unity-Audio-Manager'),
    new Post('Coming soon', 'Unity, C#', 'venders/img/coming-soon.png', 'https://github.com/marwanzaky'),
    new Post('Coming soon', 'Unity, C#', 'venders/img/coming-soon.png', 'https://github.com/marwanzaky'),
    new Post('Coming soon', 'Unity, C#', 'venders/img/coming-soon.png', 'https://github.com/marwanzaky')
];

for (let index = 0; index < posts.length; index++) {
    document.querySelector('.blog-box').innerHTML += posts[index].getHTML();
}