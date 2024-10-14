import settings from "./setting";
import { derived } from "svelte/store";

const direction = derived(settings, ($settings) => {
  return $settings.language === "ar" ? "rtl" : "ltr";
});

const asyncDirection = derived(
  settings,
  ($settings, set) => {
    const timeoutID = setTimeout(() => {
      set($settings.language === "ar" ? "rtl" : "ltr");
    }, 1000);

    return () => {
      clearTimeout(timeoutID);
    };
  },
  "Initial Value"
);

const multipleDependencies = derived(
  [settings, direction],
  ([$settings, $direction]) => {
    return { ...$settings, direction: $direction };
  }
);
