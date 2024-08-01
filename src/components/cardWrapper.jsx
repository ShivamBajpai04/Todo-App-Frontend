import { Card, CardHeader, CardContent,CardTitle } from "./ui/card"

export default function CardWrapper({ children }) {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>My Todos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {children}
            </CardContent>
        </Card>
    )
}
