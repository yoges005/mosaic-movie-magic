
import { Movie } from "@/types/movie";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    release_date: "2010-07-16",
    vote_average: 8.8,
    genres: ["Action", "Sci-Fi", "Thriller"],
    runtime: "2h 28m",
    language: "English",
    country: "USA",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy", "Ken Watanabe"],
    category: "Popular",
    reviews: [
      {
        id: 1,
        user: {
          name: "MovieBuff42",
          photoURL: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        rating: 9,
        comment: "Mind-bending and visually stunning, one of Nolan's best works.",
        date: "2023-05-14"
      }
    ]
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    release_date: "1994-09-23",
    vote_average: 9.3,
    genres: ["Drama"],
    runtime: "2h 22m",
    language: "English",
    country: "USA",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    category: "Popular",
    reviews: [
      {
        id: 1,
        user: {
          name: "ClassicFilmLover",
          photoURL: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        rating: 10,
        comment: "The definition of a perfect movie. A masterpiece that stands the test of time.",
        date: "2023-09-23"
      }
    ]
  },
  {
    id: 3,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    release_date: "2008-07-18",
    vote_average: 9.0,
    genres: ["Action", "Crime", "Drama"],
    runtime: "2h 32m",
    language: "English",
    country: "USA",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Gary Oldman"],
    category: "Popular",
    reviews: [
      {
        id: 1,
        user: {
          name: "DCFanatic",
          photoURL: "https://randomuser.me/api/portraits/men/67.jpg"
        },
        rating: 10,
        comment: "Heath Ledger's Joker is the greatest villain performance in cinema history.",
        date: "2023-07-18"
      }
    ]
  },
  {
    id: 4,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    release_date: "1994-10-14",
    vote_average: 8.9,
    genres: ["Crime", "Drama"],
    runtime: "2h 34m",
    language: "English",
    country: "USA",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
    category: "Popular",
    reviews: [
      {
        id: 1,
        user: {
          name: "TarantinoFan",
          photoURL: "https://randomuser.me/api/portraits/women/22.jpg"
        },
        rating: 9,
        comment: "Revolutionary filmmaking that changed cinema forever. Brilliant dialogue and unforgettable characters.",
        date: "2023-10-14"
      }
    ]
  },
  {
    id: 5,
    title: "The Lord of the Rings: The Return of the King",
    overview: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMTcxNTEyOTAyMF5BMl5BanBnXkFtZTcwNzE4NDk3OQ@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    release_date: "2003-12-17",
    vote_average: 8.9,
    genres: ["Action", "Adventure", "Fantasy"],
    runtime: "3h 21m",
    language: "English",
    country: "New Zealand, USA",
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen", "Orlando Bloom", "Andy Serkis"],
    category: "Popular",
    reviews: [
      {
        id: 1,
        user: {
          name: "MiddleEarthExplorer",
          photoURL: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        rating: 10,
        comment: "A perfect conclusion to the greatest trilogy in film history. Epic in every sense of the word.",
        date: "2023-12-17"
      }
    ]
  },
  {
    id: 6,
    title: "The Matrix",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5NS00NTYzLWIwMDEtYzY0NjVlZTQ2ZmJiXkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    release_date: "1999-03-31",
    vote_average: 8.7,
    genres: ["Action", "Sci-Fi"],
    runtime: "2h 16m",
    language: "English",
    country: "USA",
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    category: "Popular",
    reviews: [
      {
        id: 1,
        user: {
          name: "RedPillTaker",
          photoURL: "https://randomuser.me/api/portraits/men/36.jpg"
        },
        rating: 9,
        comment: "Redefined action movies and visual effects. Still holds up brilliantly after all these years.",
        date: "2023-03-31"
      }
    ]
  },
  {
    id: 7,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    release_date: "2014-11-07",
    vote_average: 8.6,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    runtime: "2h 49m",
    language: "English",
    country: "USA, UK",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    category: "Popular",
    reviews: [
      {
        id: 1,
        user: {
          name: "SpaceExplorer",
          photoURL: "https://randomuser.me/api/portraits/women/28.jpg"
        },
        rating: 9,
        comment: "A profound exploration of love, time, and humanity's place in the cosmos. Visually stunning and emotionally powerful.",
        date: "2023-11-07"
      }
    ]
  },
  {
    id: 8,
    title: "Parasite",
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    release_date: "2019-10-11",
    vote_average: 8.6,
    genres: ["Comedy", "Drama", "Thriller"],
    runtime: "2h 12m",
    language: "Korean",
    country: "South Korea",
    director: "Bong Joon Ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    category: "Korean",
    reviews: [
      {
        id: 1,
        user: {
          name: "CinematicGenius",
          photoURL: "https://randomuser.me/api/portraits/women/62.jpg"
        },
        rating: 10,
        comment: "A masterpiece that deserved every award it won. Brilliant social commentary with perfect execution.",
        date: "2023-10-11"
      }
    ]
  },
  {
    id: 9,
    title: "Oldboy",
    overview: "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNGMxODhiMDYtNzczOS00MzBjLTlhYjctZWU1YzY4ZGZlYmNjXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
    release_date: "2003-11-21",
    vote_average: 8.4,
    genres: ["Action", "Drama", "Mystery"],
    runtime: "2h",
    language: "Korean",
    country: "South Korea",
    director: "Park Chan-wook",
    cast: ["Choi Min-sik", "Yoo Ji-tae", "Kang Hye-jung"],
    category: "Korean",
    reviews: []
  },
  {
    id: 10,
    title: "Train to Busan",
    overview: "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNmIxZmY5NzItOGNjZC00OTJjLWJmNjEtMjZlNzYzZmE2ZGY0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    release_date: "2016-07-20",
    vote_average: 7.6,
    genres: ["Action", "Horror", "Thriller"],
    runtime: "1h 58m",
    language: "Korean",
    country: "South Korea",
    director: "Sang-ho Yeon",
    cast: ["Gong Yoo", "Yu-mi Jung", "Ma Dong-seok"],
    category: "Korean",
    reviews: []
  },
  {
    id: 11,
    title: "Vada Chennai",
    overview: "A young carrom player in north Chennai becomes a reluctant participant in a war between two warring gangsters.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BYTVkYTAyZDMtYzNmYi00OTkyLTg3M2ItNmE0MjZlYTBmYmMyXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BN2RkMWNlMjctYjk5Yy00YWFiLWFhYTgtOTYzMzg4MTAzZDRiXkEyXkFqcGdeQXVyODk1MzE5NDA@._V1_.jpg",
    release_date: "2018-10-17",
    vote_average: 8.5,
    genres: ["Action", "Crime", "Drama"],
    runtime: "2h 46m",
    language: "Tamil",
    country: "India",
    director: "Vetrimaaran",
    cast: ["Dhanush", "Ameer Sultan", "Andrea Jeremiah", "Aishwarya Rajesh"],
    category: "Tamil",
    reviews: []
  },
  {
    id: 12,
    title: "Vikram",
    overview: "A special agent investigates a murder committed by a masked group of serial killers.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BOGM5YWU2ZWQtZTIyOS00YzY1LWI4NjMtNWQzM2ZmYmI2MjMyXkEyXkFqcGdeQXVyMTUwMDg3OTQy._V1_.jpg",
    release_date: "2022-06-03",
    vote_average: 8.3,
    genres: ["Action", "Crime", "Thriller"],
    runtime: "2h 54m",
    language: "Tamil",
    country: "India",
    director: "Lokesh Kanagaraj",
    cast: ["Kamal Haasan", "Vijay Sethupathi", "Fahadh Faasil"],
    category: "Tamil",
    reviews: []
  },
  {
    id: 13,
    title: "Barbie",
    overview: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    release_date: "2023-07-21",
    vote_average: 7.0,
    genres: ["Adventure", "Comedy", "Fantasy"],
    runtime: "1h 54m",
    language: "English",
    country: "USA",
    director: "Greta Gerwig",
    cast: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
    category: "New Release",
    reviews: []
  },
  {
    id: 14,
    title: "Oppenheimer",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BYjk0MTgzMmQtZmY2My00NmE5LWExNGUtYjZkNTA3ZDkyMTJiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    release_date: "2023-07-21",
    vote_average: 8.5,
    genres: ["Biography", "Drama", "History"],
    runtime: "3h",
    language: "English",
    country: "USA",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    category: "New Release",
    reviews: []
  },
  {
    id: 15,
    title: "Dune",
    overview: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BZTBmMmVhYmMtNmI4MC00MGIzLWJhNmEtZDAyZjFiOWMwZmRiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    release_date: "2021-10-22",
    vote_average: 8.0,
    genres: ["Action", "Adventure", "Drama"],
    runtime: "2h 35m",
    language: "English",
    country: "USA",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac", "Jason Momoa"],
    category: "Trending",
    reviews: []
  },
  {
    id: 16,
    title: "Everything Everywhere All at Once",
    overview: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
    poster_path: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg",
    backdrop_path: "https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    release_date: "2022-03-25",
    vote_average: 7.9,
    genres: ["Action", "Adventure", "Comedy"],
    runtime: "2h 19m",
    language: "English",
    country: "USA",
    director: "Daniel Kwan, Daniel Scheinert",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan", "Jamie Lee Curtis"],
    category: "Trending",
    reviews: []
  }
];

// Helper function to get movies by category
export const getMoviesByCategory = (category: string) => {
  return movies.filter(movie => movie.category === category);
};

// Helper function to get trending movies
export const getTrendingMovies = () => {
  return movies.filter(movie => movie.category === "Trending");
};

// Helper function to get movies by actor
export const getMoviesByActor = (actor: string) => {
  return movies.filter(movie => 
    movie.cast?.some(castMember => 
      castMember.toLowerCase().includes(actor.toLowerCase())
    )
  );
};
