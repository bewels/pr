const DOCTORS_SUCCES = 'DOCTORS_SUCCES';

const initialState = {
    doctors: []
};

export const doctorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOCTORS_SUCCES:
            return {...state, loading: false, doctors: [...action.payload]}
        default: 
            return state
    }
}