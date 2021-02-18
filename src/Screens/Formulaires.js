import React, {useState} from 'react'
import {
    StyleSheet, 
    View,
    Image,
    Text
} from 'react-native'

import FormulaireElement from '../Components/FormulaireElement'
import elements from '../helpers/formulaireElement'
import { mainColor } from '../constants/colorFile'
import {
    searchIcon,
    menuIcon
} from '../constants/imageFiles'

export default function Formulaires () {
    const [typeViolation, setTypeViolation] = useState('')
    const [victimeIdentification, setVictimeId] = useState('')
    const [temoinIdentification, setTemoinId] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [actions, setActions] = useState('')
    const [victimeSituation, setVictimeSit] = useState('')
    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Image 
                    source = {searchIcon}
                    style = {styles.subImg}
                />
                <Text style = {{ width : 35}}>
                    { 
                        // just empty space
                    }
                </Text>
                <Image 
                    source = {menuIcon}
                    style = {styles.subImg}
                />
            </View>
            <View style = {styles.inputs}>
                <FormulaireElement 
                    placeholder = {elements[0].placeholder}
                    value = {typeViolation}
                    onChangeText = {setTypeViolation}
                />
                <FormulaireElement 
                    placeholder = {elements[1].placeholder}
                    value = { victimeIdentification }
                    onChangeText = {setVictimeId}
                />
                <FormulaireElement 
                    placeholder = {elements[2].placeholder}
                    value = {temoinIdentification}
                    onChangeText = {setTemoinId}
                />
                <FormulaireElement 
                    placeholder = {elements[3].placeholder}
                    value = {author}
                    onChangeText = {setAuthor}
                />
                <FormulaireElement 
                    placeholder = {elements[4].placeholder}
                    value = {description}
                    onChangeText = {setDescription}
                />
                <FormulaireElement 
                    placeholder = {elements[5].placeholder}
                    value = {actions}
                    onChangeText = {setActions}
                />
                <FormulaireElement 
                    placeholder = {elements[6].placeholder}
                    value = {victimeSituation}
                    onChangeText = {setVictimeSit}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : mainColor
    }, 
    subImg : {
        height : 25,
        width : 25,

    }, 
    inputs : {
        flex : 1,
        marginHorizontal : 10,
        marginVertical : 20
    },
    header : {
        flexDirection : 'row',
        left : 20,
        margin : 10,
        width : '100%',
        left : '40%',
    }
})