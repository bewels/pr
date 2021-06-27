const RECORDS_SUCCES = 'RECORDS_SUCCES';

const initialState = {
    records: [],
    events: [],
};

export const recordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECORDS_SUCCES:
            const allDate = {}
            const events = action.payload.map((item, i) => {
                if(item.date in allDate) {
                    events[allDate[item.date]].title += 1
                    return
                }
                allDate[item.date] = i
                return {date: item.date, title: 1}
            })
            return {records: [...action.payload]}
        default: 
            return state
    }
}