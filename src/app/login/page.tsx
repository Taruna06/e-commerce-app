'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  })

  const onSubmitHandler = () => {
    console.log('form submitted')
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <TextField
        margin='normal'
        required
        fullWidth
        id='Username'
        label='Username'
        autoComplete='off'
        autoFocus
        {...register('username')}
        error={!!errors?.username}
        helperText={
          errors.username && (
            <Typography variant='body2'>
              {errors?.username?.message}{' '}
            </Typography>
          )
        }
      />
      <TextField
        margin='normal'
        required
        fullWidth
        {...register('password')}
        label='Password'
        type={passwordVisibility ? 'text' : 'password'}
        id='password'
        autoComplete='off'
        InputProps={{
          endAdornment: (
            <InputAdornment position='start'>
              <IconButton
                onClick={() => setPasswordVisibility(!passwordVisibility)}
              >
                {!passwordVisibility ? (
                  <VisibilityIcon />
                ) : (
                  <VisibilityOffIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        error={!!errors?.password}
        helperText={
          errors.password && (
            <Typography variant='body2'>
              {errors?.password?.message}{' '}
            </Typography>
          )
        }
      />
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default Login
