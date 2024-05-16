import AddPastryHeader from "../components/AddPastryHeader";
import PastriesList from "../components/PastriesList";
import PastriesTable from "../components/PastriesTable";

const AdminPastries = () => {
	const pastries = [
		{
			id: "1",
			name: "Fondant supreme",
			image: "http://placehold.it/32x32",
			quantity: 4,
			quantityWon: 0,
			choice: false,
		},
		{
			id: "2",
			name: "Cake tout Chocolat",
			image: "http://placehold.it/32x32",
			quantity: 3,
			quantityWon: 0,
			choice: true,
		},
	];

	return (
		<>
			<section className="pt-28 px-4 min-w-0 flex-1">
				<AddPastryHeader />
				<PastriesList pastries={pastries} />
				<PastriesTable pastries={pastries} />
			</section>
		</>
	);
};

export default AdminPastries;
