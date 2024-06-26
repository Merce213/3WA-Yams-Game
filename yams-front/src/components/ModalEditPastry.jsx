import {
	AspectRatio,
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	Modal,
	ModalDialog,
	Radio,
	RadioGroup,
	Sheet,
	Typography,
} from "@mui/joy";
import { useEffect, useState } from "react";
import {
	useGetPastryByIdQuery,
	useUpdatePastryMutation,
} from "../features/crud";

const ModalEditPastry = ({ open, setOpen, id }) => {
	const [pastryData, setPastryData] = useState({
		name: "",
		quantity: "",
		image: "",
		choice: Boolean,
	});

	const [errors, setErrors] = useState({});

	const { data, error, isLoading } = useGetPastryByIdQuery(id);

	const [updatePastry] = useUpdatePastryMutation();

	useEffect(() => {
		if (data) {
			setPastryData(data);
		}
	}, [data]);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setPastryData({
			...pastryData,
			[name]: value,
		});

		if (errors[name]) {
			setErrors({
				...errors,
				[name]: "",
			});
		}
	};

	const handleChangeRadioBoolean = (e) => {
		const { name, value } = e.target;

		setPastryData({
			...pastryData,
			[name]: value === "true" ? true : false,
		});

		if (errors[name]) {
			setErrors({
				...errors,
				[name]: "",
			});
		}
	};

	const convertImageToBase64 = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (readerEvent) => {
				const content = readerEvent.target.result;
				setPastryData({
					...pastryData,
					image: content,
				});
				setErrors({
					...errors,
					image: "",
				});
			};

			reader.onerror = (error) => {
				setErrors({
					...errors,
					image: `Erreur lors de la lecture du fichier: ${error}`,
				});
			};

			if (file.type.startsWith("image/")) {
				reader.readAsDataURL(file);
			} else {
				setErrors({
					...errors,
					image: "Le fichier doit être une image",
				});
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const errors = {};

		if (!pastryData.name) {
			errors.name = "Name is required";
		}

		if (!pastryData.quantity) {
			errors.quantity = "Quantity is required";
		}

		if (!pastryData.image) {
			errors.image = "Image is required";
		}

		if (Object.keys(errors).length > 0) {
			setErrors(errors);
			return;
		}

		try {
			updatePastry({
				id,
				...pastryData,
			})
				.unwrap()
				.then((data) => {
					console.log(data);
				})
				.catch((error) => {
					console.error(error);
				});
		} catch (error) {
			console.error(error);
		}

		setOpen(false);

		setPastryData({
			name: "",
			quantity: "",
			image: "",
			choice: Boolean,
		});

		setErrors({});

		window.location.reload();
	};

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<ModalDialog variant="outlined" role="alertdialog">
				<Sheet
					sx={{
						width: {
							xs: "98%",
							sm: "300px",
							md: "400px",
							lg: "500px",
							xl: "600px",
						},
						mx: "auto",
						display: "flex",
						flexDirection: "column",
						gap: 2,
						borderRadius: "sm",
					}}
				>
					<div>
						<Typography level="h4" component="h1">
							Edit pastry
						</Typography>
					</div>
					<form onSubmit={handleSubmit} encType="multipart/form-data">
						<div className="flex flex-col gap-3">
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input
									name="name"
									type="text"
									value={pastryData.name}
									placeholder="Name of the pastry"
									onChange={handleChange}
								/>
								<FormHelperText
									sx={{
										color: "red",
									}}
								>
									{errors && errors.name && (
										<span>{errors.name}</span>
									)}
								</FormHelperText>
							</FormControl>

							<FormControl>
								<FormLabel>Quantity</FormLabel>
								<Input
									name="quantity"
									type="number"
									value={pastryData.quantity}
									placeholder="Quantity availaible"
									onChange={handleChange}
								/>
								<FormHelperText
									sx={{
										color: "red",
									}}
								>
									{errors && errors.quantity && (
										<span>{errors.quantity}</span>
									)}
								</FormHelperText>
							</FormControl>

							<div>
								<label
									htmlFor="img"
									className="mb-1 block text-sm font-medium text-gray-700"
								>
									Upload file
								</label>
								<input
									id="img"
									type="file"
									name="image"
									accept="image/*"
									onChange={convertImageToBase64}
									className="block w-full text-sm file:mr-4 file:cursor-pointer file:rounded-md file:border-0 file:bg-blue-500 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white file:transition-colors file:duration-200 file:ease-in-out hover:file:bg-blue-700/80 focus:file:ring-2 focus:file:ring-blue-500 focus:file:ring-offset-2"
								/>

								<FormHelperText
									sx={{
										color: "red",
									}}
								>
									{errors && errors.image && (
										<span>{errors.image}</span>
									)}
								</FormHelperText>
							</div>

							{pastryData.image && (
								<AspectRatio ratio="2">
									<img
										src={pastryData.image}
										loading="lazy"
										alt=""
									/>
								</AspectRatio>
							)}

							<FormControl
								sx={{
									width: "50%",
								}}
							>
								<FormLabel>Status</FormLabel>
								<RadioGroup
									name="choice"
									value={pastryData.choice}
									defaultValue={pastryData.choice}
									onChange={handleChangeRadioBoolean}
									sx={{ my: 1 }}
								>
									<Radio value={false} label="Forbidden" />
									<Radio value={true} label="Allowed" />
								</RadioGroup>
							</FormControl>
							<Button
								type="submit"
								sx={{
									mt: 1,
								}}
							>
								Edit
							</Button>
						</div>
					</form>
				</Sheet>
			</ModalDialog>
		</Modal>
	);
};

export default ModalEditPastry;
