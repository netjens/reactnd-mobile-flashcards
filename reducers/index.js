import {ADD_DECK,ADD_CARD} from '../actions'

function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...state,
                [action.title]: {title : action.title,questions : []}
            }
        case ADD_CARD: 
            const deckKey = action.deckKey;
            return {
                ...state,[deckKey]:{title: deckKey,questions: [...state[deckKey].questions,action.card]}
            }

        default:
            return state;
    }

}

export default decks;