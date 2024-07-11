import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { IoCartOutline } from "react-icons/io5";
import database from "../database";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";



const Product = ({setItems,items }) => {
    const [expanse,setExpanse] =useState(false)
    useEffect(()=>{
        setItems(items)
    },[setItems,items])
    const [menu,setMenu] = useState(false);
    const menuClose = ()=>{
        setMenu(false)
    }
    const navigate = useNavigate()
    const params = useParams()
    const user = params.userId

    const checkout =(product)=>{
        setItems(prev =>{
            const existingItem = prev.find(item => item.id === product.id);
        if (existingItem) {
            return prev.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1, price: item.quantity * item.price } 
                : item
            );
        } else {
            return [...prev, {
                quantity: 1,
                id: product.id,
                picture: product.shoe,
                price: product.price,
            }];
        }});
        console.log(product)
    }

    const expand =(text)=>{
        setExpanse(!expanse)
        const desc = document.getElementById('description')
        desc.innerHTML = expanse ? text.description : text.description.substring(0,280)
    }

    const nav =()=>{
        // setsomething
        navigate('/checkout');
    }

    return ( 
        <>
        <section className="product-wrapper font-rest flex flex-col bg-[#F1AA39] h-screen py-6 justify-center items-center">
            <div className="fake-seperator w-[80%] flex flex-col items-center h-[90%]">
            <div className="product h-full w-full rounded-3xl p-6 bg-[#FAEEE0]">
                <div className="inner-wraper h-full flex flex-col justify-between">
                {menu && <div className="menu absolute flex flex-col gap-6 right-0 top-0 left-0 z-50 bottom-0 py-4 px-6 bg-zinc-800 text-slate-200">
                <div className="close self-end" onClick={menuClose}><IoClose color="#f5f5f5" /></div>
                <div className="popup-menu flex flex-col h-20 text-2xl gap-4 justify-between">
                <div className="about font-rest py-2 px-2 border-slate-200">About us</div>
                <div className="search font-rest py-2 px-2 border-slate-200">Search</div>
                </div>
            </div>}
                < Navbar setmenu = {setMenu} items={items} />
                {database.filter((data) =>data.id === Number(user)).map((product) => 
                 <div key={product.id} className="prodcut-shown h-[90%] flex justify-between">
                    <div className="img-wrapper flex items-center gap-3 flex-col w-[55%]">
                        <div className="img-container rounded-2xl w-[80%] lg:w-[40%]"><img className="max-w-full max-h-full" src={product.shoe} alt="shoe" /></div>
                        <div className="little-images flex justify-center gap-4">
                            <div className="small-img w-[20%] lg:w-[10%]"><img className="max-w-full max-h-full" src={product.shoe} alt="small shoe" /></div>
                            <div className="small-img w-[20%] lg:w-[10%]"><img className="max-w-full max-h-full" src={product.shoe} alt="small shoe" /></div>
                            <div className="small-img w-[20%] lg:w-[10%]"><img className="max-w-full max-h-full" src={product.shoe} alt="small shoe" /></div>
                        </div>
                    </div>
                    <div className="product-details gap-2 flex flex-col justify-between w-[60%] h-full pb-6 lg:w-[40%]">
                        <div className="details text-md lg:text-2xl text-[#F1AA39]">{product.brand}</div>
                        <div className="details text-md lg:text-xl">{product.name}</div>
                        <div onClick={()=>expand(product)} id="description" className="details lg:w-[75%] lg:text-md">{product.description.length === 280? product.description.substring(0,280) + '...':product.description}</div>
                        <div className="details w-full"><hr className="border border-black" ></hr></div>
                        <div className="details flex gap-4 items-end">
                            <span className="price text-[#F1AA39] text-md lg:text-xl">{product.price}</span> <span className="vat text-black opacity-50 text-md lg:text-xl">vat + shipping fee included</span>
                        </div>
                        <div className="details flex mt-3 self-center gap-6">
                            <button onClick={()=>checkout(product)}  className="addCart px-8 py-2 text-md font-semibold bg-[#F1AA39] rounded-3xl shadow-gray-400 shadow-lg text-zinc-950 hover:cursor-pointer active:translate-y-2">Add to cart</button>
                            <IoCartOutline onClick={nav} className="hover:cursor-pointer active:translate-y-2" color="#F1AA39" size={40} />
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