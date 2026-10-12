// First visit: a small popup explaining how to add the book to the home
// screen (iPhone and Android) so it works offline. Shown once per browser,
// only on the hosted site (offline needs sw.js), and never inside the
// home-screen app itself.

(() => {
    const tip = document.getElementById("install-tip");
    const installed = window.matchMedia("(display-mode: standalone)").matches
        || navigator.standalone === true; // iOS home-screen app
    if (!tip?.showModal || installed || !/^https?:$/.test(location.protocol)) return;
    if (prefs.get("installTipSeen")) return;
    prefs.set("installTipSeen", "1");
    tip.showModal();
})();
