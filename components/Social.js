import React from 'react';

import '../static/sass/components/Social.sass';

const availableIcons = [["telegram", "t.me"], ["vk"], ["facebook"], ["instagram"], ["twitter"], ["youtube"]];

export default (props) => {
  return <div className="Social">
    {props.links === undefined ? '' : props.links.map((link, index) => {
      let returned;

      availableIcons.forEach(icon => icon.forEach(variation => {
        if (link.includes(variation))
          returned = <a
            className={"icon" + (index < props.links.length - 1 ? " margin" : "")}
            key={link}
            href={link}
            target="_blank"
          >
            <div className={icon[0] + " default"} />
            <div className={icon[0] + " hover" +
              (props.hoverable || typeof props.hoverable == "undefined" ? " hoverable" : "")}
            />
          </a>;
        }));
      return returned;
    })}
  </div>;
}