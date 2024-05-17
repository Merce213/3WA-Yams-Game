import { Chip, Sheet, Table, Typography } from "@mui/joy";
import RowMenu from "./RowMenu";

const PastriesTable = ({ pastries }) => {
	return (
		<>
			<Sheet
				variant="outlined"
				sx={{
					display: { xs: "none", sm: "block" },
					width: "100%",
					borderRadius: "sm",
					flexShrink: 1,
					overflow: "auto",
					minHeight: 0,
					mt: 8,
				}}
			>
				<Table
					aria-labelledby="tableTitle"
					stickyHeader
					hoverRow
					sx={{
						"& tr > *": { textAlign: "center" },
						"--TableCell-headBackground":
							"var(--joy-palette-background-level1)",
						"--Table-headerUnderlineThickness": "1px",
						"--TableRow-hoverBackground":
							"var(--joy-palette-background-level1)",
						"--TableCell-paddingY": "4px",
						"--TableCell-paddingX": "8px",
					}}
				>
					<thead>
						<tr>
							<th style={{ width: 140, padding: "12px 8px" }}>
								Id
							</th>
							<th style={{ width: 240, padding: "12px 8px" }}>
								Name
							</th>
							<th style={{ width: 140, padding: "12px 8px" }}>
								Quantity left
							</th>
							<th style={{ width: 140, padding: "12px 8px" }}>
								Quantity won
							</th>
							<th style={{ width: 140, padding: "12px 8px" }}>
								Status
							</th>
							<th style={{ width: 140, padding: "12px 8px" }}>
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{pastries?.map((pastrie) => (
							<tr key={pastrie.id}>
								<td>
									<Typography level="body-xs">
										{pastrie.id}
									</Typography>
								</td>
								<td>
									<Typography level="body-xs">
										{pastrie.name}
									</Typography>
								</td>
								<td>
									<Typography level="body-xs">
										{pastrie.quantity}
									</Typography>
								</td>
								<td>
									<Typography level="body-xs">
										{pastrie.quantityWon}
									</Typography>
								</td>
								<td>
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
								</td>
								<td>
									<RowMenu id={pastrie.id} />
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Sheet>
		</>
	);
};

export default PastriesTable;
