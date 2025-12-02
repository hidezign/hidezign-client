// import React from "react";

// const Loader = () => {
//     console.log("red")
//     return (
//         <div className="flex justify-center items-center min-h-screen absolute top-0 left-0 w-full z-50 bg-sp-bg1/70">
//             <div className="relative w-10 h-10 rotate-[165deg]">
//                 <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full animate-before8 bg-transparent" />
//                 <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full animate-after6 bg-transparent" />
//             </div>
//         </div>
//     );
// };

// export default Loader;

import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className='w-full h-screen flex justify-center items-center fixed top-0 left-0 bg-gray-400/50 dark:bg-gray-900/50 backdrop-blur-xs transition-opacity duration-500 ease-in-out z-[99999]'>
        <div className="loader" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    width: 48px;
    height: 48px;
    margin: auto;
    position: relative;
  }

  .loader:before {
    content: '';
    width: 48px;
    height: 5px;
    background: #FF303350;
    position: absolute;
    top: 60px;
    left: 0;
    border-radius: 50%;
    animation: shadow324 0.5s linear infinite;
  }

  .loader:after {
    content: '';
    width: 100%;
    height: 100%;
    background: #FF303390;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    animation: jump7456 0.5s linear infinite;
  }

  @keyframes jump7456 {
    15% {
      border-bottom-right-radius: 3px;
    }

    25% {
      transform: translateY(9px) rotate(22.5deg);
    }

    50% {
      transform: translateY(18px) scale(1, .9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }

    75% {
      transform: translateY(9px) rotate(67.5deg);
    }

    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shadow324 {

    0%,
      100% {
      transform: scale(1, 1);
    }

    50% {
      transform: scale(1.2, 1);
    }
  }`;

export default Loader;

