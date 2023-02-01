import styles from "./CreateItem.module.css";

const CreateItem = () => {
  return (
    <div className={styles.createItem}>
      <div className={styles.navbar}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.iconlylightsearchParent}>
              <img
                className={styles.iconlylightsearch}
                alt=""
                src="../iconlylightsearch.svg"
              />
              <div className={styles.searchItemHere}>Search Item Here</div>
            </div>
          </div>
          <div className={styles.menuParent}>
            <div className={styles.menu}>
              <div className={styles.menu1}>Explore</div>
            </div>
            <div className={styles.menu2}>
              <div className={styles.menu3}>My Items</div>
            </div>
            <div className={styles.menu4}>
              <div className={styles.menu3}>Following</div>
            </div>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <div className={styles.uploadFile}>Create</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.uploadFile}>Connect</div>
            </div>
          </div>
        </div>
        <img className={styles.navbarChild} alt="" src="../vector-11.svg" />
      </div>
      <div className={styles.button4}>
        <div className={styles.uploadFile}>Create Item</div>
      </div>
      <div className={styles.createNewItem}>Create new Item</div>
      <div className={styles.frameGroup}>
        <div className={styles.uploadFileParent}>
          <div className={styles.uploadFile}>Upload File</div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.iconlyboldimage}
              alt=""
              src="../iconlyboldimage.svg"
            />
            <div className={styles.jpgPngGif}>
              JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.
            </div>
            <div className={styles.dragAndDrop}>{`Drag and Drop File `}</div>
            <input
              className={styles.groupItem}
              type="file"
              required
              autoFocus
              defaultChecked={true}
              readOnly
            />
          </div>
        </div>
        <div className={styles.uploadFileParent}>
          <div className={styles.nameWrapper}>
            <div className={styles.uploadFile}>Name</div>
          </div>
          <div className={styles.itemNameWrapper}>
            <div className={styles.itemName}>Item Name</div>
          </div>
        </div>
        <div className={styles.uploadFileParent}>
          <div className={styles.uploadFile}>Description</div>
          <div className={styles.decriptionOfYourItemWrapper}>
            <input
              className={styles.decriptionOfYour}
              type="text"
              placeholder="Decription of your item"
            />
          </div>
        </div>
        <div className={styles.uploadFileParent}>
          <div className={styles.uploadFile}>Price</div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.ethParent}>
              <div className={styles.uploadFile}>ETH</div>
              <img
                className={styles.iconlytwoTonearrowDown2}
                alt=""
                src="../iconlytwotonearrow--down-2.svg"
              />
            </div>
            <div className={styles.enterPrice}>Enter Price</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <img className={styles.navbarChild} alt="" src="../vector-11.svg" />
        <div className={styles.col1Parent}>
          <div className={styles.col1}>
            <div className={styles.uploadFile}>Get the lastes Updates</div>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <div className={styles.yourEmail}>Your Email</div>
              <div className={styles.button6}>
                <div className={styles.uploadFile}>Email Me!</div>
              </div>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.brandGlobal}>Brand Global</div>
            <div className={styles.listItems}>
              <div className={styles.explore}>Explore</div>
              <div className={styles.explore}>How it Works</div>
              <div className={styles.explore}>Contact Us</div>
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.brandGlobal}>Support</div>
            <div className={styles.listItems}>
              <div className={styles.explore}>Help center</div>
              <div className={styles.explore}>Terms of service</div>
              <div className={styles.explore}>Legal</div>
              <div className={styles.explore}>Privacy policy</div>
            </div>
          </div>
        </div>
        <img className={styles.navbarChild} alt="" src="../vector-11.svg" />
        <div className={styles.theBrandGlobalIncAllRigParent}>
          <div className={styles.theBrandGlobal}>
            The Brand Global, Inc. All Rights Reserved
          </div>
          <div className={styles.groupParent}>
            <img className={styles.frameChild} alt="" src="../group-141.svg" />
            <img className={styles.frameChild} alt="" src="../group-151.svg" />
            <img className={styles.frameChild} alt="" src="../group-161.svg" />
            <img className={styles.frameChild} alt="" src="../group-131.svg" />
          </div>
        </div>
      </div>
      <img className={styles.image1Icon} alt="" src="../image-11@2x.png" />
    </div>
  );
};

export default CreateItem;
