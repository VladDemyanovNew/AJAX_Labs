
function lab1() {
    const output = document.querySelector(".lab1 .output .result");

    $(document).ready(function() {
        $('.lab1 button').on('click', getServerTime_XMLHttpRequest);
    });

    function getServerTime_XMLHttpRequest() {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'php/backend.php');
        xhr.send();
        xhr.onload = function() {
            if (xhr.status != 200) {
             alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            } else {
             output.innerHTML = xhr.response;
            }
        };
    }; 

    function getServerTime_JQuery() {
        $.ajax({
            method: "POST",
            url: "php/backend.php",
            data: {},
            success: (data) => {                    
                output.innerHTML = data;
            }
        });
    };

    function getServerTime_Fetch() {
        fetch("php/backend.php", {method: "POST"})
        .then(response => response.text())
        .then(result => output.innerHTML = result);
    };
};

export {lab1};