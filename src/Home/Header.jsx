import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>凤蝶</span>
          </a>
          <span>六度人脉关系网</span>
        </h1>
      </div>
    </header>
  );
}
