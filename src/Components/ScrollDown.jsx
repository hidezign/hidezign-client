import styled from 'styled-components';

const ScrollDown = () => {
  return (
    <StyledWrapper>
      <div className="container_mouse">
        <span className="mouse-btn">
          <span className="mouse-scroll" />
        </span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .mouse-btn {
    margin: 10px auto;
    width: 40px;
    height: 80px;
    border: 3px solid white;
    border-radius: 20px;
    display: flex;
  }

  .mouse-scroll {
    display: block;
    width: 20px;
    height: 20px;
    background: linear-gradient(170deg, rgba(255, 255, 255, 0.918), rgb(255, 255, 255));
    border-radius: 50%;
    margin: auto;
    animation: scrolling13 1s ease-in infinite;
  }

  @keyframes scrolling13 {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }

    100% {
      opacity: 1;
      transform: translateY(20px);
    }
  }`;

export default ScrollDown;
