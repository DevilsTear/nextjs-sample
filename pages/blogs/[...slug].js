import {useRouter} from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';

// /blogs/2022
// /blogs/2022/06
// /blogs/2022/06/18
function BlogListPage(){
    const router = useRouter();
    
    console.log(router.query.slug);

    return <Fragment>
        <Head>
            <title>Blogs</title>
            <meta name='description' content={`All Blogs for ${router.query.slug?.join('/')}`} />
        </Head>
        <div>
            <h1>Blogs {router.query.slug?.join('/')}</h1>
        </div>
    </Fragment>;
}

export default BlogListPage;