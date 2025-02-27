import Navbar from "./navbar";
import Footer from "./footer";


export default function Govern() {
    return (
        <div>
            <Navbar />
            <header className="relative text-white text-center py-32 bg-cover bg-center" style={{backgroundImage: "url('/hero-image.jpg')"}}>
            <div className="text-4xl font-bold" >GROWING BEYOND</div>
            <div className="text-4xl font-bold bg-red-500 px-2 inline-block" >EXPECTATION</div>
          </header>
          
          
          <div className="p-8 bg-black text-white" >
<div className="text-xl font-bold">PREMIUM COAL QU</div>
            <p>BOSS and PB have high-quality coal with high CV...</p>
          </div>
          
         
          <div className="p-8 bg-blue-600 text-white" >
<div className="text-xl font-bold">UNIQUE POSITIONING IN THE Market</div>
            <p>BOSS operates and supplies coal to premium customers...</p>
          </div>
          
          
          <div className="p-8 bg-black text-white text-center" >
      <div className="text-xl font-bold">ABOUT</div>
            <p>Ideally positioned to fulfill the growing energy needs...</p>
          </div>
          
         
          
         
         <Footer/>
        </div>
    );
}