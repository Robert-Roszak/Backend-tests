module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';
  if (fullName.includes('.') || fullName.includes(';') || fullName.includes(',') || fullName.includes(':')) return 'Error';
  const [ firstName, lastName, other ] = fullName.split(' ');
  if (firstName === undefined || lastName === undefined) return 'Error';
  if (other) return 'Error';
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
};
