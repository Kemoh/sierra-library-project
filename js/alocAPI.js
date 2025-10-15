const ALOC_BASE_URL = "https://questions.aloc.com.ng/api/v2/q"; // replace with correct Aloc API base URL
const API_KEY = "QB-7179cf05a38ea9610f3c"; // store in environment or local config if possible

export async function fetchQuestions(subject, year, type) {
  const url = `${ALOC_BASE_URL}?subject=${subject}&year=${year}&type=${type}`;
  const response = await fetch(url, {
    headers: { "Authorization": `Bearer ${API_KEY}` }
  });
  if (!response.ok) throw new Error("Failed to fetch questions");
  const data = await response.json();
  return data.data || data;
}