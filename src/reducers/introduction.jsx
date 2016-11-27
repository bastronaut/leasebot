import {GET_INTRODUCTION, GET_INTRODUCTION_PENDING,
	GET_INTRODUCTION_FULFILLED,	GET_INTRODUCTION_REJECTED } from '../actions';


export const introduction_reducer = (state = {}, action) => {
	switch (action.type) {
		case GET_INTRODUCTION_PENDING:
			return {
				...state,
				inProgress: true,
				error: false
			};
		case GET_INTRODUCTION_FULFILLED:
			return {
				...state,
				introductiontext: action.payload.introductiontext,
				userid: action.payload.userid,
				inProgress: false
			};
		case GET_INTRODUCTION_REJECTED:
			return {
				...state,
				inProgress: false,
				error: action.error
			};
		default:
			return state
	}
}
