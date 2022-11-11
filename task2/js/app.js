$(document).ready(function() {
    let urlParams = new URLSearchParams(window.location.search);
    let param = urlParams.get('id');
    $.get(`https://www.breakingbadapi.com/api/characters/${param}`, function(data) {

        let cardBio = $('<div class="card" style="width: 20rem; ' +
            'margin: auto; margin-top: 40px; margin-bottom: 90px">\n' +
            '<img src="..." id="img" class="card-img-top" alt="...">\n' +
            '<div class="card-body">\n' +
            '<h3 class="card-text" id="card-text" style="color: black; font-size: 15px"></h3>\n' +
            '</div>\n');

        $('#block-bio').append(cardBio);
        for (const [key, value] of Object.entries(data[0])) {
            if(key != 'birthday'){
                $('#card-text').append(`${key}: ${value}<br>`);
            }
            else
                if(key == 'birthday'){
                    if(data[0]['birthday'] == "Unknown") {
                        $('#card-text').append(`age: Unknown <br>`);
                    }
                    else {
                        let now = new Date();
                    let birthday = data[0]['birthday'];
                    let birthdayYear = birthday.substring(6, );
                    let age = now.getFullYear() - birthdayYear;
                    $('#card-text').append(`age: ${age}<br>`);
                    };
                };
            };
        $("#img").attr("src", `${data[0].img}`);
    });
});

