import "../styles/app.css";

export const Textbox = () => {
  return (
    <div id="ui">
      <div>
        <p className="note">Rosa Morales</p>
      </div>

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
