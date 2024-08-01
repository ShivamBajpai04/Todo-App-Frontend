import { useRecoilValueLoadable } from "recoil";
import { todosAtom } from "../recoil/todos/todosAtom";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Skeleton } from "./ui/skeleton";

export default function Todo({ id }) {
  const todo = useRecoilValueLoadable(todosAtom(id));

  if (todo.state === "loading") {
    return (
      <div className="flex items-center gap-4">
        <Skeleton className="h-5 w-5 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-5 w-full" />
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <TrashIcon className="w-5 h-5" />
          <span className="sr-only">Delete Todo</span>
        </Button>
      </div>
    );
  } else if (todo.state === "hasError") {
    return <p>Error loading todo</p>;
  }
  return (
    <div className="flex items-center gap-4">
      <Checkbox />
      <div className="flex-1">
        <p className="font-medium">{todo.contents.title}</p>
        <p className="text-sm text-muted-foreground">
          {todo.contents.description}{" "}
        </p>
      </div>
      <Button variant="ghost" size="icon" className="text-muted-foreground">
        <TrashIcon className="w-5 h-5" />
      </Button>
    </div>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
