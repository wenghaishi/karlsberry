import React from "react";

const RootEnd = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen root-end">
      <div className="text-lg md:text-5xl text-center font-semibold text-green-800 ">
        Karlsberry advocates for youth & children.
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center pd-4 gap-16 p-10 md:p-14 root-end">
        <img src="children.webp" alt="" className="max-w-md	w-2/3 flex rounded-xl" />
        <div className="w-5/6 md:w-1/3 text-green-800 text-sm md:text-md lg:text-lg">
          We pledge to donate 1% of net sales to non-profits that support
          disadvantaged and vulnerable communities of youth and children.
          <br></br>
          <br></br>
          Our founder's commitment to this cause relates to his previous
          experience as an educator for 5 years and as a donor to various
          charities.
          <br></br>
          <br></br>
          We will selectively partner with such organisations that help
          alleviate poverty, curb hunger and provide children with access to
          education.
        </div>
      </div>
    </div>
  );
};

export default RootEnd;
