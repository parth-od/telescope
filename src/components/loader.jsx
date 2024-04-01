/* eslint-disable react/prop-types */
import { CircularProgress, Typography } from '@mui/material'

function Loader({ description }) {
  return (
    <div className="flex flex-row items-center my-2"><CircularProgress size={20} className="mr-2" /> <Typography variant='body2'>{description}</Typography></div>
  )
}

export default Loader