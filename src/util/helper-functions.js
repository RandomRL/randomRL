// not my code, source: http://www.robweir.com/blog/2010/02/microsoft-random-browser-ballot.html
export const shuffleArray = arr => arr
.map(a => [Math.random(), a])
.sort((a, b) => a[0] - b[0])
.map(a => a[1]);

// get random item from array
export const getRandom = (array) => {  
    const length = array.length;
    const randomIndex = Math.floor(Math.random() * length);
    return array[randomIndex];
  };

export const getTeamString = (array) => {
  //array in argument is not really an array...for some reason so needs this to convert it
  const convertedArray = Array.prototype.slice.call(array); 
  return convertedArray.join(' + ');
};

export const getClosest = (value) => {
  console.log((Math.round(value / 10) * 10));
  return (Math.round(value / 10) * 10);
};

export const sliderTooltips = (value) => {
  switch(value) {
    case 0: return 'Off';
    case 1: return 'Always On';
    default: return `${value * 100}%`;
  }  
}