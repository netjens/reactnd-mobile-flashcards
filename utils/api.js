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
        const dataDeck = data[title];

        return dataDeck;
    });

}

export function saveCardToDeck(title, card) {
    AsyncStorage.getItem(DECK_STORAGE_KEY).then(result => {

        const data = JSON.parse(result);
        const dataDeck = data[title];
        dataDeck.questions = [...dataDeck.questions,card];
        return dataDeck;
    }).then(deck => AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({ [title]: deck })));

}