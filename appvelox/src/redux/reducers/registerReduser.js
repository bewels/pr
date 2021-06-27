const REG_CHANGE = 'REG_CHANGE';


const initialState = {
    email: '',
    number: '',
    password: '',
    surname: '',
    name: '',
    patronymic: '',
    sex: '',
    dateBrih: '',
    mainAddress: '',
    registrationAddress: '',
    memberName: '',
    memberPatronymic: '',
    memberPhone: '',
    memberSurname: '',
};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REG_CHANGE:
            const data = action.payload;
            delete data['undefined'];
            delete data[''];
            delete data['confirm'];
            return {...state, ...data}
        default: 
            return state
    }
}