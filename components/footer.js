import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function FooterBar() {
  return (
    <>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">ThePeople&trade; is a news network dedicated to bring you the top and most recent news available to the editors. Providing the best of news in topics of interest we strive to be your choice for a news network. Giving our editors the chance to provide the most up to date content and media we hope to gain your trust in providing the media you want.</p>
          </div>
        </div>
        <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="#"> ThePeople&trade;</a>
            </p>
          </div>
        </div>
      </div>
      </div>
      </footer>
    </>
  )
}
