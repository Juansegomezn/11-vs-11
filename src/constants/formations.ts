import type { Formation } from "@/types/game";

export const DEFAULT_FORMATION_ID = "4-3-3";

export const FORMATIONS: Formation[] = [
  {
    id: "4-3-3",
    label: "4-3-3",
    slots: [
      { id: "GK", position: "GK", x: 50, y: 92 },
      { id: "LB", position: "LB", x: 15, y: 72 },
      { id: "CB-1", position: "CB", x: 38, y: 76 },
      { id: "CB-2", position: "CB", x: 62, y: 76 },
      { id: "RB", position: "RB", x: 85, y: 72 },
      { id: "CM-1", position: "CM", x: 28, y: 52 },
      { id: "CM-2", position: "CM", x: 50, y: 56 },
      { id: "CM-3", position: "CM", x: 72, y: 52 },
      { id: "LW", position: "LW", x: 18, y: 24 },
      { id: "ST", position: "ST", x: 50, y: 18 },
      { id: "RW", position: "RW", x: 82, y: 24 },
    ],
  },
  // Otras formaciones (4-4-2, 3-5-2...) se añadirán en el paso del componente de cancha
];
