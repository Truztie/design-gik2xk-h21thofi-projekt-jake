import { useLottie } from "lottie-react";
import background_animation from "../resources/background_animation.json";
import { Container } from "@mui/material";

function Welcome() {
  const options = {
    animationData: background_animation,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >
        {View}{" "}
      </Container>
    </>
  );
}

export default Welcome;