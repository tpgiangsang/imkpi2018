import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: 0,
            quantity: 0,
            status: true,
            category: 'all',
            brand: 'all',
            note: ''
        }
    }

    componentWillMount() {
        if (this.props.itemEditing && this.props.itemEditing.id !== null) {
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                // status: this.props.itemEditing.status,
                price: this.props.itemEditing.price,
                quantity: this.props.itemEditing.quantity,
                category: this.props.itemEditing.category,
                brand: this.props.itemEditing.brand,
                note: this.props.itemEditing.note
            })
        } else {
            this.onClear();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                // status: nextProps.itemEditing.status,
                price: nextProps.itemEditing.price,
                quantity: nextProps.itemEditing.quantity,
                category: nextProps.itemEditing.category,
                brand: nextProps.itemEditing.brand,
                note: nextProps.itemEditing.note
            })
        } else {
            this.onClear();
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        // if (name === 'status') {
        //     value = target.value === 'true' ? true : false;
        // }
        this.setState({
            [name]: value
        })
    }
    
    formValidation = () => {
        var isValid = true;
        if(!this.state.category || !this.state.brand || this.state.category === 'all' || this.state.brand === 'all' || this.state.price <= 0 || this.state.quantity <= 0) {
            isValid = false;
        }
        return isValid;
    }
    
    errorFormNotify = () =>  {
        toast.error("Please fill all field in this form !", {
            position: toast.POSITION.TOP_LEFT
        });
    }

    onSave = (event) => {
        event.preventDefault();
        if(!this.formValidation()) {
            this.errorFormNotify();
        } else {
            this.props.onSaveTask(this.state);     
            this.onClear();
            this.onCloseForm();
        }
    }

    onClear = () => {
        this.setState({
            name: '',
            price: 0,
            quantity: 0,
            status: true,
            category: '',
            brand: '',
            note: ''
        })
    }
    
    render() {
        var { id } = this.state;
        if(!this.props.isDisplayForm) return null; 
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{ !id ?  'Add a new item' : 'Update item'}
                        <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSave}>
                        <div className="form-group">
                            <label>Name :</label>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Price :</label>
                            <input type="number" className="form-control" name="price" value={this.state.price} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Quantity :</label>
                            <input type="number" className="form-control" name="quantity" value={this.state.quantity} onChange={this.onChange} />
                        </div>
                        <label>Category :</label>
                        <select className="form-control" name="category" value={this.state.category} onChange={this.onChange}>
                            <option value="all">...</option>
                            <option value="Headphone">Headphone</option>
                            <option value="PC">PC</option>
                            <option value="Ipad">Ipad</option>
                            <option value="Iphone">Iphone</option>
                            <option value="Laptop">Laptop</option>
                        </select>
                        <label>Brand :</label>
                        <select className="form-control" name="brand" value={this.state.brand} onChange={this.onChange}>    
                            <option value="all">...</option>                       
                            <option value="Samsung">Samsung</option>
                            <option value="Apple">Apple</option>
                            <option value="HP">HP</option>
                            <option value="Asus">Asus</option>
                            <option value="Dell">Dell</option>
                        </select>
                        <div className="form-group">
                            <label>Note :</label>
                            <textarea  type="text" className="form-control" name="note" value={this.state.note} onChange={this.onChange} />
                        </div>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Save</button>&nbsp;
							<button type="button" className="btn btn-danger" onClick={this.onClear}>Reset</button>
                        </div>
                    </form>
                    <ToastContainer autoClose={2000}/>
                </div>
            </div>
        );
    }
}

export default TaskForm;
// tham số 2 là dispatch action