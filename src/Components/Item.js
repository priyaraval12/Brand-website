import React from "react";
import  "./Item.module.css";
import styles from "./Item.module.css";
import '@rainbow-me/rainbowkit/styles.css';
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import merge from "lodash.merge";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
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

const Item = () => {
    const Navigate = useNavigate();
    function handleSubmit(event) {
      event.preventDefault();
  
      Navigate('/CreateNFT');
    }
    return (
       <>
       <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <div className={styles.homee}>
        <div className={styles.navbarParent}>
          <div className={styles.navbarr}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <input className={styles.frameChild} type="text" />
              </div>
              <div className={styles.menuParent}>
                <a className={styles.menu}>
                  <div className={styles.menu1}>Explore</div>
                </a>
                <div className={styles.menu2}>
                  <a className={styles.menu3}>My Items</a>
                </div> 
                <div className={styles.menu4}>
                  <a className={styles.menu3}>Following</a>
                </div>
                <div className={styles.menu4}>
                  <a className={styles.menu3}>Community</a>
                </div>
              </div>
              <div className={styles.buttonParent}>
                <button className={styles.button}>
                  <div className={styles.button1} onClick={handleSubmit}>Create</div>
                </button>
                <button
                  className={styles.button2}
                  autoFocus
                  // onClick={onButton1Click}
                >
                  <div><ConnectButton className={styles.button3} /></div>
                </button>
              </div>
            </div>
          </div>
            
        
          
              
              <div className={styles.footer}>
              <img className={styles.frameItem} alt="" src="../vector-12.svg" />
              <div className={styles.col1Parent}>
                <div className={styles.col1}>
                  <div className={styles.topSellers}>
                    Get the lastes Updates
                  </div>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="../rectangle-13.svg"
                    />
                    <Input
                      className={styles.yourEmail}
                      type="email"
                      size="middle"
                      placeholder="Your Email"
                      bordered={false}
                    />
                    <button className={styles.button8} autoFocus>
                      <div className={styles.button1}>Email Me!</div>
                    </button>
                  </div>
                </div>
                <div className={styles.col2}>
                  <div className={styles.brandGlobal}>Brand Global</div>
                  <div className={styles.listItems}>
                    <div className={styles.vision}>Vision</div>
                    <div className={styles.vision}>{"Mission "}</div>
                    <div className={styles.vision}>Value Proposition</div>
                    <div className={styles.vision}>Team</div>
                  </div>
                </div>
                <div className={styles.listItems1}>
                  <div className={styles.vision}>Investors</div>
                  <div className={styles.vision}>Careers</div>
                  <div className={styles.vision}>Media</div>
                  <div className={styles.vision}>Contact Us</div>
                </div>
                <div className={styles.col3}>
                  <div className={styles.support}>Support</div>
                  <div className={styles.listItems}>
                    <div className={styles.vision}>Help center</div>
                    <div className={styles.vision}>Terms of service</div>
                    <div className={styles.vision}>Legal</div>
                    <div className={styles.vision}>Privacy policy</div>
                  </div>
                </div>
              </div>
              <img className={styles.frameItem} alt="" src="../vector-12.svg" />
              <div className={styles.theBrandGlobalIncAllRigParent}>
                <div className={styles.topSellers}>
                  The Brand Global, Inc. All Rights Reserved
                </div>
                <button className={styles.frameButton} data-animate-on-scroll>
                  <img
                    className={styles.frameChild5}
                    alt=""
                    src="../group-142.svg"
                  />
                  <img
                    className={styles.frameChild5}
                    alt=""
                    src="../group-152.svg"
                  />
                  <img
                    className={styles.frameChild5}
                    alt=""
                    src="../group-162.svg"
                  />
                  <img
                    className={styles.frameChild5}
                    alt=""
                    src="../group-132.svg"
                  />
                </button>
              </div>
            </div>
      </div>
      </div>
        </RainbowKitProvider>
        </WagmiConfig>
      </>
  
    );
  };
  
  export default Item;