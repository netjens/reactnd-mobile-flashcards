import {ADD_DECK,ADD_CARD, ADD_DECKS} from '../actions'

function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECKS:
            return {
                 ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deck.title]: {title : action.deck.title,questions : action.deck.questions}
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