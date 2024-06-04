export function toLowerKebab(str: string) {
  return str.trim().toLocaleLowerCase().replace(/ /g, '-');
}
