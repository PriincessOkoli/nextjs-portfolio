import React from "react";

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    const fileName = "cv.pdf";
    const filePath = `/cv.pdf`;

    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="border-2 border-white w-[10rem] lg:w-fit p-5 text-white text-lg"
    >
      DOWNLOAD CV
    </button>
  );
};

export default DownloadButton;
