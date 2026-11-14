import React, { useState, useEffect } from 'react';

export default function TypewriterText({
  words = ["grassroots trust.", "human rights champion.", "child protection defender.", "climate action pioneer."],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1800,
  className = "",
  cursorColor = "#ff6036"
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullWord.substring(0, currentText.length + 1));

        if (currentText === fullWord) {
          // Finished typing, pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting characters
        setCurrentText(fullWord.substring(0, currentText.length - 1));

        if (currentText === '') {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <span
        style={{ backgroundColor: cursorColor }}
        className="inline-block w-1 sm:w-1.5 h-[0.9em] ml-1.5 animate-blink rounded-xs"
        aria-hidden="true"
      />
    </span>
  );
}
