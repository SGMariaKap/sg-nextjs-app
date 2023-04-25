import React from 'react';

function renderControl(control, index) {
    if (!control) {
      console.log('if (!control)return null;');
      return null;
    }
    if (Array.isArray(control)) {
      console.log('Array.isArray(control)');
      return control.map((c, index) => renderControl(c, index));
    }
  
    const { ControlType, Control, Id: id, class: className, ...props } = control;
    const children = Control ? renderControl(Control) : null;
    const updatedProps = className ? { ...props, className } : props;
    const elementProps = ControlType ? { ...updatedProps, controltype: ControlType } : updatedProps;
    const Element = ControlType || 'div';
  
    return React.createElement(Element, { key: index, ...elementProps }, children);
  
}
function Controls({ controls }) {
  return <>{renderControl(controls)}</>;
}
export default Controls;
