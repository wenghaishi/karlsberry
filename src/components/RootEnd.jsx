import React from "react";

const RootEnd = () => {
  return (
    <div>
      <div className="text-3xl root-end text-center pt-12 font-semibold text-green-800">
        Karlsberry advocates for youth & children.
      </div>
      <div className="flex flex-row items-center justify-center gap-16 p-14 root-end">
        <img src="children.webp" alt="" className="max-w-md	flex rounded-xl" />
        <div className="w-1/3 text-green-800">
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
