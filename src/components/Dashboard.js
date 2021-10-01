import React, { Component } from 'react';
import Loading from './Loading';
import Panel from './Panel';
import classnames from 'classnames';

const data = [
	{
		id: 1,
		label: 'Total Interviews',
		value: 6
	},
	{
		id: 2,
		label: 'Least Popular Time Slot',
		value: '1pm'
	},
	{
		id: 3,
		label: 'Most Popular Day',
		value: 'Wednesday'
	},
	{
		id: 4,
		label: 'Interviews Per Day',
		value: '2.3'
	}
];
class Dashboard extends Component {
	state = {
		loading: false,
		focused: null
	};

	/* Instance Method */
	selectPanel(id) {
		this.setState((prev) => ({
			focused: prev.focused !== null ? null : id
		}));
	}

	render() {
		const dashboardClasses = classnames('dashboard', {
			'dashboard--focused': this.state.focused
		});

		if (this.state.loading) return <Loading />;

		const dataPanel = data
			.filter(
				(panel) =>
					this.state.focused === null || this.state.focused === panel.id
			)
			.map((d) => (
				<Panel
					key={d.id}
					label={d.label}
					value={d.value}
					onSelect={(event) => this.selectPanel(d.id)}
				/>
			));

		return <main className={dashboardClasses}>{dataPanel}</main>;
	}
}

export default Dashboard;
