import Icon from "../Icon";

export interface ILinkProps {
  link: string;
  children: any;
  icon?: string;
}

export default function Link({ link, icon, children }: ILinkProps) {
  return (
    <a href={link} className="flex gap-2 hover:opacity-50">
      {icon && <Icon name={icon} />}
      <p className="text-white">{children}</p>
    </a>
  );
}
