"use client";
import FormComponent from "@/components/FormComponent";

export default function Home() {

  return (
    <main>
      <section className="flex justify-between header-bg-color mb-4">
        <ul className="text-white">
          <li>
            <p className="text-sm md:text-base">
              Sign document using 
            </p>
          </li>
          <li>
            <p className="text-xs md:text-sm">
              example@digio.com
            </p>
          </li>
        </ul>
        <nav className="mr-2">
          <img className="bg-white h-10 border-b" src="generic-logo-hi.png" />
        </nav>
      </section>

      <section className="text-center my-4 p-8">
        <FormComponent /> 
      </section>

      <hr className="solid mt-8 md:mt-16"></hr>
      <section className="flex justify-between my-2">
        <div className="mr-2 grid grid-flow-col items-center">
          <img className="bg-white h-10 border-b" src="digio_logo.jpg" />
          <div className="text-xs mx-2">
            <p>Powered by</p>
            <a className="highlight-text-color" href="#">www.digio.in</a>
          </div>
        </div>
          <div>
            <p className="text-2xl md:text-3xl">
              1<span className="text-base md:text-lg">/3 steps</span>
            </p>
          </div>
      </section>
    </main>
  )
}
