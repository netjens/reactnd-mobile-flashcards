import React, {Component} from 'react'
import { View, Text} from 'react-native'
import { getDecks } from '../utils/api'

class DeckList extends Component {

    state = {
        decks: {
            React: {
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
            JavaScript: {
              title: 'JavaScript',
              questions: [
                {
                  question: 'What is a closure?',
                  answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
              ]
            }
          }
    }

    componentDidMount(){
       /* getDecks().then((decks)=> {
             this.setState(decks);
        });*/
        console.log("decks:" + JSON.stringify(this.state.decks));

    }

    render() {
        return (
            <View style={styles.deck}>
                {this.state.decks.map(deck =>(
                    <View>
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
