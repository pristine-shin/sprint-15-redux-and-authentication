import configureStore from '../store';
import { act } from '@testing-library/react';

describe('01 - Setup Redux', () => {
  describe('configureStore', () => {
    it('should be a function that returns a Redux store', () => {
      expect(typeof configureStore).toEqual('function');
      const store = configureStore();
      expect(store).toHaveProperty('dispatch');
      expect(store).toHaveProperty('getState');
      expect(store).toHaveProperty('subscribe');
    });
  });

  describe('initial Redux store state', () => {
    it('should load the Redux store state with the initial books', () => {
      const store = configureStore();
      expect(store.getState()).toEqual({
        books: {
          "1": {
            "id": "1",
            "title": "The Count of Monte Cristo",
            "author": "Alexandre Dumas",
            "checkedOut": false
          },
          "2": {
            "id": "2",
            "title": "The Eyre Affair",
            "author": "Jasper Fforde",
            "checkedOut": false
          },
          "3": {
            "id": "3",
            "title": "Byzantium",
            "author": "Stephen Lawhead",
            "checkedOut": false
          },
          "4": {
            "id": "4",
            "title": "Harry Potter and the Philosopher's Stone",
            "author": "J.K. Rowling",
            "checkedOut": false
          },
          "5": {
            "id": "5",
            "title": "The Fellowship of the Ring",
            "author": "J. R. R. Tolkien",
            "checkedOut": false
          }
        }
      });
    });
  });

  describe('React application is connected to Redux', () => {
    it('should provide the Redux store to the whole React application', async () => {
      const div = document.createElement("div");
      div.id = "root";
      document.body.appendChild(div);

      vi.mock("../App", async () => {
        const { useContext } = await vi.importActual('react');
        const { ReactReduxContext } = await vi.importActual('react-redux');
        function VitestApp() {
          const { store } = useContext(ReactReduxContext);
          return (
            <p>
              {JSON.stringify(store.getState())}
            </p>
          );
        }
        return {
          default: VitestApp
        }
      });

      await act(async () => await import("../main.jsx"));
      expect(div).toHaveTextContent(JSON.stringify({
        books: {
          "1": {
            "id": "1",
            "title": "The Count of Monte Cristo",
            "author": "Alexandre Dumas",
            "checkedOut": false
          },
          "2": {
            "id": "2",
            "title": "The Eyre Affair",
            "author": "Jasper Fforde",
            "checkedOut": false
          },
          "3": {
            "id": "3",
            "title": "Byzantium",
            "author": "Stephen Lawhead",
            "checkedOut": false
          },
          "4": {
            "id": "4",
            "title": "Harry Potter and the Philosopher's Stone",
            "author": "J.K. Rowling",
            "checkedOut": false
          },
          "5": {
            "id": "5",
            "title": "The Fellowship of the Ring",
            "author": "J. R. R. Tolkien",
            "checkedOut": false
          }
        }
      }));
    });
  });
});
