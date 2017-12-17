import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'mobileFlashcards:deck';

export function saveDeckTitle(title){
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY,JSON.stringify({
        deckTitle: title, questions : []
    }))
}

export function getDecks(){
    return AsyncStorage.getItem(DECK_STORAGE_KEY);
}