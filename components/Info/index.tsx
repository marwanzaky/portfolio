export interface IInfoProps {
	title: string;
	company: string;
	startDate: string;
	endDate: string;
	employmentType: 'Freelance' | 'Full-time';
	website?: string;
	children?: any;
}

export default function Info({
	title,
	company,
	startDate,
	endDate,
	employmentType,
	website,
	children,
}: IInfoProps) {
	return (
		<div>
			<div className="flex justify-between">
				<div className="flex gap-1 truncate">
					<p className="hidden sm:block">{title}</p>
					<p className="text-white sm:text-gray-400">@</p>
					{website ? (
						<a
							href={website}
							className="poppins-regular text-sm text-white sm:text-gray-400 hover:underline hover:text-blue-500"
						>
							{company}
						</a>
					) : (
						<p className="text-white sm:text-gray-400">{company}</p>
					)}

					<p className="text-gray-400">({employmentType})</p>
				</div>

				<div className="flex gap-2 truncate">
					<p className="text-gray-400">{startDate}</p>
					<p className="text-gray-400">-</p>
					<p className="text-gray-400">{endDate} </p>
				</div>
			</div>

			<p className="text-justify text-gray-400">{children}</p>
		</div>
	);
}
