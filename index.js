const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(yearAndResult) {
  const result = yearAndResult.find(e => e["result"] === "W");
  return result ? result["year"] : undefined;
}