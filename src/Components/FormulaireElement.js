import React from 'react';
import {
    TextInput,
    Image,
    View,
    StyleSheet,
    Dimensions
} from 'react-native'
import PropTypes from 'prop-types'
import { nextIcon } from '../constants/imageFiles'

export default class FormulaireElement extends React.Component {
    render () {
        return (
            <View style = { styles.container }>
                <Image 
                    source = { nextIcon }
                    style = { styles.innerImg}
                />
                <TextInput 
                    style = { styles.input }
                    onChangeText = { (text) => this.props.onChangeText (text) }
                    placeholder = { this.props.placeholder }
                    value = { this.props.value }
                    autoCorrect = { this.props.autoCorrect }
                    secureTextEntry = { this.props.secureTextEntry }
                    autoCapitalize = { this.props.autoCapitalize }
                    placeholderTextColor = {'#aabb01'}
                    returnKeyType = { this.props.returnKeyType }
                    underlineColorAndroid = {'#000000'}
                />
            </View>
        )
    }
}

FormulaireElement.propTypes = {
    placeholder : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    autoCorrect : PropTypes.bool,
    autoCapitalize : PropTypes.string,
    secureTextEntry : PropTypes.bool,
    returnKeyType : PropTypes.string,
    onChangeText : PropTypes.func.isRequired
}

const WIDTH_DEVICE = Dimensions.get('window').width

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'space-between'
    },
    input : {
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        width: WIDTH_DEVICE - 40,
        height: 50,
        marginHorizontal: 10,
        paddingLeft: 20,
        // borderRadius: 20,
        // color: '#000000',
    },
    innerImg : {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        right: 0,
        top: 9,
    }
})