'use client';
import Modal from "@/components/Modal";

export default function Login() {
  return (
      <main className="relative">
        <div className="text-center">
          <div className="flex justify-center mx-10">
            <img className="border-solid border-2 m-10" src="random.png"></img>
          </div>
          <button className="text-white button-color px-8 py-4 text-base md:text-lg font-bold">Request OTP to Sign</button>
        </div>
        <Modal />
      </main>
  )
}
