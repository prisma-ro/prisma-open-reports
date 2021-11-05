import { Writable, writable } from "svelte/store";

export const currentPage: Writable<PrismaPage> = writable('map');
export const changePage = (newPage: PrismaPage) => {
  currentPage.set(newPage);
}

export const currentStep: Writable<number> = writable(2);
