import React, { useState } from "react";
import { Paper, Box, Container } from "@mui/material";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { generateResponse } from "../services/chatService";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to our chat. How can I help you today?",
      sender: "bot",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text) => {
    try {
      // Add user message
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, text, sender: "user" },
      ]);

      setIsLoading(true);

      // Get bot response using Axios
      const response = await generateResponse(text);

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: response.answer || "I couldn't understand that.",
          sender: "bot",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "Sorry, there was an error processing your message.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "95%",
          maxWidth: "1200px",
          height: "85vh",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff",
          }}
        >
          <ChatHeader title="Chat Assistant" />
          <MessageList messages={messages} isLoading={isLoading} />
          <ChatInput onSend={handleSendMessage} />
        </Box>
      </Paper>
    </Container>
  );
};

export default ChatWindow;
