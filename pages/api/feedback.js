import fs from 'fs';
import path from 'path';

function feedbackDatasourcePath(){
    return path.join(process.cwd(), 'data', 'feedback-data.json');
}

function existingFeedbackData(){
    const datasourcePath = feedbackDatasourcePath();
    const existingData = fs.readFileSync(datasourcePath).toString();
    const data = existingData ? JSON.parse(existingData) : [];
    return data;
}

function handler(req, res){
    if (req.method === 'POST'){
        try {
            const email = req.body.email;
            const feedbackText = req.body.feedback_text;

            const newFeedback = {
                id: new Date().toISOString(),
                email: email,
                feedBackText: feedbackText,
            }

            const data = existingFeedbackData();
            data.push(newFeedback);

            fs.writeFileSync(datasourcePath, JSON.stringify(data));

            res.status(201).json({ message: 'Success!', feedback: newFeedback });
        } catch (error) {
            res.status(500).json({message: 'Fail!', error: error.toString()});
        }
    } else {
        res.status(200).json({message: 'Requested api method is found and works as aspected!', data: JSON.stringify(existingFeedbackData())});
    }
}

export default handler;