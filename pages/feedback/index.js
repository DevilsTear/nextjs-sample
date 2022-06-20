import Link from 'next/link';

function FeedbackPage(){
    return <div>
        <ul>
            <li><Link href={'/feedback/send-feedback'}>Send Feedback</Link></li>
        </ul>
    </div>
}

export default FeedbackPage;