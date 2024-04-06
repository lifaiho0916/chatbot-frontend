import {
  createChatBotMessage,
  createClientMessage,
  createCustomMessage,
} from "react-chatbot-kit";
import DogPicture from "./DogPicture";

const botName = "Rasa ChatBot";

const message = createChatBotMessage(`Hello world`, {});
const messageWithProperties = createChatBotMessage("Hello world!", {
  widget: "my-widget",
  payload: {}, // any value I want to send to the given widget or message
  delay: 1000,
});
const messageclient = createClientMessage("Hello world!", {});
const custom = createCustomMessage("value to input", "custom", {});

const config = {
  initialMessages: [message, messageWithProperties, messageclient, custom],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props: any) => <DogPicture {...props} />,
    },
  ],
  customComponents: {
    //  // Replaces the default header
    //  header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>
    //  // Replaces the default bot avatar
    //  botAvatar: (props) => <MyAvatar {...props} />,
    //  // Replaces the default bot chat message container
    //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    //  // Replaces the default user icon
    //  userAvatar: (props) => <MyCustomAvatar {...props} />,
    //  // Replaces the default user chat message
    //  userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
  },
};

export default config;
