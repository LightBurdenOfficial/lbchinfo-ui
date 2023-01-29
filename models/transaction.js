import * as LbchinfoAPI from '@/services/lbchinfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return LbchinfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return LbchinfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return LbchinfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return LbchinfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return LbchinfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return LbchinfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction
