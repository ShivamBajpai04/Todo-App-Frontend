import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";

export default function CardWrapper({ children }) {
  return (
    <Card className="w-full max-w-md m-auto shadow-2xl shadow-black">
      <CardHeader>
        <CardTitle className="bg-gradient-to-t from-slate-900 to-cyan-600 bg-clip-text text-transparent text-center">
          My Todos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}
