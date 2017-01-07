var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexSalt = /^\/salt/;botRegexJoe = /^\/cry joe/;
      botRegexAd=/^\/advance/; botRegexBye = /^\/offseason/; botDuck = /^\/duck/;
      botRegexTw = /^\/twitch/i; botRegexEat = /^\/eat/; botRegexSh = /^\/oh/; botRegexCC = /^\/touchdown/; botRegexSr = /^\/trash/; botRegexSt = /^\/haha/; botRegexQu = /^\/stfu/;
      botRegexCryNeema=/^\/cry neema/; botRegexLuck = /^\/luck/; botRegexFumble = /^\/fumble/; botRegexL = /^\/L/;  botRegexCryingg = /^\/cry/;  botRegexRuless = /^\/rules/; botRegexGuidelines = /^\/guidelines/; botRegexBleach = /^\/bleach/;  botRegexCommands = /^\/commands/;  botRegexLoser = /^\/loser/; botRegexWr = /^\/wrong/; botRegexBu = /^\/build/;  botRegexGG = /^\/mike/; botRegexTrade = /^\/trades/;botRegexInjury = /^\/injury/;botRegexPayouts = /^\/payouts/; botRegexCheese = /^\/cheese/
      cheese1 = 'https://pbs.twimg.com/profile_images/494330891/cheese_oh_cheese_400x400.jpg'; cheese2 = 'https://i.ytimg.com/vi/efLRmlILC2I/maxresdefault.jpg'
      cheese3 = 'http://www.packerpalace.com/palace02/maddenwcheese.gif';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/544x400.jpeg.80a7803b994343f38decc6aa3780c0bf");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/300x225.jpeg.62a85747175542a1ab3424e3bdaa8b50.large");
    this.res.end();
  }
  else if(request.text && botRegexJoe.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1620x2160.jpeg.f8db8bc8222e404d9813750ca22a1d0f");
    this.res.end();
  } 
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexEat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/460x216.gif.0c74d1ddcd9b4adca2db81bbaf708f7b");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.quickmeme.com/img/fe/fe9126fe4327f1b37f06c8c00c051bf8f37c1580b6c3d16da8b4dcb8607b60b2.jpg");
    this.res.end();
  } 
   else if(request.text && botRegexBye.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/960x485.png.e594aec4bd7d4a18aa41225e320d0fa8");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/360x202.gif.2fd2a87cda874b5ea8be1fe335832a77");
    this.res.end();
  }
    else if(request.text && botRegexSr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/78jbQMz.jpg");
    this.res.end();
  }  
    else if(request.text && botRegexSt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cdn.meme.am/instances/54668610.jpg");
    this.res.end();
  }  
    else if(request.text && botRegexQu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/IHaQCbfUJ26wE/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCryNeema.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/750x706.jpeg.3331bbcbd639415295a9eb64c42cb1c5.large");
this.res.end();
}
  else if(request.text && botRegexLuck.test(request.text)) {
this.res.writeHead(200);
postMessage("http://memecrunch.com/meme/IAWU/you-don-t-always-beat-me-at-madden/image.jpg");
this.res.end();
}
  else if(request.text && botRegexFumble.test(request.text)) {
this.res.writeHead(200);
postMessage("http://s2.quickmeme.com/img/c5/c5e2527ff84089b25e6cd56810125c38dc008985077b3cf18207be27ae4b232d.jpg");
this.res.end();
}
  else if(request.text && botRegexL.test(request.text)) {
this.res.writeHead(200);
postMessage("https://pbs.twimg.com/media/CLNho0mUcAAZ5KC.jpg");
this.res.end();
}
  else if(request.text && botRegexRuless.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1014x1408.jpeg.b0adcfdaa45141f4ad5cf8f008dfdef3");
this.res.end();
}
  else if(request.text && botRegexGuidelines.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/879x586.png.bd21caf7e93345c8aaecd948ecdf60bf");
this.res.end();
}
  else if(request.text && botRegexBleach.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/540x401.png.0816b855551a43cdbe64525bc1c2bc6c");
this.res.end();
}
  else if(request.text && botRegexCommands.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/237x597.png.5f8fb83a4ac249a3bf25910fc4d77af7");
this.res.end();
}
    else if(request.text && botRegexLoser.test(request.text)) {
this.res.writeHead(200);
postMessage("http://www.mememaker.net/static/images/memes/3867455.jpg");
this.res.end();
}
  else if(request.text && botRegexCryingg.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/600x583.png.c5573d0dbb0e4305b66f93c67321c51f");
this.res.end();
}
    else if(request.text && botRegexWr.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/480x287.gif.a1be4726dc414e6d87abb1e750533f7a");
this.res.end();
}
      else if(request.text && botRegexBu.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/450x450.gif.27c04b1f80eb4ad5a4fbca4c14ccd677");
this.res.end();
}
        else if(request.text && botRegexGG.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.kinja-img.com/gawker-media/image/upload/mjvi0ol0s5i3c6ikolql.jpg");
this.res.end();
}
         else if(request.text && botRegexTrade.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1328x1123.jpeg.59e77350d0dd46c6925e7bf365f44a36");
this.res.end();
}
           else if(request.text && botRegexInjury.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/540x960.png.e113e5b660f44979ae7756cad432c767");
this.res.end();
}
             else if(request.text && botRegexPayouts.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/422x361.png.dee64cf8841b4f68b002cc1e04186736");
this.res.end();
}
  else if(request.text && botRegexCheese.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(cheese1);
    else if(Math.random() >0.6)
      postMessage(cheese3)
    else
      postMessage(cheese2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
