import axios from 'axios'

import summoner from './summoner-rukafera'
import matches from './matchList.json'
import match from './match-gameId-290984893.json'


const API_KEY = 'RGAPI-c234f21f-dd76-4467-acbc-a45cafaf21ca'
const BASE_URL = 'https://oc1.api.riotgames.com'
const PROXY = 'https://cors-anywhere.herokuapp.com/'

export function getSummonerByName(name) {
    const url = PROXY + BASE_URL + '/lol/summoner/v4/summoners/by-name/' + name
    const config = {
        url: url,
        method: 'get',
        headers: {
            'X-Riot-Token': API_KEY
        }
    }
    
    // return axios(config)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({data: summoner}), 1000)
    })
}

export function getMatchList(accountId) {
    const url = PROXY + BASE_URL + '/lol/match/v4/matchlists/by-account/' + accountId
    const config = {
        url: url,
        method: 'get',
        headers: {
            'X-Riot-Token': API_KEY
        }
    }
    
    // return axios(config)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({data: matches}), 1000)
    })
}

export function getMatch(matchId) {
    const url = PROXY + BASE_URL + '/lol/match/v4/matches/' + matchId
    const config = {
        url: url,
        method: 'get',
        headers: {
            'X-Riot-Token': API_KEY
        }
    }
    
    // return axios(config)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({data: summoner}), 500)
    })
}

export function getMachTimeline(matchId) {
const url = PROXY + BASE_URL + '/lol/match/v4/timelines/by-match/' + matchId
    const config = {
        url: url,
        method: 'get',
        headers: {
            'X-Riot-Token': API_KEY
        }
    }
    
    return axios(config)
}