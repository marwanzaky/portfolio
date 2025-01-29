export interface IIconProps {
	className?: string;
	name:
		| string
		| 'upwork'
		| 'github'
		| 'git'
		| 'unity'
		| 'csharp'
		| 'blender'
		| 'rust';
}

export default function Icon({ className, name }: IIconProps) {
	return (
		<img
			className={'w-4 ' + className}
			src={'/svgs/' + name + '.svg'}
			alt="My Happy SVG"
		/>
	);
}
