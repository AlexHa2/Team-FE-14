
import ProductDetail from "./ProductDetailPage"
// import Listproduct from "../../../DataList/ProductData/ProductData"



const product =
    { image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj9djg1jj6z031', price: 1000, productName: "cup starbuck", address: "ha noi", condition: "new" }


export default function PreProductDetailPage() {
    return (
        <>

            <ProductDetail Product={product} UserLogin={true}/>
        </>
    )
}


