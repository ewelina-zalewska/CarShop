import { ModalBox } from "@/Shared/ModalBox";
import { TheButton } from "@/Shared/TheButton";
import { LinkToPage } from "@/Shared/LinkToPage";
import { FormEvent } from "react";

type DeleteConfirmationProps = {
	width: number;
	height: number;
	item: string;
	name: string;
	link: string;
	onClick: (e: FormEvent) => void;
};

export const DeleteConfirmation = ({
	width,
	height,
	item,
	name,
	link,
	onClick,
}: DeleteConfirmationProps) => {
	return (
		<ModalBox width={width} height={height}>
			<p>
				Czy na pewno chcesz usunąć {item} <strong>{name}</strong>?
			</p>
			<TheButton btnLabel="Usuń" onClick={onClick} />
			<LinkToPage link={link} title="Powrót" />
		</ModalBox>
	);
};
