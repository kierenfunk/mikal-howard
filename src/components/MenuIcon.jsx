import React from 'react';

const MenuIcon = ({ open, onClick }) => (
  <div className="menu-icon">
    <div className={`cursor-pointer ${open ? 'open' : ''}`} onClick={onClick} onKeyPress={() => {}} role="button" tabIndex="0">
      <span className="bg-black" />
      <span className="bg-black" />
      <div className="menu-icon-label text-black">
        <div>menu</div>
        <div>close</div>
      </div>
    </div>
  </div>
);

export default MenuIcon;
