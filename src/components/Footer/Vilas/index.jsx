import React from "react";
import "./styles.css";

const Vilas = () => {
    return (
        <div className="vilas">
            <div className="vilaBrasil" style={{ borderRight: '1px solid #ECD0BB', minWidth: '200px'}}>
                <img src="assets/vilaBrasil.png" alt="logo vila brasil" className="image" />
            </div>
            <div className="vilaInternacional" style={{minWidth:'200px'}}>
                <img 
                    src="assets/vilaInternacional.png" alt="logo vila brasil" className="image"
                />
            </div>
        </div>
    )
}

export default Vilas;