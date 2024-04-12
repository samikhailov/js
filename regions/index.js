const regions = [["Амурская", "г. Благовещенск"], ["Архангельская", "г. Архангельск"], ["Астраханская", "г. Астрахань"], ["Белгородская", "г. Белгород"], ["Брянская", "г. Брянск"], ["Владимирская", "г. Владимир"], ["Волгоградская", "г. Волгоград"], ["Вологодская", "г. Вологда"], ["Воронежская", "г. Воронеж"], ["Ивановская", "г. Иваново"], ["Иркутская", "г. Иркутск"], ["Калининградская", "г. Калининград"], ["Калужская", "г. Калуга"], ["Кемеровская", "г. Кемерово"], ["Кировская", "г. Киров"], ["Костромская", "г. Кострома"], ["Курганская", "г. Курган"], ["Курская", "г. Курск"], ["Ленинградская", "г. Санкт-Петербург"], ["Липецкая", "г. Липецк"], ["Магаданская", "г. Магадан"], ["Московская", "г. Москва"], ["Мурманская", "г. Мурманск"], ["Нижегородская", "г. Нижний Новгород"], ["Новгородская", "г. Новгород"], ["Новосибирская", "г. Новосибирск"], ["Омская", "г. Омск"], ["Оренбургская", "г. Оренбург"], ["Орловская", "г. Орел"], ["Пензенская", "г. Пенза"], ["Псковская", "г. Псков"], ["Ростовская", "г. Ростов-на-Дону"], ["Рязанская", "г. Рязань"], ["Самарская", "г. Самара"], ["Саратовская", "г. Саратов"], ["Сахалинская", "г. Южно-Сахалинск"], ["Свердловская", "г. Екатеринбург"], ["Смоленская", "г. Смоленск"], ["Тамбовская", "г. Тамбов"], ["Тверская", "г. Тверь"], ["Томская", "г. Томск"], ["Тульская", "г. Тула"], ["Тюменская", "г. Тюмень"], ["Ульяновская", "г. Ульяновск"], ["Челябинская", "г. Челябинск"], ["Ярославская", "г. Ярославль"], ["Адыгея", "г. Майкоп"], ["Алтай", "г. Горно-Алтайск"], ["Башкортостан", "г. Уфа"], ["Бурятия", "г. Улан-Удэ"], ["Дагестан", "г. Махачкала"], ["Ингушетия", "г. Магас"], ["Кабардино-Балкария", "г. Нальчик"], ["Калмыкия", "г. Элиста"], ["Карачаево-Черкесская", "г. Черкесск"], ["Карелия", "г. Петрозаводск"], ["Коми", "г. Сыктывкар"], ["Марий Эл", "г. Йошкар-Ола"], ["Мордовия", "г. Саранск"], ["Саха", "г. Якутск"], ["Северная Осетия-Алания", "г. Владикавказ"], ["Татарстан", "г. Казань"], ["Тыва", "г. Кызыл"], ["Удмуртия", "г. Ижевск"], ["Хакасия", "г. Абакан"], ["Чечня", "г. Грозный"], ["Чувашская", "г. Чебоксары"], ["Крым", "г. Симферополь"], ["Алтайский", "г. Барнаул"], ["Забайкальский", "г. Чита"], ["Камчатский", "г. Петропавловск-Камчатский"], ["Краснодарский", "г. Краснодар"], ["Красноярский", "г. Красноярск"], ["Пермский", "г. Пермь"], ["Приморский", "г. Владивосток"], ["Ставропольский", "г. Ставрополь"], ["Хабаровский", "г. Хабаровск"], ["Ненецкий", "г. Нарьян-Мар"], ["Ханты-Мансийский", "г. Ханты-Мансийск"], ["Чукотский", "г. Анадырь"], ["Ямало-Ненецкий", "г. Салехард"], ["Еврейская", "г. Биробиджан"]]

const answerButtons = document.querySelectorAll(".answer")
const answersQuantity = answerButtons.length;
const question = document.querySelector(".question")
const nextButton = document.querySelector(".next-btn")
let rightAnswerButton;

answerButtons.forEach(answer => {
    answer.addEventListener('click', function () {
        answerButtons.forEach(el => el.classList = "button answer disable")
        rightAnswerButton.classList.add("right-answer")
        if (this !== rightAnswerButton) {
            this.classList.add("incorrect-answer");
        }
        showNextButton();
    });
})

function getRandom(arr, n) {
    var result = new Array(n), len = arr.length, taken = new Array(len);
    if (n > len) throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


function prepareAnswers() {
    answerButtons.forEach(el => el.classList = "button answer")
    hideNextButton()
    const answers = getRandom(regions, answersQuantity);
    const rightAnswerIndex = Math.floor(Math.random() * answersQuantity);
    let index = 0;
    answers.forEach(el => {
        answerButtons[index].innerText = el[1];
        if (rightAnswerIndex === index) {
            rightAnswerButton = answerButtons[index];
            question.innerText = el[0]
        }
        index++;
    });
}

function showNextButton() {
    nextButton.classList.remove("hidden");
}

function hideNextButton() {
    nextButton.classList.add("hidden");
}

prepareAnswers();
console.log(rightAnswerButton)
