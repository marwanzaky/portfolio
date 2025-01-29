export interface ISimpleCardProps {
  link: string;
  title: string;
  children: any;
  lang: "C#" | "Python" | "JavaScript" | "Rust";
  stars: number;
}

export default function SimpleCard({
  link,
  title,
  lang,
  stars,
  children,
}: ISimpleCardProps) {
  let starColor: string;

  if (lang === "C#") {
    starColor = "#178600";
  } else if (lang === "JavaScript") {
    starColor = "#F1E05A";
  } else if (lang === "Python") {
    starColor = "#3572A5";
  } else if (lang === "Rust") {
    starColor = "#DEA584";
  }

  return (
    <div className="simple-card">
      <div className="flex gap-2">
        <a href={link} className="underline  hover:text-white">
          <h3>{title}</h3>
        </a>
        <div className="poppins-bold text-gray-400 text-sm">&#8226; </div>
        <div className="poppins-bold text-gray-400 text-sm">⭐️</div>
        <div className="poppins-bold text-gray-400 text-sm">{stars}</div>
      </div>

      <p className="text-gray-400">{children}</p>

      <div className="flex gap-2 items-center">
        <div
          style={{ backgroundColor: starColor }}
          className="w-2 h-2 rounded-full border border-white border-opacity-50 "
        ></div>

        <p className="text-gray-400">{lang}</p>
      </div>
    </div>
  );
}
