import { takeEvery, call, put, select, all, fork  } from 'redux-saga/effects'
import ticketActions from './action'
import axios from "axios";

const { GUEST, GET_BOOKING } = ticketActions;
const URL = "https://bv-online-assessment.herokuapp.com/api/bookings"

const getBooking = async (ticket) => {
	return await axios({
		method: "get",
		url: `${URL}/${ticket}`,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "*"
		}
	})
		.then((res) => {
			console.log("ini response", res);
			return "HALOO"
		})
		.catch(function (error) {
			if (error.response) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				throw  error.response.data.error;
			} else if (error.request) {
				console.log(error.request);
			} else {
				console.log("Error", error.message);
			}
			console.log(error.config);
		});
};

const getStateFromStore = state => {
	return state.Tickets.ticket;
}


function* submitLogin() {
	const ticket = yield select(getStateFromStore)
	console.log("Ini ticket", ticket)
	try {
		const data = yield call(getBooking, ticket)
		yield put({type: GUEST, payload: data})
	} catch (error) {
		console.log('ini err', error)
		yield put({type: GUEST, payload: "Ticket not found"})
	}
}

function* watchTicketsAsync() {
	yield takeEvery( GET_BOOKING, submitLogin)
}

export default watchTicketsAsync;