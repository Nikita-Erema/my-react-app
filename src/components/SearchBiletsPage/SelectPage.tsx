import { Footer } from "../FooterComponent/Footer";
import { Header } from "../HeaderComponent/Header";
import HeaderSearch from "./HeaderSearch";
import "./HeaderSearch.css";
import bgImage from "../../images/SearchImageHeader.png";
import { MainSelectTickets } from "./main/SelectTickets";
import { SearchNavComponent } from "./SearchNav/SearchNav";

export function SelectPage() {
		const activeNav = [{
        	name: 'Билеты',
    	    class: 'item-checklist item-checklist-active'
    	},{
    	    name: 'Пассажиры',
    	    class: 'item-checklist'
    	},{
    	    name: 'Оплата',
    	    class: 'item-checklist'
    	},{
    	    name: 'Проверка',
    	    class: 'item-checklist'
    	}]
	return (
		<>
			<Header backgroundImageUrl={bgImage}>
				<HeaderSearch></HeaderSearch>
			</Header>
			<SearchNavComponent active={activeNav}></SearchNavComponent>
			<MainSelectTickets></MainSelectTickets>
			<Footer></Footer>
		</>
	);
}
