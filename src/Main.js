import React, { Component } from 'react';
import Search from 'react-search'

const BASE = 'http://127.0.0.1:8081/endpoints';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: []
        }

        this.fetchExpertData().then((res) => {
            res.map((item) => {
                item.value = item.name;
                return item;
            })
            console.log(res)
            this.setState({items : res})
        })


    }

   fetchExpertData() {
        return fetch(`${BASE}/experts`).then((res) => {
            return res.json()
        }).then((res_data) => {
            return res_data;
        })
    }

    submitExpertData(name, website) {
        const body = {name: name, website: website}
        return fetch(`${BASE}/experts`, {method: 'POST', body: JSON.stringify(body)}).then((res) => {
            return res.json()
        }).then((res_data) => {
            return res_data;
        })
    }


    handleSubmitExpert(e) {
        const name_input = document.getElementById('ExpertName').value;
        const website_input = document.getElementById('ExpertWebsite').value;
        this.submitExpertData(name_input, website_input).then((res) => {
            this.setState({items : res})
        })
    }


    render() {
        return (
          <div id="main">
            <h2>Experts DB</h2>
            <hr />
            <h3>All experts:</h3>
            {this.state.items.map((item, i) => {
                    return(
                        <p key={i}>{item.name} - <a href={item.website}>website</a></p>
                    )
                  })
            } 


            <h3>Add expert</h3>
            <div>
                <label for="ExpertName">Name: </label>
                <input type="text" id="ExpertName"></input>
            </div>
            <div>
                <label for="ExpertWebsite">Website: </label>
                <input type="text" id="ExpertWebsite"></input>
            </div> 
            <button onClick={this.handleSubmitExpert.bind(this)}>Add</button>
            {/* <h2>Search an expert</h2>
            <div className="search-container">
                <Search items={this.state.items}
                            placeholder='Search here'
                            maxSelected={3}
                            multiple={true} />
            </div> */}
{/* 
            <h2>Add an expert</h2>
            <div className="add-container">
            </div> */}
          </div>
        )
    }
}

export default Main;