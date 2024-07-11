import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
app.use(cors());
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
    console.log(">>")
    res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
