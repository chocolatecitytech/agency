import { useEffect } from 'react';
import SignaturePad from 'signature_pad';

const Signature = () => {
let signaturePad = null;

const clear = () => {
    if(signaturePad)
        signaturePad.clear();
}

useEffect(() => {
    const canvas = document.querySelector('canvas');
    signaturePad = new SignaturePad(canvas,{
        backgroundColor:"rgba(0,0,0,0)",
        penColor:"black"
    })
    return () => {
        
    }
}, [])

    return (
        <div>
            <h1>
                Please sign below:
            </h1>
            <div className="canvas-container">
                <canvas
                style={{
                    width:600,
                    height:200,
                    border:"1px solid black",
                    margin: "10px 10px 10px 20px"
                }}
                >
                </canvas>
                <div 
                style={{
                    margin:"10px 10px 10px 20px"
                }}
                >
                    <button type="button" onClick={clear}> Clear </button>
                </div>
            </div>
        </div>
    )
}

export default Signature
    
