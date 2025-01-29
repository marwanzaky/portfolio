export interface IProfileProps {
	src: string;
}

export default function Profile(props: IProfileProps) {
	return (
		<img
			className="mb-2 w-12 h-12"
			src={props.src}
			alt="Profile picture image"
		/>
	);
}
