import React, {Component} from 'react'
import { View, Text,StyleSheet,Platform} from 'react-native'
import { getDecks } from '../utils/api'
import { white } from '../utils/colors'

class DeckList extends Component {

    state = {
        decks: [
            {
              title: 'React',
              questions: [
                {
                  question: 'What is React?',
                  answer: 'A library for managing user interfaces'
                },
                {
                  question: 'Where do you make Ajax requests in React?',
                  answer: 'The componentDidMount lifecycle event'
                }
              ]
            },
            {
              title: 'JavaScript',
              questions: [
                {
                  question: 'What is a closure?',
                  answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
              ]
            }
          ]
    }

    componentDidMount(){
       /* getDecks().then((decks)=> {
             this.setState(decks);
        });*/
   

    }

    render() {
      console.log("state" + JSON.stringify(this.state.decks));
        return (
            <View style={{backgroundColor: '#f4f4f4'}}>
                {this.state.decks.map(deck =>(
                    <View key={deck.title} style={styles.deck}>
                        <Text>{deck.title}</Text>
                    </View>
                ))
            }
                
            </View>

        );
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

export default DeckList;
