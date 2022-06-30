import { useState } from "react";
import {useDispatch } from "react-redux";
import {
	Row,
	Col,
	Form,
	Container,
	Button,
	FloatingLabel,
} from "react-bootstrap";
import { createDetail } from "../features/details/detailSlice"

const Formdetails = () => {
	const [validated, setValidated] = useState(false);
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		middleName: "",
		address: "",
		country: "default",
		city: "",
		zipcode: "",
		email: "",
		phoneNumber: "",
		height: "",
		weight: "",
    });
    const dispatch=useDispatch()
	const handleInputs = (e) => {
		let name, value;
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
		//console.log(user.country,e.target.name,e.target.value)
	};

	const PostData = async (e) => {
		e.preventDefault();
		setValidated(true);
        console.log(user);
        dispatch(createDetail(user))
        setUser({})
	};
	return (
		<div>
			<Row className="justify-content-md-center">
				<Col md={8} sm={8}>
					<Container>
						<Form
							noValidate
							validated={validated}
							onSubmit={PostData}
							method="POST"
						>
							<div style={{ marginBottom: "5px" }}>
								<Form.Group>
									<Form.Label>First Name</Form.Label>
									<Form.Control
										type="text"
										id="firstName"
										name="firstName"
										value={user.firstName}
										onChange={handleInputs}
										placeholder="First Name"
										required
									/>
									<Form.Control.Feedback type="invalid">
										Please provide firstName.
									</Form.Control.Feedback>
									<Form.Control.Feedback type="valid">
										Looks good!
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group>
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										type="text"
										id="lastName"
										name="lastName"
										value={user.lastName}
										style={{
											transition:
												"box-shadow .3s, border .3s, -webkit-box-shadow .3s",
										}}
										onChange={handleInputs}
										placeholder="Last Name"
										required
									/>
									<Form.Control.Feedback type="invalid">
										Please provide firstName.
									</Form.Control.Feedback>
									<Form.Control.Feedback type="valid">
										Looks good!
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group>
									<Form.Label>Middle Name</Form.Label>
									<Form.Control
										type="text"
										id="middleName"
										name="middleName"
										value={user.middleName}
										style={{
											transition:
												"box-shadow .3s, border .3s, -webkit-box-shadow .3s",
										}}
										onChange={handleInputs}
										placeholder="Middle Name"
										required
									/>
									<Form.Control.Feedback type="invalid">
										Please provide middleName.
									</Form.Control.Feedback>
									<Form.Control.Feedback type="valid">
										Looks good!
									</Form.Control.Feedback>
								</Form.Group>
								<Row>
									<Col md={4}>
										<Form.Group>
											<Form.Label>Address</Form.Label>
											<Form.Control
												type="text"
												id="address"
												name="address"
												value={user.address}
												onChange={handleInputs}
												placeholder="Enter Address"
												required
											/>
											<Form.Control.Feedback type="invalid">
												Please provide address.
											</Form.Control.Feedback>
											<Form.Control.Feedback type="valid">
												Looks good!
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
									<Col md={2}>
										<Form.Group controlId="country">
											<Form.Label>Country</Form.Label>
											<FloatingLabel
												controlId="floatingSelect"
												label="Select"
												type="text"
												id="country"
											>
												<Form.Select
													aria-label="Floating label select example"
													name="country"
													onChange={handleInputs}
													required
												>
													<option value="">......</option>
													<option value="US">US</option>
													<option value="INDIA">INDIA</option>
													<option value="CHINA">CHINA</option>
												</Form.Select>
											</FloatingLabel>
											<Form.Control.Feedback type="invalid">
												Please provide country.
											</Form.Control.Feedback>
											<Form.Control.Feedback type="valid">
												Looks good!
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
									<Col md={3}>
										<Form.Group>
											<Form.Label>City</Form.Label>
											<Form.Control
												type="text"
												id="city"
												name="city"
												value={user.city}
												onChange={handleInputs}
												placeholder="Enter city"
												required
											/>
											<Form.Control.Feedback type="invalid">
												Please provide city.
											</Form.Control.Feedback>
											<Form.Control.Feedback type="valid">
												Looks good!
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
									<Col md={3}>
										<Form.Group>
											<Form.Label>Zip Code</Form.Label>
											<Form.Control
												type="text"
												id="zipcode"
												name="zipcode"
												value={user.zipcode}
												onChange={handleInputs}
												placeholder="Enter zipcode"
												required
											/>
											<Form.Control.Feedback type="invalid">
												Please provide zipcode.
											</Form.Control.Feedback>
											<Form.Control.Feedback type="valid">
												Looks good!
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Group md="6" controlId="validationCustom04">
											<Form.Label>Email</Form.Label>
											<Form.Control
												type="email"
												name="email"
												value={user.email}
												onChange={handleInputs}
												placeholder="Email"
												required
												pattern=".+@gmail.com"
											/>
											<Form.Control.Feedback type="invalid">
												Please provide a valid gmail.
											</Form.Control.Feedback>
											<Form.Control.Feedback type="valid">
												Looks good!
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group>
											{/*<PhoneInput
												type="phoneNumber"
												name="phoneNumber"
												placeholder="Enter phone number"
												value={user.phoneNumber}
												onChange={handleInputs}
											/>*/}
											{/*<PhoneInput2
												name="phoneNumber"
												country={"us"}
												value={user.phoneNumber}
												onChange={handleInputs}
											/>*/}
											<Form.Label>PhoneNumber</Form.Label>
											<Form.Control
												type="text"
												id="phoneNumber"
												name="phoneNumber"
												value={user.phoneNumber}
												onChange={handleInputs}
												placeholder="phoneNumber"
												required
											/>
											<Form.Control.Feedback type="invalid">
												Please provide a valid phoneNumber.
											</Form.Control.Feedback>
											<Form.Control.Feedback type="valid">
												Looks good!
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col md={3}>
										<Form.Group>
											<Form.Label>Height</Form.Label>
											<Form.Control
												type="text"
												id="height"
												name="height"
												value={user.height}
												onChange={handleInputs}
												placeholder="height"
												required
											/>
											<Form.Control.Feedback type="invalid">
												Please provide height.
											</Form.Control.Feedback>
											<Form.Control.Feedback type="valid">
												Looks good!
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
									<Col md={3}>
										<Form.Group>
											<Form.Label>Weight</Form.Label>
											<Form.Control
												type="text"
												id="weight"
												name="weight"
												value={user.weight}
												onChange={handleInputs}
												placeholder="weight"
												required
											/>
											<Form.Control.Feedback type="invalid">
												Please provide weight.
											</Form.Control.Feedback>
											<Form.Control.Feedback type="valid">
												Looks good!
											</Form.Control.Feedback>
										</Form.Group>
									</Col>
								</Row>
							</div>

							<Button variant="danger" type="submit">
								Save
							</Button>
						</Form>
					</Container>
				</Col>
			</Row>
		</div>
	);
};

export default Formdetails;
