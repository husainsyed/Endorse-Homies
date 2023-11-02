// Get the message button
var messageClass = document.getElementsByClassName("entry-point profile-action-compose-option")[1];
var messageBtn = messageClass.getElementsByTagName("button")[0];

// Click the message button
messageBtn.click();

// Wait for 2 seconds after clicking the message button
setTimeout(function() {
    // Get the first name of the profile
    var firstName = document.getElementsByClassName("text-heading-xlarge inline t-24 v-align-middle break-words")[0].textContent.split(" ")[0];

    // Define the message template
    var template = `Hey ${firstName},

I noticed that you're in Software Industry. I'm currently working on a startup through the Antler Founder Program and we're in the user research phase, looking for areas to add value with our software. Would you be down for a 30-minute call to discuss your work and any challenges you're facing?`;

    // Get the text area
    var parentText = document.getElementsByClassName("msg-form__contenteditable t-14 t-black--light t-normal flex-grow-1 full-height notranslate")[0];
    var actualText = parentText.getElementsByTagName("p")[0];

    // Set the text area value to the template
    actualText.textContent = template;
}, 2000);
