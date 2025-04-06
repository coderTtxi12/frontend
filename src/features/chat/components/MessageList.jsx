import React from "react";
import { Box, Paper } from "@mui/material";
import FormattedMessage from "./FormattedMessage";

const MessageList = ({ messages, isLoading }) => {
  return (
    <Box
      sx={{
        flex: 1,
        overflow: "auto",
        p: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      {messages.map((message) => (
        <Box
          key={message.id}
          sx={{
            display: "flex",
            justifyContent:
              message.sender === "user" ? "flex-end" : "flex-start",
            mb: 2,
          }}
        >
          <Paper
            sx={{
              p: 2,
              backgroundColor:
                message.sender === "user" ? "primary.main" : "white",
              color: message.sender === "user" ? "white" : "text.primary",
              maxWidth: "70%",
              borderRadius: 2,
            }}
          >
            <FormattedMessage text={message.text} />
          </Paper>
        </Box>
      ))}
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mb: 2,
          }}
        >
          <Paper
            sx={{
              p: 2,
              backgroundColor: "white",
              maxWidth: "70%",
              borderRadius: 2,
            }}
          >
            <FormattedMessage isLoading={true} text="" />
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default MessageList;
