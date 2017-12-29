export const ADD_DECK = 'ADD_DECK'
export const ADD_DECKS = 'ADD_DECKS'
export const ADD_CARD = 'ADD_CARD'

export function addDeck(deck){
    return {
        type: ADD_DECK,
        deck: deck
    }
}
/**
 * param decks has to be an object like:
 *
  {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
 * 
 */

export function addDecks(decks){
 return {
    type:ADD_DECKS,
    decks: decks
 }
}

export function addCard(deckKey,card){
    return {
        type: ADD_CARD,
        deckKey: deckKey,
        card: card
    }
}