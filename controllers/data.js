const Data = require('../models/data');

module.exports = {
    index,
    create
};

function index(req, res){
    const data = Data.data;

    res.render('index', {
        title: 'Unit 2 Assessment',
        data
    })
}

function create(req, res) {
    Data.data.push({
        todo: req.body.todo,
        done: false,
    });
    res.redirect('/');
}