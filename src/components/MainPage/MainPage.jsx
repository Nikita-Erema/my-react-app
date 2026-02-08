import { Footer } from "../FooterComponent/Footer";
import { Header } from "../HeaderComponent/Header";
import './main.css';
import { AboutUsComponent } from "./AboutUs/AboutUs";
import { HowWorkComponent } from "./HowDoesThisWork/HowWorkComponent";
import { ReviewsComponent } from "./Reviews/Reviews";

export function MainPage() {
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