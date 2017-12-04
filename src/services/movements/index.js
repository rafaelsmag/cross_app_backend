import express from 'express';
import validate from 'express-validation';
import {
  getMovementsSchema,
  getMovementSchema,
  addMovementsSchema,
} from './schema';
import {
  getMovements,
  getMovement,
  addMovement,
} from '../../models/movements';

const router = express.Router();

router.get('/get', validate(getMovementsSchema), ({ query }, res, next) => {
  const { skip, limit } = query;
  getMovements(skip, limit)
  .then(payload => res.status(200).json({ payload }))
  .catch(err => next(err));
});

router.get('/:movementId', validate(getMovementSchema), ({ params }, res, next) => {
  const { movementId } = params;
  getMovement(movementId)
  .then(payload => res.status(200).json({ payload }))
  .catch(err => next(err));
});

router.post('/addMovement', validate(addMovementsSchema), ({ body }, res, next) => {
  addMovement(body)
  .then(payload => res.status(200).json({ payload }))
  .catch(err => next(err));
});

export default router;
