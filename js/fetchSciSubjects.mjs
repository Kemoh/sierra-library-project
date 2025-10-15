import { API_KEY } from "./config.mjs";

// fetchSciSubjects.mjs
export async function fetchScienceQuestions(subject) {
  const baseURL = "https://questions.aloc.com.ng/api/v2/q";
  const allQuestions = [];

  // Subject name map (convert your display name to API-recognized form)
  const subjectMap = {
    "english language": "english",
    "mathematics": "mathematics",
    "biology": "biology",
    "physics": "physics",
    "chemistry": "chemistry",
  };

  // Normalize the subject name
  const apiSubject = subjectMap[subject.toLowerCase()] || subject.toLowerCase();
  

  try {
    for (let i = 0; i < 5; i++) {
      const url = `${baseURL}?subject=${encodeURIComponent(apiSubject)}`;

      const res = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          AccessToken: API_KEY,
        },
        method: "GET",
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      if (data?.data?.question) {
        allQuestions.push({
          question: data.data.question,
          options: [
            data.data.option.a,
            data.data.option.b,
            data.data.option.c,
            data.data.option.d,
          ],
          answer: data.data.answer,
          subject: data.subject,
        });
      }
    }
    // Set localStorage
    localStorage.setItem("questions", JSON.stringify(allQuestions));
    localStorage.setItem("subject", subject);
    return true;
  } catch (err) {
    console.error("Fetch error:", err);
    alert(`Failed to load ${subject} questions.`);
    return false;
  }
}
