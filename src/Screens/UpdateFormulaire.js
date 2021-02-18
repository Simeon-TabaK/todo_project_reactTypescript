import React from 'react';
import { 
    StyleSheet, 
    View,
    ScrollView
} from 'react-native';
import UpdateFormElement from '../Components/UpdateFormElmt';

const UpdateFormulaire = () => {
    return (
        <ScrollView style = {styles.container}> 
            <UpdateFormElement 
                title = "FORMULAIRE POUR LES ARRESTATIONS ARBITRAIRES"
            />
            <UpdateFormElement 
                title = "FORMULAIRE POUR LES VIOLS DANS LES MILIEUX RURAUX "
            />
            <UpdateFormElement 
                title = "FORMULAIRE POUR LES MEUTRES PREMEDITES"
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})

export default UpdateFormulaire