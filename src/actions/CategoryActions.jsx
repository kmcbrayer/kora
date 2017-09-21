import fetch from 'isomorphic-fetch'
import { TICKET_SERVICE_API_KEY } from '../Utils/secrets.jsx'

export function setSelectedCategory(category) {
    return {
        type: 'SET_SELECTED_CATEGORY',
        category
    }
}

function requestCategories(gameId) {
    return {
        type: 'REQUEST_CATEGORIES_FOR_GAMEID',
        gameId
    }
}

function receiveCategories(gameId, categories) {
    return {
        type: 'RECEIVE_CATEGORIES_FOR_GAMEID',
        gameId,
        categoriesJson: categories
    }
}

export function fetchCategories(gameId) {
    const json = { categories: [
      {
        "allowCCPayments": true,
        "hideWhenSoldOut": false,
        "sponsor": null,
        "defaultCategory": true,
        "groupId": 4,
        "isAuction": false,
        "displayOrder": 501,
        "isPassOnly": false,
        "inputPrompt": null,
        "description": "Get front and center to the action with a seat on the sideline in sections 103-105 or 114-116.  These seats are awesome to see the Hawks move up and down the court!<br/><br/>What you need to know:<br/>Your seats are 100% mobile.<br/>After purchasing, simply present the ticket on your mobile phone to the usher in your section.",
        "maxConsecutiveSeatsForPass": {},
        "type": "SEAT",
        "sthOnly": false,
        "maxConsecutiveSeats": 0,
        "requiresGroupSize": true,
        "id": 33,
        "useDifferentialPrice": false,
        "isAccessible": false,
        "isSoldOutByProduct": {
          "upgrade": false,
          "pass": {}
        },
        "active": true,
        "url": "https://s3.amazonaws.com/exp-category/ATLH_CENTERCOURTv2.png",
        "closeDate": 1499290560000,
        "exclusiveSegments": [],
        "creditCost": null,
        "name": "Center Court",
        "openDate": 1499231160000,
        "requiresSeatInfo": false,
        "requiresPrimaryTicket": true
      },
      {
        "allowCCPayments": true,
        "hideWhenSoldOut": false,
        "sponsor": null,
        "defaultCategory": true,
        "groupId": 4,
        "isAuction": false,
        "displayOrder": 502,
        "isPassOnly": false,
        "inputPrompt": null,
        "description": "Get a great view of all the up and down the court action with an upgrade to one of the corners of the court. This includes sections 101-102,106-107, 112-113 or 117-118.<br/><br/>What you need to know:<br/>Your seats are 100% mobile.<br/>After purchasing, simply present the ticket on your mobile phone to the usher in your section.",
        "maxConsecutiveSeatsForPass": {},
        "type": "SEAT",
        "sthOnly": false,
        "maxConsecutiveSeats": 0,
        "requiresGroupSize": true,
        "id": 34,
        "useDifferentialPrice": false,
        "isAccessible": false,
        "isSoldOutByProduct": {
          "upgrade": false,
          "pass": {}
        },
        "active": true,
        "url": "https://s3.amazonaws.com/exp-category/ATLH_UPGRADE7.png",
        "closeDate": 1499290560000,
        "exclusiveSegments": [],
        "creditCost": null,
        "name": "Corner Court",
        "openDate": 1497504960000,
        "requiresSeatInfo": false,
        "requiresPrimaryTicket": true
      },
      {
        "allowCCPayments": true,
        "hideWhenSoldOut": false,
        "sponsor": null,
        "defaultCategory": false,
        "groupId": 4,
        "isAuction": false,
        "displayOrder": 1,
        "isPassOnly": false,
        "inputPrompt": null,
        "description": "Get closer to the action with a seat on the baseline in sections 108-111 or 119-122. These seats are awesome for a head on view of the players as they dunk!<br/><br/>What you need to know:<br/>Your seats are 100% mobile.<br/>After purchasing, simply present the ticket on your mobile phone to the usher in your section.",
        "maxConsecutiveSeatsForPass": {},
        "type": "SEAT",
        "sthOnly": false,
        "maxConsecutiveSeats": 32,
        "requiresGroupSize": true,
        "id": 35,
        "useDifferentialPrice": true,
        "isAccessible": false,
        "isSoldOutByProduct": {
          "upgrade": false,
          "pass": {}
        },
        "active": true,
        "url": "https://s3.amazonaws.com/exp-category/ATLH_SCHRODER.png",
        "closeDate": 1499279940000,
        "exclusiveSegments": [],
        "creditCost": null,
        "name": "Behind the Basket",
        "openDate": 1499231520000,
        "requiresSeatInfo": true,
        "requiresPrimaryTicket": true
      },
      {
        "allowCCPayments": true,
        "hideWhenSoldOut": true,
        "sponsor": null,
        "defaultCategory": false,
        "groupId": 4,
        "isAuction": false,
        "displayOrder": 1,
        "isPassOnly": false,
        "inputPrompt": null,
        "description": "Don't miss a minute of the action with an upgrade to the 200 level!<br/><br/>What you need to know:<br/>Your seats are 100% mobile.<br/>After purchasing, simply present the ticket on your mobile phone to the usher in your section.",
        "maxConsecutiveSeatsForPass": {},
        "type": "SEAT",
        "sthOnly": false,
        "maxConsecutiveSeats": 0,
        "requiresGroupSize": true,
        "id": 46,
        "useDifferentialPrice": false,
        "isAccessible": false,
        "isSoldOutByProduct": {
          "upgrade": false,
          "pass": {}
        },
        "active": true,
        "url": "https://s3.amazonaws.com/exp-category/ATLH_200s.png",
        "closeDate": 1499290560000,
        "exclusiveSegments": [],
        "creditCost": null,
        "name": "200 Level",
        "openDate": 1499208960000,
        "requiresSeatInfo": false,
        "requiresPrimaryTicket": true
      },
      {
        "allowCCPayments": true,
        "hideWhenSoldOut": false,
        "sponsor": null,
        "defaultCategory": false,
        "groupId": 4,
        "isAuction": false,
        "displayOrder": 1,
        "isPassOnly": false,
        "inputPrompt": null,
        "description": "See the Hawks up close with a seat in the first four rows!  Any closer to the action and you would need to be in uniform!  <br/><br/>What you need to know:<br/>Your seats are 100% mobile.<br/>After purchasing, simply present the ticket on your mobile phone to the usher in your section.",
        "maxConsecutiveSeatsForPass": {},
        "type": "SEAT",
        "sthOnly": false,
        "maxConsecutiveSeats": 0,
        "requiresGroupSize": true,
        "id": 56,
        "useDifferentialPrice": false,
        "isAccessible": false,
        "isSoldOutByProduct": {
          "upgrade": false,
          "pass": {}
        },
        "active": true,
        "url": "https://s3.amazonaws.com/exp-category/ATLH_UPGRADE3.png",
        "closeDate": 1499279940000,
        "exclusiveSegments": [],
        "creditCost": null,
        "name": "Court Side",
        "openDate": 1499231520000,
        "requiresSeatInfo": false,
        "requiresPrimaryTicket": true
      }
  ]};

    return dispatch => {
        dispatch(receiveCategories(gameId, json))
    }
}

export function checkoutCategory(tickets) {
    return {
        type: 'CHECKOUT_FOR_CATEGORY',
        tickets
    }
}
