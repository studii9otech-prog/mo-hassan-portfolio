import React, { useState, useEffect } from 'react';

const LiveTime = ({ timezone = "Africa/Cairo" }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            setTime(formatter.format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [timezone]);

    return (
        <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-1">Local Time (GMT+2)</span>
            <span className="text-xl font-light tabular-nums text-primary/80">{time}</span>
        </div>
    );
};

export default LiveTime;
