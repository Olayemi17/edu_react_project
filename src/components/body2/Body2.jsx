import "./body2.css"
import imageOne from "../../assets/image-1.png"
import imageTwo from "../../assets/image-2.png"
import imageThree from "../../assets/image-3.png"
import data from "../../assets/data_science-removebg-preview.png"
import finance from "../../assets/finance-removebg-preview.png"
import english from "../../assets/english-removebg-preview.png"
import develop from "../../assets/development-removebg-preview.png"
import manage from "../../assets/management-removebg-preview.png"
import content from "../../assets/content-removebg-preview.png"
import art from "../../assets/art-removebg-preview.png"
import business from "../../assets/business-removebg-preview.png"
function Body2(){
    return(
     <>
     <div className="container3 -mt-9 sm:mt-96 w-full">
         <div className="all-image flex flex-col-2 md:flex-col-3  gap-7 ml-20">
             <div>
                 <img className="image1 h-auto sm:-mt-48  -mt-20 rounded-lg" src={imageOne} alt=""/>
             </div>
             <div>
                 <img className="image2 h- sm:-mt-64 -mt-28 w-96 rounded-lg" src={imageTwo} alt=""/>
             </div>
             <div>
                  <img className="image1 h-auto sm:-mt-48 -mt-20 w-96 rounded-lg" src={imageThree} alt=""/>
              </div>
         </div>
        
         <div className="sm:mt-44 mt-20">
          <div className="">
             <h1 className="explore ml-16 text-3xl sm:text-5xl font-bold leading-tight">Explore <br /> Our Categories</h1>
             <p className="paragraph ml-16 mt-9 font-sans font-bold sm:font-medium">Look into yourself, get something in return <br /> as your AchievementLook into yourself, get <br /> something Return as your achievement</p>  
          </div>
          <div className="sm:mt-16 mt-16">
            <a href="#"  id="btn" className="ml-16 text-lg text-white mt-11  p-4 rounded-full font-medium w-52 h-14" >
                Explore Categories
            </a>
          </div>
         
         </div>


         <div className="iconic justify-center sm:-mt-80  mt-20 sm:ml-80 flex-wrap flex gap-5 sm:gap-11">
             <div className="imgss sm:-mt-3 flex-wrap">
                 <img className="img  p-4 sm:p-8 sm:h-32 h-22 w-24 sm:w-32 sm:ml-32 cursor-pointer rounded-2xl" src={data} alt=""/>
                 <p className="data sm:mt-4 sm:ml-32 font-semi-bold  text-gray-700 cursor-pointer hover:underline font-sans text-sm sm:text-xl">Data Science</p>
             </div>
             <div className="imgss sm:-mt-3">
                 <img className="img2 p-4 sm:p-8 sm:h-32 h-22 w-24 sm:w-32 cursor-pointer  rounded-2xl" src={english} alt=""/>
                 <p className="sm:mt-4 sm:ml-7 font-semi-bold text-gray-700 cursor-pointer hover:underline ml-2 font-sans text-sm sm:text-xl">English</p>
             </div>
             <div className="imgss sm:-mt-3">
                 <img className="img3 p-4 sm:p-8 sm:h-32 h-22 w-24 sm:w-32 cursor-pointer  rounded-2xl ml-1 sm:-ml-2" src={finance} alt=""/>
                 <p className="sm:mt-4 sm:ml-6 text-gray-700 cursor-pointer hover:underline ml-2 font-semi-bold font-sans text-sm sm:text-xl">Finance</p>
             </div>
             <div className="imgss sm:-mt-3">
                 <img className="img p-4 sm:p-8 sm:h-32 h-22 w-24 sm:w-32 cursor-pointer rounded-2xl ml-4 sm:-ml-2" src={content} alt="" />
                 <p className="sm:mt-4 sm:ml- text-gray-700 cursor-pointer hover:underline ml- font-semi-bold font-sans text-sm sm:text-xl">Content Writing</p>
             </div> 
             <div className="imgss sm:-mt-3">
                 <img className="img2  p-4  sm:p-8 sm:h-32 h-22 w-24 sm:w-32 sm:ml-32 cursor-pointer  rounded-2xl" src={develop} alt=""/>
                 <p className="data sm:mt-4 sm:ml-32  text-gray-700 cursor-pointer hover:underline font-semi-bold font-sans text-sm sm:text-xl">Development</p>
             </div>
             <div className="imgss sm:-mt-3">
                 <img className="img3 p-4 sm:p-8 sm:h-32 h-22 w-24 sm:w-32 cursor-pointer  rounded-2xl" src={art} alt=""/>
                 <p className="sm:mt-4 sm:ml-2 text-gray-700 cursor-pointer hover:underline ml-2 font-semi-bold font-sans text-sm sm:text-xl">Art & Design</p>
             </div>
             
             <div className="imgss sm:-mt-3">
                 <img className="img p-4 sm:p-8 sm:h-32 h-22 w-24 sm:w-32 cursor-pointer  rounded-2xl" src={manage} alt=""/>
                 <p className="sm:mt-4 sm:ml-1 text-gray-700 cursor-pointer hover:underline ml-2 font-sans font-semi-bold text-sm sm:text-xl">Management</p>
             </div>
             
             <div className="imgss sm:-mt-3 pb-32">
                 <img className="img2 p-4 sm:p-8 sm:h-32 h-22 w-24 sm:w-32 cursor-pointer rounded-2xl" src={business} alt="" />
                 <p className="sm:mt-4 sm:ml-5 text-gray-700 cursor-pointer hover:underline ml-2 font-sans font-semi-bold text-sm sm:text-xl">Business</p>
             </div>
          
        </div>
       
     </div>
    
      
     
     
     </>
    )
}




export default Body2