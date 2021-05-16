const outputArea = document.querySelector(".lab10 .output");

function lab10() {
    setInterval(() => {
        let now = new Date();
        let newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

        let days = Math.floor((newYear - now) / 1000 / 60 / 60 / 24);
        let hours =  Math.floor((newYear - now) / 1000 / 60 / 60 % 24);
        let minutes =  Math.floor((newYear - now) / 1000 / 60 % 60);
        let seconds =  Math.floor((newYear - now) / 1000 % 60);
        
        outputArea.innerHTML = `${days} days | ${hours} hours | ${minutes} minutes | ${seconds} seconds`;
    }, 1000);
}

export {lab10};