// badword.js
var badWords = [];
fetch('https://raw.githubusercontent.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/refs/heads/master/en')
  .then(res => res.text())
  .then(text => {badWords = text.split('\n').map(line => line.trim()).filter(Boolean)});

function censorBadWords(text) {
  function generateRegex(word) {
    const pattern = word
      .split('')
      .map(char => `${char}[\\W_\\s\\d]*`)
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
