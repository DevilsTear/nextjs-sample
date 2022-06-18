import {useRouter} from 'next/router';

// /blogs/2022
// /blogs/2022/06
// /blogs/2022/06/18
function BlogListPage(){
    const router = useRouter();
    
    console.log(router.query.slug);

    return <div>
        <h1>Blogs {router.query.slug?.join('/')}</h1>
    </div>;
}

export default BlogListPage;