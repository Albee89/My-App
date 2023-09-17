import React from 'react';
import ctx from "express-ctx";

function Cloud() {
    <div className="Cloud"></div>

    return (
    
        ctx.strokeStyle = 'lightgray',
        ctx.fillStyle = 'rgba(250,250,250,1)',
        ctx.lineWidth = 5,
        
        ctx.beginPath(),
        ctx.arc(140,90, 30, 0, 2 * Math.PI),
        ctx.fill(),
        ctx.stroke(),
    
        ctx.beginPath(),
        ctx.arc(80,100, 50, 0, 2 * Math.PI),
        ctx.fill(),
        ctx.stroke(),
    
        ctx.beginPath(),
        ctx.arc(120,120, 40, 0, 2 * Math.PI),
        ctx.fill(),
        ctx.stroke()

    )
}

export default Cloud;
