"use client";

import { useEffect, useState } from "react";
import type { Company } from "../types";
import CompanyList from "../components/CompanyList";
import PageTitle from "../components/PageTitle";
import { fetchData } from "../lib/api/companies";

export default function Home() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    fetchData()
      .then(setCompanies)
      .catch(console.error);
  }, []);

  return (
    <main>
      <PageTitle />
      <CompanyList companies={companies} />
    </main>
  );
}
