alert('Добро пожаловать в DOM JS!')

const startElement = document.querySelector('.subtitle__dom-js')
startElement.textContent = 'Запуск функции JS'

// Добавляем новый элемент в тело документа (или в другой элемент)


function welcome() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            alert('Привет! Я Дмитрий, начал заниматься фронтендом в ноябре 2024 года.. tg - @Dimandepik')
            resolve()
        }, 1000);
    })
}

async function getWelcome() {
    const message = await welcome()
    message()
}
getWelcome()

function endElement() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            const endElement = document.querySelector('.subtitle__dom-js')
            endElement.textContent = 'Функция завершена...'
            resolve()
        }, 1000);
    })
}

async function getEndElement() {
    const message = await endElement()
    message()
}
getEndElement()

const inputText = document.querySelector('.input__dom-js');
const sendLink = document.querySelector('.send__dom-js');


sendLink.addEventListener('click', function(){
    if(inputText.value === 'Как дела?') {
        alert('Отлично')
    }
    else {
        alert('Вы не ввели: Как дела?')
    }
})

const inputText2 = document.querySelector('.input__dom-js2');
const sendLink2 = document.querySelector('.send__dom-js2')

sendLink2.addEventListener('click', function(){
    if(inputText2.value > 100) {
        alert('Число больше 100')
    }

    else if(inputText2.value == 100) {
        alert('Число равно 100')
    }

    else {
        alert('Число меньше 100')
    }
})

const numberInput = document.getElementById('numberInput');
const sendNumber = document.getElementById('sendNumber');

const textInput = document.getElementById('textInput');
const sendText = document.getElementById('sendText');

sendNumber.addEventListener('click', () => {
    sendNumber.textContent = 'Успешно';
    numberInput.value = '';
});

numberInput.addEventListener('input', () => {
if (numberInput.value !== '') {
    sendNumber.textContent = 'Отправить';
}
});

sendText.addEventListener('click', () => {
    sendText.textContent = 'Успешно';
    textInput.value = '';
});

textInput.addEventListener('input', () => {
if (textInput.value !== '') {
    sendText.textContent = 'Отправить';
}
});

const poorly = document.querySelector('.poorly__dom-js')
const good = document.querySelector('.good__dom-js')
const great = document.querySelector('.great__dom-js')

if (poorly) {
    poorly.addEventListener('click', function () {
        alert('Мне очень жаль, надеюсь, у вас все будет хорошо');
    });
}

if (good) {
    good.addEventListener('click', function () {
        alert('Супер!');
    });
}

if (great) {
    great.addEventListener('click', function () {
        alert('Это очень хорошо, когда у вас отличные дела)');
    });
}

const textElement = document.querySelector('.container-two')


// Используйте обратные кавычки (`` ` ``) для корректного добавления HTML
textElement.innerHTML = `
    <input type="text" class="input__dom-js-mess bg-gray-300 text-gray-700 m-2 p-1.5 rounded-full outline-0 placeholder:text-center" id="messageInput" placeholder="Введите сообщение:">
    <button class="send__dom-js-mess bg-green-500 rounded-full p-2 hover:bg-green-700 m-2 transition-all text-white font-bold  max-sm: flex" id="sendMessage">Отправить</button>
    <div id="messagesContainer" class="m-2.5 text-wrap whitespace-normal w-full break-words"></div>
`;

const messInp = document.getElementById('messageInput');
const sendMess = document.getElementById('sendMessage');
const messagesContainer = document.getElementById('messagesContainer'); // Получаем контейнер для сообщений

sendMess.addEventListener('click', () => { 
    const messageText = messInp.value.trim(); // Убираем лишние пробелы

    if (!messageText) return; // Не добавляем пустые сообщения

    messagesContainer.innerHTML = ''; // Очищаем контейнер
    
    const newMessage = document.createElement('p'); // Создаем новый элемент
    newMessage.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        word-break: break-word; 
    `;
    newMessage.textContent = messageText; // Устанавливаем текст
    messagesContainer.append(newMessage); // Добавляем в контейнер
    messInp.value = ''; // Очищаем поле ввода
});

sendMess.addEventListener('click', () => {
    sendMess.textContent = 'Успешно';
    messInp.value = ''
})

messInp.addEventListener('input', () => {
    messInp.value !== ''
    sendMess.textContent = 'Отправить';
    
})
