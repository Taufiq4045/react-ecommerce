import React from "react"
import { Link } from "react-router-dom"
import { useDocument } from "../../customHooks"
import Error from '../../assests/images/404error.jpeg';
import "./Page404.css";


export const Page404 = () => {
   useDocument("Page404")
   return(
       <main className="main404">
           <h1 className="head-md text-center padding-md">Hi buddy , I think you are on wrong page 
                <Link to="/products" className="btn-link text-center head-lg">Click here</Link>
                to checkout different Products.
           </h1>
           <div className="img-container padding-sm">
                <img className="img-responsive" src={Error} alt="page_not_found"/>
           </div>
       </main>
   )
}