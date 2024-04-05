import React from "react";
import { IconButton, Modal, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { portfolioLinks } from "./constant";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "13.75rem",
    height: "11.125rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "1px solid rgba(199, 91, 82, 0.2)",
    borderRadius: "0.625rem",
  },
}));

export default function Works(props: {
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
          <div className="text-white">
            <h1 className=" text-2xl lg:text-3xl font-bold">Portfolio</h1>
            <h3 className="bg-white text-2xl lg:text-3xl font-bold w-[10rem] h-1 mt-2 mb-10"></h3>

            <div className="flex justify-between flex-wrap">
              {portfolioLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <HtmlTooltip
                    title={
                      <div className="space-y-2">
                        <p className="text-center text-lg">{link.name}</p>
                        <p className="px-3 text-center text-sm">{link.about}</p>
                      </div>
                    }
                    arrow
                    followCursor
                  >
                    <Link
                      href={`${link.href}`}
                      target="blank"
                      className="flex flex-col m-2"
                    >
                      <Image
                        src={`${link.img}`}
                        width={250}
                        height={50}
                        alt="portfolio"
                        style={{ height: "270px" }}
                      />
                      <p className="text-lg lg:pl-3 mt-3 block lg:hidden mb-2">
                        {link.name}
                      </p>
                    </Link>
                  </HtmlTooltip>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Slide>
    </Modal>
  );
}
