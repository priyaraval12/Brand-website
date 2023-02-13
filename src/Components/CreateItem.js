import React from "react";
import "./CreateItem.css";
import WalletButton from "./WalletButton";

const CreateItem = () => {
  return (
    <div className="create-item">
      <div className="navbar12">
        <div className="frame-parent39">
          <div className="frame-wrapper12">
            <div className="iconlylightsearch-parent9">
              <div className="or">Search Item Here</div>
            </div>
          </div>
          <div className="menu-parent10">
            <div className="menu72">
              <div className="menu73">Explore</div>
            </div>
            <div className="menu74">
              <div className="menu75">My Items</div>
            </div>
            <div className="menu76">
              <div className="menu75">Following</div>
            </div>
          </div>
          <WalletButton />
        </div>
        <img className="navbar-child10" alt="" src="../vector-1.svg" />
      </div>
      <div className="button160">
        <div className="upload-file">Create Item</div>
      </div>
      <div className="create-new-item">Create new Item</div>
      <div className="frame-parent40">
        <div className="upload-file-parent">
          <div className="upload-file">Upload File</div>
          <div className="rectangle-parent19">
            <div className="group-child19" />
            <img
              className="iconlyboldimage"
              alt=""
              src="../iconlyboldimage.svg"
            />
            <div className="jpg-png-gif">
              JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.
            </div>
            <div className="drag-and-drop">{`Drag and Drop File `}</div>
            <div className="or-parent">
              <div className="or">or</div>
              <div className="upload-file"> browse media on your device</div>
            </div>
          </div>
        </div>
        <div className="upload-file">Name</div>
        <input className="wrapper" type="text" placeholder="Name" />
        <div className="upload-file">Description</div>
        <textarea
          className="frame-textarea"
          placeholder="Description of your item"
        />
        <div className="upload-file-parent">
          <div className="upload-file">Price</div>
          <input className="wrap" placeholder="ETH"/>
        </div>
      </div>
      <div className="footer12">
        <img className="navbar-child10" alt="" src="../vector-1.svg" />
        <div className="col-1-parent10">
          <div className="col-112">
            <div className="upload-file">Get the lastes Updates</div>
            <div className="rectangle-parent21">
              <input className="rectangle-input" type="text" />
              <div className="your-email12">Your Email</div>
              <button className="button162">
                <div className="button163">Email Me!</div>
              </button>
            </div>
          </div>
          <div className="col-212">
            <div className="brand-global12">Brand Global</div>
            <div className="list-items24">
              <div className="explore12">Explore</div>
              <div className="explore12">How it Works</div>
              <div className="explore12">Contact Us</div>
            </div>
          </div>
          <div className="col-212">
            <div className="brand-global12">Support</div>
            <div className="list-items24">
              <div className="explore12">Help center</div>
              <div className="explore12">Terms of service</div>
              <div className="explore12">Legal</div>
              <div className="explore12">Privacy policy</div>
            </div>
          </div>
        </div>
        <img className="navbar-child10" alt="" src="../vector-1.svg" />
        <div className="the-brand-global-inc-all-rig-parent10">
          <div className="upload-file">
            The Brand Global, Inc. All Rights Reserved
          </div>
          <div className="group-parent11">
            <img className="frame-child74" alt="" src="../group-142.svg" />
            <img className="frame-child74" alt="" src="../group-152.svg"/>
            <img className="frame-child74" alt="" src="../group-162.svg" />
            <img className="frame-child74" alt="" src="../group-132.svg" />
          </div>
        </div>
      </div>
      <img className="image-1-icon1" alt="" src="../image-1@2x.png" />
    </div>
  );
};

export default CreateItem;
