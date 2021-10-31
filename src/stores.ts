import { Writable, writable } from "svelte/store";

export const currentPage: Writable<PrismaPage> = writable('map');
export const changePage = (newPage: PrismaPage) => {
  currentPage.set(newPage);
}
