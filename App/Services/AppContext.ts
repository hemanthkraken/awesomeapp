import React from 'react';

const AppContext = React.createContext({
    onlyShowBitcoin: false,
    onlyShowWinners: false,
    onlyShowLosers: false,
    toggleOnlyShowBitcoin: () => {},
    toggleOnlyShowWinners: () => {},
    toggleOnlyShowLosers: () => {},
});

export default AppContext;
