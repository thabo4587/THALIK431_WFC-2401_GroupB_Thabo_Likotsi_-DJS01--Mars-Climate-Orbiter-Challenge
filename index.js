/**Some documentation
 * Calculates new velocity.
 * @param {number} initialVelocity - Initial velocity (km/h).
 * @param {number} acceleration - Acceleration (m/s^2).
 * @param {number} time - Time in seconds.
 * @returns {number} New velocity in km/h.
 */
const calcNewVel = ({ initialVelocity, acceleration, time }) => {
  // Check if input parameters are numbers using an if statement and then throwing an arror
  if (typeof initialVelocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid input. Parameters must be numbers.');
  }

  
  // This line of code converts initial velocity from km/h to m/s
  const initialVelocityInMps = initialVelocity / 3.6;

  // Calculate new velocity using the formula: final velocity = initial velocity + (acceleration * time) which is one of the four equations of motion for horizontal and vertical linear motion
  const newVelocity = initialVelocityInMps + acceleration * time;

  // Convert new velocity back to km/h
  const newVelocityInKmPerHour = newVelocity * 3.6;

  return newVelocityInKmPerHour;
};

// Given Parameters
const initialVelocity = 10000; // initial velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const initialDistance = 0; // initial distance (km)
const initialFuel = 5000; // initial fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// This line calculates new velocity using the calcNewVel function and also using object destructuring
const newVelocity = calcNewVel({ initialVelocity, acceleration, time });

// Calculate new distance using the formula: final distance = initial distance + (initial velocity * (time in hours))
const newDistance = initialDistance + initialVelocity * (time / 3600); // convert time from seconds to hours

// Calculate remaining fuel using the formula: remaining fuel = initial fuel - (fuel burn rate * time)
const remainingFuel = initialFuel - fuelBurnRate * time;

// Output the results
console.log(`New Velocity: Approximately ${newVelocity.toFixed(0)} km/h after correction.`);
console.log(`New Distance: Approximately ${newDistance.toFixed(0)} km after correction.`);
console.log(`Remaining Fuel: Approximately ${remainingFuel.toFixed(0)} kg after correction.`);
