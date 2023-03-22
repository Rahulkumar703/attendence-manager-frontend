export default function globalReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_HAMBURGER':
            return { ...state, isHamburgerActive: !state.isHamburgerActive };
        case 'OPEN_HAMBURGER':
            return { ...state, isHamburgerActive: true };
        case 'CLOSE_HAMBURGER':
            return { ...state, isHamburgerActive: false };
        default:
            return state;
    }
}
