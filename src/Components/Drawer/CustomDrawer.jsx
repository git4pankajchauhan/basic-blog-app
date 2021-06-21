import { Close } from '@material-ui/icons';
import React, { useRef } from 'react';
import { Drawer } from './Style/CustomDrawerStyle';

const CustomDrawer = props => {
  const containerRef = useRef(null);

  const onClose = e => {
    if (containerRef.current === e.target) {
      props.closeHandle();
    }
  };

  return props.isOpen ? (
    <Drawer ref={containerRef} onClick={onClose}>
      <div className="c-drawer-container">
        <div className="c-drawer-head">
          <Close onClick={props.closeHandle} /> {props.headTitle}
        </div>
        <div className="c-drawer-children">{props.children}</div>
      </div>
    </Drawer>
  ) : null;
};

export default CustomDrawer;
