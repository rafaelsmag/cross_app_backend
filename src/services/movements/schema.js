import Joi from 'joi';


export const getMovementsSchema = {
  query: {
    skip: Joi.number().default(0).min(0),
    limit: Joi.number().default(20).max(20),
  },
};

export const getMovementSchema = {
  params: {
    movementId: Joi.string().required(),
  },
};

export const addMovementsSchema = {
  body: {
    name: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string(),
    image: Joi.string(),

  },
  options: {
    allowUnknownBody: false,
  },
};
