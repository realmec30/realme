const projectId = 'led-on-off-67957'; // Replace with your Dialogflow project ID
const privateKey = '62fd31572f48148fcf67f3da7b225db74af083fe'; // Replace with your private key from the JSON file
const clientEmail = 's.info3@gmail.com'; // Replace with your service account email

// Initialize Dialogflow client
const { SessionsClient } = require('@google-cloud/dialogflow');
const dialogflowClient = new SessionsClient({
  projectId,
  credentials: {
    private_key: privateKey,
    client_email: clientEmail,
  },
});

const sessionId = Math.random().toString(36).substring(7); // Generate a unique session ID

async function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (!userInput.trim()) return;

  // Display user message
  appendMessage(userInput, 'user');

  // Clear input field
  document.getElementById('user-input').value = '';

  // Call Dialogflow
  const sessionPath = dialogflowClient.projectAgentSessionPath(projectId, sessionId);
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: userInput,
        languageCode: 'en-US',
      },
    },
  };

  try {
    const responses = await dialogflowClient.detectIntent(request);
    const result = responses[0].queryResult;
    const botResponse = result.fulfillmentText;

    // Display bot response
    appendMessage(botResponse, 'bot');
  } catch (error) {
    console.error('Error communicating with Dialogflow:', error);
    appendMessage('Sorry, I encountered an error.', 'bot');
  }
}

function appendMessage(message, sender) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}