// Helpers - Utils

const COsalary = colombia.map(
  (person) => person.salary
);

const COsalarySorted = COsalary.sort(
  (a, b) => a - b
);

const calc_median = ( list ) => {
  const half = Math.floor(list.length / 2);
  if (list.length % 2) {
    return list[half];
  } else {
    return (list[half - 1] + list[half]) / 2.0;
  }
};

// Calculate the median salary of the Colombian people

const calc_mean = ( list ) => {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum / list.length;
};

console.log(
    calc_median(COsalarySorted),
)

// General median
const genralCO_median = calc_median(COsalarySorted);

// Median of the top 10% of Colombian people
const top10CO_median = calc_median(
  COsalarySorted.slice(
    0,
    Math.floor(COsalarySorted.length * 0.1)
  )
);

console.log(
    top10CO_median,
)