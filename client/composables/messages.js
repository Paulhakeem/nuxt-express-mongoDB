import { text } from "@fortawesome/fontawesome-svg-core";

export default function () {
  // send message
  const createMessage = async (text) => {
    try {
      const data = await $fetch("http://localhost:5000/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { text },
      });

      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const inbox = ref(null);
  //   get Messages
  const showMessages = async () => {
    try {
      const data = await $fetch("http://localhost:5000/api/messages");
      if (data) {
        inbox.value = data.messages;
        console.log(data.messages);
        
        return data.messages;

      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //   delete Message
  const deleteMessages = async () => {
    try {
      const data = await $fetch(`http://localhost:5000/api/message/${id}`);
      if (data) {
        console.log("message deleted");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return { createMessage, showMessages, deleteMessages, inbox };
}
