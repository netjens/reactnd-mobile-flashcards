import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,
    StyleSheet
} from 'react-native'
import {purple, white} from '../utils/colors'
import { saveDeckTitle} from '../utils/api'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import SubmitButton from './SubmitButton'
import {saveCardToDeck} from '../utils/api'

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        };
    }

    submit = () => {
  
        const deckKey = this.props.navigation.state.params.deckKey;
        const card = {question: this.state.question, answer: this.state.answer}
        this.props.dispatch(addCard(deckKey, card));
        saveCardToDeck(deckKey,card);
    
         this.setState(() => ({ question: '', answer: '' }))
    }

    render(){
        
        return (
            <View style={{
                padding: 10
            }}>
                <Text>Question</Text>
                <TextInput
                     value={this.state.question}
                    onChangeText={(question) => this.setState({question: question})}
                    style={{
                    height: 40
               
                }}
                    placeholder="Enter your Question"/>
                       <Text>Answer</Text>
                <TextInput
                     value={this.state.answer}
                    onChangeText={(answer) => this.setState({answer: answer})}
                    style={{
                    height: 40
               
                }}
                    placeholder="Enter your Answer"/>
                <SubmitButton onPress={this.submit}/>
            </View>
        )

    }


}




function mapStateToProps (state) {
    
  
    return {
        state
    }
  }
  
  export default connect(
    mapStateToProps
  )(AddCard)