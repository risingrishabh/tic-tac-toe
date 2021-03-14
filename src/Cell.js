import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input
                style={{ width: '40px', height: '40px' }}
                type="button"
                value={this.props.char}
                onClick={() => this.props.onClick()}
                disabled={this.props.char !== ' '}
            />
        )
    }
}

export default Cell;