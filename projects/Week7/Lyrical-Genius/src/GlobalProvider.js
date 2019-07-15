import axios from 'axios'
import React, {Component} from 'react'
const {Consumer, Provider } = React.createContext()


class GlobalProvider extends Component  {
    constructor (props) {
        super(props)
        this.state = {
            artist: '',
            song: '',
            lyric: '',
            counter: 0,
            savedLyrics: [],
            noLyric: ''
        }
    
        this.intervalID = null
        

    }
    
    
    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
           lyric: ''
        })

          axios.get(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.song}`).then(response => {
              console.log(response.data)

             
            if(response.data.lyrics === ''){
                  this.setState({
                    lyric: 'No Results found',
                    // noLyric: 'Make sure the song is spelled correctly. Some songs featuring other artists might not be available.'
                  })
                
            }else {
                let newText = response.data.lyrics.split('\n').map((item, i) => {
                    return <p key={i}>{item}</p>;
                });
            // const normalLyrics = response.data.lyrics
            // let updatedLyrics = normalLyrics.replace()
                this.setState({
                    lyric: newText
                }) 
            
            }

        })
            

          this.intervalID = setInterval(this.checkReady, 1000)
    }


        checkReady = () => {
            if(this.state.lyric === ''){
                this.setState({
                    lyric: 'Requesting Lyrics...'
                })
            } 
                console.log(this.state.lyric)
            if (this.state.lyric !== 'Requesting Lyrics...' || this.state.counter === 17){
                clearInterval(this.intervalID)
                    if (this.state.lyric === 'Requesting Lyrics...')
                    this.setState({
                    lyric: 'No Results found',
                    counter: 0,
                    
                  })
                  else{
                      this.setState({
                        counter: 0
                    })
                }
            }
            this.setState((prevState) => {
                return {counter: prevState.counter += 1}
            })
            console.log(this.state.counter)
        }

      handleChange = (e) => {
          
        const {value, name} = e.target
        this.setState({
                [name]: value 
        }) 
      }

      handleSave = () => {
        this.setState(prevState => {
            return{
                savedLyric: [...prevState.lyric, prevState.saveLyric]
            }
        })
      }
    

        
     

       

        render(){
        

        return(
            <Provider value={{
                ...this.state, 
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </Provider>
              
        )
    }

}

export default GlobalProvider


export const withProvider = C => props => (
    <Consumer>
      {value => <C {...value}{...props}/>}
    </Consumer>
  )

//   