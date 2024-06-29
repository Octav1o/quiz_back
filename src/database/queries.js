export const queries = {
    // getQuestions: 'SELECT TOP 10 q.id AS questionId, q.text AS questionText, o.id AS optionId, o.optionText, o.isCorrect FROM questions q JOIN options o ON q.id = o.questionId ORDER BY NEWID();',

    // getQuestions: 'WITH RankedQuestions AS (SELECT q.id AS questionId, q.text AS questionText, o.id AS optionId, o.optionText, o.isCorrect, ROW_NUMBER() OVER(PARTITION BY q.id ORDER BY NEWID()) AS OptionRank FROM questions q JOIN options o ON q.id = o.questionId) SELECT questionId, questionText, optionId, optionText, isCorrect FROM RankedQuestions WHERE OptionRank <= 4;',

    getQuestions: 'WITH RandomizedQuestions AS (SELECT TOP 10 q.id AS questionId, q.text AS questionText FROM questions q ORDER BY NEWID()) SELECT rq.questionId, rq.questionText, o.id AS optionId, o.optionText, o.isCorrect FROM RandomizedQuestions rq JOIN options o ON rq.questionId = o.questionId;',

    getAllQuestions: 'SELECT * FROM questions',

    chechAnswer: 'SELECT isCorrect FROM options WHERE questionId = @questionId AND id = @optionId',

    getResults: 'SELECT q.id AS questionId, q.text AS questionText, AS optionId, o.optionText, o.isCorrect FROM questions q JOIN options o ON q.id = o.questionId;'
}