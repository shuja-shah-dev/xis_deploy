import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const LogoBar = ({ sx = {} }) => {
  return (
    <Box
      className="flex  gap-6 sm:mx-0 mx-4 sm:gap-0 justify-around items-center md:px-10 sm:pb-10 px-1 sm:px-0 "
      sx={{
        ...sx,
      }}
    >
      <div>
        <Image src="/Frame.png" alt="xray-lab logo" width={130} height={100} />
      </div>
      <div>
        <Image src="/ip2.png" alt="ipai logo" width={110} height={100} />
      </div>
      <div>
        <Image
          src="/aws-activate.png"
          alt="aws logo"
          width={175}
          height={100}
        />
      </div>
      <div>
        <Image src="/nframe.png" alt="nvidia logo" width={140} height={47} />
      </div>
      <div>
        <Image src="/bosch.png" alt="bosch logo" width={150} height={100} />
      </div>
    </Box>
  );
};

export default LogoBar;
