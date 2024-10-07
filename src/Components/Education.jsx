/* eslint-disable prettier/prettier */
import React from "react";

const Education = () => {
    return (
        <section className="light" id="education">
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Education</h2>
            {/* Grid de 4 células de educação */}
            <div className="education-grid">
                <div className="education-cell">Button</div>
                <div className="education-cell">Célula 2</div>
                <div className="education-cell">Célula 3</div>
                <div className="education-cell">Célula 4</div>
            </div>
        </section>
    );
};

export default Education;
