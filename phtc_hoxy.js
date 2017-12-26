var hoxy = require('hoxy');
var port = 8008;
var proxy = hoxy.createServer().listen(port, function() {
  console.log('The proxy is listening on port ' + port + '.');
});

var player = require('play-sound')(opts = {player: "omxplayer"});

proxy.intercept({
  phase: 'request',
  method: 'GET',
  hostname: 'chaseone.co.uk',
  url: '/webservice/markerservice.asmx/NewEventV6',
  as: 'string'
}, function(req, resp, cycle) {
  if (req.query.EvPoiWonDedans == 1) {player.play('/home/pi/Music/mj.m4a'); console.log("DEDANS!");
  }
  else if (req.query.EvPoiWonGrille == 1) {player.play('/home/pi/Music/pinball_wizard.m4a'); console.log("GRILLE!");
  }
  else if (req.query.EvPoiWonWinningGallery == 1) {player.play('/home/pi/Music/raining_men.m4a'); console.log("WINNING GALLERY!");
  }
  else {console.log("SOMETHING ELSE");}
});
