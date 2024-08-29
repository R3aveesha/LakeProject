const mongoose = require('mongoose');
const Movie = require('./src/models/movie.model'); // Adjust the path as needed

// Sample dataset of movies
const movies = [
  {
    name: "Inception",
    category: "Sci-Fi",
    image: "https://example.com/images/inception.jpg",
    language: "English",
    availableTimes: [new Date("2024-09-01T20:00:00Z"), new Date("2024-09-02T22:00:00Z")],
    duration: 148,
    price: 12.99,
    artists: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    description: "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
    ratings: [
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "Mind-blowing!" },
    //   { customerId: mongoose.Types.ObjectId(), score: 4, feedback: "Great visuals but complex plot." }
    ],
  },
  {
    name: "The Matrix",
    category: "Action",
    image: "https://example.com/images/matrix.jpg",
    language: "English",
    availableTimes: [new Date("2024-09-03T18:00:00Z"), new Date("2024-09-04T21:00:00Z")],
    duration: 136,
    price: 11.99,
    artists: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    description: "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    ratings: [
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "A revolutionary film in cinema history." },
    //   { customerId: mongoose.Types.ObjectId(), score: 4, feedback: "Action-packed and thought-provoking." }
    ],
  },
  {
    name: "The Shawshank Redemption",
    category: "Drama",
    image: "https://example.com/images/shawshank.jpg",
    language: "English",
    availableTimes: [new Date("2024-09-05T19:00:00Z"), new Date("2024-09-06T20:30:00Z")],
    duration: 142,
    price: 14.99,
    artists: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    ratings: [
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "An unforgettable masterpiece." },
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "Incredible story and performances." }
    ],
  },
  {
    name: "The Godfather",
    category: "Crime",
    image: "https://example.com/images/godfather.jpg",
    language: "English",
    availableTimes: [new Date("2024-09-07T20:00:00Z"), new Date("2024-09-08T23:00:00Z")],
    duration: 175,
    price: 15.99,
    artists: ["Marlon Brando", "Al Pacino", "James Caan"],
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    ratings: [
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "A cinematic classic." },
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "Masterful storytelling and acting." }
    ],
  },
  {
    name: "Pulp Fiction",
    category: "Crime",
    image: "https://example.com/images/pulpfiction.jpg",
    language: "English",
    availableTimes: [new Date("2024-09-09T21:00:00Z"), new Date("2024-09-10T22:30:00Z")],
    duration: 154,
    price: 13.99,
    artists: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    ratings: [
    //   { customerId: mongoose.Types.ObjectId(), score: 4, feedback: "Darkly humorous and thrilling." },
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "Quentin Tarantino at his best." }
    ],
  },
  {
    name: "Forrest Gump",
    category: "Drama",
    image: "https://example.com/images/forrestgump.jpg",
    language: "English",
    availableTimes: [new Date("2024-09-11T17:00:00Z"), new Date("2024-09-12T19:30:00Z")],
    duration: 142,
    price: 12.49,
    artists: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    ratings: [
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "Heartwarming and inspiring." },
    //   { customerId: mongoose.Types.ObjectId(), score: 4, feedback: "Tom Hanks delivers an iconic performance." }
    ],
  },
  {
    name: "Interstellar",
    category: "Sci-Fi",
    image: "https://example.com/images/interstellar.jpg",
    language: "English",
    availableTimes: [new Date("2024-09-13T18:00:00Z"), new Date("2024-09-14T21:00:00Z")],
    duration: 169,
    price: 14.99,
    artists: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    ratings: [
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "Visually stunning and intellectually engaging." },
    //   { customerId: mongoose.Types.ObjectId(), score: 4, feedback: "A bit complex, but worth it." }
    ],
  },
  {
    name: "The Dark Knight",
    category: "Action",
    image: "https://example.com/images/darkknight.jpg",
    language: "English",
    availableTimes: [new Date("2024-09-15T20:00:00Z"), new Date("2024-09-16T23:00:00Z")],
    duration: 152,
    price: 13.49,
    artists: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    ratings: [
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "Heath Ledger's performance is unforgettable." },
    //   { customerId: mongoose.Types.ObjectId(), score: 4, feedback: "A gripping and intense superhero film." }
    ],
  },
  {
    name: "Gladiator",
    category: "Action",
    image: "https://example.com/images/gladiator.jpg",
    language: "English",
    availableTimes: [new Date("2024-09-17T19:00:00Z"), new Date("2024-09-18T22:00:00Z")],
    duration: 155,
    price: 12.99,
    artists: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    ratings: [
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "Epic and powerful." },
    //   { customerId: mongoose.Types.ObjectId(), score: 4, feedback: "A grand historical drama." }
    ],
  },
  {
    name: "The Lion King",
    category: "Animation",
    image: "https://example.com/images/lionking.jpg",
    language: "English",
    availableTimes: [new Date("2024-09-19T10:00:00Z"), new Date("2024-09-20T13:00:00Z")],
    duration: 88,
    price: 10.99,
    artists: ["Matthew Broderick", "James Earl Jones", "Jeremy Irons"],
    description: "Lion cub Simba flees his kingdom after the death of his father, but returns as an adult to reclaim his throne.",
    ratings: [
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "A timeless classic for all ages." },
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "Beautiful animation and music." }
    ],
  },
  {
    name: "Joker",
    category: "Drama",
    image: "https://example.com/images/joker.jpg",
    language: "English",
    availableTimes: [new Date("2024-09-21T20:00:00Z"), new Date("2024-09-22T22:00:00Z")],
    duration: 122,
    price: 13.49,
    artists: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    description: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an infamous villain.",
    ratings: [
    //   { customerId: mongoose.Types.ObjectId(), score: 5, feedback: "A haunting portrayal of mental illness." },
    //   { customerId: mongoose.Types.ObjectId(), score: 4, feedback: "Intense and unsettling." }
    ],
  },
];

async function populateDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb+srv://root:root@r3cluster.ikcec.mongodb.net/?retryWrites=true&w=majority&appName=R3Cluster', { useNewUrlParser: true, useUnifiedTopology: true });

    // Clear existing data
    await Movie.deleteMany({});

    // Insert sample data
    await Movie.insertMany(movies);

    console.log('Database populated successfully');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    // Close the connection
    await mongoose.disconnect();
  }
}

populateDatabase();
