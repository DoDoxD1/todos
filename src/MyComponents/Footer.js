import React from 'react';

export default function Footer() {
  let FooterStyle = {
    marginTop: '100vh',
  };
  return (
    <div className="bg-dark text-light p-3 text-center" style={FooterStyle}>
      <p>Copyrights &copy;</p>
    </div>
  );
}