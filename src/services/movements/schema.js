import Joi from 'joi';

export const getMovementsSchema = {
  params: {
    movementId: Joi.string().required(),
  }
}