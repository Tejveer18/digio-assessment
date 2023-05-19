import { useState } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FormComponent() {

    const router = useRouter();

    const [emailError, setEmailError] = useState(false);
    const [email, setEmail] = useState('')

    const validateEmail = (emailId) => {
        let validExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailId.match(validExp)) {
            setEmailError(false);
            return true
        } else {
            setEmailError(true);
            return false
        }
    }

    const handleContinue = (e) => {
        e.preventDefault();
        if(validateEmail(email)) {
            router.push('/otp');
        }
    }

    const handleChange = (e) => {
        let val = e.target.value;
        if(val.length > 0) {
            setEmail(val);
        }
    }

    return (
        <>
            <div className="text-sm md:text-base">
                <div>
                    example@digio.in uses Gmail?
                </div>
                <div className="mb-4">
                    login using google
                </div>
                <button className="text-white bg-red-600 px-8 py-1 rounded">g+ Google</button>
                </div>
                <div className="relative">
                <hr className="solid my-8 md:my-16"></hr>
                <p className="absolute text-lg or-styling">
                    OR
                </p>
                </div>
                <form>
                <div className="grid place-content-center mb-8">
                    <label htmlFor="email" className="text-xs md:text-sm text-left mb-1">Proceed with your email address</label>
                    <input className="border rounded px-2 py-1 email-box-width" type="email" id="email" onChange={handleChange}></input>
                    {
                        emailError && <p className="text-red-600 text-xs md:text-sm text-left">Please enter a valid email</p>
                    }
                </div>
                <div className="grid place-content-center">
                    <p className="text-xxs md:text-xs email-box-width mb-1">By continuing, I confirm to the Terms and Service and Privacy Policy of <a className="highlight-text-color" href="#">Digio.in</a></p>
                    <button className="text-white button-color px-8 py-1 uppercase text-sm md:text-base" onClick={handleContinue}>continue</button>
                </div>
            </form>
        </>
    )
}