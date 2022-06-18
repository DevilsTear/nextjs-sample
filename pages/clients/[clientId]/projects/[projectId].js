import {useRouter} from 'next/router';

// /clients/1/projects/1
function ClientDetailPage(){
    const router = useRouter();

    return <div>
        <h1>The Client {router.query.clientId} Project {router.query.projectId} Detail Page</h1>
    </div>;
}

export default ClientDetailPage;