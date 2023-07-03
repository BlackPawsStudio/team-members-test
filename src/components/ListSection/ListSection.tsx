import { ListSectionTitle } from '../ListSectionTitle';
import { ReactNode } from 'react';

interface ListSectionProps {
  children: ReactNode | ReactNode[];
}

export const ListSection = ({ children }: ListSectionProps) => {
  return <section className="team__section">{children}</section>;
};

ListSection.Title = ListSectionTitle;
