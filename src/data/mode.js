const scienceImg = new URL("../images/science-logo.webp", import.meta.url).href;

const commImg = new URL("../images/commercial-logo.webp", import.meta.url).href;

const artsImg = new URL("../images/arts-logo.webp", import.meta.url).href;

export const streamList = [
    {
        subjectName: "Exam Mode",
        subjectDescription: "Get past exam papers in science subjects for practice and prepare yourself to take the public exam.",
        subjectImage: scienceImg,
        subjectLink: "#/page4",
        cardColor: "lightgray"
    },
    {
        subjectName: "Commercial",
        subjectDescription: "Get past exam papers in commercial subjects for practice and prepare yourself to take the public exam.",
        subjectImage: commImg,
        subjectLink: "#/page5",
        cardColor: "lightblue"
    },
       {
        subjectName: "Arts",
        subjectDescription: "Get past exam papers in art subjects for practice and prepare yourself to take the public exam",
        subjectImage: artsImg,
        subjectLink: "#/page6",
        cardColor: "lightgreen"
    }
]