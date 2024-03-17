// Функция для переключения кнопки 

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        signUp_form.classList.remove("active");
        LogIn_form.classList.remove("active");
        passwordChange.classList.remove("active")
        out.classList.remove("active");
    }
  });

const rect = document.getElementById('switch');
const changeButton = document.getElementById('switch_button');
let previousX = rect.getAttribute('x');

changeButton.addEventListener('click', () => {
    if (rect.getAttribute('x') === '8') {
        rect.setAttribute('x', previousX);
    } else {
        previousX = rect.getAttribute('x');
        rect.setAttribute('x', '8');
    }
    document.body.classList.toggle("light");
    changeButton.classList.toggle("switch")
});

function toggleFormVisibility(button, form, closeElement) {
    button.addEventListener("click", function() {
        form.classList.add("active");
    });

    closeElement.addEventListener("click", function() {
        form.classList.remove("active");
    });
}
// Функция для переключения кнопки 
// Вызов окна авторизация
var LogIn_button = document.getElementById("logIn_button");
var LogIn_form = document.getElementById("LogIn");
var LogIn_close = document.getElementById("LogIn__close_icon");
var LogIn_bg = document.getElementById("LogIn__BG");
var LogIn_to_signUp = document.getElementById("LogIn__to__signUp");

if (LogIn_button && LogIn_form && LogIn_close && LogIn_bg && LogIn_to_signUp) {
    toggleFormVisibility(LogIn_button, LogIn_form, LogIn_close);

    LogIn_bg.addEventListener("click", function() {
        LogIn_form.classList.remove("active");
    });

    LogIn_to_signUp.addEventListener("click", function() {
        LogIn_form.classList.remove("active");
        signUp_form.classList.add("active");
    });
}
// Вызов окна авторизация

document.addEventListener('DOMContentLoaded', function() {
    var headerState = localStorage.getItem('headerState');
    var moduleBlock = document.querySelector('.module');
    var headerElement = document.querySelector('.header');

    if (headerState === 'noStart') {
        moduleBlock.style.display = 'block';
        headerElement.classList.remove('start');
    } else {
        moduleBlock.style.display = 'none';
        headerElement.classList.add('start');
    }

    document.getElementById('signUp__submit-button').addEventListener('click', function() {
        var email = document.getElementById('Email').value;
        var username = document.getElementById('UserName').value;
        var telegram = document.getElementById('Telegram').value;
        var password = document.getElementById('Password').value;
        var passwordRepeat = document.getElementById('Password_repeat').value;

        if (email !== '' && username !== '' && telegram !== '' && password !== '' && passwordRepeat !== '') {
            headerElement.classList.remove('start');
            localStorage.setItem('headerState', 'noStart');
            moduleBlock.style.display = 'block';
            document.getElementById("signUp").classList.remove("active"); // Закрываем форму регистрации
            location.reload();
        }
    });

    // Обработка выхода из системы
    document.getElementById('button_out').addEventListener('click', function() {
        headerElement.classList.add('start');
        localStorage.removeItem('headerState'); // Удаляем состояние из localStorage
        moduleBlock.style.display = 'none';
        location.reload();
    });
});

// ВЫзов окна регистрации
var signUp_button = document.getElementById("signUp_button");
var signUp_form = document.getElementById("signUp");
var signUp_close = document.getElementById("SignUp__close_icon");
var signUp_Bg = document.getElementById("signUp__BG");

if (signUp_button && signUp_form && signUp_close && signUp_Bg) {
    toggleFormVisibility(signUp_button, signUp_form, signUp_close);

    signUp_Bg.addEventListener("click", function() {
        signUp_form.classList.remove("active");
    });
}
// ВЫзов окна регистрации

// окно подтверждения
const confirmation = document.getElementById("confirmation")
const confirmationBG = document.getElementById("confirmation_bg")
const confirmationClose = document.getElementById("confirmation__close")
confirmationClose.onclick = () => {
    confirmation.classList.remove("active")
}
confirmationBG.onclick = () => {
    confirmation.classList.remove("active")
}

// окно подтверждения

// Открытие меню пользоватия при клике на иконку
var user = document.getElementById("user");
var user_menu = document.getElementById("user_menu");
var userbgClose = document.getElementById("closeUserBg")

user.addEventListener("click", function(){
    user_menu.classList.toggle("active");
    userbgClose.classList.toggle("active");
});

user_menu.addEventListener("mouseleave", function(){
    user_menu.classList.remove("active");
    userbgClose.classList.remove("active");
});

