import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import "./Experience.css";

const Exp = () => {
  return (
    <section className="econtainer" id="experience">
      <h2 className="etitle">TECHSTACK-WORK-EXPERIENCE</h2>
      <div className="econtent">
        <div className="eskills">
          {skills.map((skill, id) => {
            return (
              <>
                <div key={id} className="eskill">
                  <div className="eskillImageContainer">
                    <img src={skill.imageSrc} alt="NoLoadingBro"/>
                  </div>
                  <div>
                        <h1>{skill.title}</h1>
                </div>
                </div>
              
                
              </>
            );
          })}
        </div>
        
        <ul className="ehistory">
          {history.map((historyItem, id) => {
            return (
              <>
                <li key={id} className="ehistoryItem">
                  <img src={historyItem.imageSrc} alt="NoHistory " />
                  <div className="ehistoryItemDetails">
                    <h3>{historyItem.role}</h3>
                    <h3>{historyItem.organisation}</h3>
                    <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Exp;
