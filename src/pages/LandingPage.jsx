import { useState } from "react";
import GridItem from "../components/GridItem";
import Navbar from "../components/Navbar";
import { IoClose } from "react-icons/io5";

const LandingPage = () => {
    const [menu,setMenu] = useState(false);

    const menuClose = ()=>{
        setMenu(false)
    }
    return (
        <>
        <div className="bg-[#1E1E1E] min-h-screen w-full p-4 md:p-8 lg:pl-16 lg:pt-6 lg:pr-6 lg:pb-6 relative">
        {menu && <div className="menu absolute flex flex-col gap-6 right-0 top-0 left-0 z-50 bottom-0 py-4 px-6 bg-zinc-800 text-slate-200">
                <div className="close self-end" onClick={menuClose}><IoClose color="#f5f5f5" /></div>
                <div className="popup-menu flex flex-col h-20 text-2xl gap-4 justify-between">
                <div className="about font-rest py-2 px-2 border-slate-200">About us</div>
                <div className="search font-rest py-2 px-2 border-slate-200">Search</div>
                </div>
            </div>}
        <div className="shoe-rack absolute mr-6 right-0 top-32 z-10 h-[600px]"><img src="../../assets/cut-rack.png" alt="shoe rack" className="object-cover w-full h-full" /></div>
            < Navbar setmenu = {setMenu} />
            <div className="introduction flex flex-col md:flex-row justify-between md:w-[98%] mt-26 mb-16">
                <div className="head-text flex justify-between gap-2  w- flex-col md:w-[64%]">
                    <h1 className="header font-rest text-[35px] md:text-5xl lg:text-7xl text-slate-200">Shop The Best Collection of <br /> <span className="vogue text-[#F1AA39]">"In Vogue" </span> 
                        Sneakersand <br /> Trainers.
                    </h1>
                <div className="shoe w-[90%] z-20 md:hidden"><img src="../../assets/shoe.png" alt="shoe" className="w-full" /></div>
                    <p className="head-description font-rest text-slate-200 text-xl">The Just Don x Air Jordan Legacy 312 NRG collection is 
                        a collaboration between luxury street-wear designer Don C and Jordan Brand.
                    </p>
                    <div className="collection-btn font-playful hover:cursor-pointer active:translate-y-2 bg-[#F1AA39] text-2xl shadow-sm shadow-[#F1AA39] rounded-full my-5 lg:my-10 py-4 text-center w-[200px]">Collections</div>
                </div>
                <div className="shoe w-[36%] z-20 hidden md:block"><img src="../../assets/shoe.png" alt="shoe" className="w-full" /></div>
            </div>
            <div className="collections-wrapper flex flex-wrap justify-around gap-4 md:gap-6 font-rest">
                <div className="collections lg:basis-[20%] cursor-pointer text-lg px-1 rounded-3xl lg:text-2xl shadow-md text-slate-200 shadow-[#F1AA39] lg:rounded-full text-nowrap py-1 lg:py-4 text-center">Air Jordan 1 Low</div>
                <div className="collections lg:basis-[20%] cursor-pointer text-lg px-1 rounded-3xl lg:text-2xl shadow-md text-slate-200 shadow-[#F1AA39] lg:rounded-full text-nowrap py-1 lg:py-4 text-center">Clints Oasis</div>
                <div className="collections lg:basis-[20%] cursor-pointer text-lg px-1 rounded-3xl lg:text-2xl shadow-md text-slate-200 shadow-[#F1AA39] lg:rounded-full text-nowrap py-1 lg:py-4 text-center">adidas Samba</div>
                <div className="collections lg:basis-[20%] flex-1 cursor-pointer text-lg px-1 rounded-3xl lg:text-2xl shadow-md text-slate-200 shadow-[#F1AA39] lg:rounded-full text-nowrap py-1 lg:py-4 text-center">naked wolfe kosa format</div>
                <div className="collections lg:basis-[20%] cursor-pointer text-lg px-1 rounded-3xl lg:text-2xl shadow-md text-slate-200 shadow-[#F1AA39] lg:rounded-full text-nowrap py-1 lg:py-4 text-center">prada Milano</div>
                <div className="collections lg:basis-[20%] cursor-pointer text-lg px-1 rounded-3xl lg:text-2xl shadow-md text-slate-200 shadow-[#F1AA39] lg:rounded-full text-nowrap py-1 lg:py-4 text-center">Nike Killshot 2</div>
                <div className="collections lg:basis-[20%] cursor-pointer text-lg px-1 rounded-3xl lg:text-2xl shadow-md text-slate-200 shadow-[#F1AA39] lg:rounded-full text-nowrap py-1 lg:py-4 text-center">New Balance 9060</div>
                <div className="collections lg:basis-[20%] cursor-pointer text-lg px-1 rounded-3xl lg:text-2xl shadow-md text-slate-200 shadow-[#F1AA39] lg:rounded-full text-nowrap py-1 lg:py-4 text-center">Puma Mostro</div>
            </div>
        </div>
        <section className=" bg-[#FAEEE0] min-h-screen pl-8 lg:pl-12 md:pl-10 pt-6 pr-8 lg:pr-12 md:pr-10 pb-6 font-rest">
            <h1 className="discover font-semibold mb-5 text-3xl">Discover</h1>
            <div className="flex-collection flex flex-wrap justify-between gap-4">
                < GridItem image="../../assets/shoe1.png" name='NB 574' price='259.87' stars={3.4} />
                < GridItem image="../../assets/shoe2.png" name='Adidas Hype' price='215.23' stars={4} />
                < GridItem image="../../assets/shoe3.png" name='Yeezy Boast' price='179.09' stars={2} />
                < GridItem image="../../assets/shoe4.png" name='Jordan Spizike' price='160.00' stars={4} />
                < GridItem image="../../assets/shoe5.png" name='Adidas Oze..' price='124.88' stars={3} />
                < GridItem image="../../assets/shoe6.png" name='YKZ 700 V3' price='210.00' stars={2} />
                < GridItem image="../../assets/shoe7.png" name='U Bounce DNA' price='128.00' stars={3} />
                < GridItem image="../../assets/shoe8.png" name='Revolution' price='199.87' stars={4} />
                < GridItem image="../../assets/shoe9.png" name='Newbalance S' price='218.09' stars={3} />
                < GridItem image="../../assets/shoe10.png" name='Vasace chain..' price='218.00' stars={3} />
                < GridItem image="../../assets/shoe11.png" name='LV Skate' price='982.33' stars={4} />
                < GridItem image="../../assets/shoe12.png" name='Fendi' price='178.09' stars={2} />
            </div>
            <div className="arrows flex justify-center gap-2 mt-6">
                <div className="nav flex justify-between gap-16 md:gap-1 md:w-[8%]">
                    <div className="left hover:cursor-pointer "><img src="../../assets/left.png" alt="left arrow"/></div>
                    <div className="right hover:cursor-pointer "><img src="../../assets/right.png" alt="right arrow"/> </div>
                </div>
                
            </div>
        </section>
        <footer className="footer bg-[#1E1E1E] py-2 md:py-16 px-2 md:px-6 text-slate-200 flex justify-between">
            <div className="footer-container pt-8">
                <div className="footer-left flex flex-col justify-between h-1/2 gap-4 text-[10px] md:text-md lg:text-2xl">
                    <div className="address font-rest">Address: 121 road, first Avenue,C close victoria island lagos</div>
                    <div className="brand-contact flex gap-8 md:gap-28">
                        <div className="contact font-rest">Contact @ 12 04040 56</div>
                        <div className="brand ml-3 md:ml-8 font-playful text-[#F1AA03] text-2xl md:text-5xl lg:text-7xl">Kickz</div>
                    </div>
                </div>
            </div>
           
            <div className="barcode w-28 md:w-40 lg:w-auto"><img src="../../assets/barcode.png" alt="barcode" /></div>
            
        </footer>
        </>
     );
}
 
export default LandingPage;