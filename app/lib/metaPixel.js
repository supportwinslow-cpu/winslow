export const META_PIXEL_ID = "992699016482921";

export const fbqEvent = (eventName, data = {}) => {
  if (typeof window === "undefined") return;
  if (!window.fbq) return;

  window.fbq("track", eventName, data);
};

export const fbqCustom = (eventName, data = {}) => {
  if (typeof window === "undefined") return;
  if (!window.fbq) return;

  window.fbq("trackCustom", eventName, data);
};