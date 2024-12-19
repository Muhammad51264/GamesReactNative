import React from "react";
import DefaultText from "../components/shared/DefaultText/DefaultText";
import DefaultLayout from "../components/shared/DefaultLayout/DefaultLayout";
import ScreenTitle from "../components/shared/ScreenTitle/ScreenTitle";

function Home({ route }) {
  return (
    <DefaultLayout>
      <ScreenTitle name={route.name}/>
    </DefaultLayout>
  );
}

export default Home;
