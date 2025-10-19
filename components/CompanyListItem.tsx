import React from 'react';
import type { Company } from '../types';
import CompanyIcon from './CompanyIcon';
import CompanyDetailButton from './CompanyDetailButton';
import CompanyInfo from './CompanyInfo';
import styles from './CompanyListItem.module.css';

type CompanyListItemProps = {
  company: Company;
};

export const CompanyListItem = ({ company }: CompanyListItemProps) => {
  return (
    <li key={company.companyId} className={styles.list_item}>
      <CompanyIcon company={company} />
      <CompanyInfo company={company} />
      <CompanyDetailButton company={company} />
    </li>
  );
};

export default CompanyListItem;