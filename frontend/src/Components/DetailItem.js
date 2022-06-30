import React from 'react'
import { useDispatch } from "react-redux";
import { deleteDetail } from '../features/details/detailSlice';

function DetailItem ({ detail }) {
 const dispatch = useDispatch()

 return (
		<div className="goal">
			<div>{new Date(detail.createdAt).toLocaleString("en-US")}</div>
			<h6>{detail.firstName}</h6>
			<h6>{detail.lastName}</h6>
			<h6>{detail.middlename}</h6>
			<h6>{detail.address}</h6>
			<h6>{detail.country}</h6>
			<h6>{detail.city}</h6>
			<h6>{detail.zipcode}</h6>
			<h6>{detail.email}</h6>
			<h6>{detail.phoneNumber}</h6>
			<h6>{detail.height}</h6>
			<h6>{detail.weight}</h6>
			<button onClick={() => dispatch(deleteDetail(detail._id))} className="close">
				X
			</button>
		</div>
 );
}

export default DetailItem