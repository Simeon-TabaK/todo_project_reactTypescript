import React from 'react'
import { 
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from 'react-native'
import { Card } from 'react-native-paper'
import PropTypes from 'prop-types'

export default class HomeElement extends React.Component {
    render () {
        return (
            <TouchableOpacity
                style = {styles.mainContainer}
                onPress = {() => this.props.onClick (this.props.itemId) }
            >
                <Card>
                    <View style = { styles.container }>
                        <View style ={ styles.imgContainer }>
                            <Image 
                                source = {this.props.sourceIcon}
                                style = {styles.element}
                            />
                        </View>
                        <Text style = { styles.textDescription }>{this.props.description}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        )
    }
}

HomeElement.propTypes = {
    itemId : PropTypes.number.isRequired,
    sourceIcon : PropTypes.number.isRequired,
    description : PropTypes.string.isRequired,
    onClick : PropTypes.func
}

const styles = StyleSheet.create({
    element : {
        flex : 1,
        height : 60,
        width : 60,
        margin : 10,
    },
    container : {
        margin : 10,
        padding : 10,
        flexDirection : 'row'
    },
    mainContainer : {
        flex : 1,
        marginVertical : 5,
        marginHorizontal : 10
    },
    imgContainer : {
        // padding : 5,
        borderRadius : 40,
        borderColor : 'red',
        borderWidth : 2,
    },
    textDescription : {
        fontSize : 18,
        marginHorizontal : 10,
        alignSelf : "center"
    }
})