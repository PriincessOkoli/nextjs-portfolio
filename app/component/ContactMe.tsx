import React from "react";
import { IconButton, Modal, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function ContactLinks() {
  return (
    <div className="text-white">
      <div className="flex lg:flex-col justify-between flex-wrap">
        <Link
          href="mailto:okolichimarume@gmail.com"
          className="border border-white rounded-full p-3 mr-2 lg:p-5 mb-4 w-fit"
        >
          <EmailIcon fontSize="30" className="text-[2rem] lg:text-[2.5rem]" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/princess-okoli-816374227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="border border-white rounded-full p-3 mr-2 lg:p-5 mb-4 w-fit"
          target="blank"
        >
          <LinkedInIcon
            fontSize="30"
            className="text-[2rem] lg:text-[2.5rem]"
          />
        </Link>
        <Link
          href="tel:09064388027"
          className="border border-white rounded-full p-3 mr-2 lg:p-5 mb-4 w-fit"
        >
          <PhoneIcon fontSize="30" className="text-[2rem] lg:text-[2.5rem]" />
        </Link>
        <Link
          href="https://github.com/PriincessOkoli"
          target="blank"
          className="border border-white rounded-full p-3 lg:p-5 mb-4 w-fit"
        >
          <GitHubIcon fontSize="30" className="text-[2rem] lg:text-[2.5rem]" />
        </Link>
      </div>
    </div>
  );
}
export default function ContactMe(props: {
  isVisible: boolean;
  close: () => void;
}) {
  const { isVisible, close } = props;

  return (
    <Modal
      open={isVisible}
      className="flex justify-center my-10 mx-8 overflow-y-auto opacity-90"
    >
      <Slide in={isVisible} direction="down">
        <div className="bg-black py-10 px-10 w-[55rem] h-fit z-50 overflow-0 relative rounded-md">
          <div className="w-full flex justify-end">
            <IconButton
              onClick={close}
              className="bg-white fixed mt-[-8rem] mr-[-8rem]"
            >
              <CloseIcon className="text-white font-extrabold" />
            </IconButton>
          </div>
          <h1 className="text-white text-2xl lg:text-3xl font-bold">CONTACT</h1>
          <h3 className="text-white bg-white text-2xl lg:text-3xl font-bold w-[10rem] h-1 mt-2 mb-10"></h3>

          <div className="flex justify-between flex-wrap">
            <div className="hidden lg:flex">
              <ContactLinks />
            </div>
            <div className="w-full lg:w-4/5">
              <div className="flex justify-between flex-wrap mb-10 items-center">
                <div className="mb-3">
                  <p className="text-white font-light text-xl mb-3">NAME</p>
                  <input
                    type="text"
                    className="w-[18rem] lg:w-[19rem] bg-transparent border-2 rounded-md p-3 text-white text-lg"
                  />
                </div>
                <div className="mb-2 lg:mb-3">
                  <p className="text-white font-light text-xl mb-3">EMAIL</p>
                  <input
                    type="email"
                    className="w-[18rem] lg:w-[19rem] bg-transparent border-2 rounded-md p-3 text-white text-lg"
                  />
                </div>
              </div>
              <div>
                <p className="text-white font-light text-xl mb-3">MESSAGE</p>
                <textarea
                  name="messege"
                  id="messege"
                  cols={20}
                  rows={4}
                  className="w-full bg-transparent border-2 rounded-md p-3 text-white text-lg"
                ></textarea>
              </div>
              <div className="mt-10 mb-10 lg:mb-5">
                <Link
                  href="mailto:okolichimarume@gmail.com"
                  className="w-[13rem] lg:w-[20rem] bg-white rounded p-4 lg:mx-auto text-center"
                  onClick={() => null}
                >
                  SEND MESSEGE
                </Link>
              </div>
            </div>
            <div className="flex lg:hidden">
              <ContactLinks />
            </div>
          </div>
        </div>
      </Slide>
    </Modal>
  );
}
