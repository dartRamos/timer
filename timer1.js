// gets command line argument
const args = process.argv.slice(2);

const alarms = [];

args.forEach(arg => {
  const num = Number(arg); // convers argument into  a number

  if (!isNaN(num) && num > 0) { // checks if its a number and is positive. If so pushes it into alarms array
    alarms.push(num);
  }
});

if (alarms.length === 0) { // if nothing is pushed into alarms the program stops
  process.exit();
}

alarms.forEach((timer) => {
  setTimeout(() => {
    process.stdout.write("\x07"); // sets a sounds for timer
    console.log(`Alarm for ${timer} seconds!`);
  }, timer * 1000); // converts seconds into milliseconds
});

console.log(`These are the alarms in seconds: ${alarms}`);