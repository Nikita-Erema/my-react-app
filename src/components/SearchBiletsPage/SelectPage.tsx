import { Footer } from "../FooterComponent/Footer";
import { Header } from "../HeaderComponent/Header";
import HeaderSearch from "./HeaderSearch";
import "./HeaderSearch.css";
import bgImage from "../../images/SearchImageHeader.png";

export function SelectPage() {
	return (
		<>
			<Header backgroundImageUrl={bgImage}>
				<HeaderSearch></HeaderSearch>
			</Header>
			<Footer></Footer>
		</>
	);
}
