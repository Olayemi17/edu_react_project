import "./body-section3.css"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"
import bbb from "../../assets/bbb.png"

function BodySection3(){
    return (
        <>
         <div className="container6">
             <div className="">
                <h6 className="join text-center pt-16 sm:text-5xl text-4xl font-bold">Join the biggest <br /> Community of learning</h6>
                <p className="join2 text-center mt-9 font-medium text-lg sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam, quis malesuada sed tristique <br />sed vulputate eleifend urna potenti. Amet non sed eget</p>
             </div> 
            <div className="std bg-white sm:w-96 w-11/12 rounded-3xl p-5 h-32 sm:h-36 mt-16 m-auto">
                <p className="textss text-center text-xl font-semibold">🧡Happy Student</p>
                <div className="flex -space-x-3 mt-4">
                      <img className="w-13 h-13 border-2 border-white rounded-full dark:border-gray-800" src={img1} alt=""/>
                      <img className="w-13 h-13 border-2 border-white rounded-full dark:border-gray-800" src={img2} alt=""/>
                      <img className="w-13 h-13 border-2 border-white rounded-full dark:border-gray-800" src={img3} alt=""/>
                      <img className="w-13 h-13 border-2 border-white rounded-full dark:border-gray-800" src={img4} alt=""/>
                      <img className="w-13 h-13 border-2 border-white rounded-full dark:border-gray-800" src={img5} alt=""/>
                 
                 </div>
                 <div className="-mt-12 text-end">  
                     <p className="pppp font-bold text-4xl ">+ <span>25</span>K</p> 
                  </div>
            </div> 
                  <div className="pb-32">
                      <img className=" w-11/12 ml-16" src={bbb} alt="" />
                      <p className="btnnn m-auto sm sm:text-lg text-base text-center text-white sm:mt-9 mt-9 p-4 rounded-full font-medium sm:w-40 cursor-pointer w-36 h-14">Join Now</p>
                   </div>

         </div>     
        
        </>
    )
}



export default BodySection3