const USER_SUCCES = 'USER_SUCCES';
const USER_EXIT = 'USER_EXIT';

const initialState = {
    auth: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SUCCES:
            return {auth: true}
        case USER_EXIT:
            return {auth: false}
        default: 
            return state
    }
}