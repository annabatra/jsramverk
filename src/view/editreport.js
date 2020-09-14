import React, { Component } from 'react';

class EditReport extends React.Component {
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);


        this.state = {
            week: null,
            report: ""
        };
    }

    componentDidMount() {

        var apiUrlId = 'http://localhost:1337/editreport/' + this.props.match.params.id;

        fetch(apiUrlId)
            .then((response) => response.json())
            .then(data => {
                this.setState({
                    report: data.data.report,
                    week: data.data.week
            });
        });
    }

    handleChange = e => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
        [name]: value
      })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var id = this.props.match.params.id;
        const apiUrl = 'http://localhost:1337/editreport/' + id;

        const user = {
            "week": this.state.week,
            "report": this.state.report
        }

        fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify(user)
        })
        .then((response) => response.json())
        .then(data => {
            if (data.errors) {
                alert("Du är inte inloggad :(");
                this.props.history.push("/logon")
            } else {
                alert("Sparat!");
            };
        });
        this.routeChange();
    };

    routeChange() {
        let path = "/reports/week/" + this.state.week;
        this.props.history.push(path);
    }

    render() {
        return (
        <div className="reportDiv">
        <h1 dangerouslySetInnerHTML= {{__html: this.state.week}} />
        <form onSubmit={this.handleSubmit}>
            <label><p>Redovisningstext:</p></label>
            <textarea value={this.state.report}  onChange={this.handleChange} name="report" required/>
            <p><input type="submit" value="Redigera" /></p>
        </form>
        <a href="/">Tillbaka</a>
        </div>
    )}
}

export default EditReport;
