import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUser = create(
  persist(
    (set) => ({
      usersArray: [],
      addUser: (user) => {
        set((state) => {
          return { usersArray: [...state.usersArray, user] };
        });
      },
      removeUser: (userId) => {
        set((state) => {
          return { usersArray: state.usersArray.filter((user) => user.id !== userId) };
        });
      },
    }),
    {
      name: "usersArray", // unique name
      getStorage: () => localStorage,
    }
  )
);
