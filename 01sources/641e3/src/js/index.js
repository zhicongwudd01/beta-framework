
var voteId = document.getElementById('vote1');
voteId.addEventListener('click', function () {
  $01.vote({
    uid: 1,
    optionData: 'support'
  }, function () {
    console.log('vote success');
  });
})
var voteId = document.getElementById('vote2');
voteId.addEventListener('click', function () {
  $01.vote({
    uid: 1,
    optionData: 'object'
  }, function () {
    console.log('vote success');
  });
})
