import { Fragment } from "react";
import path from 'path';
import fs from 'fs/promises';

function ProductDetailPage(props){
    const { productDetails } = props;

    if(!productDetails){
        return <div>Loading!..</div>
    }

    return (
        <Fragment>
            <h1>{productDetails.title}</h1>
            <p>{productDetails.description}</p>
        </Fragment>
    )
}

async function getData(){
    const dataFilePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(dataFilePath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticPaths(){
    const data = await getData();

    const pathParams = data.products.map(product => ({params: {productId: product.id}}));

    return {
        paths: pathParams,
        fallback: false // 'blocking' value should be used unless checking the productDetails fully loaded
    };
}

export async function getStaticProps(context){
    const { params } = context;

    console.log(params);

    const productId = params.productId;

    const data = await getData()
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

    const product = data.products.find(product => product.id === productId);

    if (!product){
        return { notFound: true};
    }

    return {
        props: {
            productDetails: product,
        }
    }

}

export default ProductDetailPage;