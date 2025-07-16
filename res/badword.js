// badwordFilter.js

export function censorBadWords(text) {

  function generateRegex(word) {
    const pattern = word
      .split('')
      .map(char => `${char}[\\W_\\s\\d]*`) // allow symbols and space between letters
      .join('');
    return new RegExp(pattern, 'gi');
  }

  function censorWord(word) {
    return word[0] + '*'.repeat(word.length - 1);
  }

  let flagged = [];
  let censoredText = text;

  for (let word of badWords) {
    const regex = generateRegex(word);

    censoredText = censoredText.replace(regex, (match) => {
      flagged.push(word);
      const clean = match.replace(/[\W_0-9\s]/g, '');
      return censorWord(clean);
    });
  }

  return {
    original: text,
    censored: censoredText,
    found: [...new Set(flagged)]
  };
}
