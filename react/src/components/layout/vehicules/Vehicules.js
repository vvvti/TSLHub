import React, { Component, Fragment } from "react";
import "./Vehicules.css";
import { Link } from "react-router-dom";

export class Vehicules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HederList: [],
      BodyList: [],
      FilteredBodyList: [],
      FilterIndex: 0
    };

    this.TableHead = this.TableHead.bind(this);
    this.TableBody = this.TableBody.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.TableFilter = this.TableFilter.bind(this);
  }

  TableHead(props) {
    const listItems = this.state.HederList.map(heder => (
      <th scope="col" key={heder}>
        {heder}
      </th>
    ));

    return (
      <thead className="thead-dark">
        <tr>{listItems}</tr>
      </thead>
    );
  }
  TableBody(props) {
    const listItems = this.state.FilteredBodyList.map(element => (
      <tr>
        {element.map(item => (
          <td scope="col">{item}</td>
        ))}
      </tr>
    ));
    return <tbody>{listItems}</tbody>;
  }

  componentDidMount() {
    const colmnsNames = ["columna1", "Rok", "Model", "Marka"];
    const tableBody = [
      ["Mark1", "Mark2", "Mark3", "Mark4"],
      ["Mark5", "Mark2", "Mark3", "Mark4"],
      ["Mark5", "1998", "Panda", "Fiat"]
    ];

    this.setState({
      HederList: colmnsNames,
      BodyList: tableBody,
      FilteredBodyList: tableBody
    });
  }

  filterTable(e) {
    const text = e.currentTarget.value;
    var table = this.state.BodyList;
    var filteredTable = table.filter(column =>
      column[this.state.FilterIndex].toLowerCase().includes(text.toLowerCase())
    );

    this.setState({ FilteredBodyList: filteredTable });
  }

  handleSelectChange(e) {
    this.setState({ FilterIndex: e.target.value });
  }

  TableFilter(props) {
    const listItems = this.state.HederList.map((heder, index) => (
      <option value={index}>{heder}</option>
    ));

    return (
      <div>
        <form className="form-inline float-left">
          <i className="fa fa-search"></i>
          <input
            className="form-control mb-2 mr-sm-2"
            onInput={this.filterTable.bind(this)}
          />
          <select
            className="form-control mb-2 mr-sm-2"
            onChange={this.handleSelectChange}
          >
            {listItems}
          </select>
        </form>
        <Link
          to="/addvehicule"
          className="btn btn-primary btn-lg active float-right"
        >
          Dodaj Pojazd +
        </Link>
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        <h1>Lista pojazdów</h1>
        <this.TableFilter />

        <table className="table table-striped table-bordered">
          <this.TableHead />
          <this.TableBody />
        </table>
      </Fragment>
    );
  }
}

export default Vehicules;
