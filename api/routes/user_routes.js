const router = require("express").Router();
const {
  getAllUsers,
  getUSERById,
  createUSER,
  deleteUSERById,
  updateUSERById,
} = require("../controllers/user_controller");

router.get("/:id", (req, res) => {
  const movieId = Number(req.params.id);
  const movie = getUSERById(movieId);
  res.json(movie);
});

router.post("/", (req, res) => {
  const newMovie = {
    name: req.body.name,
    genre: req.body.genre,
    img: req.body.img,
  };
  createMovie(newMovie);
  res.status(201).json(newMovie);
});

router.put("/:id", (req, res) => {
  movieId = Number(req.params.id);
  const updatedMovie = {
    id: movieId,
    name: req.body.name,
    genre: req.body.genre,
    img: req.body.img,
  };
  updateMovieById(movieId, updatedMovie);
  res.json(updatedMovie);
});

router.delete("/:id", (req, res) => {
  movieId = Number(req.params.id);
  res.json(deleteMovieById(movieId));
});

module.exports = router;
