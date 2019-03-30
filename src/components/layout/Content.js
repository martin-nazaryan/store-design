import React, {Component, Fragment} from 'react';

export default class Content extends Component {
    render() {
        return (
            <Fragment>
                <div className="nmc-content">

                    <div className="card nmc-article nmc-grey">
                        <img src="https://images.pexels.com/photos/990818/pexels-photo-990818.jpeg?cs=srgb&dl=agenda-analysis-business-990818.jpg&fm=jpg" className="card-img-top" alt="asas"/>
                        <div className="card-body">
                            <h1 className="card-title text-primary">E-Line Remote</h1>
                            <h1 className="card-title">IOs S-Serie</h1>
                            <p className="card-text nmc-text">
                                Solupti dignatem quos et ea comnimi estius dolu minctate num facerorum liquid
                                quibusciet ditaers ma dolores ciendia estionecti doluptus dio erio upta venture
                                minctatist volorib usciisimus. Alit volore et harumque vent, inusamendae et ma
                                intiatur, sum evelita.
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }
}
