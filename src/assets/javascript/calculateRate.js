let calculateRate = (data,totalData) => {
        let rate = parseFloat((data/totalData) * 100 ).toFixed(2);
        return rate;
}

module.exports = calculateRate;