const ticketActions = {
	GET_BOOKING: "GET_BOOKING",
	BOOKINGS: "BOOKINGS",
	GUEST: "GUEST",

	getBooking: ticket => {
		return (dispatch, getState) => {
			dispatch({
				type: ticketActions.GET_BOOKING,
				payload: ticket
			})
		}
	},

	updateBooking: ticket => {
		return (dispatch, getState) => {
			console.log("dispatch", dispatch)
			console.log("getstate", getState)
			dispatch({
				type: ticketActions.USER,
				payload: ticket
			});
		};
	},
}

export default ticketActions;