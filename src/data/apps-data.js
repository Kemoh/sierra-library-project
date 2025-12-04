  // Use new URL() for Parcel to handle WebP images
  const exampalImg = new URL("../images/exampal-logo.webp", import.meta.url).href;
  
  const liblocateImg = new URL("../images/liblocate-logo.webp", import.meta.url).href;

export const appslist = [
    {
        appName: "ExamPal",
        appImage: exampalImg,
        cardColor: "lightgray",
        streamLink: "/exampal",
        appDescription: "Prepare for public exams by practicing past papers and tracking your progress effectively."
    },
    {
        appName: "LibLocate",
        appImage: liblocateImg,
        cardColor: "lightblue",
        streamLink: "/liblocate",
        appDescription: "Find all Sierra Library outlets across the country. View locations, details, and directions — all in one app."
    }
]