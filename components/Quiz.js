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

class Quiz extends Component {


}

function mapStateToProps (state) {
    
  
    return {
        state
    }
  }
  
  export default connect(
    mapStateToProps
  )(Quiz)