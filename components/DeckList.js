import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/api'
import { white, grayShadow, lightGray } from '../utils/colors'
import { connect } from 'react-redux'
import { addDecks } from '../actions'

class DeckList extends Component {



  componentDidMount() {
    getDecks().then((decks) => {
      this.props.dispatch(addDecks(decks));

    });
  }

  render() {
    return (
      <View style={{
        backgroundColor: lightGray, flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}>


        {this.props.decks &&
          Object.keys(this.props.decks).map((deckKey) => {
            const deck = this.props.decks[deckKey];

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
    shadowColor: grayShadow,
    shadowOffset: {
      width: 0,
      height: 3
    },
  }
});


const mapStateToProps = decks => ({ decks });


export default connect(
  mapStateToProps,
)(DeckList);

