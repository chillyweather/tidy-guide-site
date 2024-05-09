import React from 'react';
import { createRoot } from "react-dom/client";
import { ReactSVG } from "react-svg";

const Image = () => {
    return (
        <div className='comp-image'>
            <ReactSVG
                src={window.location.hash.slice(1, 99999999999)}
            />
            {/* <img src={window.location.hash.slice(1, 99999999999)} /> */}
        </div>
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Image />);