import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createSpeech({
      model: "tts-1",
      input: text,
      voice: "alloy", // You can explore other voices
      response_format: "mp3",
    });

    const audio = response.data;

    res.setHeader("Content-Disposition", "attachment; filename=speech.mp3");
    res.setHeader("Content-Type", "audio/mpeg");
    res.send(audio);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
}