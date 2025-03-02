interface Category {
  id: number;
  name: string;
}

export interface Categories {
  items: Category[];
}

interface Geo {
  lat: string | null;
  lng: string | null;
}

interface ProjectCard {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  project_url: string | null;
  image_dark: string;
  geo: Geo;
  categories: Category[];
}

export interface ProjectsCards {
  items: ProjectCard[];
}