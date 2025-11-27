import { useState } from 'react'
import Header from './components/header'
import InputElement from './components/InputElement'
import { Box, Button, Grid } from '@mui/material'

function App() {
  const [firstWord, setFirstWord] = useState('')
  const [secondWord, setSecondWord] = useState('')
  const [result, setResult] = useState(null)

  function isAnagram(s, t) {
    if (s.length !== t.length) return false

    const counterS = {}
    const counterT = {}

    for (let c of s) {
      counterS[c] = (counterS[c] || 0) + 1
    }
    for (let c of t) {
      counterT[c] = (counterT[c] || 0) + 1
    }

    for (let key in counterS) {
      if (counterS[key] !== counterT[key]) return false
    }

    return true
  }

  const onCheck = () => {
    setResult(isAnagram(firstWord, secondWord))
  }



  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-600">
      <Box className="w-full max-w-xl p-6  shadow-xl rounded-xl bg-emerald-50">
        <Header />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <InputElement
              label="First Word"
              value={firstWord}
              onChange={setFirstWord}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <InputElement
              label="Second Word"
              value={secondWord}
              onChange={setSecondWord}
            />
          </Grid>
        </Grid>

        {result !== null && (
            <div className='flex justify-center'>
              <p className="text-center text-lg mt-3">
                {result
                  ? "Anagram!"
                  : "Not Anagram!"}
              </p>
            </div>
            
          )}
       
        <div className="flex items-center justify-center mt-4">
          <Button variant="contained" onClick={onCheck} >
            Check
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default App
