import { API_KEY } from "./config.mjs";

export async function fetchQuestions(subject, year, type) {
  try {
    const baseUrl = "https://questions.aloc.com.ng/api/v2/q";
    const apiLink = `${baseUrl}?subject=${encodeURIComponent(subject)}&year=${year}&type=${type}`;

    const response = await fetch(apiLink, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "AccessToken": API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${subject} questions. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("❌ Error fetching ALOC questions:", error);
    return null;
  }
}
