
import React from 'react'


class Temp extends React.Component {
  constructor(props) {
    super(props)
    this.state = [
      {
        title: 'The Matrix',
        rating: 7.5,
        category: 'Action'

      },
      {
        title: 'Focus',
        rating: 6.9,
        category: 'Comedy'

      },
      {
        title: 'The Lazarus Effect',
        rating: 6.4,
        category: 'Thriller'

      },
      {
        title: 'Everly',
        rating: 5.0,
        category: 'Action'

      },
      {
        title: 'Maps to the Stars',
        rating: 7.5,
        category: 'Drama'

      }
    ]
    this.state = {
      tittle: '',
      rating: '',
      category: '',
      filterData: [],
      event: false,
      data: [],
      open: false,
      selectedOption: null
    }

  }


  filtermovie=(e)=> {
     
    let updatedFilterData = this.state.filtermovie(val => val.title.includes(e.target.value))
    console.log("filter data.....", updatedFilterData);

    this.setState(
      {
        tittle: e.target.value,
        filterData: updatedFilterData,
        event: true
      }
    )

  }
  filterrating=(e)=> {
    let updatedFilterData = this.state.filterrating(val => Math.round(val.rating) === (e.target.value))
    console.log("filter data.....", updatedFilterData);

    this.setState(
      {
        tittle: true,
        filterData: updatedFilterData,
        event: true
      }
    )

  }
  filtergenre=(e)=> {
    let updatedFilterData = this.state.filtergenre(val => val.category === e.target.value)
    console.log("gener.....", { e });
    console.log("filter data.....", updatedFilterData);

    this.setState(
      {
        tittle: true,
        filterData: updatedFilterData,
        event: true
      }
    )

  }


  render() {
    let result = null

    if (this.state.filterData.length > 0 && this.state.tittle) {

      console.log('this.state.filterData', this.state.filterData);
      result = this.state.filterData.map((value) => {
        return (
          <tr>


            <td>
              {value.title}
            </td>
            <td>

              {value.rating}


            </td>
            <td>
              {value.category}
            </td>

          </tr>
        )
      })

    }

    return (
      <>
        <div>
          <form>
            <table>
              <thead>
                <tr>
                  <th> <label htmlFor="Movies">Movies</label></th>

                  <th>  <label htmlFor="Rating">Rating</label> </th>

                  <th> <label htmlFor="Genres">Geners</label></th>


                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <input type="text" placeholder="Enter Movie Name" onChange={(e) => this.filtermovie(e)}></input></td>
                  <td>
                    <select name="rating" onChange={(e) => this.filterrating(e)}>
                      <option value="0" selected="selected">Select Rating</option>
                      <option value="1">*</option>
                      <option value="2">* * </option>
                      <option value="3">* * *</option>
                      <option value="4">* * * *  </option>
                      <option value="5">* * * * *  </option>
                      <option value="6">* * * * * *  </option>
                      <option value="7">* * * * * * *  </option>
                      <option value="8">* * * * * * * *  </option>
                      <option value="9">* * * * * * * * *  </option>
                      <option value="10">* * * * * * * * * * </option>
                    </select>
                  </td>
                  <td>
                    <select name="Genres" onChange={(e) => this.filtergenre(e)}>
                      <option value="" selected="selected">Genres</option>
                      <option value="Action">Action</option>
                      <option value="Comedy">Comedy</option>
                      <option value="Thriller">Thriller</option>
                      <option value="Drama">Drama</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>



            {this.state.filterData.length > 0 ? (
              <div className="divScroll">
                <table class="center" border="1"  >
                  <tr>


                    <th>
                      Name
                    </th>
                    <th>
                      Rating
                    </th>
                    <th>
                      Genres
                    </th>


                  </tr>

                  {result}
                </table>
              </div>
            ) :
              this.state.event ?
                <div>
                  No record found
                </div>
                :
                null
            }
          </form>

        </div>
      </>
    );
  }
}

export default Temp;
