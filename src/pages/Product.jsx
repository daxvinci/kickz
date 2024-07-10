import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { IoCartOutline } from "react-icons/io5";
import database from "../database";


const Product = () => {
    const params = useParams()
    const user = params.userId

    return ( 
        <>
        <section className="product-wrapper font-rest flex flex-col bg-[#F1AA39] pt-10 pb-40 justify-center items-center">
            <div className="fake-seperator w-[80%] flex flex-col items-center h-screen">
            <h1 className="text-4xl">Shopping process</h1>
            <div className="product h-full w-full rounded-3xl p-6 mt-10 bg-[#FAEEE0]">
                <div className="inner-wraper h-full flex flex-col justify-between">
                < Navbar />
                {database.filter((data) =>data.id === Number(user)).map((product) => 
                 <div className="prodcut-shown h-[80%] flex justify-between">
                    <div className="img-wrapper flex items-center gap-3 flex-col w-[55%]">
                        <div className="img-container rounded-2xl w-[60%]"><img className="max-w-full max-h-full" src={product.shoe} alt="shoe" /></div>
                        <div className="little-images flex gap-4">
                            <div className="small-img h-[33%]"><img className="max-w-full max-h-full" src={product.shoe} alt="small shoe" /></div>
                            <div className="small-img h-[33%]"><img className="max-w-full max-h-full" src={product.shoe} alt="small shoe" /></div>
                            <div className="small-img h-[33%]"><img className="max-w-full max-h-full" src={product.shoe} alt="small shoe" /></div>
                        </div>
                    </div>
                    <div className="product-details flex flex-col justify-between h-full py-6 w-[40%]">
                        <div className="details text-3xl text-[#F1AA39]">{product.brand}</div>
                        <div className="details text-2xl">{product.name}</div>
                        <div className="details w-[75%] text-lg">{product.description}</div>
                        <div className="details w-full"><hr className="border border-black" ></hr></div>
                        <div className="details flex gap-4">
                            <span className="price text-[#F1AA39] text-2xl">{product.price}</span> <span className="vat text-black opacity-50 text-lg">vat + shipping fee included</span>
                        </div>
                        <div className="details flex self-center gap-6">
                            <button className="addCart px-6 py-2 text-xl font-semibold bg-[#F1AA39] rounded-3xl shadow-sm text-zinc-950 hover:cursor-pointer active:translate-y-2">Add to cart</button>
                            <IoCartOutline color="#F1AA39" size={50} />
                        </div>
                    </div>
                </div>)}
                
                </div>
            </div>

            </div>
        </section>
        <section className="cart-picked w-full px-6">
            <div className="shopping-cart w-[50%]">
                <h1 className="text-2xl">Shopping Card</h1>
                <div className="sorryfortable w-full">
                <table className="w-[80%]">
                <thead className=" bg-red-300">
                <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                </tr>
                </thead>
                <tbody >
                <tr className=" bg-slate-800">
                <td><button>delete</button></td>
                <td>shoe</td>
                <td>$215.00</td>
                <td>1 pair</td>
                </tr>
            </tbody>
            <tfoot className="my-3 p-5 bg-orange-400">
            <tr>
                <td></td>
                <td><div>subtotal</div> <div>total</div> <div>1% vat excluded</div> </td>
                {/* <td>${expenseLists.reduce((total,expenseList)=> expenseList.amount + total,0) }</td> */}
                <td><div>$215.00</div> <div>$220.00</div> </td>
                <td></td>
            </tr>
            </tfoot>
            </table>
            <button>check out</button>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Product;