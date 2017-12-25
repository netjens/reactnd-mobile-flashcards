import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform,TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/api'
import { white } from '../utils/colors'
import { connect } from 'react-redux'

class DeckList extends Component {



  componentDidMount() {
    /*getDecks().then((decks)=> {
         this.setState(decks);
    });*/


  }

  render() {
    console.log("decks state in DeckList:" + JSON.stringify(this.props.decks));
    return (
      <View style={{
        backgroundColor: '#f4f4f4', flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>


        {this.props.decks &&
          Object.keys(this.props.decks).map((deckKey) => {
            const deck = this.props.decks[deckKey];
            console.log("deck:" + JSON.stringify(deck));

            return (
              <View key={deckKey} style={styles.deck}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate(
                'DeckDetail',
                { deckKey: deckKey }
              )}>
               

                  <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{deck.title}</Text>
                  <Text style={{ textAlign: 'center' }}>{deck.questions.length} cards</Text>
              </TouchableOpacity>
                </View>
            )
          })}
      </View>
    )
  }
}



const styles = StyleSheet.create({
  deck: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  }
});


function mapStateToProps(state) {
  return {
    decks: state
  }
}

export default connect(
  mapStateToProps,
)(DeckList);

