import ticketActions from './action';

const initState = {
	booking_code: "",
	guest_name: "",
	property_name: "",
	check_in_date: "",
	check_out_date: "",
	arrival_time: "",
	profile_picture: ""
}

export default function ticketReducer(state = initState, action) {
	console.log("here state", state)
	console.log("here2 action", action)
	switch(action.type) {
		case ticketActions.GET_BOOKING:
			return {...state, ticket: action.payload}
		case ticketActions.GUEST:
			return {...state, ...action.payload}
		default:
			return state
	}
}