import {
    checkIcon,
    downloadIcon,
    sendIcon,
    updateIcon,
    removeIcon,
    questionIcon
} from '../constants/imageFiles'

const elements = [
    {id : 0, image : downloadIcon, description : 'Telecharger un formulaire vierge '},
    {id : 1, image : updateIcon, description : 'Modifier un formulaire'},
    {id : 2, image : sendIcon, description : 'Envoyer un formulaire enreigistrE '},
    {id : 3, image : checkIcon, description : 'Consulter les formulaires EnvoyEs'},
    {id : 4, image : removeIcon, description : 'Supprimer un formulaire enreigistrE '},
    {id : 5, image : questionIcon, description : 'Envoie de rapport '},
]

export default elements