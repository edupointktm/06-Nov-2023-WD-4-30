import React, { useState } from "react";

function Home(props) {
    let [x, updateA]=useState(5)
    function messageCheck(){
        updateA(10)
    }
    return (
        <>
            {/* <section>
                <div className="container">
                    <h1> Home Page </h1>
                    <h3> <a href="https://www.youtube.com">Youtube</a></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta, assumenda quo natus iste adipisci illum repellendus, repudiandae quae culpa quidem inventore quis id asperiores blanditiis nisi nihil nobis distinctio?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta, assumenda quo natus iste adipisci illum repellendus, repudiandae quae culpa quidem inventore quis id asperiores blanditiis nisi nihil nobis distinctio?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta, assumenda quo natus iste adipisci illum repellendus, repudiandae quae culpa quidem inventore quis id asperiores blanditiis nisi nihil nobis distinctio?</p>
                </div>
            </section> */}
            <div className="container py-3 ">
        <button className="btn btn-primary" 
        
        onClick={()=>messageCheck()}>Click me</button>
        <h3> {x}</h3>
        </div> 

        </>
    )
}

export default Home