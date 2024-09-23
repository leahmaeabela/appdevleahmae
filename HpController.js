const { checkout } = require("../routes/router");

const ph = {
nom: (req, res )=>{
    res.render('index');
},

blank: (req, res )=>{
    res.render('blankviews', {page: 'blank'});
},
checkout: (req, res) =>{
    res.render('checkoutviews', { page: 'checkout'})
},
product:(req, res) => {
    res.render('productviews', {page: 'product'})
},
store: (req, res) => {
    res.render('storeviews', {page: 'store'})
}
};
module.exports = ph; 