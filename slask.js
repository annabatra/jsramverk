componentDidMount() {

    var apiUrlId = 'http://localhost:1337/editreport/' + id;

    fetch(apiUrlId)
        .then((response) => response.json())
        .then(data => {
            this.setState({
                report: data.data.report,
                week: data.data.week
        });
    });
}
