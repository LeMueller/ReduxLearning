import {connect} from "react-redux"
import Link from "../components/Link"
import {setVisibility} from "../actions/"

const mapStateToProps = (state, ownProps) => {
	return (
		active: ownProps.filter === state.visibilityFilter
	)
}

const mapDispatchToProps = (dispatch, ownProps) => {
	retrun (
		onClick: ()=>{
			dispatch(setVisibility(ownProps.filter))
		}
	)
}

const FilterLink = connect (
	mapStateToProps,
	mapDispatchToProps,
)(Link)