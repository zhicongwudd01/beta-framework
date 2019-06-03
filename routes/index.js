
module.exports = function (app) {
  app.post('/vote', function (req, res) {
    console.log(req.body)
    res.json({
      code: 0,
      msg: 'success',
      data: {

      }
    });
  });
}
