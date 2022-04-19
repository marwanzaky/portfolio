import freelancerSVG from './svg/freelancer-icon.svg';

function List(props) {
    return <li>
        <a href={props.url}>
            <ion-icon name={props.name}></ion-icon>
        </a>
    </li>
}


function ListImg(props) {
    return <li>
        <a href={props.url} target="blank">
            <img className="icon" src={props.src} alt="" />
        </a>
    </li>
}

export default function Footer() {
    return <footer>
        <div className="row footer-box">
            <div> <p>Copyright &copy; 2021 Marwan Zaky. All rights reserved.</p> </div>

            <div>
                <ul class="social-media">
                    <List url='mailto: contact@marwanzaky.com' name='send-outline' />
                    <ListImg url='https://www.freelancer.com/u/marwanezzaky' src={freelancerSVG} />
                    <List url='https://www.linkedin.com/in/marwan-zaky/' name='logo-linkedin' />
                    <List url='https://twitter.com/marwan_zaky_dev' name='logo-twitter' />
                    <List url='https://www.github.com/marwanzaky' name='logo-github' />
                    <List url='https://www.youtube.com/channel/UCsXRt9DX4zIoLq_WO5Pns2A' name='logo-youtube' />
                </ul>
            </div>
        </div>
    </footer>
}