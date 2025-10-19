import React from 'react';
import type { Company } from '../types';
import CompanyListItem from './CompanyListItem';
import styles from './CompanyList.module.css';

type CompanyListProps = {
  companies: Company[];
};

export const CompanyList = ({ companies }: CompanyListProps) => {
  return (
    <ul className={styles.list}>
      {companies.map(company =>
        <CompanyListItem key={company.companyId} company={company} />
      )}
    </ul>
  );
};

export default CompanyList;