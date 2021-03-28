import React, { PureComponent } from 'react';
import Left from './components/Left';
import Right from './components/Right';
import { HomeWrapper } from './style';

class Home extends PureComponent {
	render() {
		return (
			<HomeWrapper className='container'>
				<div className='row'>
					<div className='col-md-6'>
						<Left />
					</div>
					<div className='col-md-6'>
						<Right />
					</div>
				</div>
			</HomeWrapper>
		)
	}
}

export default Home;