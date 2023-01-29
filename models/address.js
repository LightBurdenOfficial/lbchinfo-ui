import * as LbchinfoAPI from '@/services/lbchinfo-api'

class Address {
  static get(id, options = {}) {
    return LbchinfoAPI.get(`/address/${id}`, options)
  }

  static getBalance(id, options = {}) {
    return LbchinfoAPI.get(`/address/${id}/balance`, options)
  }

  static getUtxo(id, options = {}) {
    return LbchinfoAPI.get(`/address/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return LbchinfoAPI.get(`/address/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static getBalanceTransactions(id, {page, pageSize}, options = {}) {
    return LbchinfoAPI.get(`/address/${id}/balance-history`, {params: {page, pageSize}, ...options})
  }

  static getTokenBalanceTransactions(id, {token, page, pageSize}, options = {}) {
    if (token) {
      return LbchinfoAPI.get(`/address/${id}/lpp20-balance-history/${token}`, {params: {page, pageSize}, ...options})
    } else {
      return LbchinfoAPI.get(`/address/${id}/lpp20-balance-history`, {params: {page, pageSize}, ...options})
    }
  }
}

export default Address
