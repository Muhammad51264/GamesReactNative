import React from "react";
import DefaultText from "../components/shared/DefaultText/DefaultText";
import DefaultLayout from "../components/shared/DefaultLayout/DefaultLayout";
import ScreenTitle from "../components/shared/ScreenTitle/ScreenTitle";
import NavigationHome from "../components/NavigationHome/NavigationHome";

function Home({ route }) {
  return (
    <DefaultLayout>
      <ScreenTitle name={route.name}/>
      <NavigationHome />
    </DefaultLayout>
  );
}

export default Home;
