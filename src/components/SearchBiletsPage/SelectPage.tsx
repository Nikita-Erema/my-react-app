import { Footer } from "../FooterComponent/Footer";
import { Header } from "../HeaderComponent/Header";
import HeaderSearch from "./HeaderSearch";
import "./HeaderSearch.css";

export function SelectPage() {
	return (
		<>
			<Header>
				<HeaderSearch></HeaderSearch>
			</Header>
			<Footer></Footer>
		</>
	);
}
