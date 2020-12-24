import styles from '../styles/Home.module.css'
import {
    Button, Form
  } from 'reactstrap';
import {useContext, useState} from 'react'
import { UserContext } from '../components/UserProviderContext'
import { useRouter } from 'next/router';
import { firebase } from '../components/firebase'

export default function Editor() {
  let router = useRouter();
  const { user, storeUser } = useContext(UserContext);

  return (
    <>
    
    </>
  )
}
