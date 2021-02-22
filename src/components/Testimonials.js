import React from "react";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

export const Testimonials = () => {
    return (
        <div id="testimonials" className="testimonials">
            <h1>happy clients</h1>
            <div className="container">
                <div className="testimonials-content">
                <TestimonialsCarousel/>
                </div>
            </div>
        </div>
    )
}
