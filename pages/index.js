import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

function HomePage(props){
    const {products} = props;

    return <div>
        <h1>The Home Page</h1>
        <ul>
            {products.map((product) => (
                <li key={product.id}><Link href={`/products/${product.id}`}>{product.title}</Link></li>
            ))}
        </ul>
    </div>;
}

export async function getStaticProps(context){
    const dataFilePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(dataFilePath);
    const data = JSON.parse(jsonData);

    if (!data){
        return { 
            redirect: {
                destination: 'no-data'
            }
        };
    }

    if (data.products.length === 0){
        return { notFound: true};
    }

    return {
        props: {
            products: data.products
        },
        revalidate: 10, // second(s) - Incremental Static Generation (ISR)
        // notFound : true,
        // redirect: {
        //     destination: 'no-data'
        // },
    };
}

export default HomePage;