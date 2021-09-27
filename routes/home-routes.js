const { Product } = require('../models');
const User = require('../models/user');

const router = require('express').Router();
const { Op } = require("sequelize");


// get landing page
router.get('/', async (req, res) => {
    try {
        //  res.render('homepage', {
        //     loggedIn: req.session.loggedIn,
        // });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

// get profile page
router.get('/profile/:id', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            const dbProfileData = await User.findByPk(req.params.id)

            const user = dbPaintingData.get({ plain: true });
            res.render('profile', { user, loggedIn: req.session.loggedIn });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

// get search page
// router.get('/search/:', async (req, res) => {
//     if (!req.session.loggedIn) {
//         res.redirect('/login');
//     } else {
//         try {
//             res.render('search')
//         } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     });


// get search results based on user search information
router.post('/search', (req, res) => {
    let { term } = req.body;
    term = term.toLowerCase()
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        // finds all product listings where the product name or description contain the search term at all
        Product.findAll({
            where:
            {
                [op.or]:
                    [{ product_name: { [Op.like]: '%' + term + '%' } },
                    { description: { [Op.like]: '%' + term + '%' } }]
            }
        })

            .then(results => {
                // res.render('searchResults', { results })
                res.json(results)
            })
            .catch(err => console.log(err))
    }
});



  //use homeRoutes to res.render the relevant page based on the endpoint passed in trhough <a href="/example" > tags
  // use fetch requests in our front-end page js in order to make post/put/delete calls 