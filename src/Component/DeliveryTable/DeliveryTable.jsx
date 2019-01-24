import React, { Component } from 'react';
import FilterableTable from 'react-filterable-table';
import { connect } from 'react-redux';
import * as  ActionCreators from '../../Store/Actions/ActionCreators/ActionCreators';
import DeliveryStatus from './Status'
import { Button, Modal } from 'react-bootstrap'
import ShowMap from './ShowMap'
import _ from 'lodash'
import { MapContainer } from './MapContainer';

class DeliveryTable extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.mapIsVisible = this.mapIsVisible.bind(this);
        this.orderDesc = this.orderDesc.bind(this)
        this.orderAsce = this.orderAsce.bind(this)

        this.state = {
            show: false,
            MadalBody:'' ,
            DeliveriesDatasorted: [],
            sorted: false
        };
    }
    handleClose() {
        this.setState({ show: false });
    }
    orderDesc() {
        let descData = []
        descData = _.orderBy(this.props.DeliveriesData, function (delivery) { return delivery.deliveryDate }, ['desc']);
        this.setState({ sorted: true, DeliveriesDatasorted: descData })
    }
    orderAsce() {
        let AsecData = []
        AsecData = _.orderBy(this.props.DeliveriesData, function (delivery) { return delivery.deliveryDate }, ['asec']);
        this.setState({ sorted: true, DeliveriesDatasorted: AsecData })
    }
    mapIsVisible(id) {
        let fromLocation = 0, toLocation = 0
        this.props.DeliveriesData.forEach((task) => {
            if (task.id === id) {
                fromLocation = task.fromLocation
                toLocation = task.toLocation
                this.setState({ show: true, MadalBody: <MapContainer toLocation={toLocation.split(",")} fromLocation={fromLocation.split(",")} /> });
            }
        })
    }
    handleShow(value) {
        this.setState({ show: true, MadalBody: <p> status is changed to  {value} </p> });
    }
    componentDidMount() {
        console.log("nkjkjh")
        this.props.getDeliveries();
     
    }

    render() {
        const fields = [
            { name: 'courier', displayName: "courier", inputFilterable: true, sortable: true },
            { name: 'driverName', displayName: "Driver Name", inputFilterable: true, exactFilterable: true, sortable: false },
            { name: 'status', displayName: "status", inputFilterable: true, exactFilterable: true, sortable: true },
            { name: 'description', displayName: "description", inputFilterable: false, exactFilterable: true, sortable: false },
            { name: 'startedAt', displayName: "Started At", inputFilterable: false, exactFilterable: true, sortable: true },
            { name: 'finishedAt', displayName: "Finished At", inputFilterable: false, exactFilterable: true, sortable: false },
            { name: 'driverComment', displayName: "Driver Comment", inputFilterable: false, exactFilterable: true, sortable: false },
            { name: 'statusChanged', displayName: "Change status to", inputFilterable: false, exactFilterable: false, sortable: false, render: DeliveryStatus, changeDeliveryStateHandler: this.props.changeDeliveryState, openModal: this.handleShow },
            { name: 'showMap', displayName: "Show path", inputFilterable: false, exactFilterable: false, sortable: false, render: ShowMap, mapVisible: this.mapIsVisible },
            { name: 'id', displayName: "ID", inputFilterable: false, exactFilterable: false, sortable: false, visible: false }


        ];

        return (
            <div>
                <Button style={{ position: "absolute", top: "11.24%", color: 'blue' }}  bsSize="small" onClick={this.orderDesc}>Sort delivery date Descending</Button>
                <Button style={{ position: "absolute", top: "11.24%", left: "25%", color: "red" }}  bsSize="small" onClick={this.orderAsce}>Sort delivery date Ascending</Button>

                <FilterableTable
                    namespace="People"
                    data={this.state.sorted ? this.state.DeliveriesDatasorted : this.props.DeliveriesData}
                    fields={fields}
                    noRecordsMessage="There are no Deliveries to display"
                    noFilteredRecordsMessage="No Deliveries match your filters!"
                    pageSizes={[10, 5, 15, 20]}
                    pageSize={10}
                    loadingMessage="Getting deliveries data"
                />
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.MadalBody}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        DeliveriesData: state.Delivery.tasks,
        currentStatus: state.Delivery.currentStatus,
    }
}

const MapDispatcherToProps = (Dispatcher) => {
    return {
        getDeliveries: () => Dispatcher(ActionCreators.getTasksAsync()),
        changeDeliveryState: (value, id) => Dispatcher(ActionCreators.changeTaskState(value, id)),
    }
}
export default connect(MapStateToProps, MapDispatcherToProps)(DeliveryTable);