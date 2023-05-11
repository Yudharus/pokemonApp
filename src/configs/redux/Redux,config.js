const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    token : "",
    user : {},
    version : "",
    advertisement : "",
    api_link : "",
    sound: [],
    form: {
        caption: "",
        categories: "",
        cover: {},
        allowed_comment: 1,
        viewer: 1,
        class_link: "",
        type: "",
        draft: false,
        tagFriends: [],
        hastag: []
    },
    save: false,
    kelasIdUlasan : "",
    statusKelas: "",
    isOwnerKelas: "",
    typeContent: "",
    authorId: "",
    moreMenuExplore : true,
    valueReport : "",
    idContentReport: "",
    modalConfirm: false,
    editPermission : false
    
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TOKEN':
            return {
                ...state,
                token : action.newValue
            }
        case 'CHANGE_USER':
            return {
                ...state,
                user : action.newValue
            }
        case 'CHANGE_VERSION':
            return {
                ...state,
                version : action.newValue
            }
        case 'CHANGE_ADS':
            return {
                ...state,
                advertisement : action.newValue
            }
        case 'CHANGE_LINK_API':
            return {
                ...state,
                api_link : action.newValue
            }
        case "CHANGE_SOUND":
            return {
                ...state,
                sound: action.newValue
            }
        case "CHANGE_FORM":
            return {
                ...state,
                form: action.newValue
            }
        case "CHANGE_SAVE":
            return {
                ...state,
                save: action.newValue
            }
        case "CHANGE_KELAS_ID_ULASAN":
            return {
                ...state,
                kelasIdUlasan: action.newValue
            }
        case "CHANGE_STATUS":
            return {
                ...state,
                statusKelas: action.newValue
            }
        case "CHANGE_ISOWNERKELAS":
            return {
                ...state,
                isOwnerKelas: action.newValue
            }
        case "CHANGE_TYPE_CONTENT":
            return {
                ...state,
                typeContent: action.newValue
            }
        case "CHANGE_AUTHORID":
            return {
                ...state,
                authorId: action.newValue
            }
        case "CHANGE_MOREMENUEXPLORE":
            return {
                ...state,
                moreMenuExplore: action.newValue
            }
        case "CHANGE_VALUEREPORT":
            return {
                ...state,
                valueReport: action.newValue
            }
        case "CHANGE_IDCONTENTREPORT":
            return {
                ...state,
                idContentReport: action.newValue
            }    
        case "CHANGE_MODALCONFIRM":
            return {
                ...state,
                modalConfirm: action.newValue
            }    
        case "CHANGE_EDITPERMISSION":
            return {
                ...state,
                editPermission: action.newValue
            }    
            
                
        default:
            return state;
        }
    }

const store = createStore(rootReducer);

export default store;