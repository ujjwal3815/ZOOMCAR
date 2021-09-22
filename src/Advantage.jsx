import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';

function Advantage() {
  return (
    <>
      <section id="advantage">
        <center>
          <h1 id="the1">THE ZOOMCAR ADVANTAGE</h1>
        </center>
        <center>
          <p id="we1">
            We simplified car rentals,so you can focus on what's important to
            you
          </p>
        </center>
        {Sdata.map(val => {
        return (
          <div className="box1">
          <Cards
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
          </div>
        );
      })}
      </section>
    </>
  );
}

export default Advantage;
