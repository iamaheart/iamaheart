const audioContext = new (window.AudioContext ||
    window.webkitAudioContext)();

  function playNote(frequency, startTime, duration) {
    const oscillator = audioContext.createOscillator();

    oscillator.type = "triangle";
    oscillator.frequency.value = frequency;

    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.1,
      audioContext.currentTime + duration
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start(audioContext.currentTime + startTime);
    oscillator.stop(audioContext.currentTime + startTime + duration);
  }

  function playMusic() {
    const notes = [
      { freq: 261.63, time: 0, duration: 0.4 }, // C4
      { freq: 329.63, time: 0.5, duration: 0.4 }, // E4
      { freq: 392.0, time: 1, duration: 0.4 }, // G4
      { freq: 523.25, time: 1.5, duration: 0.4 }, // C5
      { freq: [261.63, 329.63, 392.0], time: 2, duration: 0.8 }, // C Major Chord
      { freq: 392.0, time: 3, duration: 0.4 }, // G4
      { freq: 329.63, time: 3.5, duration: 0.4 }, // E4
    ];

    notes.forEach((note) => {
      if (Array.isArray(note.freq)) {
        note.freq.forEach((f) => playNote(f, note.time, note.duration));
      } else {
        playNote(note.freq, note.time, note.duration);
      }
    });
  }