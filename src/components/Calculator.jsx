import React, { useState } from 'react'

import RowCalculator from './RowCalculator'

import "../assets/css/calculator.css"
import BatteryIcon from "../assets/icons/Battery.svg"
import WifiIcon from "../assets/icons/Wifi.svg"
import NetworkIcon from "../assets/icons/Signal.svg"

const Calculator = () => {

    // useState has to be on array
    const [currentTime, setCurrentTime] = useState("");

    setInterval(() => {
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }
        const formattedTime = now.toLocaleTimeString('en-US', options);

        setCurrentTime(formattedTime);
    }, 1000);

    return (
        <div className='calculator'>
            <div className="calculator__body">
                <div className="calculator__body--top">
                    <div className="top__columns">
                        <div className="top__columns--time">
                            {currentTime}
                        </div>
                        <div className="top__columns--others d-flex gap-1">
                            <img src={BatteryIcon} alt="Battery" />
                            <img src={NetworkIcon} alt="Network" />
                            <img src={WifiIcon} alt="Wifi" />
                        </div>
                    </div>
                </div>
                <div className="calcukator__body--display">
                    <div className="display__print"></div>
                    <div className="display__actions">
                        <RowCalculator />
                        <RowCalculator />
                        <RowCalculator />
                        <RowCalculator />
                        <RowCalculator />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator