import React from 'react';
import type { Company } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './CompanyDetailButton.module.css';

type CompanyDetailButtonProps = {
  company: Company;
};

export const CompanyListItem = ({ company }: CompanyDetailButtonProps) => {
  return (
    <a href={company.infoUrl} target="_blank" className={styles.detail_link}>
      <FontAwesomeIcon icon={faChevronRight} size='lg' widthAuto className={styles.link_icon} />
    </a>
  );
};

export default CompanyListItem;