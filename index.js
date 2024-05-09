// Given Parameters
const initialVelocity = 10000; // initial velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const initialDistance = 0; // initial distance (km)
const initialFuel = 5000; // initial fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity
const calcNewVel = ({ initialVelocity, acceleration, time }) => {
  if (typeof initialVelocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid input. Parameters must be numbers.');
  }

  // Convert initial velocity from km/h to m/s
  const initialVelocityInMps = initialVelocity / 3.6;

  // Calculate new velocity using equations of motion
  const newVelocity = initialVelocityInMps + acceleration * time;

  // Convert new velocity back to km/h
  const newVelocityInKmPerHour = newVelocity * 3.6;

  return newVelocityInKmPerHour;
};

// Calculate new velocity
const newVelocity = calcNewVel({ initialVelocity, acceleration, time });

// Calculate new distance
const newDistance = initialDistance + initialVelocity * (time / 3600); // convert time from seconds to hours

// Calculate remaining fuel
const remainingFuel = initialFuel - fuelBurnRate * time;

console.log(`New Velocity: Approximately ${newVelocity.toFixed(0)} km/h after correction.`);
console.log(`New Distance: Approximately ${newDistance.toFixed(0)} km after correction.`);
console.log(`Remaining Fuel: Approximately ${remainingFuel.toFixed(0)} kg after correction.`);
