import { Close } from '@material-ui/icons'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from 'Store/actions/common.action'
import { Drawer } from './Style/CustomDrawerStyle'

const CustomDrawer = props => {
  const containerRef = useRef(null)

  const isDrawerOpen = useSelector(state => state.common.isDrawerOpen)
  const dispatch = useDispatch()

  const onClose = e => {
    if (containerRef.current === e.target) {
      dispatch(toggleDrawer(false))
    }
  }

  return isDrawerOpen ? (
    <Drawer ref={containerRef} onClick={onClose}>
      <div className='c-drawer-container'>
        <div className='c-drawer-head'>
          <Close onClick={dispatch(toggleDrawer(false))} /> {props.headTitle}
        </div>
        <div className='c-drawer-children'>{props.children}</div>
      </div>
    </Drawer>
  ) : null
}

export default CustomDrawer
