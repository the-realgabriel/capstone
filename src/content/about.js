

import Navbar from "./navbar";
import Footer from "./footer";

export default function About() {
    return (
        <div className="bg-gray-100 text-gray-900">
          
        <Navbar />
          
         
          <header className="relative text-white text-center py-32 bg-cover bg-center" style={{backgroundImage: "url('/hero-image.jpg')"}}>
            <div className="text-4xl font-bold" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>GROWING BEYOND</div>
            <div className="text-4xl font-bold bg-red-500 px-2 inline-block" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>EXPECTATION</div>
          </header>
          
          
          
          
         
          <div className="p-8 bg-blue-600 text-white" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
            <h2 className="text-xl font-bold">UNIQUE POSITIONING IN THE MARKET</h2>
            <p>Chartand Capstone operates and supplies minerals such as steel and petrolium to premium customers...</p>
          </div>
          
          
          <div className="p-8 bg-black text-white text-center" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-xl font-bold">ABOUT </h2>
            <p>Ideally positioned to fulfill the growing energy needs...</p>
          </div>
          
         
          
            <Footer/>
        </div>
      );
    };

