export const ExtractTimeAndContent = (text: string): [string, string] => {
  const [charNumberText] = text.match(/\+\d* chars/g) || [''];
  const [time] = charNumberText.split(' ') || [];
  const [content] = text.split(/\[\+\d* chars\]/g) || [''];
  return [content, time];
};
