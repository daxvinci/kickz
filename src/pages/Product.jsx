import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { IoCartOutline } from "react-icons/io5";


const Product = () => {
    const params = useParams()
    const user = params.userId
    console.log(user)

    return ( 
        <>
        <section className="product-wrapper flex flex-col bg-[#F1AA39] pt-10 pb-40 justify-center items-center">
            <div className="fake-seperator w-[80%] flex flex-col items-center h-screen">
            <h1 className="text-4xl">Shopping process</h1>
            <div className="product h-full w-full rounded-3xl p-6 mt-10 bg-[#FAEEE0]">
                <div className="inner-wraper h-full flex flex-col justify-between">
                < Navbar />
                <div className="prodcut-shown h-[80%] flex justify-between border border-slate-900">
                    <div className="img-wrapper w-[55%]">
                        <div className="img-container"><img src={user.shoe} alt="shoe" /></div>
                        <div className="little-images">
                            <div className="small-img"><img src={user.shoe} alt="small shoe" /></div>
                            <div className="small-img"><img src={user.shoe} alt="small shoe" /></div>
                            <div className="small-img"><img src={user.shoe} alt="small shoe" /></div>
                        </div>
                        </div>
                    <div className="product-details flex flex-col justify-between h-full py-6 w-[40%]">
                        <div className="details">Nike</div>
                        <div className="details">Air Jordan 4 Retro Oxidation Gren</div>
                        <div className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea impedit odio reprehenderit, obcaecati voluptatum at accusamus ut iusto alias quia. Eos corrupti repellat tempora, explicabo non consequatur exercitationem illo!</div>
                        <div className="details bg-black"><hr /></div>
                        <div className="details flex gap-4">
                            <span className="price text-[#F1AA39] text-2xl">$215.00</span> <span className="vat text-lg">vat + shipping fee included</span>
                        </div>
                        <div className="details flex self-center gap-6">
                            <button className="addCart px-6 py-2 text-xl font-semibold bg-[#F1AA39] rounded-3xl shadow-sm text-zinc-950">Add to cart</button>
                            <IoCartOutline color="#F1AA39" size={50} />
                        </div>
                    </div>
                </div>
                </div>
            </div>

            </div>
        </section>
        <section className="cart-picked w-full px-6">
            <div className="shopping-cart w-[50%]">
                <h1 className="text-2xl">Shopping Card</h1>
                <div className="sorryfortable w-full">
                <thead>
                <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td><button>delete</button></td>
                <td>shoe</td>
                <td>$215.00</td>
                <td>1 pair</td>
                </tr>
            </tbody>
            <tfoot>
            <tr>
                <td></td>
                <td><div>subtotal</div> <div>total</div> <div>1% vat excluded</div> </td>
                {/* <td>${expenseLists.reduce((total,expenseList)=> expenseList.amount + total,0) }</td> */}
                <td><div>$215.00</div> <div>$220.00</div> </td>
                <td></td>
            </tr>
            </tfoot>
            <button>check out</button>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Product;