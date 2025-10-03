import { useSelector } from "react-redux";
function DisplayProduct() {
let products = useSelector(gs=>gs.product.products)
let name = useSelector(gs=>gs.product.name);
    return (
        <div>
            <h2>All Product Details ,Trainer name is {name}</h2>
            <h3>Number of products are {products.length}</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>PId</th>
                        <th>PName</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=> 
                        <tr key={index}>
                            <td>{product.pid}</td>
                            <td>{product.pname}</td>
                            <td>{product.price}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayProduct;