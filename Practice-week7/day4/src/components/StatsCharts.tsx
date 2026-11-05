import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    { month: "Jan", users: 40 },
    { month: "Feb", users: 65 },
    { month: "Mar", users: 55 },
    { month: "Apr", users: 90 },
    { month: "May", users: 75 },
    { month: "Jun", users: 120 },
];

function StatsChart() {
    return (
        <div style={{ width: "100%", height: 300 }}>

            <h2>Monthly User Statistics </h2>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray={"3 3"} />

                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar
                        dataKey="users"
                        fill="#8884d8"
                        name="Users"
                    />

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
export default StatsChart;