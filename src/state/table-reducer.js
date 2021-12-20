
const defaultState = {
    id: 0,
    Fullname: 'Name Surname',
    Days: [
        {
            Date: "2021-01-01",
            End: "20-00",
            Start: "12-00",
        },
        {
            Date: "2021-01-02",
            End: "19-00",
            Start: "13-00",
        },
    ]
}

const tableReducer = (state = defaultState, action) => {
    switch (action.type) {
        

        default: 
            return state
    }
}