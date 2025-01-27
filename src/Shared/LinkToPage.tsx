import { Link } from "@tanstack/react-router";
import leftArrow from "@/assets/images/left_arrow_btn.png";

type LinkToPageProps = {
	title: string;
	link: string;
};

export const LinkToPage = ({ title, link }: LinkToPageProps) => {
	return (
		<Link
			to={link}
			className=" w-fit p-2 mx-auto lg:mx-1 hover:font-bold flex gap-2"
		>
			<img
				src={leftArrow}
				className="w-[30px] h-5 self-center "
				alt="strzałka w lewo"
			/>
			<p>{title}</p>
		</Link>
	);
};
