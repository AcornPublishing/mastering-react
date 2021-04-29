var TextBox = React.createClass({
    render: function() {
        return (
            <input className='form-control' 
                name={this.props.name}
                type='text' 
                value={this.props.value}
                onChange={this.props.onChange}/>
        );
    }
});

var ExampleForm = React.createClass({
    getInitialState: function () {
        return { form: { firstName: 'Ryan', lastName: 'Vice'} }
    },
    onChange: function(event) {
        this.state.form[event.target.name] = event.target.value;

        this.setState({form: this.state.form});
    },
    onSubmit: function(event) {
        event.preventDefault();
        
        alert('Form submitted. firstName: ' +
            this.state.form.firstName +
            ', lastName: ' +
            this.state.form.lastName);
            
    },
    render: function() {
       var self = this;
       return (
            <form onSubmit={this.onSubmit}>
                <TextBox name='firstName' 
                    value={this.state.form.firstName}
                    onChange={this.onChange}/>
                <TextBox name='lastName'
                    value={this.state.form.lastName}
                    onChange={this.onChange}/>
                <button className='btn btn-success' 
                	type='submit'>Submit</button>
            </form>
        );
    }
});

React.render(
    <ExampleForm/>,
    document.getElementById('view'));