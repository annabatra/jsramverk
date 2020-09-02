import React from 'react';

function Report() {
  return <div className="infoDiv">
        <h1>Redovisning!</h1>

        <p>Denna sida är byggd med React. För att få routes att fungera på sidan har jag med hjälp av <b><u>npm install</u></b> installerat <b><u>react-router-dom</u></b> som hjälper mig med rätt så basic routing nu i början. <br /><br />
        För att få igång appen och kunna arbeta med den använder jag mig av <b><u>npm start</u></b>, och då ändras de ändringar jag gör i realtid vilket gör det väldigt smidigt att arbeta med.<br /><br />
        För att redan nu försöka hålla lite ordning på kod osv har jag delat upp de olika sidorna som syns, och exporterar/importerar de olika functionerna för dem, för att försöka hålla ordning och reda.
        </p>

        <a
            className="App-link"
            href="https://github.com/annabatra"
            target="_blank"
            rel="noopener noreferrer"
        >
          Min github finns här
        </a>
    </div>
}

export default Report;
