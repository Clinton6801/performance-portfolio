// src/lib/types.ts

export type AnalyticalData = {
  LCP: string;
  FID: string;
  CLS: string;
  mobile_score: number;
  optimization_strategy: string;
};

export type Project = {
  id: string;
  title: string;
  short_description: string;
  full_content: string;
  tech_stack: string[];
  image_url: string;
  analytical_data: AnalyticalData;
};