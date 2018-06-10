import * as React from 'react';
import './navBar.css';

export default function NavigationBar({ sections }) {
  const sectionsJSX = sections.map(section => (
    <a href={`#${section}`}>{section}</a>
  ));

  return (
    <div id="navbar">
      <nav id="nav">{sectionsJSX}</nav>
    </div>
  );
}
