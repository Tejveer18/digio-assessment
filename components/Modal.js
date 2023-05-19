import { useState } from "react";

export default function Modal () {
    const [verify, setVerify] = useState(false);
    const [aadharVerified, setAadharVerified] = useState(false)
    const [otpVerify, setOtpVerify] = useState(false)
    const [otpVerified, setOtpVerified] = useState(false);

    const handleChange = (e, type) => {
        let val = e.target.value
        if(type === 'aadhar') {
            if(val.length === 12) {
                setVerify(true);
            } else {
                setVerify(false);
            }
        } 
        if(type === 'otp') {
            if(val.length === 4) {
                setOtpVerify(true);
            } else {
                setOtpVerify(false);
            }
        }
    }

    const handleClick = (e, type) => {
        e.preventDefault();
        if(type ==="aadhar") {
            setAadharVerified(true);
        }
        if(type === "otp") {
            setOtpVerified(true);
        }
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content px-4 mx-2 md:mx-60 lg:mx-96">
                <h1 className="text-lg font-bold py-2">
                    Register Aadhar
                </h1>
            <hr className="solid mt-4"></hr>
            <div className="grid grid-flow-col">
                <div>
                    <img className="aadhar-img" src="1200px-Aadhaar_Logo.svg.png"></img>
                </div>
                <div>
                    <form className="flex">
                        <input className="border-solid border-2 py-1 px-2 aadhar-input mx-1 my-2" type="number" onChange={e => handleChange(e, 'aadhar')}></input>
                        <button className={`text-white ${verify ? 'button-color' : 'bg-gray-400'} my-2 px-4 text-sm`} disabled={verify ? false : true} onClick={e => handleClick(e, "aadhar")}>Verify</button>
                    </form>
                    {
                        aadharVerified &&
                        <form>
                            <div>
                                <input type="checkbox" id="checkbox" className="mx-1"></input>
                                <label htmlFor="checkbox" className="text-xs md:text-sm">I agree to eSign this <span className="underline underline-offset-1 cursor-pointer">KYC document</span> to get started</label>
                            </div>
                            <div>
                                <input className="border-solid border-2 py-1 px-2 aadhar-input mx-1 my-2" type="number" onChange={e => handleChange(e, 'otp')}></input>    
                                <button className={`text-white ${otpVerify ? 'button-color' : 'bg-gray-400'} my-2 px-4 text-sm`} disabled={otpVerify ? false : true} onClick={e => handleClick(e, "otp")}>Verify</button>
                            </div>
                        </form>
                    }
                </div>
            </div>
            </div>
        </div>
    )
} 