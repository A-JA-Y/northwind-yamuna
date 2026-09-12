"use client";

import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "plansUnlocked";
const CHANGE_EVENT = "plans-unlocked-change";

function subscribe(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

const getServerSnapshot = () => false;

export function markPlansUnlocked() {
  try {
    localStorage.setItem(STORAGE_KEY, "true");
  } catch {
    /* storage unavailable (private mode / blocked) — in-memory state still works */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/**
 * True once the visitor has submitted a lead, either in this session or in a
 * previous one (persisted in localStorage). Reads storage through
 * useSyncExternalStore so there is no setState-in-effect and no hydration
 * mismatch: the server and first client render both see `false`.
 */
export default function usePlansUnlocked(isLeadSubmitted) {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (isLeadSubmitted && !stored) markPlansUnlocked();
  }, [isLeadSubmitted, stored]);

  return Boolean(isLeadSubmitted || stored);
}
