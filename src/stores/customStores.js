// We are creating our own store here

import { writable } from "svelte/store";

const defaultSettings = {
  colorScheme: "dark",
  language: "en",
  fontSize: 14,
};

function createSettingsStore() {
  const { subscribe, update, set } = writable({...defaultSettings});

  return {
    subscribe,
    update,
    set,
    reset: () => {
      set({...defaultSettings});
    },
    toggoleColorScheme: () => {
      update((settings) => {
        const colorScheme = settings.colorScheme === "dark" ? "light" : "dark";
        return { ...settings, colorScheme };
      });
    },
  };
}

export default createSettingsStore();
