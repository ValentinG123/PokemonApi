import React from 'react'

const BarProgress = (props) => {
    const { bgcolor, completed } = props;
    const fillerStyles = {
        width: `${completed * 100 / 150}%`
      }
    return (
      <div>

        <div className="progress h-[13px] w-[280px] rounded-[10px] bg-slate-200">
                <div className={`progress-bar  h-[100%] flex items-center justify-end rounded-[5px] ${bgcolor}`} style={fillerStyles}>
                  <span className="progress-bar-text text-[8px]">{completed}/150</span>
                </div>
              </div>
            
      </div>
  )
}

export default BarProgress