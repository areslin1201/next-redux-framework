import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import SeoSchema from './SeoSchema';
import { DetailWrapper } from './style';

class Detail extends PureComponent {
	render() {
		return (
			<DetailWrapper className='container'>
				<SeoSchema 
					schemaAuthor={this.props.schema.get('author')}
					schemaHeadline={this.props.title}
				/>

				<div className='row'>
					<div className='col-md-12'>
						<p>page:{this.props.match.params.id}</p>
					</div>
				</div>
				
			</DetailWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	title: state.getIn(['detail', 'title']),
	schema: state.getIn(['detail', 'schema'])
});

export default connect(mapStateToProps, null)(withRouter(Detail));