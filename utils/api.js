import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'mobileFlashcards:deck';

export function saveDeckTitle(newTitle) {
    const newDeck = { title: newTitle, questions: [] }
    AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({ [newTitle]: newDeck }));

}

export function getDecks() {
    return AsyncStorage.getItem(DECK_STORAGE_KEY).then((result) => JSON.parse(result));
}

export function getDeck(title) {
    AsyncStorage.getItem(DECK_STORAGE_KEY).then(result => {

        const data = JSON.parse(result);
        const deck = data[title];

        return deck;
    });

}

export function saveCardToDeck(title, card) {
    AsyncStorage.getItem(DECK_STORAGE_KEY).then(result => {

        const data = JSON.parse(result);
        const deck = data[title];
        deck.questions = [...deck.questions,card];
        return deck;
    }).then(deck => AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({ [title]: deck })));

}