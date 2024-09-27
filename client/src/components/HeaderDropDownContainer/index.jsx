import React from 'react';
function HeaderDropDownContainer({ className, theme, children }) {
  return (
    <div className={className} style={{ background: `${!theme ? '#211f1f' : 'white'}` }}>
      {children}
    </div>
  );
}
export default HeaderDropDownContainer;
