const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi! How are your'},
        {id: 3, message: 'Kukareku'},
        {id: 4, message: 'Say hello to Italy'},
    ],
    dialogsData: [
        {id: 1, name: 'Alex', ava: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'},
        {id: 2, name: 'Nastya', ava: 'http://www.youloveit.ru/uploads/posts/2018-03/1520168769_youloveit_ru_ariana_grande_emoji_avatarki05.jpg'},
        {id: 3, name: 'Vetal', ava: 'https://cs16planet.ru/steam-avatars/images/avatar2700.jpg'},
        {id: 4, name: 'Maloy', ava: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg'},
        {id: 5, name: 'Mama', ava: 'https://i.pinimg.com/originals/ea/38/b8/ea38b86ac2913eb18be9703a0d76360e.png'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action)=>{
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 5, message: body});
            return state;
        default:
            return state;
    }
};

export const SendMessageCreator = ()=> ({type:SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body)=>({
type: UPDATE_NEW_MESSAGE_BODY, body: body
});
export default dialogsReducer;