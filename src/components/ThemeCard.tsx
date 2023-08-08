'use client';

import { useTheme } from 'next-themes';
import styles from '@/styles/ThemeCard.module.css';
import { useEffect, useState } from 'react';

export default function ThemeCard() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(true);

  useEffect(() => {
    if (theme === 'system') {
      if (resolvedTheme === 'light') {
        setChecked(false);
      } else {
        setChecked(true);
      }
    } else if (theme === 'light') {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [theme, resolvedTheme]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (checked) {
      setTheme('dark');
      setChecked(true);
    } else {
      setTheme('light');
      setChecked(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#F5F5F7] dark:bg-[#010101] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm transition duration-300 ease-in-out">
      <div className="">
        <input
          type="checkbox"
          id="check-5"
          className={styles.toggleCheckbox}
          checked={checked}
          onChange={handleChange}
          name="theme"
          aria-label="Theme"
        />
        <label className={styles.toggleLabel} htmlFor="check-5">
          <span className={styles.toggleLabelBackground}></span>
        </label>
      </div>
    </div>
  );
}
