
//  the setInterval runs a function a number of times at intervals
let timing = setInterval(() =>alert("Hi there"), 3000);

// the clearInterval stops the interval function
console.log(alert);
setTimeout((setInterval) => { clearInterval(timing); alert('stop alert'); }, 6000);