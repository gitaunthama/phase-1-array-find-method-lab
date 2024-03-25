function superbowlWin(record) {
    const win = record.find(entry => entry.result === "W");
  
    if (win) {
        return win.year;
    } else {
       
        return undefined;
    }
}

const records = [
    { year: 2015, 
    result: 'W' },
    
];

console.log(superbowlWin( 'Denver Broncos' + records)); 