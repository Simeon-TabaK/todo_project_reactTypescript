import React, { useState } from 'react';
import { 
    View, 
    Text ,
    StyleSheet,
    Image
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import elements from '../helpers/homeElements'
import HomeElement from '../Components/HomeElement'
import { mainColor } from '../constants/colorFile';
import { questionIcon } from '../constants/imageFiles'
export default class Blank extends React.Component {
    constructor (props) {
        super(props)
    }

    onElementClicked = (itemId) => {
        console.log(itemId)
        this.props.navigation.navigate('Blank', {itemId})
    }

    render () {
        return (
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Text style = {styles.title}>Accueil</Text>
                    <Image 
                        source = { questionIcon }
                        style = { styles.img }
                    />
                </View>
                <Text>

                </Text>
                <FlatList
                    style = {styles.flatStyle}
                    data = {elements}
                    keyExtractor = {(item) => {item.id.toString()}}
                    renderItem = {({item}) =>
                        <View style = {styles.flat}>
                            <HomeElement 
                                itemId = {item.id}
                                sourceIcon = {item.image}
                                description = {item.description}
                                onClick = {this.onElementClicked}
                            />
                        </View>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        marginTop : 20,
        backgroundColor : mainColor
    },
    header : {
        flexDirection : 'row',
        padding : 15,
        backgroundColor : 'white',
        justifyContent : 'flex-end'
    },
    flat : {
        flex : 1
    },
    img : {
        height : 50,
        width : 50
    },
    title : {
        fontSize : 24,
        fontWeight : "bold",
        alignSelf : "center",
        right : 20
    },
    flatStyle : {
        marginBottom : 110
    }
})