import express, { Express, Request, Response , Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
app.use(cors());
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
    console.log(">>")
    res.send('Welcome to Express & TypeScript Server');
});

app.get('/hello', (req: Request, res: Response) => {
    console.log(">>hello")
    res.send('Welcome to Express & TypeScript Server hello');
});
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
