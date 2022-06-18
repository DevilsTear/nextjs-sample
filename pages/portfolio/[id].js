import {useRouter} from 'next/router';

function DetailPage(){
    const router = useRouter();

    return <div>
        <h1>The Portfolio {router.query.id} Detail Page</h1>
    </div>;
}

export default DetailPage;