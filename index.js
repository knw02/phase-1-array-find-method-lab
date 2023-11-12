// code your solution here
function superbowlWin(superbowls) {
    const winningSuperbowl = superbowls.find(superbowl => superbowl.result === "W");
  
    if (winningSuperbowl) {
      return winningSuperbowl.year;
    } else {
      return undefined;
    }
  }
  const superbowls = [
    { year: 2019, result: "L" },
    { year: 2020, result: "W" },
    { year: 2021, result: "L" },
  ];