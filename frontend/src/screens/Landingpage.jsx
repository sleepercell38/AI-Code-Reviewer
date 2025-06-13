import React from 'react'
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <video
        src="/public/original-54809559b7276d304fee12518b8ab752.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <nav >
        <h2    
        
        className='text-slate-300  text-3xl  p-5 font-semibold'  >CODEREV . AI</h2>
      </nav>

            <nav  className='flex justify-start '><button  style={{
      background: "linear-gradient(90deg, #a8ff78 0%, #78ffd6 50%, #11998e 100%)",
      border: "none",
      borderRadius: "1rem",
      padding: "0.5rem 1.5rem",
      fontWeight: "bold",
      fontSize: "1rem",
      boxShadow: "0 2px 8px rgba(17,153,142,0.2)",
      outline: "none",

      transition: "transform 0.1s",
    }} className=' border text-green-700 rounded-2xl outline outline-green-200 px-3 py-2 ml-20 mt-10'> AI Powered</button></nav>


      <section className='flex justify-between  items-center mt-10 '>

   

       <div className="content mt-10 ml-10">
        <h1 className='text-6xl text-slate-200 font-light'>Ace Coding with<br />
        
       <div className=' mt-3'> <span       style={{
          background: "linear-gradient(90deg, #a8ff78 0%, #78ffd6 50%, #11998e 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          fontWeight: "bold"
        }} > AI Powered </span> Reviews.</div>
        
        </h1> 
       
       </div>
      

       <div className="texty mr-10 mt-10">
        <h4 className=' text-m font-light text-green-100 '>
            Get specific reviews and suggestions when you need them <br />
            dive deeper into concepts and bugs coming you way !!. <br />
            From preperation to mastery -- <br /> your ultimate <span style={{
          background: "linear-gradient(90deg, #a8ff78 0%, #78ffd6 50%, #11998e 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          fontWeight: "bold"
        }} className='text-2xl' >Code Reviewer </span>is here.
        </h4>



       </div>



      </section>


      <div className='flex justify-center items-center mt-68'>
        <button    style={{
      background: "linear-gradient(90deg, #a8ff78 0%, #78ffd6 50%, #11998e 100%)",
      border: "none",
      borderRadius: "1rem",
      padding: "0.5rem 1.5rem",
      fontWeight: "bold",
      
      boxShadow: "0 2px 8px rgba(17,153,142,0.2)",
      outline: "none",

      transition: "transform 0.1s",
    }}


         onClick={()=>{
            navigate("/codepage")
         }}

        className='rounded-xl border outline px-4 py-2 text-xl text-green-800 cursor-pointer'>
            Get Started
        </button>
      </div>
     
    </div>
  );
}

export default Landingpage