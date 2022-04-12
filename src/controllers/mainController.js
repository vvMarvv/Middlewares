let controller = {
    index: (req, res) => {
        res.render("index")
},
admin: (req, res) => {
res.send('Bienvenido Admin ')
}
}
module.exports = controller
