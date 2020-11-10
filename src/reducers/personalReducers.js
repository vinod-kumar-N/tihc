import { personalActionTypes } from '@Actions/personalActions';
const initialState = {
    countries: [],
    states: []
};
const PersonalReducer = (state = initialState, action) => {
    switch (action.type) {
        case personalActionTypes.GET_COUNTRY_LIST:
            return {
                ...state
            }
        case personalActionTypes.SET_COUNTRY_LIST:
            const { data: countries } = action;
            return {
                ...state,
                countries
            }
        case personalActionTypes.GET_STATE_LIST:
            const { data: states } = action;
            return {
                ...state,
                states: states
            }

        default:
            {
                return state;
            }
    }
};

export default PersonalReducer;