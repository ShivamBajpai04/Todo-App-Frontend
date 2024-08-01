import { atomFamily, selectorFamily, selector } from "recoil";
import axios from "axios";

// Atom family for individual todos
const todosAtom = atomFamily({
    key: "todoAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: (id) => async () => {
            try {
                await new Promise(a=>setTimeout(a,5000))
                const res = await axios.get(`http://127.0.0.1:3000/todos/${id}`, {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.c2hpdmFtYmFqcGFpMDQ.XMQZANXSL31kcDHEH8TRmpE7VqkkOtb-YjVrXw3f2vI"
                    }
                });
                return res.data;
            } catch (error) {
                console.error("Error fetching todo:", error);
                throw error; // Propagate the error to Recoil's error state
            }
        }
    })
});

// Selector for the todo list
const todoListState = selector({
    key: 'todoListState',
    get: async () => {
        try {
            let response = await axios.get('http://127.0.0.1:3000/todos', {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.c2hpdmFtYmFqcGFpMDQ.XMQZANXSL31kcDHEH8TRmpE7VqkkOtb-YjVrXw3f2vI"
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching todo list:", error);
            throw error;
        }
    }
});

export { todosAtom, todoListState }
