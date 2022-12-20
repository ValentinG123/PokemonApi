import React from 'react'

const BarProgress = (props) => {
    const { bgcolor, completed } = props;
    const fillerStyles = {
        width: `${completed}%`
      }
    console.log(completed)
    return (
      <div>

        <div className="progress h-[12px] w-[280px] rounded-[10px] bg-slate-200">
                <div className={`progress-bar  h-[100%] flex items-center justify-end rounded-[5px] ${bgcolor}`} style={fillerStyles}>
                  <span className="progress-bar-text text-[8px]">{completed}/100</span>
                </div>
              </div>
            
      </div>
  )
}

export default BarProgress