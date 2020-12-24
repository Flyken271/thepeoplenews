import styles from '../styles/Home.module.css'
import {
    Navbar,
    NavbarBrand,
    Nav,
    FormGroup, Label, Input
  } from 'reactstrap';

  import { Button, Dropdown, Sticky, Header, Image, Modal } from 'semantic-ui-react'
  import { useCollectionData } from 'react-firebase-hooks/firestore'

import {useContext, useState} from 'react'
import { UserContext } from './UserProviderContext'
import firebase from './firebase'
import { useRouter } from 'next/router';

export default function NavbarHead() {
  let router = useRouter();
  let provider = new firebase.auth.GoogleAuthProvider();
  const { user, storeUser } = useContext(UserContext);
  //let editorURL = router.push('/editor/'+firebase.auth().currentUser.displayName);
  const [open, setOpen] = useState(false)

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const editorsRef = firebase.firestore().collection('editors')
  const [editors] = useCollectionData(editorsRef, {idField: 'id'});

  const submitArticle = async (e) => {
    e.preventDefault()
    const docRef = firebase.firestore().collection("articles").doc()
      const res = docRef.set({
        title: title,
        content: content,
        editor: user.displayName,
        image: image,
        timestamp: new Date().toString().replace(',', " "),
        editorImage: firebase.auth().currentUser.photoURL
    })
    }

  const logUserIn = () => {
    firebase.auth().signInWithPopup(provider).then(result => {
      let token = result.credential.accessToken
      storeUser(result.user, result.credential);

    }).catch(error => {
      console.log(error)
    })
  }
  const logUserOut = () => {
    auth.signOut();
  }

  return (
    <>
    <Sticky>
      <div>
        <Navbar className={styles.navbar} style={{backgroundColor: "#242424", color: "#fff"}} expand="md">
          <img className={styles.brandLogo} src="../android-chrome-512x512.png" />
          <NavbarBrand className={styles.navItem} href="/">The People</NavbarBrand>
            <Nav className="mr-auto" navbar>
            </Nav>
            {firebase.auth().currentUser ? (
              <Dropdown button pointing="top right" text={firebase.auth().currentUser.displayName} direction="right">
                <Dropdown.Menu>
                  <Dropdown.Item text={firebase.auth().currentUser.displayName} />
                  <Dropdown.Divider />
                  {
                    editors?.map(editor=>{
                      if(editor.id == firebase.auth().currentUser.uid){
                        return (
                          <Dropdown.Item key={editor.id} icon="newspaper" onClick={()=>{setOpen(true)}} text='New Article' />
                        )
                      }
                    })
                  }
                  <Dropdown.Item icon="arrow left" onClick={()=>{logUserOut()}} text="Logout" />
                </Dropdown.Menu>
              </Dropdown>
              
            ) : (<Button onClick={()=>{logUserIn()}}>Login</Button>)}
        </Navbar>
      </div>
      </Sticky>
      <div>
      <Modal
      className={styles.articleModal1}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          centered={false}
      >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
      <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Article Title" onChange={(e)=>{setTitle(e.target.value)}} />
        </FormGroup>
        <FormGroup>
            <Label for="content">Content</Label>
            <Input type="textarea" name="text" id="content" placeholder="Article Content" onChange={(e)=>{setContent(e.target.value)}} />
        </FormGroup>
        <FormGroup>
            <Label for="image">Banner</Label>
            <Input type="text" name="text" id="image" placeholder="Article Banner" onChange={(e)=>{setImage(e.target.value)}} />
        </FormGroup>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          onClick={(e) => {setOpen(false); submitArticle(e)}}
          positive
        >Submit</Button>
      </Modal.Actions>
    </Modal>
    </div>
    </>
  )
}
