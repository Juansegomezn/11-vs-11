import "server-only";
import Groq from "groq-sdk";
import { getServerEnv } from "@/lib/env";

const { GROQ_API_KEY, GROQ_MODEL } = getServerEnv();

export const groq = new Groq({ apiKey: GROQ_API_KEY });
export const GROQ_DEFAULT_MODEL = GROQ_MODEL;
