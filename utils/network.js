export default {
  mainnet: {
    pubkey: 0x30,
    pubkeyhash: 0x30,
    scripthash: 0x19,
    witness_hrp: 'lc'
  },
  testnet: {
    pubkey: 0x7f,
    pubkeyhash: 0x7f,
    scripthash: 0x55,
    witness_hrp: 'tl'
  }
}[process.env.network || 'mainnet']
