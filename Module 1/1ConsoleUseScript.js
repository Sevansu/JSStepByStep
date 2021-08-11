// USe ctrl+shift+i to view console in chrome
console.log("%cLogs in Green","color: green; font-size: 0.66rem;");
console.log("%cLogs in : %cGreen %cRed","color: #ff5500; font-size: 1rem","color: green; font-size: 1rem;","color: red; font-size: 1rem;");

console.info("Information");

console.debug("Debug");

console.warn("warns");

console.error("errors");

let infor = [["Seva"], ["Software Developer"], ["Javascript,Java"]]
console.table(infor)

console.group()
    console.log("Test 1st message")
    console.group("inform")
        console.log("Seva")
        console.log("Engineer")
    console.groupEnd()
console.groupEnd()

for (let i = 0; i < 5; i++) {
    console.count(i)
}

console.time("Time")
let l = 0;
for (let i = 0; i < 5; i++) {
   l += i
}
console.log("total", l)
console.timeEnd("Time")