import { Fragment } from "react";
import path from 'path';
import fs from 'fs/promises';

function ProductDetailPage(props){
    const { productDetails } = props;

    return (
        <Fragment>
            <h1>{productDetails.title}</h1>
            <p>{productDetails.description}</p>
        </Fragment>
    )
}

export async function getStaticPaths(){
    return {
        paths:[
            { params: { productId: 'p1' } }, 
            { params: { productId: 'p2' } }, 
            { params: { productId: 'p3' } }, 
        ],
        fallback: false
    };
}

export async function getStaticProps(context){
    const { params } = context;

    console.log(params);

    const productId = params.productId;

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