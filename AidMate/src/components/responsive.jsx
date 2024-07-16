import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 16px;

  @media (min-width: 768px) {
    max-width: 750px;
    margin: auto;
  }

  @media (min-width: 1024px) {
    max-width: 970px;
  }
`;

const ResponsiveComponent = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <Container>
     
      {isDesktopOrLaptop}
      {isTabletOrMobile}
    </Container>
  );
};

export default ResponsiveComponent;
