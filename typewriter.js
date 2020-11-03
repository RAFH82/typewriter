const sentance = "hello there from Lighthouse Labs!";

let time = 0;
let delay = 150;

for (let char of sentance) {
  
  setTimeout(() => {
    process.stdout.write(char);
  }, time);

  time += delay;
};

setTimeout(()=> {
  process.stdout.write("\n")
}, time)