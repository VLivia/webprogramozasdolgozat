function fullStack(frontStr, backStr) {
  const frontEnd = frontStr.split(';').map(name => name.trim());
  const backEnd = backStr.split(';').map(name => name.trim());
  return frontEnd.filter(name => backEnd.includes(name));
}
