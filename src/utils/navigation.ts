import type React from 'react';

// Custom event name for internal history changes
export const NAVIGATE_EVENT = 'celestarc:navigate';

export function notifyNavigation(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(NAVIGATE_EVENT));
  }
}

/**
 * Handles navigation to the home page or specific in-page section.
 * Works seamlessly whether currently on the homepage or on an error/404 page.
 */
export function scrollToSection(sectionId: string, event?: React.MouseEvent): void {
  if (event) {
    event.preventDefault();
  }

  if (typeof window === 'undefined') return;

  const isHome = window.location.pathname === '/' || window.location.pathname === '';
  const cleanId = sectionId.replace(/^#/, '');
  const isTopTarget = cleanId === 'top' || cleanId === '' || cleanId === '/' || cleanId === '#';

  if (!isHome) {
    // If currently on a 404 or other path, update browser URL to '/' and notify React to mount home
    window.history.pushState(null, '', '/');
    notifyNavigation();

    // After React re-mounts the homepage, scroll to the targeted element
    setTimeout(() => {
      if (isTopTarget) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(cleanId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 60);
    return;
  }

  // Already on home page
  if (isTopTarget) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.replaceState(null, '', '/');
    }
  } else {
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Keep URL clean without appending raw #sectionId
      window.history.replaceState(null, '', window.location.pathname);
    }
  }
}

/**
 * Strips lone hash ('/#' or '#') from the current browser address bar without a page reload.
 */
export function sanitizeUrlHash(): void {
  if (typeof window === 'undefined') return;

  if (window.location.hash === '#' || window.location.hash === '') {
    if (window.location.href.endsWith('/#') || window.location.href.endsWith('#')) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }
}
