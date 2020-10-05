import React, { Component } from 'react';

class Reports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            week: null,
            report: ""
        };
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        var apiUrlId = 'https://me-api.jsramverk.me/reports/week/' + id;

        fetch(apiUrlId)
            .then((response) => response.json())
            .then(data => {
                this.setState({
                    report: data.data.report,
                    week: data.data.week
            });
        });
    }


    render() {
        var apiUrl = window.location.href.slice(0, -1);
        var id = this.props.match.params.id;

        return (
        <div className="reportDiv">
        <nav className="reports">
            <a href={`${apiUrl}1`}>kmom01</a>
            <a href={`${apiUrl}2`}>kmom02</a>
            <a href={`${apiUrl}3`}>kmom03</a>
            <a href={`${apiUrl}4`}>kmom04</a>
            <a href={`${apiUrl}5`}>kmom05</a>
            <a href={`${apiUrl}6`}>kmom06</a>
            <a href={`${apiUrl}10`}>kmom10</a>
        </nav>
        <h2 dangerouslySetInnerHTML= {{__html: this.state.week}} ></h2>
        <article className="article-standard"
            dangerouslySetInnerHTML={{__html: this.state.report}} >
        </article>
        <div class="editDiv">
        <a class="editButton" href={"/editreport/" + id}>Redigera denna rapport</a>
        </div>
        </div>
    )
    }
}

export default Reports;
