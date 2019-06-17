import React,{Component} from 'react'
import MaterialTable from "material-table"

class BasicFiltering extends Component {
    render() {
      return (
        <MaterialTable
          title="Find voter in list by Filter"
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]}
          data={[
            { name: 'Rodolfo', surname: 'Villaorduña', birthYear: 1982, birthCity: 35 },
            { name: 'Desirae', surname: 'Freedman', birthYear: 1981, birthCity: 36 },
            { name: 'Danny', surname: 'Roncal', birthYear: 1985, birthCity: 33 },
            { name: 'Jesus', surname: 'Retamozo', birthYear: 1988, birthCity: 30 },
          ]}        
          options={{
            filtering: true
          }}
        />
      )
    }
  }

  export default BasicFiltering