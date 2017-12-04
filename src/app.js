// Libs
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Config
import './config/mongo';

// Routes
import movements from './services/movements';

// Constants
const port = process.env.port || 3000;
const app = express();

// Express Configurations
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes import
app.use('/movement', movements);

app.listen(port, () => console.log(`Server linsten on port ${port}`));

export default app;
