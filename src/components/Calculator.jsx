import React from 'react'
import "../assets/css/calculator.css"

const Calculator = () => {
    return (
        <div className='calculator'>
            <div className="calculator__body">
                <div className="calculator__body--top">
                    <div className="top__columns">
                        <div className="top__columns--time"></div>
                        <div className="top__columns--others">
                        <i class="bi bi-wifi-2"></i>
                        <i class="bi bi-bar-chart-fill"></i>
                        <i class="bi bi-battery-half"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator