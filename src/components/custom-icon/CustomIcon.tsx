// Import React
import React, { ReactElement } from 'react';

// Import Constants
import { ICON_SIZES } from '../../common/constants/icon/iconSizes';
import { ICON_STATUS } from '../../common/constants/icon/iconStatus';

export interface IconProps {
  status: ICON_STATUS;
  size?: ICON_SIZES | number;
  name: ReactElement;
}

CustomIcon.defaultProps = {
  size: ICON_SIZES.MEDIUM,
  status: ICON_STATUS.PRIMARY
};

function CustomIcon(props: IconProps) {
  // Descturct Props
  const { size, name, status } = props;

  return (
    <>
      {React.cloneElement(name, {
        width: size,
        height: size,
        color: `${status}`
      })}
    </>
  );
}

export default CustomIcon;
