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
  )(AddDeck)