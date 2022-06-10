export const getGasPrice = async () => {
  try {
    const gasPriceResponse = await fetch(process.env.REACT_APP_NETWORK_GAS_ORACLE);
    const gasPriceData = await gasPriceResponse.json();

    const dynamicGasPrice = gasPriceData.result.ProposeGasPrice * 1000000000;
    const gasPrice = dynamicGasPrice > process.env.REACT_APP_NETWORK_GAS_PRICE ? process.env.REACT_APP_NETWORK_GAS_PRICE : dynamicGasPrice;
    
    return gasPrice;
  } catch (err) {
    if (err?.message) {
      return process.env.REACT_APP_NETWORK_GAS_PRICE;
    }
  }
}

