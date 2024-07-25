'use client';
import React from 'react';
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { IonButton } from '@ionic/react';

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            
            
           <button className='px-4 py-2 text-lg bg-blue-500 text-white hover:bg-blue-700 rounded-full'> 
            Contact me
            </button>
                
        </div>

    )
}

export default ThemeToggler