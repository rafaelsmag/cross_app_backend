import mongoose from '../../config/mongo';


const MovementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: String,
  image: String,
},
  {
    strict: true,
  });

const Movement = mongoose.model('Movement', MovementSchema);

export function getMovements(skip = 0, limit = 10) {
  return Movement.find(
    {},
    { __v: 0 },
    {
      skip,
      limit,
      sort: { created_at: -1 },
    });
}

export function getMovement(movementId) {
  return Movement.findOne(
    {
      _id: movementId,
    },
    {
      __v: 0,
    })
    .then(result => result)
    .catch((err) => { throw err; });
}

export function addMovement(data) {
  return new Movement(data)
  .save()
  .catch((err) => {
    if (typeof err.message === 'undefined') {
      throw Object({ message: 'Erro ao criar movimento', status: 500 });
    } else {
      throw err;
    }
  });
}