userbgClose.onclick = () => {
    user_menu.classList.remove("active");
    userbgClose.classList.remove("active");
}
// Вызов окна выхода
var out__bg = document.getElementById("out__bg");
var LogOut = document.getElementById("LogOut");
var out = document.getElementById("out");
var button_continue = document.getElementById("button_continue");
LogOut.addEventListener("click", function(){
    out.classList.add("active");
    ueser_menu.classList.remove("active")
})
button_continue.addEventListener("click", function(){
    out.classList.remove("active");
})
out__bg.addEventListener("click", function(){
    out.classList.remove("active");
})
// Вызов окна выхода
// Открытие меню пользоватия при клике на иконку
// Открытие окна смены пароля
var change_password = document.getElementById("change_password");
var passwordChange = document.getElementById("passwordChange");
var passwordChange_bg = document.getElementById("passwordChange_bg");
var passwordChange__close_icon = document.getElementById("passwordChange__close_icon");

change_password.addEventListener("click", function(){
    passwordChange.classList.add("active")
})
passwordChange_bg.addEventListener("click", function(){
    passwordChange.classList.remove("active")
})
passwordChange__close_icon.addEventListener("click", function(){
    passwordChange.classList.remove("active")
})
// Открытие окна смены пароля

// Обработка табов на главной странице
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.module__link');
    const contents = document.querySelectorAll('.module__content');

    // Показываем изначально первый таб
    contents[0].style.display = 'block';
    links[0].classList.add('active');

    links.forEach((link, index) => {
        link.addEventListener('mouseover', function(event) {
            event.preventDefault();

            // Скрываем все табы
            contents.forEach(content => {
                content.style.display = 'none';
            });

            // Удаляем класс active у всех ссылок
            links.forEach(link => {
                link.classList.remove('active');
            });

            // Показываем выбранный таб
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).style.display = 'block';
            
            // Добавляем класс active к выбранной ссылке
            this.classList.add('active');
        });
        // открытие мануал теста
        link.addEventListener('click', function(event){
            document.getElementById("tests").classList.add("active")
            main.classList.add("hide")
            module.classList.add("hideModule")
        });
    });
});

// закрытие теста

let testClose = document.querySelector(".tests__back-button");
testClose.addEventListener("click", ()=>{
    document.getElementById("tests").classList.remove("active")
    main.classList.remove("hide")
    module.classList.remove("hideModule")
})

// Табы в статистике

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.statistics__header-link');
    const contents = document.querySelectorAll('.statistics__content');

    // Показываем изначально первый таб
    contents[0].style.display = 'grid';
    links[0].classList.add('active');

    links.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Скрываем все табы
            contents.forEach(content => {
                content.style.display = 'none';
            });

            // Удаляем класс select у всех ссылок
            links.forEach(link => {
                link.classList.remove('select');
            });

            // Показываем выбранный таб
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).style.display = 'grid';
            
            // Добавляем класс select к выбранной ссылке
            this.classList.add('select');
        });
    });
});

/* НУЖНО
    Реализовать код который будет проверять атрибут lock
    и если он будет true то заменять свг стрелки на замок
    и если false то будет заменять свг на замок
    и делать так что бы при lock true таб был недоступен для выбора
*/ 

// // код для шапки
// document.addEventListener('DOMContentLoaded', function() {
//     var header = document.querySelector('.header');

//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 0) {
//             header.classList.add('scrolled');
//         } else {
//             header.classList.remove('scrolled');
//         }
//     });
// });

function checkInternetConnection() {
    var connectFalse = document.querySelector('.connectFalse');

    if (!navigator.onLine) {
        connectFalse.style.display = 'flex';
    } else {
        connectFalse.style.display = 'none';
    }
}
// Вызываем функцию при загрузке страницы и при изменении состояния интернет-соединения
document.addEventListener('DOMContentLoaded', checkInternetConnection);
window.addEventListener('online', checkInternetConnection);
window.addEventListener('offline', checkInternetConnection);
document.querySelector('.connectFalse__button').addEventListener('click', function() {
    location.reload();
});


let statButton = document.getElementById("statButton");
let statistics = document.getElementById("statistics");
let main = document.getElementById("main");
let module = document.getElementById("module");
let statBack = document.getElementById("statBack");
var headerElement = document.querySelector('.header');
const testsClass = document.getElementById("tests");

let rateButton = document.getElementById("rateButton");
let rate = document.getElementById("rate");
let rateBack = document.getElementById("RateBack");

