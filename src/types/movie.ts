
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  genres: string[];
  runtime?: string;
  language?: string;
  country?: string;
  cast?: string[];
  director?: string;
  reviews?: Review[];
  category?: string;
}

export interface Review {
  id: number;
  user: {
    name: string;
    photoURL?: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export interface CompareItem {
  id: number;
  title: string;
}
