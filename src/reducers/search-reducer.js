export default function(state={}, action) {
	switch(action.type) {
		case 'URL_SUBMIT':
			return action.payload;
		default:
			return state;
	}
}