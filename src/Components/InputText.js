import React from 'react';
import {
    TextInput,
    Image,
    View,
    StyleSheet,
    Dimensions
} from 'react-native'
import PropTypes from 'prop-types'

export default class InputText extends React.Component {
    render () {
        return (
            <View style = { styles.container }>
                <Image 
                    source = {this.props.source}
                    style = { styles.innerImg}
                />
                <TextInput 
                    style = { styles.input }
                    onChangeText = { (text) => this.props.onChangeText (text) }
                    placeholder = { this.props.placeholder }
                    autoCorrect = { this.props.autoCorrect }
                    secureTextEntry = { this.props.secureTextEntry }
                    autoCapitalize = { this.props.autoCapitalize }
                    placeholderTextColor = {'#aabb01'}
                    returnKeyType = { this.props.returnKeyType }
                    underlineColorAndroid = {'transparent'}
                />
            </View>
        )
    }
}

InputText.propTypes = {
    source : PropTypes.number.isRequired,
    placeholder : PropTypes.string.isRequired,
    autoCorrect : PropTypes.bool,
    autoCapitalize : PropTypes.string,
    secureTextEntry : PropTypes.bool,
    returnKeyType : PropTypes.string,
    onChangeText : PropTypes.func
}

const WIDTH_DEVICE = Dimensions.get('window').width

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'space-between'
    },
    input : {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: WIDTH_DEVICE - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#000000',
    },
    innerImg : {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 30,
        top: 9,
    }
})
