import AddPastryHeader from "../components/AddPastryHeader";
import PastriesList from "../components/PastriesList";
import PastriesTable from "../components/PastriesTable";
import { useGetAllPastriesQuery } from "../features/crud";

const AdminPastries = () => {
	const { data: pastriesData, error, isLoading } = useGetAllPastriesQuery();

	return (
		<>
			<section className="pt-28 px-4 min-w-0 flex-1">
				<AddPastryHeader />
				<PastriesList pastries={pastriesData} />
				<PastriesTable pastries={pastriesData} />
			</section>
		</>
	);
};

export default AdminPastries;
