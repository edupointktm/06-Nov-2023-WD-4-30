import React from "react";
import Home from '../component/Home'
import About from "./About";
import {  Routes, Route } from "react-router-dom";
import Course from "./Course";
import Gallery from "./Gallery";
import Student_details from "./Student_details";
import Contact from "./Contact";
import Page_not_found from "./Page_not_found";
import Student_card from "./Student_card";
import Student_all_details from "./Student_all_details";
function Section() {

    return (
        <>
                       

            
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/course" element={<Course />}/>
                    <Route path="/gallery" element={<Gallery />}/>
                    <Route path="/student-details" element={<Student_details />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/student-card" element={<Student_card />}/>
                    <Route path="/student-all-details/:stdID" element={<Student_all_details />}/>
                    <Route path="*" element={<Page_not_found />}/>
                </Routes>
           
        </>
    )
}

export default Section