import React, {Component} from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet} from 'react-native'


class DeckDetail extends Component{

    render(){
        const deck = this.props.deck;
        return (
            <View style={{
                backgroundColor: '#f4f4f4', flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start'
              }}>

                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{deck.title}</Text>
                <Text style={{ textAlign: 'center' }}>{deck.questions.length} cards</Text>

            </View>



        )


    }

}

function mapStateToProps (state, { navigation }) {
    const { deckKey } = navigation.state.params;
    const deck = state[deckKey];
    console.log("in stateToProps=" + JSON.stringify(deck));
    return (
      {deck: deck});
    
  }
  
  function mapDispatchToProps (dispatch, { navigation }) {
    const { deckKey } = navigation.state.params
  
    return {
      goBack: () => navigation.goBack(),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DeckDetail)