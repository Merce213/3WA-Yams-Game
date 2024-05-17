import {
	Box,
	Chip,
	List,
	ListDivider,
	ListItem,
	ListItemContent,
	Typography,
} from "@mui/joy";
import RowMenu from "./RowMenu";

const PastriesList = ({ pastries }) => {
	return (
		<Box
			sx={{
				display: { xs: "block", sm: "none" },
				bgcolor: "white",
				p: 2,
				mt: 2,
				borderRadius: 15,
			}}
		>
			{pastries?.map((pastrie) => (
				<List
					key={pastrie.id}
					size="sm"
					sx={{
						"--ListItem-paddingX": 0,
					}}
				>
					<ListItem
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "start",
						}}
					>
						<ListItemContent
							sx={{
								display: "flex",
								gap: 2,
								alignItems: "start",
							}}
						>
							<div>
								<Typography fontWeight={600} gutterBottom>
									Id : {pastrie.id}
								</Typography>

								<Typography level="body-sm" gutterBottom>
									{`${pastrie.quantity} ${pastrie.name}`}
								</Typography>

								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										gap: 0.5,
										mb: 1,
									}}
								>
									<Typography level="body-xs">
										Total quantity won :{" "}
										{pastrie.quantityWon}
									</Typography>
								</Box>

								<RowMenu id={pastrie.id} />
							</div>
						</ListItemContent>
						<Chip
							variant="soft"
							size="sm"
							startDecorator={
								{
									false: "Forbidden",
									true: "Allowed",
								}[pastrie.choice]
							}
							color={
								{
									false: "neutral",
									true: "success",
								}[pastrie.choice]
							}
						></Chip>
					</ListItem>
					<ListDivider />
				</List>
			))}
		</Box>
	);
};

export default PastriesList;
