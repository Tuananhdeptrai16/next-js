import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";
import * as React from "react";
import { sendRequest } from "@/utils/api";

export default async function HomePage() {
  const url = "https://run.mocky.io/v3/4d2c1217-d493-4290-b45f-a3cfa0342517";
  // dùng generic bên trong generic
  const data = await sendRequest<IBackendRes<ITrackTop>>({
    url: url,
    method: "GET",
    body: {},
  });
  console.log('Check rs ts ', data.data?.category);
  return (
    <Container>
      <div>
        <MainSlider />
      </div>
    </Container>
  );
}
