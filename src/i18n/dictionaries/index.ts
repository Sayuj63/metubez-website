import type { Locale } from "../types";
import type { Dictionary } from "./en";
import { en } from "./en";
import { hi } from "./hi";
import { mr } from "./mr";
import { gu } from "./gu";
import { ta } from "./ta";
import { te } from "./te";
import { kn } from "./kn";
import { ml } from "./ml";
import { bn } from "./bn";
import { pa } from "./pa";
import { or } from "./or";
import { as } from "./as";
import { ur } from "./ur";
import { bho } from "./bho";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  hi,
  mr,
  gu,
  ta,
  te,
  kn,
  ml,
  bn,
  pa,
  or,
  as,
  ur,
  bho,
};
