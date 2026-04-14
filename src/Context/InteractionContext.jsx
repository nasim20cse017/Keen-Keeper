"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [timeline, setTimeline] = useState([]);

    // Load friends.json dynamically on mount
    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => setFriends(data))
            .catch(err => console.error("Failed to load friends:", err));
    }, []);

    const addInteraction = (type, personName) => {
        const newEntry = {
            id: Date.now(),
            type,
            person: personName,
            date: new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            }),
        };
        setTimeline(prev => [newEntry, ...prev]);
    };

    return (
        <InteractionContext.Provider value={{ friends, timeline, addInteraction }}>
            {children}
        </InteractionContext.Provider>
    );
};

export const useInteractions = () => useContext(InteractionContext);