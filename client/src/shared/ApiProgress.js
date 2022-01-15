import React, {Component} from 'react';
import axios from "axios";

class ApiProgress extends Component {

    state = {
        pendingApiCall: false
    }

    componentDidMount() {
        axios.interceptors.request.use((request) => {
            // if (request.url === this.props.path) {
            //     this.setState({
            //         pendingApiCall: true
            //     });
            // }
            this.updateApiCallFor(request.url, true);
            return request;
        });

        axios.interceptors.response.use((response) => {
            // if(response.config.url === this.props.path){
            //     this.setState({
            //         pendingApiCall: false
            //     });
            // }
            this.updateApiCallFor(response.config.url, false);
            return response;
        }, (error) => {
            // if(error.config.url === this.props.path){
            //     this.setState({
            //         pendingApiCall: false
            //     });
            // }
            this.updateApiCallFor(error.config.url, false);
            throw error;
        });
    }

    updateApiCallFor = (url, inProgress) => {
        if (url === this.props.path) {
            this.setState({
                pendingApiCall: inProgress
            });
        }
    }


    render() {
        const {pendingApiCall} = this.state;
        return (
            <div>
                {React.cloneElement(this.props.children, {
                    pendingApiCall
                })}
            </div>

        );
    }
}

export default ApiProgress;
