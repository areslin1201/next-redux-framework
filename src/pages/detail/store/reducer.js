// import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	title: '',
	schema: {
		author: 'Somebody'
	}
});

export default (state = defaultState, action) => {
	switch(action.type) {

		default:
			return state;
	}	
}