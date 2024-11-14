
import { useNavigate, useParams } from "react-router-dom"
import ProductDetail from "./ProductDetailPage"
import { useEffect, useState } from "react";
// import Listproduct from "../../../DataList/ProductData/ProductData"



const product =
    { image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj9djg1jj6z031', price: 1000, productName: "cup starbuck", address: "ha noi", condition: "new" }


export default function PreProductDetailPage() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [ItemsData, setItemsData] = useState()
    const [Error, setError] = useState()
    const [Loading, setLoading] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://673164717aaf2a9aff1083a5.mockapi.io/Items/${id}`);
                if (!response.ok) throw new Error(`Status: ${response.status}`);
                const data = await response.json();
                setItemsData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (Error) return <div>Loading...</div>;
    if (Loading) return <div>Error: {Error.message}</div>

    return (<>
        {ItemsData ? (<ProductDetail Product={ItemsData} UserLogin={true} />) :  (navigate('/'))}
    </>
    )
    // console.log("items",ItemsData)

}


