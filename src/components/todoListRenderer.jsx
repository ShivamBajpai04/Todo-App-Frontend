import CardWrapper from "./cardWrapper";
import Todo from "./todo";
import { useRecoilValue } from "recoil";
import { todoListState } from "@/recoil/todos/todosAtom";

export default function TodoListRenderer() {
    const todoList = useRecoilValue(todoListState);

    return (
        <CardWrapper>
            {todoList.map(x => <Todo key={x._id} id={x._id} />)}
        </CardWrapper>
    )

}