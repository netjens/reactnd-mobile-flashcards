import React, { Component } from 'react'
import FlipView from 'react-native-flip-view-next'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,
    StyleSheet,
    Easing
} from 'react-native'
import { purple, white } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import TextButton from './TextButton'

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            isCardFlipped: false
        };
    }


    flip = () => {
        this.setState({ isFlipped: !this.state.isFlipped });
    }

    render() {
        const deck = this.props.deck;
        const { currentIndex } = this.state;

        console.log("currentIndex = " + currentIndex);
        console.log("dekc: " + JSON.stringify(deck));
        return (
      
                

                <FlipView style={{ flex: 1 }}
                    front={this.renderFrontCard(deck, currentIndex)}
                    back={this.renderBackCard()}
                    isFlipped={this.state.isFlipped}
                    onFlipped={(val) => { console.log('Flipped: ' + val); }}
                    flipAxis="y"
                    flipEasing={Easing.out(Easing.ease)}
                    flipDuration={500}
                    perspective={1000} />





            
        )
    }
    renderFrontCard = (deck, currentIndex) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{currentIndex + 1}/{deck.questions.length}</Text>
                <Text>{deck.questions.length > 0 && deck.questions[currentIndex].question}</Text>
                <Text>blalalalal</Text>
                <TextButton style={{ padding: 10, fontSize: 30 }} onPress={this.flip}>Answer</TextButton>

            </View>
        );
    };

    renderBackCard = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextButton style={{ padding: 10, fontSize: 30 }} onPress={this.flip}>Queddstion</TextButton>

            </View>
        );
    };

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