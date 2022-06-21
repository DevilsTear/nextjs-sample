import {useRouter} from 'next/router';

// /clients/1
function ClientProjectDetailPage(){
    const mysqlconn = process.env.mysql_connection_string;
    console.log(mysqlconn);

    const router = useRouter();

    return <div>
        <h1>The Client {router.query.clientId} Detail Page</h1>
    </div>;
}

export default ClientProjectDetailPage;