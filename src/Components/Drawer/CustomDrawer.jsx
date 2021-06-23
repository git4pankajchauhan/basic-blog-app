import { Close } from '@material-ui/icons'
import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { closeDrawer } from 'Store/actions/common.action'
import { Drawer } from './Style/CustomDrawerStyle'

const CustomDrawer = props => {
  const containerRef = useRef(null)

  const onClose = e => {
    if (containerRef.current === e.target) {
      props.closeDrawer()
    }
  }

  return props.isDrawerOpen ? (
    <Drawer ref={containerRef} onClick={onClose}>
      <div className='c-drawer-container'>
        <div className='c-drawer-head'>
          <Close onClick={props.closeDrawer} /> {props.headTitle}
        </div>
        <div className='c-drawer-children'>{props.children}</div>
      </div>
    </Drawer>
  ) : null
}

const mapStateToProps = state => ({
  isDrawerOpen: state.common.isDrawerOpen,
})

const mapDispatchToProps = dispatch => bindActionCreators({ closeDrawer }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)
