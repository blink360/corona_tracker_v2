let calculateGrowthRate = (array) =>{
    
    let tempArray =array.slice();
    
    let prevData = tempArray[0].totalCases;
    
    let data = tempArray.slice(-1)[0].totalCases;

    let growthRate = parseFloat(((Math.pow(data/prevData,(1/array.length)))-1) * 100).toFixed(1);
    return growthRate;
}

module.exports = calculateGrowthRate;