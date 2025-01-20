// Collapse.js

import React, { useState } from 'react'

const Collapse = ({ defaultActiveKey, onChange, children }: any) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || null)

  const handlePanelClick = (key: any) => {
    if (activeKey === key) {
      setActiveKey(null)
    } else {
      setActiveKey(key)
    }

    if (onChange) {
      onChange(key)
    }
  }

  return (
    <div className="w-full mx-auto lg:w-3/4">
      {React.Children.map(children, (child, index) => {
        const key = child.props.panelKey || index.toString()
        const isActive = key === activeKey

        return React.cloneElement(child, {
          isActive,
          onPanelClick: () => handlePanelClick(key),
        })
      })}
    </div>
  )
}

export default Collapse
