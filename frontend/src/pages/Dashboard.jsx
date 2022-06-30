import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Formdetails from "../Components/Formdetails";
import { Spinner } from "react-bootstrap";
import { getDetails, reset } from "../features/details/detailSlice";
import DetailItem from "../Components/DetailItem";

const Dashboard = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const { details, isLoading, isError, message } = useSelector(
		(state) => state.detail
	);
	console.log(details)
	useEffect(() => {

		if (!user) {
			navigate("/login");
		}
		dispatch(getDetails());

		return () => {
			dispatch(reset());
		};
	}, [user, navigate, dispatch, isError, message]);

	if (isLoading) {
		return <Spinner/>
	}

	return (
		<>
			<section className="heading">
				<h1>Welcome {user && user.username}</h1>
				<p>Form details</p>
			</section>
			<Formdetails />
			
			<section className="content">
				{details.length > 0 ? (
					<div className="goals">
						{details.map((detail) => (
							<DetailItem key={detail._id} detail={detail} />
						))}
					</div>
				) : (
					<h3>You have not set any details</h3>
				)}
			</section>
		</>
	);
};

export default Dashboard;
