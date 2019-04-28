
class CardPage {
    constructor(data) {
        this.page_info = data;
        this.init();
    }

    init() {

        const scope = this;

        const card_name = $('#card_name').text(this.page_info.name); // Название видеокарты.
        const card_img = $('#card_img').attr('src', this.page_info.img); // Ресурс картинки с видеокартой.

        // Заполнение столбиков с информацией о видеокарте.
        for (let i = 0; i < this.page_info.info.length; i++) {

            const info_column = $(`#column${i + 1}`);

            for (let j = 0; j < this.page_info.info[i].length; j++) {
                info_column.append($('<li>', {
                    text: scope.page_info.info[i][j]
                }));
            }
        }

        // Ресурс видео о видеокарте.
        const video_frame = $(`${this.page_info.video_frame.toString()}`).appendTo('#tests_block');

    }
}

const page_num = decodeURIComponent(location.search.substr(1)).split('&')[1];
const card_page = new CardPage(config.pages[page_num - 1]);