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
        this.props.dispatch(addCard(deckKey, {question: this.state.question, answer: this.state.answer}))
    
    
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
                <SubmitBtn onPress={this.submit}/>
            </View>
        )

    }


}

function SubmitBtn({onPress}) {
    return (
        <TouchableOpacity
            style={styles.AndroidSubmitBtn}
            onPress={onPress}>
            <Text style={styles.submitBtnText}>SUBMIT</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    AndroidSubmitBtn: {
        backgroundColor: purple,
        marginTop: 30,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center'
        
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    }
})

function mapStateToProps (state) {
    
  
    return {
        state
    }
  }
  
  export default connect(
    mapStateToProps
  )(AddCard)