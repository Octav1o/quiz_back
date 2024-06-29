import { validationResults } from 'express-validator';
import { executeQuery } from '../database';
import { queries } from '../database/queries';

export const getQuestions = async (req, res) => {
    try {

        const result = await executeQuery(queries.getQuestions);
        res.status(200).json(result.recordset);


    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const submitAnswer = async (req, res) => {

    const { questionId, optionId } = req.body;
    try {
        
        const result = await executeQuery(queries.chechAnswer, { questionId, optionId });

        if(result.recordset.length > 0) {
            const isCorrect = result.recordset[0].isCorrect;
            res.status(200).json({ correct: isCorrect });
        } else {
            res.status(404).json({ message: 'Question or option not found' });
        }

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }

}