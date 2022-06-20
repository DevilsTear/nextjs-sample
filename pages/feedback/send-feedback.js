import { useRef } from 'react';

function SendFeedbackPage(){
    const emailInputRef = useRef();
    const feedbackTextInputRef = useRef();

    function submitFormHandler(event){
        event.preventDefault();

        const email = emailInputRef.current.value;
        const feedbackText = feedbackTextInputRef.current.value;

        fetch('/api/feedback', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, feedback_text: feedbackText})
        }).then(res => res.json()).then(res =>{
            console.log(res);
        })
    }

    return <div>
        <form>
            <div><input type="text" id='email' ref={emailInputRef} placeholder="email" /></div>
            <div><textarea id='feedbackText' ref={feedbackTextInputRef} placeholder="feedback"></textarea></div>
            <div><button onClick={submitFormHandler}>Send Feedback</button></div>
        </form>
    </div>
}

export default SendFeedbackPage;