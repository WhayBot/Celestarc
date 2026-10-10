export type ProductStatus = 'Working prototype' | 'In development' | 'Concept';

export interface ProjectItem {
  name: string;
  description: string;
  status: ProductStatus;
  repoUrl?: string;
}

export interface SpecItem {
  parameter: string;
  value: string;
}
