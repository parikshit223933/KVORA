import React from "react";
import {
	ResponsiveContainer,
	BarChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Bar,
} from "recharts";
class MainChart extends React.Component {
	constructor() {
		super();
		this.state = [
			{
				name: "Page A",
				pv: 2400,
			},
			{
				name: "Page B",
				pv: 1398,
			},
			{
				name: "Page C",
				pv: 9800,
			},
			{
				name: "Page D",
				pv: 3908,
			},
			{
				name: "Page E",
				pv: 4800,
			},
			{
				name: "Page F",
				pv: 3800,
			},
			{
				name: "Page G",
				pv: 4300,
			},
		];
	}
	render() {
		return (
			<ResponsiveContainer width={"100%"} height={600}>
				<BarChart data={this.state}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="pv" fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
		);
	}
}
export default MainChart;
