import { Footer } from "../FooterComponent/Footer";
import { Header } from "../HeaderComponent/Header";
import './main.css';
import { AboutUsComponent } from "./AboutUs/AboutUs";
import { HowWorkComponent } from "./HowDoesThisWork/HowWorkComponent";
import { ReviewsComponent } from "./Reviews/Reviews";
import { useCallback } from "react";

export function MainPage() {

  let a = 1;
  const memoizedCallback = useCallback(
    () => {
      a += 1;
    },
    [a],
  );

  a = 2;

  console.log(memoizedCallback());
  

  return (
    <>
      <Header></Header>
      <AboutUsComponent></AboutUsComponent>
      <HowWorkComponent></HowWorkComponent>
      <ReviewsComponent></ReviewsComponent>
      <Footer></Footer>
    </>
  );
}