// Trong file pages/api/analyze-image.js

import { NextApiRequest, NextApiResponse } from 'next';
type ResponseData = {
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
  // Chỉ cho phép phương thức POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Lấy dữ liệu hình ảnh từ body yêu cầu, giả sử nó đã được mã hóa base64
    const { imageBase64 } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ message: 'No image data provided' });
    }

    // Gọi OpenAI API với hình ảnh được mã hóa base64
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPEN_AI}`,
      },
      body: JSON.stringify({
        // Tham số phụ thuộc vào cách OpenAI API xử lý hình ảnh
        image: imageBase64,
      }),
    });

    if (!openAIResponse.ok) {
      throw new Error('Failed to analyze the image');
    }

    const result = await openAIResponse.json();

    // Trả về kết quả
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: "error.message" });
  }
}