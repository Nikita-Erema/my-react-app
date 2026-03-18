import { Footer } from "../FooterComponent/Footer";
import { Header } from "../HeaderComponent/Header";
import HeaderSearch from "./HeaderSearch";
import "./HeaderSearch.css";
import bgImage from "../../images/SearchImageHeader.png";
import { MainSelectTickets } from "./main/SelectTickets";
import { SearchNavComponent } from "./SearchNav/SearchNav";

export function SelectPage() {
	return (
		<>
			<Header backgroundImageUrl={bgImage}>
				<HeaderSearch></HeaderSearch>
			</Header>
			<SearchNavComponent></SearchNavComponent>
			<MainSelectTickets></MainSelectTickets>
			<Footer></Footer>
		</>
	);
}