statButton.addEventListener("click", function(){
    statistics.classList.add("show")
    main.classList.add("hide")
    module.classList.add("hideModule")
    headerElement.classList.add('stat');
    rate.classList.remove("show") 
    headerElement.classList.remove('rating');
    testsClass.classList.add("hide")
});
statBack.addEventListener("click", function(){
    testsClass.classList.remove("hide")
    if (testsClass.classList.contains("active")) {
        statistics.classList.remove("show")
        headerElement.classList.remove('stat');
    } else {
        statistics.classList.remove("show")
        main.classList.remove("hide")
        module.classList.remove("hideModule")
        headerElement.classList.remove('stat');
    }
});

rateButton.addEventListener("click", function(){
    rate.classList.add("show") 
    headerElement.classList.add('rating');
    main.classList.add("hide")
    module.classList.add("hideModule")
    statistics.classList.remove("show")
    headerElement.classList.remove('stat');
    footer.classList.add("hide")
})
rateBack.addEventListener("click", function(){
    if (testsClass.classList.contains("active")) {
        rate.classList.remove("show") 
        headerElement.classList.remove('rating');
        footer.classList.remove("hide")
    } else {
        rate.classList.remove("show") 
        headerElement.classList.remove('rating');
        module.classList.remove("hideModule")
        main.classList.remove("hide")
        footer.classList.remove("hide")
    }
})

var resultButton = document.querySelectorAll(".rate__showAll");
let rateList = document.getElementById("rate__list");
let rateContent = document.getElementById("rate__content");
let rateClose = document.getElementById("rateClose");
let rateItem = document.querySelectorAll(".rate__item")
let rateFiltersBtn = document.getElementById("rateFiltersBtn")
let rateFilters = document.getElementById("rateFilters")
let rateFiltersItem = document.querySelectorAll(".rate__filtersBtn")

rateItem.forEach(button => { 
    button.addEventListener("click", () => { 
      rateList.classList.toggle("active"); 
      rateContent.classList.toggle("hide"); 
    }); 
    resultButton.forEach(button => { 
      button.addEventListener("click", () => { 
        rateList.classList.toggle("active"); 
        rateContent.classList.toggle("hide"); 
      }); 
    }); 
  });
rateClose.addEventListener("click", function(){
    rateList.classList.remove("active");
    rateContent.classList.remove("hide")
});
rateFiltersBtn.onclick = () => {
    rateFilters.classList.toggle("active")
}
rateFilters.onmouseleave = () => {
    rateFilters.classList.remove("active")
}
rateFiltersItem.forEach((button) => {
    button.onclick = () => {
    rateFilters.classList.remove("active");
    };
});

// politics
const politics = document.getElementById("politics")
const politicsBtn = document.getElementById("politicsBtn")
const politicsClose = document.getElementById("politics__back")

politicsBtn.onclick = () => {
    politics.classList.add("active")
}
politicsClose.onclick = () => {
    politics.classList.remove("active")
}
// politics

// активация тестов

document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        document.querySelectorAll('.startTestButton').forEach(function(button) {
            button.removeAttribute('disabled');
        });
    });
});

let testStartButton = document.querySelector(".startTestButton");
let testStartScreen = document.querySelector(".testStart");
let testBody = document.querySelector(".test__body");
let testBg = document.querySelector(".tests__container")
testStartButton.addEventListener("click", ()=>{
    testStartScreen.classList.add("hide")
    testBg.classList.add("hide")
    testBody.classList.add("active")
})


// валидация форм

// РЕГИСТРАЦИЯ


// Следующий вопрос прототип

const nextQuestBtn = document.querySelector(".nextQuestion")
const nextQuest = document.getElementById("question2")
const prevQuest = document.getElementById("question1")
nextQuestBtn.onclick = () => {
    nextQuest.classList.add("active")
    prevQuest.classList.add("hide")
}

// Конец теста тестирование

const testEndPopupBtn = document.getElementById("testEndBtn")
const testEndPopup = document.getElementById("testEnd")
const moduleEndBtn = document.getElementById("moduleBtn")
const moduleEnd = document.getElementById("moduleEnd")
const backToMain = document.getElementById("backModule")
testEndPopupBtn.onclick = () => {
    testEndPopup.classList.add("active")
}
moduleEndBtn.onclick = () => {
    testEndPopup.classList.remove("active")
    moduleEnd.classList.add("active")
}
backToMain.onclick = () => {
    testEndPopup.classList.remove("active")
    moduleEnd.classList.remove("active")
    testBody.classList.remove("active")
    main.classList.remove("hide")
    module.classList.remove("hideModule")
    document.getElementById("tests").classList.remove("active")
    testStartScreen.classList.remove("hide")
    testBg.classList.remove("hide")
}

document.querySelector("#Special option").style.display = "none"
  
