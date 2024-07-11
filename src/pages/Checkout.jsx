import { useState } from "react";
import { useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Checkout = ({items,setItems,handleDelete}) => {
    const [total,setTotal] = useState(0)

    useEffect(() => {
        const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const totalWithTax = totalAmount * 1.01;
        setTotal(totalWithTax);
    }, [items]);
    const clear =()=>{
        setItems([])
    }
    return ( 
        <>
        <section className="cart-picked h-screen p-6">
            <div className="shopping-cart w-[80%] lg:w-[50%]">
                <h1 className="text-3xl my-6">Shopping Card</h1>
                <div className="sorryfortable flex flex-col w-full">
                <table className="w-full">
                <thead className=" bg-red-300">
                <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                </tr>
                </thead>
                <tbody >
                {items.map((item)=>
                <tr key={item.id} className="my-3 p-5 border-y border-y-black ">
                <td className="h-16 text-gray-500" onClick={()=>handleDelete(item.id)}><FaRegTrashAlt size={20} /></td>
                <td>{item.shoe}</td>
                <td>${item.price}</td>
                <td>{item.quantity<=1?item.quantity + 'pair':item.quantity + 'pairs'}</td>
                </tr>
                )}
            </tbody>
            <tfoot className="my-3 p-5 border-y-2 border-y-black ">
            <tr>
                <td></td>
                <td className=" text-xl font-semibold">subtotal:</td>
                <td className="text-xl">${(total / 1.01).toFixed(2)}</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td className="text-2xl font-semibold">Total:</td>
                <td className="text-[#F1AA39] text-2xl">${total.toFixed(2)}</td>
                <td></td>
            </tr>  
            <tr>
                <td></td>
                <td>1% vat excluded</td>
                <td></td>
                <td></td>
            </tr>
            </tfoot>
            </table>
            <button onClick={clear} className="addCart w-36 self-end px-8 py-2 text-md font-semibold bg-[#F1AA39] rounded-3xl shadow-gray-400 shadow-lg text-zinc-950 hover:cursor-pointer active:translate-y-2 mt-4">check out</button>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Checkout;