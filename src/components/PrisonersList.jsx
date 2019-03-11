import React from 'react';
import Prisoner from './Prisoner';

class PrisonersList extends React.Component {
    render() {
        return (
            <div>
                {this.props.prisoners.map((prisoner, prison) => {
                    return <Prisoner
                        name={prisoner.name}
                        id={prisoner.id}
                        skills={prisoner.skills}
                        key={prison.zipcode}
                    />
                })}
            </div>
        );
    };
};

Prisoner.defaultProps = {
    prisoners: []
};

export default PrisonersList;

// const PrisonersList = props => (
//     <div>
//         {props.prisons.map(prison => {
//             return <Route
//                 path={`/prisons/${prison.name}`}
//                 render={}
//             />
//         })}
//         {/* {props.prisoners.map(prisoner => {
//             return <Prisoner prisoner={prisoner} />
//         })} */}
//     </div>
// );

// {this.props.prisoners.map(prisoner => {
//     <Route path={`/prisons/${prison.name}`} />
//     })} />
// })}

/* SEPARATE STUUUUFFF */

// import React from 'react';
// import Prisoner from './Prisoner';

// const PrisonersList = props => (
//     <div>
//         {props.prisoners.map(prisoner => {
//             return <Prisoner prisoner={prisoner} />
//         })}
//     </div>
// );

// export default PrisonersList;