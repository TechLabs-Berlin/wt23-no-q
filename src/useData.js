import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUser = create(
  persist(
    (set, get) => ({
      usersArray: [],
      addUser: user => {
        set(state => {
          return { usersArray: [...state.usersArray, user] };
        });
      },
      removeLastUser: () => {
        set(state => {
          const updatedUsersArray = [...state.usersArray];
          updatedUsersArray.pop(); // Remove the last element
          return { usersArray: updatedUsersArray };
        });
      },
      removeUser: (userId) => {
        set((state) => {
          return { usersArray: state.usersArray.filter((user) => user.id !== userId) };
        });
      },
    }),
    {
      name: 'usersArray', // unique name
      getStorage: () => localStorage,
    }
  )
);

