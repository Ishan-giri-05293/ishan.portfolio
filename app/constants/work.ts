import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2020',
    title: 'BBS School',
    subtitle: 'Schooling',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023 – 27',
    title: 'GL Bajaj',
    subtitle: 'B.Tech in AI & ML',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'AICTE EduSkills',
    subtitle: 'AI/ML Virtual Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2026',
    title: 'Ghatnaein News',
    subtitle: 'Freelance Web Developer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2027',
    title: '?',
    subtitle: '???',
    position: 'right',
  }
]