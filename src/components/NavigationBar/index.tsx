import * as React from 'react';
import './navBar.css';

export default function NavigationBar({ sections }) {
  const sectionsJSX = sections.map(section => (
    <a href={`#${section}`}>{section}</a>
  ));

  return <nav id="nav">{sectionsJSX}</nav>;
}
