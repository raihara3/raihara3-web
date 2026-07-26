/**
 * Domain model for a portfolio project, shared between the data layer and the UI.
 * This is the normalized shape the UI consumes, independent of the CMS response.
 */
export interface Project {
  id: string;
  /** Sequential catalog number (oldest project is 1). */
  number: number;
  title: string;
  labels: string[];
  description: string;
  detail: string;
  url: string;
  imageUrl: string;
  featured: boolean;
  /** Publication date formatted as YYYY.MM.DD (empty when unset). */
  date: string;
}
