function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;
    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = taskText
    // if(taskInput.value != "") {label.textContent = taskText};
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        label.classList.toggle("completed");
    }
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
    taskInput.value = "";
}

function editName() {
    let name = document.querySelector("#name");
    let header = document.querySelector(".header");
    let date = new Date()
    let hours = date.getHours();
    if(hours <= 11) {
        header.textContent = `Good morning, ${name.value}`;
    } else if(hours > 11 && hours < 18) {
        header.textContent = `Good afternoon, ${name.value}`;
    } else if(hours >= 18) {
        header.textContent = `Good evening, ${name.value}`;
    }
    name.value = "";
}
  
document.getElementById("editButton").addEventListener('click', editName);
document.getElementById("addButton").addEventListener('click', addTask);

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 // to make 0 hours = 12
    hours = hours ? hours : 12; // to make 0 hours = 12
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = `${hours}:${minutes} ${ampm}`
    return strTime;
}

let time = document.getElementById("time");
time.textContent = formatAMPM(new Date);

const quotes = [
    {
        quote: "We cannot solve problems with the kind of thinking we employed when we came up with them",
        author: "Albert Einstein"
    },
    {
        quote: "Learn as if you will live forever, live like you will die tomorrow.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "When you change your thoughts, remember to also change your world.",
        author: "Normal Vincent Peale"
    },
    {
        quote: "I have a dream.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "It's better to fail in originality than to succeed in imitation.",
        author: "Herman Melville"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estée Lauder"
    },
    {
        quote: "Success is getting what you want; happiness is wanting what you get.",
        author: "W.P. Kinsella"
    },
    {
        quote: "Don't let yesterday take too much of today",
        author: "Will Rogers"
    },
    {
        quote: "Fortune favors the bold.",
        author: "Virgil"
    },
    {
        quote: "Luck favors the prepared.",
        author: "Louis Pasteur"
    }
];
let randomNumber = Math.random() * quotes.length;
let newNumber = Math.floor(randomNumber);
document.getElementById("randomQuote").textContent = `"${quotes[newNumber].quote}"`;
document.getElementById("quoteAuthor").textContent = `- ${quotes[newNumber].author}`;