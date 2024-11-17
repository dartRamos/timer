// gets command line argument
const args = process.argv.slice(2);

const alarms = [];

args.forEach(arg => {
  const num = Number(arg); // convers argument into  a number

  if (!isNaN(num) && num > 0) {
    alarms.push(num)
  };
});

if(alarms.length === 0) {
  process.exit();
};

alarms.forEach((timer) => {
  setTimeout(() => {
    process.stdout.write("\x07");
    console.log(`Alarm set for ${timer} seconds!`)
  }, timer * 1000);
});

console.log(`These are the alarms in seconds: ${alarms}`)


// console.log("Alarm set:", args);







// process.stdout.write("\x07");