import path from 'path';
import fs from 'fs/promises';

function HomePage(props){
    const {products} = props;

    return <div>
        <h1>The Home Page</h1>
        <ul>
            {products.map((product) => (
                <li key={product.id}>{product.title}</li>
            ))}
        </ul>
    </div>;
}

export async function getStaticProps(){
    const dataFilePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(dataFilePath);
    const data = JSON.parse(jsonData);

    return {
        props: {
            products: data.products
        },
        revalidate: 10 // second(s) - Incremental Static Generation (ISR)
    };
}

export default HomePage;