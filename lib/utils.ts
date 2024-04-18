import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { consonants } from "@/constants";

export const vowels = [
  "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "अं", "अः", "अ", "आ"]


function shuffle(array: Array<unknown>) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

interface challengeType {
  order: number;
  lessonId: number;
  type: "SELECT" | "ASSIST";
  audioSrc: string | null;
  letter: string;
  question: string;
}

interface lessonType {
  id: number;
  title: string;
  order: number;
  unitId: number;
}

export const generateChallenges = (lesson: lessonType, unit_no: number) => {
  const challenges: challengeType[] = [];
  let order_no = 1;
  if (unit_no === 1) {
    for (let i = (lesson.order - 1) * 3; i < lesson.order * 3 && i < vowels.length; i++) {
      challenges.push({
        lessonId: lesson.id,
        question: `Select the correct sound of the letter ${vowels[i]}`,
        type: "SELECT",
        audioSrc: '',
        order: order_no,
        letter: vowels[i]
      });
      order_no++;
    }

    for (let i = (lesson.order - 1) * 3; i < lesson.order * 3 && i < vowels.length; i++) {
      challenges.push({
        lessonId: lesson.id,
        question: `Select the correct letter of the sound given`,
        audioSrc: `/sounds/${vowels[i]}.mp3`,
        type: "ASSIST",
        order: order_no,
        letter: vowels[i]
      });
      order_no++;
    }
  }
  else if (unit_no === 2) {
    for (let i = (lesson.order - 1) * 5; i < lesson.order * 5 && i < consonants.length; i++) {
      challenges.push({
        lessonId: lesson.id,
        question: `Select the correct sound of the letter ${consonants[i]}`,
        type: "SELECT",
        audioSrc: '',
        order: order_no,
        letter: consonants[i]
      });
      order_no++;
    }

    for (let i = (lesson.order - 1) * 5; i < lesson.order * 5 && i < consonants.length; i++) {
      challenges.push({
        lessonId: lesson.id,
        question: `Select the correct letter of the sound given`,
        audioSrc: `/sounds/${consonants[i]}.mp3`,
        type: "ASSIST",
        order: order_no,
        letter: consonants[i]
      });
      order_no++;
    }
  }

  return challenges;
}

interface optionType {
  challengeId: number;
  correct: boolean;
  text: string;
  imageSrc: string;
  audioSrc: string;
}

interface challengeType2 {
  id: number
  order: number;
  lessonId: number;
  type: "SELECT" | "ASSIST";
  audioSrc: string | null;
  letter: string;
  question: string;
}

export const generateOptions = (challenge: challengeType2, lesson_no: number, unit_no: number) => {
  const options: Array<string> = [];
  let optionsDocs: optionType[] = [];
  if (unit_no === 1) {
    for (let i = (lesson_no - 1) * 3; i < lesson_no * 3 && i < vowels.length; i++) {
      options.push(vowels[i])
    }

    if (challenge.type === "ASSIST") {
      optionsDocs = options.map((option) => {
        return {
          challengeId: challenge.id,
          correct: option === challenge.letter,
          text: option,
          imageSrc: `/images/${option}.png`,
          audioSrc: ''
        }
      })
    }
    else {
      optionsDocs = options.map((option) => {
        return {
          challengeId: challenge.id,
          correct: challenge.letter === option,
          text: option,
          audioSrc: `/sounds/${option}.mp3`,
          imageSrc: ''
        }
      })
    }
  }

  if (unit_no === 2) {
    for (let i = (lesson_no - 1) * 5; i < lesson_no * 5 && i < consonants.length; i++) {
      options.push(consonants[i])
    }

    if (challenge.type === "ASSIST") {
      optionsDocs = options.map((option) => {
        return {
          challengeId: challenge.id,
          correct: option === challenge.letter,
          text: option,
          imageSrc: `/images/${option}.png`,
          audioSrc: ''
        }
      })
    }
    else {
      optionsDocs = options.map((option) => {
        return {
          challengeId: challenge.id,
          correct: challenge.letter === option,
          text: option,
          audioSrc: `/sounds/${option}.mp3`,
          imageSrc: ''
        }
      })
    }
  }

  shuffle(optionsDocs);
  return optionsDocs;
}