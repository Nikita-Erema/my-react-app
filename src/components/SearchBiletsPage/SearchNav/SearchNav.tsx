import { ActiveNav } from "../../../types/interface";
import "./SearchNav.css";
export function SearchNavComponent({ active }: { active: ActiveNav[] }) {
	return (
		<div className="box-checklist">
			{
				active.map((item, index) => (
					<div key={index} className={item.class} style={{ zIndex: index-2*index }}>
						{item.name}
					</div>
				))
			}
		</div>
	);
}
