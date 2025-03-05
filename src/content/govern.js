import Navbar from "./navbar";
import Footer from "./footer";
import photo from "../images/photo1.jpg";
import BackgroundSlideshow from "./BackgroundSlideshow";



export default function Govern() {
    return (
        <div>
            <Navbar />
           
            <header className="relative text-black text-center py-32 bg-cover bg-center" style={{backgroundImage: "url('/hero-image.jpg')"}}>
            <div className="text-4xl font-bold text-black" >Meet Our Leadership</div>
            <div className="text-4xl font-bold bg-red-500 px-2 inline-block" >Visionary Leadership Driving Excellence</div>
            <p className="text-black pt-4">At Chart & Capstone Integrated Ltd (C&C), our leadership team is composed of highly skilled professionals with decades of experience across oil & gas, logistics, agriculture, fintech, and project finance.<br/> Their expertise, strategic vision, and unwavering dedication have positioned C&C as a leader in multiple industries, driving innovation, sustainability, and economic growth</p>
          </header>
          
          
          <div className="  text-black bg-gray-300 p-6 m-8 rounded-xl overflow-hidden drop-shadow-sm " > 
          
<div className="text-xl font-bold pt-9  flex flex-col">Chief Omamomo Edijala – Chairman & CEO</div>
     

            
            <p className="max-w-4xl ">With over 20 years of experience in shipping, oil & gas, and business strategy, Chief Omamomo Edijala has been instrumental in the growth and expansion of C&C. 
              <br/>A Master’s degree holder from the University of Lagos, he has played a key role in attracting foreign direct investments into Nigeria’s oil & gas sector. 
            <br/> His leadership ensures that C&C remains a trusted name in the global energy and trade market.</p>
            <img src={photo} alt="CEO" className="w-60 h-1/5  hover:scale-105 transition-transform dur-bg-gray-300 rounded-2xl" style={{justifyContent:"spaced-around", left: "1px", position: "relative", marginButtom:'500px' }}/>
          </div>
          
         
          <div className="  text-black border-gray-300 p-6 m-8 rounded-xl overflow-hidden drop-shadow-sm" >
        <div className="text-xl font-bold">Mr. Nicholas Shegbemi Commey – Director</div>
            <p className="max-w-4xl">A graduate of Obafemi Awolowo University, Ile-Ife, Mr. Commey has held senior managerial roles in marketing, administration, and project management.<br/>
             With over 25 years of experience in the gas and renewable energy industry, he has played a crucial role in expanding C&C’s reach in the upstream and downstream oil & gas sectors.
             <br/> His expertise in business development and strategic partnerships continues to drive growth for the company</p>
          </div>
          
          
          <div className="p-8  text-black bg-gray-300 p-6 m-8 rounded-xl overflow-hidden drop-shadow-sm " >
      <div className="text-xl font-bold">Dr. Kayode Kale – Executive Director (Finance & Administration)</div>
            <p className="max-w-4xl">Dr. Kale is a seasoned business consultant with over 30 years of experience in finance, energy, and oil & gas operations. 
            <br/>His deep understanding of financial management and investment strategies has helped C&C secure high-value projects and partnerships.
            <br/> With a vast network in the corporate and financial sectors, he ensures that C&C maintains financial stability and growth.</p>
          </div>
          
          <div className="p-8  text-black bg-gray-300 p-6 m-8 rounded-xl overflow-hidden drop-shadow-sm" >
      <div className="text-xl font-bold"> Mr. Richard Omamuzo Oletu – Procurement & Logistics Manager</div>
            <p className="max-w-4xl">With over 10 years of experience in the maritime and procurement sector, Richard Omamuzo Oletu oversees contractual procurement, logistics, and supply chain management.
              <br/> He previously worked with NNPC (Nigerian National Petroleum Corporation) and other leading oil marketing companies, gaining extensive knowledge in health, safety, and environmental policies. 
              <br/>His commitment to efficiency and compliance makes him a key asset to the company.</p>
          </div>

          <div className="p-8 text-black bg-gray-300 p-6 m-8 rounded-xl overflow-hidden drop-shadow-sm" >
      <div className="text-xl font-bold">Mr. David Edijala – Technical Director</div>
            <p className="max-w-4xl">A first-class graduate of Software Engineering from the American University of Nigeria, David Edijala specializes in financial technology and software development.
              <br/> He has designed subscription-based transport systems and digital payment solutions that are currently integrated into C&C’s agriculture and transportation operations. 
              <br/>His technical expertise ensures that C&C remains at the forefront of digital transformation.</p>
          </div>
         
         <div className="p-8 text-center text-black " >
          <div className="text-4xl font-bold">Why Our Leadership Stands Out</div>
          <div className=" text-lg flex-col ">
          <li>Decades of Experience – Our directors have a combined experience of over 85 years across various industries</li>
          <li>Global Reach – Strong connections with business partners in Africa, Europe, and Asia.</li>
          <li>Strategic Growth – Proven track record of attracting international investments and expanding business operations</li>
          <li>Innovation-Driven – Focused on leveraging technology and modern business strategies to stay ahead.</li>
          <li>Commitment to Excellence – Dedicated to delivering quality services and sustainable solutions for global markets.</li>
          </div>

         </div>
          
         <BackgroundSlideshow />
         <Footer/>
        </div>
    );
}