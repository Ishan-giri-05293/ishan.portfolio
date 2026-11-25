import { Project } from "../types";

// TODO: Move this to API
export const PROJECTS: Project[] = [
  {
    title: 'Facial Expression',
    date: 'May 2025',
    subtext: 'A real-time facial emotion recognition web app. A CNN trained with TensorFlow reads webcam frames via OpenCV and a Flask backend serves the predictions.',
    url: 'https://github.com/Ishan-giri-05293/facial-expression-recognition-Web-App',
  },
  {
    // TODO: fill in date, description and link once the game is ready
    title: 'Dino Chrome Game',
    date: '',
    subtext: '',
  },
  {
    title: 'Portfolio',
    date: 'Apr 2026',
    subtext: 'The site you are scrolling through. A 3D portfolio built with Next.js, React Three Fiber, Drei and GSAP, customised from an open-source design.',
    url: 'https://github.com/Ishan-giri-05293/ishan.portfolio',
  },
  {
    title: 'RoomRota',
    date: 'Jun 2026',
    subtext: 'A platform that allows users to create and manage room rotas for shared living spaces, ensuring fair distribution of chores and responsibilities.',
    url: 'https://room-rota-jade.vercel.app/',
  },
  {
    title: 'EvoFit Gym',
    date: 'Jul 2026',
    subtext: 'A website for EvoFit Gym built with React, Vite and TypeScript, with membership plans, trainer profiles, member transformations and a book-a-free-trial page.',
    url: 'https://evo-fit-gym.vercel.app',
  },
  {
    title: 'AquaRoute',
    date: 'Oct 2026',
    subtext: 'A water-can delivery platform for customers and delivery partners. A FastAPI backend plans routes with nearest-neighbour and 2-opt optimisation, with a React and Firebase frontend.',
  },
  {
    title: 'Ghatnaein',
    date: 'Nov 2026',
    subtext: 'A Hindi digital news platform covering 9 states, with video, a daily e-paper, an online reporter onboarding flow, and separate member and admin portals.',
    url: 'https://ghatnaein.com',
  },
];
