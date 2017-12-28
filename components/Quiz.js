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
import Button from './Button'


class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            correctAnswers: 0,
            isFlipped: false

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
            currentIndex < deck.questions.length ?
                <FlipView style={{ flex: 1 }}
                    front={this.renderFrontCard(deck, currentIndex)}
                    back={this.renderBackCard(deck, currentIndex)}
                    isFlipped={this.state.isFlipped}
                    onFlipped={(val) => { console.log('Flipped: ' + val); }}
                    flipAxis="y"
                    flipEasing={Easing.out(Easing.ease)}
                    flipDuration={500}
                    perspective={1000} />
                : <View><Text>Correct Answers from {deck.questions.length} Questions: {this.state.correctAnswers}</Text></View>

        )
    }
    renderFrontCard = (deck, currentIndex) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>{currentIndex + 1}/{deck.questions.length}</Text>
                <Text>{deck.questions.length > 0 && deck.questions[currentIndex].question}</Text>
                <TextButton style={{ padding: 10, fontSize: 30 }} onPress={this.flip}>Answer</TextButton>

            </View>
        );
    };

    renderBackCard = (deck, currentIndex) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>{currentIndex + 1}/{deck.questions.length}</Text>
                <Text>{deck.questions[currentIndex].answer}</Text>
                <TextButton style={{ padding: 10, fontSize: 30 }} onPress={this.flip}>Question</TextButton>
                <Button style={{ backgroundColor: 'green' }} onPress={this.correctAnswer}>Correct</Button>
                <Button style={{ backgroundColor: 'red' }} onPress={this.incorrectAnswer}>Incorrect</Button>

            </View>
        );
    };

    correctAnswer = () => {
        const newIndex = this.state.currentIndex + 1;
        const newCorrectAnswers = this.state.correctAnswers + 1;
        this.setState(
            {
                currentIndex: newIndex,
                correctAnswers: newCorrectAnswers,
                isFlipped: false
            });
    }

    incorrectAnswer = () => {
        const newIndex = this.state.currentIndex + 1;
        this.setState(
            {
                currentIndex: newIndex,
                isFlipped: false
            });
    }


}

const styles = StyleSheet.create({

    button: {

        backgroundColor: purple,
        padding: 10,
        marginBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 5,
    }
}
);

function mapStateToProps(state, { navigation }) {
    const { deckKey } = navigation.state.params;
    const deck = state[deckKey];

    return (
        { deck: deck });

}

export default connect(
    mapStateToProps
)(Quiz)