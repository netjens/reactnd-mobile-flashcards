import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { white,purple } from '../utils/colors'



class DeckDetail extends Component {



    addCard = () => {


    }


    render() {
        const deck = this.props.deck;
        return (
            <View style={{
                backgroundColor: '#f4f4f4', flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }}>

                <Text style={styles.title}>{deck.title}</Text>
                <Text style={styles.subTitle}>{deck.questions.length} cards</Text>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}> 
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.addCard}>
                        <Text style={styles.buttonText}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.startQuiz}>
                        <Text style={styles.buttonText}>Start Quiz</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    title: {
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        textAlign: 'center',
        fontSize: 50
    },
    subTitle: {
        fontSize: 30,
        color: 'gray',
        textAlign: 'center'
    },
    button: {

        backgroundColor: purple,
        padding: 10,
        marginBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 5,
    },  
    buttonText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
      }
}
);


function mapStateToProps(state, { navigation }) {
    const { deckKey } = navigation.state.params;
    const deck = state[deckKey];
    console.log("in stateToProps=" + JSON.stringify(deck));
    return (
        { deck: deck });

}

function mapDispatchToProps(dispatch, { navigation }) {
    const { deckKey } = navigation.state.params

    return {
        goBack: () => navigation.goBack(),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DeckDetail)