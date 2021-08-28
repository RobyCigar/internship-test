export const GET_BOOKING = "GET_BOOKING"
export const UPDATE_BOOKING = "UPDATE_BOOKING"
export const GUEST = "GUEST"

const ticketActions = {
	getBooking: ticket => {
		return (dispatch, getState) => {
			console.log('tick', ticket)
			dispatch({
				type: GET_BOOKING,
				payload: ticket
			})
		}
	},

	updateBooking: (time) => {
		return (dispatch, getState) => {
			dispatch({
				type: UPDATE_BOOKING,
				payload: time
			});
		};
	},
}

export default ticketActions;