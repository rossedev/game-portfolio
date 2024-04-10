import "../styles/textbox.css";

export const Textbox = () => {
  return (
    <div id="ui">
      <p className="note">Tab/Click around to move</p>
      <div id="textbox-container">
        <div id="textbox">
          <p id="dialogue" className="ui-text"></p>
          <div className="btn-container">
            <button id="close" className="ui-close-btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
