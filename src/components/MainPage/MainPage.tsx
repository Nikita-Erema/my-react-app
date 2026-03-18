import { Footer } from "../FooterComponent/Footer";
import { Header } from "../HeaderComponent/Header";
import "./main.css";
import "../HeaderComponent/Header.css";
import bgImage from "../../images/bgImage.png";
import { MainFormHeader } from "../HeaderComponent/MainFormHeader";
import { AboutUsComponent } from "./AboutUs/AboutUs";
import { HowWorkComponent } from "./HowDoesThisWork/HowWorkComponent";
import { ReviewsComponent } from "./Reviews/ReviewsComponent";

export function MainPage() {
	return (
		<>
			<Header backgroundImageUrl={bgImage} text={true}>
				<MainFormHeader />
			</Header>
			<AboutUsComponent></AboutUsComponent>
			<HowWorkComponent></HowWorkComponent>
			<ReviewsComponent></ReviewsComponent>
			<Footer></Footer>
		</>
	);
}
