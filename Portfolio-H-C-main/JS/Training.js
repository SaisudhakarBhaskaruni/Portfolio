document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('command-input');
    const outputDiv = document.getElementById('output');

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const commands = inputField.value;
            const command = commands.trim().toLowerCase();
            executeCommand(command, commands);
            inputField.value = '';
        }
    });

    function executeCommand(command, commands) {
        const output = document.createElement('div');

        const helpCommand = ` Available Commands:\n
            -------------------------------------------\n
            "Introduce yourself" / "introduce"\n
            "What are your hobbies" / "hobbies"\n
            "What are your skills" / "skills"\n
            "What are your projects" / "projects"\n
            "What are your work experience" / "experience"\n
            "Tell your education details" / "education"\n
            "clear": clears all the chat.
        `;

        // Split the help command into individual lines
        const helpLines = helpCommand.split('\n');

        const introduce = " I am Sai Sudhakar, currently pursuing a B.Tech in Computer Science and Engineering at Lovely Professional University. I am from Andra Pradesh.";
        const hobbies = " I enjoy playing volleyball, Photography, and watching animes."
        const skills = " I have acquired good skills during my B.Tech in languages like Java,JavaScript as well as frameworks like React, development tools like HTML and CSS, and databases like MongoDB and MySQL.";
        const education = " I have completed my 10th in Narayana from Guntur. Intermediate in Narayana Jnr College in Vijayawada, Currently pursuing B-tech Computer science in Lovely Professional University."
        // output.textContent = '$saisudhakar/portfolio ~ >> ' + command;
        const helpDiv = document.createElement('div');
        helpDiv.textContent = "$ saisudhakar/portfolio ~ >> " + commands;
        outputDiv.appendChild(helpDiv);

        if(command == "help") {
            helpLines.forEach(line => {
                const helpDiv = document.createElement('div');
                helpDiv.textContent = line;
                outputDiv.appendChild(helpDiv);
            });
        }
        else if(command == "introduce yourself" || command == "introduce" || command == "intro") {
            command = introduce;
            output.textContent = command;
            outputDiv.appendChild(output);
        }
        else if (command == "what are your hobbies" || command == "hobbies" || command == "hobby") {
            command = hobbies;
            output.textContent = command;
            outputDiv.appendChild(output);
        }
        else if (command == "what are your skills" || command == "skills" || command == "skill") {
            command = skills;
            output.textContent = command;
            outputDiv.appendChild(output);
        }
        else if (command == "tell your education details" || command == "your education details" || command == "education details" || command == "education") {
            command = education;
            output.textContent = command;
            outputDiv.appendChild(output);
        }
        else if (command == "clear") {
            outputDiv.innerHTML = '';
        }
        else {
            command = ' Invalid command, please type " help " to check the commands.';
            output.textContent = command;
            outputDiv.appendChild(output);
        }

        const lineBreak = document.createElement('br');
        outputDiv.appendChild(lineBreak);
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {
    const name = document.querySelector('.contact-name').value;
    const email = document.querySelector('.contact-email').value;
    const message = document.querySelector('.contact-message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields (Name, Email, Message)");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const titleInput = document.getElementById("title");
    const messageInput = document.getElementById("message");

    nameInput.value = "";
    emailInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
    return true; 
}