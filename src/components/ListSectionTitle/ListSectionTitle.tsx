interface ListSectionTitleProps {
  text: string;
  icon: string;
}

export const ListSectionTitle = ({ text, icon }: ListSectionTitleProps) => (
  <div className="team__title">
    <img className="team__title__image" src={icon} alt="admin" />
    <span>{text}</span>
  </div>
);
