import { Router } from 'express';
import Movie from '../models/movie';

const router = new Router();

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const movie = await Movie.get(id);

    if (!movie) {
      res.status(404).send({ error: `Movie not found with ID ${id}` });
    } else {
      res.status(200).send(movie);
    }
  } catch (err) {
    next(err);
  }
});

export default router;
