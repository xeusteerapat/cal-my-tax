import { useState } from "react";
import {
	Stepper,
	Button,
	Group,
	TextInput,
	Code,
	Container,
	NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

function App() {
	const [active, setActive] = useState(0);

	const form = useForm({
		initialValues: {
			salary: 0,
			bonus: 0,
			otherIncome: 0,
			name: "",
			email: "",
			website: "",
			github: "",
		},

		validate: (values) => {
			if (active === 0) {
				return {
					salary: values.salary === 0 ? "Salary must be greater than 0" : null,
					bonus: values.bonus === 0 ? "Bonus must be greater than 0" : null,
				};
			}

			if (active === 1) {
				return {
					name:
						values.name.trim().length < 2
							? "Name must include at least 2 characters"
							: null,
					email: /^\S+@\S+$/.test(values.email) ? null : "Invalid email",
				};
			}

			return {};
		},
	});

	const nextStep = () =>
		setActive((current) => {
			if (form.validate().hasErrors) {
				return current;
			}

			return current < 3 ? current + 1 : current;
		});

	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	return (
		<div
			style={{
				margin: "auto",
				// width: "50%",
				padding: "20px",
			}}
		>
			<Container fluid>
				<Stepper active={active} iconSize={26}>
					<Stepper.Step label="Salary & Bonus">
						<NumberInput
							label="Monthly Salary"
							placeholder="Your monthly salary"
							{...form.getInputProps("salary")}
						/>
						<NumberInput
							mt="md"
							label="Bonus"
							placeholder="Your bonus"
							{...form.getInputProps("bonus")}
						/>
						<NumberInput
							mt="md"
							label="Other income"
							placeholder="Your other income eg. freelance, rent, etc."
							{...form.getInputProps("otherIncome")}
						/>
					</Stepper.Step>

					<Stepper.Step label="Personal deduction">
						<TextInput
							label="Name"
							placeholder="Name"
							{...form.getInputProps("name")}
						/>
						<TextInput
							mt="md"
							label="Email"
							placeholder="Email"
							{...form.getInputProps("email")}
						/>
					</Stepper.Step>

					<Stepper.Step label="Provident fund">
						<TextInput
							label="Website"
							placeholder="Website"
							{...form.getInputProps("website")}
						/>
						<TextInput
							mt="md"
							label="GitHub"
							placeholder="GitHub"
							{...form.getInputProps("github")}
						/>
					</Stepper.Step>
					<Stepper.Step label="Insurance & Other fund">
						<TextInput
							label="Website"
							placeholder="Website"
							{...form.getInputProps("website")}
						/>
						<TextInput
							mt="md"
							label="GitHub"
							placeholder="GitHub"
							{...form.getInputProps("github")}
						/>
					</Stepper.Step>
					<Stepper.Step label="Calculate Tax">
						<TextInput
							label="Website"
							placeholder="Website"
							{...form.getInputProps("website")}
						/>
						<TextInput
							mt="md"
							label="GitHub"
							placeholder="GitHub"
							{...form.getInputProps("github")}
						/>
					</Stepper.Step>
					<Stepper.Completed>
						Completed! Form values:
						<Code block mt="xl">
							{JSON.stringify(form.values, null, 2)}
						</Code>
					</Stepper.Completed>
				</Stepper>

				<Group justify="flex-end" mt="xl">
					{active !== 0 && (
						<Button variant="default" onClick={prevStep}>
							Back
						</Button>
					)}
					{active !== 3 && <Button onClick={nextStep}>Next step</Button>}
				</Group>
			</Container>
		</div>
	);
}

export default App;
