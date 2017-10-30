import React, { PropTypes } from 'react'
import DocumentTitle from '../../common/DocumentTitle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFacilitatorGuide } from '../../../actions/curriculumActions';
import Loader from '../../common/Loader';
import FacilitorTemplate from './Template';

export class FacilitatorGuide extends React.Component {
  componentDidMount() {
    const { curriculum_id, id } = this.props.params;
    this.props.getFacilitatorGuide(curriculum_id, id);
  }

  render () {
    const { hasBeenFetched, guide } = this.props.curriculum;
    if (!hasBeenFetched) return <Loader owner="facilitor guide"/>;

    return <FacilitorTemplate content={guide} />;
  }
}

FacilitatorGuide.propTypes = {
  getFacilitatorGuide: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  curriculum: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    curriculum: state.curriculum
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getFacilitatorGuide
  }, dispatch)
}

export default DocumentTitle('Facilitor Guide')(connect(
  mapStateToProps,
  mapDispatchToProps
)(FacilitatorGuide));
