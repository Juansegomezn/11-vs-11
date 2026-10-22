export type PlayerSide = "home" | "away";
export type PlayerController = "human" | "ai";
export type GameMode = "human-vs-human" | "human-vs-ai" | "ai-vs-ai";
export type EvaluationMode = "manual" | "ai";

export type Position =
  | "GK"
  | "RB"
  | "CB"
  | "LB"
  | "RWB"
  | "LWB"
  | "CDM"
  | "CM"
  | "CAM"
  | "RM"
  | "LM"
  | "RW"
  | "LW"
  | "ST"
  | "CF";

export type Continent = "america" | "europe";

export interface Club {
  id: string;
  name: string;
  slug: string;
  type: "national_team" | "club";
  continent: Continent;
  logoUrl: string | null;
}

export interface Player {
  id: string;
  name: string;
  clubId: string;
  position: Position;
  imageUrl: string | null;
}

export interface FormationSlot {
  id: string;
  position: Position;
  /** Coordenadas en % sobre la cancha (0-100) */
  x: number;
  y: number;
}

export interface Formation {
  id: string;
  label: string;
  slots: FormationSlot[];
}

export interface Pick {
  slotId: string;
  player: Player;
  fromClubId: string;
  pickedAt: string;
}

export interface TeamState {
  side: PlayerSide;
  name: string;
  controller: PlayerController;
  formationId: string;
  picks: Record<string, Pick>;
}

export type GamePhase = "setup" | "drafting" | "verdict" | "finished";

export interface GameState {
  id: string;
  mode: GameMode;
  evaluation: EvaluationMode;
  phase: GamePhase;
  currentTurn: PlayerSide;
  remainingClubIds: string[];
  currentClubId: string | null;
  home: TeamState;
  away: TeamState;
}

export interface DuelResult {
  slotId: string;
  winner: PlayerSide | "draw";
  reasoning: string;
}

export interface Verdict {
  duels: DuelResult[];
  combinedEleven: Record<string, { side: PlayerSide; playerId: string }>;
  globalWinner: PlayerSide | "draw";
  summary: string;
}
