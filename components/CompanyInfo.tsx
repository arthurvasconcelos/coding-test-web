import React from 'react';
import classNames from 'classnames';
import { Inter } from "@next/font/google";
import type { Company } from '../types';
import styles from './CompanyInfo.module.css';

const inter = Inter({ subsets: ["latin"] });

type CompanyInfoProps = {
  company: Company;
};

export const CompanyListItem = ({ company }: CompanyInfoProps) => {
  return (
    <div className={styles.container}>
      <h2 className={classNames(styles.heading, inter.className)}>{company.displayName}</h2>
      <p className={classNames(styles.description, inter.className)}>{company.description}</p>
    </div>
  );
};

export default CompanyListItem;