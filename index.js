const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
function superbowlWin(win){
   for(const record of win){
       if(record.year === '2015'){
           return '2015';
       }
   }
}  