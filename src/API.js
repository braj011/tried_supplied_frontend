

export default class API  {

  static init () {
    this.baseUrl = 'http://localhost:3000'
    this.suppliersIndex = this.baseUrl + '/suppliers'
    this.produceBySeason = this.baseUrl + '/show_produce_by_season/'
  }

  static getSeasonProduce (season) {
    return fetch(this.produceBySeason, {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        season: season
      })
    })
    .then(resp => resp.json())
    // {  return data.filter(item => item.season === season)
    // })
    // debugger
  }

} 



API.init()

// window.API = API