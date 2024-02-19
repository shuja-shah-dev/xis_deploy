import Image from "next/image";
import React from "react";

const LogoBar = () => {
  return (
    <div className="flex flex-wrap gap-4 sm:mx-0 mx-4 sm:gap-0 justify-around items-center md:px-10 pb-10">
      <div>
        <Image src="/Frame.png" alt="xray-lab logo" width={140} height={100} />
      </div>
      <div>
        <Image src="/ipai.png" alt="ipai logo" width={70} height={100} />
      </div>

      <div>
        <Image src="/nframe.png" alt="nvidia logo" width={180} height={47} />
      </div>
      <div>
        <Image src="/bosch.png" alt="bosch logo" width={150} height={100} />
      </div>
    </div>
  );
};

export default LogoBar;