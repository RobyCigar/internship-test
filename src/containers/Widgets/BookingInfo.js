import React, { useState } from 'react';
import { TimePicker, Avatar, Button, message, Card } from 'antd';
import styles from './index';

export default function BookingInfo({ ticketInfo, updateBooking }) {
	const [ timeArrival, setTimeArrival ] = useState("")
	const { 
		profile_picture, 
		property_name, 
		check_in_date, 
		check_out_date, 
		arrival_time,
		ticket
	} = ticketInfo

	// Parse the timeString format from hh:mm:ss to hh:mm
	const onChange = (time, timeString) => {
		time = timeString.split(':')
		time.pop()
		time = time.join(':')
		setTimeArrival(time)
	}

	const update = (e) => {
		e.preventDefault()
		updateBooking(timeArrival)
		message.success('The arrival has successfully updated');
	};

	console.log(timeArrival)

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
					<TimePicker onChange={onChange} />
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