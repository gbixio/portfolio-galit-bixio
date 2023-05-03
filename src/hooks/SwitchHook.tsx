import { useState } from "react"

type Theme = 'dark' | 'light'

export const Switch = () => {

    const [theme, setTheme] = useState<Theme>('light')

    return (
        <div className="container-switch">
            <span>Change Theme </span>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
        </div>
    )
}