const xlsx = require("xlsx");

function excelWriter(fileName, sheetName, jsonData) {
  let newWB = xlsx.utils.book_new();
  let newWS = xlsx.utils.json_to_sheet(jsonData);
  xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
  xlsx.writeFile(newWB, fileName);
}

function excelReader(fileName, sheetName) {
  let wb = xlsx.readFile(fileName);
  let excelData = wb.Sheets[sheetName];
  let ans = xlsx.utils.sheet_to_json(excelData);
  console.log(ans);
}
