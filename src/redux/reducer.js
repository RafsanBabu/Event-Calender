

   const INITIAL_STATE = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];


const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "ADD_EVENT" :
            state = [...state,action.payload]
            return state;

         default: return state;

    }

};

export default reducer;