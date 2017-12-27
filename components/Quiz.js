import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,
    StyleSheet
} from 'react-native'
import { purple, white } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }


    render() {
        const deck = this.props.deck;
        const {currentIndex} = this.state;

        console.log("currentIndex = " + currentIndex);
        console.log("dekc: " + deck);
        return (
            <View style={{
                padding: 10
            }}>
                <Text>{currentIndex+1}/{deck.questions.length}</Text>

                <Text>{deck.questions.length > 0 && deck.questions[currentIndex].question}</Text>
            </View>
        )
    }

}

function mapStateToProps(state, { navigation }) {
    const { deckKey } = navigation.state.params;
    const deck = state[deckKey];

    return (
        { deck: deck });

}

export default connect(
    mapStateToProps
)(Quiz)