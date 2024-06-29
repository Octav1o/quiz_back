import express from 'express';
import cors from 'cors';
import questionsRoutes from './routes/questions.routes';



const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(questionsRoutes);
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

export default app;