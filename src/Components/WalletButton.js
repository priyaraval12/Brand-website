import React from "react";
import merge from "lodash.merge";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import styles from "./WalletButton.module.css";


const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: "var(--red-violet)",
  },
});
const WalletButton = () => {
  return (
    <div>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={myTheme}>
          <button className={styles.button2} autoFocus>
            <div>
              <ConnectButton className={styles.button3} />
            </div>
          </button>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
};

export default WalletButton;
