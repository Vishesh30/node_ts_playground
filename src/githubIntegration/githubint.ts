var github = require('github-api');

var apiurl = "https://github.wdf.sap.corp/api/v3/repos/BIG/x4-s4one/branches";

export function getBranches() : any {
    // request.get({
    //     headers: {'Authorization' : 'token c91216bd3037dcdd5a5f6062dde405f1da170047'},
    //     url:     apiurl,
    //     json: true
    //     }, function(error, response, body){
    //         if(error) console.log(error)
    //         else
    //           return(body);
    // });
    var gh = new github({
        username: 'i061910',
        password: 'saplabsi061910'
        /* also acceptable:
           token: 'MY_OAUTH_TOKEN'
         */
     });

     var me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
        me.listNotifications(function(err, notifications) {
        console.log(err);
        console.log(notifications);
        });
}
