import React,{useEffect, useState} from 'react'
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/actionPosts'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import './app.css'

function App() {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getPosts())
  }, [currentId, dispatch])
  return (
    <div>
      <Container maxWidth='lg'>
        <AppBar className="appBar" position='static' color='inherit'>
          <Typography className="heading" variant='h2' align='center'>Memories</Typography>
          <img className="image" src={memories} alt='memories' height='60' />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify='space-between' spacing={3} alignItems='stretch'>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
