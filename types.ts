export type Company = {
  companyId: number;
  companyName: string;
  companyCountry: string;
  companyTicker: string;
  displayName: string;
  infoUrl: string;
  liveUrl: string;
  logoLightUrl: string;
  logoDarkUrl: string;
  iconUrl: null | string;
  description: string;
  reportingCurrency: string;
  colorSettings: ColorSettings;
  events: Event[];
  isins: unknown[];
};

export type ColorSettings = {
  brandColor: string;
};

export type Event = {
  reportUrl: string;
  pdfUrl: null | string;
  eventId: number;
  eventTitle: string;
  eventDate: string;
  qnaTimestamp: number | null;
  fiscalPeriod: string;
  fiscalYear: string;
  audioUrl?: null | string;
};

export type CompaniesApiJsonResponse = {
  data: Company[];
}