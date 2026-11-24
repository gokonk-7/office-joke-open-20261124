// Make the AI Judge Laugh: the Office Joke Open
// Writes the entry — one line of office comedy, at most 200 characters —
// to /output/entry.txt, where the sealed scorer gates it and the judge
// reads it two at a time against the other entries.
//
// The joke was picked by testing 8 fresh variants against the published
// rubric (office life, earned turn in the last few words, specific detail,
// fresh angle, tight in one pass). Winner: the Do Not Disturb loop — the
// tool meant to protect focus becomes the subject of a meeting itself.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I put 'Do Not Disturb' on my calendar and my manager booked a meeting called 'Quick question about your Do Not Disturb'.";

// Self-check the same gate the sealed scorer applies: UTF-8 text of
// 1 to 200 characters, not only white space. Fail loudly instead of
// writing an entry the gate would refuse.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote /output/entry.txt (${JOKE.length} characters)`);
