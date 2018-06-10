import * as React from 'react';
import './footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="footer__text">
        <div>
          Site code{' '}
          <a href="https://github.com/daily-bruin/interactive.2018.graduation-issue">
            available on GitHub
          </a>{' '}
          and released under the{' '}
          <a href="https://www.gnu.org/licenses/agpl-3.0.html">GNU AGPL 3.0</a>.
        </div>
        <div>
          Built with Suzy’s <span className="love">♥</span> in Kerckhoff 118 by
          Dustin Newman.
        </div>
      </div>
    </footer>
  );
}
