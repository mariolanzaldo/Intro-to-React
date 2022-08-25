//old state = Seattle
//action: { type: "CHANGE_LOCATION", payload: "SLC" }

//new state + "SCL"

export default function location(state = "Seatle,WA", action) {
    switch (action.type) {
        case "CHANGE_LOCATION":
            return action.payload;
        default:
            return state;

    }
};