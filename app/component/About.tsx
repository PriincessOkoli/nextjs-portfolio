import React from "react";
import { IconButton, Modal, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export default function About(props: {
  isVisible: boolean;
  close: () => void;
}) {
  const { isVisible, close } = props;

  return (
    <Modal open={isVisible} className="flex justify-center my-10 mx-8 overflow-y-auto opacity-90">
      <Slide in={isVisible} direction="down">
        <div className="bg-black py-10 px-10 w-[48rem] h-fit z-50 overflow-0 relative rounded-md">
          <div className="w-full flex justify-end">
            <IconButton
              onClick={close}
              className="bg-white fixed mt-[-8rem] mr-[-8rem]"
            >
              <CloseIcon className="text-white font-extrabold" />
            </IconButton>
          </div>
          <div className="text-white">
            <h1 className=" text-2xl lg:text-3xl font-bold">About Me</h1>
            <h3 className="bg-white text-2xl lg:text-3xl font-bold w-[10rem] h-1 mt-2 mb-10"></h3>
            <div className="flex justify-between flex-wrap">
              <Image
                src={"/me.webp"}
                width={200}
                height={50}
                alt="Princess"
                style={{ height: "270px" }}
              />
              <p className="text-lg lg:pl-3 mt-3 lg:mt-0 max-w-[42ch]">
                Welcome to my portfolio! I am Okoli C. Obianuju, a dedicated and
                dynamic junior Frontend Developer with a passion for technology
                in its entirety. My journey in the tech world has been marked by
                efficiency, courtesy, and enthusiasm, qualities that I bring to
                every project and team I work with. As a recent graduate with a
                Bachelor's degree in Computer Science from the University of
                Benin and National Diploma qualifications from Auchi
                Polytechnic, I have cultivated a strong foundation in various
                technologies.
              </p>
            </div>
            <div>
              <p className="text-lg py-3">
                 Proficient in React, TypeScript, JavaScript,
                Node.js, Next.js, API consumption, HTML, CSS, Tailwind CSS, and
                Python, I am well-equipped to create responsive and dynamic user
                interfaces.
                My academic background, combined with hands-on experience, has
                enabled me to contribute successfully to projects that require
                expertise in frontend technologies. I take pride in ensuring
                seamless user experiences and efficient API integrations,
                showcasing my adaptability to new technologies and a meticulous
                eye for detail in UI/UX design.
              </p>
              <p className="text-lg py-3">
                I am eager to further develop my skills and gain practical
                experience in the field of technology. Aiming to kickstart my
                tech career, I am actively seeking opportunities to work as a
                junior developer in a company where I can learn and grow
                alongside experienced developers. In return, I offer my full
                commitment, a positive attitude, and a friendly demeanor that
                will make me a valuable addition to your team.
              </p>
              <p className="text-lg py-3">
                I am excited about the prospect of contributing my technical
                skills and passion for frontend development to meaningful
                projects. With a commitment to excellence and effective
                collaboration, I am confident in my ability to be a valuable
                asset to any team. Let's create innovative solutions together!
              </p>
            </div>
          </div>
        </div>
      </Slide>
    </Modal>
  );
}
