import * as LbchinfoAPI from '@/services/lbchinfo-api'

class Misc {
  static info(options = {}) {
    return LbchinfoAPI.get('/info', options)
  }

  static dailyTransactions(options = {}) {
    return LbchinfoAPI.get('/stats/daily-transactions', options)
  }

  static blockInterval(options = {}) {
    return LbchinfoAPI.get('/stats/block-interval', options)
  }

  static coinstake(options = {}) {
    return LbchinfoAPI.get('/stats/coinstake', options)
  }

  static addressGrowth(options = {}) {
    return LbchinfoAPI.get('/stats/address-growth', options)
  }

  static richList({from, to}, options = {}) {
    return LbchinfoAPI.get(`/misc/rich-list`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }

  static biggestMiners({from, to}, options = {}) {
    return LbchinfoAPI.get(`/misc/biggest-miners`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }
}

export default Misc
