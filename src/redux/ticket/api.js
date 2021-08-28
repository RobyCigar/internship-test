import axios from "axios";
const URL = "https://bv-online-assessment.herokuapp.com/api/bookings"

// Fetch the booking ticket
export const getBooking = async (ticket) => {
	return await axios({
		method: "get",
		url: `${URL}/${ticket}`,
	})
		.then(res => {
			if(!res.data) {
				return {error : "Booking code not found"}
			}
			return {...res.data};
		})
		.catch(error => {
			console.log(error)
			return "Error! cannot fetch the data from the server"
		});
};

// Update arrival time
export const updateArrival = async (ticket, time) => {
	return await axios({
		method: "put",
		url: `${URL}/${ticket}/update-eta`,
		data: {
			arrival_time: time
		}
	})
		.then(res => {
			if(!res.data) {
				return {error : "Booking code not found"}
			}
			return {...res.data};
		})
		.catch(error => {
			return "Error! cannot update arrival time"
		})
}