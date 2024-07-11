import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = ({setmenu,items}) => {
    
    const navigate = useNavigate()
    
    const nav = ()=>{
        navigate('/checkout')
    }
    const menu = ()=>{
        setmenu(true)
    }
    return ( 
        <>
        <div className="top flex items-center justify-between mb-5 lg:mb-10">
                <nav className="navwrapper font-playful font-bold bg-[#F1AA39] p-3 lg:text-xl rounded-full gap-4 lg:gap-6 flex w-full md:w-[93%] items-center justify-between">
                    <div onClick={menu} className="menu md:hidden ml-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.6 19.2H2.40002M21.6 12H2.40002M21.6 4.79999H2.40002" stroke="black"
                     strokeWidth="2" strokeLinecap="round"/>
                    </svg></div>
                    <button className="brand md:ml-4 lg:ml-8 cursor-pointer text-2xl lg:text-4xl active:translate-y-2">Kickz</button>
                    <div className="other-nav hidden md:flex gap-2 flex-1 lg:w-[70%] items-center justify-between">
                        <form className="w-[45%]" role="search">
                            <input autoComplete="off" id="search" type="search" className="form-control w-full rounded-lg p-1 text-lg outline-none shadow-lg" placeholder="Search..." aria-label="Search"></input>
                        </form>
                        <button className="about-us lg:ml-6 hover:cursor-pointer active:translate-y-2">About us</button>
                        <div className="sign-in flex w-[35%] gap-2 justify-end">
                            <button className="log-in hover:cursor-pointer bg-[#2F2A26] rounded-3xl active:translate-y-2 cursor-pointer py-2 text-center px-2 w-[50%] lg:w-[40%] text-slate-100">Login</button>
                            <button className="create-account hover:cursor-pointer border rounded-3xl active:translate-y-2 cursor-pointer px-2 py-2 border-[#121713] w-[50%] text-center lg:w-[40%]">Register</button>
                        </div>
                    </div>
                    <div className="cart md:hidden lg:mr-5 hover:cursor-pointer active:translate-y-2"><IoCartOutline size={30} /></div>
                </nav>
                <div onClick={()=> nav()} className="cart hidden md:block relative lg:mr-5 hover:cursor-pointer active:translate-y-2"><IoCartOutline color="#F1AA39" size={40} />{items.length !== 0 && <span className="absolute right-[-5px] top-[-5px] w-4 h-4 rounded-full text-center bg-amber-600 text-black text-[12px]">{items.length}</span>}</div>
            </div>
        </>
     );
}
 
export default Navbar;