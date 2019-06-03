
function sdk01() {
}

sdk01.prototype.vote = function (data, cb) {
  axios({
    method: 'post',
    url: '/vote',
    data: data
  })
    .then(function (response) {
      cb()
    });
}

let $01 = new sdk01();
