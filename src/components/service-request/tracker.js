import React, { useEffect } from 'react';
import { getDiffInDate } from '../../utils';
import "./tracker.css";
import Text from '@tds/core-text';

const Tracker = ({ comments }) => {
  let commentsDeatils = comments ? JSON.parse(comments) : [];

  const getName = (commenter) => {
    if (commenter) {
      let name = commenter.split(' ');
      return name.map(el => el.charAt(0).toUpperCase()).join(' ')
    } else {
      return ''
    }
  }

  const getIndex = (index) => {
    console.log(index, "index")
    return index % 2 == 0 ? true : false
  }

  return (

    <div>
      <div className="wrapper">
        <div className="center-line">
          <div className="scroll-icon"><i>Start</i></div>
        </div>
        {
         commentsDeatils && commentsDeatils?.map(({ commenter, comment, date }, index) => (
            <>
              <div className={getIndex(index) ? "row row-1" : "row row-2"}>
                <section>
                  <i className="icon">{getName(commenter)}</i>
                  <div className="details">
                    <span className="title">{comment}</span>
                  </div>
                  {
                  getDiffInDate(date) === 0 
                  ? (<Text size="small"> created today</Text>)
                  : (<p>{getDiffInDate(date)} <Text size="small">d ago</Text></p>)
                }
                </section>
              </div>
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Tracker;