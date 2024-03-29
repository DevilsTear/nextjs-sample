import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';
import Head from 'next/head';
import { Fragment } from 'react';

function HomePage(props){
    const {products} = props;

    return <Fragment>
        <Head>
            <title>NextJs experimental things ;)</title>
            <meta name='description' content='This is a very sample test description to show how to be used' />
        </Head>
        <div>
            <h1>The Home Page</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}><Link href={`/products/${product.id}`}>{product.title}</Link></li>
                ))}
            </ul>
        </div>
    </Fragment>;
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