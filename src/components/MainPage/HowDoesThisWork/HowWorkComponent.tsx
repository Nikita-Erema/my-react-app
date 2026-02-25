import "./HowWorkComponent.css";
import { IconComponent } from "./IconComponent";
import { HOUSE, PC, WORLD } from "./SvgPath.ts";

export function HowWorkComponent() {
	return (
		<div className="how-work-component">
			<div className="how-work-header">
				<h2 className="how-work-title" id="how-it-works">
					Как это работает
				</h2>
				<button type="button" className="how-work-button">
					yзнaть больше
				</button>
			</div>
			<div className="how-work-main">
				<IconComponent
					svgPath={PC}
					text={"Удобный заказ на сайте"}
				></IconComponent>
				<IconComponent
					svgPath={HOUSE}
					text={"Нет необходимости ехать в офис"}
				></IconComponent>
				<IconComponent
					svgPath={WORLD}
					text={"Огромный выбор направлений"}
				></IconComponent>
			</div>
		</div>
	);
}
