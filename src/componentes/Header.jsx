// Header.jsx
import React from 'react';

function Header() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('es-ES', options);

  return (
    <div className="header">
      <div className="date">{formattedDate}</div>
    </div>
  );
}

export default Header;
