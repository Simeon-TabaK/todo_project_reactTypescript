import React from 'react';
import { 
    StyleSheet, 
    View,
    Image,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import {
    updateIcon
} from '../constants/imageFiles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { separatorColor } from '../constants/colorFile';
// import { black } from 'react-native-paper/lib/typescript/src/styles/colors';

export default class UpdateFormElement extends React.Component {
    handleSuppresseion = () => {
        /**
         * As an enqueteur, i can delete only forms i created
         * Ask for admin permission to supress formulaire
         *
         */
    }
    render () {
        return (
            <View style={styles.container}>
                <View style = {styles.mainElmt}>
                    <Image 
                        source = {updateIcon}
                        style = { styles.img }
                    />
                    <Text style= {styles.title}>{this.props.title}</Text>
                </View>
                <View style = {styles.btns}>
                    <TouchableOpacity
                        style = {styles.btn}
                        // onPress = {}
                    ><Text>Modifier</Text></TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.btn}
                        onPress = {this.handleSuppresseion}
                    ><Text>Supprimer</Text></TouchableOpacity>
                </View>
                <View style={styles.separator}></View>
            </View>
        )
    }
}

UpdateFormElement.propTypes = {
    title : PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    title : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    img : {
        width : 30,
        height : 30,
        borderRadius : 15,
        borderColor : 'rgba(250,0,0,0.9)',
        borderWidth : 5,
        margin : 10
    },
    mainElmt : {
        flex : 1,
        flexDirection : 'row',
        width : '80%',
    },
    container : {
        paddingVertical : 10,
        marginHorizontal : 5,
        //for Android
        // elevation : 5,
        // for iOS 
        // shadowOffset : {width : 10, height : 10},
        // shadowOpacity : 1,
        // textShadowColor : 'rgb(0,0,0)'
    },
    btn : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        margin : 10
    },
    btns : {
        flexDirection : 'row',
        justifyContent : 'center'
    },
    separator : {
        height : 2,
        width : '80%',
        alignSelf : "center",
        backgroundColor : separatorColor
    }
})
