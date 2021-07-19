import React from 'react';
import styles from './ReportComponent.css';
import { TableRow } from './TableRow';
import { getPatientEncounters } from './ReportComponent.resource';

const ReportComponent = () => {
  const [encountersList, setEncountersList] = React.useState([]);
  // const [selectedEncounter, setSelectedEncounter] = React.useState();
  let selectedEncounter;

  React.useEffect(() => {
    getPatientEncounters('').then((encs) => {
      //   console.log(encs.data.results);
      setEncountersList(encs);
    });
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr className={`omrs-bold ${styles.tr}`}>
          <td>Link to patient</td>
          <td>Patient name</td>
          <td>pathology request</td>
          <td>Phone number</td>
          <td>Sample status</td>
          <td>Date of Request</td>
          <td>Referral status</td>
          <td>Sample drop off?</td>
        </tr>
      </thead>
      <tbody>
        {encountersList.map((enc) => (
          // foo.results.find(item => item.id === 2)

          <tr className={styles.tr} key={enc.uuid}>
            <TableRow encounterInfo={enc} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportComponent;