import react from 'react'
import JSONPretty from 'react-json-pretty';
import '../styles/Doc.css'

const Doc = (props) => {


    return (
        <div className="requestContainer">
            <div className="url">
                <h1>{props.doc.type}</h1>
                <a>{props.doc.endpoint}</a>
            </div>
            {props.doc.requestBody ?
                <div className="requestBody">
                    <h1>Request Body:</h1>
                    <div className="request">
                        <JSONPretty id="json-pretty" data={props.doc.requestBody}>

                        </JSONPretty>
                    </div>
                </div>
                : null}

            {props.doc.responseBody ?
                <div className="responseBody">
                    <h1>Response Body:</h1>
                    <div className="response">
                        <JSONPretty id="json-pretty" data={props.doc.responseBody}>

                        </JSONPretty>
                    </div>
                </div>
                : null}
        </div>
    )
}

export default Doc