import { GET_BOOKING, UPDATE_BOOKING, GUEST, } from './action';

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
	switch(action.type) {
		case GET_BOOKING:
			return {...state, ticket: action.payload}
		case UPDATE_BOOKING:
			return {...state, arrival_time: action.payload}
		case GUEST:
			return {...state, ...action.payload}
		default:
			return state
	}
}