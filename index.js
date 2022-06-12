// Code your solution in this file!
const feet = 264;

const distanceFromHqInBlocks = (blocks) => {
  return Math.abs(blocks - 42);
};

const distanceFromHqInFeet = (distance) => {
  return distanceFromHqInBlocks(distance) * feet;
};

const distanceTravelledInFeet = (start, destination) => {
  let distance = Math.abs(start - destination) * feet;
  return destination < distanceFromHqInBlocks(start)
    ? distanceFromHqInFeet(destination)
    : distance;
};

const calculatesFarePrice = (start, destination) => {
  let distanceTravelled = distanceTravelledInFeet(start, destination);
  if (distanceTravelled < 400) {
    return 0;
  } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
    return (distanceTravelled - 400) * 0.02;
  } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
};

