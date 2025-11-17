const API = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ExchangeCallFailed","type":"error"},{"inputs":[],"name":"ExchangeDisabled","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"InsufficientBalanceAfterPay","type":"error"},{"inputs":[],"name":"InvalidExchangeData","type":"error"},{"inputs":[],"name":"InvalidToAddress","type":"error"},{"inputs":[],"name":"NativePayFailed","type":"error"},{"inputs":[],"name":"PaymentTimeout","type":"error"},{"inputs":[],"name":"WrongNativeAmountIn","type":"error"},{"inputs":[],"name":"WrongNativeCount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"address","name":"feeAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"Payment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"exchange","type":"address"},{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"exchangeStatus","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint8","name":"exchangeType","type":"uint8"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"toTokenAddress","type":"address"},{"internalType":"address","name":"exchangeAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"exchangeData","type":"bytes"}],"internalType":"struct IUnusPay.From[]","name":"payData","type":"tuple[]"}],"name":"exchangeToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"exchanges","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"toAddress","type":"address"},{"internalType":"address","name":"feeAddress","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"components":[{"internalType":"uint8","name":"exchangeType","type":"uint8"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address","name":"toTokenAddress","type":"address"},{"internalType":"address","name":"exchangeAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"exchangeData","type":"bytes"}],"internalType":"struct IUnusPay.From[]","name":"fromTokens","type":"tuple[]"},{"components":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"feeAmount","type":"uint256"}],"internalType":"struct IUnusPay.To[]","name":"toTokens","type":"tuple[]"}],"internalType":"struct IUnusPay.PayData","name":"payData","type":"tuple"}],"name":"pay","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"exchange","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"toggleExchange","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

export default {

  ethereum: {
    address: '0xBbbb2FD7F8Fba9930b66D19ed53998D19BB20Af3',
    api: API
  },

  bsc: {
    address: '0xf0895F85e3Be501a4dB382F219DE018dC941C56F',
    api: API
  },

  polygon: {
    address: '0x2D4557d0C17f01c947bB9092f537feE058FEdADf',
    api: API
  },

  fantom: {
    address: '0xFee05C41195985909DDfc9127Db1f94559c46db3',
    api: API
  },

  avalanche: {
    address: '0x966d2C669Ec73234a57fFbBECbb783ECA9847c35',
    api: API
  },

  gnosis: {
    address: '0xFee05C41195985909DDfc9127Db1f94559c46db3',
    api: API
  },

  arbitrum: {
    address: '0xf0895F85e3Be501a4dB382F219DE018dC941C56F',
    api: API
  },

  optimism: {
    address: '0x051ffefd9160d941af6a87be10cad12cc4b0b5f8',
    api: API
  },

  base: {
    address: '0x8B127D169D232D5F3ebE1C3D06CE343FD7C1AA11',
    api: API
  },

 

}
