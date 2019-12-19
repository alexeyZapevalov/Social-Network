const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id:1, post:'Hi, how are you?', likesCount: 21},
        {id:2, post:'It\'s my first post', likesCount: 7},
        {id:3, post:'Ha-ha-ha-ha', likesCount: 31},
        {id:4, post:'Bla Bla Bla', likesCount: 7}
    ],
    newPostText: 'Print new post'
};


const profileReducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            }; 
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }
};

export const addPostActionCreator = ()=> ({
    type: ADD_POST
});
export const updateNewPostTextActionCreator = (text)=>({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;