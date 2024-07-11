import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { IoCartOutline } from "react-icons/io5";
import database from "../database";


const Product = () => {
    const params = useParams()
    const user = params.userId

    return ( 
        <>
        <section className="product-wrapper font-rest flex flex-col bg-[#F1AA39] h-screen py-6 justify-center items-center">
            <div className="fake-seperator w-[80%] flex flex-col items-center h-[90%]">
            <div className="product h-full w-full rounded-3xl p-6 bg-[#FAEEE0]">
                <div className="inner-wraper h-full flex flex-col justify-between">
                < Navbar />
                {database.filter((data) =>data.id === Number(user)).map((product) => 
                 <div className="prodcut-shown h-[90%] flex justify-between">
                    <div className="img-wrapper flex items-center gap-3 flex-col w-[55%]">
                        <div className="img-container rounded-2xl w-[40%]"><img className="max-w-full max-h-full" src={product.shoe} alt="shoe" /></div>
                        <div className="little-images flex justify-center gap-4">
                            <div className="small-img w-[13%]"><img className="max-w-full max-h-full" src={product.shoe} alt="small shoe" /></div>
                            <div className="small-img w-[13%]"><img className="max-w-full max-h-full" src={product.shoe} alt="small shoe" /></div>
                            <div className="small-img w-[13%]"><img className="max-w-full max-h-full" src={product.shoe} alt="small shoe" /></div>
                        </div>
                    </div>
                    <div className="product-details flex flex-col justify-between h-full pb-6 w-[40%]">
                        <div className="details text-2xl text-[#F1AA39]">{product.brand}</div>
                        <div className="details text-xl">{product.name}</div>
                        <div className="details w-[75%] text-md">{product.description}</div>
                        <div className="details w-full"><hr className="border border-black" ></hr></div>
                        <div className="details flex gap-4 items-end">
                            <span className="price text-[#F1AA39] text-xl">{product.price}</span> <span className="vat text-black opacity-50 text-xl">vat + shipping fee included</span>
                        </div>
                        <div className="details flex self-center gap-6">
                            <button className="addCart px-8 py-2 text-md font-semibold bg-[#F1AA39] rounded-3xl shadow-gray-400 shadow-lg text-zinc-950 hover:cursor-pointer active:translate-y-2">Add to cart</button>
                            <IoCartOutline className="hover:cursor-pointer active:translate-y-2" color="#F1AA39" size={50} />
                        </div>
                    </div>
                </div>)}
                
                </div>
            </div>

            </div>
        </section>
        
        </>
     );
}
 
export default Product;