
const Checkout = () => {
    return ( 
        <>
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
 
export default Checkout;