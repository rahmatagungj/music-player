import { v4 as uuidv4 } from "uuid";

function Pop() {
  return [
    {
      name: "How You Like That",
      cover: "https://pbs.twimg.com/media/CvAMEDzWEAAs2Ml.jpg",
      artist: "BlackPink",
      audio: "https://i.top4top.io/m_1915q7wwa1.mp3",
      color: ["#CE586D", "#4BA5C1"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "ice Cream (with Selena Gomez)",
      cover:
        "https://i.pinimg.com/originals/db/e3/3f/dbe33fc7641a88349814e695dfbc1a12.png",
      artist: "BlankPink",
      audio: "https://j.top4top.io/m_1915rg6ho2.mp3",
      color: ["#E0798C", "#EC768D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "LoveSick Girls",
      cover:
        "https://i.pinimg.com/originals/b7/8b/9b/b78b9b03ad8f13f3d409859f54a5e61f.png",
      artist: "BlackPink",
      audio: "https://k.top4top.io/m_1915vsdt93.mp3",
      color: ["#F0A4BD", "#2bf3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default Pop;
