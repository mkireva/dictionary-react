import React from "react";
import "./Entries.css";
import type { Entry, Meaning, Phonetic } from "../../types";

type Props = {
  entries: Entry[];
};

const Meanings = ({ meanings }: { meanings: Meaning[] }) => (
  <>
    {meanings
      .flatMap((meaning) => meaning.definitions)
      .flatMap((definition) => definition.definition)
      .map((definition, id) => (
        <p key={`definition.${id}`}>{definition}</p>
      ))}
  </>
);

const Phonetics = ({ phonetics }: { phonetics: Phonetic[] }) => (
  <>
    {phonetics
      .map((phonetic) => phonetic.audio)
      .filter((audio) => audio !== "")
      .map((audio, id) => (
        <audio key={`audio.${id}`} controls src={audio}>
          {audio}
        </audio>
      ))}
  </>
);

const Entries = ({ entries }: Props) => {
  return (
    <div className="meanings">
      {entries.length === 0 ? (
        <span className="Subtitle">Start by typing a word in Search</span>
      ) : (
        entries.map((entry, id) => {
          return (
            <>
              <Phonetics key={`phonetics.${id}`} phonetics={entry.phonetics} />
              <Meanings key={`meanings.${id}`} meanings={entry.meanings} />
            </>
          );
        })
      )}
    </div>
  );
};

export default Entries;
