export type License = {
  name: string;
  url: string;
};

export type Definition = {
  definition: string;
  synonyms: unknown[];
  antonyms: unknown[];
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: unknown[];
  antonyms: unknown[];
};

export type Phonetic = {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
};

export type Entry = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
};
