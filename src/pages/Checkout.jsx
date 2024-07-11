
const Checkout = ({items,setItems,handleDelete}) => {
    const clear =()=>{
        setItems([])
    }
    return ( 
        <>
        <section className="cart-picked h-screen p-6">
            <div className="shopping-cart w-[50%]">
                <h1 className="text-5xl">Shopping Card</h1>
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
                <tr key={item.id} className=" bg-slate-800">
                <td><button onClick={()=>handleDelete(item.id)}>delete</button></td>
                <td>{item.shoe}</td>
                <td>${item.price}</td>
                <td>{item.quantity<=1?item.quantity + 'pair':item.quantity + 'pairs'}</td>
                </tr>
                )}
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
            <button onClick={clear} className="addCart w-36 self-end px-8 py-2 text-md font-semibold bg-[#F1AA39] rounded-3xl shadow-gray-400 shadow-lg text-zinc-950 hover:cursor-pointer active:translate-y-2 mt-4">check out</button>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default Checkout;