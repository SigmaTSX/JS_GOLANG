const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((item)=> {
    return item.length>0})

employersNames = employersNames.map((item)=>{
    return item.toLowerCase().trim()
})

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const calcCash = (own = 0, ...everyCash) => {
    let total = own;
    for (let i = 0; i < everyCash.length; i++) {
        total += +everyCash[i];
    }
    return total;
};

const money = calcCash(null, ...sponsors.cash);

const makeBusiness = ({owner, director = 'Victor', cash, emp}) => {
    const sumSponsors = [...sponsors.eu, ...sponsors.rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have sponsors:');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
};

makeBusiness({owner :'Sam',cash: money, emp:employersNames});
