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
import { addDeck } from '../actions'
import { saveDeckTitle} from '../utils/api'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import SubmitButton from './SubmitButton'

class AddDeck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deckTitle: ''
        };
    }

    submit = () => {
  
        const newDeckTitle = this.state.deckTitle;
        this.props.dispatch(addDeck(newDeckTitle))
         this.toHome()
         saveDeckTitle(newDeckTitle)
         this.setState(() => ({ deckTitle: '' }))
    }

    toHome = () => {
        this.props.navigation.dispatch(NavigationActions.back({key: 'AddDeck'}))
      }

    render() {
        return (
            <View style={{
                padding: 10
            }}>
                <Text>What is the title of your new Deck?</Text>
                <TextInput
                     value={this.state.deckTitle}
                    onChangeText={(deckTitle) => this.setState({deckTitle})}
                    style={{
                    height: 40
               
                }}
                    placeholder="Deck Title"/>
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
  )(AddDeck)