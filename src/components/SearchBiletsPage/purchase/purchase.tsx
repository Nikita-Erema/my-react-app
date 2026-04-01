import { Header } from "../../HeaderComponent/Header"
import HeaderSearch from "../HeaderSearch"
import { SearchNavComponent } from "../SearchNav/SearchNav"
import  bgImage  from "../../../images/SearchImageHeader.png"
import { Details } from "../main/SearchDetails"

export function Purchase() {
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
				<HeaderSearch />
			</Header>
			<SearchNavComponent active={activeNav}></SearchNavComponent>
            <Details></Details>
        </>
    )
}