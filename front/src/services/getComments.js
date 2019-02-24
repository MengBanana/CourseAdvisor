const comments = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    professor: "Ricardo Baeza-Yates",
    courseId: "CS 5800",
    courseName: "Algorithms",
    comment : "Hard"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    professor: "Abraham Bagherjeiran, Ph.D",
    courseId: "CS 5010",
    courseName: "Programming Design Paradigm",
    comment : "Hard"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    professor: "Suhabe Bugrara, Ph.D",
    courseId: "CS 5100",
    courseName:"Foundations of Artificial Intelligence",
    comment : "Hard"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    professor: "Gao, Hechen",
    courseId: "CS 5400",
    courseName: "Principles of Programming Language",
    comment : "Hard"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    professor: "Matthew Goodwin, Ph.D",
    courseId: "CS 5520",
    courseName: "Mobile Application Development",
    comment : "Great"
  
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    professor: "Gust, Philip",
    courseId: "CS 5001",
    courseName: "Intensive Foundations of Computer Science",
    comment : "Great"

  },
    {
      _id: "5b21ca3eeb7f6fbccd471821",
    professor: "Gust, Philip",
    courseId: "CS 5002",
    courseName: "Discrete and Data Structures",
    comment : "Great"
  },
    {
    _id: "5b21ca3eeb7f6fbccd471822",
    professor: "Gust, Philip",
    courseId: "CS 5003",
    courseName: "Recitation for CS 5001",
    comment : "Great"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    professor: "Gust, Philip",
    courseId: "CS 5500",
    courseName: "Managing Software Development",
    comment : "Nice"
  },
    {
    _id: "5b21ca3eeb7f6fbccd471824",
    professor: "Gust, Philip",
    courseId: "CS 5600",
    courseName: "Computer Systems",
    comment : "Nice"
  },
    {
    _id: "5b21ca3eeb7f6fbccd471825",
    professor: "Gust, Philip",
    courseId: "CS 5800",
    courseName: "Algorithms",
    comment : "Nice"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471826",
    professor: "Ed Katz, Ph.D",
    courseId: "CS 5001",
    courseName: "Intensive Foundations of Computer Science",
    comment : "Nice"
  },
    {
     _id: "5b21ca3eeb7f6fbccd471827",
    professor: "Ed Katz, Ph.D",
    courseId: "CS 5002",
    courseName: "Discrete and Data Structures",
    comment : "Nice"
  },
    {
    _id: "5b21ca3eeb7f6fbccd471828",
    professor: "Ed Katz, Ph.D",
    courseId: "CS 5003",
    courseName: "Recitation for CS 5001",
    comment : "Nice"
  },
    {
    _id: "5b21ca3eeb7f6fbccd471829",
    professor: "Ed Katz, Ph.D",
    courseId: "CS 5004",
    courseName: "Object-Oriented Design",
    comment : "Good"
  },
    {
    _id: "5b21ca3eeb7f6fbccd471830",
    professor: "Ed Katz, Ph.D",
    courseId: "CS 5005",
    courseName: " Recitation for CS 5004",
    comment : "Good"
  },
    {
    _id: "5b21ca3eeb7f6fbccd471831",
    professor: "Ed Katz, Ph.D",
    courseId: "CS 5006",
    courseName: "Algorithms",
    comment : "Good"
  },
    {
    _id: "5b21ca3eeb7f6fbccd471832",
    professor: "Ed Katz, Ph.D",
    courseId: "CS 5007",
    courseName: "Computer Systems",
    comment : "Good"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471833",
    professor: "Anurag Phardwaj, Ph.D",
    courseId: "CS 5850",
    courseName: "Building Game Engines",
    comment : "Good"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471834",
    professor: "Prasad Saripalli, Ph.D",
    courseId:"CS 6120",
    courseName: "Natural Language Processing",
    comment : "Good"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471835",
    professor: "Chuhua Zhong, Ph.D",
    courseId: "CS 6200",
    courseName: "Information Retrieval",
    comment : "Good"
  }
]


export function getComments() {
  return comments;
}

export function getComment(id) {
  return comments.find(m => m._id === id);
}

/*export function saveMovie(movie) {
  let movieInDb = comments.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    comments.push(movieInDb);
  }
  return movieInDb;
}*/

export function deleteComment(id) {
  let commentInDb = comments.find(m => m._id === id);
  comments.splice(comments.indexOf(commentInDb), 1);
  return commentInDb;
}