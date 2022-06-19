import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastSalesPage(){
    const [sales, setSales] = useState();

    const endpointURL = ""; // firebase url or something
    const { data, error } = useSWR(endpointURL);

    useEffect(() => {
        if (data){
            const lastSales = [];
            for (const key in data){
                lastSales.push({
                    id: key,
                    username: data[key].username,
                    volume: data[key].volume
                })
            }
            setSales(lastSales);
        }
    }, [data]);    

    if(error){
        return <div>An error occured while fetching the sales data!..</div>;
    }

    if(!data || !lastSales){
        <div>No data to be shown yet!..</div>
    }
}

export default LastSalesPage;