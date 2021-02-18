import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
/**
 * @import 
 * Screens
 */
import Login from '../Screens/Login'
import Home from '../Screens/Home'
import Blank from '../Screens/Blank'
import Formulaires from '../Screens/Formulaires'
import UpdateFormulaire from '../Screens/UpdateFormulaire'

const Drawer = createDrawerNavigator ()
const Stack = createStackNavigator ()
function MainDrawer () {
    return (
        <Drawer.Navigator
            initialRouteName = 'Home'
        >
            <Drawer.Screen 
                name = 'Home'
                component = {Home}
                options = {{
                    drawerLabel : 'Accueil'
                }}
            />
            <Drawer.Screen 
                name = 'Login'
                component = {Login}
                options = {{
                    drawerLabel : 'Deconnexion'
                }}
            />
            <Drawer.Screen 
                name = 'Blank'
                component = {Blank}
                options = {{
                    drawerLabel : 'Aide'
                }}
            />
            {/*}    <Drawer.Screen 
                    name = 'Blank'
                    component = {Blank}
                    options = {{
                        drawerLabel : 'Quitter'
                    }}
                /> */}
        </Drawer.Navigator>
    )
}

export default function AppContainer () {
    return (
        <NavigationContainer>
            <Stack.Navigator
                mode = 'modal'
                initialRouteName = 'UpdateFormulaire'
            >
                <Stack.Screen 
                    name = "Login" 
                    component = {Login}
                    options = {{
                        headerShown : false
                    }}
                />
                <Stack.Screen 
                    name = "Home" 
                    component = {MainDrawer} 
                    options = {{
                        headerShown : false
                    }}
                />
                <Stack.Screen 
                    name = 'Formulaires' 
                    component = {Formulaires} 
                    options = {{
                        headerTintColor : 'black',
                        headerTitle : 'FORMULAIRE POUR LA VIOLATION DES DROITS DE L\'HOMME',
                    }}
                />
                <Stack.Screen 
                    name = 'UpdateFormulaire' 
                    component = {UpdateFormulaire} 
                    options = {{
                        headerTintColor : 'black',
                        headerTitle : 'MODIFIER UN FORMULAIRE ENREGISTRE',
                        headerShown : true
                    }}
                />
            </Stack.Navigator>
            

        </NavigationContainer>
    )
}