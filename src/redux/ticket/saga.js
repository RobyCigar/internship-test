import { takeEvery, call, put, select, all, fork  } from 'redux-saga/effects'
import { GUEST, GET_BOOKING } from './action'
import { getBooking, updateArrival } from './api'

// Get the ticket code from the store
const getStateFromStore = state => {
	console.log("tick3")
	return state.Tickets.ticket;
}

function* submitLogin() { 
	console.log("tick2")
	const ticket = yield select(getStateFromStore)
	try {
		const data = yield call(getBooking, ticket)
		yield put({type: GUEST, payload: data})
	} catch (error) {
		console.log('ini err', error)
		yield put({type: GUEST, payload: "Ticket not found"})
	}
}

// function* sendUpdatedDataToStore() {
// 	const ticket = yield select(getStateFromStore)
// 	const data = yield call(updateArrival, ticket)
// 	yield put({type: GUEST, payload: data})
// }

function* watchTicketsAsync() {
	yield takeEvery( GET_BOOKING, submitLogin)
}

export default watchTicketsAsync;