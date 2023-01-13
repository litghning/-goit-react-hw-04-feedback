import PropTypes from 'prop-types';
import React from 'react';
import css from "./Section.module.css"; 


const Section = ({ title, children }) => (
    <div className={css.kSection}>
      <h2 className={css.SectionTitle}>{title}</h2>
      {children}
    </div>
  );
  
  Section.prototype = {
    title: PropTypes.string,
  };
  
  export default Section;