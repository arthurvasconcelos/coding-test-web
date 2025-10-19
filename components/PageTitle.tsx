import React from 'react';
import { Inter } from "@next/font/google";
import classNames from 'classnames';
import styles from './PageTitle.module.css';

const inter = Inter({ subsets: ["latin"] });

export const PageTitle = () => {
  return (
    <h1 className={classNames(styles.title, inter.className)}>Trending companies</h1>
  );
};

export default PageTitle;