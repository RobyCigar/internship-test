import { takeEvery, call, put, select, all, fork  } from 'redux-saga/effects'
import { GUEST, GET_BOOKING, UPDATE_BOOKING } from './action'
import { getBooking, updateArrival } from './api'

// Get the ticket code from the store
const getStateFromStore = state => {
	return {
		ticket: state.Tickets.ticket,
		arrival_time: state.Tickets.arrival_time,
	}
}

function* submitLogin() { 
	const { ticket } = yield select(getStateFromStore)
	try {
		const data = yield call(getBooking, ticket)
		yield put({type: GUEST, payload: data})
	} catch (error) {
		console.log('ini err', error)
		yield put({type: GUEST, payload: "Ticket not found"})
	}
}

function* sendUpdatedDataToStore() {
	const { ticket, arrival_time } = yield select(getStateFromStore)
	const data = yield call(updateArrival, ticket, arrival_time)
	console.log('get the data from update', data)
	yield put({type: GUEST, payload: data})
}

function* watchTicketsAsync() {
	yield takeEvery( GET_BOOKING, submitLogin)
	yield takeEvery( UPDATE_BOOKING, sendUpdatedDataToStore)
}

export default watchTicketsAsync;