import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// This is i18n and i10n
import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl'

// import LazyLoading from '../../common/components/LazyLoading'
// import { actions as exampleActions } from '../../redux/modules/example'
// import { exampleSelector } from '../../redux/selectors/exampleSelector'
// import { ExampleWithError } from '../../common/components/Example';
// import { ErrorBoundary } from '../../common/components/Utilities';

// This is lazy loading example
// const LazyExample = LazyLoading(() => import('../../common/components/Example/Example'));

class About extends Component {

    static propTypes = {
        // example: PropTypes.object.isRequired,
    }

    state = { }
    
    componentDidMount() {
        const { } = this.props
    }
    
    render() {
        const { } = this.state
        // Note for i18n and i10n
        // if `id` is found, it will use the matched message
        // otherwise, it will use defaultMessage as fallback
        return (
            <Fragment>

            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    // example: exampleSelector(state),
})

const mapDispatchToProps = {
    // ...exampleActions,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)
