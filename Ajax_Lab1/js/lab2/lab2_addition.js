
import {state, conectToServer} from './state.js';


function getDataFromTextarea() {
    const textareaData = document.querySelector(".lab2 .addition textarea").value;
    return {id: state.posts.length + 1, message: textareaData};
}

function lab2_addition() {
    state.posts.push(getDataFromTextarea());

    let postsElements = state.posts.map( post => {
        return(
           `<div class="item"><img src="images/avatar.png" alt="avatar"/>${post.message}</div>`
        ); 
    });
   
    const output = document.querySelector(".lab2 .addition .main .posts");
    output.innerHTML = postsElements.join('');
    conectToServer();
}

export {lab2_addition};
