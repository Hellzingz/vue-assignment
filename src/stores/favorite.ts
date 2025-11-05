import {defineStore} from 'pinia';

export const useFavoriteStore = defineStore('favorite', {
    state: () => {
        return {
            username: '' as string,
            favorites: [] as string[],
        };
    },
    actions:{
        setUsername(name: string) {
            this.username = name;
        },
        addFavorite(course: string) {
            this.favorites.push(course);
     },
  },
})