import React from 'react';
import { 
    View, 
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    AsyncStorage
} from 'react-native';

import { logo, userIcon, passIcon } from '../constants/imageFiles'
import { mainColor } from '../constants/colorFile';

import InputText from '../Components/InputText'
import NetInfo from '@react-native-community/netinfo'
import Toast from 'react-native-tiny-toast'

export default class Login extends React.Component {
    constructor (props) {
        super (props) 
        this.state = {
            isLoading : false,
            usernameTyped : undefined,
            passwordTyped : undefined,
            staticUrl : 'https://creddho-apis.herokuapp.com/api/v1/users/' //here the url of our backend
        }
    }

    onChangeUsername = (text) => {
        this.setState({
            usernameTyped : text
        })
    }
    onChangePassword = (text) => {
        this.setState({
            passwordTyped : text
        })
    }

    onLogin = () => {
        /**
         * First we need to check if network is available on user's device
         */
        this.setState({
            isLoading : true
        })
        NetInfo.fetch()
            .then(state => {
                if (state.isConnected) {
                    // lets test if required files aren't empty
                    if (this.state.usernameTyped !== undefined && this.state.passwordTyped !== undefined) {
                        fetch(this.state.staticUrl+'login', {
                            method : 'POST',
                            headers : {
                                'Accept' : 'application/json',
                                'Content-type' : 'application/json'
                            },
                            body : JSON.stringify({
                                username : this.state.usernameTyped,
                                password : this.state.passwordTyped
                            })
                        })
                            .then((response) => response.json())
                            .then((reponseJson) => {
                                /**
                                 * Expected responses from backend :
                                 * 1. In case everything works fine: 
                                 * @username 
                                 * @hashpassword
                                 * @token
                                 * these values gonna be stored in local user sotrage via AsyncStorage
                                 * 2. If something went bad : username not found or password missmatch : 
                                 * @errorMessage : which specified what wrong was it
                                 * 3. In case of INTERNAL SERVER ERROR OR BAD REQUESTS
                                 * @error : 
                                 */
                                if (!reponseJson.error && reponseJson.success) {
                                    console.log('Okay, route works fine')
                                    // everything is ok
                                    AsyncStorage.setItem('currentUser', JSON.stringify(reponseJson))
                                        .then(() => {
                                            this.setState({
                                                isLoading : false
                                            })
                                            Toast.show('Creation de session reussie', {
                                                position : Toast.position.BOTTOM,
                                                duration : Toast.duration.SHORT
                                            })
                                            this.props.navigation.navigate('Home')
                                        })
                                        .catch(() => {
                                            this.setState({
                                                isLoading : false,
                                            })
                                            Toast.show('Echec de connection', {
                                                position : Toast.position.BOTTOM,
                                                duration : Toast.duration.SHORT
                                            })
                                        })
                                } else {
                                    Alert.alert('ERREUR', reponseJson.message)
                                }
                            })
                            .catch(error => {
                                Alert.alert('ERREUR', 'Erreur inattendue')
                                console.log(error)
                            })
                    } else {
                        this.setState({
                            isLoading : false
                        })
                        Alert.alert(
                            'MISS DATA',
                            'Veuillez completer tous les champs requis'
                        )
                    }
                } else {
                    /**
                     * In case there's not connection, ask him to connect his phone
                     */
                    this.setState({
                        isLoading : false
                    })
                    Toast.show('Veuillez vous connecter sur internat avant de vous connecter', {
                        // addiftional options
                        position : Toast.position.BOTTOM,
                        duration : Toast.duration.LONG
                    })
                }
            })
    }
 
    render () {
        return (
            <View style = { styles.container }>
                <View style = { styles.logoContainer }>
                    <Image 
                        source = {logo}
                        style = { styles.logo }
                    />
                </View>
               <Text></Text>
                <KeyboardAvoidingView behavior = {'padding'} style={ styles.inputs }>
                    <InputText 
                        source = { userIcon }
                        placeholder = 'Username'
                        autoCorrect = { false }
                        returnKeyType = {'done'}
                        autoCapitalize = {'none'}
                        onChangeText = { this.onChangeUsername }
                    />
                    
                    <InputText 
                        source = { passIcon }
                        placeholder = 'Votre mot de pase'
                        secureTextEntry = {true}
                        autoCorrect = { false }
                        returnKeyType = {'done'}
                        autoCapitalize = {'none'}
                        onChangeText = { this.onChangePassword }
                    />
                </KeyboardAvoidingView>
                <TouchableOpacity 
                    style = { styles.btn }
                    onPress = { this.onLogin }
                >
                    <Text style = {{ fontWeight : 'bold' }}>Se Connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = { styles.fbtn}
                    onPress = { this.onForgetPswd }
                >
                    <Text style = {{ color : '#aabb01'}}>Mot de passe oublie ?</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
        backgroundColor : mainColor
    },
    logoContainer : {
        flex : 3,
        alignItems : 'center',
        justifyContent : 'center'
    },
    logo : {
        height : 100,
        width : 100,
        borderRadius : 20
    },
    inputs : {
        flex : 2,
        alignItems : 'center'
    },
    btn : {
        
        right : '30%', 
    },
    fbtn : {
        flex : 1,
        left : '30%'
    }
})