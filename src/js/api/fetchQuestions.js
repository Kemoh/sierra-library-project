// ALOC API
const apiKey = process.env.PARCEL_API_KEY;
console.log("API key loaded:", apiKey);

export async function fetchQuestionV2({ subject, year = null, type = null }) {
  const baseURL = "https://questions.aloc.com.ng/api/v2/q";
  const allQuestions = [];

  try {
    // Fetch multiple questions (e.g. 5)
    for (let i = 0; i < 5; i++) {
      const params = new URLSearchParams();
      if (subject) params.append("subject", subject);
      if (year) params.append("year", year);
      if (type) params.append("type", type);

      const url = `${baseURL}?${params.toString()}`;

      const res = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          AccessToken: apiKey,
        },
        method: "GET",
      });

      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

      const data = await res.json();
      console.log("Raw API response:", data);

      // Handle both shapes: single object or array
      if (data?.data) {
        if (Array.isArray(data.data)) {
          // Push each question in the array
          data.data.forEach(q => allQuestions.push(q));
        } else if (typeof data.data === "object") {
          // Push single question object
          allQuestions.push(data.data);
        }
      }
    }

    return allQuestions;
  } catch (err) {
    console.error("Fetch error:", err);
    throw err;
  }
}
