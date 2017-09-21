
var koa = require('koa');
var request = require('koa-request');
var router = require('koa-router')();
var serve = require('koa-static');
var views = require('koa-views');

var app = module.exports = new koa();

//put static files in /dist
app.use(serve(__dirname + '/dist'));

// rest endpoints
// router.get('/games', function *(){
//     //this.body = data;
// });

app.use(views(__dirname + '/views', {
    map: {
        html: 'lodash'
    }
}));


app.use(function* index(){
    const data = [
          {
            id: 29436,
            name: 'vs Spectra QA',
            active: true,
            shortName: 'NDF_real',
            gameStartTime: 1505954820000,
            awayTeam: 'Pac QA',
            homeTeam: 'Notre Dame Football',
            group: 172,
            discountForVacated: false,
            resellVacated: false,
            ticketDelay: 120,
            usherMsg: 'This is a valid upgrade for the Shamrock Series!',
            sellUnused: null,
            sellBaf: null,
            allowTicketSwap: true,
            groupType: 'NCAA FB',
            groupTypeId: 4,
            appIcon: 'https://s3.amazonaws.com/exp-logos-big/ND_GOLD1.png',
            appText: 'Irish Upgrades',
            beacons: [],
            venueId: 202,
            loyaltyProgramName: 'Memories',
            loyaltyCurrencyName: 'Point',
            discountProgramName: 'Experience',
            discountCurrencyName: 'Credit',
            discountShortName: 'Credit',
            programName: 'Experience Upgrades',
            programDescription: null,
            bannerText: null,
            teamColor: '#052470',
            accountManagerConfig: null,
            locale: 'en_US',
            currencyCode: 'USD',
            currencySymbol: '$',
            minTicketPrice: 100,
            defaultPassProgramId: null,
            gameImageURL: 'https://static.pexels.com/photos/159549/american-football-running-back-tackle-defender-159549.jpeg',
            awayTeamImageURL: 'https://img0.etsystatic.com/195/2/15346827/il_340x270.1241877868_ssl3.jpg',
            memories: [],
            venue: {
              name: 'Notre Dame Stadium',
              coordinates: {
                latitude: 41.6983,
                longitude: -86.2339
              }
            },
            seatValidationRules: '[]',
            accessControlled: true,
            ticketSystem: null,
            trivia: [
              'Notre Dame was founded in 1842.\r',
              'The kilt-wearing cheerleaders at Notre Dame’s football games are called the Irish Guard.\r',
              'The official name of the University of Notre Dame is Notre Dame du Lac.\r',
              'The name “Fighting Irish” comes from Irishmen who would box for money in South Bend, late 1800’s.\r',
              'Notre Dame’s official name means “Our Lady of the Lake”\r'
            ],
            barcodeEntryOpenOffset: -86400,
            barcodeEntryCloseOffset: 0,
            returnPercentageOfFace: 100,
            returnCloseOffset: -10800,
            groupTermsAndConditionsUrl: null,
            passPrograms: []
          },
          {
            id: 29439,
            name: 'ND MBB ya mean',
            active: true,
            shortName: 'NDMB',
            gameStartTime: 1506065340000,
            awayTeam: 'this is a BB game',
            homeTeam: 'Notre Dame Men\'s Basketball',
            group: 99,
            discountForVacated: false,
            resellVacated: false,
            ticketDelay: 120,
            usherMsg: 'This is a valid ticket for Purcell Pavilion!',
            sellUnused: null,
            sellBaf: null,
            allowTicketSwap: false,
            groupType: 'NCAA BB',
            groupTypeId: 5,
            appIcon: 'https://s3.amazonaws.com/exp-logos-big/ND_GOLD1.png',
            appText: 'Irish Basketball Seat Upgrades',
            beacons: [],
            venueId: 128,
            loyaltyProgramName: 'Memories',
            loyaltyCurrencyName: 'Point',
            discountProgramName: 'Experience',
            discountCurrencyName: 'Credit',
            discountShortName: 'Credit',
            programName: 'Experience Upgrades',
            programDescription: null,
            bannerText: null,
            teamColor: '#052470',
            accountManagerConfig: null,
            locale: 'en_US',
            currencyCode: 'USD',
            currencySymbol: '$',
            minTicketPrice: 100,
            defaultPassProgramId: null,
            gameImageURL: 'https://static.pexels.com/photos/305244/pexels-photo-305244.jpeg',
            awayTeamImageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Cyno_Small_Logo_%28Aug._2015%29.png/240px-Cyno_Small_Logo_%28Aug._2015%29.png',
            memories: [],
            venue: {
              name: 'Purcell Pavilion',
              coordinates: {
                latitude: 41.698,
                longitude: -86.231
              }
            },
            seatValidationRules: '[]',
            accessControlled: true,
            ticketSystem: null,
            trivia: [
              'Notre Dame was founded in 1842.\r',
              'The kilt-wearing cheerleaders at Notre Dame’s football games are called the Irish Guard.\r',
              'The official name of the University of Notre Dame is Notre Dame du Lac.\r',
              'The name “Fighting Irish” comes from Irishmen who would box for money in South Bend, late 1800’s.\r',
              'Notre Dame’s official name means “Our Lady of the Lake”\r'
            ],
            barcodeEntryOpenOffset: 0,
            barcodeEntryCloseOffset: 0,
            returnPercentageOfFace: 100,
            returnCloseOffset: -10800,
            groupTermsAndConditionsUrl: null,
            passPrograms: []
          },
          {
            id: 29438,
            name: 'ND FB another game',
            active: true,
            shortName: 'NDF_real',
            gameStartTime: 1506174300000,
            awayTeam: 'this is a FB game',
            homeTeam: 'Notre Dame Football',
            group: 172,
            discountForVacated: false,
            resellVacated: false,
            ticketDelay: 120,
            usherMsg: 'This is a valid upgrade for the Shamrock Series!',
            sellUnused: null,
            sellBaf: null,
            allowTicketSwap: true,
            groupType: 'NCAA FB',
            groupTypeId: 4,
            appIcon: 'https://s3.amazonaws.com/exp-logos-big/ND_GOLD1.png',
            appText: 'Irish Upgrades',
            beacons: [],
            venueId: 202,
            loyaltyProgramName: 'Memories',
            loyaltyCurrencyName: 'Point',
            discountProgramName: 'Experience',
            discountCurrencyName: 'Credit',
            discountShortName: 'Credit',
            programName: 'Experience Upgrades',
            programDescription: null,
            bannerText: null,
            teamColor: '#052470',
            accountManagerConfig: null,
            locale: 'en_US',
            currencyCode: 'USD',
            currencySymbol: '$',
            minTicketPrice: 100,
            defaultPassProgramId: null,
            gameImageURL: 'https://static.pexels.com/photos/35655/football-american-game-runner.jpg',
            awayTeamImageURL: 'https://img0.etsystatic.com/195/2/15346827/il_340x270.1241877868_ssl3.jpg',
            memories: [],
            venue: {
              name: 'Notre Dame Stadium',
              coordinates: {
                latitude: 41.6983,
                longitude: -86.2339
              }
            },
            seatValidationRules: '[]',
            accessControlled: true,
            ticketSystem: null,
            trivia: [
              'Notre Dame was founded in 1842.\r',
              'The kilt-wearing cheerleaders at Notre Dame’s football games are called the Irish Guard.\r',
              'The official name of the University of Notre Dame is Notre Dame du Lac.\r',
              'The name “Fighting Irish” comes from Irishmen who would box for money in South Bend, late 1800’s.\r',
              'Notre Dame’s official name means “Our Lady of the Lake”\r'
            ],
            barcodeEntryOpenOffset: -86400,
            barcodeEntryCloseOffset: 0,
            returnPercentageOfFace: 100,
            returnCloseOffset: -10800,
            groupTermsAndConditionsUrl: null,
            passPrograms: []
          }
    ]
    yield this.render("index", {games: data});
});

app.use(router.routes());

app.listen(3000);

console.log('listening on port 3000');
