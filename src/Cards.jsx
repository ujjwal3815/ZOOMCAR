import React from 'react';

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="img_src" />
          <div className="card_info">
            <span className="card_categories">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
