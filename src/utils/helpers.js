const capitaliseFirst = (word) => word ?
  `${word.substring(0, 1).toUpperCase()}${word.substring(1)}` :
  word;

const formatLocation = (location) => ({
  label: location.split('-').map((word) => word === 'and' ? word :
    capitaliseFirst(word)).join(' '),
  value: location,
});

const filterYears = (events, year) => events?.filter((event) =>
  event.date.includes(year));

export {
  formatLocation,
  filterYears,
};
