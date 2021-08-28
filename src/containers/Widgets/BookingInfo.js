import React from 'react';
import { TimePicker, Avatar, Button, message, Card } from 'antd';
import styles from './index';

const fakedata = {
  booking_code: "HIJ12345",
  guest_name: "Violet Well",
  property_name: "Canggu Villa",
  check_in_date: "26 April 2021",
  check_out_date: "30 April 2021",
  arrival_time: "",
  profile_picture: "https://picsum.photos/200/300?random=1"
}

export default function BookingInfo({ ticketInfo, updateBooking }) {
	const { 
		profile_picture, 
		property_name, 
		check_in_date, 
		check_out_date, 
		arrival_time 
	} = ticketInfo

	const onChange = (time, timeString) => {
		return
	}

	const update = () => {
		message.loading("Loading...", 0.7)
		setTimeout(() => {
			message.success("Arrival time updated")
		}, 1000)
	};

	return (
	<div style={{ margin: 'auto', maxWidth: 600 }}>	
		<Card title={"From: Bukit Vista"}>
			<p>Thank you for booking with Bukit Vista,<br/>Here are the details of your current booking :</p>
			<br/>
			<div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20}}>
				<img 
					src={profile_picture} 
					alt={property_name}
				/>
			</div>
			<p>Property name: {" "} {property_name}</p>
			<p>Check in date: {" "} {check_in_date}</p>
			<p>Check out date: {" "} {check_out_date}</p>
			<p>Arrival time: {""} 
			{arrival_time ? 
				arrival_time
				: (
				<>
					<TimePicker use12Hours format="h:mm a" onChange={onChange} />
					<p style={{color: 'red', fontSize: 13}}>*Please set your arrival time</p>
				</>
				)
			}
			</p>
			<br/>
			<Button type="primary" onClick={update}>
			Save
			</Button>
		</Card>
	</div>
	)
}