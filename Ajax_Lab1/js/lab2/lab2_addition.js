
import {state} from './state.js';

function lab2_addition() {
    let postsElements = state.posts.map( post => {
        return(
           `<div class="item"><img src="images/avatar.png" alt="avatar"/>${post.message}</div>`
        ); 
    });
   
    const output = document.querySelector(".lab2 .addition");
    const div = document.createElement("div");
    div.innerHTML = postsElements.join('');
    output.append(div);
}

export {lab2_addition};
