const intialState = {
    menu: []
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu:action.payload
            };
        default:
            return state;
    }
}

export default reducer;