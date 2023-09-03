import React from 'react'
import TokenDistributionSvg from '.././assets/svg/token-distribution-visual.svg'
import TokenDistributionSvgDark from '.././assets/svg/Token-distribution-dark.png'
import { setToogleSwitch } from './darktheme';

function TokenImgDark() {
    const {isDark, toggleTheme,theme} = setToogleSwitch();
    return (
      <div className="w-full h-full flex justify-center items-center">
          <img src={TokenDistributionSvgDark } alt="Token Distribution" />
      </div>
    )
}

export default TokenImgDark