import { useState } from "react";
import Chatbot from "../components/Chatbot";

export default function Home() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/text-to-speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "speech.mp3");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      } else {
        console.error("Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Text to Speech</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="5"
            cols="40"
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Converting..." : "Convert to Speech"}
        </button>
      </form>
      <Chatbot />
    </div>
  );
}
