import {rerenderEntireTree} from '../render';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', like: 12},
            {id: 2, message: 'What are you doing?', like: 99},
            {id: 3, message: 'Hello, that time it is?', like: 0},
            {id: 4, message: 'Hi man!', like: 33},
            {id: 5, message: 'How are you?', like: 77}
        ],
        newPostText: "Add your message..."
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "Hello!"},
            {id: 3, message: "That's up!"},
            {id: 4, message: "Good Day!"},
            {id: 5, message: "Hi man!"},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sergey'},
            {id: 4, name: 'Ryslan'},
            {id: 5, name: 'Anna'},
            {id: 6, name: 'Bububu'},
            {id: 7, name: 'Olga'},
            {id: 8, name: 'Rita'}
        ],
        newDialogText: "Way of the Samurai!!!"
    },
    newsPage: {
        newsData: [
            {id: 1, data: "12.04.2020", title: "Articlewww"},
            {id: 2, data: "25.05.2020", title: "It's interesting"},
            {id: 3, data: "03.06.2020", title: "Magazine"},
            {id: 1, data: "12.04.2020", title: "Article"},
            {id: 2, data: "25.05.2020", title: "It's interesting"},
            {id: 3, data: "03.06.2020", title: "Magazine"}
        ]
    },
    friendsPart: {
        friendsData:[
            {id: 1, name: 'Ruslan'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Boris'}
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export let addDialog = () => {
    let newDialog = {
        id: 6,
        message: state.dialogsPage.newDialogText
    };
    
    state.dialogsPage.messages.push(newDialog);
    state.dialogsPage.newDialogText = '';

    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let updateNewDialogText = (newText) => {
    state.dialogsPage.newDialogText = newText;
    rerenderEntireTree(state);
}

window.state = state;

export default state;