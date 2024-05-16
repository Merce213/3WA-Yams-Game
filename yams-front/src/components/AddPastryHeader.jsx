import { Button } from "@mui/joy";
import ModalAddPastry from "../components/ModalAddPastry";
import { useState } from "react";

const AddPastryHeader = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex flex-col sm:flex-row justify-between">
			<h1 className="text-2xl font-yams-body font-semibold">Pastries</h1>

			<Button
				sx={{
					backgroundColor: "#5368D5",
					color: "white",
				}}
				startDecorator={
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={24}
						height={24}
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M5 12h14" />
						<path d="M12 5v14" />
					</svg>
				}
				onClick={() => setOpen(true)}
			>
				Add new pastry
			</Button>

			<ModalAddPastry open={open} setOpen={setOpen} />
		</div>
	);
};

export default AddPastryHeader;
