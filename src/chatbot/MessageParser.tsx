import React from "react";

interface MessageParserProps {
  children: React.ReactNode;
  actions: any;
}

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: any) => {
    if (message.includes("hello")) {
      actions.handleHello();
    }
    if (message.includes("dog")) {
      actions.handleDog();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
