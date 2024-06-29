import { Router } from 'express';
import { getQuestions, submitAnswer } from '../controllers/questionsController';


const router = Router();

router.get('/api/questions/getQuestions', getQuestions);
router.post('/api/questions/submitAnswer', submitAnswer);

export default router;