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
	const src = `/svgs/${name}.svg`;
	return <img className={'w-4 ' + className} src={src} />;
}
