type BadgeProps = {
    children: React.ReactNode;
    color?: "green" | "purple" | "pink";
};

export default function Badge({ children, color = "green" }: BadgeProps) {

    const colors = {
        green: "bg-green-500/20 text-green-700",
        purple: "bg-purple-500/20 text-purple-700",
        pink: "bg-pink-500/20 text-pink-700",
    };

    return (
        <span className={`px-3 py-1 text-sm font-medium rounded-full ${colors[color]}`}>
            {children}
        </span>
    );
}