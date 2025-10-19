import React, { CSSProperties } from 'react';
import Image from 'next/image'
import { Company } from '../types';
import styles from './CompanyIcon.module.css'
import NoImage from '../assets/images/no-image.svg';

interface CompanyIconCustomCSS extends CSSProperties {
  '--company-icon-bg': string;
}

type CompanyIconProps = {
  company: Company;
};

export const CompanyList = ({ company }: CompanyIconProps) => {
  const src = company.iconUrl ?? NoImage;
  return (
    <div className={styles.company_icon} style={{
      '--company-icon-bg': company.colorSettings.brandColor,
    } as CompanyIconCustomCSS}>
      <Image
        src={src}
        width={30}
        height={30}
        alt={`${company.displayName} icon.`}
      />
    </div>
  );
};

export default CompanyList;