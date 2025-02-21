import Profile from '../components/Profile';
import Icon from '../components/Icon';
import SimpleCard from '../components/SimpleCard';
import Link from '../components/Link';
import Info from '../components/Info';
import { languages } from './constants';
import Card from '../components/Card';

export default function Page() {
	return (
		<div className="container">
			<div className="section mt-16 flex flex-col items-center">
				<Profile src="/imgs/profile-picture.png" />

				<h3>Marouane E.</h3>

				<p className="text-gray-400 !font-normal">
					Full Stack Developer @ ALPHA10X
				</p>

				<div className="flex gap-2 py-2">
					{/* <a href="#" target="_blank">
						<Icon name="upwork" className="hover:opacity-50" />
					</a> */}

					{/* <a href="#" target="_blank">
						<Icon name="git" className="hover:opacity-50" />
					</a> */}

					<a href="https://github.com/marwanzaky" target="_blank">
						<Icon name="github" className="hover:opacity-50" />
					</a>
				</div>
			</div>

			<div className="section">
				<h1>About</h1>

				<p className="text-justify">
					I am a web developer with a vast array of knowledge in many different
					front-end and back-end languages, responsive frameworks, databases,
					and best code practices.
					<br />
					<br />
					My objective is simply to be the best web developer that I can be and
					to contribute to the technology industry with all that I know and can
					do.
				</p>
			</div>

			<div className="section">
				<h1>Latest work</h1>

				<div className="grid grid-cols-2 gap-4">
					<Card
						src="/imgs/card-cover.png"
						title="Blooming Kingdom - Unity & C#"
						link="#"
					>
						Blooming Kingdom is a game I have been working on for more than a
						year from the ground up to finish a game.
					</Card>

					<Card
						src="/imgs/card-cover-1.png"
						title="eCommerce - Next.js & Nest.js"
						link="https://mamolio.vercel.app"
					>
						Built a full-stack eCommerce w/ user auth and secure payments
					</Card>

					{/* <Card
						src="/imgs/card-cover-1.png"
						title="Idle game - Unity (c#)"
						link="#"
					>
						Idle game with intuitive design and compelling progression systems
						to maximize player engagement and retention.
					</Card> */}
				</div>
			</div>

			<div className="section">
				<h1>Projects</h1>

				<div className="grid grid-cols-2 gap-4">
					<SimpleCard
						title="character-controller"
						lang="C#"
						stars={16}
						link="https://github.com/marwanzaky/Character-Controller"
					>
						unity third person shooter tool
					</SimpleCard>

					<SimpleCard
						title="next.js ecommerce"
						lang="JavaScript"
						stars={5}
						link="https://github.com/marwanzaky/next-ecommerce"
					>
						next.js ecommerce
					</SimpleCard>

					<SimpleCard
						title="fastapi-mongodb"
						lang="Python"
						stars={1}
						link="https://github.com/marwanzaky/fastapi-mongodb"
					>
						user auth fastapi + mongodb
					</SimpleCard>

					<SimpleCard
						title="bevy-rust-game"
						lang="Rust"
						stars={1}
						link="https://github.com/marwanzaky/bevy-top-down-movement"
					>
						a rust bevy game
					</SimpleCard>
				</div>
			</div>

			<div className="section">
				<h1>Languges</h1>

				<div className="grid grid-cols-4 gap-4">
					{languages.map((lang) => (
						<Link key={lang.name} link="#" icon={lang.icon}>
							{lang.name}
						</Link>
					))}
				</div>
			</div>

			<div className="section">
				<h1>Experience</h1>

				<div className="flex flex-col gap-4">
					<Info
						title="Full Stack Developer"
						company="ALPHA10X"
						startDate="Jun 2023"
						endDate="Present"
						employmentType="Full-time"
						website="https://www.alpha10x.com/"
					>
						ALPHA10X is an AI startup that connects the people, capital, and
						ideas that solve the world’s greatest challenges.
					</Info>

					<Info
						title="Unity Game Developer"
						company="OUAZ GAMES"
						startDate="Jan 2022"
						endDate="Jun 2022"
						employmentType="Freelance"
					></Info>

					<Info
						title="Unity Game Developer"
						company="Aiwa Box"
						startDate="Jun 2020"
						endDate="May 2022"
						employmentType="Freelance"
					></Info>

					<Info
						title="Unity Game Developer"
						company="Applift"
						startDate="Jul 2020"
						endDate="Jun 2021"
						employmentType="Freelance"
					></Info>
				</div>
			</div>
		</div>
	);
}
