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
import { Entypo } from '@expo/vector-icons'
import { clearLocalNotification,setLocalNotification } from '../utils/notification'


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
        const percentage = this.getPercentageOfCorrectAnswers(deck.questions.length);

        const emojiName = (percentage >= 80) ? 'emoji-happy' :
            (percentage >= 50) ? 'emoji-neutral' : 'emoji-sad';
        if (percentage == 100) {
            clearLocalNotification()
                .then(setLocalNotification)
        }
        return (
            currentIndex < deck.questions.length ?
                <FlipView style={{ flex: 1 }}
                    front={this.renderFrontCard(deck, currentIndex)}
                    back={this.renderBackCard(deck, currentIndex)}
                    isFlipped={this.state.isFlipped}
                    flipAxis="y"
                    flipEasing={Easing.out(Easing.ease)}
                    flipDuration={500}
                    perspective={1000} />
                : <View style={styles.center}>
                    <Entypo
                        name={emojiName}
                        size={50}
                        color={purple}
                    />
                    <Text style={{ fontSize: 30 }}>Your score: {percentage}%</Text>
                    <Button style={{ backgroundColor: purple, marginTop: 30 }} onPress={this.restartQuiz}>Restart Quiz</Button>
                </View>
        )
    }

    restartQuiz = () => {
        this.setState({

            currentIndex: 0,
            correctAnswers: 0,
            isFlipped: false
        });
    }

    getPercentageOfCorrectAnswers = (numberOfCards) => {
        const percentage = this.state.correctAnswers / numberOfCards;
        return (percentage * 100).toFixed(0);
    }

    renderFrontCard = (deck, currentIndex) => {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>

                <Text style={{ fontSize: 20 }}>Question {currentIndex + 1} of {deck.questions.length}</Text>
                <Text style={styles.questionText}>{deck.questions.length > 0 && deck.questions[currentIndex].question}</Text>
                <TextButton style={{ fontSize: 30 }} onPress={this.flip}>Answer</TextButton>

            </View>
        );
    };

    renderBackCard = (deck, currentIndex) => {
        return (
            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>

                <Text style={{ fontSize: 20 }}>Question {currentIndex + 1} of {deck.questions.length}</Text>
                <Text style={styles.questionText}>{deck.questions[currentIndex].answer}</Text>
                <TextButton style={{ padding: 10, fontSize: 30 }} onPress={this.flip}>Question</TextButton>
                <View>
                    <Button style={{ backgroundColor: 'green' }} onPress={this.correctAnswer}>Correct</Button>
                    <Button style={{ backgroundColor: 'red' }} onPress={this.incorrectAnswer}>Incorrect</Button>
                </View>

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
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    questionText: {
        fontSize: 30, fontStyle: 'italic', padding: 10
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