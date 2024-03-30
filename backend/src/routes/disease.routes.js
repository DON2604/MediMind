import express from "express";
import { Router } from "express";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


const MODEL_NAME = "gemini-1.0-pro-vision-latest";

async function generateContent(imageData) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.95,
    topK: 32,
    topP: 1,
    maxOutputTokens: 4096,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const parts = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: imageData,
      },
    },
    { text: "the following parameters:Patient's age:26 and gender: Male .Duration of the skin condition: 2 weeks .Associated symptoms: heavy itching .Relevant medical history: N.A  .Current medications/treatments: N.A. AI Response: The image analysis indicates a possible skin condition of [specific skin condition], considering the patient's profile and symptoms. This condition is typically characterized by [detailed description of symptoms and appearance].Recommended Treatment:Topical treatment: [Specify AI-generated topical creams, ointments, or solutions in details].Oral medication: [Specify AI-generated oral medications in details, if applicable].Lifestyle changes: [AI-generated recommendations for lifestyle adjustments, such as diet or hygiene practices in details].Follow-up care: [AI-generated advice on follow-up appointments or monitoring].Please note that a precise diagnosis and treatment plan should be provided by a healthcare professional after a thorough examination." },
  ];

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });

  const response = result.response;
  return response.text();
}
const router= Router();

router.post("/disease", async (req, res) => {
  try {
    if (!req.body.imageData) {
      throw new Error("Image data is required.");
    }

    const generatedText = await generateContent(req.body.imageData);
    res.status(200).json({ generatedText });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
