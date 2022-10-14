import PropTypes from 'prop-types';
import { SectionList } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionList>
      <h2>{title}</h2>
      {children}
    </SectionList>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
