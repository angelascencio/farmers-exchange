const router = require('express').Router();
const { User } = require('../../models');
const { Product } = require('../../models');
const { Op } = require("sequelize");

// get search results based on user search information
//SEARCH PROVIDES EMPTY RESPONSE WITH NO ACTUAL SEARCH RESULTS IN BODY
router.post('/search', async (req, res) => {
    let { term } = req.body.term;
    // term = term.toLowerCase()
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try{
        // finds all product listings where the product name or description contain the search term at all
        const found = await Product.findAll({
            where:
            {
                [Op.or]:
                    [{ product_name: { [Op.like]: '%' + term + '%' } },
                    { description: { [Op.like]: '%' + term + '%' } }]
            }
        })
        res.status(200).json(found);
    }

    catch (err){             
        console.log(err);
        res.status(500).json(err);
        }

    }
});
        // post for adding new produc tlisting
router.post('/new', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {

        try {
            const dbProductData = await Product.create({
            product_name: req.body.product_name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            unit: req.body.unit,
            });
            
            res.status(200).json(dbProductData);
          }

          catch (err) {
            console.log(err);
            res.status(500).json(err);
          }
        } 

    
});

module.exports = router;