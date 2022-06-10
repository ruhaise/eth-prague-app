export const formatWalletAddress = (address) => {
    if (!address) {
        return '';
    }

    const fmtdAddress = `${address.substring(0, 4)}...${address.substring(address.length - 4, address.length)}`;

    return fmtdAddress.toLocaleUpperCase();
};
