import express from 'express';
import validate from 'express-validation';
import {
  getMovementsSchema,
} from './schema';
import {
  getMovement
} from '../../models/movements';

const router = express.Router();

router.get('/:movementId', validate(getMovementsSchema), ({ params }, res, next) => {
  const { movementId } = params;
  // getMovement(movementId)
  // .then(payload => res.status(200).json({payload}))
  // .catch( err => next(err));
  res.status(200).json({payload: getMovement(movementId)})
})

export default router;