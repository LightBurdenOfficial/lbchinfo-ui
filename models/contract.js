import * as LbchinfoAPI from '@/services/lbchinfo-api'

class Contract {
  static get(id, options = {}) {
    return LbchinfoAPI.get(`/contract/${id}`, options)
  }

  static getUtxo(id, options = {}) {
    return LbchinfoAPI.get(`/contract/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return LbchinfoAPI.get(`/contract/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static listTokens({page, pageSize}, options = {}) {
    return LbchinfoAPI.get(`/lpp20`, {params: {page, pageSize}, ...options})
  }

  static richList(id, {page, pageSize}, options = {}) {
    return LbchinfoAPI.get(`/lpp20/${id}/rich-list`, {params: {page, pageSize}, ...options})
  }
}

export default Contract
