export interface ICardProps {
	link: string;
	src: string;
	title: string;
	children: any;
}

export default function Card({ link, src, title, children }: ICardProps) {
	return (
		<div className="card">
			<a
				href={link}
				className="mb-2 max-h-20 flex items-center overflow-hidden rounded hover:opacity-90"
			>
				{/* <img className="h-full" src={src} /> */}
			</a>

			<a href={link} className="underline hover:text-white">
				<h3>{title}</h3>
			</a>

			<p className="text-justify text-gray-400 line-clamp-2">{children}</p>
		</div>
	);
}
