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
app.get('/user/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    console.log(`Id=${id}`)

    if (id) {
        res.send(200);
        //res.status(200).send('ok')
    } else {
        res.status(400).send('User not found')
    }
})
app.get('/hello', (req: Request, res: Response) => {
    console.log(">>hello")
    res.send('Welcome to Express & TypeScript Server hello');
});
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
