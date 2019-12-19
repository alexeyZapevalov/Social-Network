import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profile: {
            posts: [
                {id:1, post:'Hi, how are you?', likesCount: 21},
                {id:2, post:'It\'s my first post', likesCount: 7},
                {id:3, post:'Ha-ha-ha-ha', likesCount: 31},
                {id:4, post:'Bla Bla Bla', likesCount: 7}
            ],
            newPostText: 'Print new post'
        },
        dialogs:{
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
        }
    },
    _callSubscriber (){
        console.log('state has changed')
    },

    getState (){
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action){

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._callSubscriber(this._state);
    }
    
}




window.store = store;
export default store