import { Link } from "@tanstack/react-router";
import leftArrow from "@/assets/images/light_left_arrow_btn.png";
import rightArrow from "@/assets/images/light_right_arrow_btn.png";

type FormLinkProps = {
	title: string;
	link: string;
};

export const FormLink = ({ title, link }: FormLinkProps) => {
	const toNextCategory = title === "Dalej";

	return (
		<Link
			to={link}
			className={`w-fit p-2 mx-auto lg:mx-1 hover:font-bold flex gap-2 ${toNextCategory && "flex-row-reverse"}`}
		>
			<img
				src={toNextCategory ? rightArrow : leftArrow}
				className="w-[30px] h-5 self-center "
				alt={toNextCategory ? "strzałka w prawo" : "strzałka w lewo"}
			/>
			<p>{title}</p>
		</Link>
	);
};
