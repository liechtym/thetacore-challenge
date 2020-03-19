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



    render() {
        return (
          <div id="main">
            <h1>Experts DB</h1>
            <h2>All experts:</h2>
            {this.state.items.map((item, i) => {
                    return(
                        <p key={i}>{item.name} - <a href={item.website}>website</a></p>
                    )
                  })
            }
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