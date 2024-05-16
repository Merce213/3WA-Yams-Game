import {
	Button,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	Modal,
	ModalDialog,
} from "@mui/joy";

const ModalDeletePastry = ({ open, setOpen, id }) => {
	const handleClick = async (id) => {};

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<ModalDialog variant="outlined" role="alertdialog">
				<DialogTitle>
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
						<circle cx={12} cy={12} r={10} />
						<line x1={12} x2={12} y1={8} y2={12} />
						<line x1={12} x2="12.01" y1={16} y2={16} />
					</svg>
					Confirmation
				</DialogTitle>
				<Divider />
				<DialogContent>
					Do you really want to delete this pastry?
				</DialogContent>
				<DialogActions>
					<Button
						variant="solid"
						color="danger"
						// onClick={() => handleClick(id)}
					>
						Delete
					</Button>
					<Button
						variant="plain"
						color="neutral"
						onClick={() => setOpen(false)}
					>
						Cancel
					</Button>
				</DialogActions>
			</ModalDialog>
		</Modal>
	);
};

export default ModalDeletePastry;
