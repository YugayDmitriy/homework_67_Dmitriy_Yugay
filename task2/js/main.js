$(document).ready(function() {

    $.get('https://www.breakingbadapi.com/api/characters', function(func) {
        const data = func.reverse();
        let rows = $('<div class="row" id="rows"></div>');
        $('#block').append(rows);

        for (let key = 0; key < data.length; key++) {

             let list = $('<div class="col-4" id="cols"><div class="card" style="width: 15rem; margin-bottom: 25px">\n' +
                 '<img src="" id="img" style="height: 350px;" class="card-img-top" alt="Тут могла быть ваша реклама">\n' +
                 '<div class="card-body">\n' +
                 '<h4 class="card-title" id="title" style="text-align: center"></h4>\n' +
                 '<a href="#" class="btn btn-outline-secondary" id="btn" style="margin-left: 74px;">More</a>\n' +
                 '</div>');

             let name = `${data[key].name}`;
             $('#rows').prepend(list);
             $('#title').append(name);
             $("#img").attr("src", `${data[key].img}`);
             $("#btn").attr('href','character.html?id=' + `${data[key].char_id}`);
        }
    })
})
