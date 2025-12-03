export type AppCategory = 'Text' | 'Image' | 'Code' | 'Audio' | 'Productivity';

export type AIApp = {
  id: string;
  name: string;
  category: AppCategory;
  description: string;
  longDescription: string;
  features: string[];
  rating: number;
  url: string;
  imageId: string;
};
