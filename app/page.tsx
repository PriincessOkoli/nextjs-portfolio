"use client";
import Image from "next/image";
import ModalState from "./component/Modal";
import About from "./component/About";
import DownloadButton from "./component/DownloadButton";
import Works from "./component/Works";
import ContactMe from "./component/ContactMe";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col font-sans items-center justify-between p-8 lg:p-24">
      <div className="w-full lg:w-3/6 flex flex-col items-center mt-10 lg:mt-5">
        <div>
          <Image
            src={"/me.webp"}
            width={100}
            height={50}
            alt="Princess"
            className="me"
            style={{ height: "100px" }}
          />
        </div>
        <div className="border-b-2 flex justify-center items-center w-full border-white">
          <div className="border h-16"></div>
        </div>
        <div className="text-white p-5 lg:p-8">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl lg:text-4xl font-bold px-3 lg:px-10 pt-10 pb-5">
              Okoli C. O. Princess
            </h1>
            <h1 className="text-lg lg:text-2xl px-3 lg:px-10 pb-10 font-thin text-center">
              A dedicated and solution-driven Frontend Developer with a passion
              for teamwork and collaboration.
            </h1>
          </div>
        </div>
        <div className="border-t-2 flex justify-center items-center w-full border-white">
          <div className="border h-16"></div>
        </div>
        <div className="flex ">
          <div className="flex flex-wrap justify-center">
            <ModalState>
              {(isVisible, open, close) => (
                <>
                  <button
                    onClick={open}
                    className="border-2 border-white w-[10rem] lg:w-{8rem] p-5 text-white text-lg"
                  >
                    ABOUT
                  </button>
                  <About isVisible={isVisible} close={close} />
                </>
              )}
            </ModalState>
            <ModalState>
              {(isVisible, open, close) => (
                <>
                  <button
                    onClick={open}
                    className="border-2 border-white w-[10rem] lg:w-[8rem] p-5 text-white text-lg"
                  >
                    WORKS
                  </button>
                  <Works isVisible={isVisible} close={close} />
                </>
              )}
            </ModalState>
            <DownloadButton />

            <ModalState>
              {(isVisible, open, close) => (
                <>
                  <button
                    onClick={open}
                    className="border-2 border-white w-[10rem] lg:w-fit p-5 text-white text-lg"
                  >
                    CONTACT
                  </button>
                  <ContactMe isVisible={isVisible} close={close} />
                </>
              )}
            </ModalState>
          </div>
        </div>
      </div>
    </main>
  );
}
